"use strict";

{
  const init = () => $$(".keyword")
    .on("mouseenter", showTooltip)
    .on("mouseleave", hideTooltip);

  const showTooltip = () => $("#tooltip").style.display = "block";
  const hideTooltip = () => $("#tooltip").style.display = "none";

  init();
}
