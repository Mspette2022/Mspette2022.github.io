
// insert Function start() here?
// insert Function stop() here?

//Setting Class ID as InputData
class InputData {
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        speed,
    ) {
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.speed = speed;
    }
}

//where we get the data, loadData() comes from dataLoader-1.js
function getData() {
    var loadedData = loadData();
    return loadedData;
}

/**
 * 
 * @param {*} legend 
 * @param {*} value 
 * @param {*} units 
 */


//building out each row of the table
function dataRow(legend, value, units) {
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}

function progressBar() {

  id = setInterval(frame, 1);

  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
    }
    function resetProgressBar() {
        width = 1;
        clearInterval(interval)
        elem.style.width = width;
        id = setInterval(frame, 1);
      }
  }
}
