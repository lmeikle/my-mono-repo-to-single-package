# my-mono-repo-to-single-repo

Removing the need for Lerna by converting to a single npm package.<br>
At present contains 2 packages: calculate-distance-util and simple-loading-component.

##### Download and Installation:

- npm install

##### Running locally:

- npm run start

Using storybook to test things without having to link from another project.<br>
Need the alpha version of storybook to work with webpack 4.<br>
npm i -g @storybook/cli@alpha<br>
npm i --save-dev @storybook/react@alpha<br>

##### Testing:

- npm run test (will run all tests)

##### Building:

- npm run build

##### Publishing:

- npm publish --access public (will automatically run prepublish first)

#### Structure

    <pre>
    |-- dist (Compiled)
    |   `-- index.js
    |-- src
    |   |-- calculate-distance-utils
    |   |-- simple-loading-spinner
    |   `-- index.js
    `-- webpack.config.js
    </pre>

# calculate-distance-util

Given a set of 4 coordinates calculates the distance in KM between them.

## Example:

```javascript
import { calculateDistance } from "@lmeikle/my-mono-repo-to-single-package";

let distance = calculateDistance(a, b, c, d);
```

# simple-loading-spinner

Renders a simple react loading spinner.<br/>

### Example:

```javascript
import React, { Component } from "react";
import { LoadingComponent } from "@lmeikle/my-mono-repo-to-single-package";

class HelloWorld extends Component {
  render() {
    return <LoadingComponent />;
  }
}
export default HelloWorld;
```
