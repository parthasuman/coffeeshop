import React from "react";
import regularcoffee from "../../../assets/menu/reguler-coffee.jpg";
import blackcoffee from "../../../assets/menu/black-coffee.jpg";
import coldcoffee from "../../../assets/menu/cold-coffee.jpg";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="max-w-[1180px] mx-auto my-10">
      <div className="grid grid-cols-3">
        <div className="card w-96 glass">
          <figure>
            <img src={coldcoffee} alt="coffee!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Cold coffee</h2>
            <h3 className="card-title">Price: $15</h3>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Oder Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 glass">
          <figure>
            <img src={regularcoffee} alt="coffee!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Regular coffee</h2>
            <h3 className="card-title">Price: $10</h3>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Oder Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 glass">
          <figure>
            <img src={blackcoffee} alt="coffee!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Black coffee</h2>
            <h3 className="card-title">Price: $10</h3>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Oder Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-10">
        <button className="btn btn-primary">
          <Link to="/menu">See More</Link>
        </button>
      </div>
    </div>
  );
};

export default Menu;
