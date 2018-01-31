$(document).ready(function(){
// add event listener to "submit" button
    $("#add-train").on("click", function (event) {
        event.preventDefault();
// grab user inputs and store in variables
        var name = $("#name-input").val().trim();
        var destination = $("#destination-input").val().trim();
        var time = $("#time-input").val().trim();
        var frequency = $("#frequency-input").val().trim();
    });



};