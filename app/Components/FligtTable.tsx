type DepartureArrival = {
  iataCode: string;
  at: string;
};

type Segment = {
  departure: DepartureArrival;
  arrival: DepartureArrival;
  marketingCarrier: string;
  carrierCode: string;
  flightNumber: string;
  aircraft: string;
};

type Itinerary = {
  segments: Segment[];
  duration: string;
};

type FlightOffer = {
  itineraries: Itinerary[];
  price: string;
  fareBasis: string[][];
  class: string[][];
  seat: string[][];
};

type Data = {
  flightOffer: FlightOffer[];
  message: string;
  code: string;
};
function FligtTable({ data }: { data: Data }) {
  return (
    <div className="mx-auto  max-w-7xl  text-gray-500">
      <p className="text-black">{data.message}</p>
      <br />
      <div className="overflow-x-auto">
        <table className="table-auto  w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="  px-4 py-2">FLIGHT</th>
              <th className="  px-4 py-2">AIRCRAFT</th>
              <th className="  px-4 py-2">CLASS</th>
              <th className="  px-4 py-2">FARE</th>
              <th className="  px-4 py-2">ROUTE</th>
              <th className="  px-4 py-2">DEPARTURE</th>
              <th className="  px-4 py-2">ARRIVAL</th>
              <th className="  px-4 py-2">DURATION</th>
              <th className="  px-4 py-2">RACE</th>
            </tr>
          </thead>
          <tbody>
            {data.flightOffer.map((flight: FlightOffer, index) => (
              <tr
                key={index}
                className="odd:bg-gray-50  even:bg-gray-100  border-b border-b-red-400"
              >
                <td className=" px-4 py-2">
                  {flight.itineraries[0].segments[0].marketingCarrier}
                  {flight.itineraries[0].segments[0].aircraft}
                  <br />
                  {flight.itineraries[0].segments[1].marketingCarrier}
                  {flight.itineraries[0].segments[1].aircraft} <br />
                  {flight.itineraries[0].segments[2]?.marketingCarrier}
                  {flight.itineraries[0].segments[2]?.aircraft}
                </td>

                <td className=" px-4 py-2">
                  {flight.itineraries[0].segments[0].flightNumber}
                  <br />
                  {flight.itineraries[0].segments[1].flightNumber}
                  <br />
                  {flight.itineraries[0].segments[2]?.flightNumber}
                </td>

                <td className=" px-4 py-2">
                  {flight.class[0][0]}
                  <br />
                  {flight.class[0][1]}
                </td>

                <td className=" px-4 py-2">
                  {flight.fareBasis[0][0]}
                  <br />
                  {flight.fareBasis[0][1]} <br />
                  {flight.fareBasis[0][2]}
                </td>

                <td className=" px-4 py-2">
                  {flight.itineraries[0].segments[0].departure.iataCode}-
                  {flight.itineraries[0].segments[0].arrival.iataCode} <br />
                  {flight.itineraries[0].segments[1].departure.iataCode}-
                  {flight.itineraries[0].segments[1].arrival.iataCode}
                  <br />
                  {flight.itineraries[0].segments[2]?.departure.iataCode &&
                  flight.itineraries[0].segments[2]?.arrival.iataCode ? (
                    <>
                      {flight.itineraries[0].segments[2]?.departure.iataCode} -{" "}
                      {flight.itineraries[0].segments[2]?.arrival.iataCode}
                    </>
                  ) : (
                    <></>
                  )}
                </td>
                <td className=" px-4 py-2">
                  {flight.itineraries[0].segments[0].departure.at} <br />
                  {flight.itineraries[0].segments[1].departure.at}
                  <br />
                  {flight.itineraries[0].segments[2]?.departure.at}
                </td>
                <td className=" px-4 py-2 flex justify-center align-middle gap-16">
                  <div className="">
                    {flight.itineraries[0].segments[0].arrival.at} <br />
                    {flight.itineraries[0].segments[1].arrival.at}
                    <br />
                    {flight.itineraries[0].segments[2]?.arrival.at}
                  </div>
                  <div className="">
                    <div className=" mt-3">---</div>
                    <div className=" ">---</div>
                  </div>
                </td>
                <td className=" px-4 py-2">
                  {flight.itineraries[0].duration} <br />
                  {flight.itineraries[1]?.duration}
                </td>
                <td className=" px-4 py-2">
                  {flight.price}{" "}
                  <div className="bg-blue-900 text-white rounded-md">
                    <button className="p-2 text-base font-light ml-1">
                      SEARCH
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FligtTable;
