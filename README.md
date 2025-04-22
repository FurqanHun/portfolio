# Portfolio v2 (Still Work in Progress!)

This is an upgrade to my personal portfolio site originally written in HTML, CSS, and JS. The old version had a big ass CSS file of about 900+ lines and messy HTML—`project.html` gave me trauma every time I had to update it. I ain't a fan of Bootstrap (it was good, but not my cup of tea). Now the site has shifted to HTMX, Tailwind (still not my cup of the tea), and pure JS. At least there's no 900 lines of CSS and everything merged into one or more HTML files. It will make it much easier to maintain and update. I don't wanna get into the backend yet, so pure JS it is and also yes i am using .csv as a data source.

_I tried saving the og by removing the html content i didn't needed and removing useless css but it was just better to shift. The site's more responsive now and doesn't act weirdly at breakpoints btw._

## Vendor JS

The following libraries are included in `/vendors/` as minified standalone files:

- [htmx](https://unpkg.com/htmx.org@2.0.4/) (`vendors/htmx.min.js`) – version 2.0.4
- [PapaParse](https://unpkg.com/papaparse@5.5.2/) (`vendors/papaparse.min.js`) – version 5.5.2

Versions are also listed in `package.json` for reference only. The site does **not** use npm or a build step for JS. npm is only used to build Tailwind CSS.
