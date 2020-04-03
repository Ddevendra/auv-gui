/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['double-pica-small-caps, serif']='<script src=\"http://use.edgefonts.net/double-pica-small-caps:n4:all.js\"></script>';
   fonts['\'Seven Segment\'']='<link rel=\"stylesheet\" href =\"/fonts/fonts.css\" type=\"text/css\" media =\"screen\" title=\"\" charset=\"utf-8\"/>';
   fonts['Seven_segment']='<link rel=\"stylesheet\" href=\"fonts/fonts.css\" media=\"screen\" title=\"\" charset=\"utf-8\"/>';


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
            id:'device001',
            type:'rect',
            rect:['5.1%','83.3%','auto','auto','auto','auto']
         },
         {
            id:'device002',
            type:'rect',
            rect:['1.8%','85.8%','auto','auto','auto','auto']
         },
         {
            id:'device003',
            type:'rect',
            rect:['5.1%','83.3%','auto','auto','auto','auto']
         },
         {
            id:'device004',
            type:'rect',
            rect:['5.1%','83.3%','auto','auto','auto','auto']
         },
         {
            id:'device005',
            type:'rect',
            rect:['1.8%','95.5%','auto','auto','auto','auto']
         },
         {
            id:'lan_icon',
            type:'rect',
            rect:['82.2%','3.4%','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'lan_text',
            type:'text',
            rect:['82.6%','4.8%','2.1%','2%','auto','auto'],
            cursor:['pointer'],
            text:"lan",
            align:"center",
            font:['Verdana, Geneva, sans-serif',[0.8,"em"],"rgba(0,0,0,1.00)","normal","none","normal"]
         },
         {
            id:'battery01',
            type:'rect',
            rect:['4.6%','7%','auto','auto','auto','auto']
         },
         {
            id:'battery002',
            type:'rect',
            rect:['4.6%','7%','auto','auto','auto','auto']
         },
         {
            id:'temperature',
            type:'rect',
            rect:['94.6%','82.4%','auto','auto','auto','auto']
         },
         {
            id:'pressure',
            type:'rect',
            rect:['88%','82.6%','auto','auto','auto','auto']
         },
         {
            id:'thrusters',
            type:'group',
            rect:['39%','25%','20%','55%','auto','auto'],
            c:[
            {
               id:'thruster03',
               type:'rect',
               rect:['80%','0%','auto','auto','auto','auto']
            },
            {
               id:'thruster01',
               type:'rect',
               rect:['0%','0%','auto','auto','auto','auto']
            },
            {
               id:'thruster02',
               type:'rect',
               rect:['40%','0%','auto','auto','auto','auto']
            },
            {
               id:'thruster04',
               type:'rect',
               rect:['0%','40.1%','auto','auto','auto','auto']
            },
            {
               id:'thruster05',
               type:'rect',
               rect:['80%','40.1%','auto','auto','auto','auto']
            },
            {
               id:'thruster06',
               type:'rect',
               rect:['0%','80.2%','auto','auto','auto','auto']
            },
            {
               id:'thruster07',
               type:'rect',
               rect:['40%','80.2%','auto','auto','auto','auto']
            },
            {
               id:'thruster08',
               type:'rect',
               rect:['80%','80.2%','auto','auto','auto','auto']
            }]
         },
         {
            id:'time_back',
            type:'image',
            rect:['40%','5%','20%','4.4%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"time_back.png",'0px','0px']
         },
         {
            id:'time',
            type:'text',
            rect:['40%','2.9%','20%','6.6%','auto','auto'],
            text:"01:25:24",
            align:"center",
            userClass:"time",
            font:['Seven Segment',[3,"em"],"rgba(191,174,174,1.00)","400","none","normal"]
         },
         {
            id:'r_script_back',
            type:'rect',
            rect:['92.1%','3.4%','4%','3.6%','auto','auto'],
            cursor:['pointer'],
            borderRadius:["20% 50%","20% 50%","20% 50%","20% 50%"],
            fill:["rgba(0,116,107,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"rscript_back"
         },
         {
            id:'kill_button_back',
            type:'rect',
            rect:['86.9%','3.4%','3.1%','3.5%','auto','auto'],
            cursor:['pointer'],
            borderRadius:["20% 50%","20% 50%","20% 50%","20% 50%"],
            fill:["rgba(0,116,107,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"kbutton_back"
         },
         {
            id:'kbutton_text',
            type:'text',
            rect:['86.9%','3.8%','3.1%','3.5%','auto','auto'],
            cursor:['pointer'],
            text:"kill",
            align:"center",
            font:['Arial, Helvetica, sans-serif',[1.25,"em"],"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'r_Script_text',
            type:'text',
            rect:['92.1%','3.6%','4%','3.5%','auto','auto'],
            cursor:['pointer'],
            text:"&lt;/&gt;",
            align:"center",
            font:['Arial, Helvetica, sans-serif',[1.5,"em"],"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Rectangle',
            type:'rect',
            rect:['0%','30%','35.1%','40%','auto','auto'],
            borderRadius:["0% 0%","0% 0%","0% 0%","0% 0%"],
            fill:["rgba(0,116,107,0.40)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[]
         },
         {
            id:'Rectangle2',
            type:'rect',
            rect:['65%','27.7%','35.1%','40%','auto','auto'],
            borderRadius:["3% 5%","0% 0%","0% 0%","3% 5%"],
            fill:["rgba(0,116,107,0.40)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[]
         }],
         symbolInstances: [
         {
            id:'device001',
            symbolName:'device001'
         },
         {
            id:'device004',
            symbolName:'device04'
         },
         {
            id:'device002',
            symbolName:'device02'
         },
         {
            id:'thruster04',
            symbolName:'thruster04'
         },
         {
            id:'thruster01',
            symbolName:'thruster01'
         },
         {
            id:'thruster06',
            symbolName:'thruster06'
         },
         {
            id:'thruster08',
            symbolName:'thruster08'
         },
         {
            id:'thruster07',
            symbolName:'thruster07'
         },
         {
            id:'battery01',
            symbolName:'battery01'
         },
         {
            id:'lan_icon',
            symbolName:'lan'
         },
         {
            id:'thruster03',
            symbolName:'thruster03'
         },
         {
            id:'temperature',
            symbolName:'temperature'
         },
         {
            id:'device005',
            symbolName:'device005'
         },
         {
            id:'device003',
            symbolName:'device003'
         },
         {
            id:'battery002',
            symbolName:'battery002'
         },
         {
            id:'thruster05',
            symbolName:'thruster05'
         },
         {
            id:'thruster02',
            symbolName:'thruster02'
         },
         {
            id:'pressure',
            symbolName:'pressure'
         }
         ]
      },
   states: {
      "Base State": {
         "${_device001}": [
            ["style", "top", '82.8%'],
            ["style", "left", '-1.35%'],
            ["transform", "scaleY", '0.625'],
            ["transform", "scaleX", '0.625']
         ],
         "${_thruster04}": [
            ["style", "left", '0%'],
            ["style", "top", '40.12%']
         ],
         "${_thruster07}": [
            ["style", "top", '80.24%'],
            ["style", "left", '40%']
         ],
         "${_time}": [
            ["style", "letter-spacing", '0em'],
            ["color", "color", 'rgba(191,174,174,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '40%'],
            ["style", "font-size", '3em'],
            ["style", "top", '2.87%'],
            ["style", "height", '6.58%'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Seven Segment'],
            ["style", "word-spacing", '0em'],
            ["style", "width", '20%']
         ],
         "${_device005}": [
            ["style", "top", '95.05%'],
            ["transform", "scaleY", '0.63333'],
            ["style", "left", '-1.25%'],
            ["transform", "scaleX", '0.63291']
         ],
         "${_thruster06}": [
            ["style", "left", '0%'],
            ["style", "top", '80.24%']
         ],
         "${_thruster03}": [
            ["style", "top", '0%'],
            ["style", "left", '80%']
         ],
         "${_battery01}": [
            ["style", "top", '1.26%'],
            ["style", "left", '-0.57%'],
            ["transform", "scaleY", '0.46347'],
            ["transform", "scaleX", '0.46347']
         ],
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(0,116,107,0.40)'],
            ["style", "border-top-left-radius", [3,5], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "left", '65%'],
            ["style", "width", '35.1%'],
            ["style", "top", '27.73%'],
            ["style", "border-bottom-left-radius", [3,5], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["transform", "skewY", '0deg'],
            ["style", "height", '40%'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ]
         ],
         "${_temperature}": [
            ["transform", "scaleY", '0.83125'],
            ["style", "top", '81.16%']
         ],
         "${_kill_button_back}": [
            ["color", "background-color", 'rgba(0,116,107,1.00)'],
            ["style", "border-top-left-radius", [20,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-bottom-right-radius", [20,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "cursor", 'pointer'],
            ["style", "width", '3.1%'],
            ["style", "top", '3.43%'],
            ["style", "border-bottom-left-radius", [20,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "height", '3.52%'],
            ["style", "left", '86.93%'],
            ["style", "border-top-right-radius", [20,50], {valueTemplate:'@@0@@% @@1@@%'} ]
         ],
         "${_device003}": [
            ["style", "top", '88.92%'],
            ["style", "left", '-1.35%'],
            ["transform", "scaleY", '0.625'],
            ["transform", "scaleX", '0.625']
         ],
         "${_r_Script_text}": [
            ["style", "letter-spacing", '0em'],
            ["style", "left", '92.08%'],
            ["style", "font-size", '1.5em'],
            ["style", "top", '3.61%'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "height", '3.52%'],
            ["style", "width", '4.04%'],
            ["style", "word-spacing", '0em'],
            ["style", "cursor", 'pointer']
         ],
         "${_thruster08}": [
            ["style", "left", '80%'],
            ["style", "top", '80.24%']
         ],
         "${_device004}": [
            ["style", "top", '91.99%'],
            ["style", "left", '-1.35%'],
            ["transform", "scaleY", '0.625'],
            ["transform", "scaleX", '0.625']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(0,116,107,0.40)'],
            ["style", "border-bottom-right-radius", [2.97,4.63], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["transform", "scaleX", '1'],
            ["style", "left", '0%'],
            ["style", "width", '35.06%'],
            ["style", "top", '27.73%'],
            ["transform", "scaleY", '1'],
            ["transform", "skewX", '0deg'],
            ["style", "height", '40%'],
            ["style", "border-top-right-radius", [2.97,4.63], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["transform", "skewY", '0deg']
         ],
         "${_lan_text}": [
            ["style", "top", '4.82%'],
            ["style", "font-size", '0.8em'],
            ["style", "left", '82.6%'],
            ["style", "height", '1.95%'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '2.08%']
         ],
         "${_back}": [
            ["style", "left", '0%']
         ],
         "${_thrusters}": [
            ["style", "height", '55%'],
            ["style", "top", '25%'],
            ["style", "left", '39%'],
            ["style", "width", '20%']
         ],
         "${_device002}": [
            ["style", "top", '85.86%'],
            ["style", "left", '-1.35%'],
            ["transform", "scaleY", '0.625'],
            ["transform", "scaleX", '0.625']
         ],
         "${_battery002}": [
            ["transform", "scaleX", '0.46347'],
            ["style", "left", '-0.56%'],
            ["transform", "scaleY", '0.46347'],
            ["style", "top", '5.61%']
         ],
         "${_thruster02}": [
            ["style", "top", '0%'],
            ["style", "left", '40%']
         ],
         "${_lan_icon}": [
            ["style", "top", '3.15%'],
            ["transform", "scaleY", '0.78947'],
            ["transform", "scaleX", '0.78947'],
            ["style", "left", '82.35%'],
            ["style", "cursor", 'pointer']
         ],
         "${_thruster05}": [
            ["style", "left", '80%'],
            ["style", "top", '40.12%']
         ],
         "${_kbutton_text}": [
            ["style", "letter-spacing", '0em'],
            ["style", "left", '86.93%'],
            ["style", "font-size", '1.25em'],
            ["style", "top", '3.79%'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "height", '3.52%'],
            ["style", "cursor", 'pointer'],
            ["style", "word-spacing", '0em'],
            ["style", "width", '3.1%']
         ],
         "${_r_script_back}": [
            ["color", "background-color", 'rgba(0,116,107,1.00)'],
            ["style", "border-top-left-radius", [20,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-bottom-right-radius", [20,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-top-right-radius", [20,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "width", '4.04%'],
            ["style", "top", '3.43%'],
            ["style", "border-bottom-left-radius", [20,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "height", '3.55%'],
            ["style", "left", '92.08%'],
            ["style", "cursor", 'pointer']
         ],
         "${_time_back}": [
            ["style", "top", '5%'],
            ["style", "height", '4.4%'],
            ["style", "left", '40%'],
            ["style", "width", '20%']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '100%'],
            ["style", "height", '100%'],
            ["style", "overflow", 'hidden']
         ],
         "${_thruster01}": [
            ["style", "top", '0%'],
            ["style", "left", '0%']
         ],
         "${_pressure}": [
            ["style", "top", '81.07%'],
            ["transform", "scaleY", '0.83907'],
            ["style", "left", '92.14%'],
            ["transform", "scaleX", '0.99874']
         ],
         "${_Text2Copy9}": [
            ["style", "letter-spacing", '0em'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '12.99%'],
            ["style", "font-size", '170%'],
            ["style", "top", '44.83%'],
            ["style", "font-style", 'normal'],
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
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid127", tween: [ "style", "${_device004}", "top", '91.99%', { fromValue: '91.99%'}], position: 1000, duration: 0 },
            { id: "eid136", tween: [ "transform", "${_device005}", "scaleY", '0.63333', { fromValue: '0.63333'}], position: 1000, duration: 0 },
            { id: "eid71", tween: [ "style", "${_battery01}", "top", '1.26%', { fromValue: '1.26%'}], position: 983, duration: 0 },
            { id: "eid134", tween: [ "transform", "${_device005}", "scaleX", '0.63291', { fromValue: '0.63291'}], position: 1000, duration: 0 },
            { id: "eid96", tween: [ "transform", "${_lan_icon}", "scaleX", '0.78947', { fromValue: '0.78947'}], position: 1000, duration: 0 },
            { id: "eid94", tween: [ "style", "${_lan_icon}", "top", '3.15%', { fromValue: '3.15%'}], position: 1000, duration: 0 },
            { id: "eid95", tween: [ "style", "${_lan_icon}", "left", '82.35%', { fromValue: '82.35%'}], position: 1000, duration: 0 },
            { id: "eid97", tween: [ "transform", "${_lan_icon}", "scaleY", '0.78947', { fromValue: '0.78947'}], position: 1000, duration: 0 },
            { id: "eid135", tween: [ "style", "${_device005}", "left", '-1.25%', { fromValue: '-1.25%'}], position: 1000, duration: 0 },
            { id: "eid138", tween: [ "style", "${_device005}", "top", '95.05%', { fromValue: '95.05%'}], position: 1000, duration: 0 },
            { id: "eid70", tween: [ "style", "${_battery01}", "left", '-0.57%', { fromValue: '-0.57%'}], position: 983, duration: 0 }         ]
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
         userClass: 'meter2',
         type: 'image',
         id: 'metre2',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         transform: [],
         fill: ['rgba(0,0,0,0)','images/metre3.png','0px','0px']
      },
      {
         userClass: 'meter21',
         type: 'image',
         id: 'metre21',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         transform: [],
         fill: ['rgba(0,0,0,0)','images/metre3.png','0px','0px']
      },
      {
         userClass: 'meter22',
         type: 'image',
         id: 'metre22',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         transform: [],
         fill: ['rgba(0,0,0,0)','images/metre3.png','0px','0px']
      },
      {
         id: 'thruster2',
         type: 'image',
         rect: ['0%','0%','100%','100%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/thruster4.png','0px','0px']
      },
      {
         userClass: 'tt2',
         type: 'text',
         font: ['Arial, Helvetica, sans-serif',[170,'%'],'rgba(255,255,255,1.00)','400','none','normal'],
         id: 'Text2',
         text: '245',
         align: 'center',
         rect: ['13%','44.8%','73.2%','21.1%','auto','auto']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_metre2}": [
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
         "${_metre22}": [
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
         "${_Group2}": [
            ["style", "left", '0%'],
            ["style", "top", '0%']
         ],
         "${_thruster2}": [
            ["style", "height", '100.01%'],
            ["style", "top", '0%'],
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
            ["style", "width", '73.2%'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "font-style", 'normal'],
            ["style", "word-spacing", '0em'],
            ["style", "text-decoration", 'none'],
            ["style", "height", '21.05%']
         ],
         "${_metre21}": [
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
         rect: ['13%','44.8%','73.2%','21.1%','auto','auto'],
         userClass: 'tt1',
         align: 'center',
         id: 'Text1',
         text: '245',
         font: ['Arial, Helvetica, sans-serif',[170,'%'],'rgba(255,255,255,1.00)','400','none','normal'],
         type: 'text'
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_metre1}": [
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
         "${_metre12}": [
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
         "${_metre11}": [
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
         "${_Group1}": [
            ["style", "left", '0%'],
            ["style", "top", '0%']
         ],
         "${_thruster1}": [
            ["style", "height", '100.01%'],
            ["style", "top", '0%'],
            ["style", "left", '0%'],
            ["style", "width", '99.99%']
         ],
         "${_Text1}": [
            ["style", "letter-spacing", '0em'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '12.99%'],
            ["style", "font-size", '170%'],
            ["style", "top", '44.83%'],
            ["style", "width", '73.2%'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "height", '21.05%'],
            ["style", "word-spacing", '0em'],
            ["style", "text-decoration", 'none'],
            ["style", "font-style", 'normal']
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
         userClass: 'meter3',
         type: 'image',
         id: 'metre3',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         transform: [],
         fill: ['rgba(0,0,0,0)','images/metre3.png','0px','0px']
      },
      {
         userClass: 'meter31',
         type: 'image',
         id: 'metre31',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         transform: [],
         fill: ['rgba(0,0,0,0)','images/metre3.png','0px','0px']
      },
      {
         userClass: 'meter32',
         type: 'image',
         id: 'metre32',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         transform: [],
         fill: ['rgba(0,0,0,0)','images/metre3.png','0px','0px']
      },
      {
         id: 'thruster3',
         type: 'image',
         rect: ['0%','0%','100%','100%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/thruster4.png','0px','0px']
      },
      {
         userClass: 'tt3',
         type: 'text',
         font: ['Arial, Helvetica, sans-serif',[170,'%'],'rgba(255,255,255,1.00)','400','none','normal'],
         id: 'Text3',
         text: '245',
         align: 'center',
         rect: ['13%','44.8%','73.2%','21.1%','auto','auto']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_metre32}": [
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
         "${_metre31}": [
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
         "${_Text3}": [
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
         "${_thruster3}": [
            ["style", "top", '0%'],
            ["style", "height", '100.01%'],
            ["style", "left", '0%'],
            ["style", "width", '99.99%']
         ],
         "${_Group3}": [
            ["style", "left", '0%'],
            ["style", "top", '0%']
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
         userClass: 'meter4',
         type: 'image',
         id: 'metre4',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         transform: [],
         fill: ['rgba(0,0,0,0)','images/metre3.png','0px','0px']
      },
      {
         userClass: 'meter41',
         type: 'image',
         id: 'metre41',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         transform: [],
         fill: ['rgba(0,0,0,0)','images/metre3.png','0px','0px']
      },
      {
         userClass: 'meter42',
         type: 'image',
         id: 'metre42',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         transform: [],
         fill: ['rgba(0,0,0,0)','images/metre3.png','0px','0px']
      },
      {
         id: 'thruster4',
         type: 'image',
         rect: ['0%','0%','100%','100%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/thruster4.png','0px','0px']
      },
      {
         userClass: 'tt4',
         type: 'text',
         font: ['Arial, Helvetica, sans-serif',[170,'%'],'rgba(255,255,255,1.00)','400','none','normal'],
         id: 'Text4',
         text: '245',
         align: 'center',
         rect: ['13%','44.8%','73.2%','21.1%','auto','auto']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '133px'],
            ["style", "width", '96px']
         ],
         "${_metre41}": [
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
         "${_Group4}": [
            ["style", "left", '0%'],
            ["style", "top", '0%']
         ],
         "${_thruster4}": [
            ["style", "height", '100.01%'],
            ["style", "top", '0%'],
            ["style", "left", '0%'],
            ["style", "width", '99.99%']
         ],
         "${_metre4}": [
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
         "${_metre42}": [
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
         "${_Text4}": [
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
         userClass: 'meter5',
         type: 'image',
         id: 'metre5',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         transform: [],
         fill: ['rgba(0,0,0,0)','images/metre3.png','0px','0px']
      },
      {
         userClass: 'meter51',
         type: 'image',
         id: 'metre51',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         transform: [],
         fill: ['rgba(0,0,0,0)','images/metre3.png','0px','0px']
      },
      {
         userClass: 'meter52',
         type: 'image',
         id: 'metre52',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         transform: [],
         fill: ['rgba(0,0,0,0)','images/metre3.png','0px','0px']
      },
      {
         id: 'thruster5',
         type: 'image',
         rect: ['0%','0%','100%','100%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/thruster4.png','0px','0px']
      },
      {
         userClass: 'tt5',
         type: 'text',
         font: ['Arial, Helvetica, sans-serif',[170,'%'],'rgba(255,255,255,1.00)','400','none','normal'],
         id: 'Text5',
         text: '245',
         align: 'center',
         rect: ['13%','44.8%','73.2%','21.1%','auto','auto']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '133px'],
            ["style", "width", '96px']
         ],
         "${_Group3Copy6}": [
            ["style", "left", '0%'],
            ["style", "top", '0%']
         ],
         "${_metre52}": [
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
         "${_metre51}": [
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
         "${_thruster5}": [
            ["style", "height", '100.01%'],
            ["style", "top", '0%'],
            ["style", "left", '0%'],
            ["style", "width", '99.99%']
         ],
         "${_Text5}": [
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
         "${_metre5}": [
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
         userClass: 'meter6',
         type: 'image',
         id: 'metre6',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         transform: [],
         fill: ['rgba(0,0,0,0)','images/metre3.png','0px','0px']
      },
      {
         userClass: 'meter61',
         type: 'image',
         id: 'metre61',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         transform: [],
         fill: ['rgba(0,0,0,0)','images/metre3.png','0px','0px']
      },
      {
         userClass: 'meter62',
         type: 'image',
         id: 'metre62',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         transform: [],
         fill: ['rgba(0,0,0,0)','images/metre3.png','0px','0px']
      },
      {
         id: 'thruster6',
         type: 'image',
         rect: ['0%','0%','100%','100%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/thruster4.png','0px','0px']
      },
      {
         userClass: 'tt6',
         type: 'text',
         font: ['Arial, Helvetica, sans-serif',[170,'%'],'rgba(255,255,255,1.00)','400','none','normal'],
         id: 'Text6',
         text: '245',
         align: 'center',
         rect: ['13%','44.8%','73.2%','21.1%','auto','auto']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_metre61}": [
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
         "${_metre6}": [
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
         "${_thruster6}": [
            ["style", "height", '100.01%'],
            ["style", "top", '0%'],
            ["style", "left", '0%'],
            ["style", "width", '99.99%']
         ],
         "${symbolSelector}": [
            ["style", "height", '133px'],
            ["style", "width", '96px']
         ],
         "${_metre62}": [
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
         "${_Text6}": [
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
         userClass: 'meter7',
         type: 'image',
         id: 'metre7',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         transform: [],
         fill: ['rgba(0,0,0,0)','images/metre3.png','0px','0px']
      },
      {
         userClass: 'meter71',
         type: 'image',
         id: 'metre71',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         transform: [],
         fill: ['rgba(0,0,0,0)','images/metre3.png','0px','0px']
      },
      {
         userClass: 'meter72',
         type: 'image',
         id: 'metre72',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         transform: [],
         fill: ['rgba(0,0,0,0)','images/metre3.png','0px','0px']
      },
      {
         id: 'thruster7',
         type: 'image',
         rect: ['0%','0%','100%','100%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/thruster4.png','0px','0px']
      },
      {
         userClass: 'tt7',
         type: 'text',
         font: ['Arial, Helvetica, sans-serif',[170,'%'],'rgba(255,255,255,1.00)','400','none','normal'],
         id: 'Text7',
         text: '245',
         align: 'center',
         rect: ['13%','44.8%','73.2%','21.1%','auto','auto']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_metre72}": [
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
         "${_Text7}": [
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
         "${_thruster7}": [
            ["style", "height", '100.01%'],
            ["style", "top", '0%'],
            ["style", "left", '0%'],
            ["style", "width", '99.99%']
         ],
         "${_Group3Copy8}": [
            ["style", "left", '0%'],
            ["style", "top", '0%']
         ],
         "${_metre7}": [
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
         "${_metre71}": [
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
         userClass: 'meter8',
         type: 'image',
         id: 'metre8',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         transform: [],
         fill: ['rgba(0,0,0,0)','images/metre3.png','0px','0px']
      },
      {
         userClass: 'meter81',
         type: 'image',
         id: 'metre81',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         transform: [],
         fill: ['rgba(0,0,0,0)','images/metre3.png','0px','0px']
      },
      {
         userClass: 'meter82',
         type: 'image',
         id: 'metre82',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         transform: [],
         fill: ['rgba(0,0,0,0)','images/metre3.png','0px','0px']
      },
      {
         id: 'thruster8',
         type: 'image',
         rect: ['0%','0%','100%','100%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/thruster4.png','0px','0px']
      },
      {
         userClass: 'tt8',
         type: 'text',
         font: ['Arial, Helvetica, sans-serif',[170,'%'],'rgba(255,255,255,1.00)','400','none','normal'],
         id: 'Text8',
         text: '245',
         align: 'center',
         rect: ['13%','44.8%','73.2%','21.1%','auto','auto']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_metre8}": [
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
         "${_metre81}": [
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
         "${_thruster8}": [
            ["style", "height", '100.01%'],
            ["style", "top", '0%'],
            ["style", "left", '0%'],
            ["style", "width", '99.99%']
         ],
         "${symbolSelector}": [
            ["style", "height", '133px'],
            ["style", "width", '96px']
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
            ["style", "width", '73.2%'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "font-style", 'normal'],
            ["style", "word-spacing", '0em'],
            ["style", "text-decoration", 'none'],
            ["style", "height", '21.05%']
         ],
         "${_metre82}": [
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
"pressure": {
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
      rect: ['48.9%','0.1%','14.5%','83.8%','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'pressure_back',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(100,130,130,1.00)']
   },
   {
      transform: [],
      rect: ['48.9%','0.1%','14.5%','29.9%','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      type: 'rect',
      id: 'pressure_meter',
      stroke: [0,'rgba(0,0,0,1)','none'],
      userClass: 'pmeter',
      fill: ['rgba(0,45,244,1.00)']
   },
   {
      userClass: 'pvalue',
      rect: ['11.2%','14.5%','127.8%','18.6%','auto','auto'],
      type: 'text',
      align: 'center',
      id: 'pressure_value',
      text: '20 bar',
      font: ['Arial, Helvetica, sans-serif',[100,'%'],'rgba(255,255,255,1)','700','none','normal'],
      transform: [[0,0],['90']]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pressure_value}": [
            ["style", "top", '14.16%'],
            ["style", "width", '127.24%'],
            ["style", "text-align", 'center'],
            ["transform", "rotateZ", '90deg'],
            ["style", "height", '18.33%'],
            ["style", "font-weight", '700'],
            ["style", "left", '11.45%'],
            ["style", "font-size", '100%']
         ],
         "${_pressure_back}": [
            ["color", "background-color", 'rgba(100,130,130,1.00)'],
            ["style", "height", '83.84%'],
            ["style", "top", '0.21%'],
            ["style", "left", '49.8%'],
            ["style", "width", '13.36%']
         ],
         "${_pressure_meter}": [
            ["color", "background-color", 'rgba(0,45,244,1.00)'],
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '29.94%'],
            ["style", "top", '0.21%'],
            ["style", "left", '49.8%'],
            ["style", "width", '13.36%']
         ],
         "${symbolSelector}": [
            ["style", "height", '180px'],
            ["style", "width", '66px']
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
"temperature": {
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
      rect: ['49.1%','1.1%','14.5%','94.7%','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'temp_back',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(100,130,130,1.00)']
   },
   {
      transform: [],
      rect: ['auto','auto','14.5%','75.1%','36.4%','4.3%'],
      borderRadius: ['10px','10px','10px','10px'],
      type: 'rect',
      id: 'temp_meter',
      stroke: [0,'rgba(0,0,0,1)','none'],
      userClass: 'tmeter',
      fill: ['rgba(220,0,41,1.00)']
   },
   {
      userClass: 'tvalue',
      rect: ['11.4%','15.9%','127.5%','21%','auto','auto'],
      type: 'text',
      align: 'center',
      id: 'temp_value',
      text: '20 *C',
      font: ['Arial, Helvetica, sans-serif',[100,'%'],'rgba(255,255,255,1)','700','none','normal'],
      transform: [[0,0],['90']]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_temp_back}": [
            ["color", "background-color", 'rgba(100,130,130,1.00)'],
            ["style", "height", '94.66%'],
            ["style", "top", '0.91%'],
            ["style", "left", '49.95%'],
            ["style", "width", '13.33%']
         ],
         "${_temp_meter}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["style", "right", '36.73%'],
            ["style", "left", 'auto'],
            ["style", "width", '13.33%'],
            ["style", "top", 'auto'],
            ["style", "height", '74.78%'],
            ["color", "background-color", 'rgba(220,0,41,1.00)'],
            ["style", "bottom", '4.15%']
         ],
         "${_temp_value}": [
            ["style", "top", '16%'],
            ["style", "font-size", '100%'],
            ["style", "text-align", 'center'],
            ["transform", "rotateZ", '90deg'],
            ["style", "height", '20.69%'],
            ["style", "font-weight", '700'],
            ["style", "left", '11.7%'],
            ["style", "width", '126.88%']
         ],
         "${symbolSelector}": [
            ["style", "height", '160px'],
            ["style", "width", '66px']
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
"battery01": {
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
      rect: ['0.2%','-0.6%','91.8%','100%','auto','auto'],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      id: 'batt01_back',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(100,130,130,0.80)']
   },
   {
      type: 'rect',
      id: 'batt001_back',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['92%','27.7%','8%','41.7%','auto','auto'],
      fill: ['rgba(100,130,130,0.80)']
   },
   {
      userClass: 'batt01_status',
      borderRadius: ['5.54% 7.72%','0% 0%','0% 0%','5.54% 7.72%'],
      rect: ['0.2%','-0.6%','86.8%','100%','auto','auto'],
      id: 'batt01_status',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(1,166,119,1.00)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',[2.5,'em'],'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      align: 'center',
      id: 'Text4',
      text: '76%',
      rect: ['0px','8px','153px','57px','auto','auto'],
      userClass: 'batt01_percentage'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '65px'],
            ["style", "width", '167px']
         ],
         "${_batt01_status}": [
            ["style", "top", '0.02%'],
            ["style", "border-top-left-radius", [5.54,7.72], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["color", "background-color", 'rgba(1,166,119,1.00)'],
            ["style", "height", '100%'],
            ["style", "border-bottom-left-radius", [5.54,7.72], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "left", '0%'],
            ["style", "width", '86.83%']
         ],
         "${_batt001_back}": [
            ["style", "top", '27.69%'],
            ["style", "height", '41.67%'],
            ["color", "background-color", 'rgba(100,130,130,0.80)'],
            ["style", "left", '91.98%'],
            ["style", "width", '8.03%']
         ],
         "${_batt01_back}": [
            ["color", "background-color", 'rgba(100,130,130,0.80)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0%'],
            ["style", "width", '91.75%'],
            ["style", "top", '0.02%'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '100%'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Text4}": [
            ["style", "height", '57px'],
            ["style", "top", '8px']
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
"battery02": {
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
      rect: ['0%','-3.6%','3.5%','3%','auto','auto'],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      id: 'batt01_back',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(100,130,130,1)']
   },
   {
      rect: ['0.2%','-0.6%','4.4%','5.1%','auto','auto'],
      borderRadius: ['5.54% 7.72%','0% 0%','0% 0%','5.54% 7.72%'],
      userClass: 'batt02_status',
      id: 'batt01_status',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,166,93,1.00)']
   },
   {
      rect: ['9.7%','2.5%','0.4%','2.1%','auto','auto'],
      id: 'batt001_back',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(100,130,130,1)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',[2.5,'em'],'rgba(0,0,0,1)','normal','none','normal'],
      rect: ['0px','10px','153px','55px','auto','auto'],
      type: 'text',
      id: 'Text3',
      text: '43%',
      align: 'center',
      userClass: 'batt02_percentage'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '1080px'],
            ["style", "width", '1920px']
         ],
         "${_Text3}": [
            ["style", "top", '10px'],
            ["style", "left", '0px'],
            ["style", "height", '55px']
         ],
         "${_batt01_back}": [
            ["style", "top", '-3.61%'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '3.04%'],
            ["style", "left", '0%'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '3.54%']
         ],
         "${_batt001_back}": [
            ["style", "height", '2.12%'],
            ["style", "top", '2.5%'],
            ["style", "left", '9.69%'],
            ["style", "width", '0.41%']
         ],
         "${_batt01_status}": [
            ["style", "top", '0%'],
            ["style", "border-top-left-radius", [5.54,7.72], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["color", "background-color", 'rgba(0,166,93,1.00)'],
            ["style", "height", '5.09%'],
            ["style", "border-bottom-left-radius", [5.54,7.72], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "left", '0%'],
            ["style", "width", '4.43%']
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
"battery002": {
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
      rect: ['0.2%','-0.6%','91.8%','100%','auto','auto'],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      id: 'batt02_back',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(100,130,130,0.80)']
   },
   {
      type: 'rect',
      id: 'batt002_back',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['92%','27.7%','8%','41.7%','auto','auto'],
      fill: ['rgba(100,130,130,0.80)']
   },
   {
      userClass: 'batt02_status',
      borderRadius: ['5.54% 7.72%','0% 0%','0% 0%','5.54% 7.72%'],
      rect: ['0%','0%','15%','100%','auto','auto'],
      id: 'batt02_status',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(1,166,119,1.00)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',[2.5,'em'],'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      align: 'center',
      id: 'Text5',
      text: '43%',
      rect: ['0px','9px','153px','56px','auto','auto'],
      userClass: 'batt02_percentage'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '65px'],
            ["style", "width", '167px']
         ],
         "${_batt02_back}": [
            ["color", "background-color", 'rgba(100,130,130,0.80)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '91.75%'],
            ["style", "top", '0.02%'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '100%'],
            ["style", "left", '0%']
         ],
         "${_batt002_back}": [
            ["style", "top", '27.69%'],
            ["style", "height", '41.67%'],
            ["color", "background-color", 'rgba(100,130,130,0.80)'],
            ["style", "left", '91.98%'],
            ["style", "width", '8.03%']
         ],
         "${_Text5}": [
            ["style", "height", '56px'],
            ["style", "top", '9px']
         ],
         "${_batt02_status}": [
            ["color", "background-color", 'rgba(1,166,119,1.00)'],
            ["style", "border-top-left-radius", [5.54,7.72], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "top", '0.02%'],
            ["style", "height", '100%'],
            ["style", "border-bottom-left-radius", [5.54,7.72], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "left", '0%'],
            ["style", "width", '14.97%']
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
"lan": {
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
      rect: ['0%','0%','100%','78.7%','auto','auto'],
      userClass: 'lan',
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,116,107,1)']
   },
   {
      rect: ['11.9%','10.5%','76.3%','79.6%','auto','auto'],
      userClass: 'lan',
      id: 'RectangleCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,116,107,1)']
   },
   {
      rect: ['23.8%','21.3%','53.4%','79.6%','auto','auto'],
      userClass: 'lan',
      id: 'RectangleCopy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,116,107,1)']
   },
   {
      id: 'lan02',
      type: 'image',
      rect: ['0%','0%','100%','100.1%','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/lan02.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RectangleCopy}": [
            ["style", "height", '78.74%'],
            ["style", "top", '10.54%'],
            ["style", "left", '11.9%'],
            ["style", "width", '76.28%']
         ],
         "${_RectangleCopy2}": [
            ["style", "top", '21.33%'],
            ["style", "height", '78.74%'],
            ["style", "left", '23.77%'],
            ["style", "width", '53.44%']
         ],
         "${_Rectangle}": [
            ["style", "height", '78.74%'],
            ["style", "left", '0.02%'],
            ["style", "top", '0.02%']
         ],
         "${_lan02}": [
            ["style", "top", '0.02%'],
            ["style", "height", '100.05%'],
            ["style", "left", '0.02%'],
            ["style", "width", '100.04%']
         ],
         "${symbolSelector}": [
            ["style", "height", '38px'],
            ["style", "width", '42px']
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
"device001": {
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
      userClass: 'device01',
      borderRadius: ['6.25% 66.67%','6.25% 66.67%','6.25% 66.67%','6.25% 66.67%'],
      rect: ['0%','0%','50%','100%','auto','auto'],
      id: 'device01',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(100,130,130,0.80)']
   },
   {
      font: ['Verdana, Geneva, sans-serif',[1.5,'em'],'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'device01_name',
      text: 'Device_01',
      align: 'center',
      rect: ['0%','0%','50%','100%','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_device01_name}": [
            ["style", "top", '0%'],
            ["style", "height", '100%'],
            ["style", "font-size", '1.5em'],
            ["style", "left", '0%'],
            ["style", "width", '50%']
         ],
         "${_device01}": [
            ["color", "background-color", 'rgba(100,130,130,0.80)'],
            ["style", "border-bottom-left-radius", [6.25,66.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-top-left-radius", [6.25,66.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-bottom-right-radius", [6.25,66.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-top-right-radius", [6.25,66.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "top", '0%'],
            ["style", "left", '0%'],
            ["style", "width", '50%']
         ],
         "${symbolSelector}": [
            ["style", "height", '30px'],
            ["style", "width", '320px']
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
"device02": {
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
      userClass: 'device02',
      borderRadius: ['6.25% 66.67%','6.25% 66.67%','6.25% 66.67%','6.25% 66.67%'],
      rect: ['0%','0%','50%','100%','auto','auto'],
      id: 'device02',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(100,130,130,0.80)']
   },
   {
      font: ['Verdana, Geneva, sans-serif',[1.5,'em'],'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'device02_name',
      text: 'Device_02',
      align: 'center',
      rect: ['0%','0%','50%','100%','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_device02}": [
            ["color", "background-color", 'rgba(100,130,130,0.80)'],
            ["style", "border-top-left-radius", [6.25,66.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "top", '0%'],
            ["style", "border-bottom-right-radius", [6.25,66.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "left", '0%'],
            ["style", "border-bottom-left-radius", [6.25,66.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-top-right-radius", [6.25,66.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "width", '50%']
         ],
         "${_device02_name}": [
            ["style", "top", '0%'],
            ["style", "height", '100%'],
            ["style", "font-size", '1.5em'],
            ["style", "left", '0%'],
            ["style", "width", '50%']
         ],
         "${symbolSelector}": [
            ["style", "height", '30px'],
            ["style", "width", '320px']
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
"device003": {
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
      userClass: 'device03',
      borderRadius: ['6.25% 66.67%','6.25% 66.67%','6.25% 66.67%','6.25% 66.67%'],
      rect: ['0%','0%','50%','100%','auto','auto'],
      id: 'device01Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(100,130,130,0.80)']
   },
   {
      font: ['Verdana, Geneva, sans-serif',[1.5,'em'],'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'device01_nameCopy',
      text: 'Device_03',
      align: 'center',
      rect: ['0%','0%','50%','100%','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_device01_nameCopy}": [
            ["style", "top", '0%'],
            ["style", "height", '100%'],
            ["style", "font-size", '1.5em'],
            ["style", "left", '0%'],
            ["style", "width", '50%']
         ],
         "${_device01Copy}": [
            ["color", "background-color", 'rgba(100,130,130,0.80)'],
            ["style", "border-bottom-left-radius", [6.25,66.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-top-left-radius", [6.25,66.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-bottom-right-radius", [6.25,66.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-top-right-radius", [6.25,66.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "top", '0%'],
            ["style", "left", '0%'],
            ["style", "width", '50%']
         ],
         "${symbolSelector}": [
            ["style", "height", '30px'],
            ["style", "width", '320px']
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
"device04": {
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
      userClass: 'device04',
      borderRadius: ['6.25% 66.67%','6.25% 66.67%','6.25% 66.67%','6.25% 66.67%'],
      rect: ['0%','0%','50%','100%','auto','auto'],
      id: 'device01Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(100,130,130,0.80)']
   },
   {
      font: ['Verdana, Geneva, sans-serif',[1.5,'em'],'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'device01_nameCopy2',
      text: 'Device_04',
      align: 'center',
      rect: ['0%','0%','50%','100%','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_device01Copy2}": [
            ["color", "background-color", 'rgba(100,130,130,0.80)'],
            ["style", "border-bottom-left-radius", [6.25,66.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-top-left-radius", [6.25,66.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-bottom-right-radius", [6.25,66.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-top-right-radius", [6.25,66.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "top", '0%'],
            ["style", "left", '0%'],
            ["style", "width", '50%']
         ],
         "${_device01_nameCopy2}": [
            ["style", "top", '0%'],
            ["style", "height", '100%'],
            ["style", "font-size", '1.5em'],
            ["style", "left", '0%'],
            ["style", "width", '50%']
         ],
         "${symbolSelector}": [
            ["style", "height", '30px'],
            ["style", "width", '320px']
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
"device005": {
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
      rect: ['0%','0%','50%','100%','auto','auto'],
      borderRadius: ['6.25% 66.67%','6.25% 66.67%','6.25% 66.67%','6.25% 66.67%'],
      userClass: 'device05',
      id: 'device01Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(100,130,130,0.80)']
   },
   {
      rect: ['0%','0%','50%','100%','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',[1.5,'em'],'rgba(0,0,0,1)','normal','none','normal'],
      id: 'device01_nameCopy3',
      text: 'Device_05',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_device01Copy3}": [
            ["color", "background-color", 'rgba(100,130,130,0.80)'],
            ["style", "border-top-left-radius", [6.25,66.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-bottom-right-radius", [6.25,66.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "left", '0%'],
            ["style", "width", '50%'],
            ["style", "top", '0.02%'],
            ["style", "border-bottom-left-radius", [6.25,66.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "height", '100%'],
            ["style", "border-top-right-radius", [6.25,66.67], {valueTemplate:'@@0@@% @@1@@%'} ]
         ],
         "${_device01_nameCopy3}": [
            ["style", "top", '0.02%'],
            ["style", "height", '100%'],
            ["style", "font-size", '1.5em'],
            ["style", "left", '0%'],
            ["style", "width", '50%']
         ],
         "${symbolSelector}": [
            ["style", "height", '30px'],
            ["style", "width", '316px']
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
