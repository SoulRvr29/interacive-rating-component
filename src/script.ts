let rateNrActual: number | string = 1;
let submitActivator: boolean = false;

function ratingSet(rateNr: number) {
  submitActivator = true;
  ratingReset();
  rateNrActual = rateNr;
  document.querySelector<HTMLElement>(
    ".circleBgr:nth-child(" + rateNr + ")"
  ).style.backgroundColor = "var(--Light-Grey)";
  document.querySelector<HTMLElement>(
    ".circleBgr:nth-child(" + rateNr + ")"
  ).style.color = "var(--White)";
}

function ratingReset() {
  document
    .querySelector(".circleBgr:nth-child(" + rateNrActual + ")")
    .removeAttribute("style");
}

function submit() {
  if (submitActivator == true) {
    document.querySelector<HTMLElement>(".card_rating").style.display = "none";
    document.querySelector<HTMLElement>(".card_summary").style.display = "flex";
    document.querySelector<HTMLElement>(".selected_nr").innerHTML =
      String(rateNrActual);
  } else {
    document.querySelector<HTMLElement>(".card_rating").style.display = "grid";
    document.querySelector<HTMLElement>(".card_summary").style.display = "none";
  }
}

function goBack() {
  ratingReset();
  submitActivator = false;
  submit();
}
