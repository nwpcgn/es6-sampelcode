"use strict";

{
  const IMAGE_FILE_ON = "light_on.png";
  const IMAGE_FILE_OFF = "light_off.png";

  const init = () => document.on("click", () => {
    const currentLightNr = findFirstTurnedOnLightNr();
    turnOffByNr(currentLightNr);
    turnOnByNr(nextLightNr(currentLightNr));
  });

  const findFirstTurnedOnLightNr = () => lights().findIndex(isOn);
  const isOn = light => light.src.endsWith(IMAGE_FILE_ON);
  const nextLightNr = nr => isLast(nr) ? 0 : nr + 1;
  const isLast = nr => nr === lights().length - 1;
  const turnOnByNr = nr => turnOn(lights()[nr]);
  const turnOffByNr = nr => turnOff(lights()[nr]);
  const turnOn = light => light.src = IMAGE_FILE_ON;
  const turnOff = light => light.src = IMAGE_FILE_OFF;
  const lights = () => $$("img[alt=lightbulb]");

  init();
}
