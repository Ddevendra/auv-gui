var local_ip = '0.0.0.0:9090';

// connecting to ROS----------
var ros = new ROSLIB.Ros({
	url: 'ws://' + local_ip  
});

ros.on('connection', function() {
console.log('Connected to websocket server.');
});

ros.on('error', function(error) {
console.log('Error connecting to websocket server: ', error);
});

ros.on('close', function() {
console.log('Connection to websocket server closed.');
});


// talking to topic
var imu = new ROSLIB.Topic({
	ros: ros,
	name: '/imu/data',
	messageType : 'sensor_msgs/Imu'
});

imu.subscribe(function(message) {
    console.log('Received message on ' + imu.name + ': ' + message.orientation.x);
  });


// talking to server
var shell_client = new ROSLIB.Service({
    ros : ros,
    name : '/shell_script_srv',
    serviceType : 'beginner_tutorials/shell_script'
  });

var request = new ROSLIB.ServiceRequest({
    str : "pactl set-sink-mute 0 0"
  });

  shell_client.callService(request, function(result) {
    console.log('Result for service call on '
      + shell_client.name
      + ': '
      + result.str);
  });

