/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'back',
            type:'image',
            rect:['0%','0%','100%','100%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"back.png",'0px','0px'],
            transform:[]
         },
         {
            id:'Group3',
            type:'group',
            rect:['47%','10%','5%','12.3%','auto','auto'],
            c:[
            {
               id:'metre3',
               type:'image',
               rect:['13.6%','36.1%','72%','36.1%','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"metre3.png",'0px','0px'],
               userClass:"meter3",
               transform:[]
            },
            {
               id:'metre3Copy',
               type:'image',
               rect:['13.6%','36.1%','72%','36.1%','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"metre3.png",'0px','0px'],
               userClass:"meter31",
               transform:[]
            },
            {
               id:'metre3Copy2',
               type:'image',
               rect:['13.6%','36.1%','72%','36.1%','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"metre3.png",'0px','0px'],
               userClass:"meter32",
               transform:[]
            },
            {
               id:'thruster4',
               type:'image',
               rect:['0%','0%','100%','100%','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"thruster4.png",'0px','0px']
            },
            {
               id:'Text2',
               type:'text',
               rect:['13%','44.8%','73.2%','21.1%','auto','auto'],
               text:"245",
               align:"center",
               font:['Arial, Helvetica, sans-serif',[170,"%"],"rgba(255,255,255,1.00)","400","none","normal"]
            }]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_metre3Copy}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '36.11%'],
            ["style", "top", '36.07%'],
            ["style", "left", '13.59%'],
            ["style", "width", '72%']
         ],
         "${_thruster4}": [
            ["style", "top", '0%'],
            ["style", "height", '100.01%'],
            ["style", "left", '0%'],
            ["style", "width", '99.99%']
         ],
         "${_Text2}": [
            ["style", "letter-spacing", '0em'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '12.99%'],
            ["style", "font-size", '170%'],
            ["style", "top", '44.83%'],
            ["style", "height", '21.05%'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "font-style", 'normal'],
            ["style", "text-decoration", 'none'],
            ["style", "word-spacing", '0em'],
            ["style", "width", '73.2%']
         ],
         "${_metre3Copy2}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '36.11%'],
            ["style", "top", '36.07%'],
            ["style", "left", '13.59%'],
            ["style", "width", '72%']
         ],
         "${_metre3}": [
            ["style", "top", '36.07%'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '36.11%'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '13.59%'],
            ["style", "width", '72%']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '100%'],
            ["style", "width", '100%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-59259991");
