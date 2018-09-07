import React from "react";
import { storiesOf } from "@storybook/react";
import LoadingComponent from "../LoadingComponent";

storiesOf("Simple Loading Spinner", module).add("default", () => (
  <LoadingComponent />
));
