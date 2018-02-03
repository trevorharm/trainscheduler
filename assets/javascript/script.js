$(document).ready(function () {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBAXshv8ceAViq21NjC7uNaubYH_fHnfkU",
        authDomain: "myawesometrainscheduler.firebaseapp.com",
        databaseURL: "https://myawesometrainscheduler.firebaseio.com",
        projectId: "myawesometrainscheduler",
        storageBucket: "",
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

    });



};