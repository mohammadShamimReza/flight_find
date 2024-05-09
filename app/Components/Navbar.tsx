import Image from "next/image";
import { IoIosNotificationsOutline } from "react-icons/io";
import manImage from "../asset/man.png";

function Navbar() {
  return (
    <header className="bg-gray-800 text-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8"
        aria-label="Global"
      >
        {/* <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div> */}
        <div className=" lg:flex lg:gap-x-12">
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-x-1 text-sm font-semibold leading-6 "
              aria-expanded="false"
            >
              Dashboard
            </button>

            {/* <!--
          'Dashboard' flyout menu, show/hide based on flyout menu state.

          Entering: "transition ease-out duration-200"
            From: "opacity-0 translate-y-1"
            To: "opacity-100 translate-y-0"
          Leaving: "transition ease-in duration-150"
            From: "opacity-100 translate-y-0"
            To: "opacity-0 translate-y-1"
        --> */}
          </div>

          <a href="#" className="text-sm font-semibold leading-6 ">
            Master Price
          </a>
          <a href="#" className="text-sm font-semibold leading-6 ">
            Custom price
          </a>
          <a href="#" className="text-sm font-semibold leading-6 ">
            Calender
          </a>
          <a href="#" className="text-sm font-semibold leading-6 ">
            Reports
          </a>
        </div>
        <div className=" lg:flex lg:flex-1 lg:justify-end">
          <div className="text-sm font-semibold leading-6  flex  gap-4">
            <div className="mt-2">
              <IoIosNotificationsOutline size={25} />
            </div>
            <Image src={manImage} alt="manimage" className="" />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
