btnScript();
function btnScript() {
    // Grab btns
    let btns = document.querySelectorAll(".start_stop");
    // decorate them
    btns.forEach((start_stop, idx) => {
        start_stop.setAttribute("role", "button");
        start_stop.setAttribute("aria-pressed", "false");
        start_stop.setAttribute("tabindex", "0");
    });
  }

function toggleBtn(ele) {
    ele.setAttribute(
      "aria-pressed",
      ele.getAttribute("aria-pressed") === "true" ? "false" : "true"
    );
  }