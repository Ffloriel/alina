import React from "react";
import { LogoFullHumanLetter } from "./LogoFullHumanLetter";
import Link from "next/link";

export function Sidebar() {
  return (
    <>
      <div className="col-span-2 bg-gray-100 py-8 flex flex-col overflow-hidden">
        <div className="flex justify-center mb-24 px-4">
          <LogoFullHumanLetter />
        </div>

        <nav className="flex flex-1 flex-col overflow-auto px-4">
          <div className="bg-gray-200 font-medium px-4 py-2 rounded">Alina</div>
          <Link href="/principles">
            <a className="hover:bg-gray-200 px-8 py-1 rounded my-1 flex">
              Principles
            </a>
          </Link>
          <Link href="/whats-new">
            <a className="hover:bg-gray-200 px-8 py-1 rounded my-1 flex">
              What's new
            </a>
          </Link>
          <label
            htmlFor="foundation-input"
            className="font-medium px-4 py-2 rounded"
          >
            Foundation
          </label>
          <input
            id="foundation-input"
            className="category-checkbox"
            type="checkbox"
          ></input>
          <div className="category">
            <Link href="/foundation/">
              <a className="hover:bg-gray-200 px-8 py-1 rounded my-1 flex items-center">
                Design tokens
              </a>
            </Link>
            <Link href="/foundation/">
              <a className="hover:bg-gray-200 px-8 py-1 rounded my-1 flex items-center">
                Platform scale
              </a>
            </Link>
            <Link href="/foundation/">
              <a className="hover:bg-gray-200 px-8 py-1 rounded my-1 flex items-center">
                Color
              </a>
            </Link>
            <Link href="/foundation/">
              <a className="hover:bg-gray-200 px-8 py-1 rounded my-1 flex items-center">
                Typography
              </a>
            </Link>
            <Link href="/foundation/">
              <a className="hover:bg-gray-200 px-8 py-1 rounded my-1 flex items-center">
                Object styles
              </a>
            </Link>
            <Link href="/foundation/">
              <a className="hover:bg-gray-200 px-8 py-1 rounded my-1 flex items-center">
                Motion
              </a>
            </Link>
            <Link href="/foundation/">
              <a className="hover:bg-gray-200 px-8 py-1 rounded my-1 flex items-center">
                Iconography
              </a>
            </Link>
            <Link href="/foundation/">
              <a className="hover:bg-gray-200 px-8 py-1 rounded my-1 flex items-center">
                Illustration
              </a>
            </Link>
            <Link href="/foundation/">
              <a className="hover:bg-gray-200 px-8 py-1 rounded my-1 flex items-center">
                Inclusive design
              </a>
            </Link>
            <Link href="/foundation/">
              <a className="hover:bg-gray-200 px-8 py-1 rounded my-1 flex items-center">
                International design
              </a>
            </Link>
          </div>

          <label
            htmlFor="content-input"
            className="font-medium px-4 py-2 rounded"
          >
            Content
          </label>
          <input
            id="content-input"
            className="category-checkbox"
            type="checkbox"
          ></input>
          <div className="category">
            <Link href="/foundation/">
              <a className="hover:bg-gray-200 px-8 py-1 rounded my-1 flex items-center">
                Voice and tone
              </a>
            </Link>
            <Link href="/foundation/">
              <a className="hover:bg-gray-200 px-8 py-1 rounded my-1 flex items-center">
                Grammar and mechanics
              </a>
            </Link>
            <Link href="/foundation/">
              <a className="hover:bg-gray-200 px-8 py-1 rounded my-1 flex items-center">
                In-product word list
              </a>
            </Link>
            <Link href="/foundation/">
              <a className="hover:bg-gray-200 px-8 py-1 rounded my-1 flex items-center">
                Writing for onboarding
              </a>
            </Link>
          </div>
        </nav>
      </div>
      <style jsx>{`
        .category {
          display: none;
        }
        .category-checkbox {
          display: none;
        }
        .category-checkbox:checked + .category {
          display: flex;
          flex-direction: column;
        }

        label {
          cursor: pointer;
        }

        nav {
            display: flex;
            flex-direction: column;
            flex: 1;
            overflow: auto;
        }
      `}</style>
    </>
  );
}
