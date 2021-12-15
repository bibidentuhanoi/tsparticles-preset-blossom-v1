import { Main } from "tsparticles";
import { blossomDrawer } from "./blossomDrawer";
import {options} from "./options";
export const loadBlossomFallingV1 = (tsParticles = Main) => {
  tsParticles.addShape("blossom", blossomDrawer);
  tsParticles.addPreset("blossomFallV1", options);
};
