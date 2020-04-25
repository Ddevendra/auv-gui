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
            id:'Sensor_container',
            type:'rect',
            rect:['86.1%','74.3%','12.8%','24.3%','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            boxShadow:["",3,3,8,0,"rgba(0,0,0,0.648438)"]
         },
         {
            id:'int_temp',
            type:'rect',
            rect:['86.9%','95.1%','auto','auto','auto','auto']
         },
         {
            id:'humidity',
            type:'rect',
            rect:['77.4%','92.6%','auto','auto','auto','auto']
         },
         {
            id:'ext_temp',
            type:'rect',
            rect:['86.9%','91.3%','auto','auto','auto','auto']
         },
         {
            id:'Int_Pressure',
            type:'rect',
            rect:['86.9%','87.5%','auto','auto','auto','auto']
         },
         {
            id:'Ext_pressure',
            type:'rect',
            rect:['86.9%','83.7%','auto','auto','auto','auto']
         },
         {
            id:'Sensor_bar',
            type:'rect',
            rect:['86.1%','74.3%','12.8%','2.5%','auto','auto'],
            fill:["rgba(90,90,90,0.50)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Sensors_Text',
            type:'text',
            rect:['86.9%','74.5%','12.1%','2.5%','auto','auto'],
            text:"Sensors",
            align:"left",
            font:['ubuntu-mono, sans-serif',[1,"em"],"rgba(225,225,225,0.50)","500","none","normal"]
         },
         {
            id:'Devices_container',
            type:'rect',
            rect:['0.9%','81.1%','12.8%','17.5%','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            boxShadow:["",3,3,8,0,"rgba(0,0,0,0.648438)"]
         },
         {
            id:'device01',
            type:'rect',
            rect:['5.4%','80.9%','16.7%','2.8%','auto','auto']
         },
         {
            id:'device02',
            type:'rect',
            rect:['1.7%','89.3%','5%','2.5%','auto','auto']
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
            rect:['7.7%','89.3%','auto','2.5%','auto','auto']
         },
         {
            id:'device06',
            type:'rect',
            rect:['7.7%','88.3%','5%','2.5%','auto','auto']
         },
         {
            id:'device07',
            type:'rect',
            rect:['1.7%','95.3%','16.7%','2.8%','auto','auto']
         },
         {
            id:'device08',
            type:'rect',
            rect:['7.7%','95.3%','5%','2.5%','auto','auto']
         },
         {
            id:'Device_online_bar',
            type:'rect',
            rect:['0.9%','81.1%','12.8%','2.5%','auto','auto'],
            fill:["rgba(90,90,90,0.50)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Device_online_Text',
            type:'text',
            rect:['1.7%','81.4%','12.1%','2.5%','auto','auto'],
            text:"Devices Online",
            align:"left",
            font:['ubuntu-mono, sans-serif',[1,"em"],"rgba(225,225,225,0.50)","500","none","normal"]
         },
         {
            id:'Thrusters_container',
            type:'rect',
            rect:['43.5%','27%','12.8%','33.3%','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            boxShadow:["",3,3,8,0,"rgba(0,0,0,0.648438)"]
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
            rect:['42.9%','38.4%','auto','auto','auto','auto'],
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
            id:'Thruster_bar',
            type:'rect',
            rect:['43.6%','27.1%','12.8%','2.3%','auto','auto'],
            fill:["rgba(90,90,90,0.50)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Thruster_Text',
            type:'text',
            rect:['44.4%','27.2%','12.1%','2.3%','auto','auto'],
            text:"Thrusters",
            align:"left",
            font:['ubuntu-mono, sans-serif',[1,"em"],"rgba(225,225,225,0.50)","500","none","normal"]
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
            id:'battery01',
            type:'rect',
            rect:['12.6%','12.6%','auto','auto','auto','auto']
         },
         {
            id:'battery02',
            type:'rect',
            rect:['5.2%','20%','auto','auto','auto','auto']
         },
         {
            id:'lan',
            type:'rect',
            rect:['60.1%','12.6%','auto','auto','auto','auto']
         },
         {
            id:'uptime_back',
            type:'image',
            rect:['42.6%','5%','15%','3.3%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"time_back.png",'0px','0px']
         }],
         symbolInstances: [
         {
            id:'device05',
            symbolName:'device05'
         },
         {
            id:'int_temp',
            symbolName:'int_temp'
         },
         {
            id:'thruster05',
            symbolName:'thruster05'
         },
         {
            id:'ext_temp',
            symbolName:'ext_temp'
         },
         {
            id:'thruster01',
            symbolName:'thruster01'
         },
         {
            id:'thruster03',
            symbolName:'thruster03'
         },
         {
            id:'battery01',
            symbolName:'battery01'
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
            id:'thruster04',
            symbolName:'thruster04'
         },
         {
            id:'Int_Pressure',
            symbolName:'Int_Pressure'
         },
         {
            id:'battery02',
            symbolName:'battery002'
         },
         {
            id:'device02',
            symbolName:'device02'
         },
         {
            id:'thruster02',
            symbolName:'thruster02'
         },
         {
            id:'humidity',
            symbolName:'humidity'
         },
         {
            id:'Ext_pressure',
            symbolName:'Ext_pressure'
         },
         {
            id:'device08',
            symbolName:'device08'
         },
         {
            id:'device03',
            symbolName:'device03'
         },
         {
            id:'device07',
            symbolName:'device07'
         },
         {
            id:'device01',
            symbolName:'device01'
         }
         ]
      },
   states: {
      "Base State": {
         "${_int_temp}": [
            ["style", "left", '86.9%'],
            ["style", "top", '90.6%']
         ],
         "${_thruster04}": [
            ["transform", "scaleX", '0.41667'],
            ["style", "top", '38.39%'],
            ["style", "left", '42.94%'],
            ["transform", "scaleY", '0.41353']
         ],
         "${_thruster07}": [
            ["transform", "scaleX", '0.41667'],
            ["style", "top", '48.39%'],
            ["style", "left", '46.94%'],
            ["transform", "scaleY", '0.41353']
         ],
         "${_ext_temp}": [
            ["style", "top", '86.61%'],
            ["style", "left", '86.97%']
         ],
         "${_thruster03}": [
            ["transform", "scaleX", '0.41667'],
            ["style", "top", '28.39%'],
            ["style", "left", '50.94%'],
            ["transform", "scaleY", '0.41353']
         ],
         "${_device07}": [
            ["style", "height", '2.5%'],
            ["style", "top", '95.5%'],
            ["style", "left", '1.67%'],
            ["style", "width", '5%']
         ],
         "${_device02}": [
            ["style", "top", '89.5%'],
            ["style", "height", '2.5%'],
            ["style", "left", '1.7%'],
            ["style", "width", '5%']
         ],
         "${_Int_Pressure}": [
            ["style", "top", '82.99%'],
            ["style", "left", '86.9%']
         ],
         "${_device03}": [
            ["style", "height", '2.5%'],
            ["style", "top", '92.5%'],
            ["style", "left", '1.72%'],
            ["style", "width", '5%']
         ],
         "${_video_bar01}": [
            ["style", "top", '25%'],
            ["style", "height", '40%'],
            ["color", "background-color", 'rgba(70,70,70,1.00)'],
            ["style", "left", '0.9%'],
            ["style", "width", '40%']
         ],
         "${_Thruster_Text}": [
            ["style", "top", '27.23%'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(225,225,225,0.50)'],
            ["style", "height", '2.29%'],
            ["style", "left", '44.35%'],
            ["style", "width", '12.1%']
         ],
         "${_device01}": [
            ["style", "top", '86.48%'],
            ["style", "height", '2.5%'],
            ["style", "left", '1.66%'],
            ["style", "width", '5%']
         ],
         "${_humidity}": [
            ["style", "left", '86.88%'],
            ["style", "top", '94.4%']
         ],
         "${_Sensor_container}": [
            ["color", "background-color", 'rgba(34,34,34,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "left", '86.1%'],
            ["style", "width", '12.84%'],
            ["style", "top", '74.27%'],
            ["style", "height", '24.34%'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '8px']
         ],
         "${_thruster01}": [
            ["style", "top", '28.37%'],
            ["transform", "scaleY", '0.41353'],
            ["style", "left", '42.94%'],
            ["transform", "scaleX", '0.41667']
         ],
         "${_Device_online_Text}": [
            ["style", "top", '81.39%'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(225,225,225,0.50)'],
            ["style", "height", '2.5%'],
            ["style", "left", '1.7%'],
            ["style", "width", '12.1%']
         ],
         "${_battery01}": [
            ["style", "top", '0.6%'],
            ["transform", "scaleY", '0.46154'],
            ["style", "left", '2.32%'],
            ["transform", "scaleX", '0.47904']
         ],
         "${_device04}": [
            ["style", "top", '86.48%'],
            ["style", "height", '2.5%'],
            ["style", "left", '7.71%'],
            ["style", "width", '5%']
         ],
         "${_Device_online_bar}": [
            ["style", "top", '81.12%'],
            ["style", "height", '2.5%'],
            ["color", "background-color", 'rgba(90,90,90,0.50)'],
            ["style", "left", '0.9%'],
            ["style", "width", '12.83%']
         ],
         "${_device06}": [
            ["style", "top", '92.5%'],
            ["style", "height", '2.5%'],
            ["style", "left", '7.71%'],
            ["style", "width", '5%']
         ],
         "${_Sensor_bar}": [
            ["style", "top", '74.27%'],
            ["style", "height", '2.5%'],
            ["color", "background-color", 'rgba(90,90,90,0.50)'],
            ["style", "left", '86.11%'],
            ["style", "width", '12.83%']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(255,0,0,1.00)'],
            ["style", "top", '0%'],
            ["style", "overflow", 'visible'],
            ["style", "height", '100%'],
            ["style", "opacity", '0'],
            ["style", "left", '50%'],
            ["style", "width", '0.1%']
         ],
         "${_thruster08}": [
            ["transform", "scaleX", '0.41667'],
            ["style", "top", '48.39%'],
            ["style", "left", '50.94%'],
            ["transform", "scaleY", '0.41353']
         ],
         "${_thruster02}": [
            ["style", "top", '28.39%'],
            ["transform", "scaleY", '0.41353'],
            ["style", "left", '46.94%'],
            ["transform", "scaleX", '0.41667']
         ],
         "${_Thrusters_container}": [
            ["color", "background-color", 'rgba(34,34,34,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "left", '43.54%'],
            ["style", "width", '12.84%'],
            ["style", "top", '26.95%'],
            ["style", "height", '33.25%'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '8px']
         ],
         "${_device08}": [
            ["style", "top", '95.5%'],
            ["style", "height", '2.5%'],
            ["style", "left", '7.71%'],
            ["style", "width", '5%']
         ],
         "${_uptime_back}": [
            ["style", "top", '4.95%'],
            ["style", "height", '3.33%'],
            ["style", "left", '42.55%'],
            ["style", "width", '15%']
         ],
         "${_Sensors_Text}": [
            ["style", "top", '74.54%'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(225,225,225,0.50)'],
            ["style", "height", '2.5%'],
            ["style", "left", '86.91%'],
            ["style", "width", '12.1%']
         ],
         "${_device05}": [
            ["style", "height", '2.5%'],
            ["style", "top", '89.5%'],
            ["style", "left", '7.71%'],
            ["style", "width", '5%']
         ],
         "${_Thruster_bar}": [
            ["style", "top", '27.14%'],
            ["style", "height", '2.29%'],
            ["color", "background-color", 'rgba(90,90,90,0.50)'],
            ["style", "left", '43.55%'],
            ["style", "width", '12.83%']
         ],
         "${_Ext_pressure}": [
            ["style", "top", '79.2%'],
            ["style", "left", '86.88%']
         ],
         "${_thruster05}": [
            ["transform", "scaleX", '0.41667'],
            ["style", "top", '38.39%'],
            ["style", "left", '50.94%'],
            ["transform", "scaleY", '0.41353']
         ],
         "${_battery02}": [
            ["style", "top", '4.92%'],
            ["transform", "scaleY", '0.46154'],
            ["transform", "scaleX", '0.47904'],
            ["style", "left", '2.32%'],
            ["style", "width", '167px']
         ],
         "${_thruster06}": [
            ["transform", "scaleX", '0.41667'],
            ["style", "top", '48.39%'],
            ["style", "left", '42.94%'],
            ["transform", "scaleY", '0.41353']
         ],
         "${_lan}": [
            ["style", "top", '3.61%'],
            ["style", "left", '93.54%']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '100%'],
            ["style", "height", '100%'],
            ["style", "overflow", 'hidden']
         ],
         "${_Devices_container}": [
            ["color", "background-color", 'rgba(34,34,34,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "left", '0.89%'],
            ["style", "width", '12.84%'],
            ["style", "top", '81.11%'],
            ["style", "height", '17.51%'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '8px']
         ],
         "${_Device_online_TextCopy}": [
            ["style", "top", '1.55%'],
            ["color", "color", 'rgba(225,225,225,0.50)'],
            ["style", "height", '14.28%'],
            ["style", "left", '6.28%'],
            ["style", "width", '93.71%']
         ],
         "${_video_bar02}": [
            ["style", "top", '25%'],
            ["style", "height", '40%'],
            ["color", "background-color", 'rgba(70,70,70,1.00)'],
            ["style", "left", '59%'],
            ["style", "width", '40%']
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
            { id: "eid449", tween: [ "style", "${_Int_Pressure}", "top", '82.99%', { fromValue: '82.99%'}], position: 0, duration: 0 },
            { id: "eid309", tween: [ "style", "${_device01}", "left", '1.66%', { fromValue: '1.66%'}], position: 0, duration: 0 },
            { id: "eid310", tween: [ "style", "${_device01}", "top", '86.48%', { fromValue: '86.48%'}], position: 0, duration: 0 },
            { id: "eid184", tween: [ "style", "${_thruster06}", "left", '42.94%', { fromValue: '42.94%'}], position: 0, duration: 0 },
            { id: "eid316", tween: [ "style", "${_device04}", "left", '7.71%', { fromValue: '7.71%'}], position: 0, duration: 0 },
            { id: "eid389", tween: [ "style", "${_device02}", "top", '89.5%', { fromValue: '89.5%'}], position: 0, duration: 0 },
            { id: "eid454", tween: [ "style", "${_ext_temp}", "left", '86.97%', { fromValue: '86.97%'}], position: 0, duration: 0 },
            { id: "eid318", tween: [ "style", "${_device03}", "left", '1.72%', { fromValue: '1.72%'}], position: 0, duration: 0 },
            { id: "eid370", tween: [ "style", "${_thruster05}", "top", '38.39%', { fromValue: '38.39%'}], position: 0, duration: 0 },
            { id: "eid376", tween: [ "style", "${_thruster03}", "top", '28.39%', { fromValue: '28.39%'}], position: 0, duration: 0 },
            { id: "eid314", tween: [ "style", "${_device06}", "left", '7.71%', { fromValue: '7.71%'}], position: 0, duration: 0 },
            { id: "eid371", tween: [ "style", "${_thruster02}", "top", '28.39%', { fromValue: '28.39%'}], position: 0, duration: 0 },
            { id: "eid40", tween: [ "transform", "${_battery01}", "scaleX", '0.47904', { fromValue: '0.47904'}], position: 0, duration: 0 },
            { id: "eid323", tween: [ "style", "${_device06}", "top", '92.5%', { fromValue: '92.5%'}], position: 0, duration: 0 },
            { id: "eid375", tween: [ "style", "${_thruster07}", "top", '48.39%', { fromValue: '48.39%'}], position: 0, duration: 0 },
            { id: "eid455", tween: [ "style", "${_ext_temp}", "top", '86.61%', { fromValue: '86.61%'}], position: 0, duration: 0 },
            { id: "eid50", tween: [ "style", "${_battery02}", "left", '2.32%', { fromValue: '2.32%'}], position: 0, duration: 0 },
            { id: "eid317", tween: [ "style", "${_device04}", "top", '86.48%', { fromValue: '86.48%'}], position: 0, duration: 0 },
            { id: "eid44", tween: [ "transform", "${_battery02}", "scaleY", '0.46154', { fromValue: '0.46154'}], position: 0, duration: 0 },
            { id: "eid183", tween: [ "style", "${_thruster05}", "left", '50.94%', { fromValue: '50.94%'}], position: 0, duration: 0 },
            { id: "eid450", tween: [ "style", "${_int_temp}", "top", '90.6%', { fromValue: '90.6%'}], position: 0, duration: 0 },
            { id: "eid177", tween: [ "style", "${_thruster02}", "left", '46.94%', { fromValue: '46.94%'}], position: 0, duration: 0 },
            { id: "eid372", tween: [ "style", "${_thruster01}", "top", '28.37%', { fromValue: '28.37%'}], position: 0, duration: 0 },
            { id: "eid456", tween: [ "style", "${_humidity}", "top", '94.4%', { fromValue: '94.4%'}], position: 0, duration: 0 },
            { id: "eid191", tween: [ "style", "${_thruster07}", "left", '46.94%', { fromValue: '46.94%'}], position: 0, duration: 0 },
            { id: "eid452", tween: [ "style", "${_humidity}", "left", '86.88%', { fromValue: '86.88%'}], position: 0, duration: 0 },
            { id: "eid181", tween: [ "style", "${_thruster03}", "left", '50.94%', { fromValue: '50.94%'}], position: 0, duration: 0 },
            { id: "eid388", tween: [ "style", "${_device08}", "top", '95.5%', { fromValue: '95.5%'}], position: 0, duration: 0 },
            { id: "eid52", tween: [ "style", "${_battery01}", "top", '0.6%', { fromValue: '0.6%'}], position: 0, duration: 0 },
            { id: "eid190", tween: [ "style", "${_thruster08}", "left", '50.94%', { fromValue: '50.94%'}], position: 0, duration: 0 },
            { id: "eid57", tween: [ "style", "${_battery02}", "top", '4.92%', { fromValue: '4.92%'}], position: 0, duration: 0 },
            { id: "eid179", tween: [ "style", "${_thruster01}", "left", '42.94%', { fromValue: '42.94%'}], position: 0, duration: 0 },
            { id: "eid321", tween: [ "style", "${_device03}", "top", '92.5%', { fromValue: '92.5%'}], position: 0, duration: 0 },
            { id: "eid390", tween: [ "style", "${_device07}", "top", '95.5%', { fromValue: '95.5%'}], position: 0, duration: 0 },
            { id: "eid39", tween: [ "transform", "${_battery01}", "scaleY", '0.46154', { fromValue: '0.46154'}], position: 0, duration: 0 },
            { id: "eid42", tween: [ "transform", "${_battery02}", "scaleX", '0.47904', { fromValue: '0.47904'}], position: 0, duration: 0 },
            { id: "eid384", tween: [ "style", "${_device02}", "left", '1.7%', { fromValue: '1.7%'}], position: 0, duration: 0 },
            { id: "eid385", tween: [ "style", "${_device05}", "top", '89.5%', { fromValue: '89.5%'}], position: 0, duration: 0 },
            { id: "eid448", tween: [ "style", "${_Ext_pressure}", "top", '79.2%', { fromValue: '79.2%'}], position: 0, duration: 0 },
            { id: "eid373", tween: [ "style", "${_thruster06}", "top", '48.39%', { fromValue: '48.39%'}], position: 0, duration: 0 },
            { id: "eid374", tween: [ "style", "${_thruster08}", "top", '48.39%', { fromValue: '48.39%'}], position: 0, duration: 0 },
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
      type: 'text',
      userClass: 'batt01_percentage',
      rect: ['0px','8px','153px','57px','auto','auto'],
      id: 'Text4',
      text: '76%',
      align: 'center',
      font: ['Arial, Helvetica, sans-serif',[2.5,'em'],'rgba(0,0,0,1)','normal','none','normal']
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
            ["color", "background-color", 'rgba(0,166,145,1.00)'],
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
      type: 'text',
      userClass: 'batt02_percentage',
      rect: ['0px','9px','153px','56px','auto','auto'],
      id: 'Text5',
      text: '43%',
      align: 'center',
      font: ['Arial, Helvetica, sans-serif',[2.5,'em'],'rgba(0,0,0,1)','normal','none','normal']
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
         "${_batt002_back}": [
            ["style", "top", '27.69%'],
            ["style", "height", '41.67%'],
            ["color", "background-color", 'rgba(100,130,130,0.80)'],
            ["style", "left", '91.98%'],
            ["style", "width", '8.03%']
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
         "${_batt02_status}": [
            ["color", "background-color", 'rgba(0,166,145,1.00)'],
            ["style", "border-top-left-radius", [5.54,7.72], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "top", '0.02%'],
            ["style", "height", '100%'],
            ["style", "border-bottom-left-radius", [5.54,7.72], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "left", '0%'],
            ["style", "width", '14.97%']
         ],
         "${_Text5}": [
            ["style", "height", '56px'],
            ["style", "top", '9px']
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
      userClass: 'device01',
      borderRadius: ['6.25% 66.67%','6.25% 66.67%','6.25% 66.67%','6.25% 66.67%'],
      rect: ['0%','0%','100%','100%','auto','auto'],
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
      userClass: 'lan',
      rect: ['0%','0%','100%','78.7%','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,166,145,1)']
   },
   {
      userClass: 'lan',
      rect: ['11.9%','10.5%','76.3%','79.6%','auto','auto'],
      id: 'RectangleCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,166,145,1)']
   },
   {
      userClass: 'lan',
      rect: ['23.8%','21.3%','53.4%','79.6%','auto','auto'],
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
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         transform: [],
         id: 'metre1',
         userClass: 'meter1',
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/metre4.png','0px','0px']
      },
      {
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         transform: [],
         id: 'metre11',
         userClass: 'meter11',
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/metre4.png','0px','0px']
      },
      {
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         transform: [],
         id: 'metre12',
         userClass: 'meter12',
         type: 'image',
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
         font: ['Arial, Helvetica, sans-serif',[170,'%'],'rgba(255,255,255,1.00)','400','none','normal'],
         userClass: 'tt1',
         id: 'Text1',
         text: '245',
         align: 'center',
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
            ["style", "font-style", 'normal'],
            ["style", "word-spacing", '0em'],
            ["style", "text-decoration", 'none'],
            ["style", "height", '21.05%']
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
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         transform: [],
         id: 'metre2',
         userClass: 'meter2',
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/metre4.png','0px','0px']
      },
      {
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         transform: [],
         id: 'metre21',
         userClass: 'meter21',
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/metre4.png','0px','0px']
      },
      {
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         transform: [],
         id: 'metre22',
         userClass: 'meter22',
         type: 'image',
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
         font: ['Arial, Helvetica, sans-serif',[170,'%'],'rgba(255,255,255,1.00)','400','none','normal'],
         userClass: 'tt2',
         id: 'Text2',
         text: '245',
         align: 'center',
         type: 'text'
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
         "${_Group2}": [
            ["style", "left", '0%'],
            ["style", "top", '0%']
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
            ["style", "height", '21.05%'],
            ["style", "word-spacing", '0em'],
            ["style", "text-decoration", 'none'],
            ["style", "font-style", 'normal']
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
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         transform: [],
         id: 'metre3',
         userClass: 'meter3',
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/metre4.png','0px','0px']
      },
      {
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         transform: [],
         id: 'metre31',
         userClass: 'meter31',
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/metre4.png','0px','0px']
      },
      {
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         transform: [],
         id: 'metre32',
         userClass: 'meter32',
         type: 'image',
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
         font: ['Arial, Helvetica, sans-serif',[170,'%'],'rgba(255,255,255,1.00)','400','none','normal'],
         userClass: 'tt3',
         id: 'Text3',
         text: '245',
         align: 'center',
         type: 'text'
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
         "${_thruster3}": [
            ["style", "top", '0%'],
            ["style", "height", '100.01%'],
            ["style", "left", '0%'],
            ["style", "width", '99.99%']
         ],
         "${_Text3}": [
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
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         transform: [],
         id: 'metre4',
         userClass: 'meter4',
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/metre4.png','0px','0px']
      },
      {
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         transform: [],
         id: 'metre41',
         userClass: 'meter41',
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/metre4.png','0px','0px']
      },
      {
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         transform: [],
         id: 'metre42',
         userClass: 'meter42',
         type: 'image',
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
         font: ['Arial, Helvetica, sans-serif',[170,'%'],'rgba(255,255,255,1.00)','400','none','normal'],
         userClass: 'tt4',
         id: 'Text4',
         text: '245',
         align: 'center',
         type: 'text'
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
         "${_Group4}": [
            ["style", "left", '0%'],
            ["style", "top", '0%']
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
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         transform: [],
         id: 'metre5',
         userClass: 'meter5',
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/metre4.png','0px','0px']
      },
      {
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         transform: [],
         id: 'metre51',
         userClass: 'meter51',
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/metre4.png','0px','0px']
      },
      {
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         transform: [],
         id: 'metre52',
         userClass: 'meter52',
         type: 'image',
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
         font: ['Arial, Helvetica, sans-serif',[170,'%'],'rgba(255,255,255,1.00)','400','none','normal'],
         userClass: 'tt5',
         id: 'Text5',
         text: '245',
         align: 'center',
         type: 'text'
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
            ["style", "height", '21.05%'],
            ["style", "word-spacing", '0em'],
            ["style", "text-decoration", 'none'],
            ["style", "font-style", 'normal']
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
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         transform: [],
         id: 'metre6',
         userClass: 'meter6',
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/metre4.png','0px','0px']
      },
      {
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         transform: [],
         id: 'metre61',
         userClass: 'meter61',
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/metre4.png','0px','0px']
      },
      {
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         transform: [],
         id: 'metre62',
         userClass: 'meter62',
         type: 'image',
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
         font: ['Arial, Helvetica, sans-serif',[170,'%'],'rgba(255,255,255,1.00)','400','none','normal'],
         userClass: 'tt6',
         id: 'Text6',
         text: '245',
         align: 'center',
         type: 'text'
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
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
            ["style", "height", '21.05%'],
            ["style", "word-spacing", '0em'],
            ["style", "text-decoration", 'none'],
            ["style", "font-style", 'normal']
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
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         transform: [],
         id: 'metre7',
         userClass: 'meter7',
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/metre4.png','0px','0px']
      },
      {
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         transform: [],
         id: 'metre71',
         userClass: 'meter71',
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/metre4.png','0px','0px']
      },
      {
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         transform: [],
         id: 'metre72',
         userClass: 'meter72',
         type: 'image',
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
         font: ['Arial, Helvetica, sans-serif',[170,'%'],'rgba(255,255,255,1.00)','400','none','normal'],
         userClass: 'tt7',
         id: 'Text7',
         text: '245',
         align: 'center',
         type: 'text'
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
            ["style", "width", '73.2%'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "height", '21.05%'],
            ["style", "word-spacing", '0em'],
            ["style", "text-decoration", 'none'],
            ["style", "font-style", 'normal']
         ],
         "${_thruster7}": [
            ["style", "height", '100.01%'],
            ["style", "top", '0%'],
            ["style", "left", '0%'],
            ["style", "width", '99.99%']
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
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         transform: [],
         id: 'metre8',
         userClass: 'meter8',
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/metre4.png','0px','0px']
      },
      {
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         transform: [],
         id: 'metre81',
         userClass: 'meter81',
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/metre4.png','0px','0px']
      },
      {
         rect: ['13.6%','36.1%','72%','36.1%','auto','auto'],
         transform: [],
         id: 'metre82',
         userClass: 'meter82',
         type: 'image',
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
         font: ['Arial, Helvetica, sans-serif',[170,'%'],'rgba(255,255,255,1.00)','400','none','normal'],
         userClass: 'tt8',
         id: 'Text8',
         text: '245',
         align: 'center',
         type: 'text'
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
         "${_Group3Copy10}": [
            ["style", "left", '0%'],
            ["style", "top", '0%']
         ],
         "${_thruster8}": [
            ["style", "height", '100.01%'],
            ["style", "top", '0%'],
            ["style", "left", '0%'],
            ["style", "width", '99.99%']
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
            ["style", "width", '73.2%'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "height", '21.05%'],
            ["style", "word-spacing", '0em'],
            ["style", "text-decoration", 'none'],
            ["style", "font-style", 'normal']
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
      rect: ['0%','0%','100%','100%','auto','auto'],
      borderRadius: ['6.25% 66.67%','6.25% 66.67%','6.25% 66.67%','6.25% 66.67%'],
      userClass: 'device02',
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
         "${_Text}": [
            ["style", "height", '30px'],
            ["style", "top", '0px'],
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
      userClass: 'device03',
      borderRadius: ['6.25% 66.67%','6.25% 66.67%','6.25% 66.67%','6.25% 66.67%'],
      rect: ['0%','0%','100%','100%','auto','auto'],
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
      rect: ['0%','0%','100%','100%','auto','auto'],
      borderRadius: ['6.25% 66.67%','6.25% 66.67%','6.25% 66.67%','6.25% 66.67%'],
      userClass: 'device04',
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
      userClass: 'device05',
      borderRadius: ['6.25% 66.67%','6.25% 66.67%','6.25% 66.67%','6.25% 66.67%'],
      rect: ['0%','0%','100%','100%','auto','auto'],
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
         ],
         "${_Text}": [
            ["style", "top", '0px'],
            ["style", "height", '30px'],
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
      userClass: 'device06',
      borderRadius: ['6.25% 66.67%','6.25% 66.67%','6.25% 66.67%','6.25% 66.67%'],
      rect: ['0%','0%','100%','100%','auto','auto'],
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
         ],
         "${_Text}": [
            ["style", "height", '30px'],
            ["style", "top", '0px'],
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
"device07": {
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
      userClass: 'device07',
      borderRadius: ['6.25% 66.67%','6.25% 66.67%','6.25% 66.67%','6.25% 66.67%'],
      rect: ['0%','0%','100%','100%','auto','auto'],
      id: 'device007',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(100,130,130,0.80)']
   },
   {
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(0,0,0,1)','500','none','normal'],
      type: 'text',
      id: 'device07_name',
      text: 'Arduino',
      align: 'center',
      rect: ['0%','9.9%','100%','100%','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_device007}": [
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
         "${_device07_name}": [
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
"device08": {
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
      userClass: 'device08',
      id: 'device008',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(100,130,130,0.80)']
   },
   {
      type: 'text',
      rect: ['0%','9.9%','100%','100%','auto','auto'],
      id: 'device08_name',
      text: 'P.S.',
      align: 'center',
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(0,0,0,1)','500','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_device08_name}": [
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
         "${_device008}": [
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
            ["style", "height", '30px'],
            ["style", "top", '0px'],
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
"Ext_pressure": {
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
      rect: ['0.4%','70%','80%','11.8%','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'extPressure_status_back',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(34,34,34,1)']
   },
   {
      rect: ['0.3%','70%','60%','11.8%','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      userClass: 'extpressure_status',
      id: 'extPressure_status',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(2,159,144,1)']
   },
   {
      rect: ['50%','0%','36.3%','78.7%','auto','auto'],
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(225,225,225,0.4961)','500','none','normal'],
      userClass: 'extpressure_value',
      id: 'extPressure_value',
      text: '20 bar',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['0%','0%','76.7%','76.8%','auto','auto'],
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(225,225,225,0.4961)','500','none','normal'],
      id: 'extPressure_Text',
      text: 'Ext. Pressure :',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_extPressure_Text}": [
            ["style", "top", '0.02%'],
            ["style", "height", '76.77%'],
            ["style", "left", '0%'],
            ["style", "width", '76.67%']
         ],
         "${_extPressure_status_back}": [
            ["color", "background-color", 'rgba(70,70,70,1.00)'],
            ["style", "height", '11.81%'],
            ["style", "top", '70%'],
            ["style", "left", '0.35%'],
            ["style", "width", '80%']
         ],
         "${symbolSelector}": [
            ["style", "height", '27px'],
            ["style", "width", '222px']
         ],
         "${_extPressure_value}": [
            ["style", "height", '78.74%'],
            ["style", "top", '0.02%'],
            ["style", "left", '50%'],
            ["style", "width", '36.31%']
         ],
         "${_extPressure_status}": [
            ["style", "top", '70%'],
            ["style", "height", '11.81%'],
            ["style", "left", '0.3%'],
            ["style", "width", '60%']
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
"Int_Pressure": {
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
      rect: ['0.4%','70%','80%','11.8%','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'intPressure_status_back',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(34,34,34,1)']
   },
   {
      rect: ['0.3%','70%','50%','11.8%','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      userClass: 'intpressure_status',
      id: 'intPressure_status',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(2,159,144,1.00)']
   },
   {
      type: 'text',
      userClass: 'intpressure_value',
      rect: ['50%','0%','36.3%','78.7%','auto','auto'],
      id: 'intPressure_value',
      text: '20 bar',
      align: 'left',
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(225,225,225,0.4961)','500','none','normal']
   },
   {
      type: 'text',
      rect: ['0%','0%','76.7%','76.8%','auto','auto'],
      id: 'intPressure_Text',
      text: 'Int. Pressure :',
      align: 'left',
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(225,225,225,0.4961)','500','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_intPressure_status_back}": [
            ["style", "top", '70%'],
            ["style", "height", '11.81%'],
            ["color", "background-color", 'rgba(70,70,70,1.00)'],
            ["style", "left", '0.35%'],
            ["style", "width", '80%']
         ],
         "${symbolSelector}": [
            ["style", "height", '27px'],
            ["style", "width", '222px']
         ],
         "${_intPressure_value}": [
            ["style", "top", '0.02%'],
            ["style", "height", '78.74%'],
            ["style", "left", '50%'],
            ["style", "width", '36.31%']
         ],
         "${_intPressure_Text}": [
            ["style", "height", '76.77%'],
            ["style", "top", '0%'],
            ["style", "left", '0%'],
            ["style", "width", '76.67%']
         ],
         "${_intPressure_status}": [
            ["style", "top", '70%'],
            ["style", "height", '11.81%'],
            ["color", "background-color", 'rgba(2,159,144,1.00)'],
            ["style", "left", '0.3%'],
            ["style", "width", '50%']
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
"Ext_Temp": {
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
      userClass: 'extpressure_status',
      borderRadius: ['10px','10px','10px','10px'],
      rect: ['0.4%','88.2%','97.2%','11.8%','auto','auto'],
      id: 'extPressure_status',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(34,34,34,1)']
   },
   {
      userClass: 'extpressure_value',
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(225,225,225,0.4961)','500','none','normal'],
      align: 'left',
      id: 'extPressure_value',
      text: '20 bar',
      type: 'text',
      rect: ['63.7%','0%','36.3%','78.7%','auto','auto']
   },
   {
      rect: ['0%','0%','76.7%','76.8%','auto','auto'],
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(225,225,225,0.4961)','500','none','normal'],
      id: 'extPressure_Text',
      text: 'Ext. Pressure :',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_extPressure_value}": [
            ["style", "top", '0.02%'],
            ["style", "height", '78.74%'],
            ["style", "left", '63.71%'],
            ["style", "width", '36.31%']
         ],
         "${_extPressure_status}": [
            ["style", "top", '88.2%'],
            ["color", "background-color", 'rgba(70,70,70,1.00)'],
            ["style", "left", '0.35%'],
            ["style", "height", '11.81%']
         ],
         "${_extPressure_Text}": [
            ["style", "height", '76.77%'],
            ["style", "top", '0.02%'],
            ["style", "left", '0%'],
            ["style", "width", '76.67%']
         ],
         "${symbolSelector}": [
            ["style", "height", '27px'],
            ["style", "width", '222px']
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
"ext_temp": {
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
      rect: ['0.4%','80%','80%','11.8%','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'exttemp_status_back',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(34,34,34,1)']
   },
   {
      userClass: 'exttemp_status',
      borderRadius: ['10px','10px','10px','10px'],
      rect: ['0.3%','80%','80%','11.8%','auto','auto'],
      id: 'exttemp_status',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(208,0,0,1.00)']
   },
   {
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(225,225,225,0.4961)','500','none','normal'],
      type: 'text',
      id: 'exttemp_Text',
      text: 'Ext. Temperature :',
      align: 'left',
      rect: ['0%','3.7%','76.7%','76.8%','auto','auto']
   },
   {
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(225,225,225,0.4961)','500','none','normal'],
      type: 'text',
      align: 'left',
      id: 'exttemp_value',
      text: '20*C',
      rect: ['60.8%','2.8%','36.3%','78.7%','auto','auto'],
      userClass: 'exttemp_value'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_exttemp_value}": [
            ["style", "height", '78.74%'],
            ["style", "top", '2.78%'],
            ["style", "left", '60.77%'],
            ["style", "width", '36.31%']
         ],
         "${_exttemp_status}": [
            ["style", "top", '80%'],
            ["style", "height", '11.81%'],
            ["color", "background-color", 'rgba(208,0,0,1.00)'],
            ["style", "left", '0.3%'],
            ["style", "width", '80%']
         ],
         "${_exttemp_status_back}": [
            ["style", "top", '80%'],
            ["style", "height", '11.81%'],
            ["color", "background-color", 'rgba(70,70,70,1.00)'],
            ["style", "left", '0.35%'],
            ["style", "width", '80%']
         ],
         "${symbolSelector}": [
            ["style", "height", '27px'],
            ["style", "width", '222px']
         ],
         "${_exttemp_Text}": [
            ["style", "top", '3.7%'],
            ["style", "height", '76.77%'],
            ["style", "left", '0%'],
            ["style", "width", '76.67%']
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
"int_temp": {
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
      rect: ['0.4%','80%','80%','11.8%','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'inttemp_status_back',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(34,34,34,1)']
   },
   {
      userClass: 'inttemp_status',
      borderRadius: ['10px','10px','10px','10px'],
      rect: ['0.3%','80%','50%','11.8%','auto','auto'],
      id: 'inttemp_status',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(208,0,0,1.00)']
   },
   {
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(225,225,225,0.4961)','500','none','normal'],
      type: 'text',
      id: 'inttemp_Text',
      text: 'Int. Temperature :',
      align: 'left',
      rect: ['0%','3.7%','76.7%','76.8%','auto','auto']
   },
   {
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(225,225,225,0.4961)','500','none','normal'],
      type: 'text',
      align: 'left',
      id: 'inttemp_value',
      text: '40*C',
      rect: ['60.8%','2.8%','36.3%','78.7%','auto','auto'],
      userClass: 'inttemp_value'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_inttemp_status}": [
            ["style", "top", '80%'],
            ["style", "height", '11.81%'],
            ["color", "background-color", 'rgba(208,0,0,1.00)'],
            ["style", "left", '0.3%'],
            ["style", "width", '50%']
         ],
         "${_inttemp_Text}": [
            ["style", "height", '76.77%'],
            ["style", "top", '3.7%'],
            ["style", "left", '0%'],
            ["style", "width", '76.67%']
         ],
         "${symbolSelector}": [
            ["style", "height", '27px'],
            ["style", "width", '222px']
         ],
         "${_inttemp_status_back}": [
            ["style", "top", '80%'],
            ["style", "height", '11.81%'],
            ["color", "background-color", 'rgba(70,70,70,1.00)'],
            ["style", "left", '0.35%'],
            ["style", "width", '80%']
         ],
         "${_inttemp_value}": [
            ["style", "top", '2.78%'],
            ["style", "height", '78.74%'],
            ["style", "left", '60.77%'],
            ["style", "width", '36.31%']
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
"humidity": {
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
      rect: ['0.4%','80%','80%','11.8%','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'humidity_status_back',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(34,34,34,1)']
   },
   {
      rect: ['0.3%','80%','50%','11.8%','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      userClass: 'humidity_status',
      id: 'humidity_status',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,120,143,1.00)']
   },
   {
      rect: ['0%','3.7%','76.7%','76.8%','auto','auto'],
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(225,225,225,0.4961)','500','none','normal'],
      id: 'humidity_Text',
      text: 'Humidity :',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['35%','2.8%','36.3%','78.7%','auto','auto'],
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(225,225,225,0.4961)','500','none','normal'],
      userClass: 'humidity_value',
      id: 'humidity_value',
      text: '1.2',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_humidity_status_back}": [
            ["style", "top", '80%'],
            ["style", "height", '11.81%'],
            ["color", "background-color", 'rgba(70,70,70,1.00)'],
            ["style", "left", '0.35%'],
            ["style", "width", '80%']
         ],
         "${symbolSelector}": [
            ["style", "height", '27px'],
            ["style", "width", '222px']
         ],
         "${_humidity_Text}": [
            ["style", "top", '3.7%'],
            ["style", "height", '76.77%'],
            ["style", "left", '0%'],
            ["style", "width", '76.67%']
         ],
         "${_humidity_status}": [
            ["style", "top", '80%'],
            ["style", "height", '11.81%'],
            ["color", "background-color", 'rgba(0,120,143,1.00)'],
            ["style", "left", '0.3%'],
            ["style", "width", '50%']
         ],
         "${_humidity_value}": [
            ["style", "height", '78.74%'],
            ["style", "top", '2.78%'],
            ["style", "left", '35.02%'],
            ["style", "width", '36.31%']
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
