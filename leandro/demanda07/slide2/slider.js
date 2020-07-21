
/*
 * Edited jQuery UI Slider
 *
 * Depends:
 *	ui.core.js
 */

(function($) {

    $.widget('ui.slider', $.ui.mouse, {
        getter: 'value values',
        version: '@VERSION',
        eventPrefix: 'slide',
        options: {
            animate: false,
            delay: 0,
            distance: 0,
            handles: null,
            activeHandle: 0,
            max: 100,
            min: 0,
            orientation: 'horizontal',
            mainClass: 'mainClass',
            range: false,
            typeNames: null,
            showTypeNames: false,
            type: 'number',
            ranges: null,
            step: 1,
            ticks: {
                // use default values
                // main tick is 1
                tickMain : 1,
                // side tick is 0.5
                tickSide : 0.5,
                // show main label
                tickShowLabelMain : true,
                // don't show side label
                tickShowLabelSide : false
            },
            value: 0,
            values: null,
            tooltips: null
        },
        _strpad: function(inputString, chars, padString) {
            var result = padString + inputString;
            var remFromLeft = result.length - chars;
            return result.substr(remFromLeft);
        },        
        // get time from float (e.g. 22.5 => 22:30)
        _getTimeStringFromFloat: function(time) {
            time = parseFloat(time);
            // hours from the float
            var hours = Math.floor(time);
            // minutes from the float
            var minutes = (time - hours) * 60;
            // start time as string
            return (hours + ':' + this._strpad(minutes, 2, '0'));
        },

        _init: function() {

            var self = this, o = this.options;
            this._keySliding = false;
            this._handleIndex = null;
            this._detectOrientation();
            this._mouseInit();
            
            // add slider wrapper
            //$('<div class="wrapper"></div>').appendTo(this.element);
            
            // add tick wrapper
            $('<div class="ticks"></div>').appendTo(this.element);

            // TODO
            // redo classes
            this.element
            .addClass('ui-slider'
                + ' ui-slider-' + this.orientation
                + ' ' + o.mainClass
                + ' ui-widget'
                + ' ui-widget-content'
                + ' ui-corner-all');

            // only when one range present
            /*this.range = $([]);
            if (o.range) {
                // add range wrapper
                this.range = $('<div></div>');
                if (o.range === true) {
                    if (!o.values) o.values = [this._valueMin(), this._valueMin()];
                    if (o.values.length && o.values.length < 2) {
                        o.values = [o.values[0], o.values[0]];
                    }
                }
                // append to slider
                this.range
                .appendTo(this.element)
                .addClass("ui-slider-range");

                if (o.range == "min" || o.range == "max") {
                    this.range.addClass("ui-slider-range-" + o.range);
                }

                // note: this isn't the most fittingly semantic framework class for this element,
                // but worked best visually with a variety of themes
                this.range.addClass("ui-widget-header");
            }*/
            /*
            // add handles for present values
            if (o.values && o.values.length) {
                o.ranges = new Array();
                while ($(".ui-slider-handle", this.element).length < o.values.length) {
                    $('<a href="#"></a>')
                    .appendTo(this.element)
                    .addClass("ui-slider-handle");
                    var range = $('<div></div>');
                    range
                    .appendTo(this.element)
                    .addClass("ui-slider-range").addClass("ui-widget-header");
                    o.ranges.push(range);
                }
            }
            **/
           
           

            // add base handler
            /*
            if ($(".ui-slider-handle", this.element).length == 0)
                $('<a href="#"></a>')
                .appendTo(this.element)
                .addClass("ui-slider-handle");
            */
            // create handles
            this._refreshHandles();
            
            // create ticks if option is not disabled
            if (o.ticks !== false) {
                this._createTicks();
            }
            // call refresh value
            this._refreshValue();
            
            this._activateHandle(o.activeHandle);

        },
        
        // _setOptions is called with a hash of all options that are changing
        // always refresh when changing options
        _setOptions: function() {
            // _super and _superApply handle keeping the right this-context
            this._superApply(arguments);
        //this._refresh();
        },
        // _setOption is called for each individual option that is changing
        _setOption: function(key, value) {
            this._super(key, value);
        },
        
        // create ticks
        _createTicks: function() {
            
            var o = this.options;
            // minimum
            var min = this._valueMin();
            // maximum
            var max = this._valueMax();
            // count spacing
            var spacing =  100 / (max - min);
            
            var tickWapper = $(this.element).find('div.ticks');
            
            // create ticks
            for (var i = min; i <= max; i = i+o.ticks.tickSide) {
                // whole number
                if ((i / o.ticks.tickMain) % 1 === 0) {
                    $('<span class="slider-tick-mark-main"></span>').css('left', (spacing * i) +  '%').appendTo(tickWapper);
                    if (o.ticks.tickShowLabelMain)
                        $('<span class="slider-tick-mark-main-text">' + i + '</span>').css('left', (spacing * i) +  '%').appendTo(tickWapper);
                }
                else {
                    $('<span class="slider-tick-mark-side"></span>').css('left', (spacing * i) +  '%').appendTo(tickWapper);
                    if (o.ticks.tickShowLabelSide)
                        $('<span class="slider-tick-mark-side-text">' + i + '</span>').css('left', (spacing * i) +  '%').appendTo(tickWapper);
                }
                    
            }
        },
        
        // add handle
        addHandle: function(handle) {
            var self = this, o = this.options;
            // add handle to handle list
            o.handles.push(handle);
            // refresh handles
            this._refreshHandles();
            // refresh values
            this._refreshValue();
        },
        // refresh handles
        _refreshHandles: function() {
            var self = this, o = this.options;
            // remove all handle elements
            $('.ui-slider-handle', this.element).remove();
            // remove all range elements
            $('.ui-slider-range', this.element).remove();
            
            // add handles for present values
            if (o.handles && o.handles.length) {                
                // store this element
                var elem = self.element;
                
                // sort the handles by value
                o.handles.sort(function(a, b) {
                    return a.value - b.value;
                });
                o.values = [];
                
                // go through all handles
                $.each(o.handles, function(i) {
                    o.values.push(o.handles[i].value);
                    
                    // create handle element
                    var handle = $('<a href="#"></a>');
                    
                    // append with classes
                    handle.appendTo(elem)
                    .addClass('ui-slider-handle')
                    .attr('data-id', i)
                    .attr('data-value', o.handles[i].value)
                    .addClass('ui-state-default'
                        + ' ui-corner-all');
                    
                    // if handle type was set
                    if (o.handles[i].type !== null) {                        
                        handle.attr('data-type', o.handles[i].type)
                        .addClass(o.handles[i].type);
                    }
                    
                    // create ranges for all handles
                    if (i < o.handles.length-1) {
                        // create range element
                        var range = $('<div></div>');
                        // append with classes
                        range
                        .appendTo(elem)
                        .addClass('ui-slider-range').addClass('ui-widget-header');
                        
                        // if handle type was set
                        if (o.handles[i].type !== null) {                        
                            range.attr('data-type', o.handles[i].type)
                            .addClass(o.handles[i].type);
                        }
                    }
                });
            }
            

            this.handles = $('a.ui-slider-handle', this.element);

            this.handle = this.handles.eq(0);

            this.handles.filter('a')
            .click(function(event) {
                event.preventDefault();
                // activate handle
                self._activateHandle($(this).attr('data-id'));
                
            //$(this).addClass('ui-state-active');
            })
            .hover(function() {
                $(this).addClass('ui-state-hover');
            }, function() {
                $(this).removeClass('ui-state-hover');
            })
            .focus(function() {
                $('.ui-slider .ui-state-focus', this.element).removeClass('ui-state-focus');
                $(this).addClass('ui-state-focus');
            })
            .blur(function() {
                $(this).removeClass('ui-state-focus');
            });

            this.handles.each(function(i) {
                $(this).data('index.ui-slider-handle', i);
            });
            if (this.options.tooltips) {
                this.handles.append('<span class="ui-slider-tooltip ui-widget-content ui-corner-all"></span>');
            }

            // keyboard control
            this.handles.keydown(function(event) {
                var ret = true;

                var index = $(this).data('index.ui-slider-handle');

                if (self.options.disabled)
                    return;

                switch (event.keyCode) {
                    case $.ui.keyCode.HOME:
                    case $.ui.keyCode.END:
                    case $.ui.keyCode.UP:
                    case $.ui.keyCode.RIGHT:
                    case $.ui.keyCode.DOWN:
                    case $.ui.keyCode.LEFT:
                        ret = false;
                        if (!self._keySliding) {
                            self._keySliding = true;
                            $(this).addClass('ui-state-active');
                            self._start(event, index);
                        }
                        break;
                }

                var curVal, newVal, step = self._step();
                if (self.options.values && self.options.values.length) {
                    curVal = newVal = self.values(index);
                } else {
                    curVal = newVal = self.value();
                }

                switch (event.keyCode) {
                    case $.ui.keyCode.HOME:
                        newVal = self._valueMin();
                        break;
                    case $.ui.keyCode.END:
                        newVal = self._valueMax();
                        break;
                    case $.ui.keyCode.UP:
                    case $.ui.keyCode.RIGHT:
                        if(curVal == self._valueMax()) return;
                        newVal = curVal + step;
                        break;
                    case $.ui.keyCode.DOWN:
                    case $.ui.keyCode.LEFT:
                        if(curVal == self._valueMin()) return;
                        newVal = curVal - step;
                        break;
                }

                self._slide(event, index, newVal);

                return ret;

            }).keyup(function(event) {

                var index = $(this).data('index.ui-slider-handle');

                if (self._keySliding) {
                    self._stop(event, index);
                    self._change(event, index);
                    self._keySliding = false;
                    $(this).removeClass('ui-state-active');
                }

            });
        },
        // activate handle
        _activateHandle: function(index) {
            
            // all handles
            this.handles = $('a.ui-slider-handle', this.element);
            // remove active handle indicator
            $(this.handles).removeClass('ui-state-active');
            
            // get the activated handle
            var handle = $(this.handles).eq(index);
            // add class
            handle.addClass('ui-state-active').focus();
            // get value
            var value = handle.attr('data-value');
            // get type
            var type = handle.attr('data-type');
            
            // set active handle
            this.options.activeHandle = index;
            
            // trigger the handleActivated event
            this._trigger('handleActivated', null, {
                index: index, 
                value: value, 
                type: type
            });
        },
        
        // edit handle, change handle type
        editHandle: function(index, type) {
            // change handle type in options
            this.options.handles[index].type = type;
            // refresh handles
            this._refreshHandles();
            // refresh values
            this._refreshValue();
            // activate handle
            this._activateHandle(this.options.activeHandle);
        },
        
        // remove handle
        removeHandle: function(index) {
            // remove from options
            this.options.handles.splice(index, 1);
            // from values
            this.options.values.splice(index, 1);
            // remove element
            this.handles.eq(index).remove();
            // refresh handles
            this._refreshHandles();
            // refresh values
            this._refreshValue();
        },

        destroy: function() {

            this.handles.remove();
            this.range.remove();

            this.element
            .removeClass('ui-slider'
                + ' ui-slider-horizontal'
                + ' ui-slider-vertical'
                + ' ui-slider-disabled'
                + ' ui-widget'
                + ' ui-widget-content'
                + ' ui-corner-all')
            .removeData('slider')
            .unbind('.slider');

            this._mouseDestroy();

        },

        _mouseCapture: function(event) {

            var o = this.options;

            if (o.disabled)
                return false;

            this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            };
            this.elementOffset = this.element.offset();

            var position = {
                x: event.pageX, 
                y: event.pageY
            };
            var normValue = this._normValueFromMouse(position);

            var distance = this._valueMax() - this._valueMin() + 1, closestHandle;
            var self = this, index;
            
            // if there is an active handle, set that
            if (self._handleIndex !== null)
                closestHandle = $(self.handles[self._handleIndex]);
            else {            
                self.handles.each(function(i) {
                    var thisDistance = Math.abs(normValue - self.values(i));
                    if (distance > thisDistance) {
                        distance = thisDistance;
                        closestHandle = $(this);
                        index = i;
                    }
                });
            }

            // workaround for bug #3736 (if both handles of a range are at 0,
            // the first is always used as the one with least distance,
            // and moving it is obviously prevented by preventing negative ranges)
            if(o.range === true && this.values(1) === o.min) {
                closestHandle = $(this.handles[++index]);
            }

            this._start(event, index);

            self._handleIndex = index;
            
            this._activateHandle($(closestHandle).attr('data-id'));
            
            // remove active class for all handles
            /*this.handles.removeClass('ui-state-active');
            // add to closest handle
            closestHandle
            .addClass('ui-state-active')
            .focus();*/
		
            var offset = closestHandle.offset();
            var mouseOverHandle = !$(event.target).parents().andSelf().is('.ui-slider-handle');
            this._clickOffset = mouseOverHandle ? {
                left: 0, 
                top: 0
            } : {
                left: event.pageX - offset.left - (closestHandle.width() / 2),
                top: event.pageY - offset.top
                - (closestHandle.height() / 2)
                - (parseInt(closestHandle.css('borderTopWidth'),10) || 0)
                - (parseInt(closestHandle.css('borderBottomWidth'),10) || 0)
                + (parseInt(closestHandle.css('marginTop'),10) || 0)
            };

            normValue = this._normValueFromMouse(position);
            this._slide(event, index, normValue);
            return true;

        },

        _mouseStart: function(event) {
            return true;
        },

        // mouse drag handler
        _mouseDrag: function(event) {

            var position = {
                x: event.pageX, 
                y: event.pageY
            };
            var normValue = this._normValueFromMouse(position);
		
            this._slide(event, this._handleIndex, normValue);

            return false;

        },

        // mouse stop drag handler
        _mouseStop: function(event) {

            //this.handles.removeClass('ui-state-active');
            this._stop(event, this._handleIndex);
            this._change(event, this._handleIndex);
            this._handleIndex = null;
            this._clickOffset = null;

            return false;

        },
	
        _detectOrientation: function() {
            this.orientation = this.options.orientation == 'vertical' ? 'vertical' : 'horizontal';
        },

        _normValueFromMouse: function(position) {

            var pixelTotal, pixelMouse;
            if ('horizontal' == this.orientation) {
                pixelTotal = this.elementSize.width;
                pixelMouse = position.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0);
            } else {
                pixelTotal = this.elementSize.height;
                pixelMouse = position.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0);
            }

            var percentMouse = (pixelMouse / pixelTotal);
            if (percentMouse > 1) percentMouse = 1;
            if (percentMouse < 0) percentMouse = 0;
            if ('vertical' == this.orientation)
                percentMouse = 1 - percentMouse;

            var valueTotal = this._valueMax() - this._valueMin(),
            valueMouse = percentMouse * valueTotal,
            valueMouseModStep = valueMouse % this.options.step,
            normValue = this._valueMin() + valueMouse - valueMouseModStep;

            if (valueMouseModStep > (this.options.step / 2))
                normValue += this.options.step;

            // Since JavaScript has problems with large floats, round
            // the final value to 5 digits after the decimal point (see #4124)
            return parseFloat(normValue.toFixed(5));

        },

        _start: function(event, index) {
            var uiHash = {
                handle: this.handles[index],
                value: this.value()
            };
            if (this.options.values && this.options.values.length) {
                uiHash.value = this.values(index)
                uiHash.values = this.values()
            }
            this._trigger('start', event, uiHash);
        },

        _slide: function(event, index, newVal) {

            var handle = this.handles[index];

            if (this.options.values && this.options.values.length) {
			
                var oldVal = this.values(index);

                if (oldVal < newVal && index < this.options.values.length - 1 && newVal >= this.options.values[index+1]) 
                    newVal = this.options.values[index+1] - this.options.step;

                if (oldVal > newVal && index > 0 && newVal <= this.options.values[index-1]) 
                    newVal = this.options.values[index-1] + this.options.step;

                if (newVal != oldVal) {
                    var newValues = this.values();
                    newValues[index] = newVal;
                    // A slide can be canceled by returning false from the slide callback
                    var allowed = this._trigger('slide', event, {
                        handle: this.handles[index],
                        value: newVal,
                        values: newValues
                    });
                    if (allowed !== false) {
                        this.values(index, newVal, ( event.type == 'mousedown' && this.options.animate ), true);
                    }
                }

            } else {

                if (newVal != this.value()) {
                    // A slide can be canceled by returning false from the slide callback
                    var allowed = this._trigger('slide', event, {
                        handle: this.handles[index],
                        value: newVal
                    });
                    if (allowed !== false) {
                        this._setData('value', newVal, ( event.type == 'mousedown' && this.options.animate ));
                    }
					
                }

            }

        },

        _stop: function(event, index) {
            var uiHash = {
                handle: this.handles[index],
                value: this.value()
            };
            if (this.options.values && this.options.values.length) {
                uiHash.value = this.values(index)
                uiHash.values = this.values()
            }
            this._trigger('stop', event, uiHash);
        },

        _change: function(event, index) {
            var uiHash = {
                handle: this.handles[index],
                value: this.value()
            };
            if (this.options.values && this.options.values.length) {
                uiHash.value = this.values(index)
                uiHash.values = this.values()
            }
            this._trigger('change', event, uiHash);
        },

        value: function(newValue) {

            if (arguments.length) {
                this._setData('value', newValue);
                this._change(null, 0);
            }

            return this._value();

        },

        values: function(index, newValue, animated, noPropagation) {

            if (arguments.length > 1) {
                this.options.values[index] = newValue;
                this._refreshValue(animated);
                if(!noPropagation) this._change(null, index);
            }

            if (arguments.length) {
                if (this.options.values && this.options.values.length) {
                    return this._values(index);
                } else {
                    return this.value();
                }
            } else {
                return this._values();
            }

        },

        _setData: function(key, value, animated) {

            $.widget.prototype._setData.apply(this, arguments);

            switch (key) {
                case 'orientation':

                    this._detectOrientation();
				
                    this.element
                    .removeClass('ui-slider-horizontal ui-slider-vertical')
                    .addClass('ui-slider-' + this.orientation);
                    this._refreshValue(animated);
                    break;
                case 'value':
                    this._refreshValue(animated);
                    break;
            }

        },

        _step: function() {
            var step = this.options.step;
            return step;
        },

        _value: function() {

            var val = this.options.value;
            if (val < this._valueMin()) val = this._valueMin();
            if (val > this._valueMax()) val = this._valueMax();

            return val;

        },

        _values: function(index) {

            if (arguments.length) {
                var val = this.options.values[index];
                if (val < this._valueMin()) val = this._valueMin();
                if (val > this._valueMax()) val = this._valueMax();

                return val;
            } else {
                return this.options.values;
            }

        },

        _valueMin: function() {
            var valueMin = this.options.min;
            return valueMin;
        },

        _valueMax: function() {
            var valueMax = this.options.max;
            return valueMax;
        },

        // refresh value function
        _refreshValue: function(animate) {
            var oRange = this.options.range, o = this.options, self = this;
            var numOptions = this.options.values ? this.options.values.length : 0;

            if (numOptions) {
                // minimum
                var min = this._valueMin();
                // maximum
                var max = this._valueMax();
                // whole range
                var diff = this._valueMax() - this._valueMin();
                /*if (oRange === true) {
                    var firstHandlePercent = (this.values(0) - min) / diff * 100;
                    var rangePercent = (this.values(numOptions-1) - min) / diff * 100 - firstHandlePercent;
                    if (self.orientation == 'horizontal') {
                        self.range.stop(1,1)[animate ? 'animate' : 'css']({
                            left: firstHandlePercent + '%', 
                            width: rangePercent + '%'
                        }, o.animate);
                    } else {
                        self.range.stop(1,1)[animate ? 'animate' : 'css']({
                            bottom: firstHandlePercent + '%', 
                            height: rangePercent + '%'
                        }, o.animate);
                    }
                }*/
                var allHandles = this.handles;
                // all handles
                this.handles.each(function(i, j) {
                    
                    var valPercent = (self.values(i) - min) / diff * 100;
                    // value of handler in percent
                    //var valPercent = ($(this).attr('data-value') - min) / diff * 100;
                    var _set = {};                    
                    _set[self.orientation == 'horizontal' ? 'left' : 'bottom'] = valPercent + '%';
                    $(this).stop(1,1)[animate ? 'animate' : 'css'](_set, o.animate);
                                
                    // add attribute with value
                    $(this).attr('data-value', self.values(i));
                    o.handles[i].value = self.values(i);
                    
                    // show tooltip
                    if (o.tooltips) {
                        //$('.ui-slider-tooltip', this).text(o.tooltips[self.values(i)]);
                        var text = '';
                        // if not last show range to next
                        if (i < allHandles.length-1) {
                            if (o.showTypeNames) {
                                text += o.typeNames[$(this).attr('data-type')];
                            }
                            if (o.type == 'number')
                                text += ' '+$(this).attr('data-value')+' - '+allHandles.eq(i+1).attr('data-value');
                            else if (o.type == 'time')
                                text += ' '+self._getTimeStringFromFloat($(this).attr('data-value'))+' - '+self._getTimeStringFromFloat(allHandles.eq(i+1).attr('data-value'));
                        }
                        // if last show range from previous
                        else {
                            if (o.showTypeNames) {
                                text += o.typeNames[$(this).attr('data-type')];
                            }
                            if (o.type == 'number')
                                text += ' '+$(this).attr('data-value')+' - '+o.max;
                            if (o.type == 'time')
                                text += ' '+self._getTimeStringFromFloat($(this).attr('data-value')) + ' - 0:00';
                        }
                        $('.ui-slider-tooltip', this).text(text);
                    //$('.ui-slider-tooltip', this).text(self._getTimeStringFromFloat(allHandles.eq(i-1).attr('data-value'))+' - '+self._getTimeStringFromFloat($(this).attr('data-value')));
                    /*
                        if (i < allHandles.length-1)
                            $('.ui-slider-tooltip', this).text(self.values(i)+' - '+self.values(i+1));
                        // if last show range from previous
                        else
                            $('.ui-slider-tooltip', this).text(self.values(i-1)+' - '+self.values(i));
                         */
                    }
                });
                
                // get all range elements
                var ranges = $('.ui-slider-range', this.element);
                // go through all ranges
                ranges.each(function(i, j) {
                    // get value of this handler
                    var valPercent = (self.values(i) - min) / diff * 100;
                    // get value of nex handler
                    // if not last, get next
                    if (i < ranges.length)
                        var nextPercent = (self.values(i+1) - min) / diff * 100;
                    // else 100%
                    else
                        var nextPercent = 100;
                    // get range width
                    var rangePercent = (nextPercent - valPercent);
                    // set style by orientation
                    if (self.orientation == 'horizontal') {
                        $(this).css({
                            left: valPercent + '%', 
                            width: rangePercent + '%'
                        });
                    } else {
                        $(this).css({
                            bottom: valPercent + '%', 
                            height: rangePercent + '%'
                        });
                    }
                /*
                    $(this).removeClass('minimum');
                    $(this).removeClass('saving');
                    $(this).removeClass('comfort');
                    $(this).addClass($('.ui-slider-handle:eq('+i+')', self.element).attr('data-temperature'));    */                
                    
                });
            } else {
                var value = this.value(),
                valueMin = this._valueMin(),
                valueMax = this._valueMax(),
                valPercent = valueMax != valueMin
                ? (value - valueMin) / (valueMax - valueMin) * 100
                : 0;
                var _set = {};                
                _set[self.orientation == 'horizontal' ? 'left' : 'bottom'] = valPercent + '%';
                this.handle.stop(1,1)[animate ? 'animate' : 'css'](_set, o.animate).find('.ui-slider-tooltip').text(o.tooltips ? o.tooltips[self.value()] : '');

                (oRange == 'min') && (this.orientation == 'horizontal') && this.range.stop(1,1)[animate ? 'animate' : 'css']({
                    width: valPercent + '%'
                }, o.animate);
                (oRange == 'max') && (this.orientation == 'horizontal') && this.range[animate ? 'animate' : 'css']({
                    width: (100 - valPercent) + '%'
                }, {
                    queue: false, 
                    duration: o.animate
                });
                (oRange == 'min') && (this.orientation == 'vertical') && this.range.stop(1,1)[animate ? 'animate' : 'css']({
                    height: valPercent + '%'
                }, o.animate);
                (oRange == 'max') && (this.orientation == 'vertical') && this.range[animate ? 'animate' : 'css']({
                    height: (100 - valPercent) + '%'
                }, {
                    queue: false, 
                    duration: o.animate
                });
            }

        }
	
    });

})(jQuery);

