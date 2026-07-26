// ---------------------------------------------------------------------------
// HELLFEST 2027 — shared data file
// To change anything here (add/remove packing items, update predictions),
// just edit this file and push to GitHub. Every visitor sees the update
// on next page load — no build step needed.
// ---------------------------------------------------------------------------

const CREW = ["Miquel", "Javi", "Rafel", "Julián", "Rudy"];

// Packing checklist per person. Miquel's is pre-filled from the original list.
// The others start empty — add items as arrays of strings, same as Miquel's.
const PACKING_LISTS = {
  Miquel: [
    "Calçotets", "Mitjons Curts / Llargs", "Ulleres de sol", "Goma de cabell",
    "Raspall de dents", "Raspall de cabell", "Pasta de dents",
    "Pantalons de pijama", "Pantalons de xandall", "Pantalons curts",
    "Samarretes curtes", "Samarreta per dormir", "Carregador mòbil",
    "Jaqueta Adidas", "Xampú", "DNI i carnet de conduir", "Targeta de crèdit",
    "Cascos", "Melatonina", "Taps per dormir", "Desodorant", "Colònia",
    "Bossa roba bruta", "Cadira de càmping", "Coixins", "Suavitzant",
    "Ampolla d'aigua", "Samarretes Hellfest", "Lorito", "Apple Watch",
    "Banyador", "Pantaló curt esport", "Nevera petita", "Xancles", "Gorra",
    "Crema solar", "Motxilla", "Tovallola", "Gots Moscow Mule",
    "Vichy llimona", "Ginger Beer", "Matalàs inflable", "Plats",
    "Jocs de taula / Cartes...",
  ],
  Javi: [],
  Rafel: [],
  "Julián": [],
  Rudy: [],
};

// Band predictions — 20 picks per person. Fill in Rafel's once he sends them.
// Each row: { Miquel: "...", Javi: "...", Rafel: "...", "Julián": "...", Rudy: "..." }
const PREDICTIONS = [
  { Javi: "Airbourne (Aire del barri del born)", Rafel: "", Miquel: "Arch Enemy", "Julián": "Gojira (Drac de banyoles)", Rudy: "Between the Buried and Me (Entre la mare del Missel, i el menda)" },
  { Javi: "Alcest (A la Cistella)", Rafel: "", Miquel: "As I Lay Dying", "Julián": "Rammstein (pedra de tartera)", Rudy: "Carcass (Senyors carlistes)" },
  { Javi: "Amaranthe (estimar abans)", Rafel: "", Miquel: "Deftones (tonelades de sords)", "Julián": "System of a Down (s'ha caigut el sistema)", Rudy: "Children of Bodom (Els nens passius)" },
  { Javi: "Amon Amarth (Pedraforca)", Rafel: "", Miquel: "Falling in Reverse (caient del revés)", "Julián": "Slipknot (nus de corda)", Rudy: "Gojira (Ves-hi, eina de gestió de projectes d'Atlassian)" },
  { Javi: "Bad Religion (L'islam, visca Aliança)", Rafel: "", Miquel: "Fat Boy Slim", "Julián": "Ghost (esperit)", Rudy: "Haken (Riu, amic de Ryu)" },
  { Javi: "Blind Guardian (El guardià cec)", Rafel: "", Miquel: "Gojira", "Julián": "Korn (choclo)", Rudy: "Karnivool (Carn i vol)" },
  { Javi: "Blink-182 (155)", Rafel: "", Miquel: "Guns N' Roses (Pistoles i roses)", "Julián": "Powerwolf (el poder del Sr. Llop)", Rudy: "Korn (blat de moro)" },
  { Javi: "Deftones", Rafel: "", Miquel: "Killswitch Engage", "Julián": "Amon Amarth", Rudy: "Lamb of God (corder de déu)" },
  { Javi: "Dropkick Murphys (La colla de l'esplai)", Rafel: "", Miquel: "Kim Dracula", "Julián": "Arch Enemy", Rudy: "Machine Head (Cap de màquina)" },
  { Javi: "Electric Callboy (Trucador llampant)", Rafel: "", Miquel: "Lamb of God (corder de déu)", "Julián": "Children of Bodom", Rudy: "Manowar (Soldat)" },
  { Javi: "Eluveitie", Rafel: "", Miquel: "Linkin Park (Està buscant l'ocarina del temps)", "Julián": "Black Label Society (La societat del Johnny Walker de 20 leuros)", Rudy: "Meshuggah (m'asseca)" },
  { Javi: "Gojira", Rafel: "", Miquel: "Meshuggah (m'asseca)", "Julián": "Machine Head", Rudy: "Nightwish (Somni de la nit)" },
  { Javi: "PowerWolf (Llop poderós)", Rafel: "", Miquel: "Parkway Drive (Taxi cap al Parc Güell)", "Julián": "Trivium", Rudy: "Pendulum (Putes penjant)" },
  { Javi: "Rage Against the Machine (Fúria cap a les maquinetes)", Rafel: "", Miquel: "Pineapple Thief (el lladre de pinyes)", "Julián": "Kreator", Rudy: "Rammstein (Pedra marrà)" },
  { Javi: "Rammstein", Rafel: "", Miquel: "Rage Against the Machine", "Julián": "Orbit Culture", Rudy: "Rush (Presa)" },
  { Javi: "Rob Zombie (Robert Mort)", Rafel: "", Miquel: "Shining (El meu amic xinès és tímid)", "Julián": "Blind Guardian (guàrdia de la ONCE)", Rudy: "SOAD (Sistema supercromosòmic)" },
  { Javi: "Sonata Arctica (La Montserrat Caballé es pela de fred)", Rafel: "", Miquel: "Slaughter to Prevail", "Julián": "Meshuggah", Rudy: "Soilwork (Treball de la terra)" },
  { Javi: "System of a Down (Sistema de Retrasats)", Rafel: "", Miquel: "System of a Down", "Julián": "Lamb of God", Rudy: "Stratovarius (Diferents estrats)" },
  { Javi: "Twisted Sister (Germaneta Torçuda)", Rafel: "", Miquel: "The Prodigy (Prodigi)", "Julián": "Mastodon", Rudy: "Tool (Eina)" },
  { Javi: "WindRose (La Rosa dels Vents)", Rafel: "", Miquel: "Trivium (Les tres vies)", "Julián": "Parkway Drive", Rudy: "Turisas (Els teus riures)" },
];

const TRIP_INFO = {
  hellfestDates: "17–20 June 2027",
  location: "Clisson, France",
  departure: { date: "15 June", time: "10:00 AM", from: "Sant Cugat" },
  return: { date: "21 June", from: "Clisson" },
  address: "Les Roussières 4, Maisdon-sur-Sèvre, Pays de la Loire 44690, France",
  airbnbUrl: "https://www.airbnb.com/rooms/47966910?source_impression_id=p3_1785087764_P3L8z-WMnzWASgKA",
  // Countdown target — Hellfest gates, France local time (CEST = UTC+2 in June)
  countdownTarget: "2027-06-17T00:00:00+02:00",
};
