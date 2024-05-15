import axios from "axios";
import React, { useEffect, useState } from "react";

function Calculation({ values, length, roughness, substance }) {
  const [area, setArea] = useState(0);
  const [reynolds, setReynolds] = useState(0);
  const [friction, setFriction] = useState(0);
  const [pressureDrop, setPressureDrop] = useState(0);

  useEffect(() => {
    console.log(values);
    console.log(length);
    console.log(roughness);
    console.log(substance);
  }, []);

  const solveFlowRate = async () => {
    const diam = values.inside_diameter / 39.37;
    const radius = diam / 2;
    const area1 = Math.PI * Math.pow(radius, 2);
    console.log(area1);
    setArea(area1);

    const density = substance.density;
    const velocity = substance.velocity;
    const viscosity = substance.viscosity;
    const re = (density * velocity * diam) / viscosity;
    setReynolds(re);

    const data = { re: re, roughness: roughness };
    console.log(data);
    var frict = 0;
    try {
      const response = await axios.post(
        "https://desireeDianne.pythonanywhere.com/friction",
        data
      );
      console.log(response.data);
      frict = response.data;
    } catch (err) {}
    const pressure =
      (frict * length * Math.pow(velocity, 2)) / (2 * 9.81 * diam);
  };

  useEffect(() => {
    solveFlowRate();
  }, []);

  return <div></div>;
}

export default Calculation;
