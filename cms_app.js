import { projectId, dataset, apiVersion } from "./sanity.js";
import { toHTML } from "https://esm.sh/@portabletext/to-html";

// Sanity Daten holen
async function loadHomepage() {
  const query = encodeURIComponent(`
    *[_type == "homepage"][0]{
      heroTitle,
      heroText,
      aboutTitle,
      aboutText,
      infoAddress,
      infoOpeninghours
    }
  `);

  const url = `https://${projectId}.api.sanity.io/v2026-01-01/data/query/${dataset}?query=${query}`;

  const res = await fetch(url);
  const data = await res.json();

  const page = data.result;

  // in HTML einsetzen
    // TOP
    document.querySelector(".hero h1").textContent = page.heroTitle;
    document.querySelector(".hero p").innerHTML = toHTML(page.heroText);
    
    // Über Uns
    document.querySelector("#about h2").textContent = page.aboutTitle;
    document.querySelector("#about p").innerHTML = toHTML(page.aboutText);
    
    // Impressionen


    // Infos
    document.querySelector("#info .address").innerHTML = toHTML(page.infoAddress);
    document.querySelector("#info .hours p").innerHTML = toHTML(page.infoOpeninghours);

    // Impressum


    // Datenschutz


}

loadHomepage();