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
            id:'Velocity_container',
            type:'rect',
            rect:['19.7%','81.1%','12.8%','17.5%','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            boxShadow:["",3,3,8,0,"rgba(0,0,0,0.648438)"]
         },
         {
            id:'velocity-x',
            type:'rect',
            rect:['20.4%','85.5%','auto','auto','auto','auto']
         },
         {
            id:'velocity-y',
            type:'rect',
            rect:['20.3%','89.8%','auto','auto','auto','auto']
         },
         {
            id:'velocity-z',
            type:'rect',
            rect:['20.4%','94.4%','auto','auto','auto','auto']
         },
         {
            id:'Velocity_bar',
            type:'rect',
            rect:['19.6%','80.8%','12.8%','2.5%','auto','auto'],
            fill:["rgba(90,90,90,0.50)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Velocity_text',
            type:'text',
            rect:['20.4%','81.1%','12.1%','2.5%','auto','auto'],
            text:"Velocities",
            align:"left",
            font:['ubuntu-mono, sans-serif',[1,"em"],"rgba(225,225,225,0.50)","500","none","normal"]
         },
         {
            id:'IMU_container',
            type:'rect',
            rect:['56.7%','74.3%','25.8%','24.3%','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            boxShadow:["",3,3,8,0,"rgba(0,0,0,0.648438)"]
         },
         {
            id:'compass_out2',
            type:'image',
            rect:['70.7%','77.8%','10.6%','19.7%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"compass_out.png",'0px','0px'],
            transform:[]
         },
         {
            id:'compass_in',
            type:'image',
            rect:['73.4%','82.9%','5%','9%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"compass_in.png",'0px','0px']
         },
         {
            id:'yaw',
            type:'rect',
            rect:['57.9%','81.4%','auto','auto','auto','auto']
         },
         {
            id:'pitch',
            type:'rect',
            rect:['57.9%','87.3%','auto','auto','auto','auto']
         },
         {
            id:'roll',
            type:'rect',
            rect:['57.9%','93.1%','auto','auto','auto','auto']
         },
         {
            id:'IMU_bar',
            type:'rect',
            rect:['56.7%','74.3%','25.8%','2.5%','auto','auto'],
            fill:["rgba(90,90,90,0.50)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'IMU_Text',
            type:'text',
            rect:['57.5%','74.5%','12.1%','2.5%','auto','auto'],
            text:"IMU",
            align:"left",
            font:['ubuntu-mono, sans-serif',[1,"em"],"rgba(225,225,225,0.50)","500","none","normal"]
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
            rect:['60.1%','12.6%','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'uptime_back',
            type:'image',
            rect:['42.6%','5%','15%','3.3%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"time_back.png",'0px','0px']
         },
         {
            id:'run_script',
            type:'rect',
            rect:['95.5%','4.9%','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'script_box',
            type:'rect',
            rect:['70.3%','8%','auto','auto','auto','auto']
         },
         {
            id:'lan_box',
            type:'rect',
            rect:['61.9%','13%','auto','auto','auto','auto']
         },
         {
            id:'Sensor_barCopy2',
            type:'rect',
            rect:['86.1%','74.3%','12.8%','2.5%','auto','auto'],
            fill:["rgba(90,90,90,0.50)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         }],
         symbolInstances: [
         {
            id:'velocity-x',
            symbolName:'velocity-x'
         },
         {
            id:'roll',
            symbolName:'roll'
         },
         {
            id:'thruster01',
            symbolName:'thruster01'
         },
         {
            id:'script_box',
            symbolName:'script_box'
         },
         {
            id:'device04',
            symbolName:'device04'
         },
         {
            id:'device06',
            symbolName:'device06'
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
            id:'velocity-y',
            symbolName:'velocity-y'
         },
         {
            id:'device07',
            symbolName:'device07'
         },
         {
            id:'pitch',
            symbolName:'pitch'
         },
         {
            id:'int_temp',
            symbolName:'int_temp'
         },
         {
            id:'ext_temp',
            symbolName:'ext_temp'
         },
         {
            id:'lan_box',
            symbolName:'lan_box'
         },
         {
            id:'device05',
            symbolName:'device05'
         },
         {
            id:'thruster04',
            symbolName:'thruster04'
         },
         {
            id:'run_script',
            symbolName:'run_script'
         },
         {
            id:'device08',
            symbolName:'device08'
         },
         {
            id:'thruster06',
            symbolName:'thruster06'
         },
         {
            id:'humidity',
            symbolName:'humidity'
         },
         {
            id:'lan',
            symbolName:'lan'
         },
         {
            id:'battery01',
            symbolName:'battery01'
         },
         {
            id:'velocity-z',
            symbolName:'velocity-z'
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
            id:'device02',
            symbolName:'device02'
         },
         {
            id:'yaw',
            symbolName:'yaw'
         },
         {
            id:'thruster02',
            symbolName:'thruster02'
         },
         {
            id:'thruster05',
            symbolName:'thruster05'
         },
         {
            id:'thruster03',
            symbolName:'thruster03'
         },
         {
            id:'device03',
            symbolName:'device03'
         },
         {
            id:'device01',
            symbolName:'device01'
         },
         {
            id:'Ext_pressure',
            symbolName:'Ext_pressure'
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
            ["style", "top", '38.39%'],
            ["transform", "scaleY", '0.41353'],
            ["style", "left", '42.94%'],
            ["transform", "scaleX", '0.41667']
         ],
         "${_thruster07}": [
            ["style", "top", '48.39%'],
            ["transform", "scaleY", '0.41353'],
            ["style", "left", '46.94%'],
            ["transform", "scaleX", '0.41667']
         ],
         "${_thruster06}": [
            ["style", "top", '48.39%'],
            ["transform", "scaleY", '0.41353'],
            ["style", "left", '42.94%'],
            ["transform", "scaleX", '0.41667']
         ],
         "${_IMU_Text}": [
            ["style", "top", '74.53%'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(225,225,225,0.50)'],
            ["style", "height", '2.5%'],
            ["style", "left", '57.54%'],
            ["style", "width", '12.1%']
         ],
         "${_thruster03}": [
            ["style", "top", '28.39%'],
            ["transform", "scaleY", '0.41353'],
            ["style", "left", '50.94%'],
            ["transform", "scaleX", '0.41667']
         ],
         "${_lan_box}": [
            ["style", "left", '66.15%'],
            ["style", "top", '7.32%']
         ],
         "${_device02}": [
            ["style", "height", '2.5%'],
            ["style", "top", '89.5%'],
            ["style", "left", '1.7%'],
            ["style", "width", '5%']
         ],
         "${_Sensor_barCopy2}": [
            ["style", "top", '74.27%'],
            ["style", "height", '2.5%'],
            ["color", "background-color", 'rgba(90,90,90,0.50)'],
            ["style", "left", '86.11%'],
            ["style", "width", '12.83%']
         ],
         "${_Velocity_bar}": [
            ["style", "top", '80.84%'],
            ["style", "height", '2.5%'],
            ["color", "background-color", 'rgba(90,90,90,0.50)'],
            ["style", "left", '19.64%'],
            ["style", "width", '12.83%']
         ],
         "${_Int_Pressure}": [
            ["style", "top", '82.99%'],
            ["style", "left", '86.9%']
         ],
         "${_yaw}": [
            ["style", "top", '83.89%']
         ],
         "${_device03}": [
            ["style", "top", '92.5%'],
            ["style", "height", '2.5%'],
            ["style", "left", '1.72%'],
            ["style", "width", '5%']
         ],
         "${_pitch}": [
            ["style", "top", '88.98%']
         ],
         "${_video_bar01}": [
            ["style", "top", '25%'],
            ["style", "height", '40%'],
            ["color", "background-color", 'rgba(70,70,70,1.00)'],
            ["style", "left", '0.9%'],
            ["style", "width", '40%']
         ],
         "${_thruster02}": [
            ["style", "top", '28.39%'],
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
         "${_roll}": [
            ["style", "top", '93.24%']
         ],
         "${_velocity-z}": [
            ["style", "left", '20.31%']
         ],
         "${_ext_temp}": [
            ["style", "top", '86.61%'],
            ["style", "left", '86.97%']
         ],
         "${_IMU_container}": [
            ["color", "background-color", 'rgba(34,34,34,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "left", '56.71%'],
            ["style", "width", '25.77%'],
            ["style", "top", '74.26%'],
            ["style", "height", '24.34%'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '8px']
         ],
         "${_velocity-y}": [
            ["style", "top", '89.91%']
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
         "${_battery01}": [
            ["style", "top", '0.6%'],
            ["transform", "scaleX", '0.47904'],
            ["transform", "scaleY", '0.46154'],
            ["style", "left", '2.32%']
         ],
         "${_device04}": [
            ["style", "height", '2.5%'],
            ["style", "top", '86.48%'],
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
         "${_velocity-x}": [
            ["style", "left", '20.31%']
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
         "${_uptime_back}": [
            ["style", "height", '3.33%'],
            ["style", "top", '4.95%'],
            ["style", "left", '42.55%'],
            ["style", "width", '15%']
         ],
         "${_Velocity_text}": [
            ["style", "top", '81.11%'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(225,225,225,0.50)'],
            ["style", "height", '2.5%'],
            ["style", "left", '20.43%'],
            ["style", "width", '12.1%']
         ],
         "${_compass_in}": [
            ["style", "height", '8.96%'],
            ["style", "top", '82.87%'],
            ["style", "left", '73.44%'],
            ["style", "width", '5%']
         ],
         "${_Thruster_Text}": [
            ["style", "top", '27.23%'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(225,225,225,0.50)'],
            ["style", "height", '2.29%'],
            ["style", "left", '44.35%'],
            ["style", "width", '12.1%']
         ],
         "${_device06}": [
            ["style", "height", '2.5%'],
            ["style", "top", '92.5%'],
            ["style", "left", '7.71%'],
            ["style", "width", '5%']
         ],
         "${_device05}": [
            ["style", "top", '89.5%'],
            ["style", "height", '2.5%'],
            ["style", "left", '7.71%'],
            ["style", "width", '5%']
         ],
         "${_compass_out2}": [
            ["style", "top", '77.78%'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '19.72%'],
            ["style", "left", '70.68%'],
            ["style", "width", '10.61%']
         ],
         "${_thruster01}": [
            ["style", "top", '28.37%'],
            ["transform", "scaleX", '0.41667'],
            ["transform", "scaleY", '0.41353'],
            ["style", "left", '42.94%']
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
            ["style", "top", '48.39%'],
            ["transform", "scaleY", '0.41353'],
            ["style", "left", '50.94%'],
            ["transform", "scaleX", '0.41667']
         ],
         "${_Thruster_bar}": [
            ["style", "top", '27.14%'],
            ["style", "height", '2.29%'],
            ["color", "background-color", 'rgba(90,90,90,0.50)'],
            ["style", "left", '43.55%'],
            ["style", "width", '12.83%']
         ],
         "${_Device_online_Text}": [
            ["style", "top", '81.39%'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(225,225,225,0.50)'],
            ["style", "height", '2.5%'],
            ["style", "left", '1.7%'],
            ["style", "width", '12.1%']
         ],
         "${_IMU_bar}": [
            ["style", "top", '74.26%'],
            ["style", "height", '2.5%'],
            ["color", "background-color", 'rgba(90,90,90,0.50)'],
            ["style", "left", '56.74%'],
            ["style", "width", '25.77%']
         ],
         "${_Sensor_bar}": [
            ["style", "top", '74.27%'],
            ["style", "height", '2.5%'],
            ["color", "background-color", 'rgba(90,90,90,0.50)'],
            ["style", "left", '86.11%'],
            ["style", "width", '12.83%']
         ],
         "${_Device_online_TextCopy}": [
            ["style", "top", '1.55%'],
            ["style", "height", '14.28%'],
            ["color", "color", 'rgba(225,225,225,0.50)'],
            ["style", "left", '6.28%'],
            ["style", "width", '93.71%']
         ],
         "${_lan}": [
            ["style", "top", '3.56%'],
            ["transform", "scaleY", '0.71053'],
            ["transform", "scaleX", '0.71053'],
            ["style", "left", '87.07%'],
            ["style", "cursor", 'pointer']
         ],
         "${_video_bar02}": [
            ["style", "top", '25%'],
            ["style", "height", '40%'],
            ["color", "background-color", 'rgba(70,70,70,1.00)'],
            ["style", "left", '59%'],
            ["style", "width", '40%']
         ],
         "${_run_script}": [
            ["style", "top", '4.15%'],
            ["transform", "scaleY", '0.91543'],
            ["transform", "scaleX", '1.01764'],
            ["style", "left", '91.15%'],
            ["style", "cursor", 'pointer']
         ],
         "${_Ext_pressure}": [
            ["style", "top", '79.2%'],
            ["style", "left", '86.88%']
         ],
         "${_thruster05}": [
            ["style", "top", '38.39%'],
            ["transform", "scaleY", '0.41353'],
            ["style", "left", '50.94%'],
            ["transform", "scaleX", '0.41667']
         ],
         "${_battery02}": [
            ["style", "top", '4.92%'],
            ["transform", "scaleY", '0.46154'],
            ["transform", "scaleX", '0.47904'],
            ["style", "left", '2.32%'],
            ["style", "width", '167px']
         ],
         "${_Velocity_container}": [
            ["color", "background-color", 'rgba(34,34,34,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "left", '19.65%'],
            ["style", "width", '12.84%'],
            ["style", "top", '81.11%'],
            ["style", "height", '17.49%'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '8px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '100%'],
            ["style", "width", '100%']
         ],
         "${_device08}": [
            ["style", "height", '2.5%'],
            ["style", "top", '95.5%'],
            ["style", "left", '7.71%'],
            ["style", "width", '5%']
         ],
         "${_Sensors_Text}": [
            ["style", "top", '74.54%'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(225,225,225,0.50)'],
            ["style", "height", '2.5%'],
            ["style", "left", '86.91%'],
            ["style", "width", '12.1%']
         ],
         "${_script_box}": [
            ["style", "top", '8%'],
            ["style", "left", '70.4%']
         ],
         "${_device07}": [
            ["style", "top", '95.5%'],
            ["style", "height", '2.5%'],
            ["style", "left", '1.67%'],
            ["style", "width", '5%']
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
            { id: "eid523", tween: [ "style", "${_yaw}", "top", '83.89%', { fromValue: '83.89%'}], position: 616, duration: 0 },
            { id: "eid493", tween: [ "style", "${_script_box}", "top", '8%', { fromValue: '8%'}], position: 1000, duration: 0 },
            { id: "eid522", tween: [ "style", "${_pitch}", "top", '88.98%', { fromValue: '88.98%'}], position: 616, duration: 0 },
            { id: "eid449", tween: [ "style", "${_Int_Pressure}", "top", '82.99%', { fromValue: '82.99%'}], position: 0, duration: 0 },
            { id: "eid521", tween: [ "style", "${_roll}", "top", '93.24%', { fromValue: '93.24%'}], position: 616, duration: 0 },
            { id: "eid309", tween: [ "style", "${_device01}", "left", '1.66%', { fromValue: '1.66%'}], position: 0, duration: 0 },
            { id: "eid310", tween: [ "style", "${_device01}", "top", '86.48%', { fromValue: '86.48%'}], position: 0, duration: 0 },
            { id: "eid184", tween: [ "style", "${_thruster06}", "left", '42.94%', { fromValue: '42.94%'}], position: 0, duration: 0 },
            { id: "eid316", tween: [ "style", "${_device04}", "left", '7.71%', { fromValue: '7.71%'}], position: 0, duration: 0 },
            { id: "eid389", tween: [ "style", "${_device02}", "top", '89.5%', { fromValue: '89.5%'}], position: 0, duration: 0 },
            { id: "eid179", tween: [ "style", "${_thruster01}", "left", '42.94%', { fromValue: '42.94%'}], position: 0, duration: 0 },
            { id: "eid318", tween: [ "style", "${_device03}", "left", '1.72%', { fromValue: '1.72%'}], position: 0, duration: 0 },
            { id: "eid390", tween: [ "style", "${_device07}", "top", '95.5%', { fromValue: '95.5%'}], position: 0, duration: 0 },
            { id: "eid370", tween: [ "style", "${_thruster05}", "top", '38.39%', { fromValue: '38.39%'}], position: 0, duration: 0 },
            { id: "eid376", tween: [ "style", "${_thruster03}", "top", '28.39%', { fromValue: '28.39%'}], position: 0, duration: 0 },
            { id: "eid314", tween: [ "style", "${_device06}", "left", '7.71%', { fromValue: '7.71%'}], position: 0, duration: 0 },
            { id: "eid465", tween: [ "transform", "${_lan}", "scaleX", '0.71053', { fromValue: '0.71053'}], position: 0, duration: 0 },
            { id: "eid371", tween: [ "style", "${_thruster02}", "top", '28.39%', { fromValue: '28.39%'}], position: 0, duration: 0 },
            { id: "eid57", tween: [ "style", "${_battery02}", "top", '4.92%', { fromValue: '4.92%'}], position: 0, duration: 0 },
            { id: "eid450", tween: [ "style", "${_int_temp}", "top", '90.6%', { fromValue: '90.6%'}], position: 0, duration: 0 },
            { id: "eid40", tween: [ "transform", "${_battery01}", "scaleX", '0.47904', { fromValue: '0.47904'}], position: 0, duration: 0 },
            { id: "eid323", tween: [ "style", "${_device06}", "top", '92.5%', { fromValue: '92.5%'}], position: 0, duration: 0 },
            { id: "eid375", tween: [ "style", "${_thruster07}", "top", '48.39%', { fromValue: '48.39%'}], position: 0, duration: 0 },
            { id: "eid454", tween: [ "style", "${_ext_temp}", "left", '86.97%', { fromValue: '86.97%'}], position: 0, duration: 0 },
            { id: "eid50", tween: [ "style", "${_battery02}", "left", '2.32%', { fromValue: '2.32%'}], position: 0, duration: 0 },
            { id: "eid317", tween: [ "style", "${_device04}", "top", '86.48%', { fromValue: '86.48%'}], position: 0, duration: 0 },
            { id: "eid44", tween: [ "transform", "${_battery02}", "scaleY", '0.46154', { fromValue: '0.46154'}], position: 0, duration: 0 },
            { id: "eid183", tween: [ "style", "${_thruster05}", "left", '50.94%', { fromValue: '50.94%'}], position: 0, duration: 0 },
            { id: "eid492", tween: [ "style", "${_script_box}", "left", '70.4%', { fromValue: '70.4%'}], position: 1000, duration: 0 },
            { id: "eid177", tween: [ "style", "${_thruster02}", "left", '46.94%', { fromValue: '46.94%'}], position: 0, duration: 0 },
            { id: "eid372", tween: [ "style", "${_thruster01}", "top", '28.37%', { fromValue: '28.37%'}], position: 0, duration: 0 },
            { id: "eid466", tween: [ "transform", "${_lan}", "scaleY", '0.71053', { fromValue: '0.71053'}], position: 0, duration: 0 },
            { id: "eid470", tween: [ "style", "${_lan}", "top", '3.56%', { fromValue: '3.56%'}], position: 0, duration: 0 },
            { id: "eid191", tween: [ "style", "${_thruster07}", "left", '46.94%', { fromValue: '46.94%'}], position: 0, duration: 0 },
            { id: "eid388", tween: [ "style", "${_device08}", "top", '95.5%', { fromValue: '95.5%'}], position: 0, duration: 0 },
            { id: "eid52", tween: [ "style", "${_battery01}", "top", '0.6%', { fromValue: '0.6%'}], position: 0, duration: 0 },
            { id: "eid190", tween: [ "style", "${_thruster08}", "left", '50.94%', { fromValue: '50.94%'}], position: 0, duration: 0 },
            { id: "eid39", tween: [ "transform", "${_battery01}", "scaleY", '0.46154', { fromValue: '0.46154'}], position: 0, duration: 0 },
            { id: "eid374", tween: [ "style", "${_thruster08}", "top", '48.39%', { fromValue: '48.39%'}], position: 0, duration: 0 },
            { id: "eid321", tween: [ "style", "${_device03}", "top", '92.5%', { fromValue: '92.5%'}], position: 0, duration: 0 },
            { id: "eid181", tween: [ "style", "${_thruster03}", "left", '50.94%', { fromValue: '50.94%'}], position: 0, duration: 0 },
            { id: "eid448", tween: [ "style", "${_Ext_pressure}", "top", '79.2%', { fromValue: '79.2%'}], position: 0, duration: 0 },
            { id: "eid385", tween: [ "style", "${_device05}", "top", '89.5%', { fromValue: '89.5%'}], position: 0, duration: 0 },
            { id: "eid42", tween: [ "transform", "${_battery02}", "scaleX", '0.47904', { fromValue: '0.47904'}], position: 0, duration: 0 },
            { id: "eid384", tween: [ "style", "${_device02}", "left", '1.7%', { fromValue: '1.7%'}], position: 0, duration: 0 },
            { id: "eid455", tween: [ "style", "${_ext_temp}", "top", '86.61%', { fromValue: '86.61%'}], position: 0, duration: 0 },
            { id: "eid469", tween: [ "style", "${_lan}", "left", '87.07%', { fromValue: '87.07%'}], position: 0, duration: 0 },
            { id: "eid373", tween: [ "style", "${_thruster06}", "top", '48.39%', { fromValue: '48.39%'}], position: 0, duration: 0 },
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
      fill: ['rgba(0,166,145,1)']
   },
   {
      type: 'text',
      rect: ['0px','8px','153px','57px','auto','auto'],
      align: 'center',
      id: 'Text4',
      text: '76%',
      userClass: 'batt01_percentage',
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
            ["color", "background-color", 'rgba(0,166,145,1.00)'],
            ["style", "border-top-left-radius", [5.54,7.72], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "top", '0.02%'],
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
      fill: ['rgba(0,166,145,1)']
   },
   {
      type: 'text',
      rect: ['0px','9px','153px','56px','auto','auto'],
      align: 'center',
      id: 'Text5',
      text: '43%',
      userClass: 'batt02_percentage',
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
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(0,0,0,1)','500','none','normal'],
      type: 'text',
      id: 'device01_name',
      text: 'Jetson',
      align: 'center',
      rect: ['0%','7%','100%','100%','auto','auto']
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
            ["style", "top", '0.02%'],
            ["style", "height", '78.74%'],
            ["style", "left", '0.02%'],
            ["color", "background-color", 'rgba(0,166,145,1.00)']
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
         "${_Group2}": [
            ["style", "left", '0%'],
            ["style", "top", '0%']
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
         "${symbolSelector}": [
            ["style", "height", '133px'],
            ["style", "width", '96px']
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
         "${_thruster8}": [
            ["style", "top", '0%'],
            ["style", "height", '100.01%'],
            ["style", "left", '0%'],
            ["style", "width", '99.99%']
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
         "${_Group3Copy10}": [
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
      rect: ['0%','9.9%','100%','100%','auto','auto'],
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(0,0,0,1)','500','none','normal'],
      id: 'device02_name',
      text: 'IMU',
      align: 'center',
      type: 'text'
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
      type: 'text',
      rect: ['0%','9.9%','100%','100%','auto','auto'],
      id: 'device03_name',
      text: 'DVL',
      align: 'center',
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(0,0,0,1)','500','none','normal']
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
      rect: ['0%','9.9%','100%','100%','auto','auto'],
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(0,0,0,1)','500','none','normal'],
      id: 'device04_name',
      text: 'F-Cam',
      align: 'center',
      type: 'text'
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
      type: 'text',
      rect: ['0%','9.9%','100%','100%','auto','auto'],
      id: 'device05_name',
      text: 'B-Cam',
      align: 'center',
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(0,0,0,1)','500','none','normal']
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
      type: 'text',
      rect: ['0%','9.9%','100%','100%','auto','auto'],
      id: 'device06_name',
      text: 'LAN',
      align: 'center',
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(0,0,0,1)','500','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
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
      rect: ['0%','0%','100%','100%','auto','auto'],
      borderRadius: ['6.25% 66.67%','6.25% 66.67%','6.25% 66.67%','6.25% 66.67%'],
      userClass: 'device07',
      id: 'device007',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(100,130,130,0.80)']
   },
   {
      rect: ['0%','9.9%','100%','100%','auto','auto'],
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(0,0,0,1)','500','none','normal'],
      id: 'device07_name',
      text: 'Arduino',
      align: 'center',
      type: 'text'
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
         "${_Text}": [
            ["style", "height", '30px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '320px']
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
      userClass: 'device08',
      borderRadius: ['6.25% 66.67%','6.25% 66.67%','6.25% 66.67%','6.25% 66.67%'],
      rect: ['0%','0%','100%','100%','auto','auto'],
      id: 'device008',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(100,130,130,0.80)']
   },
   {
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(0,0,0,1)','500','none','normal'],
      type: 'text',
      id: 'device08_name',
      text: 'P.S.',
      align: 'center',
      rect: ['0%','9.9%','100%','100%','auto','auto']
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
         "${_Text}": [
            ["style", "top", '0px'],
            ["style", "height", '30px'],
            ["style", "left", '0px'],
            ["style", "width", '320px']
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
            ["style", "height", '76.77%'],
            ["style", "top", '0.02%'],
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
            ["style", "top", '0.02%'],
            ["style", "height", '78.74%'],
            ["style", "left", '50%'],
            ["style", "width", '36.31%']
         ],
         "${_extPressure_status}": [
            ["style", "height", '11.81%'],
            ["style", "top", '70%'],
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
      userClass: 'intpressure_status',
      borderRadius: ['10px','10px','10px','10px'],
      rect: ['0.3%','70%','50%','11.8%','auto','auto'],
      id: 'intPressure_status',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(2,159,144,1.00)']
   },
   {
      type: 'text',
      rect: ['50%','0%','36.3%','78.7%','auto','auto'],
      align: 'left',
      id: 'intPressure_value',
      text: '20 bar',
      userClass: 'intpressure_value',
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(225,225,225,0.4961)','500','none','normal']
   },
   {
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(225,225,225,0.4961)','500','none','normal'],
      type: 'text',
      id: 'intPressure_Text',
      text: 'Int. Pressure :',
      align: 'left',
      rect: ['0%','0%','76.7%','76.8%','auto','auto']
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
            ["style", "height", '78.74%'],
            ["style", "top", '0.02%'],
            ["style", "left", '50%'],
            ["style", "width", '36.31%']
         ],
         "${_intPressure_Text}": [
            ["style", "top", '0%'],
            ["style", "height", '76.77%'],
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
      rect: ['0.4%','88.2%','97.2%','11.8%','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      userClass: 'extpressure_status',
      id: 'extPressure_status',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(34,34,34,1)']
   },
   {
      rect: ['63.7%','0%','36.3%','78.7%','auto','auto'],
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(225,225,225,0.4961)','500','none','normal'],
      userClass: 'extpressure_value',
      id: 'extPressure_value',
      text: '20 bar',
      align: 'left',
      type: 'text'
   },
   {
      type: 'text',
      rect: ['0%','0%','76.7%','76.8%','auto','auto'],
      id: 'extPressure_Text',
      text: 'Ext. Pressure :',
      align: 'left',
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(225,225,225,0.4961)','500','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_extPressure_value}": [
            ["style", "height", '78.74%'],
            ["style", "top", '0.02%'],
            ["style", "left", '63.71%'],
            ["style", "width", '36.31%']
         ],
         "${symbolSelector}": [
            ["style", "height", '27px'],
            ["style", "width", '222px']
         ],
         "${_extPressure_Text}": [
            ["style", "top", '0.02%'],
            ["style", "height", '76.77%'],
            ["style", "left", '0%'],
            ["style", "width", '76.67%']
         ],
         "${_extPressure_status}": [
            ["style", "height", '11.81%'],
            ["style", "top", '88.2%'],
            ["style", "left", '0.35%'],
            ["color", "background-color", 'rgba(70,70,70,1.00)']
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
      rect: ['0.3%','80%','80%','11.8%','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      userClass: 'exttemp_status',
      id: 'exttemp_status',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(208,0,0,1.00)']
   },
   {
      rect: ['0%','3.7%','76.7%','76.8%','auto','auto'],
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(225,225,225,0.4961)','500','none','normal'],
      id: 'exttemp_Text',
      text: 'Ext. Temperature :',
      align: 'left',
      type: 'text'
   },
   {
      userClass: 'exttemp_value',
      type: 'text',
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(225,225,225,0.4961)','500','none','normal'],
      id: 'exttemp_value',
      text: '20*C',
      align: 'left',
      rect: ['60.8%','2.8%','36.3%','78.7%','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_exttemp_value}": [
            ["style", "top", '2.78%'],
            ["style", "height", '78.74%'],
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
         "${_exttemp_Text}": [
            ["style", "height", '76.77%'],
            ["style", "top", '3.7%'],
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
      rect: ['0.3%','80%','50%','11.8%','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      userClass: 'inttemp_status',
      id: 'inttemp_status',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(208,0,0,1.00)']
   },
   {
      rect: ['0%','3.7%','76.7%','76.8%','auto','auto'],
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(225,225,225,0.4961)','500','none','normal'],
      id: 'inttemp_Text',
      text: 'Int. Temperature :',
      align: 'left',
      type: 'text'
   },
   {
      userClass: 'inttemp_value',
      type: 'text',
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(225,225,225,0.4961)','500','none','normal'],
      id: 'inttemp_value',
      text: '40*C',
      align: 'left',
      rect: ['60.8%','2.8%','36.3%','78.7%','auto','auto']
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
            ["style", "top", '3.7%'],
            ["style", "height", '76.77%'],
            ["style", "left", '0%'],
            ["style", "width", '76.67%']
         ],
         "${symbolSelector}": [
            ["style", "height", '27px'],
            ["style", "width", '222px']
         ],
         "${_inttemp_value}": [
            ["style", "height", '78.74%'],
            ["style", "top", '2.78%'],
            ["style", "left", '60.77%'],
            ["style", "width", '36.31%']
         ],
         "${_inttemp_status_back}": [
            ["style", "top", '80%'],
            ["style", "height", '11.81%'],
            ["color", "background-color", 'rgba(70,70,70,1.00)'],
            ["style", "left", '0.35%'],
            ["style", "width", '80%']
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
      userClass: 'humidity_status',
      borderRadius: ['10px','10px','10px','10px'],
      rect: ['0.3%','80%','50%','11.8%','auto','auto'],
      id: 'humidity_status',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,120,143,1.00)']
   },
   {
      type: 'text',
      rect: ['0%','3.7%','76.7%','76.8%','auto','auto'],
      id: 'humidity_Text',
      text: 'Humidity :',
      align: 'left',
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(225,225,225,0.4961)','500','none','normal']
   },
   {
      rect: ['35%','2.8%','36.3%','78.7%','auto','auto'],
      userClass: 'humidity_value',
      align: 'left',
      id: 'humidity_value',
      text: '1.2',
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(225,225,225,0.4961)','500','none','normal'],
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_humidity_Text}": [
            ["style", "height", '76.77%'],
            ["style", "top", '3.7%'],
            ["style", "left", '0%'],
            ["style", "width", '76.67%']
         ],
         "${symbolSelector}": [
            ["style", "height", '27px'],
            ["style", "width", '222px']
         ],
         "${_humidity_value}": [
            ["style", "top", '2.78%'],
            ["style", "height", '78.74%'],
            ["style", "left", '35.02%'],
            ["style", "width", '36.31%']
         ],
         "${_humidity_status_back}": [
            ["style", "top", '80%'],
            ["style", "height", '11.81%'],
            ["color", "background-color", 'rgba(70,70,70,1.00)'],
            ["style", "left", '0.35%'],
            ["style", "width", '80%']
         ],
         "${_humidity_status}": [
            ["style", "top", '80%'],
            ["style", "height", '11.81%'],
            ["color", "background-color", 'rgba(0,120,143,1.00)'],
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
"run_script": {
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
      borderRadius: ['2px 2px','2px 2px','2px 2px','2px 2px'],
      type: 'rect',
      id: 'Rectangle2',
      stroke: [0,'rgba(0,0,0,1)','none'],
      cursor: ['pointer'],
      fill: ['rgba(0,166,145,1.00)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',[125,'%'],'rgba(0,0,0,1)','400','none',''],
      type: 'text',
      id: 'Text',
      text: '&lt;/&gt;',
      align: 'center',
      rect: ['0%','8%','100%','100%','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(0,166,145,1.00)'],
            ["style", "border-top-left-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0.05%'],
            ["style", "width", '100.04%'],
            ["style", "top", '0.04%'],
            ["style", "border-bottom-left-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '100%'],
            ["style", "cursor", 'pointer'],
            ["style", "border-top-right-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Text}": [
            ["style", "letter-spacing", '0em'],
            ["style", "font-weight", '400'],
            ["style", "left", '0%'],
            ["style", "width", '100%'],
            ["style", "top", '7.96%'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "height", '100%'],
            ["style", "word-spacing", '0em'],
            ["style", "font-size", '125%']
         ],
         "${symbolSelector}": [
            ["style", "height", '27px'],
            ["style", "width", '40px']
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
"script_box": {
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
      rect: ['0%','5.8%','100%','250%','auto','auto'],
      userClass: 'script_box',
      id: 'Rectangle3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(15,15,15,1.00)']
   },
   {
      rect: ['70.1%','3%','41px','44px','auto','auto'],
      transform: [[],['45']],
      userClass: 'script_box',
      id: 'Rectangle4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(15,15,15,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle3}": [
            ["style", "top", '5.61%'],
            ["style", "overflow", 'visible'],
            ["style", "height", '250%'],
            ["color", "background-color", 'rgba(15,15,15,1.00)'],
            ["style", "left", '0%'],
            ["style", "width", '100.01%']
         ],
         "${_Rectangle4}": [
            ["color", "background-color", 'rgba(15,15,15,1.00)'],
            ["style", "top", '3.02%'],
            ["style", "left", '70.09%'],
            ["transform", "rotateZ", '45deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '24.72%'],
            ["style", "width", '29.69%']
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
"lan_box": {
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
      rect: ['37.2%','7.5%','62.8%','100%','auto','auto'],
      userClass: 'lan_box',
      id: 'Rectangle3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(41,41,41,1.00)']
   },
   {
      rect: ['70.3%','4.9%','41px','44px','auto','auto'],
      transform: [[],['45']],
      userClass: 'lan_box',
      id: 'Rectangle4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(41,41,41,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle3}": [
            ["color", "background-color", 'rgba(41,41,41,1.00)'],
            ["style", "overflow", 'visible'],
            ["style", "height", '100.01%'],
            ["style", "top", '7.45%'],
            ["style", "left", '37.19%'],
            ["style", "width", '62.82%']
         ],
         "${_Rectangle4}": [
            ["color", "background-color", 'rgba(41,41,41,1.00)'],
            ["style", "top", '4.87%'],
            ["style", "left", '70.26%'],
            ["transform", "rotateZ", '45deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '24.72%'],
            ["style", "width", '29.69%']
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
"velocity-x": {
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
      id: 'velocity_status_back',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(34,34,34,1)']
   },
   {
      rect: ['0.3%','70%','60%','11.8%','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      userClass: 'extpressure_status',
      id: 'velocity_status',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(2,159,144,1)']
   },
   {
      rect: ['50%','0%','36.3%','78.7%','auto','auto'],
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(225,225,225,0.4961)','500','none','normal'],
      userClass: 'velocityXvalue',
      id: 'velocity_value',
      text: '0.1 m/s',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['0%','0%','76.7%','76.8%','auto','auto'],
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(225,225,225,0.4961)','500','none','normal'],
      id: 'velocity_Text',
      text: 'Velocity-X',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_velocity_value}": [
            ["style", "height", '78.74%'],
            ["style", "top", '0.02%'],
            ["style", "left", '50%'],
            ["style", "width", '36.31%']
         ],
         "${symbolSelector}": [
            ["style", "height", '27px'],
            ["style", "width", '222px']
         ],
         "${_velocity_status}": [
            ["style", "top", '70%'],
            ["style", "height", '11.81%'],
            ["style", "left", '0.3%'],
            ["style", "width", '60%']
         ],
         "${_velocity_Text}": [
            ["style", "top", '0.02%'],
            ["style", "height", '76.77%'],
            ["style", "left", '0%'],
            ["style", "width", '76.67%']
         ],
         "${_velocity_status_back}": [
            ["color", "background-color", 'rgba(70,70,70,1.00)'],
            ["style", "height", '11.81%'],
            ["style", "top", '70%'],
            ["style", "left", '0.35%'],
            ["style", "width", '80%']
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
"velocity-y": {
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
      id: 'velocity_status_back',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(34,34,34,1)']
   },
   {
      rect: ['0.3%','70%','60%','11.8%','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      userClass: 'extpressure_status',
      id: 'velocity_status',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(2,159,144,1)']
   },
   {
      rect: ['50%','0%','36.3%','78.7%','auto','auto'],
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(225,225,225,0.4961)','500','none','normal'],
      userClass: 'velocityYvalue',
      id: 'velocity_value',
      text: '0.3 m/s',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['0%','0%','76.7%','76.8%','auto','auto'],
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(225,225,225,0.4961)','500','none','normal'],
      id: 'velocity_Text',
      text: 'Velocity-Y',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_velocity_value}": [
            ["style", "top", '0.02%'],
            ["style", "height", '78.74%'],
            ["style", "left", '50%'],
            ["style", "width", '36.31%']
         ],
         "${symbolSelector}": [
            ["style", "height", '27px'],
            ["style", "width", '222px']
         ],
         "${_velocity_Text}": [
            ["style", "height", '76.77%'],
            ["style", "top", '0.02%'],
            ["style", "left", '0%'],
            ["style", "width", '76.67%']
         ],
         "${_velocity_status}": [
            ["style", "height", '11.81%'],
            ["style", "top", '70%'],
            ["style", "left", '0.3%'],
            ["style", "width", '60%']
         ],
         "${_velocity_status_back}": [
            ["color", "background-color", 'rgba(70,70,70,1.00)'],
            ["style", "height", '11.81%'],
            ["style", "top", '70%'],
            ["style", "left", '0.35%'],
            ["style", "width", '80%']
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
"velocity-z": {
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
      id: 'velocity_status_back',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(34,34,34,1)']
   },
   {
      rect: ['0.3%','70%','60%','11.8%','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      userClass: 'extpressure_status',
      id: 'velocity_status',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(2,159,144,1)']
   },
   {
      rect: ['50%','0%','36.3%','78.7%','auto','auto'],
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(225,225,225,0.4961)','500','none','normal'],
      userClass: 'velocityZvalue',
      id: 'velocity_value',
      text: '0.0 m/s',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['0%','0%','76.7%','76.8%','auto','auto'],
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(225,225,225,0.4961)','500','none','normal'],
      id: 'velocity_Text',
      text: 'Velocity-Z',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_velocity_value}": [
            ["style", "height", '78.74%'],
            ["style", "top", '0.02%'],
            ["style", "left", '50%'],
            ["style", "width", '36.31%']
         ],
         "${symbolSelector}": [
            ["style", "height", '27px'],
            ["style", "width", '222px']
         ],
         "${_velocity_Text}": [
            ["style", "top", '0.02%'],
            ["style", "height", '76.77%'],
            ["style", "left", '0%'],
            ["style", "width", '76.67%']
         ],
         "${_velocity_status}": [
            ["style", "top", '70%'],
            ["style", "height", '11.81%'],
            ["style", "left", '0.3%'],
            ["style", "width", '60%']
         ],
         "${_velocity_status_back}": [
            ["color", "background-color", 'rgba(70,70,70,1.00)'],
            ["style", "height", '11.81%'],
            ["style", "top", '70%'],
            ["style", "left", '0.35%'],
            ["style", "width", '80%']
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
"yaw": {
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
      id: 'velocity_status_back',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(34,34,34,1)']
   },
   {
      rect: ['0.3%','70%','60%','11.8%','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      userClass: 'yaw_value',
      id: 'velocity_status',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(2,159,144,1)']
   },
   {
      rect: ['50%','0%','36.3%','78.7%','auto','auto'],
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(225,225,225,0.4961)','500','none','normal'],
      userClass: 'velocityZvalue',
      id: 'velocity_value',
      text: '0.0 deg',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['0%','0%','76.7%','76.8%','auto','auto'],
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(225,225,225,0.4961)','500','none','normal'],
      id: 'velocity_Text',
      text: 'Yaw',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_velocity_value}": [
            ["style", "top", '0.02%'],
            ["style", "height", '78.74%'],
            ["style", "left", '50%'],
            ["style", "width", '36.31%']
         ],
         "${symbolSelector}": [
            ["style", "height", '27px'],
            ["style", "width", '222px']
         ],
         "${_velocity_Text}": [
            ["style", "height", '76.77%'],
            ["style", "top", '0.02%'],
            ["style", "left", '0%'],
            ["style", "width", '76.67%']
         ],
         "${_velocity_status}": [
            ["style", "height", '11.81%'],
            ["style", "top", '70%'],
            ["style", "left", '0.3%'],
            ["style", "width", '60%']
         ],
         "${_velocity_status_back}": [
            ["color", "background-color", 'rgba(70,70,70,1.00)'],
            ["style", "height", '11.81%'],
            ["style", "top", '70%'],
            ["style", "left", '0.35%'],
            ["style", "width", '80%']
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
"pitch": {
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
      id: 'velocity_status_back',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(34,34,34,1)']
   },
   {
      rect: ['0.3%','70%','60%','11.8%','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      userClass: 'yaw_value',
      id: 'velocity_status',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(2,159,144,1)']
   },
   {
      rect: ['50%','0%','36.3%','78.7%','auto','auto'],
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(225,225,225,0.4961)','500','none','normal'],
      userClass: 'velocityZvalue',
      id: 'velocity_value',
      text: '0.0 deg',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['0%','0%','76.7%','76.8%','auto','auto'],
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(225,225,225,0.4961)','500','none','normal'],
      id: 'velocity_Text',
      text: 'Pitch',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_velocity_value}": [
            ["style", "height", '78.74%'],
            ["style", "top", '0.02%'],
            ["style", "left", '50%'],
            ["style", "width", '36.31%']
         ],
         "${symbolSelector}": [
            ["style", "height", '27px'],
            ["style", "width", '222px']
         ],
         "${_velocity_Text}": [
            ["style", "top", '0.02%'],
            ["style", "height", '76.77%'],
            ["style", "left", '0%'],
            ["style", "width", '76.67%']
         ],
         "${_velocity_status}": [
            ["style", "top", '70%'],
            ["style", "height", '11.81%'],
            ["style", "left", '0.3%'],
            ["style", "width", '60%']
         ],
         "${_velocity_status_back}": [
            ["color", "background-color", 'rgba(70,70,70,1.00)'],
            ["style", "height", '11.81%'],
            ["style", "top", '70%'],
            ["style", "left", '0.35%'],
            ["style", "width", '80%']
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
"roll": {
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
      id: 'velocity_status_back',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(34,34,34,1)']
   },
   {
      rect: ['0.3%','70%','60%','11.8%','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      userClass: 'yaw_value',
      id: 'velocity_status',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(2,159,144,1)']
   },
   {
      rect: ['50%','0%','36.3%','78.7%','auto','auto'],
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(225,225,225,0.4961)','500','none','normal'],
      userClass: 'velocityZvalue',
      id: 'velocity_value',
      text: '0.0 deg',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['0%','0%','76.7%','76.8%','auto','auto'],
      font: ['ubuntu-mono, sans-serif',[1,'em'],'rgba(225,225,225,0.4961)','500','none','normal'],
      id: 'velocity_Text',
      text: 'Roll',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_velocity_value}": [
            ["style", "top", '0.02%'],
            ["style", "height", '78.74%'],
            ["style", "left", '50%'],
            ["style", "width", '36.31%']
         ],
         "${symbolSelector}": [
            ["style", "height", '27px'],
            ["style", "width", '222px']
         ],
         "${_velocity_Text}": [
            ["style", "height", '76.77%'],
            ["style", "top", '0.02%'],
            ["style", "left", '0%'],
            ["style", "width", '76.67%']
         ],
         "${_velocity_status}": [
            ["style", "height", '11.81%'],
            ["style", "top", '70%'],
            ["style", "left", '0.3%'],
            ["style", "width", '60%']
         ],
         "${_velocity_status_back}": [
            ["color", "background-color", 'rgba(70,70,70,1.00)'],
            ["style", "height", '11.81%'],
            ["style", "top", '70%'],
            ["style", "left", '0.35%'],
            ["style", "width", '80%']
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
