

import axios from "axios";
import { useEffect, useState } from "react";
import SERVER_LINK from "../partials/functions";
import swal from "sweetalert";


export default function ChambreDisponible() {

  const [chambres, setChambres] = useState([]);


  useEffect(() => {
    axios.get(`${SERVER_LINK}/chambres?dispo=1`)
      .then(res => setChambres(res.data.data))
      // eslint-disable-next-line no-unused-vars
      .catch(err =>  swal("Error", "No chambre disponible", "error"));
  }, []);
  



  return (
    <section className="text-gray-600 body-font mt-5">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          { chambres ? chambres.map((chambre, index) => (
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={index}>
         
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="Hotel chambre"
                  className="object-cover object-center w-full h-full block"
                  src={`./chambres/${chambre?.type}.jpg `}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {chambre?.numero}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {chambre?.type}
                </h2>
                <p className="mt-1">{`${chambre?.prix}`} MAD</p>
              </div>
            </div>
          )):<div className="text-lg text-center text-red-700">No chambre dispo</div>
        }
        </div>
      </div>
    </section>
  );
}
