import React, { useEffect, useState } from "react";


import "./Home.css";
const Home = () => {
  const [services, setService] = useState([]);

  useEffect(() => {
    fetch("./sevices.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  

  return (
    <div>
      <div className="banner">
        <center>
          <h1>Learn English from the best</h1>
          <small>We only provide teachers from the most qualifed instituions</small>
        </center>
      </div>
      <div className="row ">
        {services.slice(0, 4).map((service) => (
          <div className="col-md-6">
            <div className="div-container shadow p-3 mb-5 bg-body rounded ">
            
              <img src={service.pic} alt="" />
              <br />
              <small>{service.course}</small>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
