# AI 101 — Tour Lab (Week 6, Path B)

A data-driven virtual tour on the same grid globe as the Flight Lab. The app reads stop records from `places.js`, checks them, draws a marker for each usable stop, and flies the camera to the selected stop.

The three example stops are **invented placeholders** near the class teaching origin (−75.93, 40.33). They are not real campus locations.

## Files
| File | Job |
|---|---|
| index.html | Page structure: panel, buttons, globe area |
| style.css | Colors, spacing, layout |
| places.js | **Your data**: one record per stop |
| tour-core.js | Rules: which stop is next, is a record usable |
| app.js | Connects data, rules, buttons, and the Cesium globe |
| tests.html / tests.js | Checks for the rules and your data |

## Run
Same as the Flight Lab: publish with GitHub Pages (Deploy from a branch → main → /(root)) or serve locally (`python -m http.server 8000`). Internet and WebGL are needed for the globe; CesiumJS 1.145 loads from Cesium's CDN. No ion token. If the globe fails, the stop panel and buttons still work.

## One record
```js
{ name: "", lon: 0, lat: 0, description: "", photo: "", photoAlt: "", source: "", checked: "YYYY-MM-DD" }
```
Longitude comes first (east/west, negative in Pennsylvania). Leave anything you have not verified blank. The app lists incomplete records under "Needs verification" instead of guessing.

## Test
Open tests.html. Then do the manual checks on Canvas page 05 (Tour checks). Optional: `node tests.js`.

## Limits
Virtual tour only: a camera flight is not a walking route, travel time, or accessibility guide. Grid globe, no imagery or terrain. Facts are only as good as your sources.

## Student additions — complete before submission
Audience and purpose:
Stops and sources (with date checked):
Feature changed:
AI assistance accepted/rejected:
Tests and evidence:
Partner reproduction feedback:
Known limitations:

## References
https://cesium.com/learn/cesiumjs/ref-doc/Camera.html#flyTo
https://cesium.com/learn/cesiumjs/ref-doc/Cartesian3.html
https://cesium.com/learn/cesiumjs-learn/cesiumjs-creating-entities/
