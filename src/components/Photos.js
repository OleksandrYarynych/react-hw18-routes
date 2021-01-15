import React from "react";

import car1 from "../img/cars/car1.jpg";
import car2 from "../img/cars/car2.jpg";
import car3 from "../img/cars/car3.jpg";
import car4 from "../img/cars/car4.jpg";
import car5 from "../img/cars/car5.jpg";
import car6 from "../img/cars/car6.jpg";
import car7 from "../img/cars/car7.jpeg";
import car8 from "../img/cars/car8.jpg";
import car9 from "../img/cars/car9.jpg";

export default function Photos() {
  return (
    <div className="photoBlock">
      <img src={car1} className="img" />
      <img src={car2} className="img" />
      <img src={car3} className="img" />
      <img src={car4} className="img" />
      <img src={car5} className="img" />
      <img src={car6} className="img" />
      <img src={car7} className="img" />
      <img src={car8} className="img" />
      <img src={car9} className="img" />
    </div>
  );
}
