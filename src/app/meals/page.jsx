import MealsSearchInput from "./components/MealsSearchInput";

export default async function MealsPage({ searchParams }) {
  const query = await searchParams;

  const fetchMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`
      );
      const data = await res.json();
      console.log(data);
      // setMeals(data?.meals || []);
      return data.meals;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  const meals = await fetchMeals();
  return (
    <>
      <div className="">
        <MealsSearchInput />
      </div>
      <div>
        {meals?.map((singleMeal) => {
          return (
            <div key={singleMeal.idMeal} className="">
              <p>{singleMeal?.strMeal}</p>
              <p>{singleMeal?.strInstructions}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
