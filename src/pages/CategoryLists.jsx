import React from "react";
import { Link } from "react-router-dom";

export default function CategoryLists(props) {
  const { strMeal, strMealThumb, idMeal } = props;
  return (
    <div className="card" id={idMeal}>
      <div className="card-image">
        <img src={strMealThumb} alt={strMeal} />
        <a className="btn-floating halfway-fab waves-effect waves-light red">
          <i className="material-icons">add</i>
        </a>
      </div>
      <div className="card-content">
        <span className="card-title">{strMeal}</span>
      </div>
      <div className="card-action">
        <Link to={`/meal/${idMeal}`} className="btn">
          Watch Recipe
        </Link>
      </div>
    </div>
  );
}
