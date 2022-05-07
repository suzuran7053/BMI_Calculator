function calculator() {
    let height = $("#height").val();
    let weight = $("#weight").val();
    let rowBmi = weight / (height * height) * 10000;
    let bmi = rowBmi.toFixed(2);
  
    if (height == "" || weight == "") {
        alert("You need to fill both fields.")
    } else {
        $(".result").html("<small>Your BMI is </small>" + bmi);
    }
}
