/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import SERVER_LINK, { formatedDate } from "../partials/functions";
import { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";

export default function ListReservationPage() {
 const [reservation, setReservation] = useState([]);

const getData = () => {
  axios
    .get(`${SERVER_LINK}/reservation`)
    .then((res) => setReservation(res.data.data))
    .catch((err) => console.log(err));
};

useEffect(() => {getData()}, []);


  const cancelReservation = (id) => {
    swal({
      title: "Are you sure?",
      text: "You wannna cancel this reservation",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {

       if(willDelete){
        axios
        .delete(`${SERVER_LINK}/reservation/${id}`)
        .then((res) => {
          getData();
          swal("This reservation was cancling", {
            icon: "success",
          });
        })
        .catch((err) => console.log(err));
       }else {
        swal("Reservation not cancling !");
       }
      
    });
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-24">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-center text-gray-700 uppercase bg-gray-50  dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 text-start">
              Client name
            </th>
            <th scope="col" className="px-6 py-3 ">
              Chambre numero
            </th>
            <th scope="col" className="px-6 py-3 ">
              date de deubt
            </th>
            <th scope="col" className="px-6 py-3 ">
              date de fin
            </th>
          </tr>
        </thead>
        <tbody>
          {reservation?.length > 0 ? (
            reservation.map((item, index) => (
              <tr
                key={index}
                className="odd:bg-white text-center even:bg-gray-50 text-black border-b"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  text-start  whitespace-nowrap "
                >
                  {item.client}
                </th>
                <td className="px-6 py-4 ">{item.numero.numero}</td>
                <td className="px-6 py-4">{formatedDate(item.debut)}</td>
                <td className="px-6 py-4">{formatedDate(item.fin)}</td>
                <td className="px-6 py-4 flex justify-around">
                  {/* <button onClick={()=> updateReservation(item._id)}>Update</button> */}
                  <button onClick={() => cancelReservation(item._id)}>
                    Cancel
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr className="text-lg text-center">
              <td colSpan="4">No reservation found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
