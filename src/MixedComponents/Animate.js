import React from "react";

import {
  Animated,
  FadeAnimations,
  RotateAnimations
} from "animated-styled-components";

const Animate = () => {
  return (
    <div>
      <Animated
        animation={{
          delay_in: 5,
          in: FadeAnimations.FadeInBottom,
          duration_in: 1,
          continuous: RotateAnimations.RotateCenter,
          duration_continuous: 1,
          out: FadeAnimations.FadeOutTop,
          duration_out: 1,
          delay_between: 5
        }}
        transitions={[
          {
            type: "hover",
            from: { property: "border-radius", value: 0 },
            to: { property: "border-radius", value: 10 }
          }
        ]}
      >
        This is an animated component
      </Animated>
    </div>
  );
};

export default Animate;
