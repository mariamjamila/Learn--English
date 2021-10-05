
import { useEffect, useState } from 'react';
import './Service.css'

const Service = () => {
   const[services, setService]  = useState([]);
   useEffect(()=>{
       fetch('/sevices.json')
       .then(res=>res.json())
       .then(data =>setService(data))
   },[]);
   console.log(services);
    return (
        <div>
            <div className="row">
                
           {
           services.map(service=> 
           <div className="col-md-4">
                         <div className="div-box shadow p-3 mb-5 bg-body rounded">
                         <h2>{service?.course}</h2>
                        <p>Fees:{service.Fees}</p>
                        <p>{service.Description.slice(0,100)}</p>
                        <h4>{service.Hours}</h4>
                         </div>
                        
           </div>
            )    
           }
                
            </div>
           
         
        </div>
    );
};

export default Service;