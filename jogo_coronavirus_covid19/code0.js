gdjs.MainMenuCode = {};
gdjs.MainMenuCode.GDButtonStartObjects1= [];
gdjs.MainMenuCode.GDButtonStartObjects2= [];
gdjs.MainMenuCode.GDButtonStartObjects3= [];
gdjs.MainMenuCode.GDTitleGameObjects1= [];
gdjs.MainMenuCode.GDTitleGameObjects2= [];
gdjs.MainMenuCode.GDTitleGameObjects3= [];
gdjs.MainMenuCode.GDSobrevivaObjects1= [];
gdjs.MainMenuCode.GDSobrevivaObjects2= [];
gdjs.MainMenuCode.GDSobrevivaObjects3= [];
gdjs.MainMenuCode.GDsalveChiquinhoObjects1= [];
gdjs.MainMenuCode.GDsalveChiquinhoObjects2= [];
gdjs.MainMenuCode.GDsalveChiquinhoObjects3= [];

gdjs.MainMenuCode.conditionTrue_0 = {val:false};
gdjs.MainMenuCode.condition0IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition1IsTrue_0 = {val:false};


gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDButtonStartObjects1Objects = Hashtable.newFrom({"ButtonStart": gdjs.MainMenuCode.GDButtonStartObjects1});gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDButtonStartObjects1Objects = Hashtable.newFrom({"ButtonStart": gdjs.MainMenuCode.GDButtonStartObjects1});gdjs.MainMenuCode.eventsList0x75446c = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
gdjs.MainMenuCode.GDButtonStartObjects2.createFrom(gdjs.MainMenuCode.GDButtonStartObjects1);

{for(var i = 0, len = gdjs.MainMenuCode.GDButtonStartObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDButtonStartObjects2[i].setAnimationName("StartPressed");
}
}}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}{gdjs.adMob.removeBanner();
}}

}


}; //End of gdjs.MainMenuCode.eventsList0x75446c
gdjs.MainMenuCode.eventsList0x5b70b8 = function(runtimeScene) {

{

gdjs.MainMenuCode.GDButtonStartObjects1.createFrom(runtimeScene.getObjects("ButtonStart"));

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDButtonStartObjects1Objects, runtimeScene, true, true);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDButtonStartObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDButtonStartObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDButtonStartObjects1[i].setAnimationName("StartNormal");
}
}}

}


{

gdjs.MainMenuCode.GDButtonStartObjects1.createFrom(runtimeScene.getObjects("ButtonStart"));

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDButtonStartObjects1Objects, runtimeScene, true, false);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDButtonStartObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDButtonStartObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDButtonStartObjects1[i].setAnimationName("StartHover");
}
}
{ //Subevents
gdjs.MainMenuCode.eventsList0x75446c(runtimeScene);} //End of subevents
}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.adMob.loadBanner("ca-app-pub-6625162380319892/6038387716", "", false, true, true, false);
}}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.adMob.isBannerReady();
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.adMob.showBanner();
}}

}


}; //End of gdjs.MainMenuCode.eventsList0x5b70b8


gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDButtonStartObjects1.length = 0;
gdjs.MainMenuCode.GDButtonStartObjects2.length = 0;
gdjs.MainMenuCode.GDButtonStartObjects3.length = 0;
gdjs.MainMenuCode.GDTitleGameObjects1.length = 0;
gdjs.MainMenuCode.GDTitleGameObjects2.length = 0;
gdjs.MainMenuCode.GDTitleGameObjects3.length = 0;
gdjs.MainMenuCode.GDSobrevivaObjects1.length = 0;
gdjs.MainMenuCode.GDSobrevivaObjects2.length = 0;
gdjs.MainMenuCode.GDSobrevivaObjects3.length = 0;
gdjs.MainMenuCode.GDsalveChiquinhoObjects1.length = 0;
gdjs.MainMenuCode.GDsalveChiquinhoObjects2.length = 0;
gdjs.MainMenuCode.GDsalveChiquinhoObjects3.length = 0;

gdjs.MainMenuCode.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
