# tsParticles Blossom Preset V1

[![jsDelivr](https://data.jsdelivr.com/v1/package/npm/tsparticles-preset-blossom-v1/badge?style=rounded)](https://www.jsdelivr.com/package/npm/tsparticles-preset-blossom-v1) [![npmjs](https://badge.fury.io/js/tsparticles-preset-blossom-v1.svg)](https://www.npmjs.com/package/tsparticles-preset-blossom-v1) [![npm](https://img.shields.io/npm/dm/tsparticles-preset-blossom-v1)](https://www.npmjs.com/package/tsparticles-preset-blossom-v1)

## Sample

![demo](image/sample.png)

**This is my presset for [tsparticles](https://www.npmjs.com/package/tsparticles)**

**You can find more details at [tsparticles's document](https://particles.js.org/docs/) and its [github repository](https://github.com/matteobruni/tsparticles)**

## How to use it

### React.js / Preact / Inferno

_The syntax for `React.js`, `Preact` and `Inferno` is the same_.

This sample uses the class component syntax, but you can use hooks as well (if the library supports it).

```javascript
import Particles from "react-tsparticles";
import { Main } from "tsparticles";
import { loadBlossomFallingV1 } from "tsparticles-preset-blossom-v1";

export class ParticlesContainer extends React.PureComponent<IProps> {
  // this customizes the component tsParticles installation
  customInit(main: Main) {
    // this adds the preset to tsParticles, you can safely use the
    loadFirePreset(main);
  }

  render() {
    const options = {
      preset: "blossomFallV1",
    };

    return <Particles options={options} init={this.customInit} />;
  }
}
```

If you preffer using function :

```javascript
import Particles from "react-tsparticles";
import { loadBlossomFallingV1 } from "tsparticles-preset-blossom-v1";
import { Main } from "tsparticles";
function particlesInit(Main) {
  loadBlossomFallingV1(Main);
}
export default function Blosom() {
  return (
    <Particles
      options={{
        preset: "blossomFallV1",
      }}
      init={particlesInit}
    />
  );
}
```

#### Customization

**Important ⚠️**
You can override all the options defining the properties like in any standard `tsParticles` installation.

```javascript
const options = {
  background: {
    color: "",
  },
  preset: "blossomFallV1",
};
```

## **_Options_**

You can find all options
available [here](https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html) 📖
