/* TOUR DATA — one record per stop. Every record uses the same fields.
   Stops: three Philadelphia landmarks. Coordinates and facts came from the sources listed
   in each record and MUST be re-checked by you before you submit (see README). */
const PLACES = [
  {
    name: "Independence Hall",
    lon: -75.150023, lat: 39.948874,
    description: "The Pennsylvania State House, built in the 1730s and 1740s. The Declaration of Independence was adopted here in 1776, and the U.S. Constitution was drafted in the same building in 1787.",
    photo: "", photoAlt: "",
    source: "Coordinates: Philadelphia Architects and Buildings (philadelphiabuildings.org, Google Maps point). History: Wikipedia, 'Independence Hall'",
    checked: "2026-10-05"
  },
  {
    name: "Liberty Bell Center",
    lon: -75.1503, lat: 39.9496,
    description: "Home of the Liberty Bell since 2003. The bell was cast in London in 1752, cracked, and was recast twice in Philadelphia by John Pass and John Stow. Abolitionists later made it a symbol of liberty. Admission is free.",
    photo: "", photoAlt: "",
    source: "Coordinates: latlong.net and whereig.com (approximate, 4 decimals). Address, hours, free admission: nps.gov/inde/planyourvisit/libertybellcenter.htm",
    checked: "2026-10-05"
  },
  {
    name: "Eastern State Penitentiary",
    lon: -75.1725, lat: 39.9683,
    description: "Designed by John Haviland and opened in 1829, this prison held each inmate in solitary confinement to encourage reflection. Its design influenced prisons worldwide. It closed in 1971 and is now a museum.",
    photo: "", photoAlt: "",
    source: "Coordinates and dates: Wikipedia, 'Eastern State Penitentiary' (39°58′06″N 75°10′21″W). Site history: easternstate.org",
    checked: "2026-10-05"
  }

  /* MISSING-DATA EXERCISE: on a copy, delete this line and the END line below, then reload.
  ,{
    name: "Unverified Stop",
    lon: null, lat: 39.9500,
    description: "Coordinates not verified yet.",
    photo: "", photoAlt: "",
    source: "", checked: ""
  }
  END OF EXERCISE */
];
if (typeof module !== 'undefined') module.exports = PLACES;
