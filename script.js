function calculator() {
    let height = $("#height").val();
    let weight = $("#weight").val();
    let rowBmi = weight / (height * height) * 10000;
    let bmi = rowBmi.toFixed(2);
    console.log(bmi);
    if (height == "" || weight == "") {
        alert("You need to fill both filed.")
    } else {
        //$("#lg-result").css("display", "block");
        $(".result").html("<small>Your BMI is </small>" + bmi);
    }
}