# Biennale with Map — Project Brief

Starting point for a new project that builds on the **Biennale Fort Maps** (Red Fort + Purana Qila) made for **The India Biennale ’26** (Delhi, 4 Dec 2026 – 21 Mar 2027). Any new map or venue should keep every feature below unless we decide otherwise.

Working copy of the current build: `reference/` (same files as `D:\Delhi Binnale\redfort-map`).

---

## 1. What exists today

| Item | Where |
|---|---|
| Both venues with a Red Fort / Purana Qila switch | `reference/index.html` (claude.ai: “Biennale Fort Maps”) |
| Red Fort only | `reference/red-fort.html` (claude.ai: “Red Fort Biennale Map”) |
| Purana Qila only | `reference/purana-qila.html` (claude.ai: “Purana Qila Biennale Map”) |
| Places data | `reference/pois.json` (Red Fort), `reference/pois-purana-qila.json` |
| GitHub-ready folder | `D:\Delhi Binnale\redfort-map` (not pushed yet) |

---

## 2. Feature inventory (keep all of these)

### Map and views
- **3D map** of each venue: rotate, zoom, top view, reset, compass (tap to face north).
- **360° view**: stand at eye level (1.7 m) at any place and drag to look around. Viewpoints are chosen automatically: open ground 35–70 m away, on a walkway, clear line of sight, facing the building’s front, never in water or against walls. Wider field of view on phones.
- **Aerial view** inside 360°: zoom out to rise up to ~300 m and pull back; dragging circles the place; “Back to ground level”.
- **360° photos**: per place, uploaded in Manage; shown at ground level, with a toggle back to the model.
- **Light and dark theme**, phone layout (bottom sheet), desktop layout (side panel).

### Places
- Categories: Gates, Palaces & monuments, Museums, Gardens, Biennale exhibits, Visitor services.
- **Icons on every pin** (18): gate, monument, museum, garden, Biennale exhibit, toilets, cafe, information, tickets/pass check, first aid, drinking water, parking, accessible, boating, exit, shop, photo spot, excavation. Facility pins are slightly larger.
- Explore list with search and category filter chips; place details with description, “At the Biennale” note, photo, and actions.

### Directions
- **Multi-stop routes**: tap pins or “Add stop”; drag ⠿ to reorder (keyboard arrows too); remove; “Find the shortest order” (nearest-neighbour + 2-opt) and “Keep my last stop last”.
- Route follows walkways (Dijkstra on a walkway graph); places attach to the nearest walkway automatically.
- Results: distance, walking time (70 m/min), per-stop legs, places passed on the way.
- **Visit every place**: one loop through all places from stop 1.

### Guided walk
- A **life-like walking guide** in Indian dress (ivory kurta and churidar, maroon Nehru jacket with buttons, stole and jhola bag in the route colour, mojari shoes; face, hair and moustache). Jointed hips, knees, shoulders and elbows give a natural gait; the guide turns along the path, points at each stop, breathes and looks around when standing.
- **Voice**: reads each stop’s name, description and Biennale note on arrival. Claude’s voice on claude.ai; the browser’s voice elsewhere (Indian English when available). Never hangs: if speech doesn’t start in ~4.5 s it switches to the device voice or carries on silently.
- Player: pause/resume, skip to next stop, **Sound on/off** (labelled), follow camera, **End walk** (labelled). “Test sound” button. Status line explains when sound can’t play.
- Tapping a pin mid-walk offers “End walk” instead of blocking.
- **Three walk views** in the player: **Map** (from above), **Follow** (camera behind the guide at life size; drag to swing around, zoom to pull back) and **Eyes** (what the guide sees, with a slight head bob).
- **Speed** button: 1×, 2×, 4×. Ground views walk at a realistic pace with matching steps.
- **Gate doors**: studded wooden doors in the archways (Lahori Gate, Delhi Gate, Naubat Khana, the three Purana Qila gates) swing open as the guide, the 360° viewer or a visitor comes near, and close after.

### Editing (Manage tab, editors only, claude.ai)
- Add a point by tapping the map, move, delete (with confirm), edit name, category, **map icon**, description, Biennale note.
- Upload a **photo** and a **360° photo** per place.
- **Save for everyone** publishes that venue’s data file only. Copy data as JSON.
- On GitHub: edit the JSON files instead.

