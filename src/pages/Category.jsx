import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { getFilterCategory } from "../api";
import CategoryLists from "./CategoryLists";

export default function Category() {
  const [meals, setMeals] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    getFilterCategory(name).then((data) => setMeals(data.meals));
  }, [name]);
  return (
    <>
      <h1>{name}</h1>
      <div className="list">
        {meals.map((meal) => (
          <CategoryLists key={meal.idMeal} {...meal} />
        ))}
      </div>
      <Outlet context={meals} />
    </>
  );
}
