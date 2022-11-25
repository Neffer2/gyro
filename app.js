let elemReport = document.getElementById('report');
let report = "";
let sensor = new Gyroscope();
sensor.start();

sensor.onreading = () => {
    report += "Angular velocity around the X-axis " + sensor.x + "\n" +
    "Angular velocity around the Y-axis " + sensor.y + "\n" + 
    "Angular velocity around the Z-axis " + sensor.z;
    elemReport.innerHTML = "report";
};

sensor.onerror = event => {
    report = event.error.name +" "+ event.error.message;
    elemReport.innerHTML = report;
};