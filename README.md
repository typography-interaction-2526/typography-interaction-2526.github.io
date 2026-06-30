# Typography & Interaction, ’25–26

Hi there. This repository is the course site for the 2025–2026 iteration of [*Typography & Interaction*](https://typography-interaction-2526.github.io):

> …a year-long, two-semester course in the [MPS Communication Design](https://mpscd.parsons.edu) program at [Parsons](https://www.newschool.edu/parsons/) / [The New School](https://www.newschool.edu). The class will provide a rigorous foundation of typographic and interaction principles in the context of digital design.

<br>

It is taught by [@mfehrenbach](https://github.com/mfehrenbach), [@rijkvanzanten](https://github.com/rijkvanzanten), and [@eli8527](https://github.com/eli8527). We are joined by [20 students](https://typography-interaction-2526.github.io/class/) this year, hailing from all over the world. (Much) more information is available in [our syllabus](https://typography-interaction-2526.github.io/syllabus/).

<br>

## Use and Re-use

In the original spirit of the open web, this repo (and the course content within) is made <kbd>Public</kbd> (&thinsp;[*“source available”*](https://en.wikipedia.org/wiki/Source-available_software)&thinsp;) for personal and educational, non-commercial use under the [CC BY-NC-SA 4.0 license](https://creativecommons.org/licenses/by-nc-sa/4.0/). The included fonts remain [licensed](assets/fonts/LICENSE.md) per their creators. Such as one might consider this “software,” it’s provided as-is and without any warranty. (I’ve got enough to worry about.)

<br>

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

**We teach our students how to design and build web pages *via* a web page. This is more complex than what we cover in class, but should be thought of as an extension of our course material!**

<br>

You’ll need some basic familiarity with [the command line](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line), here!

We’re using [`pnpm`](https://pnpm.io) as our [*package manager*](https://en.wikipedia.org/wiki/Package_manager), to pull in our [build dependencies](package.json)—the various libraries the site uses. In your terminal, run `pnpm install` once in the repo directory to grab what we need!

<br>

### *Eleventy* as the engine

Everything is assembled by a [static site generator (SSG)](https://en.wikipedia.org/wiki/Static_site_generator)—which takes our [source content](content/) and compiles out finished [HTML](https://typography-interaction-2526.github.io/topic/html/), [CSS](https://typography-interaction-2526.github.io/topic/css/), and [JavaScript](https://typography-interaction-2526.github.io/topic/javascript/). We’re using [Zach Leatherman’s](https://www.zachleat.com/) sturdy and venerable [*Eleventy*](https://www.11ty.dev/) for this task.

- **For “local” development on your machine:** running `pnpm serve` in the repo directory starts *Eleventy*, which compiles everything everything to a `_site` folder. This directory is then served at `http://localhost/`. Changing any source content/files will recompile and should live reload any page in your browser, *usually* within a few seconds.

- **For “production” deployment:** the site is automatically built/served on [GitHub Pages](https://docs.github.com/en/pages), via an [action/workflow](.github/workflows/build-deploy.yaml) when there are commits pushed up to our `main` branch. (This just does the local build process, but inside a [*virtual machine*](https://en.wikipedia.org/wiki/Virtual_machine).) This *usually* takes a [couple minutes](https://github.com/typography-interaction-2526/typography-interaction-2526.github.io/actions), depending on the vagaries of GitHub [these days](https://mrshu.github.io/github-statuses/).

There is a [*looong* year year](https://github.com/typography-interaction-2526/typography-interaction-2526.github.io/commits) of work, adjustments, and noodling in here—and an [elaborate config file](/eleventy.config.js) to match. But some other specific, “advanced,” possibly-clever things to call out:

<br>

### *WebC* for templating

Our templating is done in Zach’s scrappy, experimental [*WebC*](https://www.11ty.dev/docs/languages/webc/) language, which we love! This gives us some basic compilation logic, via HTML `webc:` attributes, that *Eleventy* then uses to put our pages together when built. We prefer this over [*Liquid*](https://www.11ty.dev/docs/languages/liquid/) for its all-in-HTML syntax, and JavaScript extensibility! And are still rooting for it.

- Our base templates are in [`/layouts`](/layouts/), with some re-used/structured [blocks inside](/layouts/blocks/). With our… let’s say, “non-traditional” [site structure](https://typography-interaction-2526.github.io), individual page [`article.webc`](/layouts/article.webc) are looped through [`pages.webc`](/layouts/blocks/pages.webc) to make our endless vertical “stacked” list on each page.

- *WebC* also gives us “only on build” scripts via `<‍script webc:setup>`, like a [`getDescription` function](layouts/base.webc#L3-L22) for specifying metadata from within our content, or other [localized](components/figure.webc#L2) [one-off](layouts/blocks/header.webc#L2-L19) [things](layouts/blocks/menu.webc#L2-L4) you don’t want to promote as global functions/filters. You have to remember to `export`, though!

	*For folks familiar with [*Astro*](https://astro.build/), this reminded us a lot of their Node-side [“component scripts”](https://docs.astro.build/en/basics/astro-components/#the-component-script) paradigm.*

- We also use its `<style webc:scoped>` for some block/component-specific styles, [in-situ](layouts/blocks/header.webc#L12). It’s worth noting some quirks here though:

	- Since they’re in-template, style changes will only update with a rebuild—and depending on what they’re used for (ex: something on every page), this makes them much less ergonomic than using separate stylesheets (which quickly live-reload).

	- It did not like the recent [`@supports selector()`](layouts/blocks/warning.webc#L1).

	- While its `:host` selector scoping/replacement works fine [with nesting](layouts/blocks/header.webc#L21) and even some [`&:pseudo-class`](layouts/blocks/header.webc#L61) use, we couldn’t figure out [`&.compound-selectors`](/layouts/blocks/nav.webc#L17).

	- There *is* a [`:host(.selector)`](https://github.com/11ty/webc/pull/96) syntax for this, but it doesn’t save you much from `:host.selector` repetition. The [`:host-context(.parent)`](layouts/blocks/header.webc#L90) however is *very* handy, since `.parent :host` doesn’t replace the latter, nested one!

- Following [Miriam Suzanne’s](https://www.miriamsuzanne.com) clear-eyed [pattern](https://www.miriamsuzanne.com/2024/07/06/buckets-layers/), we gather our (plain ol’ CSS) [stylesheets](assets/styles/) together using [`webc:bucket`](layouts/blocks/styles.webc), importing them into [cascade layers](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Cascade_layers) via *Eleventy’s* [Bundle plugin](https://www.11ty.dev/docs/plugins/bundle/) `getBundleFileUrl`. The component-scoped styles are in-page, via `getBundle`.

- A few “in-content” elements are under [`/components`](/components/). *Eleventy* picks these up *within* our Markdown `.md` files (more on this next), via its [`htmlTemplateEngine`](https://www.11ty.dev/docs/config/#default-template-engine-for-html-files) option. The trick here is a [*single* `@html=content`](layouts/article.webc#L233), which does the processing! This replaces/builds [`<figure>` elements](/components/figure.webc) from some [markup attributes](content/topic/everything/index.md#L21-L26), for example.

- We add HTML-syntax highlighting for `.webc` files [to VS Code](.vscode/settings.json#L6-L9) and [on GitHub](.gitattributes#L2), since [it *is* HTML](https://github.com/11ty/webc#its-html).

<br>

### Content-wise, Markdown “plus”

Our actual course [content](/content/) is mostly written in [Markdown](https://en.wikipedia.org/wiki/Markdown), of which [we are fans](https://typography-interaction-2526.github.io/topic/else/#markdown). Here we’re broadly trying to balance the ergonomics of Markdown with layout needs—we’re designers, after all.

- For better/consistent syntax highlighting (and since we prefer [dynamic JS](https://www.11ty.dev/docs/data-frontmatter/#front-matter-formats) for these, anyway), we use [custom front-matter options](eleventy.config.js#L30-L33)—so you’ll see `<script front-matter>` [starting out](content/week/1.md#L1-L5) the content.

- We add a number of [`markdown-it` plugins](eleventy.config.js#L99) to enrich the structure/output, further. A few to call out:

	- To use *WebC’s* [dynamic properties](https://www.11ty.dev/docs/languages/webc/#dynamic-attributes-and-properties) within Markdown (like [`@text=`](content/syllabus.md#L8)), we use [`@mdit-vue/plugin-component`](https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-component) to allow them to pass through. Vue’s shorthand [attribute](https://vuejs.org/guide/essentials/template-syntax.html#shorthand)/[event](https://vuejs.org/guide/components/events.html) syntax is very similar!

		*This also allows `<custom-component>` names in `.md`, which otherwise would be rendered as strings prior to *WebC* seeing them!*

	- We add `<abbr>` automatically via [`markdown-it-abbr`](https://github.com/markdown-it/markdown-it-abbr)—[preprocessing](eleventy.config.js#L143) a common [set of abbreviations](data/abbreviations.js) appended to all the Markdown, so the same list is shared across pages. Try hovering over [any acronym](https://typography-interaction-2526.github.io/#:~:text=SCHOOL%2C%20PARSONS%2C%20MPS-,CD,-PMCD%C2%A05001%2C) on the site!

	- We use [Arve Seljebu’s](https://arve.dev/) popular [`markdown-it-attrs`](https://github.com/arve0/markdown-it-attrs) to decorate our Markdown with classes and IDs. The default curly-bracket `{ .class }` syntax has poor highlighting though (and hurts our designer-eyes), so instead we use [HTML comments](index.md#L24) for these! The built-in `leftDelimiter`/`rightDelimiter` [options](https://github.com/arve0/markdown-it-attrs#usage) don’t allow this though, so we [preprocess them](eleventy.config.js#L146-L149) ourselves.

		*This has another nice side effect of hiding these decorators in normal Markdown previews!*

	- Our own custom [`markdownRagging` function](eleventy.config.js#L62-L97), for better line-breaks—keeping articles/short words from dangling, not starting lines on em-dashes, breaking after slashes, and preventing (short) orphans, of course. *Typography* is in our course title, after all.

- Since all these Markdown shenanigans don’t play well with GitHub’s [more limited](https://github.github.com/gfm/) syntax and preview, we’ve got that disabled via our [`.gitattributes` file](.gitattributes#L5)—mapping these to [`Ecmarkup`](https://tc39.es/ecmarkup/) offers a decent blend of Markdown and HTML highlighting, sans preview.

	*The `* linguist-documentation` there turns off the then-inaccurate language graph—hopefully with no other side effects!*

- Our *many* [code example blocks](https://typography-interaction-2526.github.io/topic/javascript/#intersection) are put together with a few tricks:

	- The [raw example code]((content/topic/javascript/intersection/)) itself lives within its [topic folder](content/topic/).

	- *Eleventy* [passes](eleventy.config.js#L47-L48) these through on build, so they’re always available [untouched](https://typography-interaction-2526.github.io/topic/javascript/intersection/).

	- We also render a [preview page](https://typography-interaction-2526.github.io/topic/javascript/intersection/preview/?active=script.js&width=75%) out, which wraps the examples in our custom [`ti-preview` web component](https://github.com/typography-interaction-2425/ti-preview).

		**This enables in-browser editing, with a live preview, via [CodeMirror](https://codemirror.net/)!**

	- These previews are then included [in-page](content/topic/javascript/index.md#L247-L252) in `iframe`, via the [`figure.webc`](components/figure.webc#L48-L52) component.

	- We also “intercept” any [fenced code blocks](content/topic/javascript/index.md#L328-L330) in our Markdown, via the [`pre.webc`](components/pre.webc) component—so even these are editable (and share syntax highlighting), though without the output preview.


### Miscellanea

- We generate automatic [`og:image`](https://typography-interaction-2526.github.io/topic/link-meta/#image) on build, using the same stack of web technologies above:

	- We have *Eleventy* compile a sidecar [`/meta.html`](https://typography-interaction-2526.github.io/topic/link-meta/meta) for each page, via the simple [`meta.webc`](content/meta.webc) layout.

	- This shares the [`base.webc`](layouts/base.webc) parent layout, with access to the site’s common stylesheets, and is set to [`noindex`](https://developers.google.com/search/docs/crawling-indexing/block-indexing) so it won’t show up in search.

	- After build, we use [*Puppeteer*](https://pptr.dev/) to launch a headless browser that takes a [screenshot](eleventy.config.js#L216-L252) of this page—saving it as [`/meta.png`](https://typography-interaction-2526.github.io/topic/link-meta/meta.png) alongside. This is then what the page [`<meta>` element](layouts/base.webc#L39-L42) uses, in our `<head>`!

		*You could also then delete the HTML, but it was nice to have the artifacts in testing!*
<br>

*More to come, here!*

<br>

✊
