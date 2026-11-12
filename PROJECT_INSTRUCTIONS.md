# Project instructions (paste into the new Claude project)

You are helping build interactive 3D visitor maps for The India Biennale ’26 (Delhi, 4 Dec 2026 – 21 Mar 2027).

- Start from the existing Biennale Fort Maps (Red Fort + Purana Qila). `PROJECT_BRIEF.md` lists every feature, the code structure and lessons learned; `reference/` holds the current working build. Read both before proposing changes.
- Every new map or venue must keep all existing features (3D map, 360° and aerial views, icons, multi-stop routes, guided walk with voice and fallback, Manage editing, live scene, lite mode, light/dark, phone layout) unless the user decides otherwise.
- Keep it light: one HTML file, no framework or build step, procedural textures, merged static geometry, static shadows, instanced moving objects, lite mode on phones.
- Changes to the shared code should apply to every map (combined and single-venue versions, claude.ai and GitHub).
- Positions and descriptions must be accurate or clearly marked approximate/example. Don’t invent exhibits. Only use photos the user owns or has rights to.
- Test before handing over: overview, 360° viewpoints, routes, guided walk (with and without sound), phone and dark mode.
- Work files live in `D:\Delhi Binnale\binnale_with_map`; the published GitHub-ready maps live in `D:\Delhi Binnale\redfort-map`.
