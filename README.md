# A React Progress Bar Component

A customizable progress bar React component to visualize progress through a series of steps.

![Screenshot 2024-02-18 222140](https://github.com/7hourspg/react-progress-bar/assets/98067649/4a60c452-154e-4156-8d33-31f98bbcccba)

## Installation

You can install the `@7hours/react-progress-bar` package via npm:

```bash
npm install @7hours/react-progress-bar
```

Or using yarn:

```bash
yarn add @7hours/react-progress-bar
```

## Usage

```js
import React from "react";
import ProgressBar from "@7hours/react-progress-bar"

const steps = ["Order Placed", "Processing", "Shipped", "Delivered"];
const currentStep = 1;
const height = 10;
const completedColor = "green";
const incompleteColor = "gray";
const icon = <Star size={18} style={{ color: "white" }} />;
const stepCompleteTextColor = "green";
const stepInCompleteTextColor = "gray";
const stepContainerSize = 24;
const stepFont = {
  fontFamily: "JetBrains Mono",
  fontSize: "16px",
  fontWeight: "bold",
};

const App = () => {
  return (
    <ProgressBar
      steps={steps}
      currentStep={currentStep}
      height={height}
      completedColor={completedColor}
      incompleteColor={incompleteColor}
      icon={icon}
      stepCompleteTextColor={stepCompleteTextColor}
      stepInCompleteTextColor={stepInCompleteTextColor}
      stepContainerSize={stepContainerSize}
      stepFont={stepFont}
    />
  );
};

export default App;
```

## Props

| Prop                         | Type          | Default       | Description                                                                                                     |
|------------------------------|---------------|---------------|-----------------------------------------------------------------------------------------------------------------|
| steps                        | array[string] | Required      | An array of strings representing the steps in the progress bar.                                                 |
| currentStep                  | number        | Required      | The index of the current step (zero-based).                                                                    |
| height                       | number        | 6             | The height of the progress bar.                                                                                |
| completedColor               | string        | "green"       | The color of the completed portion of the progress bar.                                                        |
| incompleteColor              | string        | "gray"        | The color of the incomplete portion of the progress bar.                                                        |
| icon                         | element       | Check         | The icon to be displayed within each step.                                                                      |
| stepContainerSize            | number        | 24            | The size of the step container.                                                                                 |
| stepContainerActiveColor     | string        | "green"       | The color of the active step container.                                                                         |
| stepContainerInactiveColor   | string        | "gray"        | The color of the inactive step container.                                                                       |
| stepCompleteTextColor        | string        | "green"       | The text color of completed steps.                                                                              |
| stepInCompleteTextColor      | string        | "gray"        | The text color of incomplete steps.                                                                            |
| stepFont                     | object        |               | An object specifying the font properties for the step text.                                                      |


## Credits

- **Author**: [7hours](https://github.com/7hourspg)
