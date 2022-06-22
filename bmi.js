function myBMI() {

 let height, weight, BMI, status;
  height = document.getElementById("height").value;
  weight = document.getElementById("weight").value;
  BMI = weight / (Math.pow(height,2));
  status = "";

  if (BMI < 16) {
    status = "Gầy độ III";
  } else if (BMI >= 16 && BMI < 17) {
    status = "Gầy độ II";
  } else if (BMI >= 17 && BMI < 18.5) {
    status = "Gầy độ I";
  } else if (BMI >= 18.5 && BMI < 25) {
    status = "Bình thường";
  } else if (BMI >= 25 && BMI < 30) {
    status = "Thừa cân";
  } else if (BMI >= 30 && BMI < 35) {
    status = "Béo phì độ 1";
  } else if (BMI >= 35 && BMI < 40) {
    status = "Béo phì độ 2";
  } else if (BMI >= 40) {
    status = "Béo phì độ 3";
  }

  document.getElementById("result").innerHTML = status;

}

function check() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let bmi = weight / (Math.pow(height,2));
  let result = "";
  console.log(bmi);

  if ( bmi < 16) {
      result = "gay cap do 3";
  } else if(bmi < 17) {
      result = "gay cap do 2";
  } else if (bmi < 18.5) {
      result = "gay cap do 1";
  } else {
      result = "Beo phi";
  }
document.getElementById("result").innerHTML = result;
  
}