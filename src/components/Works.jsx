import React, { useEffect, useState } from "react";
import { projectsNav, Data } from "./WorkData";
import Workitems from "./Workitems";

const Works = () => {
  const [item, setitem] = useState({ name: "All" });
  const [project, setproject] = useState([]);
  const [active, setactive] = useState(0);

  useEffect(() => {
    if (item.name === "All") {
      setproject(Data);
    } else {
      const newprojects = Data.filter((project) => project.category === item.name);
      setproject(newprojects);
    }
  }, [item]);

  const handleclick = (e, index) => {
    setitem({ name: e.target.textContent });
    setactive(index); 
  };

  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((item, index) => (
          <span
            onClick={(e) => handleclick(e, index)}
            className={`${active === index ? "active-work" : ""} work__item`} 
            key={index}
          >
            {item.name}
          </span>
        ))}
      </div>
      <div className="work__container container grid">
        {project.map((item) => (
          <Workitems item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Works;
