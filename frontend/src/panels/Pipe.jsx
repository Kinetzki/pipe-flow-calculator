import React, { useEffect, useState } from "react";
import axios from "axios";

const data = [
  {
    pipe_size: "1/8",
    outside_diameter: 0.405,
    schedules: ["10S", "40ST, 40S", "80XS, 80S"],
    wall_thickness: [0.049, 0.068, 0.095],
    inside_diameter: [0.0307, 0.269, 0.215],
    metal: [0.055, 0.072, 0.093],
    flow: [0.00051, 0.0004, 0.00025],
    outside: [0.106, 0.106, 0.106],
    inside: [0.0804, 0.0705, 0.0563],
    gal: [0.231, 0.179, 0.113],
    water: [115.5, 89.5, 56.5],
    weight: [0.19, 0.24, 0.31],
  },
];

function Pipe({ setValues, setLength, setRoughness }) {
  const [schedule, setSchedule] = useState("");
  const [nominal, setNominal] = useState("");
  const [rendered, setRendered] = useState(data);
  const [index, setIndex] = useState(0);

//   const getPipe = async () => {
//     try {
//       const response = await axios.get("http://127.0.0.1:5000/pipe");
//       console.log(response);
//       setData(response.data)
//     } catch (err) {}
//   };

//   useEffect(() => {
//     getPipe();
//   }, []);

  useEffect(() => {
    console.log(rendered);
    if (rendered.length === 1) {
      setIndex(rendered[0].schedules.indexOf(schedule));
    } else {
      setIndex(-1);
    }
  }, [rendered]);

  useEffect(() => {
    console.log(index);
    if (index !== -1) {
      setValues((prev) => ({
        ...prev,
        wall_thickness: rendered[0].wall_thickness[index],
        inside_diameter: rendered[0].inside_diameter[index],
        metal: rendered[0].metal[index],
        flow: rendered[0].flow[index],
        outside: rendered[0].outside[index],
        inside: rendered[0].inside[index],
        gal: rendered[0].gal[index],
        water: rendered[0].water[index],
        weight: rendered[0].weight[index],
      }));
    }
  }, [index]);

  useEffect(() => {
    console.log(schedule);
    console.log(nominal);
    if (schedule || nominal) {
      setRendered(
        data.filter(
          (el) => el.schedules.includes(schedule) && el.pipe_size === nominal
        )
      );
    } else if (schedule === "" && nominal === "") {
      setRendered(data);
    }
  }, [schedule, nominal]);

  return (
    <div className="w-full flex flex-col gap-5 px-10">
      <div className="w-full flex flex-col gap-5 p-8">
        <h1>
          Material Type: <span>Steel Pipe</span>
        </h1>

        <h1 className="w-[300px] flex items-center gap-5">
          Length:{" "}
          <span>
            <input
              type="text"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
          </span>
        </h1>

        <h1 className="w-[300px] flex items-center gap-5">
          Roughness:{" "}
          <span>
            <input
              type="text"
              onChange={(e) => {
                setRoughness(parseFloat(e.target.value) / 39.37);
              }}
            />
          </span>
        </h1>
      </div>
      <div>
        <h1 className="flex items-center gap-3">
          Search:{" "}
          <span>
            Nominal
            <span>
              <input
                type="text"
                onChange={(e) => {
                  setNominal(e.target.value);
                }}
              />
            </span>
          </span>{" "}
          <span>
            Schedule
            <span>
              <input
                type="text"
                onChange={(e) => {
                  setSchedule(e.target.value.toUpperCase());
                }}
              />
            </span>
          </span>{" "}
        </h1>
      </div>
      <div className="flex flex-col h-[550px]">
        <div className="w-full bg-slate-600 flex px-1 gap-2 justify-around">
          <h1 className="w-[8.33%] text-center">Nominal Pipe Size</h1>
          <h1 className="w-[8.33%] text-center">Outside Diameter</h1>
        </div>
        <div className="bg-white w-full h-[500px] overflow-y-auto">
          {rendered.map((item) => {
            return (
              <div className="flex gap-5 w-full justify-around border-b-[1px] border-slate-200 items-center px-3">
                <h1 className="w-[8.33%]">{item.pipe_size}</h1>
                <h1 className="w-[8.33%]">{item.outside_diameter}</h1>
                <div className="w-[8.33%]">
                  {item.schedules.map((sched) => {
                    return <h1>{sched}</h1>;
                  })}
                </div>
                <div className="w-[8.33%]">
                  {item.wall_thickness.map((sched) => {
                    return <h1>{sched}</h1>;
                  })}
                </div>
                <div className="w-[8.33%]">
                  {item.inside_diameter.map((sched) => {
                    return <h1>{sched}</h1>;
                  })}
                </div>
                <div className="w-[8.33%]">
                  {item.metal.map((sched) => {
                    return <h1>{sched}</h1>;
                  })}
                </div>
                <div className="w-[8.33%]">
                  {item.flow.map((sched) => {
                    return <h1>{sched}</h1>;
                  })}
                </div>
                <div className="w-[8.33%]">
                  {item.outside.map((sched) => {
                    return <h1>{sched}</h1>;
                  })}
                </div>
                <div className="w-[8.33%]">
                  {item.inside.map((sched) => {
                    return <h1>{sched}</h1>;
                  })}
                </div>
                <div className="w-[8.33%]">
                  {item.gal.map((sched) => {
                    return <h1>{sched}</h1>;
                  })}
                </div>
                <div className="w-[8.33%]">
                  {item.water.map((sched) => {
                    return <h1>{sched}</h1>;
                  })}
                </div>
                <div className="w-[8.33%]">
                  {item.weight.map((sched) => {
                    return <h1>{sched}</h1>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Pipe;
