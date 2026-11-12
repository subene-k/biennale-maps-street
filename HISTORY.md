# How the Biennale Fort Maps came together

A record of what was asked and decided, in order, so a new chat can pick up the reasoning without the original conversation.

| # | Request | Outcome |
|---|---|---|
| 1 | 3D map of the Red Fort with all tourist places, point-to-point routes, for Biennale visitors | Free, self-managed 3D model (no map service or API keys); places with descriptions; walkway routing; editors can manage points |
| 2 | Users on mobile and kiosk; must be free and directly manageable | Responsive layout; Manage tab for editors; data in `pois.json` |
| 3 | How to share | claude.ai Share menu; public link needs org setting; later GitHub Pages |
| 4 | Multiple stops, not just A to B | Multi-stop list, shortest order, keep last stop, full tour |
| 5 | Drag to reorder; speak each place while moving with mute; second view as 360 | Drag handles; narrated guided walk with mute; 360° ground view; 360° photo upload |
| 6 | Push to GitHub; guide step by step | Standalone files in `D:\Delhi Binnale\redfort-map`; GitHub Pages steps (push pending) |
| 7 | Voice stopped after first stop; aerial view on zoom out; 360 too close to buildings | Speech fixes; aerial view with orbit; smarter viewpoints; hollow archways; routes end on walkways |
| 8 | Questions: language, data source, map source, APIs, limits | Plain HTML/JS + three.js; hand-written data; hand-built model; no external APIs; limits documented in PROJECT_BRIEF |
| 9 | No sound, speaker flips to mute | Never auto-mute; labelled Sound on/off; status line; Test sound; skip |
| 10 | Walk didn’t move, no sound | Walk no longer waits on speech; timeout and device-voice fallback |
| 11 | More realistic buildings; a walking person instead of a dot | Textured sandstone/marble, arches, domes, battlements, flag; walking guide figure; place photos |
| 12 | Add Purana Qila with all features; icons for toilets, cafe, etc. | Second venue with switch; 18 pin icons; icon picker in Manage |
| 13 | “End the walk” message with no visible option; three shareable maps | End walk action in message and player; combined + Red Fort only + Purana Qila only |
| 14 | Make the lake boats move and the scene feel alive, but keep it light; changes apply to all maps | Boats, visitors, birds, traffic, fountains, clouds; static shadows; lite mode; all three maps updated |
| 16 | A view of the person walking and what they see, with doors opening | Follow and Eyes walk views, speed control, gate doors that swing open |
| 17 | Make the walking person realistic, in Indian dress, not robotic | Jointed guide in kurta, Nehru jacket and churidar with natural gait; visitors in kurta-pyjama and saris |
| 15 | New project folder to continue | `D:\Delhi Binnale\binnale_with_map` with brief, instructions, history, reference build and claude.ai sources |

## Standing preferences from the user
- Keep every existing feature in new maps.
- Keep it light and fast to load.
- Any change to the shared code should reach all maps.
- Separate shareable maps per venue as well as a combined one.
