import Head from "next/head";

import { Sidebar } from "../components/Sidebar";

export default function Principles() {
  return (
    <div className="grid grid-cols-12 h-screen w-screen overflow-hidden">

      <Sidebar />
      <div className="col-span-10 px-24 pt-12 h-screen overflow-auto">
        <h1 className="text-5xl leading-tight w-3/5">Principles</h1>
        <p className="text-xl leading-tight w-3/5 mt-4">
          Get to know our foundational thinking and how we put it into action
          across our design system.
        </p>

        <div className="flex flex-row -mx-2 mb-32 mt-12">
          <div className="flex md:-mx-2 flex-col md:flex-row">
            <div className="md:w-1/3 mb-12 md:mb-0 px-6 md:px-2 flex flex-col">
              <img
                className="w-full rounded"
                src="https://spectrum.adobe.com/static/images/principles_rational@2x_1617048319517.png"
              />
              <h3 className="uppercase tracking-wide mt-5">Rational</h3>
              <p className="opacity-75 mt-5">
                Alina is based on real-world situations. Every component,
                pattern, and principle is informed by research and thoughtful
                testing.
              </p>
            </div>
            <div className="md:w-1/3 mb-12 md:mb-0 px-6 md:px-2 flex flex-col">
              <img
                className="w-full rounded"
                src="https://spectrum.adobe.com/static/images/principles_human@2x_1617048319534.png"
              />
              <h3 className="uppercase tracking-wide mt-5">Human</h3>
              <p className="opacity-75 mt-5">
                Alina places customer needs first. It's deeply committed to a
                high standard of accessibility, honesty, and respect for user
                attention.
              </p>
            </div>

            <div className="md:w-1/3 mb-12 md:mb-0 px-6 md:px-2 flex flex-col">
              <img
                className="w-full rounded"
                src="https://spectrum.adobe.com/static/images/principles_focused@2x_1617048319551.png"
              />
              <h3 className="uppercase tracking-wide mt-5">Focused</h3>
              <p className="opacity-75 mt-5">
                Alina strives to deliver what’s needed, when it’s needed. No
                unnecessary decoration or irrelevant content.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-xl">Our principles in action</h2>
        <hr className="mb-24" />

        <div className="flex flex-row -mx-4 mb-32">
          <div className="flex flex-col w-1/2 px-4">
            <h3 className="mb-8 text-xl font-medium">For all platforms</h3>
            <p className="mb-8">
              We believe that people should have a high quality experience that
              effortlessly scales across platforms.
            </p>
            <p className="mb-8">
              Spectrum considers all platforms — for both desktop and mobile —
              from the ground up. We recognize that people work across many
              different products and often need to context switch, so our scale
              system accounts for better legibility and easier UI interactions
              to set a foundation for consistent experiences across devices.
            </p>
            <a className="text-blue-600" href="#">
              Learn about platform scale
            </a>
          </div>
          <div className="w-1/2 px-4 flex items-center bg-gray-200">
            <img
              className="w-full object-contain h-64"
              srcSet="https://spectrum.adobe.com/static/images/principles_in-action_all-platforms@2x_4bxuVMMLNV2bH2OHPwAYkV_1568840929590.png 2x"
            />
          </div>
        </div>

        <div className="flex flex-row -mx-4 mb-32">
          <div className="flex flex-col w-1/2 px-4">
            <h3 className="mb-8 text-xl font-medium">For everyone</h3>
            <p className="mb-8">
              We believe in building for the widest audience possible.
            </p>
            <p className="mb-8">
              Spectrum is designed to be clearly readable, intuitive to use, and
              mindful of those who require alternative input peripherals or
              screen readers. Everything in our system — from color and type to
              interaction and language — is built to be compliant with industry
              standards.
            </p>
            <a className="text-blue-600" href="#">
              Learn about inclusive design
            </a>
            <a className="text-blue-600" href="#">
            Learn about international design
            </a>
            <a className="text-blue-600" href="#">
            Learn about bi-directionality
            </a>
          </div>
          <div className="w-1/2 px-4 flex items-center bg-gray-200">
            <img
              className="w-full object-contain h-64"
              srcSet="https://spectrum.adobe.com/static/images/principles_in-action_for-everyone@2x_4cq4MJtcYQoXpB7evUNtMZ_1568840942209.png 2x"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
