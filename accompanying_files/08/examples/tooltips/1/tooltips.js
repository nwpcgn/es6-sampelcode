"use strict";

{
  const init = () => $$(".keyword").on("mouseenter", showTooltip);

  const showTooltip = e => console.log(e.target.innerHTML);

  init();
}
