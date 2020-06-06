
gdjs.evtsExt__Health__Health = gdjs.evtsExt__Health__Health || {};

/**
 * Behavior generated from Health
 * @class Health
 * @extends gdjs.RuntimeBehavior
 * @constructor
 */
gdjs.evtsExt__Health__Health.Health = function(runtimeScene, behaviorData, owner)
{
    gdjs.RuntimeBehavior.call(this, runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._behaviorData = {};
    
    this._behaviorData.Health = behaviorData.Health !== undefined ? behaviorData.Health : Number("100") || 0;
    this._behaviorData.DamageCooldown = behaviorData.DamageCooldown !== undefined ? behaviorData.DamageCooldown : Number("0") || 0;
    this._behaviorData.MaxHealth = behaviorData.MaxHealth !== undefined ? behaviorData.MaxHealth : Number("100") || 0;
    this._behaviorData.IsJustDamaged = false;
    this._behaviorData.CooldownActive = false;
};

gdjs.evtsExt__Health__Health.Health.prototype = Object.create( gdjs.RuntimeBehavior.prototype );
gdjs.registerBehavior("Health::Health", gdjs.evtsExt__Health__Health.Health);

// Properties:
gdjs.evtsExt__Health__Health.Health.prototype.HitContext = {};
gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects1= [];
gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects2= [];

gdjs.evtsExt__Health__Health.Health.prototype.HitContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Health__Health.Health.prototype.HitContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Health__Health.Health.prototype.HitContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Health__Health.Health.prototype.HitContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__Health__Health.Health.prototype.HitContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__Health__Health.Health.prototype.HitContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__Health__Health.Health.prototype.HitContext.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__Health__Health.Health.prototype.HitContext.condition2IsTrue_1 = {val:false};


gdjs.evtsExt__Health__Health.Health.prototype.HitContext.eventsList0x5b7328 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects1.length = 0;


gdjs.evtsExt__Health__Health.Health.prototype.HitContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Health__Health.Health.prototype.HitContext.conditionTrue_1 = gdjs.evtsExt__Health__Health.Health.prototype.HitContext.condition0IsTrue_0;
gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects1_1final.length = 0;gdjs.evtsExt__Health__Health.Health.prototype.HitContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__Health__Health.Health.prototype.HitContext.condition1IsTrue_1.val = false;
{
gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects2.createFrom(eventsFunctionContext.getObjects("Object"));
for(var i = 0, k = 0, l = gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects2[i].timerElapsedTime("DamageCooldown", (gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDamageCooldown())) ) {
        gdjs.evtsExt__Health__Health.Health.prototype.HitContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects2[k] = gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects2.length = k;if( gdjs.evtsExt__Health__Health.Health.prototype.HitContext.condition0IsTrue_1.val ) {
    gdjs.evtsExt__Health__Health.Health.prototype.HitContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects2.length;j<jLen;++j) {
        if ( gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects1_1final.push(gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects2.createFrom(eventsFunctionContext.getObjects("Object"));
for(var i = 0, k = 0, l = gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCooldownActive()) ) {
        gdjs.evtsExt__Health__Health.Health.prototype.HitContext.condition1IsTrue_1.val = true;
        gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects2[k] = gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects2.length = k;if( gdjs.evtsExt__Health__Health.Health.prototype.HitContext.condition1IsTrue_1.val ) {
    gdjs.evtsExt__Health__Health.Health.prototype.HitContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects2.length;j<jLen;++j) {
        if ( gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects1_1final.push(gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects1.createFrom(gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects1_1final);
}
}
}if (gdjs.evtsExt__Health__Health.Health.prototype.HitContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHealth(gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHealth() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("DamageValue")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects1[i].resetTimer("DamageCooldown");
}
}{for(var i = 0, len = gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCooldownActive(true);
}
}{for(var i = 0, len = gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsJustDamaged(true);
}
}}

}


}; //End of gdjs.evtsExt__Health__Health.Health.prototype.HitContext.eventsList0x5b7328


gdjs.evtsExt__Health__Health.Health.prototype.Hit = function(DamageValue, parentEventsFunctionContext) {
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
if (argName === "DamageValue") return DamageValue;
    return "";
  }
};

gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Health__Health.Health.prototype.HitContext.eventsList0x5b7328(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Health__Health.Health.prototype.IsDeadContext = {};
gdjs.evtsExt__Health__Health.Health.prototype.IsDeadContext.GDObjectObjects1= [];
gdjs.evtsExt__Health__Health.Health.prototype.IsDeadContext.GDObjectObjects2= [];

gdjs.evtsExt__Health__Health.Health.prototype.IsDeadContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Health__Health.Health.prototype.IsDeadContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Health__Health.Health.prototype.IsDeadContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Health__Health.Health.prototype.IsDeadContext.eventsList0x5b7328 = function(runtimeScene, eventsFunctionContext) {

{


{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.evtsExt__Health__Health.Health.prototype.IsDeadContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Health__Health.Health.prototype.IsDeadContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Health__Health.Health.prototype.IsDeadContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Health__Health.Health.prototype.IsDeadContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHealth() <= 0 ) {
        gdjs.evtsExt__Health__Health.Health.prototype.IsDeadContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Health__Health.Health.prototype.IsDeadContext.GDObjectObjects1[k] = gdjs.evtsExt__Health__Health.Health.prototype.IsDeadContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Health__Health.Health.prototype.IsDeadContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Health__Health.Health.prototype.IsDeadContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


}; //End of gdjs.evtsExt__Health__Health.Health.prototype.IsDeadContext.eventsList0x5b7328


gdjs.evtsExt__Health__Health.Health.prototype.IsDead = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__Health__Health.Health.prototype.IsDeadContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Health__Health.Health.prototype.IsDeadContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Health__Health.Health.prototype.IsDeadContext.eventsList0x5b7328(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Health__Health.Health.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Health__Health.Health.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Health__Health.Health.prototype.doStepPreEventsContext.GDObjectObjects2= [];

gdjs.evtsExt__Health__Health.Health.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Health__Health.Health.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Health__Health.Health.prototype.doStepPreEventsContext.eventsList0x5b7328 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Health__Health.Health.prototype.doStepPreEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__Health__Health.Health.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Health__Health.Health.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsJustDamaged(false);
}
}}

}


}; //End of gdjs.evtsExt__Health__Health.Health.prototype.doStepPreEventsContext.eventsList0x5b7328


gdjs.evtsExt__Health__Health.Health.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__Health__Health.Health.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Health__Health.Health.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Health__Health.Health.prototype.doStepPreEventsContext.eventsList0x5b7328(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Health__Health.Health.prototype.IsJustDamagedContext = {};
gdjs.evtsExt__Health__Health.Health.prototype.IsJustDamagedContext.GDObjectObjects1= [];
gdjs.evtsExt__Health__Health.Health.prototype.IsJustDamagedContext.GDObjectObjects2= [];

gdjs.evtsExt__Health__Health.Health.prototype.IsJustDamagedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Health__Health.Health.prototype.IsJustDamagedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Health__Health.Health.prototype.IsJustDamagedContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Health__Health.Health.prototype.IsJustDamagedContext.eventsList0x5b7328 = function(runtimeScene, eventsFunctionContext) {

{


{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.evtsExt__Health__Health.Health.prototype.IsJustDamagedContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Health__Health.Health.prototype.IsJustDamagedContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Health__Health.Health.prototype.IsJustDamagedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Health__Health.Health.prototype.IsJustDamagedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsJustDamaged() ) {
        gdjs.evtsExt__Health__Health.Health.prototype.IsJustDamagedContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Health__Health.Health.prototype.IsJustDamagedContext.GDObjectObjects1[k] = gdjs.evtsExt__Health__Health.Health.prototype.IsJustDamagedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Health__Health.Health.prototype.IsJustDamagedContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Health__Health.Health.prototype.IsJustDamagedContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


}; //End of gdjs.evtsExt__Health__Health.Health.prototype.IsJustDamagedContext.eventsList0x5b7328


gdjs.evtsExt__Health__Health.Health.prototype.IsJustDamaged = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__Health__Health.Health.prototype.IsJustDamagedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Health__Health.Health.prototype.IsJustDamagedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Health__Health.Health.prototype.IsJustDamagedContext.eventsList0x5b7328(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Health__Health.Health.prototype.HealContext = {};
gdjs.evtsExt__Health__Health.Health.prototype.HealContext.GDObjectObjects1= [];
gdjs.evtsExt__Health__Health.Health.prototype.HealContext.GDObjectObjects2= [];

gdjs.evtsExt__Health__Health.Health.prototype.HealContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Health__Health.Health.prototype.HealContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Health__Health.Health.prototype.HealContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Health__Health.Health.prototype.HealContext.eventsList0x5b7328 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Health__Health.Health.prototype.HealContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__Health__Health.Health.prototype.HealContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Health__Health.Health.prototype.HealContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHealth(gdjs.evtsExt__Health__Health.Health.prototype.HealContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHealth() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("HealValue")) || 0 : 0)));
}
}}

}


