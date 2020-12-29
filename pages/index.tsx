import Head from "next/head";

import { LogoFullHumanLetter } from "./../components/LogoFullHumanLetter";
import { Sidebar } from "../components/Sidebar";

export default function Home() {
  return (
    <div className="grid grid-cols-12 h-screen w-screen">
      <Sidebar />
      <div className="col-span-10 px-24 pt-12">
        <h1 className="text-5xl leading-tight w-3/5">
          Meet Alina, Full Human Design System
        </h1>
        <p className="text-xl leading-tight w-3/5 mt-4">
          Spectrum provides components and tools to help product teams work more
          efficiently, and to make Adobe’s applications more cohesive.
        </p>
        <div className="my-12">
          <img
            className=" rounded object-fit"
            src="https://spectrum.adobe.com/static/images/spectrum_illustration_desktop@2x_6NmmXXCcRJFEA27mTCzU9V_1571022712000.png"
          />
        </div>

        <div className="flex flex-row -mx-2 mb-32">
          <div className="flex md:-mx-2 flex-col md:flex-row">
            <div className="md:w-1/3 mb-12 md:mb-0 px-6 md:px-2 flex flex-col">
              <h3 className="uppercase tracking-wide mt-5">Principles</h3>
              <p className="opacity-75 mt-5">
                Get to know our foundational thinking and how we put it into
                action across our design system.
              </p>
            </div>
            <div className="md:w-1/3 mb-12 md:mb-0 px-6 md:px-2 flex flex-col">
              <h3 className="uppercase tracking-wide mt-5">Resources</h3>
              <p className="opacity-75 mt-5">
                Download resources to help you design faster and with more
                precision.
              </p>
            </div>
            <div className="md:w-1/3 mb-12 md:mb-0 px-6 md:px-2 flex flex-col">
              <h3 className="uppercase tracking-wide mt-5">Implementations</h3>
              <p className="opacity-75 mt-5">
                Use our open-source implementations, in partnership with the
                detailed usage guidelines here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
