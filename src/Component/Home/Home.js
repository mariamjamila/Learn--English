
import React, { useEffect, useState } from "react";
import "./Home.css";
const Home = () => {
  const [services, setService] = useState([]);
  useEffect(() => {
    fetch("./sevices.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  console.log(services);
  return (
    <div>
    
      <div className="row">
        {services.slice(0,4).map((service) => (
          <div className="col-md-6">
              <div className="div-container">
              <h2>{service.course} </h2>
            <img src={service.pic} alt="" />
            <h4>Hours:{service.Hours}</h4>
            <h5>Level:{service.level}</h5>
            <button type="button" class="btn btn-warning">Warning</button>
              </div>
             </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
