const getMealData = meal => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`;
    fetch(url)
        .then(res => res.json())
        .then(data => mealName(data.meals));
}
const mealName = (meals) => {
    meals.forEach(meal => {
            const containerMealDiv = document.getElementById('mealDiv');
            console.log(meal.strMeal)
            const mealDivision = document.createElement('div');
            mealDivision.className = 'meal';

            const mealData = `
            <img src="${meal.strMealThumb}" alt="" onclick="itemClick('${meal.strMeal}')">
            <h5>${meal.strMeal}</h5>
            `
            console.log(meal.strMeal)
            mealDivision.innerHTML = mealData;
            containerMealDiv.appendChild(mealDivision);
    });
}

const itemClick = (requestedMeal) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${requestedMeal}`)
        .then(res => res.json())
        .then(data => mealInfo(data.meals));
    const mealInfo = meal => {
        console.log(meal);
        const instructionDiv = document.getElementById('instructionsDiv');
        instructionDiv.className = "single-meal";
        meal.forEach(singleMeal => {
            console.log(singleMeal.strMeal);
            instructionDiv.innerHTML = `
            <img src ="${singleMeal.strMealThumb}">
            <h3>${singleMeal.strMeal}</h3>
            <h5>Ingredients</h5>
            <ul>
            <li>${singleMeal.strMeasure1 + ' ' + singleMeal.strIngredient1}</li>
            <li>${singleMeal.strMeasure2 + ' ' + singleMeal.strIngredient2}</li>
            <li>${singleMeal.strMeasure3 + ' ' + singleMeal.strIngredient3}</li>
            <li>${singleMeal.strMeasure4 + ' ' + singleMeal.strIngredient4}</li>
            <li>${singleMeal.strMeasure5 + ' ' + singleMeal.strIngredient5}</li>
            <li>${singleMeal.strMeasure6 + ' ' + singleMeal.strIngredient6}</li>
            <li>${singleMeal.strMeasure7 + ' ' + singleMeal.strIngredient7}</li>
            <li>${singleMeal.strMeasure8 + ' ' + singleMeal.strIngredient8}</li>
            <li>${singleMeal.strMeasure9 + ' ' + singleMeal.strIngredient9}</li>
            <li>${singleMeal.strMeasure10 + ' ' + singleMeal.strIngredient10}</li>
            </ul>

        `
            instructionDiv.style.display = "block";
            // document.getElementById('mealDiv').style.display = 'none';
        });

    }
}











const searchBtn = document.getElementById('search_button');
searchBtn.addEventListener('click', () => {
    const inputMeal = document.getElementById('meal').value;
    getMealData(inputMeal)
})