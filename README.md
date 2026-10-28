# Character Prompt Studio

A browser-based character, clothing, outfit, and scene prompt builder.

## GitHub Pages

All application files are at the repository root. No build or dependencies are required.
In repository Settings > Pages, choose Deploy from a branch, main, /(root), and Save.
The .nojekyll file disables Jekyll processing.

Open the published URL in Safari on iPhone. Use Share > Add to Home Screen for quick access.

## Your saved work

Characters, closet items, outfits, and scenes are saved in browser local storage.
They are not uploaded to GitHub and do not automatically sync between devices.
Use Backup & restore to export a JSON backup from the old local version and import
it on the published site. Keep personal backup files outside this repository.

## Local use

Open index.html in a desktop browser, keeping the JavaScript and CSS files beside it.

## Character presets

In Presets & saved, choose a categorized preset and Load character & closet. The starter
library includes four adult K/DA adaptations with POP/STARS and ALL OUT wardrobes,
plus eight adult The Witcher adaptations with classic and alternate starter looks.
Resident Evil adds twelve adult profiles and twenty-six game-labeled wardrobes: Jill,
Claire, Ada, Leon, Chris, Rebecca, Sheva, Carlos, Wesker, Ashley, adult Sherry, and
Lady Dimitrescu. Outfit eras share the selected adult identity and hairstyle.
The Witcher category includes second-game wardrobes for Geralt, Triss and Dandelion.
Starting-look names identify The Witcher 2 or The Witcher 3. Loading an existing preset
or opening its preset closet adds missing starter looks while preserving edited
identities, existing garments and outfits. Known original Witcher preset shoes also
receive the requested heel corrections: Ciri/Yennefer 7–9 cm, and Triss’s second-game
boots 4–6 cm wedges. Custom heel overrides are preserved.
The first load adds a character and its detailed garments to this browser only.
Later loads reuse the saved character; Create a fresh copy preserves edited versions.
Detailed physical traits are editable in Face. Known-character names
remain library labels; generated prompts use explicit descriptive features and
photorealistic rendering instructions. Source artwork links are listed in each preset.


## Appearance

Use Theme in the top navigation to choose Workshop (blue), Forest, Midnight, Plum,
Burgundy, Slate, or Paper (light), and optionally choose a custom accent using the color wheel.
Text contrast adjusts automatically. Preferences persist in this browser and are
independent of character data, clothing colors, and project backups. Restore original
colors returns to the Workshop theme.

## Studio layout

The responsive studio uses category navigation, a focused editor, and a persistent
prompt panel on desktop. On phones, use the horizontal categories or Menu drawer;
Prompt opens the full prompt sheet and Copy remains available at the bottom.
Garment cards show their selections when collapsed. All garment details and randomizer
locks remain available in their advanced sections. Color swatches and attribute chips
operate the original controls. Theme choices and custom accent preferences are retained.

Use Presets & saved > My saved characters to save and load. Quick builder, saves, and
Backup & restore are also accessible through the Menu drawer. Closet, Scenes, and Tools
retain their own editors, prompt views, and existing saved-data formats.


## Cat o nine poses

Pose & expression > Cat o nine includes fifteen cat-o’-nine-tails whip poses,
with a short handle and nine flexible leather tails. The category appears
immediately after Riding crop. “Cat o nine — crossed legs, looking back”
keeps the original straight crossed-leg stance and shoulder turn, with the whip
held behind the lower back. These replace the previously named braided crop
poses at the same numeric IDs, preserving saved character and scene selections.


## Soles in focus

Pose & expression > Soles in focus contains 20 full-body poses with visible
shoe soles, including feet on a desk, chair/sofa/ottoman rests, floor poses,
steps, a walking sole reveal and a supported low kick. Shoes stay sharp in the
foreground; the more distant body is gently softened while the face, eyes and
expression remain recognizable. Both complete shoes and the full character stay
in frame. Camera & style > Camera angle preset > Soles in focus applies the
same treatment to other poses. These rules take priority over shoe close-up
framing; character POV in Scenes retains its existing priority. Existing pose
IDs are preserved, and Scenes supports the new category too.

Scenes has its own Camera & style navigation section for the scene camera preset,
additional direction, image style, lighting and mood. Location & story contains
the background and scene description. On phones, open Menu to choose a section.


## Prompt length

Generated prompts default to Compact. Prompt length next to the character count
switches between Compact and Detailed across the builder, Closet, Scenes and
reference sheets. Compact shortens repeated generated framing, shoe-focus and
rendering instructions while preserving character identity, clothing specifications,
pose geometry and custom text. Detailed restores the original generated text.
Copy and export use the displayed version; saved history keeps its original text.
The preference is saved locally and does not change character or outfit data.


## Image orientation

Camera & style in the builder and Scenes includes Portrait (2:3), Landscape (3:2),
and Square (1:1). The prompt includes the selected canvas shape and width:height
aspect ratio in both Compact and Detailed modes. Orientation is saved with the
character or scene, independently of the camera angle and full-body/POV framing.
Surprise me keeps the selected orientation. Existing saves default to Portrait.


## Scene workflow

Scenes uses three freely editable steps: Cast & outfits, Scene & actions, and
Camera & style. Choose a saved outfit first; individual items are optional
refinements. Location, story, optional props and character actions are together.
Camera settings and per-character framing/POV are together. Next and Back guide
a new scene; the stepper and sidebar jump directly to any step. No step blocks
navigation. Review scene opens an overview with Edit links for each selection.
Save scene updates the loaded scene, or creates a named scene for a new draft.
Saved scenes holds loading and library actions. New scene includes Undo, which
restores the previous draft even after a reload. Draft settings, selected
character and editing context are retained as you move between steps.


## Closet layout

The Closet has three views: Saved clothes, Clothing designer, and Outfits.
Saved clothes uses the full workspace for category/search/favorites cards; picking
an item opens its editor. Create clothing starts a fresh designer draft. The
designer keeps naming, garment settings and saving together, with optional names,
tags and copying tools folded away. Outfits starts with saved looks and clickable
piece slots; the clothes picker opens when a slot is chosen. Randomize outfit
is an action inside Outfits. Layer/accessory and filtering tools stay available
in compact drawers. Saved data and garment detail controls are unchanged.
