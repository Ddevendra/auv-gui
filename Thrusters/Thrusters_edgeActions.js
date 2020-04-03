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
         // map angle in range 0-270
         var angle =-50;
         
         var rotation = 'rotate(' + angle +'deg)';
         sym.$(".meter3").css({'transform':rotation});
         
         if (angle >= 90){
         sym.$(".meter3").css({'transform':'rotate(90deg)'});
         
         sym.$(".meter31").css({'transform':rotation});
         
         		if (angle >= 180){
         		sym.$(".meter31").css({'transform':'rotate(180deg)'});
         
         		sym.$(".meter32").css({'transform':rotation});
         
         		}
         }

      });
      //Edge binding end

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
   
   })("Preloader");
   //Edge symbol end:'Preloader'

})(jQuery, AdobeEdge, "EDGE-59259991");