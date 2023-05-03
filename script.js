let rateNrActual = 1;
let submitActivator = false;

function ratingSet(rateNr) {
  submitActivator = true;
  ratingReset();
  rateNrActual = rateNr;
  document.querySelector(
    ".circleBgr:nth-child(" + rateNr + ")"
  ).style.backgroundColor = "var(--Light-Grey)";
  document.querySelector(".circleBgr:nth-child(" + rateNr + ")").style.color =
    "var(--White)";
}

function ratingReset() {
  document
    .querySelector(".circleBgr:nth-child(" + rateNrActual + ")")
    .removeAttribute("style");
}

function submit() {
  if (submitActivator == true) {
    document.querySelector(".card_rating").style.display = "none";
    document.querySelector(".card_summary").style.display = "flex";
    document.querySelector(".selected_nr").innerHTML = rateNrActual;
  }
}
