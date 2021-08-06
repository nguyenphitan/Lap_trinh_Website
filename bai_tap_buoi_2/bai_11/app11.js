/*
    bài 11:
    Write a script to calculate the BMI (Body Mass Index) of a person, the formula is as follows

    BMI (Body Mass Index):
    BMI = mass (kg) / (height(m) x height(m))
    Note: you must do the conversion from cm to m before calculation

    And then based on the calculated BMI, tell them that they are:
    Severely underweight if BMI < 16
    Underweight if BMI is between 16 and 18.5
    Normal if BMI is between 18.5 and 25 
    Overweight if BMI is between 25 and 30
    Obese if BMI is more than 30
*/
let height = Number(prompt('Nhập chiều cao: (cm)'));
let weight = Number(prompt('Nhập vào cân nặng: (kg)'));
height /= 100;
let bmi = weight / ( height * height );
if( bmi < 16 )  alert('Thiếu cân nghiêm trọng');
else if( bmi < 18.5 )   alert('Thiếu cân');
else if( bmi < 25 ) alert('Bình thường');
else if( bmi < 30 ) alert('Thừa cân');
else alert('Béo phì');