{

gdjs.evtsExt__Health__Health.Health.prototype.HealContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Health__Health.Health.prototype.HealContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Health__Health.Health.prototype.HealContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Health__Health.Health.prototype.HealContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxHealth() > 0 ) {
        gdjs.evtsExt__Health__Health.Health.prototype.HealContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Health__Health.Health.prototype.HealContext.GDObjectObjects1[k] = gdjs.evtsExt__Health__Health.Health.prototype.HealContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Health__Health.Health.prototype.HealContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Health__Health.Health.prototype.HealContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Health__Health.Health.prototype.HealContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Health__Health.Health.prototype.HealContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Health__Health.Health.prototype.HealContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHealth(Math.min((gdjs.evtsExt__Health__Health.Health.prototype.HealContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHealth()), (gdjs.evtsExt__Health__Health.Health.prototype.HealContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxHealth())));
}
}}

}


}; //End of gdjs.evtsExt__Health__Health.Health.prototype.HealContext.eventsList0x5b7328


gdjs.evtsExt__Health__Health.Health.prototype.Heal = function(HealValue, parentEventsFunctionContext) {
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
if (argName === "HealValue") return HealValue;
    return "";
  }
};

gdjs.evtsExt__Health__Health.Health.prototype.HealContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Health__Health.Health.prototype.HealContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Health__Health.Health.prototype.HealContext.eventsList0x5b7328(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext = {};
gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.GDObjectObjects1= [];
gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.GDObjectObjects2= [];

gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.eventsList0x5b7328 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHealth((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


{

gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxHealth() > 0 ) {
        gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.GDObjectObjects1[k] = gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHealth(Math.min((gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHealth()), (gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxHealth())));
}
}}

}


}; //End of gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.eventsList0x5b7328


