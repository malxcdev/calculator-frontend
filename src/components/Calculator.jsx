import React from "react";

function Calculator() {
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
          <div className="flex flex-col gap-2 mb-6">
            <label className="text-slate-700 font-medium">
              Mortgage Amount
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-0 rounded-l-md font-bold text-gray-500 text-lg pointer-events-none bg-slate-200 px-4 justify-center items-center flex z-0 h-full">
                £
              </span>
              <input
                id="mortgage"
                type="text"
                value="300,000"
                className="pl-14 pr-4 py-2 border-2 border-gray-400 rounded-md overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 font-semibold text-lg w-full z-10"
              />
            </div>
          </div>
          <div className="">
            <div className="mb-6">
              <label className="text-slate-700 font-medium">Mortgage Term</label>
              <div className="relative flex items-center">
                <span className="absolute right-0 rounded-l-md font-bold text-gray-500 text-lg pointer-events-none bg-slate-200 h-full px-4 justify-center items-center flex z-0">
                  years
                </span>
                <input
                  id="mortgage"
                  type="text"
                  value="25"
                  className="pl-4 pr-4 py-2 border-2 border-gray-400 rounded-md overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 font-semibold text-lg w-full z-10"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="text-slate-700 font-medium">Interest Rate</label>
              <div className="relative flex items-center">
                <span className="absolute right-0 rounded-l-md font-bold text-gray-500 text-lg pointer-events-none bg-slate-200 h-full px-4 justify-center items-center flex z-0">
                  %
                </span>
                <input
                  id="mortgage"
                  type="text"
                  value="25"
                  className="pl-4 pr-4 py-2 border-2 border-gray-400 rounded-md overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 font-semibold text-lg w-full z-10"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-slate-700 font-medium">Mortgage Type</label>
            <div className="flex items-center gap-2 px-4 py-3 border-2 border-slate-400 rounded-md font-bold cursor-pointer text-slate-900" id="repayment-container">
              <input
                type="checkbox"
                id="repayment-checkbox"
                name="repayment-checkbox"
                className="w-5 h-5 border-2 border-gray-500 rounded-full appearance-none cursor-pointer "
                onChange={(e) => {
                  const container = document.getElementById('repayment-container');
                  if (e.target.checked) {
                    container.classList.add('bg-lime', 'border-blue-500');
                  } else {
                    container.classList.remove('bg-lime', 'border-blue-500');
                  }
                }}
              />
              Repayment
            </div>

            <label>
              <input type="checkbox" name="" id="" />
              Interest Only
            </label>
          </div>
          <button>Calculate Repayment</button>
        </form>
      </div>
      <div>
        <img src="" alt="" />
        <h2>Result Shown Here</h2>
        <p>
          Complete the form and click "calculate repayments" to see what your
          monthly repayments would be.
        </p>
      </div>
    </section>
  );
}

export default Calculator;
