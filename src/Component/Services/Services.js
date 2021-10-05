import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "../Services/Services.css";
const Services = () => {
  const [services, setService] = useState([]);
  useEffect(() => {
    fetch("./sevices.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div>
      <h2>All About Our Services</h2>
      <div className="row">
        {services.map((service) => (
          
         <div className="col-md-4">
              <div className="service-container">
                <h4>{service.course}</h4>
                <img src={service.pic} alt="" />
              </div>
              
            </div>
         
        ))}
      </div>
    </div>
  );
};

export default Services;
