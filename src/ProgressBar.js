import React, { useState, useEffect } from "react";
import { Check } from "lucide-react";
import PropTypes from "prop-types";
import "./ProgressBar.css";

const ProgressBar = ({
  steps,
  icon,
  currentStep,
  height,
  completedColor,
  incompleteColor,
  stepContainerSize,
  stepContainerActiveColor,
  stepContainerInactiveColor,
  stepCompleteTextColor,
  stepInCompleteTextColor,
  stepFont,
}) => {
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    const newProgressWidth = (100 / (steps.length - 1)) * currentStep;
    setProgressWidth(newProgressWidth);
  }, [currentStep, steps.length]);

  return (
    <div className="custom-relative custom-w-80 custom-flex custom-flex-col-reverse custom-gap-3">
      <div className="custom-relative custom-w-95 custom-mx-auto">
        <div
          className="custom-absolute custom-rounded-lg custom-w-full custom-top-1-2 custom-transform custom--translate-y-1-2"
          style={{ height, backgroundColor: incompleteColor }}
        />
        <div
          className="custom-absolute custom-top-1-2 custom-transform custom--translate-y-1-2 custom-rounded-lg custom-transition-all custom-duration-300 custom-ease-in-out"
          style={{
            width: `${progressWidth}%`,
            height,
            backgroundColor: completedColor,
          }}
        />
        <div className="custom-flex custom-justify-between">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`custom-relative custom-flex custom-flex-col custom-items-center ${
                index < currentStep
                  ? "custom-text-green-500"
                  : "custom-text-gray-400"
              }`}
            >
              <div
                className={`custom-rounded-full custom-z-10 custom-flex custom-items-center custom-justify-center ${
                  index < currentStep + 1
                    ? "custom-bg-green-500"
                    : "custom-bg-gray-300"
                }`}
                style={{
                  width: stepContainerSize,
                  height: stepContainerSize,
                  backgroundColor:
                    index < currentStep + 1
                      ? stepContainerActiveColor
                      : stepContainerInactiveColor,
                }}
              >
                {icon ? icon : <Check size={18} style={{ color: "white" }} />}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="custom-flex custom-justify-between">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`custom-font-medium custom-text-sm custom-text-center ${
              index < currentStep + 1
                ? "custom-text-green-500"
                : "custom-text-gray-400"
            }`}
            style={{
              color:
                index < currentStep + 1
                  ? stepCompleteTextColor
                  : stepInCompleteTextColor,
              ...stepFont,
            }}
          >
            {step}
          </div>
        ))}
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentStep: PropTypes.number.isRequired,
  height: PropTypes.number,
  completedColor: PropTypes.string,
  incompleteColor: PropTypes.string,
  icon: PropTypes.element,
  stepContainerSize: PropTypes.number,
  stepContainerActiveColor: PropTypes.string,
  stepContainerInactiveColor: PropTypes.string,
  stepCompleteTextColor: PropTypes.string,
  stepInCompleteTextColor: PropTypes.string,
  stepFont: PropTypes.object,
};

ProgressBar.defaultProps = {
  height: 6,
  completedColor: "green",
  incompleteColor: "gray",
  icon: <Check size={18} style={{ color: "white" }} />,
  stepContainerSize: 24,
  stepContainerActiveColor: "green",
  stepContainerInactiveColor: "gray",
  stepCompleteTextColor: "green",
  stepInCompleteTextColor: "gray",
  stepFont: {
    fontFamily: "roboto",
    fontSize: "14px",
    fontBold: "bold",
  },
};

export default ProgressBar;
