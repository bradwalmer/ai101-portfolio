/* UI + Cesium rendering. Tour rules live in tour-core.js; data lives in places.js. */
(() => {
  const $ = id => document.getElementById(id);
  const all = typeof PLACES !== 'undefined' ? PLACES : [];

  // 1. Check the data before drawing anything.
  const problems = all
    .map((p, n) => ({ label: (p && p.name) || 'Record ' + (n + 1), issues: Tour.validatePlace(p) }))
    .filter(r => r.issues.length);
  $('problems').innerHTML = problems.length
    ? '<strong>Needs verification (not shown on the map):</strong><ul>' +
      problems.map(r => `<li>${r.label}: ${r.issues.join('; ')}</li>`).join('') + '</ul>'
    : '';
  const stops = Tour.usable(all);
  let i = 0; // state: which stop is selected

  // 2. Show the selected stop's details (works even if the globe fails).
  function show() {
    if (!stops.length) { $('name').textContent = 'No usable stops yet'; $('desc').textContent = 'Fix the records in places.js.'; return; }
    const p = stops[i];
    $('count').textContent = `Stop ${i + 1} of ${stops.length}`;
    $('name').textContent = p.name;
    $('desc').textContent = p.description;
    $('source').textContent = `Source: ${p.source} · Checked: ${p.checked}`;
    const img = $('photo');
    if (p.photo) { img.src = p.photo; img.alt = p.photoAlt; img.hidden = false; $('nophoto').hidden = true; }
    else { img.hidden = true; img.removeAttribute('src'); $('nophoto').hidden = false; }
    if (viewer) {
      viewer.camera.flyTo({ destination: Cesium.Cartesian3.fromDegrees(p.lon, p.lat, 1500), duration: 2 });
      markers.forEach((m, n) => { m.point.color = n === i ? Cesium.Color.GOLD : Cesium.Color.WHITE; });
    }
  }

  $('next').onclick = () => { i = Tour.nextIndex(i, stops.length); show(); };
  $('prev').onclick = () => { i = Tour.prevIndex(i, stops.length); show(); };

  // 3. The globe (optional layer on top of working data and buttons).
  let viewer = null, markers = [];
  if (typeof Cesium === 'undefined') {
    $('message').textContent = 'Cesium did not load. The stop list still works; check internet or CDN access for the globe.';
  } else {
    try {
      viewer = new Cesium.Viewer('globe', {
        baseLayer: false, baseLayerPicker: false, geocoder: false, animation: false,
        timeline: false, homeButton: false, sceneModePicker: false, navigationHelpButton: false,
        fullscreenButton: false, infoBox: false, selectionIndicator: false,
        terrainProvider: new Cesium.EllipsoidTerrainProvider()
      });
      viewer.imageryLayers.addImageryProvider(new Cesium.GridImageryProvider());
      markers = stops.map((p, n) => viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(p.lon, p.lat, 0),   // longitude FIRST
        point: { pixelSize: 14, color: Cesium.Color.WHITE, outlineColor: Cesium.Color.BLACK, outlineWidth: 2 },
        label: { text: `${n + 1}. ${p.name}`, font: '14px sans-serif', pixelOffset: new Cesium.Cartesian2(0, -24), showBackground: true }
      }));
      $('message').textContent = 'Virtual tour: the camera flight between stops is not a walking route.';
    } catch (e) {
      viewer = null;
      $('message').textContent = 'The globe could not start (WebGL?). The stop list still works.';
      console.error(e);
    }
  }
  show();
})();
