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
            id:'batt01_back',
            type:'rect',
            rect:['4.6%','7%','8%','6%','auto','auto'],
            borderRadius:["5px 5px","5px 5px","5px 5px","5px 5px"],
            fill:["rgba(100,130,130,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'batt01_status',
            type:'rect',
            rect:['4.6%','7%','4.7%','6%','auto','auto'],
            borderRadius:["5.54% 7.72%","0% 0%","0% 0%","5.54% 7.72%"],
            fill:["rgba(0,166,93,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            userClass:"batt01_status"
         },
         {
            id:'batt001_back',
            type:'rect',
            rect:['12.6%','8.7%','0.7%','2.5%','auto','auto'],
            fill:["rgba(100,130,130,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'temp_back',
            type:'rect',
            rect:['96.3%','82.6%','0.5%','14%','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(100,130,130,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'temp_meter',
            type:'rect',
            rect:['auto','auto','0.5%','11.1%','3.2%','3.4%'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(220,0,41,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"tmeter",
            transform:[]
         },
         {
            id:'temp_Text',
            type:'text',
            rect:['91.6%','88.8%','7.7%','3.1%','auto','auto'],
            opacity:0.6,
            text:"Temperature<br>",
            align:"right",
            font:['Arial, Helvetica, sans-serif',[150,"%"],"rgba(255,255,255,1)","normal","none","normal"],
            transform:[[],['-90']]
         },
         {
            id:'temp_value',
            type:'text',
            rect:['95%','84.8%','4.4%','3.1%','auto','auto'],
            text:"20 *C",
            align:"center",
            userClass:"tvalue",
            font:['Arial, Helvetica, sans-serif',[100,"%"],"rgba(255,255,255,1)","700","none","normal"],
            transform:[[],['90']]
         },
         {
            id:'pressure_back',
            type:'rect',
            rect:['89.7%','82.6%','0.5%','14%','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(100,130,130,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'pressure_meter',
            type:'rect',
            rect:['89.7%','82.6%','0.5%','5%','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(0,45,244,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"pmeter",
            transform:[]
         },
         {
            id:'pressure_Text',
            type:'text',
            rect:['85%','90.9%','7.7%','3.1%','auto','auto'],
            opacity:0.6,
            text:"Pressure",
            align:"right",
            font:['Arial, Helvetica, sans-serif',[150,"%"],"rgba(255,255,255,1)","normal","none","normal"],
            transform:[[],['-90']]
         },
         {
            id:'pressure_value',
            type:'text',
            rect:['88.4%','85%','4.4%','3.1%','auto','auto'],
            text:"20 bar",
            align:"center",
            userClass:"pvalue",
            font:['Arial, Helvetica, sans-serif',[100,"%"],"rgba(255,255,255,1)","700","none","normal"],
            transform:[[],['90']]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Text2Copy9}": [
            ["style", "letter-spacing", '0em'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '12.99%'],
            ["style", "font-size", '170%'],
            ["style", "top", '44.83%'],
            ["style", "width", '73.2%'],
            ["style", "text-indent", '0%'],
            ["style", "height", '21.05%'],
            ["style", "word-spacing", '0em'],
            ["style", "text-decoration", 'none'],
            ["style", "font-style", 'normal']
         ],
         "${_batt01_back}": [
            ["style", "top", '7.04%'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '6%'],
            ["style", "left", '4.58%'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '8%']
         ],
         "${_temp_meter}": [
            ["color", "background-color", 'rgba(220,0,41,1.00)'],
            ["transform", "rotateZ", '0deg'],
            ["style", "right", '3.21%'],
            ["style", "left", 'auto'],
            ["style", "width", '0.46%'],
            ["style", "top", 'auto'],
            ["style", "height", '11.06%'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "bottom", '3.38%']
         ],
         "${_pressure_back}": [
            ["color", "background-color", 'rgba(100,130,130,1.00)'],
            ["style", "height", '14%'],
            ["style", "top", '82.62%'],
            ["style", "left", '89.73%'],
            ["style", "width", '0.46%']
         ],
         "${_batt01_status}": [
            ["style", "top", '7.04%'],
            ["style", "border-top-left-radius", [5.54,7.72], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["color", "background-color", 'rgba(0,166,93,1.00)'],
            ["style", "height", '6%'],
            ["style", "border-bottom-left-radius", [5.54,7.72], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "left", '4.58%'],
            ["style", "width", '4.7%']
         ],
         "${_pressure_Text}": [
            ["style", "top", '90.89%'],
            ["style", "width", '7.71%'],
            ["style", "text-align", 'right'],
            ["transform", "rotateZ", '-90deg'],
            ["style", "height", '3.09%'],
            ["style", "opacity", '0.6'],
            ["style", "left", '85.03%'],
            ["style", "font-size", '150%']
         ],
         "${_temp_Text}": [
            ["style", "top", '88.84%'],
            ["style", "font-size", '150%'],
            ["style", "text-align", 'right'],
            ["transform", "rotateZ", '-90deg'],
            ["style", "height", '3.09%'],
            ["style", "opacity", '0.6'],
            ["style", "left", '91.62%'],
            ["style", "width", '7.71%']
         ],
         "${_temp_back}": [
            ["color", "background-color", 'rgba(100,130,130,1.00)'],
            ["style", "height", '14%'],
            ["style", "top", '82.58%'],
            ["style", "left", '96.33%'],
            ["style", "width", '0.46%']
         ],
         "${_temp_value}": [
            ["style", "top", '84.81%'],
            ["style", "font-size", '100%'],
            ["style", "text-align", 'center'],
            ["transform", "rotateZ", '90deg'],
            ["style", "height", '3.06%'],
            ["style", "font-weight", '700'],
            ["style", "left", '95.01%'],
            ["style", "width", '4.38%']
         ],
         "${_pressure_value}": [
            ["style", "top", '84.95%'],
            ["style", "width", '4.38%'],
            ["style", "text-align", 'center'],
            ["transform", "rotateZ", '90deg'],
            ["style", "height", '3.06%'],
            ["style", "font-weight", '700'],
            ["style", "left", '88.41%'],
            ["style", "font-size", '100%']
         ],
         "${_pressure_meter}": [
            ["color", "background-color", 'rgba(0,45,244,1.00)'],
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '5%'],
            ["style", "top", '82.62%'],
            ["style", "left", '89.73%'],
            ["style", "width", '0.46%']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '100%'],
            ["style", "width", '100%']
         ],
         "${_batt001_back}": [
            ["style", "height", '2.5%'],
            ["style", "top", '8.7%'],
            ["style", "left", '12.6%'],
            ["style", "width", '0.7%']
         ],
         "${_back}": [
            ["style", "left", '0%']
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
},
"thruster02": {
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
      id: 'Group2',
      type: 'group',
      rect: ['0%','0%','100%','99.9%','auto','auto'],
      c: [
      {
         transform: [],
         userClass: 'meter2',
         id: 'metre2',
         type: 'image',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/metre3.png','0px','0px']
      },
      {
         transform: [],
         userClass: 'meter21',
         id: 'metre21',
         type: 'image',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/metre3.png','0px','0px']
      },
      {
         transform: [],
         userClass: 'meter22',
         id: 'metre22',
         type: 'image',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/metre3.png','0px','0px']
      },
      {
         id: 'thruster2',
         type: 'image',
         rect: ['0%','0%','100%','100%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/thruster4.png','0px','0px']
      },
      {
         font: ['Arial, Helvetica, sans-serif',[170,'%'],'rgba(255,255,255,1.00)','400','none','normal'],
         type: 'text',
         align: 'center',
         id: 'Text2',
         text: '245',
         rect: ['13%','44.8%','73.2%','21.1%','auto','auto'],
         userClass: 'tt2'
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_metre2}": [
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
         "${_metre21}": [
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
         "${symbolSelector}": [
            ["style", "height", '133px'],
            ["style", "width", '96px']
         ],
         "${_Group2}": [
            ["style", "left", '0%'],
            ["style", "top", '0%']
         ],
         "${_thruster2}": [
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
            ["style", "font-style", 'normal'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "height", '21.05%'],
            ["style", "text-decoration", 'none'],
            ["style", "word-spacing", '0em'],
            ["style", "width", '73.2%']
         ],
         "${_metre22}": [
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
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"thruster01": {
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
      id: 'Group1',
      type: 'group',
      rect: ['0%','0%','100%','99.9%','auto','auto'],
      c: [
      {
         transform: [],
         userClass: 'meter1',
         id: 'metre1',
         type: 'image',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/metre3.png','0px','0px']
      },
      {
         transform: [],
         userClass: 'meter11',
         id: 'metre11',
         type: 'image',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/metre3.png','0px','0px']
      },
      {
         transform: [],
         userClass: 'meter12',
         id: 'metre12',
         type: 'image',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/metre3.png','0px','0px']
      },
      {
         id: 'thruster1',
         type: 'image',
         rect: ['0%','0%','100%','100%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/thruster4.png','0px','0px']
      },
      {
         font: ['Arial, Helvetica, sans-serif',[170,'%'],'rgba(255,255,255,1.00)','400','none','normal'],
         type: 'text',
         align: 'center',
         id: 'Text1',
         text: '245',
         rect: ['13%','44.8%','73.2%','21.1%','auto','auto'],
         userClass: 'tt1'
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text1}": [
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
         "${_metre12}": [
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
         "${_thruster1}": [
            ["style", "top", '0%'],
            ["style", "height", '100.01%'],
            ["style", "left", '0%'],
            ["style", "width", '99.99%']
         ],
         "${_metre1}": [
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
         "${_metre11}": [
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
         "${_Group1}": [
            ["style", "left", '0%'],
            ["style", "top", '0%']
         ],
         "${symbolSelector}": [
            ["style", "height", '133px'],
            ["style", "width", '96px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"thruster03": {
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
      id: 'Group3',
      type: 'group',
      rect: ['0%','0%','100%','99.9%','auto','auto'],
      c: [
      {
         transform: [],
         userClass: 'meter3',
         id: 'metre3',
         type: 'image',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/metre3.png','0px','0px']
      },
      {
         transform: [],
         userClass: 'meter31',
         id: 'metre31',
         type: 'image',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/metre3.png','0px','0px']
      },
      {
         transform: [],
         userClass: 'meter32',
         id: 'metre32',
         type: 'image',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/metre3.png','0px','0px']
      },
      {
         id: 'thruster3',
         type: 'image',
         rect: ['0%','0%','100%','100%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/thruster4.png','0px','0px']
      },
      {
         font: ['Arial, Helvetica, sans-serif',[170,'%'],'rgba(255,255,255,1.00)','400','none','normal'],
         type: 'text',
         align: 'center',
         id: 'Text3',
         text: '245',
         rect: ['13%','44.8%','73.2%','21.1%','auto','auto'],
         userClass: 'tt3'
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_metre32}": [
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
         "${_metre31}": [
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
         "${symbolSelector}": [
            ["style", "height", '133px'],
            ["style", "width", '96px']
         ],
         "${_Text3}": [
            ["style", "letter-spacing", '0em'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '12.99%'],
            ["style", "font-size", '170%'],
            ["style", "top", '44.83%'],
            ["style", "width", '73.2%'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "font-style", 'normal'],
            ["style", "word-spacing", '0em'],
            ["style", "text-decoration", 'none'],
            ["style", "height", '21.05%']
         ],
         "${_thruster3}": [
            ["style", "height", '100.01%'],
            ["style", "top", '0%'],
            ["style", "left", '0%'],
            ["style", "width", '99.99%']
         ],
         "${_metre3}": [
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
         "${_Group3}": [
            ["style", "left", '0%'],
            ["style", "top", '0%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"thruster04": {
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
      id: 'Group4',
      type: 'group',
      rect: ['0%','0%','100%','99.9%','auto','auto'],
      c: [
      {
         transform: [],
         userClass: 'meter4',
         id: 'metre4',
         type: 'image',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/metre3.png','0px','0px']
      },
      {
         transform: [],
         userClass: 'meter41',
         id: 'metre41',
         type: 'image',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/metre3.png','0px','0px']
      },
      {
         transform: [],
         userClass: 'meter42',
         id: 'metre42',
         type: 'image',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/metre3.png','0px','0px']
      },
      {
         id: 'thruster4',
         type: 'image',
         rect: ['0%','0%','100%','100%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/thruster4.png','0px','0px']
      },
      {
         font: ['Arial, Helvetica, sans-serif',[170,'%'],'rgba(255,255,255,1.00)','400','none','normal'],
         type: 'text',
         align: 'center',
         id: 'Text4',
         text: '245',
         rect: ['13%','44.8%','73.2%','21.1%','auto','auto'],
         userClass: 'tt4'
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Group4}": [
            ["style", "left", '0%'],
            ["style", "top", '0%']
         ],
         "${_metre4}": [
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
         "${symbolSelector}": [
            ["style", "height", '133px'],
            ["style", "width", '96px']
         ],
         "${_thruster4}": [
            ["style", "top", '0%'],
            ["style", "height", '100.01%'],
            ["style", "left", '0%'],
            ["style", "width", '99.99%']
         ],
         "${_metre42}": [
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
         "${_metre41}": [
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
         "${_Text4}": [
            ["style", "letter-spacing", '0em'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '12.99%'],
            ["style", "font-size", '170%'],
            ["style", "top", '44.83%'],
            ["style", "font-style", 'normal'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "height", '21.05%'],
            ["style", "text-decoration", 'none'],
            ["style", "word-spacing", '0em'],
            ["style", "width", '73.2%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"thruster05": {
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
      id: 'Group3Copy6',
      type: 'group',
      rect: ['0%','0%','100%','99.9%','auto','auto'],
      c: [
      {
         transform: [],
         userClass: 'meter5',
         id: 'metre5',
         type: 'image',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/metre3.png','0px','0px']
      },
      {
         transform: [],
         userClass: 'meter51',
         id: 'metre51',
         type: 'image',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/metre3.png','0px','0px']
      },
      {
         transform: [],
         userClass: 'meter52',
         id: 'metre52',
         type: 'image',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/metre3.png','0px','0px']
      },
      {
         id: 'thruster5',
         type: 'image',
         rect: ['0%','0%','100%','100%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/thruster4.png','0px','0px']
      },
      {
         font: ['Arial, Helvetica, sans-serif',[170,'%'],'rgba(255,255,255,1.00)','400','none','normal'],
         type: 'text',
         align: 'center',
         id: 'Text5',
         text: '245',
         rect: ['13%','44.8%','73.2%','21.1%','auto','auto'],
         userClass: 'tt5'
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_metre52}": [
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
         "${_Group3Copy6}": [
            ["style", "left", '0%'],
            ["style", "top", '0%']
         ],
         "${symbolSelector}": [
            ["style", "height", '133px'],
            ["style", "width", '96px']
         ],
         "${_thruster5}": [
            ["style", "top", '0%'],
            ["style", "height", '100.01%'],
            ["style", "left", '0%'],
            ["style", "width", '99.99%']
         ],
         "${_metre51}": [
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
         "${_Text5}": [
            ["style", "letter-spacing", '0em'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '12.99%'],
            ["style", "font-size", '170%'],
            ["style", "top", '44.83%'],
            ["style", "font-style", 'normal'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "height", '21.05%'],
            ["style", "text-decoration", 'none'],
            ["style", "word-spacing", '0em'],
            ["style", "width", '73.2%']
         ],
         "${_metre5}": [
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
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"thruster06": {
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
      id: 'Group3Copy7',
      type: 'group',
      rect: ['0%','0%','100%','99.9%','auto','auto'],
      c: [
      {
         transform: [],
         userClass: 'meter6',
         id: 'metre6',
         type: 'image',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/metre3.png','0px','0px']
      },
      {
         transform: [],
         userClass: 'meter61',
         id: 'metre61',
         type: 'image',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/metre3.png','0px','0px']
      },
      {
         transform: [],
         userClass: 'meter62',
         id: 'metre62',
         type: 'image',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/metre3.png','0px','0px']
      },
      {
         id: 'thruster6',
         type: 'image',
         rect: ['0%','0%','100%','100%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/thruster4.png','0px','0px']
      },
      {
         font: ['Arial, Helvetica, sans-serif',[170,'%'],'rgba(255,255,255,1.00)','400','none','normal'],
         type: 'text',
         align: 'center',
         id: 'Text6',
         text: '245',
         rect: ['13%','44.8%','73.2%','21.1%','auto','auto'],
         userClass: 'tt6'
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_metre61}": [
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
         "${_metre6}": [
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
         "${_thruster6}": [
            ["style", "top", '0%'],
            ["style", "height", '100.01%'],
            ["style", "left", '0%'],
            ["style", "width", '99.99%']
         ],
         "${symbolSelector}": [
            ["style", "height", '133px'],
            ["style", "width", '96px']
         ],
         "${_Text6}": [
            ["style", "letter-spacing", '0em'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '12.99%'],
            ["style", "font-size", '170%'],
            ["style", "top", '44.83%'],
            ["style", "font-style", 'normal'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "height", '21.05%'],
            ["style", "text-decoration", 'none'],
            ["style", "word-spacing", '0em'],
            ["style", "width", '73.2%']
         ],
         "${_metre62}": [
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
         "${_Group3Copy7}": [
            ["style", "left", '0%'],
            ["style", "top", '0%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"thruster07": {
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
      id: 'Group3Copy8',
      type: 'group',
      rect: ['0%','0%','100%','99.9%','auto','auto'],
      c: [
      {
         transform: [],
         userClass: 'meter7',
         id: 'metre7',
         type: 'image',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/metre3.png','0px','0px']
      },
      {
         transform: [],
         userClass: 'meter71',
         id: 'metre71',
         type: 'image',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/metre3.png','0px','0px']
      },
      {
         transform: [],
         userClass: 'meter72',
         id: 'metre72',
         type: 'image',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/metre3.png','0px','0px']
      },
      {
         id: 'thruster7',
         type: 'image',
         rect: ['0%','0%','100%','100%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/thruster4.png','0px','0px']
      },
      {
         font: ['Arial, Helvetica, sans-serif',[170,'%'],'rgba(255,255,255,1.00)','400','none','normal'],
         type: 'text',
         align: 'center',
         id: 'Text7',
         text: '245',
         rect: ['13%','44.8%','73.2%','21.1%','auto','auto'],
         userClass: 'tt7'
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_metre72}": [
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
         "${_Text7}": [
            ["style", "letter-spacing", '0em'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '12.99%'],
            ["style", "font-size", '170%'],
            ["style", "top", '44.83%'],
            ["style", "font-style", 'normal'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "height", '21.05%'],
            ["style", "text-decoration", 'none'],
            ["style", "word-spacing", '0em'],
            ["style", "width", '73.2%']
         ],
         "${_thruster7}": [
            ["style", "top", '0%'],
            ["style", "height", '100.01%'],
            ["style", "left", '0%'],
            ["style", "width", '99.99%']
         ],
         "${_Group3Copy8}": [
            ["style", "left", '0%'],
            ["style", "top", '0%']
         ],
         "${_metre7}": [
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
         "${_metre71}": [
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
         "${symbolSelector}": [
            ["style", "height", '133px'],
            ["style", "width", '96px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"thruster08": {
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
      id: 'Group3Copy10',
      type: 'group',
      rect: ['0%','0%','100%','99.9%','auto','auto'],
      c: [
      {
         transform: [],
         userClass: 'meter8',
         id: 'metre8',
         type: 'image',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/metre3.png','0px','0px']
      },
      {
         transform: [],
         userClass: 'meter81',
         id: 'metre81',
         type: 'image',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/metre3.png','0px','0px']
      },
      {
         transform: [],
         userClass: 'meter82',
         id: 'metre82',
         type: 'image',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/metre3.png','0px','0px']
      },
      {
         id: 'thruster8',
         type: 'image',
         rect: ['0%','0%','100%','100%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/thruster4.png','0px','0px']
      },
      {
         font: ['Arial, Helvetica, sans-serif',[170,'%'],'rgba(255,255,255,1.00)','400','none','normal'],
         type: 'text',
         align: 'center',
         id: 'Text8',
         text: '245',
         rect: ['13%','44.8%','73.2%','21.1%','auto','auto'],
         userClass: 'tt8'
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_metre8}": [
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
         "${_metre81}": [
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
         "${_thruster8}": [
            ["style", "top", '0%'],
            ["style", "height", '100.01%'],
            ["style", "left", '0%'],
            ["style", "width", '99.99%']
         ],
         "${_metre82}": [
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
         "${_Group3Copy10}": [
            ["style", "left", '0%'],
            ["style", "top", '0%']
         ],
         "${_Text8}": [
            ["style", "letter-spacing", '0em'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '12.99%'],
            ["style", "font-size", '170%'],
            ["style", "top", '44.83%'],
            ["style", "font-style", 'normal'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "height", '21.05%'],
            ["style", "text-decoration", 'none'],
            ["style", "word-spacing", '0em'],
            ["style", "width", '73.2%']
         ],
         "${symbolSelector}": [
            ["style", "height", '133px'],
            ["style", "width", '96px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
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
