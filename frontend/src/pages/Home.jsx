import React, { useEffect, useState } from "react";
import Pipe from "../panels/Pipe";
import Fluid from "../panels/Fluid";
import Calculation from "../panels/Calculation";

const data = [
  {
    pipe_size: "1/8",
    outside_diameter: 0.405,
    schedules: ["10S", "40ST, 40S", "80XS, 80S"],
    wall_thickness: [0.049, 0.068, 0.095],
    inside_diamater: [0.0307, 0.269, 0.215],
    metal: [0.055, 0.072, 0.093],
    flow: [0.00051, 0.0004, 0.00025],
    outside: [0.106, 0.106, 0.106],
    inside: [0.0804, 0.0705, 0.0563],
    gal: [0.231, 0.179, 0.113],
    water: [115.5, 89.5, 56.5],
    weight: [0.19, 0.24, 0.31],
  },
];

function Home() {
  const [panel, setPanel] = useState("pipe");
  const [values, setValues] = useState({});
  const [length, setLength] = useState(0);
  const [roughness, setRoughness] = useState(0);
  const [substance, setSubstance] = useState({});
  const [answer, setAnswer] = useState({});
  
  useEffect(() => {
    console.log(values);
    console.log(length);
    console.log(roughness);
    console.log(substance);
  }, [values, length, roughness, substance]);

  return (
    <div className="w-full bg-slate-400 flex flex-col">
      <div className="flex gap-5">
        <h1
          className="cursor-pointer"
          onClick={() => {
            setPanel("pipe");
          }}
        >
          PIPE
        </h1>
        <h1
          className="cursor-pointer"
          onClick={() => {
            setPanel("fluid");
          }}
        >
          Fluid Data
        </h1>
        <h1
          className="cursor-pointer"
          onClick={() => {
            setPanel("calc");
          }}
        >
          Calculation
        </h1>
        <h1
          className="cursor-pointer"
          onClick={() => {
            setPanel("calc");
          }}
        >
          Results
        </h1>
      </div>
      {panel === "pipe" && (
        <Pipe
          setValues={setValues}
          setLength={setLength}
          setRoughness={setRoughness}
        />
      )}
      {panel === "fluid" && <Fluid setSubstance={setSubstance} />}
      {panel === "calc" && (
        <Calculation
          values={values}
          length={length}
          roughness={roughness}
          substance={substance}
        />
      )}
    </div>
  );
}

export default Home;
