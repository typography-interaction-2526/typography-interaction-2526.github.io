# Typography & Interaction, ’25–26

Hi there. This repository is the course site for the 2025–2026 iteration of [*Typography & Interaction*](https://typography-interaction-2526.github.io):

> …a year-long, two-semester course in the [MPS Communication Design](https://mpscd.parsons.edu) program at [Parsons](https://www.newschool.edu/parsons/) / [The New School](https://www.newschool.edu). The class will provide a rigorous foundation of typographic and interaction principles in the context of digital design.

<br>

It is taught by [@mfehrenbach](https://github.com/mfehrenbach), [@rijkvanzanten](https://github.com/rijkvanzanten), and [@eli8527](https://github.com/eli8527). We are joined by [20 students](https://typography-interaction-2526.github.io/class/) this year, hailing from all over the world. (Much) more information is available in [our syllabus](https://typography-interaction-2526.github.io/syllabus/).

<br>

## Use and Re-use

In the original spirit of the open web, this repo (and the course content within) is made <kbd>Public</kbd> (&thinsp;[*“source available”*](https://en.wikipedia.org/wiki/Source-available_software)&thinsp;) for personal and educational, non-commercial use under the [CC BY-NC-SA 4.0 license](https://creativecommons.org/licenses/by-nc-sa/4.0/). The included fonts remain [licensed](assets/fonts/LICENSE.md) per their creators. Such as one might consider this “software,” it’s provided as-is and without any warranty. (I’ve got enough to worry about.)

**We’ve added some explanation, notes, and loads of links (as is custom), below. We hope you can learn from it!**

<br>

## Type

### *Gorton*

The site is set almost entirely in [*Gorton*](https://en.wikipedia.org/wiki/Gorton_(typeface)), inspired in no small part by [Marcin Wichary’s ode](https://aresluna.org/the-hardest-working-font-in-manhattan/) and the very city around our campus. The close symbiosis of its form to its means of production echoes a recurring theme of our course: the two are never far apart.

After “shopping” among the various [recreations](https://aresluna.org/the-hardest-working-font-in-manhattan/recreations/), we settled on [N. E. Bartgis’](https://github.com/drdnar) cut [*GortonDigital*](https://github.com/drdnar/GortonDigital) for its charm (and lowercase). Like many *Gortons*, it lacks an italic; we fake ours as you would with [a pantograph](https://en.wikipedia.org/wiki/Pantograph#:~:text=condense%2C%20extend%2C%20and-,slant%20the%20design,-%28mathematically%2C%20these%20are), with a simple [`skew()`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/transform-function/skew). (Students: *do as we say, not as we do!*&#x202F;) As we used it over the year, we’ve also added some additional characters and [tweaked it to taste](https://github.com/drdnar/GortonDigital/pull/8). This all feels appropriate to this vernacular, ever-evolving typeface.

### *OCR-B*

For our `<code>`, we were drawn to another typeface intimately linked to its tools and technology—Adrian Frutiger’s similarly once-ubiquitous [*OCR-B*](https://en.wikipedia.org/wiki/OCR-B).

For our inline uses, we landed on [Matthew Skala’s](https://ansuz.sooke.bc.ca) diligent conversion from [the Tsukurimashou Project](https://tsukurimashou.org/ocr.php.en), which [he notes](https://tsukurimashou.org/ocr.pdf) is itself descended from [Norbert Schwarz’s work](https://www.ctan.org/tex-archive/fonts/ocr-b) dating to the 80s. Most digital interpretations were a bit heavy for extended `<pre>` use, but we serendipitously found a (perhaps now abandoned) [lighter cut](https://web.archive.org/web/20191213001441/https://wehtt.am/ocr-b/), made by [Matthew Hinders-Anderson](https://wehtt.am) for these same weight concerns. Coincidentally, Matthew’s other [non-commercial typefaces](https://wehtt.am/fonts/) are recent student (and [NYC](https://wehtt.am/#featured-work)) favorites!

<br>

## Build

You’ll need some basic familiarity with [the command line](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line), here!

We’re using [`pnpm`](https://pnpm.io) as our [*package manager*](https://en.wikipedia.org/wiki/Package_manager), to pull in our [build dependencies](package.json)—the various libraries the site uses. In your terminal, run `pnpm install` once in the repo directory to grab what we need!

### *Eleventy*

Everything is assembled by [a static site generator (SSG)](https://en.wikipedia.org/wiki/Static_site_generator)—which takes our [source content](content/) and compiles out finished [HTML](https://typography-interaction-2526.github.io/topic/html/), [CSS](https://typography-interaction-2526.github.io/topic/css/), and [JavaScript](https://typography-interaction-2526.github.io/topic/javascript/). We’re using [Zach Leatherman’s](https://www.zachleat.com/) sturdy and venerable [*Eleventy*](https://www.11ty.dev/) for this task.

- **For “local” development on your machine:** running `pnpm serve` in the repo directory starts *Eleventy*, which compiles everything everything to a `_site` folder. This directory is then served at `http://localhost/`. Changing any source content/files will recompile and should live reload any page in your browser, *usually* within a few seconds.

- **For “production” deployment:** the site is automatically built/served on [GitHub Pages](https://docs.github.com/en/pages), via [an action/workflow](.github/workflows/build-deploy.yaml) when there are commits pushed up to our `main` branch. (This just does the local build process, but inside [a *virtual machine*](https://en.wikipedia.org/wiki/Virtual_machine).) This *usually* takes [a couple minutes](https://github.com/typography-interaction-2526/typography-interaction-2526.github.io/actions), depending on the vagaries of GitHub [these days](https://mrshu.github.io/github-statuses/).

<br>

### Some other “advanced” (and possibly clever) things to note

There is [a *long* year year](https://github.com/typography-interaction-2526/typography-interaction-2526.github.io/commits) of work, adjustments, and noodling in here—and [an elaborate config file](/eleventy.config.js) to match. But some specific things to call out:

- Our templating is done in Zach’s scrappy, experimental [*WebC*](https://www.11ty.dev/docs/languages/webc/) language, which we love! This gives us some basic compilation logic, via HTML `webc:` attributes, that *Eleventy* then uses to put our pages together when built.

	We prefer this over [*Liquid*](https://www.11ty.dev/docs/languages/liquid/) primarily for its all-in-HTML syntax, and JavaScript extensibility! And are still rooting for it.

- Our base templates are in [`/layouts`](/layouts/), with some re-used/structured [blocks inside](/layouts/blocks/). With our… let’s say, “non-traditional” [site structure](https://typography-interaction-2526.github.io), individual page [`article.webc`](/layouts/article.webc) are looped through [`pages.webc`](/layouts/blocks/pages.webc) to make our endless vertical “stacked” list on each page.

- WebC also gives us “only on build” scripts via `<‍script webc:setup>`, like [a `getDescription` function](layouts/base.webc#L3-L22) for specifying metadata from within our content, or other [localized](components/figure.webc#L2) [one-off](layouts/blocks/header.webc#L2-L19) [things](layouts/blocks/menu.webc#L2-L4) you don’t want to promote as global functions/filters. You have to remember to `export`, though!

	For folks familiar with [*Astro*](https://astro.build/), this reminded us a lot of their Node-side [“component scripts”](https://docs.astro.build/en/basics/astro-components/#the-component-script) paradigm.

- We also use its `<style webc:scoped>` for some block/component-specific styles, [in-situ](layouts/blocks/header.webc#L12). It’s worth noting some quirks here though:

	- Since they’re in-template, style changes will only update with a rebuild—and depending on what they’re used for (ex: something on every page), this makes them much less ergonomic than using separate stylesheets (which quickly live-reload).

	- It did not like the recent [`@supports selector()`](layouts/blocks/warning.webc#L1).

	- While its `:host` selector scoping/replacement works fine [with nesting](layouts/blocks/header.webc#L21) and even some [`&:pseudo-class`](layouts/blocks/header.webc#L61) use, we couldn’t figure out [`&.compound-selectors`](/layouts/blocks/nav.webc#L17).

	- There *is* [a `:host(.selector)`](https://github.com/11ty/webc/pull/96) syntax for this, but it doesn’t save you much from `:host.selector` repetition. The [`:host-context(.parent)`](layouts/blocks/header.webc#L90) however is *very* handy, since `.parent :host` doesn’t replace the latter, nested one!

- A few “in-content” elements are under [`/components`](/components/). *Eleventy* picks these up *within* our Markdown `.md` files (more on this next), via its [`htmlTemplateEngine`](https://www.11ty.dev/docs/config/#default-template-engine-for-html-files) option. This replaces/builds [`<figure>` elements](/components/figure.webc) from some [markup attributes](content/topic/everything/index.md#L21-L26), for example.

- Our actual course [content](/content/) is mostly written in [Markdown](https://en.wikipedia.org/wiki/Markdown), of which [we are fans](https://typography-interaction-2526.github.io/topic/else/#markdown). We add a number of [`markdown-it` plugins](eleventy.config.js#L99) to enrich the structure/output, further.

<br>

*More to come, here!*

<br>

✊
