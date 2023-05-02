const calculateButton = document.getElementById("calculate-button");

calculateButton.addEventListener("click", function() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const age = parseFloat(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const activityLevel = parseFloat(document.getElementById("activity-level").value);

    if (isNaN(weight) || isNaN(height) || isNaN(age) || gender === "" || isNaN(activityLevel)) {
        alert("入力された値が不正です。");
        return;
    }

    let bmr;

    if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === "female") {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const dailyCalorieNeeds = bmr * activityLevel;

    const resultElement = document.getElementById("result");
    resultElement.textContent = `1日の必要カロリー：${dailyCalorieNeeds.toFixed(0)}kcal`;
});
