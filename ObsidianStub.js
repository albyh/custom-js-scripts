```dataviewjs
//2025-08-24 NOTE STUB to call views/view.js
const customTag = "EVENT" ; const entry = "views/view.js"; const input = { tagName: dv.current().reportTag || customTag , scanParagraphs: true }; try {  const src = await dv.io.load(entry); const module = { exports: null }; new Function("module","exports", src)(module, module.exports); if (typeof module.exports === "function") { await module.exports(dv, input); } else { dv.paragraph(`Loader: ${entry} did not export a function.`); } } catch (e) { console.error(e); dv.paragraph(`Loader error: ${e?.message || String(e)}`); }
```
