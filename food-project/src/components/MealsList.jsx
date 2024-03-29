import Meal from './Meal';

function MealsList({ meals }) {
  return (
    <div className="list">
      {meals.map((meal) => (
        <Meal key={meal.idMeal} {...meal} />
      ))}
    </div>
  );
}

export default MealsList;
