console.log("instruction.js loaded");

document
  .querySelector(".info-graphic button:nth-of-type(1)")
  .addEventListener("click", bmo);

function bmo() {
  console.log("BMO button clicked");
  document.querySelector(".info-text h2").textContent = "HVAD ER EN BMO?";
  document.querySelector(".placeholder").textContent =
    "En BMO er en forkortelse for bolle med ost. Det er en helt enkel hvedebolle med en skive ost, ofte solgt som hurtig morgenmad eller snack i byens bagerier, kiosker og caféer. Selvom det i sig selv er et simpelt produkt, har BMO’en fået en særlig status i København som en fast del af hverdagen for mange pendlere, studerende og folk på farten. Den betragtes som et af de mest almindelige og ikoniske “grab-and-go”-måltider i byen.";
  document.querySelector(".info-box h3").textContent = "FAKTA OM BMO:";
  document.querySelector(".info-box ul").innerHTML =
    "<li>Navn: BMO står for bolle med ost.</li><li>Bestanddele: En simpel hvedebolle + en skive mild ost.</li><li>Udbredelse: Særligt populær i København, hvor den er en fast del af morgenrutinen.</li><li>BMO’en har en særlig status som et ikonisk “grab-and-go”-måltid i København.</li><li>Den er kendt for sin enkelhed og bekvemmelighed.</li>";
}

document
  .querySelector(".info-graphic button:nth-of-type(2)")
  .addEventListener("click", gøre);

function gøre() {
  console.log("KRISE button clicked");
  document.querySelector(".info-text h2").textContent = "HVAD SKAL DU GØRE?";
  document.querySelector(".placeholder").textContent =
    "I den nuværende BMO-krise opfordres befolkningen først og fremmest til at bevare roen og undgå panikopkøb, da dette kun forværrer manglen. Regeringen understreger vigtigheden af at respektere de midlertidige rationeringsordninger, så de tilbageværende forsyninger kan fordeles retfærdigt. Myndighederne anbefaler desuden, at man i en periode skifter til alternative morgenmadsprodukter, såsom yoghurt, havregryn eller hjemmebagte boller, indtil forsyningskæden igen fungerer normalt. Man bør undgå at støtte det sorte marked, hvor BMO’er sælges til urimelige priser, da dette både er ulovligt og presser situationen yderligere. Fødevarestyrelsen arbejder sammen med branchen på at få produktionen tilbage på sporet, og indtil da er det vigtigt, at alle bidrager ved at handle ansvarligt og vise mådehold.";
  document.querySelector(".info-box ul").innerHTML =
    "<li>Bevar roen og undgå panikopkøb.</li><li>Respekter rationeringsordningerne.</li><li>Skift til alternative morgenmadsprodukter midlertidigt.</li><li>Undgå at støtte det sorte marked.</li><li>Handle ansvarligt og vis mådehold.</li>";
}
