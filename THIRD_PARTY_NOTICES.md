# Third-Party Notices

This project uses third-party software and services. Each component is licensed by its respective authors under the terms listed below.  
All trademarks and copyrights remain the property of their respective owners.

> **Note:** If you redistribute the bundled libraries (e.g., via the `/vendor/` folder), you must comply with their licenses (including preserving required copyright and license notices).


## Bundled in `/vendor/`

These files are shipped with the repository/website as local dependencies.

- **SheetJS (Community Edition)** — `vendor/xlsx.full.min.js`  
  License: **Apache-2.0**

- **jsPDF** — `vendor/jspdf.umd.min.js`  
  License: **MIT**

- **Proj4js** — `vendor/proj4.js`  
  License: **MIT**

- **GeographicLib (JavaScript)** — `vendor/geographiclib.min.js`  
  License: **MIT/X11**


## Loaded via CDN / External Services (not bundled)

These resources may be loaded at runtime:

- **Font Awesome Free** (icons/CSS)  
  Licenses: **CC BY 4.0** (icons), **SIL OFL 1.1** (fonts), **MIT** (code)

- **Google Fonts** (font delivery)  
  Font licenses: **SIL OFL 1.1**  
  Fonts used: **Inter**, **JetBrains Mono**


## License Texts

Where required by upstream licenses, include the full license texts with your distribution. Recommended approaches:

- Keep a copy of each license text under a `/licenses/` folder (e.g., `licenses/PROJ4JS.txt`, `licenses/JSPDF.txt`, etc.), **or**
- Store them alongside vendor assets (e.g., `vendor/PROJ4JS.LICENSE.txt`).

If a license text is not currently included in your repo, obtain it from the upstream project’s LICENSE/NOTICE files for the exact versions you use.
