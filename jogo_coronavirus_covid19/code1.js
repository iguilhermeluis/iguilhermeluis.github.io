gdjs.Level1Code = {};
gdjs.Level1Code.forEachCount0_2 = 0;

gdjs.Level1Code.forEachCount1_2 = 0;

gdjs.Level1Code.forEachCount2_2 = 0;

gdjs.Level1Code.forEachCount3_2 = 0;

gdjs.Level1Code.forEachIndex2 = 0;

gdjs.Level1Code.forEachObjects2 = [];

gdjs.Level1Code.forEachTemporary2 = null;

gdjs.Level1Code.forEachTotalCount2 = 0;

gdjs.Level1Code.GDMonsterObjects1= [];
gdjs.Level1Code.GDMonsterObjects2= [];
gdjs.Level1Code.GDMonsterObjects3= [];
gdjs.Level1Code.GDMonsterObjects4= [];
gdjs.Level1Code.GDShape1Objects1= [];
gdjs.Level1Code.GDShape1Objects2= [];
gdjs.Level1Code.GDShape1Objects3= [];
gdjs.Level1Code.GDShape1Objects4= [];
gdjs.Level1Code.GDShape2Objects1= [];
gdjs.Level1Code.GDShape2Objects2= [];
gdjs.Level1Code.GDShape2Objects3= [];
gdjs.Level1Code.GDShape2Objects4= [];
gdjs.Level1Code.GDShape3Objects1= [];
gdjs.Level1Code.GDShape3Objects2= [];
gdjs.Level1Code.GDShape3Objects3= [];
gdjs.Level1Code.GDShape3Objects4= [];
gdjs.Level1Code.GDShape4Objects1= [];
gdjs.Level1Code.GDShape4Objects2= [];
gdjs.Level1Code.GDShape4Objects3= [];
gdjs.Level1Code.GDShape4Objects4= [];
gdjs.Level1Code.GDPontoObjects1= [];
gdjs.Level1Code.GDPontoObjects2= [];
gdjs.Level1Code.GDPontoObjects3= [];
gdjs.Level1Code.GDPontoObjects4= [];
gdjs.Level1Code.GDObstacleObjects1= [];
gdjs.Level1Code.GDObstacleObjects2= [];
gdjs.Level1Code.GDObstacleObjects3= [];
gdjs.Level1Code.GDObstacleObjects4= [];
gdjs.Level1Code.GDLifeObjects1= [];
gdjs.Level1Code.GDLifeObjects2= [];
gdjs.Level1Code.GDLifeObjects3= [];
gdjs.Level1Code.GDLifeObjects4= [];
gdjs.Level1Code.GDGameOverObjects1= [];
gdjs.Level1Code.GDGameOverObjects2= [];
gdjs.Level1Code.GDGameOverObjects3= [];
gdjs.Level1Code.GDGameOverObjects4= [];
gdjs.Level1Code.GDButtonTryAgainObjects1= [];
gdjs.Level1Code.GDButtonTryAgainObjects2= [];
gdjs.Level1Code.GDButtonTryAgainObjects3= [];
gdjs.Level1Code.GDButtonTryAgainObjects4= [];
gdjs.Level1Code.GDButtonMainMenuObjects1= [];
gdjs.Level1Code.GDButtonMainMenuObjects2= [];
gdjs.Level1Code.GDButtonMainMenuObjects3= [];
gdjs.Level1Code.GDButtonMainMenuObjects4= [];
gdjs.Level1Code.GDShape4ExplosionObjects1= [];
gdjs.Level1Code.GDShape4ExplosionObjects2= [];
gdjs.Level1Code.GDShape4ExplosionObjects3= [];
gdjs.Level1Code.GDShape4ExplosionObjects4= [];
gdjs.Level1Code.GDShape3ExplosionObjects1= [];
gdjs.Level1Code.GDShape3ExplosionObjects2= [];
gdjs.Level1Code.GDShape3ExplosionObjects3= [];
gdjs.Level1Code.GDShape3ExplosionObjects4= [];
gdjs.Level1Code.GDShape2ExplosionObjects1= [];
gdjs.Level1Code.GDShape2ExplosionObjects2= [];
gdjs.Level1Code.GDShape2ExplosionObjects3= [];
gdjs.Level1Code.GDShape2ExplosionObjects4= [];
gdjs.Level1Code.GDShape1ExplosionObjects1= [];
gdjs.Level1Code.GDShape1ExplosionObjects2= [];
gdjs.Level1Code.GDShape1ExplosionObjects3= [];
gdjs.Level1Code.GDShape1ExplosionObjects4= [];
gdjs.Level1Code.GDdicasObjects1= [];
gdjs.Level1Code.GDdicasObjects2= [];
gdjs.Level1Code.GDdicasObjects3= [];
gdjs.Level1Code.GDdicasObjects4= [];

