// Homework_22 

function bmi() {

  let height = +heightInput.value;
  let mass = +massInput.value;
  let bmi = mass / height ** 2;
  if (BMI <= 16.5) { 
      bmi = ('Выраженный дефицит массы тела');
  } 
  else if (BMI > 16.5 && BMI <= 18.5) {
      bmi = ('Недостаточная масса тела');
  }
  else if (BMI > 18.5 && BMI <= 25) {
      bmi = ('Нормальная масса тела');
  }
  else if (BMI > 25 && BMI <= 30) {
      bmi = ('Избыточная масса тела');
  }
  else if (BMI > 30 && BMI <= 35) {
      bmi = ('Ожирение 1 степени');
  }
  else if (BMI > 35 && BMI <= 40) {
      bmi = ('Ожирение 2 степени');
  }
  else if (BMI > 40) {
      bmi = ('Ожирение 3 степени');
  }
  else if(h > 3) 
  { 
      h = h / 100
  }
  yourindex.innerHTML = bmi;   
  
  
  console.log(height);
  }
  
  