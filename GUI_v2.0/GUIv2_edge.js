/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['ubuntu-mono, sans-serif']='<script src=\"http://use.edgefonts.net/ubuntu-mono:n7,i7,n4,i4:all.js\"></script>';


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
            id:'gui_back',
            type:'image',
            rect:['0%','0%','100%','100%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"gui_back02.png",'0px','0px']
         },
         {
            id:'Rectangle',
            type:'rect',
            rect:['50%','0%','0.1%','100%','auto','auto'],
            fill:["rgba(255,0,0,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'thruster01',
            type:'rect',
            rect:['22%','18%','auto','auto','auto','auto']
         },
         {
            id:'thruster02',
            type:'rect',
            rect:['24.9%','16%','auto','auto','auto','auto']
         },
         {
            id:'thruster03',
            type:'rect',
            rect:['23.1%','26.1%','auto','auto','auto','auto']
         },
         {
            id:'thruster04',
            type:'rect',
            rect:['42.9%','36.6%','auto','auto','auto','auto'],
            transform:[[],[],[],['0.417','0.414']]
         },
         {
            id:'thruster05',
            type:'rect',
            rect:['27.4%','16.9%','auto','auto','auto','auto']
         },
         {
            id:'thruster06',
            type:'rect',
            rect:['22%','23.9%','auto','auto','auto','auto']
         },
         {
            id:'thruster07',
            type:'rect',
            rect:['27.9%','24.9%','auto','auto','auto','auto']
         },
         {
            id:'thruster08',
            type:'rect',
            rect:['26.2%','24.2%','auto','auto','auto','auto']
         },
         {
            id:'battery01',
            type:'rect',
            rect:['12.6%','12.6%','auto','auto','auto','auto']
         },
         {
            id:'battery002',
            type:'rect',
            rect:['5.2%','20%','auto','auto','auto','auto']
         },
         {
            id:'lan',
            type:'rect',
            rect:['60.1%','12.6%','auto','auto','auto','auto']
         },
         {
            id:'time_back2',
            type:'image',
            rect:['42.6%','5%','15%','3.3%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"time_back.png",'0px','0px']
         },
         {
            id:'video_bar01',
            type:'rect',
            rect:['0.9%','25%','40%','40%','auto','auto'],
            fill:["rgba(70,70,70,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'video_bar02',
            type:'rect',
            rect:['59%','25%','40%','40%','auto','auto'],
            fill:["rgba(70,70,70,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Devices_container',
            type:'rect',
            rect:['2%','80.9%','12.8%','16.6%','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            boxShadow:["",3,3,3,0,"rgba(0,0,0,0.65)"]
         },
         {
            id:'device01',
            type:'rect',
            rect:['5.4%','80.9%','16.7%','2.8%','auto','auto']
         },
         {
            id:'device02',
            type:'rect',
            rect:['1.7%','86.1%','5%','2.5%','auto','auto']
         },
         {
            id:'device03',
            type:'rect',
            rect:['1.3%','88.5%','5%','2.5%','auto','auto']
         },
         {
            id:'device04',
            type:'rect',
            rect:['8.8%','81.5%','5%','2.5%','auto','auto']
         },
         {
            id:'device05',
            type:'rect',
            rect:['7.7%','84.6%','auto','2.5%','auto','auto']
         },
         {
            id:'device06',
            type:'rect',
            rect:['7.7%','88.3%','5%','2.5%','auto','auto']
         },
         {
            id:'Device_online_bar',
            type:'rect',
            rect:['0.9%','80.9%','12.8%','2.5%','auto','auto'],
            fill:["rgba(90,90,90,0.50)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Device_online_Text',
            type:'text',
            rect:['1.7%','81.1%','12.1%','2.5%','auto','auto'],
            text:"Devices Online",
            align:"left",
            font:['ubuntu-mono, sans-serif',[1,"em"],"rgba(225,225,225,0.50)","500","none","normal"]
         }],
         symbolInstances: [
         {
            id:'device05',
            symbolName:'device05'
         },
         {
            id:'device01',
            symbolName:'device01'
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
            id:'device04',
            symbolName:'device04'
         },
         {
            id:'lan',
            symbolName:'lan'
         },
         {
            id:'device06',
            symbolName:'device06'
         },
         {
            id:'battery01',
            symbolName:'battery01'
         },
         {
            id:'device02',
            symbolName:'device02'
         },
         {
            id:'device03',
            symbolName:'device03'
         },
         {
            id:'thruster08',
            symbolName:'thruster08'
         },
         {
            id:'battery002',
            symbolName:'battery002'
         },
         {
            id:'thruster03',
            symbolName:'thruster03'
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
            id:'thruster07',
            symbolName:'thruster07'
         }
         ]
      },
   states: {
      "Base State": {
         "${_battery01}": [
            ["style", "top", '0.6%'],
            ["transform", "scaleX", '0.47904'],
            ["transform", "scaleY", '0.46154'],
            ["style", "left", '2.32%']
         ],
         "${_thruster07}": [
            ["style", "top", '46.59%'],
            ["transform", "scaleY", '0.41353'],
            ["style", "left", '46.94%'],
            ["transform", "scaleX", '0.41667']
         ],
         "${_thruster06}": [
            ["style", "top", '46.59%'],
            ["transform", "scaleY", '0.41353'],
            ["style", "left", '42.94%'],
            ["transform", "scaleX", '0.41667']
         ],
         "${_thruster03}": [
            ["style", "top", '26.59%'],
            ["transform", "scaleY", '0.41353'],
            ["style", "left", '50.94%'],
            ["transform", "scaleX", '0.41667']
         ],
         "${_Devices_container}": [
            ["color", "background-color", 'rgba(34,34,34,1.00)'],
            ["subproperty", "boxShadow.blur", '10px'],
            ["style", "left", '0.89%'],
            ["style", "width", '12.83%'],
            ["style", "top", '80.86%'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "height", '16.59%'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.spread", '0.2px']
         ],
         "${_device06}": [
            ["style", "height", '2.5%'],
            ["style", "top", '92.8%'],
            ["style", "width", '5%']
         ],
         "${_device05}": [
            ["style", "top", '89.7%'],
            ["style", "height", '2.5%'],
            ["style", "width", '5%']
         ],
         "${_Device_online_bar}": [
            ["color", "background-color", 'rgba(90,90,90,0.50)'],
            ["style", "height", '2.5%'],
            ["style", "top", '80.86%'],
            ["style", "width", '12.82%']
         ],
         "${_device02}": [
            ["style", "height", '2.5%'],
            ["style", "top", '89.66%'],
            ["style", "width", '5%']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(255,0,0,1.00)'],
            ["style", "top", '0%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '100%'],
            ["style", "opacity", '0'],
            ["style", "left", '50%'],
            ["style", "width", '0.1%']
         ],
         "${_thruster08}": [
            ["style", "top", '46.59%'],
            ["transform", "scaleY", '0.41353'],
            ["style", "left", '50.94%'],
            ["transform", "scaleX", '0.41667']
         ],
         "${_time_back2}": [
            ["style", "height", '3.33%'],
            ["style", "top", '4.95%'],
            ["style", "left", '42.55%'],
            ["style", "width", '15%']
         ],
         "${_battery002}": [
            ["style", "top", '4.92%'],
            ["transform", "scaleY", '0.46154'],
            ["transform", "scaleX", '0.47904'],
            ["style", "left", '2.32%'],
            ["style", "width", '167px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '100%'],
            ["style", "width", '100%']
         ],
         "${_device03}": [
            ["style", "top", '92.8%'],
            ["style", "height", '2.5%'],
            ["style", "left", '1.7%'],
            ["style", "width", '5%']
         ],
         "${_lan}": [
            ["style", "top", '3.61%'],
            ["style", "left", '93.54%']
         ],
         "${_video_bar01}": [
            ["style", "top", '25%'],
            ["style", "height", '40%'],
            ["color", "background-color", 'rgba(70,70,70,1.00)'],
            ["style", "left", '0.9%'],
            ["style", "width", '40%']
         ],
         "${_thruster02}": [
            ["style", "top", '26.59%'],
            ["transform", "scaleX", '0.41667'],
            ["transform", "scaleY", '0.41353'],
            ["style", "left", '46.94%']
         ],
         "${_device01}": [
            ["style", "height", '2.5%'],
            ["style", "top", '86.48%'],
            ["style", "left", '1.66%'],
            ["style", "width", '5%']
         ],
         "${_thruster05}": [
            ["style", "top", '36.59%'],
            ["transform", "scaleY", '0.41353'],
            ["style", "left", '50.94%'],
            ["transform", "scaleX", '0.41667']
         ],
         "${_thruster04}": [
            ["style", "top", '36.59%'],
            ["transform", "scaleY", '0.41353'],
            ["style", "left", '42.94%'],
            ["transform", "scaleX", '0.41667']
         ],
         "${_video_bar02}": [
            ["style", "top", '25%'],
            ["style", "height", '40%'],
            ["color", "background-color", 'rgba(70,70,70,1.00)'],
            ["style", "left", '59%'],
            ["style", "width", '40%']
         ],
         "${_thruster01}": [
            ["style", "top", '26.57%'],
            ["transform", "scaleX", '0.41667'],
            ["transform", "scaleY", '0.41353'],
            ["style", "left", '42.94%']
         ],
         "${_device04}": [
            ["style", "height", '2.5%'],
            ["style", "top", '86.5%'],
            ["style", "left", '7.64%'],
            ["style", "width", '5%']
         ],
         "${_Device_online_Text}": [
            ["style", "top", '81.13%'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(225,225,225,0.50)'],
            ["style", "height", '2.5%'],
            ["style", "left", '1.7%'],
            ["style", "width", '12.09%']
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
            { id: "eid50", tween: [ "style", "${_battery002}", "left", '2.32%', { fromValue: '2.32%'}], position: 0, duration: 0 },
            { id: "eid39", tween: [ "transform", "${_battery01}", "scaleY", '0.46154', { fromValue: '0.46154'}], position: 0, duration: 0 },
            { id: "eid194", tween: [ "style", "${_thruster07}", "top", '46.59%', { fromValue: '46.59%'}], position: 0, duration: 0 },
            { id: "eid42", tween: [ "transform", "${_battery002}", "scaleX", '0.47904', { fromValue: '0.47904'}], position: 0, duration: 0 },
            { id: "eid311", tween: [ "style", "${_device02}", "top", '89.66%', { fromValue: '89.66%'}], position: 0, duration: 0 },
            { id: "eid183", tween: [ "style", "${_thruster05}", "left", '50.94%', { fromValue: '50.94%'}], position: 0, duration: 0 },
            { id: "eid310", tween: [ "style", "${_device01}", "top", '86.48%', { fromValue: '86.48%'}], position: 0, duration: 0 },
            { id: "eid177", tween: [ "style", "${_thruster02}", "left", '46.94%', { fromValue: '46.94%'}], position: 0, duration: 0 },
            { id: "eid162", tween: [ "style", "${_thruster01}", "top", '26.57%', { fromValue: '26.57%'}], position: 0, duration: 0 },
            { id: "eid57", tween: [ "style", "${_battery002}", "top", '4.92%', { fromValue: '4.92%'}], position: 0, duration: 0 },
            { id: "eid191", tween: [ "style", "${_thruster07}", "left", '46.94%', { fromValue: '46.94%'}], position: 0, duration: 0 },
            { id: "eid309", tween: [ "style", "${_device01}", "left", '1.66%', { fromValue: '1.66%'}], position: 0, duration: 0 },
            { id: "eid181", tween: [ "style", "${_thruster03}", "left", '50.94%', { fromValue: '50.94%'}], position: 0, duration: 0 },
            { id: "eid184", tween: [ "style", "${_thruster06}", "left", '42.94%', { fromValue: '42.94%'}], position: 0, duration: 0 },
            { id: "eid52", tween: [ "style", "${_battery01}", "top", '0.6%', { fromValue: '0.6%'}], position: 0, duration: 0 },
            { id: "eid190", tween: [ "style", "${_thruster08}", "left", '50.94%', { fromValue: '50.94%'}], position: 0, duration: 0 },
            { id: "eid179", tween: [ "style", "${_thruster01}", "left", '42.94%', { fromValue: '42.94%'}], position: 0, duration: 0 },
            { id: "eid308", tween: [ "style", "${_device05}", "top", '89.7%', { fromValue: '89.7%'}], position: 0, duration: 0 },
            { id: "eid307", tween: [ "style", "${_device03}", "top", '92.8%', { fromValue: '92.8%'}], position: 0, duration: 0 },
            { id: "eid192", tween: [ "style", "${_thruster05}", "top", '36.59%', { fromValue: '36.59%'}], position: 0, duration: 0 },
            { id: "eid40", tween: [ "transform", "${_battery01}", "scaleX", '0.47904', { fromValue: '0.47904'}], position: 0, duration: 0 },
            { id: "eid180", tween: [ "style", "${_thruster03}", "top", '26.59%', { fromValue: '26.59%'}], position: 0, duration: 0 },
            { id: "eid304", tween: [ "style", "${_device06}", "top", '92.8%', { fromValue: '92.8%'}], position: 0, duration: 0 },
            { id: "eid306", tween: [ "style", "${_device04}", "top", '86.5%', { fromValue: '86.5%'}], position: 0, duration: 0 },
            { id: "eid44", tween: [ "transform", "${_battery002}", "scaleY", '0.46154', { fromValue: '0.46154'}], position: 0, duration: 0 },
            { id: "eid165", tween: [ "style", "${_thruster02}", "top", '26.59%', { fromValue: '26.59%'}], position: 0, duration: 0 },
            { id: "eid305", tween: [ "style", "${_device04}", "left", '7.64%', { fromValue: '7.64%'}], position: 0, duration: 0 },
            { id: "eid193", tween: [ "style", "${_thruster06}", "top", '46.59%', { fromValue: '46.59%'}], position: 0, duration: 0 },
            { id: "eid195", tween: [ "style", "${_thruster08}", "top", '46.59%', { fromValue: '46.59%'}], position: 0, duration: 0 },
            { id: "eid41", tween: [ "style", "${_battery01}", "left", '2.32%', { fromValue: '2.32%'}], position: 0, duration: 0 }         ]
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
      rect: ['92%','27.7%','8%','41.7%','auto','auto'],
      id: 'batt001_back',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(100,130,130,0.80)']
   },
   {
      rect: ['0.2%','-0.6%','86.8%','100%','auto','auto'],
      borderRadius: ['5.54% 7.72%','0% 0%','0% 0%','5.54% 7.72%'],
      userClass: 'batt01_status',
      id: 'batt01_status',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,166,145,1)']
   },
   {
      rect: ['0px','8px','153px','57px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',[2.5,'em'],'rgba(0,0,0,1)','normal','none','normal'],
      userClass: 'batt01_percentage',
      id: 'Text4',
      text: '76%',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_batt01_status}": [
            ["color", "background-color", 'rgba(0,166,145,1.00)'],
            ["style", "border-top-left-radius", [5.54,7.72], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "top", '0.02%'],
            ["style", "height", '100%'],
            ["style", "border-bottom-left-radius", [5.54,7.72], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "left", '0%'],
            ["style", "width", '86.83%']
         ],
         "${symbolSelector}": [
            ["style", "height", '65px'],
            ["style", "width", '167px']
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
      rect: ['92%','27.7%','8%','41.7%','auto','auto'],
      id: 'batt002_back',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(100,130,130,0.80)']
   },
   {
      rect: ['0%','0%','15%','100%','auto','auto'],
      borderRadius: ['5.54% 7.72%','0% 0%','0% 0%','5.54% 7.72%'],
      userClass: 'batt02_status',
      id: 'batt02_status',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,166,145,1)']
   },
   {
      rect: ['0px','9px','153px','56px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',[2.5,'em'],'rgba(0,0,0,1)','normal','none','normal'],
      userClass: 'batt02_percentage',
      id: 'Text5',
      text: '43%',
      align: 'center',
      type: 'text'
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
         "${_Text5}": [
            ["style", "height", '56px'],
            ["style", "top", '9px']
         ],
         "${_batt02_status}": [
            ["style", "top", '0.02%'],
            ["style", "border-top-left-radius", [5.54,7.72], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["color", "background-color", 'rgba(0,166,145,1.00)'],
            ["style", "height", '100%'],
            ["style", "border-bottom-left-radius", [5.54,7.72], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "left", '0%'],
            ["style", "width", '14.97%']
         ],
         "${_batt002_back}": [
            ["style", "top", '27.69%'],
            ["style", "height", '41.67%'],
            ["color", "background-color", 'rgba(100,130,130,0.80)'],
            ["style", "left", '91.98%'],
            ["style", "width", '8.03%']
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
"device01": {
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
      rect: ['0%','0%','100%','100%','auto','auto'],
      borderRadius: ['6.25% 66.67%','6.25% 66.67%','6.25% 66.67%','6.25% 66.67%'],
      userClass: 'device01',
      id: 'device01',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(100,130,130,0.80)']
   },
   {
      type: 'text',
      rect: ['0%','7%','100%','100%','auto','auto'],
      id: 'device01_name',
      text: 'Jetson',
      align: 'center',
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(0,0,0,1)','500','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_device01_name}": [
            ["style", "line-height", '120%'],
            ["style", "letter-spacing", '0em'],
            ["style", "font-weight", '500'],
            ["style", "left", '0%'],
            ["style", "width", '100%'],
            ["style", "top", '7%'],
            ["style", "text-indent", '0%'],
            ["style", "height", '100%'],
            ["style", "font-family", 'ubuntu-mono, sans-serif'],
            ["style", "word-spacing", '0em'],
            ["style", "font-size", '1em']
         ],
         "${symbolSelector}": [
            ["style", "height", '2.78%'],
            ["style", "width", '16.67%']
         ],
         "${_Text}": [
            ["style", "height", '30px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '320px']
         ],
         "${_device01}": [
            ["color", "background-color", 'rgba(100,130,130,0.80)'],
            ["style", "border-top-left-radius", [6.25,66.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-bottom-right-radius", [6.25,66.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "left", '0%'],
            ["style", "width", '100%'],
            ["style", "top", '0%'],
            ["style", "border-bottom-left-radius", [6.25,66.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "height", '100%'],
            ["style", "border-top-right-radius", [6.25,66.67], {valueTemplate:'@@0@@% @@1@@%'} ]
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
      fill: ['rgba(0,166,145,1)']
   },
   {
      rect: ['11.9%','10.5%','76.3%','79.6%','auto','auto'],
      userClass: 'lan',
      id: 'RectangleCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,166,145,1)']
   },
   {
      rect: ['23.8%','21.3%','53.4%','79.6%','auto','auto'],
      userClass: 'lan',
      id: 'RectangleCopy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,166,145,1)']
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
            ["style", "top", '10.54%'],
            ["style", "height", '78.74%'],
            ["color", "background-color", 'rgba(0,166,145,1.00)'],
            ["style", "left", '11.9%'],
            ["style", "width", '76.28%']
         ],
         "${_RectangleCopy2}": [
            ["style", "top", '21.33%'],
            ["style", "height", '78.74%'],
            ["color", "background-color", 'rgba(0,166,145,1.00)'],
            ["style", "left", '23.77%'],
            ["style", "width", '53.44%']
         ],
         "${_Rectangle}": [
            ["style", "height", '78.74%'],
            ["color", "background-color", 'rgba(0,166,145,1.00)'],
            ["style", "left", '0.02%'],
            ["style", "top", '0.02%']
         ],
         "${_lan02}": [
            ["style", "height", '100.05%'],
            ["style", "top", '0.02%'],
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
         fill: ['rgba(0,0,0,0)','images/metre4.png','0px','0px']
      },
      {
         transform: [],
         userClass: 'meter11',
         id: 'metre11',
         type: 'image',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/metre4.png','0px','0px']
      },
      {
         transform: [],
         userClass: 'meter12',
         id: 'metre12',
         type: 'image',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/metre4.png','0px','0px']
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
         "${symbolSelector}": [
            ["style", "height", '133px'],
            ["style", "width", '96px']
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
         "${_thruster1}": [
            ["style", "top", '0%'],
            ["style", "height", '100.01%'],
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
            ["style", "height", '21.05%'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "font-style", 'normal'],
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
         fill: ['rgba(0,0,0,0)','images/metre4.png','0px','0px']
      },
      {
         transform: [],
         userClass: 'meter21',
         id: 'metre21',
         type: 'image',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/metre4.png','0px','0px']
      },
      {
         transform: [],
         userClass: 'meter22',
         id: 'metre22',
         type: 'image',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/metre4.png','0px','0px']
      },
      {
         id: 'thruster2',
         type: 'image',
         rect: ['0%','0%','100%','100%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/thruster4.png','0px','0px']
      },
      {
         rect: ['13%','44.8%','73.2%','21.1%','auto','auto'],
         userClass: 'tt2',
         align: 'center',
         id: 'Text2',
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
         "${symbolSelector}": [
            ["style", "height", '133px'],
            ["style", "width", '96px']
         ],
         "${_Group2}": [
            ["style", "left", '0%'],
            ["style", "top", '0%']
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
         fill: ['rgba(0,0,0,0)','images/metre4.png','0px','0px']
      },
      {
         transform: [],
         userClass: 'meter31',
         id: 'metre31',
         type: 'image',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/metre4.png','0px','0px']
      },
      {
         transform: [],
         userClass: 'meter32',
         id: 'metre32',
         type: 'image',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/metre4.png','0px','0px']
      },
      {
         id: 'thruster3',
         type: 'image',
         rect: ['0%','0%','100%','100%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/thruster4.png','0px','0px']
      },
      {
         rect: ['13%','44.8%','73.2%','21.1%','auto','auto'],
         userClass: 'tt3',
         align: 'center',
         id: 'Text3',
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
         "${_thruster3}": [
            ["style", "height", '100.01%'],
            ["style", "top", '0%'],
            ["style", "left", '0%'],
            ["style", "width", '99.99%']
         ],
         "${_Group3}": [
            ["style", "left", '0%'],
            ["style", "top", '0%']
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
         fill: ['rgba(0,0,0,0)','images/metre4.png','0px','0px']
      },
      {
         transform: [],
         userClass: 'meter41',
         id: 'metre41',
         type: 'image',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/metre4.png','0px','0px']
      },
      {
         transform: [],
         userClass: 'meter42',
         id: 'metre42',
         type: 'image',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/metre4.png','0px','0px']
      },
      {
         id: 'thruster4',
         type: 'image',
         rect: ['0%','0%','100%','100%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/thruster4.png','0px','0px']
      },
      {
         rect: ['13%','44.8%','73.2%','21.1%','auto','auto'],
         userClass: 'tt4',
         align: 'center',
         id: 'Text4',
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
         "${_Group4}": [
            ["style", "left", '0%'],
            ["style", "top", '0%']
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
         fill: ['rgba(0,0,0,0)','images/metre4.png','0px','0px']
      },
      {
         transform: [],
         userClass: 'meter51',
         id: 'metre51',
         type: 'image',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/metre4.png','0px','0px']
      },
      {
         transform: [],
         userClass: 'meter52',
         id: 'metre52',
         type: 'image',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/metre4.png','0px','0px']
      },
      {
         id: 'thruster5',
         type: 'image',
         rect: ['0%','0%','100%','100%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/thruster4.png','0px','0px']
      },
      {
         rect: ['13%','44.8%','73.2%','21.1%','auto','auto'],
         userClass: 'tt5',
         align: 'center',
         id: 'Text5',
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
         fill: ['rgba(0,0,0,0)','images/metre4.png','0px','0px']
      },
      {
         transform: [],
         userClass: 'meter61',
         id: 'metre61',
         type: 'image',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/metre4.png','0px','0px']
      },
      {
         transform: [],
         userClass: 'meter62',
         id: 'metre62',
         type: 'image',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/metre4.png','0px','0px']
      },
      {
         id: 'thruster6',
         type: 'image',
         rect: ['0%','0%','100%','100%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/thruster4.png','0px','0px']
      },
      {
         rect: ['13%','44.8%','73.2%','21.1%','auto','auto'],
         userClass: 'tt6',
         align: 'center',
         id: 'Text6',
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
         "${symbolSelector}": [
            ["style", "height", '133px'],
            ["style", "width", '96px']
         ],
         "${_thruster6}": [
            ["style", "top", '0%'],
            ["style", "height", '100.01%'],
            ["style", "left", '0%'],
            ["style", "width", '99.99%']
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
         fill: ['rgba(0,0,0,0)','images/metre4.png','0px','0px']
      },
      {
         transform: [],
         userClass: 'meter71',
         id: 'metre71',
         type: 'image',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/metre4.png','0px','0px']
      },
      {
         transform: [],
         userClass: 'meter72',
         id: 'metre72',
         type: 'image',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/metre4.png','0px','0px']
      },
      {
         id: 'thruster7',
         type: 'image',
         rect: ['0%','0%','100%','100%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/thruster4.png','0px','0px']
      },
      {
         rect: ['13%','44.8%','73.2%','21.1%','auto','auto'],
         userClass: 'tt7',
         align: 'center',
         id: 'Text7',
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
         "${_thruster7}": [
            ["style", "top", '0%'],
            ["style", "height", '100.01%'],
            ["style", "left", '0%'],
            ["style", "width", '99.99%']
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
         fill: ['rgba(0,0,0,0)','images/metre4.png','0px','0px']
      },
      {
         transform: [],
         userClass: 'meter81',
         id: 'metre81',
         type: 'image',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/metre4.png','0px','0px']
      },
      {
         transform: [],
         userClass: 'meter82',
         id: 'metre82',
         type: 'image',
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/metre4.png','0px','0px']
      },
      {
         id: 'thruster8',
         type: 'image',
         rect: ['0%','0%','100%','100%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/thruster4.png','0px','0px']
      },
      {
         rect: ['13%','44.8%','73.2%','21.1%','auto','auto'],
         userClass: 'tt8',
         align: 'center',
         id: 'Text8',
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
         "${_Group3Copy10}": [
            ["style", "left", '0%'],
            ["style", "top", '0%']
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
         "${symbolSelector}": [
            ["style", "height", '133px'],
            ["style", "width", '96px']
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
   resizeInstances: true,
   content: {
   dom: [
   {
      userClass: 'device02',
      borderRadius: ['6.25% 66.67%','6.25% 66.67%','6.25% 66.67%','6.25% 66.67%'],
      rect: ['0%','0%','100%','100%','auto','auto'],
      id: 'device002',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(100,130,130,0.80)']
   },
   {
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(0,0,0,1)','500','none','normal'],
      type: 'text',
      id: 'device02_name',
      text: 'IMU',
      align: 'center',
      rect: ['0%','9.9%','100%','100%','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_device02_name}": [
            ["style", "line-height", '120%'],
            ["style", "letter-spacing", '0em'],
            ["style", "font-weight", '500'],
            ["style", "left", '0%'],
            ["style", "width", '100%'],
            ["style", "top", '9.88%'],
            ["style", "text-indent", '0%'],
            ["style", "height", '100%'],
            ["style", "font-family", 'ubuntu-mono, sans-serif'],
            ["style", "word-spacing", '0em'],
            ["style", "font-size", '1em']
         ],
         "${_device002}": [
            ["color", "background-color", 'rgba(100,130,130,0.80)'],
            ["style", "border-top-left-radius", [6.25,66.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-bottom-right-radius", [6.25,66.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "left", '0%'],
            ["style", "width", '100%'],
            ["style", "top", '0%'],
            ["style", "border-bottom-left-radius", [6.25,66.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "height", '100.01%'],
            ["style", "border-top-right-radius", [6.25,66.67], {valueTemplate:'@@0@@% @@1@@%'} ]
         ],
         "${_Text}": [
            ["style", "top", '0px'],
            ["style", "height", '30px'],
            ["style", "left", '0px'],
            ["style", "width", '320px']
         ],
         "${symbolSelector}": [
            ["style", "height", '2.78%'],
            ["style", "width", '16.67%']
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
"device03": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: true,
   content: {
   dom: [
   {
      rect: ['0%','0%','100%','100%','auto','auto'],
      borderRadius: ['6.25% 66.67%','6.25% 66.67%','6.25% 66.67%','6.25% 66.67%'],
      userClass: 'device03',
      id: 'device003',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(100,130,130,0.80)']
   },
   {
      rect: ['0%','9.9%','100%','100%','auto','auto'],
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(0,0,0,1)','500','none','normal'],
      id: 'device03_name',
      text: 'DVL',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text}": [
            ["style", "height", '30px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '320px']
         ],
         "${symbolSelector}": [
            ["style", "height", '2.78%'],
            ["style", "width", '16.67%']
         ],
         "${_device003}": [
            ["color", "background-color", 'rgba(100,130,130,0.80)'],
            ["style", "border-top-left-radius", [6.25,66.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-bottom-right-radius", [6.25,66.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "left", '0%'],
            ["style", "width", '100%'],
            ["style", "top", '0%'],
            ["style", "border-bottom-left-radius", [6.25,66.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "height", '100.01%'],
            ["style", "border-top-right-radius", [6.25,66.67], {valueTemplate:'@@0@@% @@1@@%'} ]
         ],
         "${_device03_name}": [
            ["style", "line-height", '120%'],
            ["style", "letter-spacing", '0em'],
            ["style", "font-weight", '500'],
            ["style", "left", '0%'],
            ["style", "width", '100%'],
            ["style", "top", '9.88%'],
            ["style", "text-indent", '0%'],
            ["style", "height", '100%'],
            ["style", "font-family", 'ubuntu-mono, sans-serif'],
            ["style", "word-spacing", '0em'],
            ["style", "font-size", '1em']
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
   resizeInstances: true,
   content: {
   dom: [
   {
      userClass: 'device04',
      borderRadius: ['6.25% 66.67%','6.25% 66.67%','6.25% 66.67%','6.25% 66.67%'],
      rect: ['0%','0%','100%','100%','auto','auto'],
      id: 'device004',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(100,130,130,0.80)']
   },
   {
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(0,0,0,1)','500','none','normal'],
      type: 'text',
      id: 'device04_name',
      text: 'F-Cam',
      align: 'center',
      rect: ['0%','9.9%','100%','100%','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_device004}": [
            ["color", "background-color", 'rgba(100,130,130,0.80)'],
            ["style", "border-top-left-radius", [6.25,66.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-bottom-right-radius", [6.25,66.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "left", '0%'],
            ["style", "width", '100%'],
            ["style", "top", '0%'],
            ["style", "border-bottom-left-radius", [6.25,66.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "height", '100.01%'],
            ["style", "border-top-right-radius", [6.25,66.67], {valueTemplate:'@@0@@% @@1@@%'} ]
         ],
         "${_device04_name}": [
            ["style", "line-height", '120%'],
            ["style", "letter-spacing", '0em'],
            ["style", "font-weight", '500'],
            ["style", "left", '0%'],
            ["style", "width", '100%'],
            ["style", "top", '9.88%'],
            ["style", "text-indent", '0%'],
            ["style", "height", '100%'],
            ["style", "font-family", 'ubuntu-mono, sans-serif'],
            ["style", "word-spacing", '0em'],
            ["style", "font-size", '1em']
         ],
         "${_Text}": [
            ["style", "top", '0px'],
            ["style", "height", '30px'],
            ["style", "left", '0px'],
            ["style", "width", '320px']
         ],
         "${symbolSelector}": [
            ["style", "height", '2.78%'],
            ["style", "width", '16.67%']
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
"device05": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: true,
   content: {
   dom: [
   {
      rect: ['0%','0%','100%','100%','auto','auto'],
      borderRadius: ['6.25% 66.67%','6.25% 66.67%','6.25% 66.67%','6.25% 66.67%'],
      userClass: 'device05',
      id: 'device005',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(100,130,130,0.80)']
   },
   {
      rect: ['0%','9.9%','100%','100%','auto','auto'],
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(0,0,0,1)','500','none','normal'],
      id: 'device05_name',
      text: 'B-Cam',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text}": [
            ["style", "height", '30px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '320px']
         ],
         "${_device05_name}": [
            ["style", "line-height", '120%'],
            ["style", "letter-spacing", '0em'],
            ["style", "font-weight", '500'],
            ["style", "left", '0%'],
            ["style", "width", '100%'],
            ["style", "top", '9.88%'],
            ["style", "text-indent", '0%'],
            ["style", "height", '100%'],
            ["style", "font-family", 'ubuntu-mono, sans-serif'],
            ["style", "word-spacing", '0em'],
            ["style", "font-size", '1em']
         ],
         "${_device005}": [
            ["color", "background-color", 'rgba(100,130,130,0.80)'],
            ["style", "border-top-left-radius", [6.25,66.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-bottom-right-radius", [6.25,66.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "left", '0%'],
            ["style", "width", '100%'],
            ["style", "top", '0%'],
            ["style", "border-bottom-left-radius", [6.25,66.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "height", '100.01%'],
            ["style", "border-top-right-radius", [6.25,66.67], {valueTemplate:'@@0@@% @@1@@%'} ]
         ],
         "${symbolSelector}": [
            ["style", "height", '2.78%'],
            ["style", "width", '16.67%']
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
"device06": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: true,
   content: {
   dom: [
   {
      rect: ['0%','0%','100%','100%','auto','auto'],
      borderRadius: ['6.25% 66.67%','6.25% 66.67%','6.25% 66.67%','6.25% 66.67%'],
      userClass: 'device06',
      id: 'device006',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(100,130,130,0.80)']
   },
   {
      rect: ['0%','9.9%','100%','100%','auto','auto'],
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(0,0,0,1)','500','none','normal'],
      id: 'device06_name',
      text: 'LAN',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text}": [
            ["style", "top", '0px'],
            ["style", "height", '30px'],
            ["style", "left", '0px'],
            ["style", "width", '320px']
         ],
         "${symbolSelector}": [
            ["style", "height", '2.78%'],
            ["style", "width", '16.67%']
         ],
         "${_device006}": [
            ["color", "background-color", 'rgba(100,130,130,0.80)'],
            ["style", "border-top-left-radius", [6.25,66.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-bottom-right-radius", [6.25,66.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "left", '0%'],
            ["style", "width", '100%'],
            ["style", "top", '0%'],
            ["style", "border-bottom-left-radius", [6.25,66.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "height", '100.01%'],
            ["style", "border-top-right-radius", [6.25,66.67], {valueTemplate:'@@0@@% @@1@@%'} ]
         ],
         "${_device06_name}": [
            ["style", "line-height", '120%'],
            ["style", "letter-spacing", '0em'],
            ["style", "font-weight", '500'],
            ["style", "left", '0%'],
            ["style", "width", '100%'],
            ["style", "top", '9.88%'],
            ["style", "text-indent", '0%'],
            ["style", "height", '100%'],
            ["style", "font-family", 'ubuntu-mono, sans-serif'],
            ["style", "word-spacing", '0em'],
            ["style", "font-size", '1em']
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
})(jQuery, AdobeEdge, "EDGE-6000272");