gdjs.Level1Code.conditionTrue_0 = {val:false};
gdjs.Level1Code.condition0IsTrue_0 = {val:false};
gdjs.Level1Code.condition1IsTrue_0 = {val:false};


gdjs.Level1Code.eventsList0x6b5744 = function(runtimeScene) {

{

gdjs.Level1Code.GDMonsterObjects2.createFrom(runtimeScene.getObjects("Monster"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDMonsterObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDMonsterObjects2[i].getX() > gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) + 5 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDMonsterObjects2[k] = gdjs.Level1Code.GDMonsterObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDMonsterObjects2.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDMonsterObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDMonsterObjects2[i].addForce(-(450), 0, 0);
}
}}

}


{

gdjs.Level1Code.GDMonsterObjects1.createFrom(runtimeScene.getObjects("Monster"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDMonsterObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDMonsterObjects1[i].getX() < gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) - 5 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDMonsterObjects1[k] = gdjs.Level1Code.GDMonsterObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDMonsterObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDMonsterObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMonsterObjects1[i].addForce(450, 0, 0);
}
}}

}


}; //End of gdjs.Level1Code.eventsList0x6b5744
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape1Objects1ObjectsGDgdjs_46Level1Code_46GDShape2Objects1ObjectsGDgdjs_46Level1Code_46GDShape3Objects1ObjectsGDgdjs_46Level1Code_46GDShape4Objects1Objects = Hashtable.newFrom({"Shape1": gdjs.Level1Code.GDShape1Objects1, "Shape2": gdjs.Level1Code.GDShape2Objects1, "Shape3": gdjs.Level1Code.GDShape3Objects1, "Shape4": gdjs.Level1Code.GDShape4Objects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape1Objects2ObjectsGDgdjs_46Level1Code_46GDShape2Objects2ObjectsGDgdjs_46Level1Code_46GDShape3Objects2ObjectsGDgdjs_46Level1Code_46GDShape4Objects2Objects = Hashtable.newFrom({"Shape1": gdjs.Level1Code.GDShape1Objects2, "Shape2": gdjs.Level1Code.GDShape2Objects2, "Shape3": gdjs.Level1Code.GDShape3Objects2, "Shape4": gdjs.Level1Code.GDShape4Objects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDMonsterObjects2Objects = Hashtable.newFrom({"Monster": gdjs.Level1Code.GDMonsterObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape1Objects3Objects = Hashtable.newFrom({"Shape1": gdjs.Level1Code.GDShape1Objects3});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape1ExplosionObjects3Objects = Hashtable.newFrom({"Shape1Explosion": gdjs.Level1Code.GDShape1ExplosionObjects3});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape2Objects3Objects = Hashtable.newFrom({"Shape2": gdjs.Level1Code.GDShape2Objects3});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape2ExplosionObjects3Objects = Hashtable.newFrom({"Shape2Explosion": gdjs.Level1Code.GDShape2ExplosionObjects3});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape3Objects3Objects = Hashtable.newFrom({"Shape3": gdjs.Level1Code.GDShape3Objects3});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape3ExplosionObjects3Objects = Hashtable.newFrom({"Shape3Explosion": gdjs.Level1Code.GDShape3ExplosionObjects3});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape4Objects3Objects = Hashtable.newFrom({"Shape4": gdjs.Level1Code.GDShape4Objects3});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape4ExplosionObjects3Objects = Hashtable.newFrom({"Shape4Explosion": gdjs.Level1Code.GDShape4ExplosionObjects3});gdjs.Level1Code.eventsList0x69cf04 = function(runtimeScene) {

{



}


{

gdjs.Level1Code.GDShape1Objects3.createFrom(gdjs.Level1Code.GDShape1Objects2);


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape1Objects3Objects) != 0;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDShape1Objects3 */
gdjs.Level1Code.GDShape1ExplosionObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape1ExplosionObjects3Objects, (( gdjs.Level1Code.GDShape1Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDShape1Objects3[0].getPointX("Center")), (( gdjs.Level1Code.GDShape1Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDShape1Objects3[0].getPointY("Center")), "");
}{for(var i = 0, len = gdjs.Level1Code.GDShape1ExplosionObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDShape1ExplosionObjects3[i].setParticleSize1((( gdjs.Level1Code.GDShape1Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDShape1Objects3[0].getWidth()));
}
}}

}


{

gdjs.Level1Code.GDShape2Objects3.createFrom(gdjs.Level1Code.GDShape2Objects2);


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape2Objects3Objects) != 0;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDShape2Objects3 */
gdjs.Level1Code.GDShape2ExplosionObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape2ExplosionObjects3Objects, (( gdjs.Level1Code.GDShape2Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDShape2Objects3[0].getPointX("Center")), (( gdjs.Level1Code.GDShape2Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDShape2Objects3[0].getPointY("Center")), "");
}{for(var i = 0, len = gdjs.Level1Code.GDShape2ExplosionObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDShape2ExplosionObjects3[i].setParticleSize1((( gdjs.Level1Code.GDShape2Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDShape2Objects3[0].getWidth()));
}
}}

}


{

gdjs.Level1Code.GDShape3Objects3.createFrom(gdjs.Level1Code.GDShape3Objects2);


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape3Objects3Objects) != 0;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDShape3Objects3 */
gdjs.Level1Code.GDShape3ExplosionObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape3ExplosionObjects3Objects, (( gdjs.Level1Code.GDShape3Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDShape3Objects3[0].getPointX("Center")), (( gdjs.Level1Code.GDShape3Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDShape3Objects3[0].getPointY("Center")), "");
}{for(var i = 0, len = gdjs.Level1Code.GDShape3ExplosionObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDShape3ExplosionObjects3[i].setParticleSize1((( gdjs.Level1Code.GDShape3Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDShape3Objects3[0].getWidth()));
}
}}

}


{

gdjs.Level1Code.GDShape4Objects3.createFrom(gdjs.Level1Code.GDShape4Objects2);


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape4Objects3Objects) != 0;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDShape4Objects3 */
gdjs.Level1Code.GDShape4ExplosionObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape4ExplosionObjects3Objects, (( gdjs.Level1Code.GDShape4Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDShape4Objects3[0].getPointX("Center")), (( gdjs.Level1Code.GDShape4Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDShape4Objects3[0].getPointY("Center")), "");
}{for(var i = 0, len = gdjs.Level1Code.GDShape4ExplosionObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDShape4ExplosionObjects3[i].setParticleSize1((( gdjs.Level1Code.GDShape4Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDShape4Objects3[0].getWidth()));
}
}}

}


{



}


{


{
gdjs.Level1Code.GDPontoObjects3.createFrom(runtimeScene.getObjects("Ponto"));
gdjs.Level1Code.GDShape1Objects3.createFrom(gdjs.Level1Code.GDShape1Objects2);

gdjs.Level1Code.GDShape2Objects3.createFrom(gdjs.Level1Code.GDShape2Objects2);

gdjs.Level1Code.GDShape3Objects3.createFrom(gdjs.Level1Code.GDShape3Objects2);

gdjs.Level1Code.GDShape4Objects3.createFrom(gdjs.Level1Code.GDShape4Objects2);

{for(var i = 0, len = gdjs.Level1Code.GDShape1Objects3.length ;i < len;++i) {
    gdjs.Level1Code.GDShape1Objects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDShape2Objects3.length ;i < len;++i) {
    gdjs.Level1Code.GDShape2Objects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDShape3Objects3.length ;i < len;++i) {
    gdjs.Level1Code.GDShape3Objects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDShape4Objects3.length ;i < len;++i) {
    gdjs.Level1Code.GDShape4Objects3[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "monster.wav", false, 100, 1);
}{runtimeScene.getVariables().get("Score").add(1);
}{for(var i = 0, len = gdjs.Level1Code.GDPontoObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDPontoObjects3[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Score"))));
}
}}

}


}; //End of gdjs.Level1Code.eventsList0x69cf04
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDObstacleObjects2Objects = Hashtable.newFrom({"Obstacle": gdjs.Level1Code.GDObstacleObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDMonsterObjects2Objects = Hashtable.newFrom({"Monster": gdjs.Level1Code.GDMonsterObjects2});gdjs.Level1Code.eventsList0x6b5394 = function(runtimeScene) {

}; //End of gdjs.Level1Code.eventsList0x6b5394
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDObstacleObjects1Objects = Hashtable.newFrom({"Obstacle": gdjs.Level1Code.GDObstacleObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDButtonTryAgainObjects2Objects = Hashtable.newFrom({"ButtonTryAgain": gdjs.Level1Code.GDButtonTryAgainObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDButtonTryAgainObjects2Objects = Hashtable.newFrom({"ButtonTryAgain": gdjs.Level1Code.GDButtonTryAgainObjects2});gdjs.Level1Code.eventsList0x744e0c = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDButtonTryAgainObjects3.createFrom(gdjs.Level1Code.GDButtonTryAgainObjects2);

{for(var i = 0, len = gdjs.Level1Code.GDButtonTryAgainObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDButtonTryAgainObjects3[i].setAnimationName("TryAgainPressed");
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}}

}


}; //End of gdjs.Level1Code.eventsList0x744e0c
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDButtonMainMenuObjects2Objects = Hashtable.newFrom({"ButtonMainMenu": gdjs.Level1Code.GDButtonMainMenuObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDButtonMainMenuObjects1Objects = Hashtable.newFrom({"ButtonMainMenu": gdjs.Level1Code.GDButtonMainMenuObjects1});gdjs.Level1Code.eventsList0x7cf3dc = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDButtonMainMenuObjects2.createFrom(gdjs.Level1Code.GDButtonMainMenuObjects1);

{for(var i = 0, len = gdjs.Level1Code.GDButtonMainMenuObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDButtonMainMenuObjects2[i].setAnimationName("MainMenuPressed");
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


}; //End of gdjs.Level1Code.eventsList0x7cf3dc
gdjs.Level1Code.eventsList0x756e94 = function(runtimeScene) {

{

gdjs.Level1Code.GDButtonTryAgainObjects2.createFrom(gdjs.Level1Code.GDButtonTryAgainObjects1);


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDButtonTryAgainObjects2Objects, runtimeScene, true, true);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDButtonTryAgainObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDButtonTryAgainObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDButtonTryAgainObjects2[i].setAnimationName("TryAgainNormal");
}
}}

}


{

gdjs.Level1Code.GDButtonTryAgainObjects2.createFrom(gdjs.Level1Code.GDButtonTryAgainObjects1);


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDButtonTryAgainObjects2Objects, runtimeScene, true, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDButtonTryAgainObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDButtonTryAgainObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDButtonTryAgainObjects2[i].setAnimationName("TryAgainHover");
}
}
{ //Subevents
gdjs.Level1Code.eventsList0x744e0c(runtimeScene);} //End of subevents
}

}


{

gdjs.Level1Code.GDButtonMainMenuObjects2.createFrom(gdjs.Level1Code.GDButtonMainMenuObjects1);


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDButtonMainMenuObjects2Objects, runtimeScene, true, true);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDButtonMainMenuObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDButtonMainMenuObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDButtonMainMenuObjects2[i].setAnimationName("MainMenuNormal");
}
}}

}


{

/* Reuse gdjs.Level1Code.GDButtonMainMenuObjects1 */

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDButtonMainMenuObjects1Objects, runtimeScene, true, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDButtonMainMenuObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDButtonMainMenuObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDButtonMainMenuObjects1[i].setAnimationName("MainMenuHover");
}
}
{ //Subevents
gdjs.Level1Code.eventsList0x7cf3dc(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level1Code.eventsList0x756e94
gdjs.Level1Code.eventsList0x5b70b8 = function(runtimeScene) {

{



}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDMonsterObjects1.createFrom(runtimeScene.getObjects("Monster"));
{for(var i = 0, len = gdjs.Level1Code.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMonsterObjects1[i].addForce(-(450), 0, 0);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDMonsterObjects1.createFrom(runtimeScene.getObjects("Monster"));
{for(var i = 0, len = gdjs.Level1Code.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMonsterObjects1[i].addForce(450, 0, 0);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level1Code.eventsList0x6b5744(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1.3, "ShapeCreation");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDShape1Objects1.length = 0;

gdjs.Level1Code.GDShape2Objects1.length = 0;

gdjs.Level1Code.GDShape3Objects1.length = 0;

gdjs.Level1Code.GDShape4Objects1.length = 0;

{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape1Objects1ObjectsGDgdjs_46Level1Code_46GDShape2Objects1ObjectsGDgdjs_46Level1Code_46GDShape3Objects1ObjectsGDgdjs_46Level1Code_46GDShape4Objects1Objects, "Shape" + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 4)), gdjs.randomInRange(80, 640 - 80), -(100), "");
}{for(var i = 0, len = gdjs.Level1Code.GDShape1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape1Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
for(var i = 0, len = gdjs.Level1Code.GDShape2Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape2Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
for(var i = 0, len = gdjs.Level1Code.GDShape3Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape3Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
for(var i = 0, len = gdjs.Level1Code.GDShape4Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape4Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
}{for(var i = 0, len = gdjs.Level1Code.GDShape1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape1Objects1[i].setScale(gdjs.randomInRange(0.8, 1.6));
}
for(var i = 0, len = gdjs.Level1Code.GDShape2Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape2Objects1[i].setScale(gdjs.randomInRange(0.8, 1.6));
}
for(var i = 0, len = gdjs.Level1Code.GDShape3Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape3Objects1[i].setScale(gdjs.randomInRange(0.8, 1.6));
}
for(var i = 0, len = gdjs.Level1Code.GDShape4Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape4Objects1[i].setScale(gdjs.randomInRange(0.8, 1.6));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShapeCreation");
}}

}


{



}


{


{
gdjs.Level1Code.GDShape1Objects1.createFrom(runtimeScene.getObjects("Shape1"));
gdjs.Level1Code.GDShape2Objects1.createFrom(runtimeScene.getObjects("Shape2"));
gdjs.Level1Code.GDShape3Objects1.createFrom(runtimeScene.getObjects("Shape3"));
gdjs.Level1Code.GDShape4Objects1.createFrom(runtimeScene.getObjects("Shape4"));
{for(var i = 0, len = gdjs.Level1Code.GDShape1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape1Objects1[i].addPolarForce(90, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)), 0);
}
for(var i = 0, len = gdjs.Level1Code.GDShape2Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape2Objects1[i].addPolarForce(90, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)), 0);
}
for(var i = 0, len = gdjs.Level1Code.GDShape3Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape3Objects1[i].addPolarForce(90, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)), 0);
}
for(var i = 0, len = gdjs.Level1Code.GDShape4Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape4Objects1[i].addPolarForce(90, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)), 0);
}
}{for(var i = 0, len = gdjs.Level1Code.GDShape1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape1Objects1[i].rotate(90, runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDShape2Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape2Objects1[i].rotate(90, runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDShape3Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape3Objects1[i].rotate(90, runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDShape4Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape4Objects1[i].rotate(90, runtimeScene);
}
}}

}


{



}


{

gdjs.Level1Code.GDShape1Objects1.createFrom(runtimeScene.getObjects("Shape1"));
gdjs.Level1Code.GDShape2Objects1.createFrom(runtimeScene.getObjects("Shape2"));
gdjs.Level1Code.GDShape3Objects1.createFrom(runtimeScene.getObjects("Shape3"));
gdjs.Level1Code.GDShape4Objects1.createFrom(runtimeScene.getObjects("Shape4"));

gdjs.Level1Code.forEachTotalCount2 = 0;
gdjs.Level1Code.forEachObjects2.length = 0;
gdjs.Level1Code.forEachCount0_2 = gdjs.Level1Code.GDShape1Objects1.length;
gdjs.Level1Code.forEachTotalCount2 += gdjs.Level1Code.forEachCount0_2;
gdjs.Level1Code.forEachObjects2.push.apply(gdjs.Level1Code.forEachObjects2,gdjs.Level1Code.GDShape1Objects1);
gdjs.Level1Code.forEachCount1_2 = gdjs.Level1Code.GDShape2Objects1.length;
gdjs.Level1Code.forEachTotalCount2 += gdjs.Level1Code.forEachCount1_2;
gdjs.Level1Code.forEachObjects2.push.apply(gdjs.Level1Code.forEachObjects2,gdjs.Level1Code.GDShape2Objects1);
gdjs.Level1Code.forEachCount2_2 = gdjs.Level1Code.GDShape3Objects1.length;
gdjs.Level1Code.forEachTotalCount2 += gdjs.Level1Code.forEachCount2_2;
gdjs.Level1Code.forEachObjects2.push.apply(gdjs.Level1Code.forEachObjects2,gdjs.Level1Code.GDShape3Objects1);
gdjs.Level1Code.forEachCount3_2 = gdjs.Level1Code.GDShape4Objects1.length;
gdjs.Level1Code.forEachTotalCount2 += gdjs.Level1Code.forEachCount3_2;
gdjs.Level1Code.forEachObjects2.push.apply(gdjs.Level1Code.forEachObjects2,gdjs.Level1Code.GDShape4Objects1);
for(gdjs.Level1Code.forEachIndex2 = 0;gdjs.Level1Code.forEachIndex2 < gdjs.Level1Code.forEachTotalCount2;++gdjs.Level1Code.forEachIndex2) {
gdjs.Level1Code.GDMonsterObjects2.createFrom(runtimeScene.getObjects("Monster"));
gdjs.Level1Code.GDShape1Objects2.length = 0;

gdjs.Level1Code.GDShape2Objects2.length = 0;

gdjs.Level1Code.GDShape3Objects2.length = 0;

gdjs.Level1Code.GDShape4Objects2.length = 0;


if (gdjs.Level1Code.forEachIndex2 < gdjs.Level1Code.forEachCount0_2) {
    gdjs.Level1Code.GDShape1Objects2.push(gdjs.Level1Code.forEachObjects2[gdjs.Level1Code.forEachIndex2]);
}
else if (gdjs.Level1Code.forEachIndex2 < gdjs.Level1Code.forEachCount0_2+gdjs.Level1Code.forEachCount1_2) {
    gdjs.Level1Code.GDShape2Objects2.push(gdjs.Level1Code.forEachObjects2[gdjs.Level1Code.forEachIndex2]);
}
else if (gdjs.Level1Code.forEachIndex2 < gdjs.Level1Code.forEachCount0_2+gdjs.Level1Code.forEachCount1_2+gdjs.Level1Code.forEachCount2_2) {
    gdjs.Level1Code.GDShape3Objects2.push(gdjs.Level1Code.forEachObjects2[gdjs.Level1Code.forEachIndex2]);
}
else if (gdjs.Level1Code.forEachIndex2 < gdjs.Level1Code.forEachCount0_2+gdjs.Level1Code.forEachCount1_2+gdjs.Level1Code.forEachCount2_2+gdjs.Level1Code.forEachCount3_2) {
    gdjs.Level1Code.GDShape4Objects2.push(gdjs.Level1Code.forEachObjects2[gdjs.Level1Code.forEachIndex2]);
}
gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape1Objects2ObjectsGDgdjs_46Level1Code_46GDShape2Objects2ObjectsGDgdjs_46Level1Code_46GDShape3Objects2ObjectsGDgdjs_46Level1Code_46GDShape4Objects2Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDMonsterObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {

{ //Subevents: 
gdjs.Level1Code.eventsList0x69cf04(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.Level1Code.GDObstacleObjects1.createFrom(runtimeScene.getObjects("Obstacle"));

for(gdjs.Level1Code.forEachIndex2 = 0;gdjs.Level1Code.forEachIndex2 < gdjs.Level1Code.GDObstacleObjects1.length;++gdjs.Level1Code.forEachIndex2) {
gdjs.Level1Code.GDMonsterObjects2.createFrom(runtimeScene.getObjects("Monster"));
gdjs.Level1Code.GDObstacleObjects2.length = 0;


gdjs.Level1Code.forEachTemporary2 = gdjs.Level1Code.GDObstacleObjects1[gdjs.Level1Code.forEachIndex2];
gdjs.Level1Code.GDObstacleObjects2.push(gdjs.Level1Code.forEachTemporary2);
gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDObstacleObjects2Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDMonsterObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Level1Code.GDObstacleObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDObstacleObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDMonsterObjects2[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "killed.wav", false, 100, 1);
}{gdjs.deviceVibration.startVibration(200);
}}
}

}


{



}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "ObstacleCreation");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDObstacleObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDObstacleObjects1Objects, gdjs.randomInRange(80, 640 - 80), -(100), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ObstacleCreation");
}}

}


