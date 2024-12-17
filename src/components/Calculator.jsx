import React, { useState } from "react";

function Calculator() {
  // Estado que controla si el checkbox de Repayment está seleccionado
  const [isRepayment, setIsRepayment] = useState(false);

  // Función para manejar clics y cambios en el checkbox “Repayment”
  const toggleRepayment = () => {
    setIsRepayment((prev) => !prev);
  };

  return (
    <section className="flex flex-col p-2">
      <div className="bg-white p-4">
        <div className="flex flex-col gap-2 mb-5">
          <h1 className="font-bold text-2xl text-slate-900">
            Mortgage Calculator
          </h1>
          <a className="underline text-slate-500 " href="#">
            Clear All
          </a>
        </div>

        <form className="">
          {/* Mortgage Amount */}
          <div className="flex flex-col gap-2 mb-6">
            <label className="text-slate-700 font-medium">Mortgage Amount</label>
            <div className="relative flex items-center">
              <span className="absolute left-0 rounded-l-md font-bold text-gray-500 text-lg pointer-events-none bg-slate-200 px-4 flex items-center h-full">
                £
              </span>
              <input
                id="mortgage"
                type="text"
                defaultValue="300,000"
                className="pl-14 pr-4 py-2 border-2 border-gray-400 rounded-md overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 font-semibold text-lg w-full z-10"
              />
            </div>
          </div>

          {/* Mortgage Term */}
          <div className="mb-6">
            <label className="text-slate-700 font-medium">Mortgage Term</label>
            <div className="relative flex items-center">
              <span className="absolute right-0 rounded-l-md font-bold text-gray-500 text-lg pointer-events-none bg-slate-200 h-full px-4 flex items-center">
                years
              </span>
              <input
                id="mortgage"
                type="text"
                defaultValue="25"
                className="pl-4 pr-4 py-2 border-2 border-gray-400 rounded-md overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 font-semibold text-lg w-full z-10"
              />
            </div>
          </div>

          {/* Interest Rate */}
          <div className="mb-6">
            <label className="text-slate-700 font-medium">Interest Rate</label>
            <div className="relative flex items-center">
              <span className="absolute right-0 rounded-l-md font-bold text-gray-500 text-lg pointer-events-none bg-slate-200 h-full px-4 flex items-center">
                %
              </span>
              <input
                id="mortgage"
                type="text"
                defaultValue="25"
                className="pl-4 pr-4 py-2 border-2 border-gray-400 rounded-md overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 font-semibold text-lg w-full z-10"
              />
            </div>
          </div>

          {/* Mortgage Type */}
          <div className="flex flex-col gap-2">
            <label className="text-slate-700 font-medium">Mortgage Type</label>

            {/* Contenedor ‘Repayment’ */}
            <div
              className={
                "flex items-center gap-2 px-4 py-3 border-2 rounded-md font-bold cursor-pointer text-slate-900 " +
                (isRepayment ? "bg-lime-lighter border-lime" : "border-slate-400")
              }
              onClick={toggleRepayment}
            >
              <input
                type="checkbox"
                id="repayment-checkbox"
                name="repayment-checkbox"
                className={`
    w-5 h-5 border-2 rounded-full cursor-pointer appearance-none
    border-gray-500            /* Borde por defecto */
    checked:bg-lime       /* Fondo lima al hacer check */
  `}
                checked={isRepayment}
                onChange={toggleRepayment}
              />

              <label htmlFor="repayment-checkbox" className="cursor-pointer">
                Repayment
              </label>
            </div>

            {/* Interest Only */}
            <div
              className={
                "flex items-center gap-2 px-4 py-3 border-2 rounded-md font-bold cursor-pointer text-slate-900 " +
                (isRepayment ? "bg-lime-lighter border-lime" : "border-slate-400")
              }
              onClick={toggleRepayment}
            >
              <input
                type="checkbox"
                id="repayment-checkbox"
                name="repayment-checkbox"
                className={`
    w-5 h-5 border-2 rounded-full cursor-pointer appearance-none
    border-gray-500            /* Borde por defecto */
    checked:bg-lime       /* Fondo lima al hacer check */
  `}
                checked={isRepayment}
                onChange={toggleRepayment}
              />

              <label htmlFor="repayment-checkbox" className="cursor-pointer">
              Interest Only
              </label>
            </div>
          </div>

          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600">
            Calculate Repayment
          </button>
        </form>
      </div>

      {/* Results Section */}
      <div className="mt-4 p-4">
        <img src="" alt="" />
        <h2 className="text-xl font-bold">Result Shown Here</h2>
        <p>
          Complete the form and click "Calculate Repayment" to see what your
          monthly repayments would be.
        </p>
      </div>
    </section>
  );
}

export default Calculator;
