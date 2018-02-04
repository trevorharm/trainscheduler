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
        var time = moment($("#time-input").val().trim(), "HH:MM").format("hh:mm");
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

        console.log(newTrain.name);
        console.log(newTrain.destination);
        console.log(newTrain.time);
        console.log(newTrain.frequency);

            // clear input boxes
            $("#name-input").val("");
            $("#destination-input").val("");
            $("#time-input").val("");
            $("#frequency-input").val("");
    });
    database.ref().on("child_added", function(childSnapshot, prevChildKey) {

        console.log(childSnapshot.val());
      
        // Store everything into a variable from Firebase for pushing to HTML
        var trainName = childSnapshot.val().name;
        var trainDestination = childSnapshot.val().destination;
        var trainStart = childSnapshot.val().time;
        var trainFrequency = childSnapshot.val().frquency;
      
        // New Train Info
        console.log(trainName);
        console.log(trainDestination);
        console.log(trainStart);
        console.log(trainFrequency);
      
        // Momentify the train start time
        // var trainStartPretty = moment.unix(trainStart).format("MM/DD/YY");
      
        // Calculate the train frequency using hardcore math
        // To calculate the train frequency
        // var nextArrival = moment().diff(moment.unix(trainStart, "X"), "months");
        // console.log(nextArrival);
      
        // Calculate minute away for the next train
        // var minsAway = empMonths * empRate;
        // console.log(minsAway);
      
        // Add each train's data into the table
        $("#train-schedule > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" +
        trainStartPretty + "</td><td>" + trainFrequency + "</td><td>" + nextArrival + "</td><td>" + minsAway + "</td></tr>");
    });

    });