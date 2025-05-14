document.getElementById("bmi-form").addEventListener("submit", function(e) {
    // Prevent the form from submitting normally
    e.preventDefault(); 

    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const result = document.getElementById("result");

    if (!weight || !height || weight <= 0 || height <= 0) {
        result.textContent = "Please enter valid positive numbers for weight and height.";
        return;
    }
    const heightInMeters = height / 100; 
    const bmi = weight / (heightInMeters * heightInMeters).toFixed(2);

    if (bmi < 18.5) {
        result.textContent += " You are underweight.";
        result.style.color = "blue";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        result.textContent += " You have a normal weight.";
        result.style.color = "green";
    } else if (bmi >= 25 && bmi < 29.9) {
        result.textContent += " You are overweight.";
        result.style.color = "orange";
    } else {
        result.textContent += " You are obese.";
        result.style.color = "red";
    }

    // Display the result
    result.textContent = `Your BMI is ${bmi.toFixed(2)}.` + result.textContent;

    result.style.display = "block"; 
    result.style.fontSize = "20px"; 
    result.style.fontWeight = "bold"; 
    result.style.marginTop = "20px";
    result.style.padding = "10px";
    result.style.border = "1px solid #ccc";
    result.style.borderRadius = "5px";
    result.style.backgroundColor = "#f9f9f9";
    result.style.transition = "all 0.3s ease-in-out";
    result.style.opacity = "1";
    result.style.transform = "scale(1.05)";
    result.style.transition = "transform 0.2s, opacity 0.2s";

    setTimeout(() => {
        result.style.transform = "scale(1)";
        result.style.opacity = "0.8";
    }, 2000); // Reset the scale and opacity after 2 seconds

}

);