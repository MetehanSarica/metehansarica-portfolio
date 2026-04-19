<div align="center">

# `// metehansarica.dev`

**A data-dense, performance-first personal portfolio.**
_Built lean. Shipped static. Cloud-skeptical._

[![Live Site](https://img.shields.io/badge/LIVE-metehansarica.dev-4F46E5?style=for-the-badge&labelColor=000000)](https://metehansarica.dev)
[![Repository](https://img.shields.io/badge/REPO-GitHub-1F2937?style=for-the-badge&logo=github&labelColor=000000)](https://github.com/MetehanSarica/metehansarica-portfolio)
[![Deploy](https://img.shields.io/badge/DEPLOY-Netlify-00C7B7?style=for-the-badge&logo=netlify&labelColor=000000)](https://metehansarica.dev)

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-0F172A?style=flat-square&logo=tailwindcss&logoColor=38BDF8)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![i18n](https://img.shields.io/badge/i18n-TR_|_EN-4F46E5?style=flat-square)

</div>

---

> [!NOTE]
> **Design doctrine:** ship the smallest artifact that does the job, and let the user's machine do the rest.
> Performance-first. Offline-capable. Minimal cloud reliance.

---

## `§ 01 — Architecture & Philosophy`

A single-page portfolio organized as a **Bento-box grid** — each cell is a self-contained module (bio, stack, projects, contact) sized by information weight rather than visual symmetry.

No parallax. No scroll-jacking. No hero video.

The UI is a deliberate exercise in **Brutalist Indigo**:

- Deep purple palette on a near-black canvas
- Hard `1px` high-contrast borders
- Monospace typography throughout
- Terminal-adjacent chrome and section markers
- Content density prioritized over whitespace

#### Bilingual Structural Sync

The site is fully bilingual (`TR` / `EN`) via i18n. Both locales are **structurally synchronized** — every key, section, and metadata block exists in parity across locales, validated at build time. English is not layered on top of Turkish; they are siblings.

```
locales/
├── tr/   ─ primary
└── en/   ─ structural mirror, validated
```

---

## `§ 02 — Tech Stack`

| Layer      | Tool                          | Rationale                          |
| :--------- | :---------------------------- | :--------------------------------- |
| Framework  | `Next.js`                     | Static export, zero runtime bloat  |
| Styling    | `Tailwind CSS`                | Utility-first, purged at build     |
| Language   | `TypeScript`                  | Typed contracts, compile-time gate |
| i18n       | Static locale trees           | No runtime translation fetches     |
| Deploy     | `Netlify`                     | Edge-cached static output          |

**Not used:** analytics SDKs · tracking pixels · runtime third-party APIs.

---

## `§ 03 — Featured Projects`

Each project showcased on the live site links to its own repository.

<table>
<tr>
<td width="50%" valign="top">

### `Saku Kaze`
Offline, blazingly fast text editor.
Local-first. Zero telemetry.

`Rust` · `Svelte` · `Tauri`

</td>
<td width="50%" valign="top">

### `S.A.K.U.`
Localized, futuristic AI assistant.
Runs entirely on-device.

`Python` · `Ollama` · `Llama 3.2`

</td>
</tr>
<tr>
<td width="50%" valign="top">

### `Notoid`
AI-powered study assistant and document extractor.

`Document AI` · `NLP`

</td>
<td width="50%" valign="top">

### `Storiva`
Smart stock and product management system.

`Inventory` · `Analytics`

</td>
</tr>
</table>

---

## `§ 04 — Local Development`

> [!IMPORTANT]
> Requires `Node.js ≥ 18` and `npm`.

```bash
# clone
git clone https://github.com/MetehanSarica/metehansarica-portfolio.git
cd metehansarica-portfolio

# install dependencies
npm install

# start dev server → http://localhost:3000
npm run dev

# production build (static export)
npm run build
```

#### Project Structure

```
.
├── public/          ─ static assets
├── src/
│   ├── app/         ─ next.js app router
│   ├── components/  ─ bento modules
│   ├── locales/     ─ tr / en trees
│   └── styles/      ─ tailwind config
├── next.config.js
└── tailwind.config.ts
```

---

## `§ 05 — Build Status`

```
  build     ─ static
  render    ─ client-light
  deps      ─ minimal
  analytics ─ none
  status    ─ shipped
```

---

## `§ 06 — Links`

<div align="left">

[![GitHub](https://img.shields.io/badge/GitHub-@MetehanSarica-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/MetehanSarica)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/<your-handle>)
[![Website](https://img.shields.io/badge/Web-metehansarica.dev-4F46E5?style=for-the-badge&logo=vercel&logoColor=white)](https://metehansarica.dev)

</div>

---

<div align="center">

`— Metehan Sarıca`

<sub>Built with discipline. Deployed without ceremony.</sub>

</div>
