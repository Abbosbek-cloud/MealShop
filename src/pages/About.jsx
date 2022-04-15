import React from "react";
import headerImage from "./images/mealHeader.webp";
import person1 from "./images/person1.webp";
import person2 from "./images/person2.webp";
import person3 from "./images/person3.webp";

const About = () => {
  const imgStyle = {
    width: "100%",
    height: "250px",
    objectFit: "cover",
  };
  return (
    <div className="about">
      <h1>About</h1>
      <div className="row">
        <div className="col s12">
          <div className="card">
            <div className="card-image">
              <img src={headerImage} />
              <span className="card-title grey-text text-darken-4">
                SHOP APPLICATION
              </span>
            </div>
            <div className="card-content">
              <div className="row">
                <div className="col s12 m4 container">
                  <h3>Lorem, ipsum dolor.</h3>
                  <div className="">
                    <p style={{ textAlign: "justify" }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Velit nemo sit voluptatem incidunt ipsam illum maxime
                      asperiores sunt. Ex tempore quod totam, aut unde provident
                      harum. Sit nam reprehenderit blanditiis. Soluta placeat
                      qui at incidunt laudantium id ullam ratione corrupti ea
                      suscipit, sed reprehenderit ducimus, voluptas dolores.
                      Similique delectus quibusdam, tempora vero voluptatem
                      recusandae blanditiis autem, placeat, repellendus odio
                      nam!
                    </p>
                    <button style={{ marginTop: "10px" }} className="btn">
                      More...
                    </button>
                  </div>
                </div>
                <div className="col s12 m4 container">
                  <h3>Lorem, ipsum dolor.</h3>
                  <div className="">
                    <p style={{ textAlign: "justify" }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Velit nemo sit voluptatem incidunt ipsam illum maxime
                      asperiores sunt. Ex tempore quod totam, aut unde provident
                      harum. Sit nam reprehenderit blanditiis. Soluta placeat
                      qui at incidunt laudantium id ullam ratione corrupti ea
                      suscipit, sed reprehenderit ducimus, voluptas dolores.
                      Similique delectus quibusdam, tempora vero voluptatem
                      recusandae blanditiis autem, placeat, repellendus odio
                      nam!
                    </p>
                    <button style={{ marginTop: "10px" }} className="btn">
                      More...
                    </button>
                  </div>
                </div>
                <div className="col s12 m4 container">
                  <h3>Lorem, ipsum dolor.</h3>
                  <div className="">
                    <p style={{ textAlign: "justify" }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Velit nemo sit voluptatem incidunt ipsam illum maxime
                      asperiores sunt. Ex tempore quod totam, aut unde provident
                      harum. Sit nam reprehenderit blanditiis. Soluta placeat
                      qui at incidunt laudantium id ullam ratione corrupti ea
                      suscipit, sed reprehenderit ducimus, voluptas dolores.
                      Similique delectus quibusdam, tempora vero voluptatem
                      recusandae blanditiis autem, placeat, repellendus odio
                      nam!
                    </p>
                    <button style={{ marginTop: "10px" }} className="btn">
                      More...
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="container">
            <h2 style={{ textAlign: "center" }}>Happy clients</h2>
            <p style={{ textAlign: "center" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos at
              perferendis corporis, molestias repellat doloremque inventore
              accusamus. Inventore odit adipisci, laudantium commodi, expedita
              itaque totam tenetur unde repellat voluptatibus accusamus.
            </p>
          </div>
          <div className="col s12 m4 container">
            <div className="card">
              <div className="card-image">
                <img src={person1} style={imgStyle} className="cardImage" />
                <span className="card-title grey-text text-darken-4">
                  Card Title
                </span>
              </div>
              <div className="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
          <div className="col s12 m4 container">
            <div className="card">
              <div className="card-image">
                <img src={person2} style={imgStyle} className="cardImage" />
                <span className="card-title grey-text text-darken-4">
                  Card Title
                </span>
              </div>
              <div className="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
          <div className="col s12 m4 container">
            <div className="card">
              <div className="card-image">
                <img src={person3} style={imgStyle} className="cardImage" />
                <span className="card-title grey-text text-darken-4">
                  Card Title
                </span>
              </div>
              <div className="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
