function Search({
  currentDate,
  setCurrentDate,
  selectedValue,
  setSelectedValue,
  handleChange,
  selectedValue2,
  setSelectedValue2,
  handleChange2,
}: {
  currentDate: string;
  setCurrentDate: any;
  selectedValue: string;
  setSelectedValue: any;
  handleChange: any;
  selectedValue2: string;
  setSelectedValue2: any;
  handleChange2: any;
}) {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex justify-center align-middle p-5">
        <button className="border border-gray-800 p-1">Round Trip</button>{" "}
        <button className="border border-gray-800 p-1 bg-blue-900 text-white">
          One Way
        </button>
        <button className="border border-gray-800 p-1">Multi City</button>
      </div>
      {/* 2nd search */}
      <hr className="border-blue-200" />
      <hr className="border-blue-200 mb-3" />
      <div className="flex flex-wrap gap-x-4 gap-y-2">
        <div className="relative">
          <select
            value={selectedValue2}
            onChange={handleChange2}
            className="border border-gray-800 w-32 p-2 appearance-none bg-white"
          >
            <option value="">LHR</option>
            <option value="asdf">FSD</option>
            <option value="asdfasdf">CFS</option>
            <option value="asdfasf">LON</option>
            <option value="asdfsd">PTN</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="w-4 h-4 fill-current text-gray-700"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.707 13.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 11.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="relative">
          <select
            value={selectedValue}
            onChange={handleChange}
            className="border border-gray-800 w-32 p-2 appearance-none bg-blue-50"
          >
            <option value="">CDG</option>
            <option value="asdf">DSF</option>
            <option value="asdfasdf">PRD</option>
            <option value="asdfasf">SDF</option>
            <option value="asdfsd">TDF</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="w-4 h-4 fill-current text-gray-700"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.707 13.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 11.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>{" "}
        <input
          type="date"
          className="border border-gray-800 w-40 p-2 bg-blue-50"
          value={currentDate}
          onChange={(e) => setCurrentDate(e.target.value)}
        />
        <div className="relative">
          <select
            onChange={() => {}}
            className="border border-gray-800 w-32 p-2 appearance-none bg-white"
            defaultValue={"Day -"}
          >
            <option value="">Day -</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="w-4 h-4 fill-current text-gray-700"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.707 13.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 11.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>{" "}
        <div className="relative">
          <select
            onChange={() => {}}
            className="border border-gray-800 w-32 p-2 appearance-none bg-white"
            defaultValue={"Day +"}
          >
            <option value="">Day +</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="w-4 h-4 fill-current text-gray-700"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.707 13.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 11.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>{" "}
        <div className="relative">
          <select
            onChange={() => {}}
            className="border border-gray-800 w-40 p-2 appearance-none bg-white"
            defaultValue={"Any Time"}
          >
            <option value="">Any Time</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="w-4 h-4 fill-current text-gray-700"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.707 13.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 11.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>{" "}
        <p className="text-2xl ">+</p>
        <div className="relative">
          <select
            onChange={() => {}}
            className="border border-gray-800 w-28 p-2 appearance-none bg-white"
            defaultValue={"ADT"}
          >
            <option value="">ADT</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="w-4 h-4 fill-current text-gray-700"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.707 13.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 11.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>{" "}
        <div className="relative">
          <select
            onChange={() => {}}
            className="border border-gray-800 w-28 p-2 appearance-none bg-white"
            defaultValue={"1"}
          >
            <option value="">1</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="w-4 h-4 fill-current text-gray-700"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.707 13.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 11.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>{" "}
        <p className="text-2xl">+</p>
      </div>

      <hr className="border-blue-200 mt-3" />
      <hr className="border-blue-200" />

      {/* third section */}
      <div className="flex justify-between align-middle mt-2 ">
        <div className="font-bold">
          <input type="checkbox" />{" "}
          <label className="ml-2" htmlFor="">
            Extra Options
          </label>
        </div>
        <div className="font-bold">
          <input type="radio" readOnly />{" "}
          <label className="mx-2" htmlFor="">
            Enviroment
          </label>{" "}
          <input type="radio" checked readOnly />{" "}
          <label className="mx-2" htmlFor="">
            Dummy
          </label>
          <input type="radio" className="ml-1" readOnly />{" "}
          <label className="mx-2" htmlFor="">
            PDT
          </label>
        </div>
        <div className="bg-blue-900 text-white rounded-md">
          <button className="p-2">SEARCH</button>
        </div>
      </div>
      <hr className="border-blue-400 mt-3" />
    </div>
  );
}

export default Search;