{



}


{


{
gdjs.Level1Code.GDObstacleObjects1.createFrom(runtimeScene.getObjects("Obstacle"));
{for(var i = 0, len = gdjs.Level1Code.GDObstacleObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDObstacleObjects1[i].addPolarForce(90, 1.5 * gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)), 0);
}
}{for(var i = 0, len = gdjs.Level1Code.GDObstacleObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDObstacleObjects1[i].setZOrder(4);
}
}}

}


{



}


{

gdjs.Level1Code.GDMonsterObjects1.createFrom(runtimeScene.getObjects("Monster"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDMonsterObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDMonsterObjects1[i].getBehavior("Health").IsJustDamaged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDMonsterObjects1[k] = gdjs.Level1Code.GDMonsterObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDMonsterObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDLifeObjects1.createFrom(runtimeScene.getObjects("Life"));
/* Reuse gdjs.Level1Code.GDMonsterObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDLifeObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDLifeObjects1[i].setAnimationName("Life" + gdjs.evtTools.common.toString((( gdjs.Level1Code.GDMonsterObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDMonsterObjects1[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))));
}
}{for(var i = 0, len = gdjs.Level1Code.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMonsterObjects1[i].getBehavior("Flash").Flash(1.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.Level1Code.GDMonsterObjects1.createFrom(runtimeScene.getObjects("Monster"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDMonsterObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDMonsterObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDMonsterObjects1[k] = gdjs.Level1Code.GDMonsterObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDMonsterObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDButtonMainMenuObjects1.createFrom(runtimeScene.getObjects("ButtonMainMenu"));
gdjs.Level1Code.GDButtonTryAgainObjects1.createFrom(runtimeScene.getObjects("ButtonTryAgain"));
gdjs.Level1Code.GDGameOverObjects1.createFrom(runtimeScene.getObjects("GameOver"));
gdjs.Level1Code.GDLifeObjects1.createFrom(runtimeScene.getObjects("Life"));
/* Reuse gdjs.Level1Code.GDMonsterObjects1 */
gdjs.Level1Code.GDObstacleObjects1.createFrom(runtimeScene.getObjects("Obstacle"));
gdjs.Level1Code.GDShape1Objects1.createFrom(runtimeScene.getObjects("Shape1"));
gdjs.Level1Code.GDShape2Objects1.createFrom(runtimeScene.getObjects("Shape2"));
gdjs.Level1Code.GDShape3Objects1.createFrom(runtimeScene.getObjects("Shape3"));
gdjs.Level1Code.GDShape4Objects1.createFrom(runtimeScene.getObjects("Shape4"));
gdjs.Level1Code.GDdicasObjects1.createFrom(runtimeScene.getObjects("dicas"));
{for(var i = 0, len = gdjs.Level1Code.GDLifeObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDLifeObjects1[i].setAnimationName("Life0");
}
}{for(var i = 0, len = gdjs.Level1Code.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMonsterObjects1[i].setAnimationName("MonsterDead");
}
}{for(var i = 0, len = gdjs.Level1Code.GDShape1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape1Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDShape2Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape2Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDShape3Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape3Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDShape4Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape4Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDObstacleObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDObstacleObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDGameOverObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level1Code.GDButtonTryAgainObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDButtonTryAgainObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level1Code.GDButtonMainMenuObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDButtonMainMenuObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level1Code.GDdicasObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDdicasObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Level1Code.eventsList0x756e94(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDButtonMainMenuObjects1.createFrom(runtimeScene.getObjects("ButtonMainMenu"));
gdjs.Level1Code.GDButtonTryAgainObjects1.createFrom(runtimeScene.getObjects("ButtonTryAgain"));
gdjs.Level1Code.GDGameOverObjects1.createFrom(runtimeScene.getObjects("GameOver"));
gdjs.Level1Code.GDdicasObjects1.createFrom(runtimeScene.getObjects("dicas"));
{for(var i = 0, len = gdjs.Level1Code.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDGameOverObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDButtonTryAgainObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDButtonTryAgainObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDButtonMainMenuObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDButtonMainMenuObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDdicasObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDdicasObjects1[i].hide();
}
}}

}


{



}


{


{
{runtimeScene.getVariables().getFromIndex(0).add(7 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}}

}


}; //End of gdjs.Level1Code.eventsList0x5b70b8


gdjs.Level1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level1Code.GDMonsterObjects1.length = 0;
gdjs.Level1Code.GDMonsterObjects2.length = 0;
gdjs.Level1Code.GDMonsterObjects3.length = 0;
gdjs.Level1Code.GDMonsterObjects4.length = 0;
gdjs.Level1Code.GDShape1Objects1.length = 0;
gdjs.Level1Code.GDShape1Objects2.length = 0;
gdjs.Level1Code.GDShape1Objects3.length = 0;
gdjs.Level1Code.GDShape1Objects4.length = 0;
gdjs.Level1Code.GDShape2Objects1.length = 0;
gdjs.Level1Code.GDShape2Objects2.length = 0;
gdjs.Level1Code.GDShape2Objects3.length = 0;
gdjs.Level1Code.GDShape2Objects4.length = 0;
gdjs.Level1Code.GDShape3Objects1.length = 0;
gdjs.Level1Code.GDShape3Objects2.length = 0;
gdjs.Level1Code.GDShape3Objects3.length = 0;
gdjs.Level1Code.GDShape3Objects4.length = 0;
gdjs.Level1Code.GDShape4Objects1.length = 0;
gdjs.Level1Code.GDShape4Objects2.length = 0;
gdjs.Level1Code.GDShape4Objects3.length = 0;
gdjs.Level1Code.GDShape4Objects4.length = 0;
gdjs.Level1Code.GDPontoObjects1.length = 0;
gdjs.Level1Code.GDPontoObjects2.length = 0;
gdjs.Level1Code.GDPontoObjects3.length = 0;
gdjs.Level1Code.GDPontoObjects4.length = 0;
gdjs.Level1Code.GDObstacleObjects1.length = 0;
gdjs.Level1Code.GDObstacleObjects2.length = 0;
gdjs.Level1Code.GDObstacleObjects3.length = 0;
gdjs.Level1Code.GDObstacleObjects4.length = 0;
gdjs.Level1Code.GDLifeObjects1.length = 0;
gdjs.Level1Code.GDLifeObjects2.length = 0;
gdjs.Level1Code.GDLifeObjects3.length = 0;
gdjs.Level1Code.GDLifeObjects4.length = 0;
gdjs.Level1Code.GDGameOverObjects1.length = 0;
gdjs.Level1Code.GDGameOverObjects2.length = 0;
gdjs.Level1Code.GDGameOverObjects3.length = 0;
gdjs.Level1Code.GDGameOverObjects4.length = 0;
gdjs.Level1Code.GDButtonTryAgainObjects1.length = 0;
gdjs.Level1Code.GDButtonTryAgainObjects2.length = 0;
gdjs.Level1Code.GDButtonTryAgainObjects3.length = 0;
gdjs.Level1Code.GDButtonTryAgainObjects4.length = 0;
gdjs.Level1Code.GDButtonMainMenuObjects1.length = 0;
gdjs.Level1Code.GDButtonMainMenuObjects2.length = 0;
gdjs.Level1Code.GDButtonMainMenuObjects3.length = 0;
gdjs.Level1Code.GDButtonMainMenuObjects4.length = 0;
gdjs.Level1Code.GDShape4ExplosionObjects1.length = 0;
gdjs.Level1Code.GDShape4ExplosionObjects2.length = 0;
gdjs.Level1Code.GDShape4ExplosionObjects3.length = 0;
gdjs.Level1Code.GDShape4ExplosionObjects4.length = 0;
gdjs.Level1Code.GDShape3ExplosionObjects1.length = 0;
gdjs.Level1Code.GDShape3ExplosionObjects2.length = 0;
gdjs.Level1Code.GDShape3ExplosionObjects3.length = 0;
gdjs.Level1Code.GDShape3ExplosionObjects4.length = 0;
gdjs.Level1Code.GDShape2ExplosionObjects1.length = 0;
gdjs.Level1Code.GDShape2ExplosionObjects2.length = 0;
gdjs.Level1Code.GDShape2ExplosionObjects3.length = 0;
gdjs.Level1Code.GDShape2ExplosionObjects4.length = 0;
gdjs.Level1Code.GDShape1ExplosionObjects1.length = 0;
gdjs.Level1Code.GDShape1ExplosionObjects2.length = 0;
gdjs.Level1Code.GDShape1ExplosionObjects3.length = 0;
gdjs.Level1Code.GDShape1ExplosionObjects4.length = 0;
gdjs.Level1Code.GDdicasObjects1.length = 0;
gdjs.Level1Code.GDdicasObjects2.length = 0;
gdjs.Level1Code.GDdicasObjects3.length = 0;
gdjs.Level1Code.GDdicasObjects4.length = 0;

gdjs.Level1Code.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['Level1Code'] = gdjs.Level1Code;
