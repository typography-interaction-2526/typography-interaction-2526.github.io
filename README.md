# Typography & Interaction, ’25–26

Hi there. This repository is the course site for the 2025–2026 iteration of [*Typography & Interaction*](https://typography-interaction-2526.github.io):

> …a year-long, two-semester course in the [MPS Communication Design](https://mpscd.parsons.edu) program at [Parsons](https://www.newschool.edu/parsons/) / [The New School](https://www.newschool.edu). The class will provide a rigorous foundation of typographic and interaction principles in the context of digital design.

<br>

It is taught by [@mfehrenbach](https://github.com/mfehrenbach), [@rijkvanzanten](https://github.com/rijkvanzanten), and [@eli8527](https://github.com/eli8527). We are joined by [20 students](https://typography-interaction-2526.github.io/class/) this year, hailing from all over the world. (Much) more information is available in [our syllabus](https://typography-interaction-2526.github.io/syllabus/).

<br>

## Use and Re-use

In the original spirit of the open web, this repo (and the course content within) is made <samp>Public</samp> (&thinsp;[*“source available”*](https://en.wikipedia.org/wiki/Source-available_software)&thinsp;) for personal and educational, non-commercial use under the [CC BY-NC-SA 4.0 license](https://creativecommons.org/licenses/by-nc-sa/4.0/). The included fonts remain [licensed](assets/fonts/LICENSE.md) per their creators. Such as one might consider this “software,” it’s provided as-is and without any warranty. (I’ve got enough to worry about.)

**We’ve added some explanation and notes, below. We hope you can learn from it!**

<br>

## Colophon

### Type

#### *Gorton*

The site is set almost entirely in [*Gorton*](https://en.wikipedia.org/wiki/Gorton_(typeface)), inspired in no small part by [Marcin Wichary’s ode](https://aresluna.org/the-hardest-working-font-in-manhattan/) and the very city around our campus. The close symbiosis of its form to its means of production echoes a recurring theme of our course: the two are never far apart.

After “shopping” among the various [recreations](https://aresluna.org/the-hardest-working-font-in-manhattan/recreations/), we settled on [N. E. Bartgis’](https://github.com/drdnar) cut [*GortonDigital*](https://github.com/drdnar/GortonDigital) for its charm (and lowercase). Like many *Gortons*, it lacks an italic; we fake ours as you would with [a pantograph](https://en.wikipedia.org/wiki/Pantograph#:~:text=condense%2C%20extend%2C%20and-,slant%20the%20design,-%28mathematically%2C%20these%20are), with a simple [`skew()`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/transform-function/skew). (Students: *do as we say, not as we do!*&#x202F;) As we used it over the year, we’ve also added some additional characters and [tweaked it to taste](https://github.com/drdnar/GortonDigital/pull/8). This all feels appropriate to this vernacular, ever-evolving typeface.

#### *OCR-B*

For our `<code>`, we were drawn to another typeface intimately linked to its tools and technology—Adrian Frutiger’s similarly once-ubiquitous [*OCR-B*](https://en.wikipedia.org/wiki/OCR-B).

For our inline uses, we landed on [Matthew Skala’s](https://ansuz.sooke.bc.ca) diligent conversion from [the Tsukurimashou Project](https://tsukurimashou.org/ocr.php.en), which [he notes](https://tsukurimashou.org/ocr.pdf) is itself descended from [Norbert Schwarz’s work](https://www.ctan.org/tex-archive/fonts/ocr-b) dating to the 80s. Most digital interpretations were a bit heavy for extended `<pre>` use, but we serendipitously found a (perhaps now abandoned) [lighter cut](https://web.archive.org/web/20191213001441/https://wehtt.am/ocr-b/), made by [Matthew Hinders-Anderson](https://wehtt.am) for these same weight concerns. Coincidentally, Matthew’s other [non-commercial typefaces](https://wehtt.am/fonts/) are recent student (and [NYC](https://wehtt.am/#featured-work)) favorites!

<br>

### Build

You’ll need some familiarity with [the command line](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line), here!

We’re using [`pnpm`](https://pnpm.io) as our [*package manager*](https://en.wikipedia.org/wiki/Package_manager), to pull in our [build dependencies](package.json)—the various libraries the site uses. In your terminal, run `pnpm install` once in the repo directory to grab what we need!

#### *Eleventy*

Everything is assembled by [a 	static site generator (SSG)](https://en.wikipedia.org/wiki/Static_site_generator)—which takes our [source content](content/) and compiles out finished HTML, CSS, and JavaScript. We’re using [Zach Leatherman’s](https://www.zachleat.com/) sturdy and venerable [*Eleventy*](https://www.11ty.dev/) for this task.

- **For “local” development on your machine**, running `pnpm serve` in the repo directory starts *Eleventy*, which compiles everything everything to a `_site` folder. This directory is then served at `http://localhost/`. Changing any source content/files will recompile and should live reload any page in your browser, *usually* within a few seconds.

- **For “production” deployment**, the site is automatically built/served on [GitHub Pages](https://docs.github.com/en/pages), via [an action/workflow](.github/workflows/build-deploy.yaml) when there are commits pushed up to our `main` branch. (This just does the local build process, but inside a [*virtual machine*](https://en.wikipedia.org/wiki/Virtual_machine)”!) This *usually* takes a [couple minutes](/actions), depending on the vagaries of GitHub [these days](https://mrshu.github.io/github-statuses/).

<br>

*More to come, here!*


<br>

✊
