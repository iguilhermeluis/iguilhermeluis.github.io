
gdjs.evtsExt__Flash__Flash = gdjs.evtsExt__Flash__Flash || {};

/**
 * Behavior generated from Flash (blink)
 * @class Flash
 * @extends gdjs.RuntimeBehavior
 * @constructor
 */
gdjs.evtsExt__Flash__Flash.Flash = function(runtimeScene, behaviorData, owner)
{
    gdjs.RuntimeBehavior.call(this, runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._behaviorData = {};
    
    this._behaviorData.HalfPeriodTime = behaviorData.HalfPeriodTime !== undefined ? behaviorData.HalfPeriodTime : Number("0.1") || 0;
    this._behaviorData.IsFlashing = false;
    this._behaviorData.FlashDuration = Number("0") || 0;
};

gdjs.evtsExt__Flash__Flash.Flash.prototype = Object.create( gdjs.RuntimeBehavior.prototype );
gdjs.registerBehavior("Flash::Flash", gdjs.evtsExt__Flash__Flash.Flash);

// Properties:
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects3= [];

gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.eventsList0x701ec4 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2.createFrom(gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1);


gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2[i].timerElapsedTime("FlashTimer", (gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHalfPeriodTime())) ) {
        gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2[i].isVisible() ) {
        gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}}
if (gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2[i].resetTimer("FlashTimer");
}
}}

}


{

gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2.createFrom(gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1);


gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2[i].timerElapsedTime("FlashTimer", (gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHalfPeriodTime())) ) {
        gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2[i].isVisible()) ) {
        gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}}
if (gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2[i].resetTimer("FlashTimer");
}
}}

}


{

/* Reuse gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1 */

gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1[i].timerElapsedTime("FlashDurationTimer", (gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFlashDuration())) ) {
        gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Stop((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


}; //End of gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.eventsList0x701ec4
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.eventsList0x5b7328 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsFlashing() ) {
        gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.eventsList0x701ec4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


}; //End of gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.eventsList0x5b7328


gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    if (objectName === "Object") { return thisObjectList; }    var objectsList = eventsFunctionContext._objectsMap[objectName];
    return objectsList ? gdjs.objectsListsToArray(objectsList) : [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
    return "";
  }
};

gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.eventsList0x5b7328(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext = {};
gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1= [];
gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects2= [];

gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.eventsList0x5b7328 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.conditionTrue_1 = gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.condition0IsTrue_0;
gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("FlashDuration")) || 0 : 0) > 0);
}
}if (gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.condition0IsTrue_0.val) {
gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1[i].resetTimer("FlashDurationTimer");
}
}{for(var i = 0, len = gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFlashDuration((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("FlashDuration")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsFlashing(true);
}
}}

}


}; //End of gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.eventsList0x5b7328


gdjs.evtsExt__Flash__Flash.Flash.prototype.Flash = function(FlashDuration, parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    if (objectName === "Object") { return thisObjectList; }    var objectsList = eventsFunctionContext._objectsMap[objectName];
    return objectsList ? gdjs.objectsListsToArray(objectsList) : [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
if (argName === "FlashDuration") return FlashDuration;
    return "";
  }
};

gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.eventsList0x5b7328(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext = {};
gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.GDObjectObjects1= [];
gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.GDObjectObjects2= [];

gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.eventsList0x5b7328 = function(runtimeScene, eventsFunctionContext) {

{


{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsFlashing() ) {
        gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.GDObjectObjects1[k] = gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


}; //End of gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.eventsList0x5b7328


gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashing = function(parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    if (objectName === "Object") { return thisObjectList; }    var objectsList = eventsFunctionContext._objectsMap[objectName];
    return objectsList ? gdjs.objectsListsToArray(objectsList) : [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
    return "";
  }
};

gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.eventsList0x5b7328(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Flash__Flash.Flash.prototype.onOwnerRemovedFromSceneContext = {};
gdjs.evtsExt__Flash__Flash.Flash.prototype.onOwnerRemovedFromSceneContext.GDObjectObjects1= [];
gdjs.evtsExt__Flash__Flash.Flash.prototype.onOwnerRemovedFromSceneContext.GDObjectObjects2= [];

gdjs.evtsExt__Flash__Flash.Flash.prototype.onOwnerRemovedFromSceneContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Flash__Flash.Flash.prototype.onOwnerRemovedFromSceneContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Flash__Flash.Flash.prototype.onOwnerRemovedFromSceneContext.eventsList0x5b7328 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Flash__Flash.Flash.prototype.onOwnerRemovedFromSceneContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__Flash__Flash.Flash.prototype.onOwnerRemovedFromSceneContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__Flash.Flash.prototype.onOwnerRemovedFromSceneContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Stop((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


}; //End of gdjs.evtsExt__Flash__Flash.Flash.prototype.onOwnerRemovedFromSceneContext.eventsList0x5b7328


gdjs.evtsExt__Flash__Flash.Flash.prototype.onOwnerRemovedFromScene = function(parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    if (objectName === "Object") { return thisObjectList; }    var objectsList = eventsFunctionContext._objectsMap[objectName];
    return objectsList ? gdjs.objectsListsToArray(objectsList) : [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
    return "";
  }
};

gdjs.evtsExt__Flash__Flash.Flash.prototype.onOwnerRemovedFromSceneContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__Flash.Flash.prototype.onOwnerRemovedFromSceneContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Flash__Flash.Flash.prototype.onOwnerRemovedFromSceneContext.eventsList0x5b7328(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__Flash__Flash.Flash.prototype.onDestroy = function() {
  // Redirect call to onOwnerRemovedFromScene (the old name of onDestroy)
  if (this.onOwnerRemovedFromScene) this.onOwnerRemovedFromScene();
};gdjs.evtsExt__Flash__Flash.Flash.prototype.onDeActivateContext = {};
gdjs.evtsExt__Flash__Flash.Flash.prototype.onDeActivateContext.GDObjectObjects1= [];
gdjs.evtsExt__Flash__Flash.Flash.prototype.onDeActivateContext.GDObjectObjects2= [];

gdjs.evtsExt__Flash__Flash.Flash.prototype.onDeActivateContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Flash__Flash.Flash.prototype.onDeActivateContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Flash__Flash.Flash.prototype.onDeActivateContext.eventsList0x5b7328 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Flash__Flash.Flash.prototype.onDeActivateContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__Flash__Flash.Flash.prototype.onDeActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__Flash.Flash.prototype.onDeActivateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Stop((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


}; //End of gdjs.evtsExt__Flash__Flash.Flash.prototype.onDeActivateContext.eventsList0x5b7328


gdjs.evtsExt__Flash__Flash.Flash.prototype.onDeActivate = function(parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    if (objectName === "Object") { return thisObjectList; }    var objectsList = eventsFunctionContext._objectsMap[objectName];
    return objectsList ? gdjs.objectsListsToArray(objectsList) : [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
    return "";
  }
};

gdjs.evtsExt__Flash__Flash.Flash.prototype.onDeActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__Flash.Flash.prototype.onDeActivateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Flash__Flash.Flash.prototype.onDeActivateContext.eventsList0x5b7328(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext = {};
gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1= [];
gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects2= [];

gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.eventsList0x5b7328 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsFlashing() ) {
        gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1[k] = gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsFlashing(false);
}
}}

}


}; //End of gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.eventsList0x5b7328


gdjs.evtsExt__Flash__Flash.Flash.prototype.Stop = function(parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    if (objectName === "Object") { return thisObjectList; }    var objectsList = eventsFunctionContext._objectsMap[objectName];
    return objectsList ? gdjs.objectsListsToArray(objectsList) : [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
    return "";
  }
};

gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.eventsList0x5b7328(runtimeScene, eventsFunctionContext);
return;
}


// Methods:

gdjs.evtsExt__Flash__Flash.Flash.prototype._getHalfPeriodTime = function() {
    return this._behaviorData.HalfPeriodTime !== undefined ? this._behaviorData.HalfPeriodTime : Number("0.1") || 0;
};
gdjs.evtsExt__Flash__Flash.Flash.prototype._setHalfPeriodTime = function(newValue) {
    this._behaviorData.HalfPeriodTime = newValue;
};
gdjs.evtsExt__Flash__Flash.Flash.prototype._getIsFlashing = function() {
    return this._behaviorData.IsFlashing !== undefined ? this._behaviorData.IsFlashing : false;
};
gdjs.evtsExt__Flash__Flash.Flash.prototype._setIsFlashing = function(newValue) {
    this._behaviorData.IsFlashing = newValue;
};
gdjs.evtsExt__Flash__Flash.Flash.prototype._getFlashDuration = function() {
    return this._behaviorData.FlashDuration !== undefined ? this._behaviorData.FlashDuration : Number("0") || 0;
};
gdjs.evtsExt__Flash__Flash.Flash.prototype._setFlashDuration = function(newValue) {
    this._behaviorData.FlashDuration = newValue;
};
