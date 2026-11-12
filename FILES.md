# What’s in this folder

| Path | Use |
|---|---|
| `PROJECT_BRIEF.md` | Start here: every feature, how it’s built, how to add a venue, lessons learned, open items, ideas |
| `PROJECT_INSTRUCTIONS.md` | Text to paste into the Claude project’s instructions |
| `HISTORY.md` | What was asked and decided, in order |
| `reference/` | The GitHub-ready build (same as `D:\Delhi Binnale\redfort-map`): `index.html` (both venues), `red-fort.html`, `purana-qila.html`, `pois.json`, `pois-purana-qila.json`, `README.md`, `panos/`, `photos/` |
| `claude-artifact-source/combined/` | Source of the claude.ai “Biennale Fort Maps” artifact (page + both data files) |
| `claude-artifact-source/red-fort-only/` | Source of “Red Fort Biennale Map” (`LOCKED_VENUE = 'red-fort'`) |
| `claude-artifact-source/purana-qila-only/` | Source of “Purana Qila Biennale Map” (`LOCKED_VENUE = 'purana-qila'`) |

The claude.ai sources have no `<!doctype>`/`<head>` (claude.ai adds them when publishing). The `reference/` files are complete pages for any web host.

The three claude.ai maps are separate artifacts; places edited there with Manage are stored per artifact and may differ from these files. Ask Claude to read the live data before relying on it.
