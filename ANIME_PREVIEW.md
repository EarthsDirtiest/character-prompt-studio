# 2D preview prototype

Open Character builder > 2D preview. A · Casual loads the specified adult female base with fair skin, blue eyes, shoulder-length brown hair, a white T-shirt, blue jeans, and white sneakers. B · Elegant and C · Alternative are the other requested test looks. These buttons explicitly change the current builder draft. Opening the preview alone does not change a character.

## State and integration

There is no separate preview configuration or storage key. Thumbnails update the existing hairType/hairLength, top, bottom, shoes, and related detail fields through characterStudio.apply(). Color swatches update the existing enabled color overrides; Use clothing palette switches the relevant override off. Skin uses face_skinTone and its existing enable checkbox. Builder edits, saved-character loads, and palette changes update the illustration through the existing prompt update signal. Saved character and backup formats are unchanged, and the prompt algorithm is unchanged.

## Artwork and layers

anime-assets.js contains original reusable SVG path assets in a shared 320 × 760 coordinate system. The supplied images were used as visual inspiration; their artwork was not extracted. All five hair sets, five tops, five bottoms, and five shoe sets share the same body anchors and outline/shading conventions.

Drawing order is back hair, base body, face, bottom clothing, top clothing, footwear, front hair. Hair has separate back/front pieces. Clothing and footwear replace their own layer; the body geometry never moves. Thumbnails use the same paths and colors with a cropped viewBox. SVG custom properties provide base colors and simple calculated shadows/highlights. No image-generation service, canvas dependency, or 3D engine is used.

Useful anchors: head center x160/y105; shoulders y180; waist y325; knees around y520; ankles y685; floor y720. Footwear is drawn over trouser legs to represent tucked trousers. The underlying base includes simple modesty coverage that remains behind the selected garments.

## Adding an item

1. Add a labeled path group to the appropriate registry in anime-assets.js, using the existing coordinates and CSS color tokens.
2. Add the matching existing builder values in anime-preview.js choices. Halter top, for example, uses Tank top plus the existing Halter neck detail.
3. Extend read() to recognize the new supported selection. Unknown source choices must remain clearly marked as approximations rather than silently changing the builder.
4. Review the same asset in both its thumbnail crop and full-body composition. Test it against all other categories and both light/dark colors.

## Current limits

Only one adult female body, a front view, and a fixed neutral standing pose are drawn. Build, sex, ancestry, facial geometry, makeup, expression, accessories, fabric/material, garment measurements, and arbitrary poses are not fully visualized. Eye colors are mapped to simple iris colors. Unsupported garments/hair styles use a labeled closest approximation; existing detailed prompt fields remain fully functional.

Boots have a small visible block heel; pumps have a visible narrow high heel. Height is illustrative, not a centimeter-accurate rendering of every existing heel control. Feet and ankles do not articulate when shoes change. Jeans/trousers use a close fit; boot shafts draw over them. Additional layers, long dresses, or wide trousers will need explicit occlusion/masking rules. Skin options tint the entire body/face through shared color tokens.

## Verification

- Requested Casual, Elegant, and Alternative combinations reviewed as exported SVG renders.
- Contact sheet visually reviewed for all 20 interchangeable options.
- All 125 top/bottom/footwear combinations rasterized: complete, nonempty silhouettes with no clipping at the canvas boundary. This test does not replace visual compatibility review.
- All supported options and color groups exercised through the existing state adapter; browser checks confirmed actual SVG fills, live prompt updates, and 20 illustrated thumbnails.
- Desktop, tablet, and phone layout checks: no horizontal document overflow; the phone figure remains visible while choosing clothing. Browser screenshot capture was unavailable during this run, so art was also reviewed through direct SVG rasterization.
- Original 279 controls retained; eight pre-redesign prompt baselines still match exactly; save/reload and backup compatibility verified.
- This is buildless static HTML/JS/CSS: no install/build step. Syntax and local asset references checked.

## Scaling assessment

This is a useful foundation for a larger fixed-body illustration wardrobe. Hundreds of options would need an asset manifest, lazy loading/caching, per-layer updates, reusable SVG symbols, stronger garment coverage/masking rules, and a visual combination regression suite. Multiple bodies or poses require additional fitted assets or a rigging/deformation approach and substantially more art QA. Extending the current path list alone would not solve those requirements. Keep this version limited until its visual direction is accepted.
