import React from "react";

type PlanProps = {
  features?: string[];
  title: string;
  description: string;
  interval: string;
  price: string;
  image: string;
  onClickPlan: () => void;
};

const defaultProps = {
  features: [
    "Upload up to 200 MB",
    "View message performance and test against variants",
    "Control groups to improve results",
    "Engage customers",
  ],
  title: "Standard",
  description: "Works perfect for small teams and companies",
  interval: "/month",
  price: "$5",
};

export const Plan: React.FunctionComponent<PlanProps> = function ({
  features = defaultProps.features,
  title = defaultProps.title,
  description = defaultProps.description,
  interval = defaultProps.interval,
  price = defaultProps.price,
  image,
  onClickPlan,
}) {
  return (
    <>
      <div className="plan bg-transparent border border-gray-300 border-solid md:w-1/3 mx-8 p-6 hover:bg-white hover:shadow-md rounded-lg mb-8 md:mb-0">
        <div className="flex justify-center m-6">
          <img
            className="h-40 object-contain"
            src={image}
            alt="pricing per month"
          />
        </div>
        <div className="text-2xl mb-4">{title}</div>
        <div className="text-lg mb-6">{description}</div>
        <div className="flex items-end">
          <div className="text-xl mr-2">{price}</div>
          <div className="opacity-50">{interval}</div>
        </div>
        <button
          className="button-water text-lg font-bold mt-10 h-12 bg-transparent text-button border border-solid border-button rounded w-full"
          onClick={onClickPlan}
        >
          Choose this plan
        </button>
        <hr className="border-gray-300 border-b my-12 -mx-6" />
        <ul className="px-6">
          {features.map((feature, index) => {
            return (
              <li key={index} className="mb-4">
                {feature}
              </li>
            );
          })}
        </ul>
      </div>
      <style jsx>{`
        .plan {
          transform: translateY(0rem);
          transition: transform 0.4s, background-color 0.4s;
        }

        .plan:hover {
          transform: translateY(-1rem);
        }

        ul {
          list-style: square outside url("~assets/images/check.svg");
        }

        .border-button {
          border-color: #3040c4;
        }

        .button-water {
          transition: background 0.2s, color 0.2s;
        }

        .button-water:hover {
          background: #3040c4;
          color: white;
        }

        .bg-pricing {
          background-color: #f9fafb;
        }

        .hover\:bg-white:hover {
          background-color: white;
        }
      `}</style>
    </>
  );
};
