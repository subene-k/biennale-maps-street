# Biennale Fort Maps — real map edition

Walking maps of the Red Fort and Purana Qila for The India Biennale '26, drawn on a real, scrollable map of Delhi (OpenStreetMap). Visitors can pan anywhere in the city; the two forts are marked and modelled in 3D on top.

| File | What it is |
|---|---|
| `index.html` | Both venues with a Red Fort / Purana Qila / Both switch (`index.html#purana-qila`, `#both`). |
| `red-fort.html` | Red Fort only. |
| `purana-qila.html` | Purana Qila only. |
| `pois.json`, `pois-purana-qila.json` | Places. Now in real coordinates (`lat`, `lng`). `pos: "osm"` = position taken from OpenStreetMap, `"approx"` = estimated, confirm on site. |

## Features
- Real map (OpenFreeMap vector tiles, OpenStreetMap data), satellite view (Esri World Imagery), light/dark, phone layout, locate-me.
- Fort outlines, 3D walls with battlements, gatehouses with an open archway, palaces drawn from their real OpenStreetMap outlines (red sandstone / marble).
- 18 pin icons, explore list, search and filters, place details.
- Multi-stop routes on real walkways (OpenStreetMap paths, plus open ground inside the walls when no path is mapped), drag to reorder, shortest order, keep last stop, visit every place. Long legs between venues use the free OSM foot router.
- Guided walk with the walking figure, voice (with fallback, Sound on/off, Test sound), skip, pause, End walk. Views: Map, Follow, **Walker's eyes** (eye-level, 1.7 m, looking where the walker looks).
- **Eye level / look around** at any place: drag to look, tap the ground or use the arrows to walk, Rise up for an aerial view.
- **Walk through the gate**: doors swing open and you walk through the gateway at eye level. The guided walk does the same at every gate it passes.
- **Street View**: button on each place, in eye-level mode, and a Street View mode (tap anywhere on the map). Opens Google Street View in a new tab (free, no key). Mapillary link too.
- 360° photos per place (`pano` field), shown with "Step inside" after the door animation.
- Live scene: visitors on the paths, traffic on nearby roads, boats on the lake when a lake is mapped. Respects reduce motion; Live button to turn off.
- **Manage** tab (shown when the page is opened from this folder, or on a website with `?manage`): add a point, choose a point to edit, name, category, map icon, description, Biennale note, photo, 360° photo, move on map (tap or drag the pin), delete, copy data as JSON. **Save for everyone** writes the places into `pois.json` / `pois-purana-qila.json`, the photos into `photos/` and `panos/`, and updates the copy built into the three pages (Chrome or Edge ask you to choose this folder once). Other browsers download the JSON instead. Publish the folder to update the live site.
- **My location**: “Start from my location” in Directions routes from where you are (even from outside the fort). “I’m here — guide me as I walk” follows the phone’s GPS: the guide reads each place when you reach it, gates open as you pass, and the route is re-planned if you leave it. Location needs the site to be opened over https (GitHub Pages) or from a file; phones ask for permission.

## Kiosk (55–65" touchscreen)
- Open `index.html?kiosk` (or `purana-qila.html?kiosk`): welcome screen over the live 3D map, **Explore the Biennale**, exhibition highlights, QR code to continue on a phone, English / हिन्दी, large touch targets, no Street View links, full screen on first touch, resets after 120 s without a touch (`&idle=90` to change).
- **You are here**: Manage › Kiosk › Set this kiosk’s location (saved on that kiosk), or add `&here=28.60895,77.24205` to the kiosk address. Every route starts there.
- **Welcome visual**: set `WELCOME_IMAGE` in the page to the approved AI-generated Purana Qila image (e.g. `images/purana-qila.jpg`); until then the welcome screen shows the live 3D map slowly circling the fort.
- **Offline**: on the published https site, Manage › Offline › Download for offline use saves pages, places, photos, map tiles and libraries (via `sw.js`), so the kiosk keeps working if the internet drops. Opening from a file does not support this.
- **Analytics**: Manage › Visitor analytics shows sessions, most viewed exhibits, most asked-for directions, walks and language use on that device; Export CSV from each kiosk to combine.
- Exhibits have numbers (E01…), artist, Hindi name / description / note, more photos, a video, “highlight” and “hide from visitors” options (all in Manage). Pins show the number, and a ✓ once visited.

## Notes
- Needs internet: MapLibre GL 5.13.0 (BSD-3) from unpkg, tiles from tiles.openfreemap.org, fonts from Google Fonts.
- Double-clicking `index.html` works (it uses the copy of the places built into the page). To test edits to the JSON files, run `python -m http.server 8000` here and open http://localhost:8000.
- Red Fort wall line is approximate (OpenStreetMap does not map it); Purana Qila walls follow the OpenStreetMap outline. Example points are placeholders.
- Satellite imagery is Esri's; check Esri's terms before an official public launch, or switch `SAT_TILES` to another provider.
- Does not run inside a claude.ai artifact: the artifact viewer blocks map tile downloads. Host on GitHub Pages or any web server.
- Attribution (© OpenStreetMap contributors, OpenFreeMap, Esri) is shown on the map; keep it.
