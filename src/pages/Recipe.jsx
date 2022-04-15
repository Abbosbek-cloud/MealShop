import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMealById } from "../api";
import { Loader } from "../components/Loader";

export default function Recipe() {
  const [reciept, setReciept] = useState([]);
  const [showRecipe, setShowRecipe] = useState(false);
  const { id } = useParams();
  const goBack = useNavigate();

  const handleRecipeShow = () => {
    setShowRecipe(!showRecipe);
  };

  const handleClick = () => {
    goBack("/");
  };
  useEffect(() => {
    getMealById(id).then((data) => setReciept(data.meals[0]));
  }, []);
  return (
    <>
      <button
        style={{ margin: "10px auto" }}
        className="btn"
        onClick={handleClick}
      >
        Go Back
      </button>
      <div className="reciept">
        {!reciept ? (
          <Loader />
        ) : (
          <div className="reciept">
            <img
              src={reciept.strMealThumb}
              alt={reciept.strMeal}
              style={{ width: "100%" }}
            />
            <h1>{reciept.strMeal}</h1>
            <h6>
              <b>Category:</b> {reciept.strCategory}
            </h6>
            {reciept.strArea ? (
              <h6>
                <b>Area:</b> {reciept.strArea}
              </h6>
            ) : null}
            <p>{reciept.strInstructions}</p>
            <button onClick={handleRecipeShow} className="btn">
              Show Recipe
            </button>
            {showRecipe ? (
              <table className="centred">
                <thead>
                  <tr>
                    <th>Ingredient</th>
                    <th>Measure</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(reciept).map((key) => {
                    if (key.includes("Ingredient") && reciept[key]) {
                      return (
                        <tr key={reciept.idMeal + 1}>
                          <td>{reciept[key]}</td>
                          <td>{reciept[`strMeasure${key.slice(13)}`]}</td>
                        </tr>
                      );
                    }
                  })}
                </tbody>
              </table>
            ) : null}

            {reciept.strYoutube ? (
              <div className="row">
                <h5>Video Recipe</h5>
                <iframe
                  src={`https://www.youtube.com/embed/${reciept.strYoutube.slice(
                    -11
                  )}`}
                  allowFullScreen
                  title={id}
                />
              </div>
            ) : null}
          </div>
        )}
      </div>
    </>
  );
}
