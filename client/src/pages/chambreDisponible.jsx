/* eslint-disable no-undef */


export default function ChambreDisponible() {
  const { chambre } = useState([]);





  return (
    <section className="text-gray-600 body-font mt-5">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {chambre.map((chambre, index) => (
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={index}>
         
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={"./chambres/" + chambre?.image}
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
          ))}
        </div>
      </div>
    </section>
  );
}
