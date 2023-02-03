"use strict";

{
  const MOUSE_TO_TOOLTIP = 10;

  const init = () => {
    $$(".keyword").on("mousemove", showTooltip).on("mouseleave", hideTooltip);
  };

  const showTooltip = e => {
    $("#tooltip").textContent = e.target.dataset.tooltip;
    $("#tooltip").style.display = "block";
    $("#tooltip").style.top = e.clientY + MOUSE_TO_TOOLTIP + "px";
    $("#tooltip").style.left = e.clientX + MOUSE_TO_TOOLTIP + "px";
  };

  const hideTooltip = () => $("#tooltip").style.display = "none";

  init();
}
