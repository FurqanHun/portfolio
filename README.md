# Portfolio v3 (Still Work in Progress!)

This is an upgrade to my personal portfolio site originally written in HTML, CSS, and JS. The old version had a big ass CSS file of about 900+ lines and messy HTML—`project.html` gave me trauma every time I had to update it. I ain't a fan of Bootstrap (it was good, but not my cup of tea). 

For **v2**, the site shifted to HTMX, Tailwind (still not my cup of the tea tbh), and pure JS. I was pulling project data from a `.csv` using PapaParse. 

Now for **v3**, we went full static with **Eleventy (11ty)**. Dumped HTMX and PapaParse completely cause loading all that stuff client-side was kinda wack. Shit's way faster now. I also swapped the `.csv` out for a native `.json` data source. At least there's no 900 lines of CSS anymore and everything is properly chunked into different HTML files. It makes it way easier to maintain and update without losing my mind. I don't wanna get into the backend yet, so purely static HTML it is.

_I tried saving the og by removing the html content i didn't needed and removing useless css but it was just better to shift. The site's more responsive now and doesn't act weirdly at breakpoints btw._

## Dependencies

The project relies on [Eleventy (11ty)](https://www.11ty.dev/) for fast, static site generation.

Versions are listed in `package.json`. The site uses a build step `npm run build` or `npm run start` to process the Tailwind CSS and dynamically generate the static HTML into the `_site/` directory via Eleventy.

## Disclaimer
**All brand icons, logos, and trademarks used in this repository and on the live site belong to their respective owners.** I do not claim ownership of any of the third-party logos or icons (e.g., from Icons8, Wikimedia, etc.) present in the `Assets/` directory. They are used purely for illustrative purposes to represent technologies, skills, or tools.
