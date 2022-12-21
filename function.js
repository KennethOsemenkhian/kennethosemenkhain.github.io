var i = 0;
var images = [];
var time = 1500;

images[0] = 'f1.png';
images[1] = 'K4.jpg';
images[2] = 'pr1.jpg';
images[3] = 'v2.png';

function changeImg(){
    document.slide.src = images[i];
    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }
    setTimeout("changeImg()", time);
}
window.onload = changeImg;

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}

function getestimate() {
        var asm = document.getElementById('aerial-surveys-and-mapping').value
        var mb = document.getElementById('mapping-bundles').value
        var sh = document.getElementById('size-hactares').value
        
        if (asm == 'Select-An-Option' & mb == 'Select-An-Option' & sh == 'Select-An-Option') {
            var priceestimate = "Selet a Valid Option"
            document.getElementById('res').innerHTML = priceestimate;
        }

    // program for Small-Area-Mapping" & mb == "simple-aerial-surveys" & sh == ""
    if (asm == "Small-Area-Mapping" & mb == "simple-aerial-surveys" & sh == "10") {
        var priceestimate =  18750 * 10
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Small-Area-Mapping" & mb == "simple-aerial-surveys" & sh == "30") {
        var priceestimate =  18750 * 30
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Small-Area-Mapping" & mb == "simple-aerial-surveys" & sh == "50") {
        var priceestimate =  18750 * 50
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Small-Area-Mapping" & mb == "simple-aerial-surveys" & sh == "100") {
        var priceestimate =  18750 * 100
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Small-Area-Mapping" & mb == "simple-aerial-surveys" & sh == "200") {
        var priceestimate =  18750 * 200
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Small-Area-Mapping" & mb == "simple-aerial-surveys" & sh == "300") {
        var priceestimate =  18750 * 300
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Small-Area-Mapping" & mb == "simple-aerial-surveys" & sh == "400") {
        var priceestimate = 18750 * 400
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Small-Area-Mapping" & mb == "simple-aerial-surveys" & sh == "500") {
        var priceestimate =  18750 * 500
        document.getElementById('res').innerHTML = priceestimate;
    }

    // program for Small-Area-Mapping" & mb == "basic-aerial-surveys" & sh == ""
    if (asm == "Small-Area-Mapping" & mb == "basic-aerial-surveys" & sh == "10") {
        var priceestimate =  25000 * 10
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Small-Area-Mapping" & mb == "basic-aerial-surveys" & sh == "30") {
        var priceestimate =  25000 * 30
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Small-Area-Mapping" & mb == "basic-aerial-surveys" & sh == "50") {
        var priceestimate =  25000 * 50
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Small-Area-Mapping" & mb == "basic-aerial-surveys" & sh == "100") {
        var priceestimate =  25000 * 100
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Small-Area-Mapping" & mb == "basic-aerial-surveys" & sh == "200") {
        var priceestimate =  25000 * 200
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Small-Area-Mapping" & mb == "basic-aerial-surveys" & sh == "300") {
        var priceestimate =  25000 * 300
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Small-Area-Mapping" & mb == "basic-aerial-surveys" & sh == "400") {
        var priceestimate = 25000 * 400
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Small-Area-Mapping" & mb == "basic-aerial-surveys" & sh == "500") {
        var priceestimate =  25000 * 500
        document.getElementById('res').innerHTML = priceestimate;
    }

// program for Small-Area-Mapping" & mb == "detailed-aerial-surveys" & sh == ""
    if (asm == "Small-Area-Mapping" & mb == "detailed-aerial-surveys" & sh == "10") {
        var priceestimate =  31250 * 10
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Small-Area-Mapping" & mb == "detailed-aerial-surveys" & sh == "30") {
        var priceestimate =  31250 * 30
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Small-Area-Mapping" & mb == "detailed-aerial-surveys" & sh == "50") {
        var priceestimate =  31250 * 50
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Small-Area-Mapping" & mb == "detailed-aerial-surveys" & sh == "100") {
        var priceestimate =  31250 * 100
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Small-Area-Mapping" & mb == "detailed-aerial-surveys" & sh == "200") {
        var priceestimate =  31250 * 200
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Small-Area-Mapping" & mb == "detailed-aerial-surveys" & sh == "300") {
        var priceestimate =  31250 * 300
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Small-Area-Mapping" & mb == "detailed-aerial-surveys" & sh == "400") {
        var priceestimate = 31250 * 400
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Small-Area-Mapping" & mb == "detailed-aerial-surveys" & sh == "500") {
        var priceestimate =  31250 * 500
        document.getElementById('res').innerHTML = priceestimate;
    }

// program for Small-Area-Mapping" & mb == "detailed-aerial-surveys" & sh == ""
     if (asm == "Small-Area-Mapping" & mb == "kartgis-geospatial-solution-ultra" & sh == "10") {
        var priceestimate =  43750 * 10
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Small-Area-Mapping" & mb == "kartgis-geospatial-solution-ultra" & sh == "30") {
        var priceestimate =  43750 * 30
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Small-Area-Mapping" & mb == "kartgis-geospatial-solution-ultra" & sh == "50") {
        var priceestimate =  43750 * 50
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Small-Area-Mapping" & mb == "kartgis-geospatial-solution-ultra" & sh == "100") {
        var priceestimate =  43750 * 100
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Small-Area-Mapping" & mb == "kartgis-geospatial-solution-ultra" & sh == "200") {
        var priceestimate =  43750 * 200
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Small-Area-Mapping" & mb == "kartgis-geospatial-solution-ultra" & sh == "300") {
        var priceestimate =  43750 * 300
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Small-Area-Mapping" & mb == "kartgis-geospatial-solution-ultra" & sh == "400") {
        var priceestimate = 43750 * 400
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Small-Area-Mapping" & mb == "kartgis-geospatial-solution-ultra" & sh == "500") {
        var priceestimate =  43750 * 500
        document.getElementById('res').innerHTML = priceestimate;
    }

    // program for Small-Area-Mapping" & mb == "3d-modelling" & sh == ""
    if (asm == "Small-Area-Mapping" & mb == "3d-modelling" & sh == "10") {
        var priceestimate =  62500 * 10
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Small-Area-Mapping" & mb == "3d-modelling" & sh == "30") {
        var priceestimate =  62500 * 30
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Small-Area-Mapping" & mb == "3d-modelling" & sh == "50") {
        var priceestimate =  62500 * 50
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Small-Area-Mapping" & mb == "3d-modelling" & sh == "100") {
        var priceestimate =  62500 * 100
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Small-Area-Mapping" & mb == "3d-modelling" & sh == "200") {
        var priceestimate =  62500 * 200
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Small-Area-Mapping" & mb == "3d-modelling" & sh == "300") {
        var priceestimate =  62500 * 300
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Small-Area-Mapping" & mb == "3d-modelling" & sh == "400") {
        var priceestimate = 62500 * 400
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Small-Area-Mapping" & mb == "3d-modelling" & sh == "500") {
        var priceestimate =  62500 * 500
        document.getElementById('res').innerHTML = priceestimate;
    }

     // program for Mapping-1.0" & mb == "simple-aerial-surveys" & sh == ""
     if (asm == "Mapping-1.0" & mb == "simple-aerial-surveys" & sh == "10") {
        var priceestimate =  12750 * 10
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-1.0" & mb == "simple-aerial-surveys" & sh == "30") {
        var priceestimate =  12750 * 30
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-1.0" & mb == "simple-aerial-surveys" & sh == "50") {
        var priceestimate =  12750 * 50
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-1.0" & mb == "simple-aerial-surveys" & sh == "100") {
        var priceestimate =  12750 * 100
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-1.0" & mb == "simple-aerial-surveys" & sh == "200") {
        var priceestimate =  12750 * 200
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-1.0" & mb == "simple-aerial-surveys" & sh == "300") {
        var priceestimate =  12750 * 300
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-1.0" & mb == "simple-aerial-surveys" & sh == "400") {
        var priceestimate = 12750 * 400
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-1.0" & mb == "simple-aerial-surveys" & sh == "500") {
        var priceestimate =  12750 * 500
        document.getElementById('res').innerHTML = priceestimate;
    }

    // program for Mapping-1.0" & mb == "basic-aerial-surveys" & sh == ""
    if (asm == "Mapping-1.0" & mb == "basic-aerial-surveys" & sh == "10") {
        var priceestimate =  17000 * 10
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-1.0" & mb == "basic-aerial-surveys" & sh == "30") {
        var priceestimate =  17000 * 30
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-1.0" & mb == "basic-aerial-surveys" & sh == "50") {
        var priceestimate =  17000 * 50
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-1.0" & mb == "basic-aerial-surveys" & sh == "100") {
        var priceestimate =  17000 * 100
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-1.0" & mb == "basic-aerial-surveys" & sh == "200") {
        var priceestimate =  17000 * 200
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-1.0" & mb == "basic-aerial-surveys" & sh == "300") {
        var priceestimate =  17000 * 300
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-1.0" & mb == "basic-aerial-surveys" & sh == "400") {
        var priceestimate = 17000 * 400
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-1.0" & mb == "basic-aerial-surveys" & sh == "500") {
        var priceestimate =  17000 * 500
        document.getElementById('res').innerHTML = priceestimate;
    }

// program for Mapping-1.0" & mb == "detailed-aerial-surveys" & sh == ""
    if (asm == "Mapping-1.0" & mb == "detailed-aerial-surveys" & sh == "10") {
        var priceestimate =  21250 * 10
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-1.0" & mb == "detailed-aerial-surveys" & sh == "30") {
        var priceestimate =  21250 * 30
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-1.0" & mb == "detailed-aerial-surveys" & sh == "50") {
        var priceestimate =  21250 * 50
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-1.0" & mb == "detailed-aerial-surveys" & sh == "100") {
        var priceestimate =  21250 * 100
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-1.0" & mb == "detailed-aerial-surveys" & sh == "200") {
        var priceestimate =  21250 * 200
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-1.0" & mb == "detailed-aerial-surveys" & sh == "300") {
        var priceestimate =  21250 * 300
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-1.0" & mb == "detailed-aerial-surveys" & sh == "400") {
        var priceestimate = 21250 * 400
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-1.0" & mb == "detailed-aerial-surveys" & sh == "500") {
        var priceestimate =  21250 * 500
        document.getElementById('res').innerHTML = priceestimate;
    }

// program for Mapping-1.0" & mb == "kartgis-geospatial-solution-ultra" & sh == ""
     if (asm == "Mapping-1.0" & mb == "kartgis-geospatial-solution-ultra" & sh == "10") {
        var priceestimate =  29750 * 10
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-1.0" & mb == "kartgis-geospatial-solution-ultra" & sh == "30") {
        var priceestimate =  29750 * 30
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-1.0" & mb == "kartgis-geospatial-solution-ultra" & sh == "50") {
        var priceestimate =  29750 * 50
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-1.0" & mb == "kartgis-geospatial-solution-ultra" & sh == "100") {
        var priceestimate =  29750 * 100
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-1.0" & mb == "kartgis-geospatial-solution-ultra" & sh == "200") {
        var priceestimate =  29750 * 200
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-1.0" & mb == "kartgis-geospatial-solution-ultra" & sh == "300") {
        var priceestimate =  29750 * 300
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-1.0" & mb == "kartgis-geospatial-solution-ultra" & sh == "400") {
        var priceestimate = 29750 * 400
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-1.0" & mb == "kartgis-geospatial-solution-ultra" & sh == "500") {
        var priceestimate =  29750 * 500
        document.getElementById('res').innerHTML = priceestimate;
    }

    // program for Small-Area-Mapping" & mb == "3d-modelling" & sh == ""
    if (asm == "Mapping-1.0" & mb == "3d-modelling" & sh == "10") {
        var priceestimate =  42500 * 10
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-1.0" & mb == "3d-modelling" & sh == "30") {
        var priceestimate =  42500 * 30
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-1.0" & mb == "3d-modelling" & sh == "50") {
        var priceestimate =  42500 * 50
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-1.0" & mb == "3d-modelling" & sh == "100") {
        var priceestimate =  42500 * 100
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-1.0" & mb == "3d-modelling" & sh == "200") {
        var priceestimate =  42500 * 200
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-1.0" & mb == "3d-modelling" & sh == "300") {
        var priceestimate =  42500 * 300
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-1.0" & mb == "3d-modelling" & sh == "400") {
        var priceestimate = 42500 * 400
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-1.0" & mb == "3d-modelling" & sh == "500") {
        var priceestimate =  42500 * 500
        document.getElementById('res').innerHTML = priceestimate;
    }

     // program for Mapping-2.0" & mb == "simple-aerial-surveys" & sh == ""
     if (asm == "Mapping-2.0" & mb == "simple-aerial-surveys" & sh == "10") {
        var priceestimate =  8250 * 10
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-2.0" & mb == "simple-aerial-surveys" & sh == "30") {
        var priceestimate =  8250 * 30
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-2.0" & mb == "simple-aerial-surveys" & sh == "50") {
        var priceestimate =  8250 * 50
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-2.0" & mb == "simple-aerial-surveys" & sh == "100") {
        var priceestimate =  8250 * 100
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-2.0" & mb == "simple-aerial-surveys" & sh == "200") {
        var priceestimate =  8250 * 200
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-2.0" & mb == "simple-aerial-surveys" & sh == "300") {
        var priceestimate =  8250 * 300
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-2.0" & mb == "simple-aerial-surveys" & sh == "400") {
        var priceestimate = 8250 * 400
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-2.0" & mb == "simple-aerial-surveys" & sh == "500") {
        var priceestimate =  8250 * 500
        document.getElementById('res').innerHTML = priceestimate;
    }

    // program for Mapping-2.0" & mb == "basic-aerial-surveys" & sh == ""
    if (asm == "Mapping-2.0" & mb == "basic-aerial-surveys" & sh == "10") {
        var priceestimate =  11000 * 10
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-2.0" & mb == "basic-aerial-surveys" & sh == "30") {
        var priceestimate =  11000 * 30
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-2.0" & mb == "basic-aerial-surveys" & sh == "50") {
        var priceestimate =  11000 * 50
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-2.0" & mb == "basic-aerial-surveys" & sh == "100") {
        var priceestimate =  11000 * 100
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-2.0" & mb == "basic-aerial-surveys" & sh == "200") {
        var priceestimate =  11000 * 200
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-2.0" & mb == "basic-aerial-surveys" & sh == "300") {
        var priceestimate =  11000 * 300
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-2.0" & mb == "basic-aerial-surveys" & sh == "400") {
        var priceestimate = 11000 * 400
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-2.0" & mb == "basic-aerial-surveys" & sh == "500") {
        var priceestimate =  11000 * 500
        document.getElementById('res').innerHTML = priceestimate;
    }

// program for Mapping-2.0" & mb == "detailed-aerial-surveys" & sh == ""
    if (asm == "Mapping-2.0" & mb == "detailed-aerial-surveys" & sh == "10") {
        var priceestimate =  13750 * 10
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-2.0" & mb == "detailed-aerial-surveys" & sh == "30") {
        var priceestimate =  13750 * 30
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-2.0" & mb == "detailed-aerial-surveys" & sh == "50") {
        var priceestimate =  13750 * 50
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-2.0" & mb == "detailed-aerial-surveys" & sh == "100") {
        var priceestimate =  13750 * 100
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-2.0" & mb == "detailed-aerial-surveys" & sh == "200") {
        var priceestimate =  13750 * 200
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-2.0" & mb == "detailed-aerial-surveys" & sh == "300") {
        var priceestimate =  13750 * 300
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-2.0" & mb == "detailed-aerial-surveys" & sh == "400") {
        var priceestimate = 13750 * 400
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-2.0" & mb == "detailed-aerial-surveys" & sh == "500") {
        var priceestimate =  13750 * 500
        document.getElementById('res').innerHTML = priceestimate;
    }

// program for Mapping-2.0" & mb == "kartgis-geospatial-solution-ultra" & sh == ""
     if (asm == "Mapping-2.0" & mb == "kartgis-geospatial-solution-ultra" & sh == "10") {
        var priceestimate =  19250 * 10
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-2.0" & mb == "kartgis-geospatial-solution-ultra" & sh == "30") {
        var priceestimate =  19250 * 30
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-2.0" & mb == "kartgis-geospatial-solution-ultra" & sh == "50") {
        var priceestimate =  19250 * 50
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-2.0" & mb == "kartgis-geospatial-solution-ultra" & sh == "100") {
        var priceestimate =  19250 * 100
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-2.0" & mb == "kartgis-geospatial-solution-ultra" & sh == "200") {
        var priceestimate =  19250 * 200
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-2.0" & mb == "kartgis-geospatial-solution-ultra" & sh == "300") {
        var priceestimate =  19250 * 300
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-2.0" & mb == "kartgis-geospatial-solution-ultra" & sh == "400") {
        var priceestimate = 19250 * 400
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-2.0" & mb == "kartgis-geospatial-solution-ultra" & sh == "500") {
        var priceestimate =  19250 * 500
        document.getElementById('res').innerHTML = priceestimate;
    }

    // program for Mapping 2.0" & mb == "3d-modelling" & sh == ""
    if (asm == "Mapping-2.0" & mb == "3d-modelling" & sh == "10") {
        var priceestimate =  27500 * 10
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-2.0" & mb == "3d-modelling" & sh == "30") {
        var priceestimate =  27500 * 30
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-2.0" & mb == "3d-modelling" & sh == "50") {
        var priceestimate =  27500 * 50
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-2.0" & mb == "3d-modelling" & sh == "100") {
        var priceestimate =  27500 * 100
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-2.0" & mb == "3d-modelling" & sh == "200") {
        var priceestimate =  27500 * 200
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-2.0" & mb == "3d-modelling" & sh == "300") {
        var priceestimate =  27500 * 300
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-2.0" & mb == "3d-modelling" & sh == "400") {
        var priceestimate =  27500 * 400
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-2.0" & mb == "3d-modelling" & sh == "500") {
        var priceestimate =  27500 * 500
        document.getElementById('res').innerHTML = priceestimate;
    }

    // program for Mapping-3.0" & mb == "simple-aerial-surveys" & sh == ""
    if (asm == "Mapping-3.0" & mb == "simple-aerial-surveys" & sh == "10") {
        var priceestimate =  3750 * 10
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-3.0" & mb == "simple-aerial-surveys" & sh == "30") {
        var priceestimate =  3750 * 30
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-3.0" & mb == "simple-aerial-surveys" & sh == "50") {
        var priceestimate =  3750 * 50
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-3.0" & mb == "simple-aerial-surveys" & sh == "100") {
        var priceestimate =  3750 * 100
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-3.0" & mb == "simple-aerial-surveys" & sh == "200") {
        var priceestimate =  3750 * 200
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-3.0" & mb == "simple-aerial-surveys" & sh == "300") {
        var priceestimate =  3750 * 300
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-3.0" & mb == "simple-aerial-surveys" & sh == "400") {
        var priceestimate = 3750 * 400
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-3.0" & mb == "simple-aerial-surveys" & sh == "500") {
        var priceestimate =  3750 * 500
        document.getElementById('res').innerHTML = priceestimate;
    }

    // program for Mapping-3.0" & mb == "basic-aerial-surveys" & sh == ""
    if (asm == "Mapping-3.0" & mb == "basic-aerial-surveys" & sh == "10") {
        var priceestimate =  5000 * 10
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-3.0" & mb == "basic-aerial-surveys" & sh == "30") {
        var priceestimate =  5000 * 30
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-3.0" & mb == "basic-aerial-surveys" & sh == "50") {
        var priceestimate =  5000 * 50
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-3.0" & mb == "basic-aerial-surveys" & sh == "100") {
        var priceestimate =  5000 * 100
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-3.0" & mb == "basic-aerial-surveys" & sh == "200") {
        var priceestimate =  5000 * 200
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-3.0" & mb == "basic-aerial-surveys" & sh == "300") {
        var priceestimate =  5000 * 300
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-3.0" & mb == "basic-aerial-surveys" & sh == "400") {
        var priceestimate = 5000 * 400
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-3.0" & mb == "basic-aerial-surveys" & sh == "500") {
        var priceestimate =  5000 * 500
        document.getElementById('res').innerHTML = priceestimate;
    }

// program for Mapping-3.0" & mb == "detailed-aerial-surveys" & sh == ""
    if (asm == "Mapping-3.0" & mb == "detailed-aerial-surveys" & sh == "10") {
        var priceestimate =  6200 * 10
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-3.0" & mb == "detailed-aerial-surveys" & sh == "30") {
        var priceestimate =  6200 * 30
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-3.0" & mb == "detailed-aerial-surveys" & sh == "50") {
        var priceestimate =  6200 * 50
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-3.0" & mb == "detailed-aerial-surveys" & sh == "100") {
        var priceestimate =  6200 * 100
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-3.0" & mb == "detailed-aerial-surveys" & sh == "200") {
        var priceestimate =  6200 * 200
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-3.0" & mb == "detailed-aerial-surveys" & sh == "300") {
        var priceestimate =  6200 * 300
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-3.0" & mb == "detailed-aerial-surveys" & sh == "400") {
        var priceestimate = 6200 * 400
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-3.0" & mb == "detailed-aerial-surveys" & sh == "500") {
        var priceestimate =  6200 * 500
        document.getElementById('res').innerHTML = priceestimate;
    }

// program for Mapping-3.0" & mb == "kartgis-geospatial-solution-ultra" & sh == ""
     if (asm == "Mapping-3.0" & mb == "kartgis-geospatial-solution-ultra" & sh == "10") {
        var priceestimate =  8750 * 10
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-3.0" & mb == "kartgis-geospatial-solution-ultra" & sh == "30") {
        var priceestimate =  8750 * 30
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-3.0" & mb == "kartgis-geospatial-solution-ultra" & sh == "50") {
        var priceestimate =  8750 * 50
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-3.0" & mb == "kartgis-geospatial-solution-ultra" & sh == "100") {
        var priceestimate =  8750 * 100
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-3.0" & mb == "kartgis-geospatial-solution-ultra" & sh == "200") {
        var priceestimate =  8750 * 200
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-3.0" & mb == "kartgis-geospatial-solution-ultra" & sh == "300") {
        var priceestimate =  8750 * 300
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-3.0" & mb == "kartgis-geospatial-solution-ultra" & sh == "400") {
        var priceestimate = 8750 * 400
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-3.0" & mb == "kartgis-geospatial-solution-ultra" & sh == "500") {
        var priceestimate =  8750 * 500
        document.getElementById('res').innerHTML = priceestimate;
    }

    // program for Mapping 3.0" & mb == "3d-modelling" & sh == ""
    if (asm == "Mapping-3.0" & mb == "3d-modelling" & sh == "10") {
        var priceestimate =  12500 * 10
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-3.0" & mb == "3d-modelling" & sh == "30") {
        var priceestimate =  12500 * 30
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-3.0" & mb == "3d-modelling" & sh == "50") {
        var priceestimate =  12500 * 50
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-3.0" & mb == "3d-modelling" & sh == "100") {
        var priceestimate =  12500 * 100
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-3.0" & mb == "3d-modelling" & sh == "200") {
        var priceestimate =  12500 * 200
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-3.0" & mb == "3d-modelling" & sh == "300") {
        var priceestimate =  12500 * 300
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-3.0" & mb == "3d-modelling" & sh == "400") {
        var priceestimate =  12500 * 400
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-3.0" & mb == "3d-modelling" & sh == "500") {
        var priceestimate =  12500 * 500
        document.getElementById('res').innerHTML = priceestimate;
    }

     // program for Mapping-4.0" & mb == "simple-aerial-surveys" & sh == ""
     if (asm == "Mapping-4.0" & mb == "simple-aerial-surveys" & sh == "10") {
        var priceestimate =  4500 * 10
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-4.0" & mb == "simple-aerial-surveys" & sh == "30") {
        var priceestimate =  4500 * 30
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-4.0" & mb == "simple-aerial-surveys" & sh == "50") {
        var priceestimate =  4500 * 50
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-4.0" & mb == "simple-aerial-surveys" & sh == "100") {
        var priceestimate =  4500 * 100
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-4.0" & mb == "simple-aerial-surveys" & sh == "200") {
        var priceestimate =  4500 * 200
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-4.0" & mb == "simple-aerial-surveys" & sh == "300") {
        var priceestimate =  4500 * 300
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-4.0" & mb == "simple-aerial-surveys" & sh == "400") {
        var priceestimate = 4500 * 400
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-4.0" & mb == "simple-aerial-surveys" & sh == "500") {
        var priceestimate =  4500 * 500
        document.getElementById('res').innerHTML = priceestimate;
    }

    // program for Mapping-4.0" & mb == "basic-aerial-surveys" & sh == ""
    if (asm == "Mapping-4.0" & mb == "basic-aerial-surveys" & sh == "10") {
        var priceestimate =  6000 * 10
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-4.0" & mb == "basic-aerial-surveys" & sh == "30") {
        var priceestimate =  6000 * 30
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-4.0" & mb == "basic-aerial-surveys" & sh == "50") {
        var priceestimate =  6000 * 50
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-4.0" & mb == "basic-aerial-surveys" & sh == "100") {
        var priceestimate =  6000 * 100
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-4.0" & mb == "basic-aerial-surveys" & sh == "200") {
        var priceestimate =  6000 * 200
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-4.0" & mb == "basic-aerial-surveys" & sh == "300") {
        var priceestimate =  6000 * 300
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-4.0" & mb == "basic-aerial-surveys" & sh == "400") {
        var priceestimate = 6000 * 400
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-4.0" & mb == "basic-aerial-surveys" & sh == "500") {
        var priceestimate =  6000 * 500
        document.getElementById('res').innerHTML = priceestimate;
    }

// program for Mapping-3.0" & mb == "detailed-aerial-surveys" & sh == ""
    if (asm == "Mapping-4.0" & mb == "detailed-aerial-surveys" & sh == "10") {
        var priceestimate =  7500 * 10
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-4.0" & mb == "detailed-aerial-surveys" & sh == "30") {
        var priceestimate =  7500 * 30
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-4.0" & mb == "detailed-aerial-surveys" & sh == "50") {
        var priceestimate =  7500 * 50
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-4.0" & mb == "detailed-aerial-surveys" & sh == "100") {
        var priceestimate =  7500 * 100
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-4.0" & mb == "detailed-aerial-surveys" & sh == "200") {
        var priceestimate =  7500 * 200
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-4.0" & mb == "detailed-aerial-surveys" & sh == "300") {
        var priceestimate =  7500 * 300
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-4.0" & mb == "detailed-aerial-surveys" & sh == "400") {
        var priceestimate = 7500 * 400
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-4.0" & mb == "detailed-aerial-surveys" & sh == "500") {
        var priceestimate =  7500 * 500
        document.getElementById('res').innerHTML = priceestimate;
    }

// program for Mapping-4.0" & mb == "kartgis-geospatial-solution-ultra" & sh == ""
     if (asm == "Mapping-4.0" & mb == "kartgis-geospatial-solution-ultra" & sh == "10") {
        var priceestimate =  10500 * 10
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-4.0" & mb == "kartgis-geospatial-solution-ultra" & sh == "30") {
        var priceestimate =  10500 * 30
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-4.0" & mb == "kartgis-geospatial-solution-ultra" & sh == "50") {
        var priceestimate =  10500 * 50
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-4.0" & mb == "kartgis-geospatial-solution-ultra" & sh == "100") {
        var priceestimate =  10500 * 100
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-4.0" & mb == "kartgis-geospatial-solution-ultra" & sh == "200") {
        var priceestimate =  10500 * 200
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-4.0" & mb == "kartgis-geospatial-solution-ultra" & sh == "300") {
        var priceestimate =  10500 * 300
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-4.0" & mb == "kartgis-geospatial-solution-ultra" & sh == "400") {
        var priceestimate = 10500 * 400
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-4.0" & mb == "kartgis-geospatial-solution-ultra" & sh == "500") {
        var priceestimate =  10500 * 500
        document.getElementById('res').innerHTML = priceestimate;
    }

    // program for Mapping 4.0" & mb == "3d-modelling" & sh == ""
    if (asm == "Mapping-4.0" & mb == "3d-modelling" & sh == "10") {
        var priceestimate =  15000 * 10
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-4.0" & mb == "3d-modelling" & sh == "30") {
        var priceestimate =  15000 * 30
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-4.0" & mb == "3d-modelling" & sh == "50") {
        var priceestimate =  15000 * 50
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-4.0" & mb == "3d-modelling" & sh == "100") {
        var priceestimate =  15000 * 100
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-4.0" & mb == "3d-modelling" & sh == "200") {
        var priceestimate =  15000 * 200
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-4.0" & mb == "3d-modelling" & sh == "300") {
        var priceestimate =  15000 * 300
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-4.0" & mb == "3d-modelling" & sh == "400") {
        var priceestimate =  15000 * 400
        document.getElementById('res').innerHTML = priceestimate;
    }
    if (asm == "Mapping-4.0" & mb == "3d-modelling" & sh == "500") {
        var priceestimate =  15000 * 500
        document.getElementById('res').innerHTML = priceestimate;
    }


}

