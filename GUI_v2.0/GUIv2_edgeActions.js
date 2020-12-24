/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         
         sym.$(".script_box").css({"display": "none"});
         sym.$(".lan_box").css({"display": "none"});
         
         var thrust01 = "100";
         var thrust02 = "400";
         var thrust03 = "50";
         var thrust04 = "100";
         var thrust05 = "270";
         var thrust06 = "-50";
         var thrust07 = "-400";
         var thrust08 = "-100";
         
         var battery01_percentage = '90%';
         var battery02_percentage = '40%';
         
         var humidity = 2.4;
         var exttemp = 20;
         var inttemp = 40;
         var extpressure = 2;
         var intpressure = 0.5;
         
         
         
         var device01_status = 1; 
         var device02_status = 1; 
         var device03_status = 0; 
         var device04_status = 1; 
         var device05_status = 0; 
         var device06_status = 1;
         var device07_status = 0; 
         var device08_status = 1;
         
         
         // devices status
         if (device01_status){sym.$(".device01").css({"background-color":"rgba(0,116,107,1.00)"});}
         if (device02_status){sym.$(".device02").css({"background-color":"rgba(0,116,107,1.00)"});}
         if (device03_status){sym.$(".device03").css({"background-color":"rgba(0,116,107,1.00)"});}
         if (device04_status){sym.$(".device04").css({"background-color":"rgba(0,116,107,1.00)"});}
         if (device05_status){sym.$(".device05").css({"background-color":"rgba(0,116,107,1.00)"});}
         if (device06_status){sym.$(".device06").css({"background-color":"rgba(0,116,107,1.00)"});}
         if (device07_status){sym.$(".device07").css({"background-color":"rgba(0,116,107,1.00)"});}
         if (device08_status){sym.$(".device08").css({"background-color":"rgba(0,116,107,1.00)"});}
         
         
         // battery meter
         sym.$(".batt01_percentage").html(battery01_percentage);
         sym.$(".batt02_percentage").html(battery02_percentage);
         sym.$(".batt02_status").css({ 'width':battery02_percentage});
         sym.$(".batt01_status").css({ 'width':battery01_percentage});
         
         
         
         //temperature and pressure meter
         sym.$(".exttemp_value").html(exttemp + "*C");
         sym.$(".exttemp_status").css({ 'width':exttemp + "%"});
         sym.$(".inttemp_value").html(inttemp + "*C");
         sym.$(".inttemp_status").css({ 'width':inttemp + "%"});
         sym.$(".extpressure_value").html(extpressure + " bar");
         sym.$(".extpressure_status").css({ 'width': extpressure*10 + "%"});
         sym.$(".intpressure_value").html(intpressure + " bar");
         sym.$(".intpressure_status").css({ 'width':intpressure*10 + "%"});
         sym.$(".humidity_value").html(humidity);
         sym.$(".humidity_status").css({ 'width':humidity*10 + "%"});
         
         
         
         // map angle in range 0-270
         var angle1 = thrust01*(270/400);
         var angle2 = thrust02*(270/400);
         var angle3 = thrust03*(270/400);
         var angle4 = thrust04*(270/400);
         var angle5 = thrust05*(270/400);
         var angle6 = thrust06*(270/400);
         var angle7 = thrust07*(270/400);
         var angle8 = thrust08*(270/400);
         
         var rotation1 = 'rotate(' + angle1 +'deg)';
         var rotation2 = 'rotate(' + angle2 +'deg)';
         var rotation3 = 'rotate(' + angle3 +'deg)';
         var rotation4 = 'rotate(' + angle4 +'deg)';
         var rotation5 = 'rotate(' + angle5 +'deg)';
         var rotation6 = 'rotate(' + angle6 +'deg)';
         var rotation7 = 'rotate(' + angle7 +'deg)';
         var rotation8 = 'rotate(' + angle8 +'deg)';
         
         sym.$(".tt1").html(thrust01);
         sym.$(".tt2").html(thrust02);
         sym.$(".tt3").html(thrust03);
         sym.$(".tt4").html(thrust04);
         sym.$(".tt5").html(thrust05);
         sym.$(".tt6").html(thrust06);
         sym.$(".tt7").html(thrust07);
         sym.$(".tt8").html(thrust08);
         
         //setting thruster meters
         sym.$(".meter1").css({'transform':rotation1});
         if (angle1 >= 90){
         sym.$(".meter1").css({'transform':'rotate(90deg)'});
         sym.$(".meter11").css({'transform':rotation1});
         		if (angle1 >= 180){
         		sym.$(".meter11").css({'transform':'rotate(180deg)'});
         		sym.$(".meter12").css({'transform':rotation1});
         		}
         }
         if (angle1 <= -90){
         sym.$(".meter1").css({'transform':'rotate(-90deg)'});
         sym.$(".meter11").css({'transform':rotation1});
         		if (angle1 <= -180){
         		sym.$(".meter11").css({'transform':'rotate(-180deg)'});
         		sym.$(".meter12").css({'transform':rotation1});
         		}
         }
         
         sym.$(".meter8").css({'transform':rotation8});
         if (angle8 >= 90){
         sym.$(".meter8").css({'transform':'rotate(90deg)'});
         sym.$(".meter81").css({'transform':rotation8});
         		if (angle8 >= 180){
         		sym.$(".meter81").css({'transform':'rotate(180deg)'});
         		sym.$(".meter82").css({'transform':rotation8});
         		}
         }
         if (angle8 <= -90){
         sym.$(".meter8").css({'transform':'rotate(-90deg)'});
         sym.$(".meter81").css({'transform':rotation8});
         		if (angle8 <= -180){
         		sym.$(".meter81").css({'transform':'rotate(-180deg)'});
         		sym.$(".meter82").css({'transform':rotation8});
         		}
         }
         
         sym.$(".meter6").css({'transform':rotation6});
         if (angle6 >= 90){
         sym.$(".meter6").css({'transform':'rotate(90deg)'});
         sym.$(".meter61").css({'transform':rotation6});
         		if (angle6 >= 180){
         		sym.$(".meter61").css({'transform':'rotate(180deg)'});
         		sym.$(".meter62").css({'transform':rotation6});
         		}
         }
         if (angle6 <= -90){
         sym.$(".meter6").css({'transform':'rotate(-90deg)'});
         sym.$(".meter61").css({'transform':rotation6});
         		if (angle6 <= -180){
         		sym.$(".meter61").css({'transform':'rotate(-180deg)'});
         		sym.$(".meter62").css({'transform':rotation6});
         		}
         }
         
         sym.$(".meter7").css({'transform':rotation7});
         if (angle7 >= 90){
         sym.$(".meter7").css({'transform':'rotate(90deg)'});
         sym.$(".meter71").css({'transform':rotation7});
         		if (angle7 >= 180){
         		sym.$(".meter71").css({'transform':'rotate(180deg)'});
         		sym.$(".meter72").css({'transform':rotation7});
         		}
         }
         if (angle7 <= -90){
         sym.$(".meter7").css({'transform':'rotate(-90deg)'});
         sym.$(".meter71").css({'transform':rotation7});
         		if (angle7 <= -180){
         		sym.$(".meter71").css({'transform':'rotate(-180deg)'});
         		sym.$(".meter72").css({'transform':rotation7});
         		}
         }
         
         
         
         sym.$(".meter5").css({'transform':rotation5});
         if (angle5 >= 90){
         sym.$(".meter5").css({'transform':'rotate(90deg)'});
         sym.$(".meter51").css({'transform':rotation5});
         		if (angle5 >= 180){
         		sym.$(".meter51").css({'transform':'rotate(180deg)'});
         		sym.$(".meter52").css({'transform':rotation5});
         		}
         }
         if (angle5 <= -90){
         sym.$(".meter5").css({'transform':'rotate(-90deg)'});
         sym.$(".meter51").css({'transform':rotation5});
         		if (angle5 <= -180){
         		sym.$(".meter51").css({'transform':'rotate(-180deg)'});
         		sym.$(".meter52").css({'transform':rotation5});
         		}
         }
         
         sym.$(".meter4").css({'transform':rotation4});
         if (angle4 >= 90){
         sym.$(".meter4").css({'transform':'rotate(90deg)'});
         sym.$(".meter41").css({'transform':rotation4});
         		if (angle4 >= 180){
         		sym.$(".meter41").css({'transform':'rotate(180deg)'});
         		sym.$(".meter42").css({'transform':rotation4});
         		}
         }
         if (angle4 <= -90){
         sym.$(".meter4").css({'transform':'rotate(-90deg)'});
         sym.$(".meter41").css({'transform':rotation4});
         		if (angle4 <= -180){
         		sym.$(".meter41").css({'transform':'rotate(-180deg)'});
         		sym.$(".meter42").css({'transform':rotation4});
         		}
         }
         
         
         
         sym.$(".meter2").css({'transform':rotation2});
         if (angle2 >= 90){
         sym.$(".meter2").css({'transform':'rotate(90deg)'});
         sym.$(".meter21").css({'transform':rotation2});
         		if (angle2 >= 180){
         		sym.$(".meter21").css({'transform':'rotate(180deg)'});
         		sym.$(".meter22").css({'transform':rotation2});
         		}
         }
         if (angle2 <= -90){
         sym.$(".meter2").css({'transform':'rotate(-90deg)'});
         sym.$(".meter21").css({'transform':rotation2});
         		if (angle2 <= -180){
         		sym.$(".meter21").css({'transform':'rotate(-180deg)'});
         		sym.$(".meter22").css({'transform':rotation2});
         		}
         }
         
         sym.$(".meter3").css({'transform':rotation3});
         if (angle3 >= 90){
         sym.$(".meter3").css({'transform':'rotate(90deg)'});
         sym.$(".meter31").css({'transform':rotation3});
         		if (angle >= 180){
         		sym.$(".meter31").css({'transform':'rotate(180deg)'});
         		sym.$(".meter32").css({'transform':rotation3});
         		}
         }
         if (angle3 <= -90){
         sym.$(".meter3").css({'transform':'rotate(-90deg)'});
         sym.$(".meter31").css({'transform':rotation3});
         		if (angle <= -180){
         		sym.$(".meter31").css({'transform':'rotate(-180deg)'});
         		sym.$(".meter32").css({'transform':rotation3});
         		}
         }
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_run_script}", "click", function(sym, e) {
         var script_box = sym.getSymbol("script_box");
         if(script_box.toggle==1){sym.$(".script_box").css({"display": "none"}); script_box.toggle = 0;}
         else {sym.$(".script_box").css({"display": "block"}); script_box.toggle = 1;}

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         var toggle =0;

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the composition is fully loaded here
         var toggle =0;

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_lan}", "click", function(sym, e) {
         // insert code for mouse click here
         var lan_box = sym.getSymbol("lan_box");
         if(lan_box.toggle==1){sym.$(".lan_box").css({"display": "none"}); lan_box.toggle = 0;}
         else {sym.$(".lan_box").css({"display": "block"}); lan_box.toggle = 1;}

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 839, function(sym, e) {
         // insert code here
      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'battery01'
   (function(symbolName) {   
   
   })("battery01");
   //Edge symbol end:'battery01'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'battery002'
   (function(symbolName) {   
   
   })("battery002");
   //Edge symbol end:'battery002'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'device001'
   (function(symbolName) {   
   
   })("device01");
   //Edge symbol end:'device01'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'lan'
   (function(symbolName) {   
   
   })("lan");
   //Edge symbol end:'lan'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'thruster01'
   (function(symbolName) {   
   
   })("thruster01");
   //Edge symbol end:'thruster01'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'thruster02'
   (function(symbolName) {   
   
   })("thruster02");
   //Edge symbol end:'thruster02'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'thruster03'
   (function(symbolName) {   
   
   })("thruster03");
   //Edge symbol end:'thruster03'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'thruster04'
   (function(symbolName) {   
   
   })("thruster04");
   //Edge symbol end:'thruster04'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'thruster05'
   (function(symbolName) {   
   
   })("thruster05");
   //Edge symbol end:'thruster05'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'thruster06'
   (function(symbolName) {   
   
   })("thruster06");
   //Edge symbol end:'thruster06'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'thruster07'
   (function(symbolName) {   
   
   })("thruster07");
   //Edge symbol end:'thruster07'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'thruster08'
   (function(symbolName) {   
   
   })("thruster08");
   //Edge symbol end:'thruster08'

   //=========================================================

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'device001'
   (function(symbolName) {   
   
   })("device02");
   //Edge symbol end:'device02'

   //=========================================================

   //=========================================================

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'device001'
   (function(symbolName) {   
   
   })("device03");
   //Edge symbol end:'device03'

   //=========================================================

   //=========================================================

   //=========================================================

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'device001'
   (function(symbolName) {   
   
   })("device04");
   //Edge symbol end:'device04'

   //=========================================================

   //=========================================================

   //=========================================================

   //=========================================================

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'device001'
   (function(symbolName) {   
   
   })("device05");
   //Edge symbol end:'device05'

   //=========================================================

   //=========================================================

   //=========================================================

   //=========================================================

   //=========================================================

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'device001'
   (function(symbolName) {   
   
   })("device06");
   //Edge symbol end:'device06'

   //=========================================================

   //=========================================================

   //=========================================================

   //=========================================================

   //=========================================================

   //=========================================================

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'device001'
   (function(symbolName) {   
   
   })("device07");
   //Edge symbol end:'device07'

   //=========================================================

   //=========================================================

   //=========================================================

   //=========================================================

   //=========================================================

   //=========================================================

   //=========================================================

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'device001'
   (function(symbolName) {   
   
   })("device08");
   //Edge symbol end:'device08'

   //=========================================================
   
   //Edge symbol: 'Ext_pressure'
   (function(symbolName) {   
   
   })("Ext_pressure");
   //Edge symbol end:'Ext_pressure'

   //=========================================================
   
   //Edge symbol: 'Ext_pressure'
   (function(symbolName) {   
   
   })("Int_Pressure");
   //Edge symbol end:'Int_Pressure'

   //=========================================================
   
   //Edge symbol: 'Ext_pressure'
   (function(symbolName) {   
   
   })("Ext_Temp");
   //Edge symbol end:'Ext_Temp'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'Ext_pressure'
   (function(symbolName) {   
   
   })("ext_temp");
   //Edge symbol end:'ext_temp'

   //=========================================================

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'Ext_pressure'
   (function(symbolName) {   
   
   })("int_temp");
   //Edge symbol end:'int_temp'

   //=========================================================

   //=========================================================

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'Ext_pressure'
   (function(symbolName) {   
   
   })("humidity");
   //Edge symbol end:'humidity'

   //=========================================================
   
   //Edge symbol: 'run_script'
   (function(symbolName) {   
   
   })("run_script");
   //Edge symbol end:'run_script'

   //=========================================================
   
   //Edge symbol: 'script_box'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         var toggle=0;

      });
      //Edge binding end

   })("script_box");
   //Edge symbol end:'script_box'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'script_box'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         var toggle=0;

      });
      //Edge binding end

   })("lan_box");
   //Edge symbol end:'lan_box'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'Ext_pressure'
   (function(symbolName) {   
   
   })("velocity-x");
   //Edge symbol end:'velocity-x'

   //=========================================================

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'Ext_pressure'
   (function(symbolName) {   
   
   })("velocity-y");
   //Edge symbol end:'velocity-y'

   //=========================================================

   //=========================================================

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'Ext_pressure'
   (function(symbolName) {   
   
   })("velocity-z");
   //Edge symbol end:'velocity-z'

   //=========================================================

   //=========================================================

   //=========================================================

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'Ext_pressure'
   (function(symbolName) {   
   
   })("yaw");
   //Edge symbol end:'yaw'

   //=========================================================

   //=========================================================

   //=========================================================

   //=========================================================

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'Ext_pressure'
   (function(symbolName) {   
   
   })("pitch");
   //Edge symbol end:'pitch'

   //=========================================================

   //=========================================================

   //=========================================================

   //=========================================================

   //=========================================================

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'Ext_pressure'
   (function(symbolName) {   
   
   })("roll");
   //Edge symbol end:'roll'

})(jQuery, AdobeEdge, "EDGE-6000272");