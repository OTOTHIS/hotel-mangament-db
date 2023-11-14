/* eslint-disable no-unused-vars */
import { useEffect, useRef } from "react";
import swal from "sweetalert";
import axios from "axios";
import SERVER_LINK from "../partials/functions";

export default function AddChambre() {
  const numero = useRef(null);
  const prix = useRef(null);
  const type = useRef(null);

  useEffect(() => {
    axios
      .get(`${SERVER_LINK}/chambres`)
      .then((res) => (numero.current.value = parseInt(res.data.results) + 1))
      .catch((err) => console.log(err));
  }, []);

  const handleClick = () => {
    let formData = {
      numero: parseInt(numero.current.value),
      prix: prix.current.value,
      type: type.current.value,
    };

    axios
      .post(`${SERVER_LINK}/chambres`, formData)
      .then((res) => {
        numero.current.value = parseInt(numero.current.value) + 1;
        prix.current.value = " ";
        type.current.value = "simple";
        swal("Success", "la chambre est bien ajouté", "success");
      })
      .catch((err) => {
        console.log(err);
        swal("Error", "Check les champs is correct ?", "error");
      });
  };

  return (
    <div className="h-full  mt-24 mx-auto w-1/2">
      <form>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
            readOnly
              type="text"
              name="numero"
              id="numero"
              ref={numero}
              className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="numero"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Numero du chambre
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              name="prix"
              id="prix"
              ref={prix}
              className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="prix"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Prix
            </label>
          </div>
        </div>

        <div className="">
          <label htmlFor="type" className="block mb-2 text-sm font-medium">
            Chambre type
          </label>
          <select
            id="type"
            ref={type}
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          >
            <option>simple</option>
            <option>double</option>
            <option>suite</option>
          </select>
        </div>

        <button
          type="button"
          onClick={handleClick}
          className="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
