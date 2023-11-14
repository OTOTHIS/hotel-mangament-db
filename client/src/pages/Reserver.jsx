
import axios from "axios";
import {useRef} from "react";

import swal from "sweetalert";
import SERVER_LINK, { convertDateFormat } from "../partials/functions";

export default function Reserver() {


  const Fullname = useRef(null);
  const numero = useRef(null);
  const debut = useRef(null);
  const fin = useRef(null);

  const clearChamps = () => {
    (Fullname.current.value = ""),
      (numero.current.value = ""),
      (debut.current.value = ""),
      (fin.current.value = "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const chambreNum = numero.current.value;

    axios
      .get(`${SERVER_LINK}/chambres/chambre/${chambreNum}`)
      .then((res) => {
        const mongoo = res?.data?.data?._id;
        let FormData = {
          client: Fullname.current.value,
          numero: mongoo,
          debut: convertDateFormat(debut.current.value),
          fin: convertDateFormat(fin.current.value),
        };

        if(convertDateFormat(fin.current.value) < convertDateFormat(new Date()) ){
          swal("Error", "Invalid fin de la date reservation", "error");
          return false
        }
        axios
          .post(`${SERVER_LINK}/reservation`, FormData)
          // eslint-disable-next-line no-unused-vars
          .then((res) => {
            
            clearChamps();
            swal("Success", "la reservation est bien ajouté", "success");
          })
          .catch((err) => {
       
            swal(
              "Error",
              err?.response.data.error?err.response.data.error:"Cette chambre n'exist pas ",
              "error"
            );
          });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="mt-28 w-full md:w-1/3 px-5 mx-auto   ">
      <form onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b  border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Personal Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Use a permanent address where you can receive mail.
            </p>

            <div className="mt-10 grid grid-cols-1 mx-8 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3 ">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Nom & Prenom
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="Fullname"
                    id="Fullname"
                    ref={Fullname}
                    placeholder="Full name"
                    required
                    className="block px-3 w-full   rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Numero de chambre
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="numero"
                    id="chambreNum"
                    ref={numero}
                    required
                    placeholder=" Numero de chambre"
                    className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />

               
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center mt-5 mx-5 text-center">
              <div className="md:w-full md:mx-8 ">
                <label
                  htmlFor="debut"
                  className="block text-sm w-full font-medium leading-6 text-gray-900"
                >
                  Date du debut
                </label>
                <div className="mt-2">
                  <input
                    type="datetime-local"
                    name="debut"
                    id="debut"
                    ref={debut}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="mt-5 md:w-full md:mx-8 ">
                <label
                  htmlFor="findate"
                  className="block text-sm w-full font-medium leading-6 text-gray-900"
                >
                  Date du Fin
                </label>
                <div className="mt-2">
                  <input
                    type="datetime-local"
                    name="fin"
                    id="findate"
                    ref={fin}
                    required
                    className="block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
