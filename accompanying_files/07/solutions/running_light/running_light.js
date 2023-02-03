"use strict";

{
  const init = () => lights().on("mouseenter", e => {
    turnAllOff();
    turnOnNext(e.target);
  });

  const turnOnNext = light => turnOn(lights()[nextLightNr(light)]);
  const nextLightNr = light => isLast(light) ? 0 : lightNr(light) + 1;
  const isLast = light => lightNr(light) === lights().length - 1;
  const lightNr = light => lights().indexOf(light);
  const turnOn = light => light.src = "light_on.png";
  const turnOff = light => light.src = "light_off.png";
  const turnAllOff = () => lights().forEach(turnOff);
  const lights = () => $$("img[alt=lightbulb]");

  init();
}