gdjs.evtsExt__Health__Health.Health.prototype.SetHealth = function(Value, parentEventsFunctionContext) {
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
if (argName === "Value") return Value;
    return "";
  }
};

gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.eventsList0x5b7328(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Health__Health.Health.prototype.HealthContext = {};
gdjs.evtsExt__Health__Health.Health.prototype.HealthContext.GDObjectObjects1= [];
gdjs.evtsExt__Health__Health.Health.prototype.HealthContext.GDObjectObjects2= [];

gdjs.evtsExt__Health__Health.Health.prototype.HealthContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Health__Health.Health.prototype.HealthContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Health__Health.Health.prototype.HealthContext.eventsList0x5b7328 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Health__Health.Health.prototype.HealthContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Health__Health.Health.prototype.HealthContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Health__Health.Health.prototype.HealthContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHealth()); }}}

}


}; //End of gdjs.evtsExt__Health__Health.Health.prototype.HealthContext.eventsList0x5b7328


gdjs.evtsExt__Health__Health.Health.prototype.Health = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__Health__Health.Health.prototype.HealthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Health__Health.Health.prototype.HealthContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Health__Health.Health.prototype.HealthContext.eventsList0x5b7328(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}


// Methods:

gdjs.evtsExt__Health__Health.Health.prototype._getHealth = function() {
    return this._behaviorData.Health !== undefined ? this._behaviorData.Health : Number("100") || 0;
};
gdjs.evtsExt__Health__Health.Health.prototype._setHealth = function(newValue) {
    this._behaviorData.Health = newValue;
};
gdjs.evtsExt__Health__Health.Health.prototype._getDamageCooldown = function() {
    return this._behaviorData.DamageCooldown !== undefined ? this._behaviorData.DamageCooldown : Number("0") || 0;
};
gdjs.evtsExt__Health__Health.Health.prototype._setDamageCooldown = function(newValue) {
    this._behaviorData.DamageCooldown = newValue;
};
gdjs.evtsExt__Health__Health.Health.prototype._getMaxHealth = function() {
    return this._behaviorData.MaxHealth !== undefined ? this._behaviorData.MaxHealth : Number("100") || 0;
};
gdjs.evtsExt__Health__Health.Health.prototype._setMaxHealth = function(newValue) {
    this._behaviorData.MaxHealth = newValue;
};
gdjs.evtsExt__Health__Health.Health.prototype._getIsJustDamaged = function() {
    return this._behaviorData.IsJustDamaged !== undefined ? this._behaviorData.IsJustDamaged : false;
};
gdjs.evtsExt__Health__Health.Health.prototype._setIsJustDamaged = function(newValue) {
    this._behaviorData.IsJustDamaged = newValue;
};
gdjs.evtsExt__Health__Health.Health.prototype._getCooldownActive = function() {
    return this._behaviorData.CooldownActive !== undefined ? this._behaviorData.CooldownActive : false;
};
gdjs.evtsExt__Health__Health.Health.prototype._setCooldownActive = function(newValue) {
    this._behaviorData.CooldownActive = newValue;
};
