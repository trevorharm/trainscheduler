$(document).ready(function () {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBAXshv8ceAViq21NjC7uNaubYH_fHnfkU",
        authDomain: "myawesometrainscheduler.firebaseapp.com",
        databaseURL: "https://myawesometrainscheduler.firebaseio.com",
        projectId: "myawesometrainscheduler",
        storageBucket: "myawesometrainscheduler.appspot.com",
        messagingSenderId: "588181795224"
      };
      
    firebase.initializeApp(config);

    var database = firebase.database();

    // add event listener to "submit" button
    $("#add-train").on("click", function (event) {
        event.preventDefault();
        // grab user inputs and store in variables
        var name = $("#name-input").val().trim();
        var destination = $("#destination-input").val().trim();
        var time = moment($("#time-input").val().trim(), "DD/MM/YY").format("X");
        var frequency = $("#frequency-input").val().trim();

        // validate no empty input
        // if ($("#name-input").val() == "")
        // else ($("#destination-input").val() == "")
        // else if($("#time-input").val() == "")
        // else if($("#frequency-input").val() == "") {
        //     alert("Inputs can not be left blank");

        // Create variable to hold new train object
        var newTrain = {
            name: name,
            destination: destination,
            time: time,
            frequency: frequency,
        };

        // Code for the push to Firebase
        database.ref().push(newTrain);

            // clear input boxes
            $("#name-input").val("");
            $("#destination-input").val("");
            $("#time-input").val("");
            $("#frequency-input").val("");
    });
    database.ref().on("child_added", function(childSnapshot, prevChildKey) {

        console.log(childSnapshot.val());
      
        // Store everything into a variable.
        var trainName = childSnapshot.val().name;
        var trainDestination = childSnapshot.val().destination;
        var trainStart = childSnapshot.val().time;
        var trainFrequency = childSnapshot.val().frquency;
      
        // Employee Info
        console.log(empName);
        console.log(empRole);
        console.log(empStart);
        console.log(empRate);
      
        // Prettify the employee start
        var empStartPretty = moment.unix(empStart).format("MM/DD/YY");
      
        // Calculate the months worked using hardcore math
        // To calculate the months worked
        var empMonths = moment().diff(moment.unix(empStart, "X"), "months");
        console.log(empMonths);
      
        // Calculate the total billed rate
        var empBilled = empMonths * empRate;
        console.log(empBilled);
      
        // Add each train's data into the table
        $("#employee-table > tbody").append("<tr><td>" + empName + "</td><td>" + empRole + "</td><td>" +
        empStartPretty + "</td><td>" + empMonths + "</td><td>" + empRate + "</td><td>" + empBilled + "</td></tr>");
    });

};