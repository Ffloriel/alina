import { Sidebar } from "components/Sidebar";


export default function DesignTokens() {
  return (
    <div className="grid grid-cols-12 h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="col-span-10 px-24 pt-12 h-screen overflow-auto">
        <h1 className="text-5xl leading-tight w-3/5">Design tokens</h1>
        <p className="text-xl leading-tight w-3/5 mt-4">
          Design tokens are design decisions, represented as data, that ensure
          systematically unified and cohesive product experiences.
        </p>

        <div className="flex flex-row -mx-2 mb-24 mt-12">
          <img
            className="w-full rounded"
            src="https://spectrum.adobe.com/static/images/design-tokens_hero_desktop@2x_4IewHrPB0vOPrmLcSgUAvg_1571414778234.png"
          />
        </div>

        <h2 className="text-xl">Table of contents</h2>
        <hr className="mb-12" />

        <div className="flex flex-col mb-24">
          <a className="text-blue-600 mb-4" href="#">
            Learn about inclusive design
          </a>
          <a className="text-blue-600 mb-4" href="#">
            Learn about international design
          </a>
          <a className="text-blue-600 mb-4" href="#">
            Learn about bi-directionality
          </a>
        </div>

        <h2 className="text-xl">Introduction</h2>
        <hr className="mb-12" />

        <div className="flex flex-row -mx-4 mb-24">
          <div className="flex flex-col w-1/2 px-4">
            <h3 className="mb-8 text-lg font-medium">
              What are design tokens?
            </h3>
            <p className="mb-8">
              Design tokens are all the values needed to construct and maintain
              a design system — spacing, color, typography, object styles,
              animation, etc. — represented as data. These can represent
              anything defined by design: a color as a RGB value, an opacity as
              a number, an animation ease as Bezier coordinates. They’re used in
              place of hard-coded values in order to ensure flexibility and
              unity across all product experiences.
            </p>
            <p className="mb-8">
              Design tokens are directly integrated into our component libraries
              and UI kits. They cover the various options of platform scales,
              color themes, component states, and more.
            </p>
          </div>
          <div className="w-1/2 px-4 flex items-center bg-gray-200">
            <img
              className="w-full object-contain h-64"
              srcSet="https://spectrum.adobe.com/static/images/design_tokens@2x_5c8glXNcJexroU3y3AEUA3_1571178788755.png 2x"
            />
          </div>
        </div>

        <h2 className="text-xl font-medium">Design token types</h2>
        <hr className="mb-12" />

        <p className="mb-8">
          The following types of design tokens are the building blocks and design decisions that make up the Spectrum design language:
        </p>

        <div className="flex flex-row -mx-4 mb-32">
          <div className="flex flex-col w-1/2 px-4">
            <h3 className="mb-8 text-lg font-medium">Global tokens</h3>
            <p className="mb-8">
            Global tokens are the primitive values in our design language, represented by context-agnostic names. Our color palette, animation, typography, and dimension values are all recorded as global tokens. These can be directly used, and are inherited by all other token types.
            </p>
          </div>
          <div className="w-1/2 px-4 flex items-center bg-gray-200">
            <img
              className="w-full object-contain h-64"
              srcSet="https://spectrum.adobe.com/static/images/global_tokens@2x_1ap8yqvCHq3t1tBAeUfJh7_1571179197852.png 2x"
            />
          </div>
        </div>

        <div className="flex flex-row -mx-4 mb-32">
          <div className="flex flex-col w-1/2 px-4">
            <h3 className="mb-8 text-lg font-medium">Global tokens</h3>
            <p className="mb-8">
            Global tokens are the primitive values in our design language, represented by context-agnostic names. Our color palette, animation, typography, and dimension values are all recorded as global tokens. These can be directly used, and are inherited by all other token types.
            </p>
          </div>
          <div className="w-1/2 px-4 flex items-center bg-gray-200">
            <img
              className="w-full object-contain h-64"
              srcSet="https://spectrum.adobe.com/static/images/global_tokens@2x_1ap8yqvCHq3t1tBAeUfJh7_1571179197852.png 2x"
            />
          </div>
        </div>

        <div className="flex flex-row -mx-4 mb-32">
          <div className="flex flex-col w-1/2 px-4">
            <h3 className="mb-8 text-lg font-medium">Global tokens</h3>
            <p className="mb-8">
            Global tokens are the primitive values in our design language, represented by context-agnostic names. Our color palette, animation, typography, and dimension values are all recorded as global tokens. These can be directly used, and are inherited by all other token types.
            </p>
          </div>
          <div className="w-1/2 px-4 flex items-center bg-gray-200">
            <img
              className="w-full object-contain h-64"
              srcSet="https://spectrum.adobe.com/static/images/global_tokens@2x_1ap8yqvCHq3t1tBAeUfJh7_1571179197852.png 2x"
            />
          </div>
        </div>


      </div>
    </div>
  );
}
