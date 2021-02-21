import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { LogoFullHumanLetter } from "./LogoFullHumanLetter";

export function Sidebar() {
  const router = useRouter();
  const [, category, page] = router.pathname.split("/");

  return (
    <>
      <div className="col-span-2 bg-gray-100 py-8 flex flex-col overflow-hidden">
        <div className="flex justify-center mb-12 px-4">
          <LogoFullHumanLetter />
        </div>

        <nav className="flex flex-1 flex-col overflow-auto">
          <div className="font-medium px-4 py-2 rounded">Alina</div>
          <Link href="/principles">
            <a
              className={clsx(
                "hover:bg-gray-200 px-8 py-1 rounded  flex items-center",
                category === "principles" && "bg-gray-200"
              )}
            >
              Principles
            </a>
          </Link>
          <Link href="/whats-new">
            <a
              className={clsx(
                "hover:bg-gray-200 px-8 py-1 rounded  flex items-center",
                category === "whats-new" &&
                  "bg-gray-200"
              )}
            >
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
            checked
            readOnly
          ></input>
          <div className="category">
            <Link href="/foundation/design-tokens">
              <a
                className={clsx(
                  "hover:bg-gray-200 px-8 py-1 rounded  flex items-center",
                  category === "foundation" &&
                    page === "design-tokens" &&
                    "bg-gray-200"
                )}
              >
                Design tokens
              </a>
            </Link>
            <Link href="/foundation/platform-scale">
              <a
                className={clsx(
                  "hover:bg-gray-200 px-8 py-1 rounded  flex items-center",
                  category === "foundation" &&
                    page === "platform-scale" &&
                    "bg-gray-200"
                )}
              >
                Platform scale
              </a>
            </Link>
            <Link href="/foundation/color">
              <a
                className={clsx(
                  "hover:bg-gray-200 px-8 py-1 rounded  flex items-center",
                  category === "foundation" &&
                    page === "color" &&
                    "bg-gray-200"
                )}
              >
                Color
              </a>
            </Link>
            <Link href="/foundation/typography">
              <a
                className={clsx(
                  "hover:bg-gray-200 px-8 py-1 rounded  flex items-center",
                  category === "foundation" &&
                    page === "typography" &&
                    "bg-gray-200"
                )}
              >
                Typography
              </a>
            </Link>
            <Link href="/foundation/object-styles">
              <a
                className={clsx(
                  "hover:bg-gray-200 px-8 py-1 rounded  flex items-center",
                  category === "foundation" &&
                    page === "object-styles" &&
                    "bg-gray-200"
                )}
              >
                Object styles
              </a>
            </Link>
            <Link href="/foundation/motion">
              <a
                className={clsx(
                  "hover:bg-gray-200 px-8 py-1 rounded  flex items-center",
                  category === "foundation" &&
                    page === "motion" &&
                    "bg-gray-200"
                )}
              >
                Motion
              </a>
            </Link>
            <Link href="/foundation/iconography">
              <a
                className={clsx(
                  "hover:bg-gray-200 px-8 py-1 rounded  flex items-center",
                  category === "foundation" &&
                    page === "iconography" &&
                    "bg-gray-200"
                )}
              >
                Iconography
              </a>
            </Link>
            <Link href="/foundation/illustration">
              <a
                className={clsx(
                  "hover:bg-gray-200 px-8 py-1 rounded  flex items-center",
                  category === "foundation" &&
                    page === "illustration" &&
                    "bg-gray-200"
                )}
              >
                Illustration
              </a>
            </Link>
            <Link href="/foundation/inclusive-design">
              <a
                className={clsx(
                  "hover:bg-gray-200 px-8 py-1 rounded  flex items-center",
                  category === "foundation" &&
                    page === "inclusive-design" &&
                    "bg-gray-200"
                )}
              >
                Inclusive design
              </a>
            </Link>
            <Link href="/foundation/international-design">
              <a
                className={clsx(
                  "hover:bg-gray-200 px-8 py-1 rounded  flex items-center",
                  category === "foundation" &&
                    page === "international-design" &&
                    "bg-gray-200"
                )}
              >
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
            checked
            readOnly
          ></input>
          <div className="category">
            <Link href="/content/voice-and-tone">
              <a
                className={clsx(
                  "hover:bg-gray-200 px-8 py-1 rounded  flex items-center",
                  category === "content" &&
                    page === "voice-and-tone" &&
                    "bg-gray-200"
                )}
              >
                Voice and tone
              </a>
            </Link>
            <Link href="/content/grammar-and-mechanics">
              <a
                className={clsx(
                  "hover:bg-gray-200 px-8 py-1 rounded  flex items-center",
                  category === "content" &&
                    page === "grammar-and-mechanics" &&
                    "bg-gray-200"
                )}
              >
                Grammar and mechanics
              </a>
            </Link>
            <Link href="/content/in-product-word-list">
              <a
                className={clsx(
                  "hover:bg-gray-200 px-8 py-1 rounded  flex items-center",
                  category === "content" &&
                    page === "in-product-word-list" &&
                    "bg-gray-200"
                )}
              >
                In-product word list
              </a>
            </Link>
            <Link href="/content/writing-for-onboarding">
              <a
                className={clsx(
                  "hover:bg-gray-200 px-8 py-1 rounded  flex items-center",
                  category === "content" &&
                    page === "writing-for-onboarding" &&
                    "bg-gray-200"
                )}
              >
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