### Live scene (“feels active”)
- Rowing boats with rowers, oars and wakes (Purana Qila lake); visitors strolling the paths (men in kurta-pyjama, women in colourful saris with pallu); bird flocks; traffic on nearby roads; garden fountains; drifting clouds; waving flags; rippling water.
- Respects “reduce motion”.

### Performance (“load fast, stay light”)
- One HTML file per map; three.js from CDN; procedural textures (no image downloads).
- All static buildings merged into a few meshes; **shadows drawn once** (static).
- Moving things are instanced and cast no live shadows.
- **Lite mode** on phones/low-power devices: fewer moving things, smaller shadow map, lower pixel density.

---

## 3. How it is built

- **Plain HTML, CSS and JavaScript** in one file. No framework, no build step, no backend, no API keys.
- **three.js 0.160.0** (MIT) via jsDelivr import map: OrbitControls, CSS2DRenderer (pins/labels), BufferGeometryUtils (merging).
- Fonts: Bricolage Grotesque, Inter, JetBrains Mono (Google Fonts, OFL).
- Coordinates: metres from the venue centre; **x east, z south**.

### Venue config (one entry per venue in `VENUES`)
```
key, name, short, file (data JSON), fallback (embedded data id)
poly        – fort wall outline [[x,z],…]
gates       – gate positions (walls skip merlons here)
lanes       – road lanes for traffic [x0,z0,x1,z1]
home        – default camera {pos, target}
entrance    – place id used for “Directions from entrance”
defaultStops, views ({placeId:'n'|'s'|'e'|'w'} preferred viewing side), noStand (water rectangles)
base, edges – walkway graph nodes and links
build()     – function that models the venue
```
`LOCKED_VENUE` turns the shared file into a single-venue map.

### Place data (`pois*.json`)
```
{ "id", "name", "cat", "icon"?, "x", "z", "desc", "note"?, "photo"?, "pano"? }
```

### Shared modelling helpers
`buildGround`, `buildWalls` (battlements, bastions, kiosks), `gate` (archway facades, towers, kiosk row, forecourt), `arcadeGeo` / `gateGeo` / `facade` / `facadeAt` (arched fronts), `chhatri`, `dome` (onion), `parapet`, `pit` (stepwells/excavations), `plantTrees`, `addFlag`, `ctxLabel`.

### Adding a new venue (checklist)
1. Wall outline, gates, home camera, roads/lanes.
2. `build` function using the helpers (main buildings, water, lawns, trees).
3. Walkway graph (`base`, `edges`) that avoids walking through buildings; hollow archways where paths pass through gates.
4. `pois-<venue>.json` with descriptions; mark approximate/example points.
5. `views` hints so 360° viewpoints face the fronts; `noStand` for water.
6. Add to the venue switch and build a single-venue version.
7. Test: overview, every 360° viewpoint, aerial, multi-stop route, guided walk (with and without sound), phone + dark mode.

---

## 4. Lessons learned
- Claude’s voice: speak each stop on arrival; don’t pause/resume a reading between stops (it can stall silently). Always have a timeout and a device-voice fallback.
- The walk must never wait on speech alone.
- Routes end on the walkway, not inside buildings.
- Paths through gates need hollow archways; otherwise the 360° camera passes through walls.
- Real photos must be owned or licensed; external images can’t load inside claude.ai artifacts.
- Edits on claude.ai are stored per artifact; GitHub pages share one set of data files.

## 5. Open items
- Positions are approximate and buildings simplified; descriptions need a fact-check.
- Example points (info desk, exhibit spots, toilets, cafe, parking) to replace with real ones.
- Real photos / 360° photos to add.
- Test on real phones, the kiosk and with sound.
- Push to GitHub (or choose official hosting) and make links public.
- Decide whether claude.ai maps should share data.

## 6. Ideas for the new project (to discuss)
- More venues from the Biennale site (National Gallery of Modern Art, Qutub Minar, others).
- Hindi (and other languages) for text and voice.
- QR codes per venue/place; kiosk mode (auto-reset, large buttons).
- Event schedule and “what’s on now” per venue; Biennale Pass info.
- Accessibility routes (step-free), crowd or opening-hours information.
- Offline/PWA version with three.js and fonts bundled.
