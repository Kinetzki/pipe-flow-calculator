import React, { useEffect, useState } from "react";

const data = [
  {
    name: "Acetic Acid",
    temperature: 25,
    pressure: 0,
    density: 1049,
    viscosity: 1.127,
    vapor_pressure: 1.1584,
    velocity: 37.13,
    state: "liquid",
  },
];

function Fluid({ setSubstance }) {
  const [rendered, setRendered] = useState(data);
  const [substanceInput, setSubstanceInput] = useState("");

  useEffect(() => {
    if (substanceInput) {
      setRendered(
        data.filter((el) => el.name.toLowerCase().includes(substanceInput))
      );
    } else {
      setRendered(data);
    }
  }, [substanceInput]);

  useEffect(() => {
    if (rendered.length === 1) {
      setSubstance(rendered[0]);
    }
  }, [rendered]);

  return (
    <div className="w-full flex flex-col gap-5 px-10">
      <h1 className="flex items-center">
        Substance:{" "}
        <span>
          <input
            type="text"
            onChange={(e) => {
              setSubstanceInput(e.target.value);
            }}
          />
        </span>
      </h1>
      <div className="flex flex-col h-[520px]">
        <div className="w-full bg-slate-600 flex justify-around items-center">
          <h1 className="w-[8.33%] text-center">Name</h1>
          <h1 className="w-[8.33%] text-center">Temperature</h1>
          <h1 className="w-[8.33%] text-center">Pressure</h1>
          <h1 className="w-[8.33%] text-center">Density</h1>
          <h1 className="w-[8.33%] text-center">Viscosity</h1>
          <h1 className="w-[8.33%] text-center">Vapor Pressure</h1>
          <h1 className="w-[8.33%] text-center">Velocity</h1>
          <h1 className="w-[8.33%] text-center">State</h1>
        </div>
        <div className="bg-white w-full h-[500px] overflow-y-auto px-4 py-2">
          {rendered.map((el) => {
            return (
              <div className="w-full flex items-center justify-around border-b-[1px] border-slate-200">
                <h1 className="w-[8.33%] text-center">{el.name}</h1>
                <h1 className="w-[8.33%] text-center">{el.temperature}</h1>
                <h1 className="w-[8.33%] text-center">{el.pressure}</h1>
                <h1 className="w-[8.33%] text-center">{el.density}</h1>
                <h1 className="w-[8.33%] text-center">{el.viscosity}</h1>
                <h1 className="w-[8.33%] text-center">{el.vapor_pressure}</h1>
                <h1 className="w-[8.33%] text-center">{el.velocity}</h1>
                <h1 className="w-[8.33%] text-center">{el.state}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Fluid;
