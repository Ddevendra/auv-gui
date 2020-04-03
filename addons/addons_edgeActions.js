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
         var temperature_value = "50*C";
         var temperature_meter = "5%";
         var pressure_value = "30 bar";
         var pressure_meter = "10%";
         
         sym.$(".temp_value").html(temperature_value);
         sym.$(".tmeter").css({ height:temperature_meter});
         
         sym.$(".pvalue").html(pressure_value);
         sym.$(".pmeter").css({height:pressure_meter});
         
         
         var thrust01 = "100";
         var thrust02 = "100";
         var thrust03 = "100";
         var thrust04 = "100";
         var thrust05 = "100";
         var thrust06 = "100";
         var thrust07 = "100";
         var thrust08 = "100";
         
         
         // map angle in range 0-270
         var angle1 = -150;
         var angle2 = 50;
         var angle3 = 150;
         var angle4 = 250;
         var angle5 = -150;
         var angle6 = 250;
         var angle7 = -100;
         var angle8 = -50;
         
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

      

      Symbol.bindElementAction(compId, symbolName, "${_temp_value}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
   
   })("Preloader");
   //Edge symbol end:'Preloader'

   //=========================================================
   
   //Edge symbol: 'thruster02'
   (function(symbolName) {   
   
   })("thruster02");
   //Edge symbol end:'thruster02'

   //=========================================================
   
   //Edge symbol: 'thruster01'
   (function(symbolName) {   
   
   })("thruster01");
   //Edge symbol end:'thruster01'

   //=========================================================
   
   //Edge symbol: 'thruster03'
   (function(symbolName) {   
   
   })("thruster03");
   //Edge symbol end:'thruster03'

   //=========================================================
   
   //Edge symbol: 'thruster04'
   (function(symbolName) {   
   
   })("thruster04");
   //Edge symbol end:'thruster04'

   //=========================================================
   
   //Edge symbol: 'thruster05'
   (function(symbolName) {   
   
   })("thruster05");
   //Edge symbol end:'thruster05'

   //=========================================================
   
   //Edge symbol: 'thruster06'
   (function(symbolName) {   
   
   })("thruster06");
   //Edge symbol end:'thruster06'

   //=========================================================
   
   //Edge symbol: 'thruster07'
   (function(symbolName) {   
   
   })("thruster07");
   //Edge symbol end:'thruster07'

   //=========================================================
   
   //Edge symbol: 'thruster08'
   (function(symbolName) {   
   
   })("thruster08");
   //Edge symbol end:'thruster08'

})(jQuery, AdobeEdge, "EDGE-59259991");