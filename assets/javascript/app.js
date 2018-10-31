alert("Javascript Connected");

//connection through firebase 

var config = {
    apiKey: "AIzaSyAR5gCPZjBlTIo5EeicqkkrTlQFcG9BeNw",
    authDomain: "bart-8e967.firebaseapp.com",
    databaseURL: "https://bart-8e967.firebaseio.com",
    projectId: "bart-8e967",
    storageBucket: "bart-8e967.appspot.com",
    messagingSenderId: "966723388560"
  };
  firebase.initializeApp(config);

  var stations = firebase.database().ref().set({
    96:"96th Station"
  })


function TrainDisplay() {

    key="QMBB-PSSW-9V6T-DWE9";
    var queryURL = "http://api.bart.gov/api/stn.aspx?cmd=stninfo&orig=12th&key="+key+"&json=y";
    console.log(queryURL);
    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        console.log(response.root.stations.station);
    }
    )};

TrainDisplay();