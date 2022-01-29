// JavaScript training with LuCaS, (c) LuCaS 2022
// IG: @LukasNachtigall/ GitHub: github.com/DeLucasso
// YT: youtube.com/lukasnachtigall
// MIT License - Feel free to use and modify the code
//
// What does this code do?
// Calculates BMI and returns 3 different messages based on the <bmi> variable value

function bmiCalculator (weight, height) {
    var bmi = Math.round(weight / Math.pow(height, 2));
    var interpretation = "";
   
    if (bmi < 18.5) {
        interpretation = "Your BMI is " + bmi + ", so you are underweight."
    }

    else if (bmi >= 18.5 && bmi < 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight."
        
    } else {
        interpretation = "Your BMI is " + bmi + ", so you are overweight."
        
    }
        return interpretation
}

bmiCalculator(90,1.8)
