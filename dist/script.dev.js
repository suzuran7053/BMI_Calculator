"use strict";

function calculator() {
  var height = $("#height").val();
  var weight = $("#weight").val();
  var rowBmi = weight / (height * height) * 10000;
  var bmi = rowBmi.toFixed(2);
  console.log(bmi);

  if (height == "" || weight == "") {
    alert("You need to fill both filed.");
  } else {
    //$("#lg-result").css("display", "block");
    $(".result").html("<small>Your BMI is </small>" + bmi);
  }
}