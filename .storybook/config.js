import { configure } from "@storybook/react";

function loadStories() {
  require("../src/simple-loading-spinner/stories/index.js");
}

configure(loadStories, module);
