<script front-matter>
	const draft = true
	const title = 'Putting a <nobr>(Link/Meta)</nobr> Bow on It'
	const week = 22
</script>

Beyond rendering directly in browsers themselves, web pages also exist in the contexts of search engines, social media, messaging, and other sharing—and we should give attention to how they appear in these environments, too.

- [<cite>What’s in the Head? – MDN</cite>](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)
	A general overview from our friends at MDN.

- [<cite>Metadata – web.dev</cite>](https://web.dev/learn/html/metadata/)
	And the folks at Google.
<!-- .link-list .right style="--rows: 3" -->

We’ve gathered a handful of practices here which adjust and optimize how your site appears through these lenses, via special `<link>` and `<meta>` elements that live in your page’s `<head>`. No site is truly complete without considering these!

## Favicons and Touch Images

<figure
	@caption="Chrome."
	@source="favicon--chrome.svg"
	class="verso"
	>
</figure>

<figure
	@caption="i&NoBreak;OS/Mobile Safari."
	@source="favicon--safari.svg"
	class="recto"
	style="justify-self: end"
	>
</figure>

The first of these is the [*favicon*](https://en.wikipedia.org/wiki/Favicon) (for *favorite icon*)—which appears in the browser’s tabs/address bar, bookmarks, history, and also on search engine entries. This is often a logo—though they don’t always translate down well in size. Sometimes it is its own thing! But it is *always* an important part of the initial impression of your site, and should be carefully considered and constructed.

- [<cite>How to Favicon in ~~2021~~ 2026</cite>](https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs)
	Pretty good, modern walkthrough.
<!-- .link-list .right -->

### The Humble `favicon.ico` (Safari)

The base favicon format is `.ico`—from ancient, bitmapped [Windows icons](https://en.wikipedia.org/wiki/ICO_(file_format)). It is a package/directory/container format, meaning it can contain several, discrete, raster icon sizes: `16×16px`, `32×32px`, `64×64px`, etc. (We’ll use different elements for our other/larger needs.)
<!-- .add-after--2 -->

**These are (unfortunately) still needed today because of several, long-standing browser quirks:**
<!-- .balance -->

- Browsers still look for a `favicon.ico` at the root of a domain.
- These are used, as a default/fallback, if none are specified in your `<head>`.
- Safari (so namely, your i&NoBreak;OS visitor) needs them—it *still* [doesn’t support SVG favicons](https://caniuse.com/link-icon-svg) (below).
<!-- .balance -->

<aside>

You’ll find a lot of scammy, <nobr>ad-ridden</nobr>, <nobr>AI-chumming</nobr>, “favicon generators” out there.

As of writing, we still couldn’t find a *decent* online converter that packages multiple `.ico` dimensions together. So our *manual* way is somewhat… noodly, but we think it is the cleanest, best-practice (for 2026) approach.

</aside>

#### Making It

<div class="verso add-before">

You should draw each size individually, when necessary—*pixel-tuning* each version to land nicely on the pixel grid, so it is legible and crisp at its dimension. You can use Figma’s [pixel preview](https://help.figma.com/hc/en-us/articles/360041065034-Adjust-your-zoom-and-view-options#pixel-preview) (set at *1x*), toggled with <nobr><kbd>⌘</kbd> <kbd>⇧</kbd> <kbd>P</kbd>.</nobr>

Note that these can have transparent backgrounds, and that *HiDPI* ([*2x*/*retina*](https://tomroth.com.au/dpr/)) displays will render their device-native size—so most folks are seeing your `32px` version, these days. Export [a PNG](/topic/images/#image-formats) for each dimension, from Figma, into your project folder.

</div>

<figure
	@caption="Draw an artboard/frame for each size."
	@source="ico.svg"
	class="recto add-before"
	style="align-self: start; margin-block: initial"
	>
</figure>

These can be combined together in an `.ico` with [ImageMagick](https://imagemagick.org)—the appropriately named *Dark Arts* tool at the bottom of every imaging pipeline. (If you’re on a Mac, some version of this is likely already installed; PC&NoBreak;s might need to [download it](https://imagemagick.org/script/download.php#windows)). You’ll run this terminal command, in your project folder:
<!-- .add-before--3 .add-after .balance -->

```shell
convert 16.png 32.png 64.png -compress zip favicon.ico
```

You can open [a terminal](https://code.visualstudio.com/docs/terminal/basics) in VS Code (or separately, from GitHub Desktop) with <nobr><kbd>⌃</kbd> <kbd>`</kbd></nobr>.
<!-- .secondary .balance -->

#### Linking It

You should still specify/include the resulting `favicon.ico` in your `<head>`, allowing you to organize/move it out of the root:
<!-- .add-before .add-after .balance -->

```html
<head>
	<title>Typography and Interaction</title>
	<link href="assets/favicon.ico" rel="icon" sizes="any">
	<!-- The rest of your head… -->
</head>
```

We’ve omitting the [responsive `viewport` element](/topic/responsive/#viewport-meta-tag) here, for clarity. But your `<head>` should have this along with all your stylesheets and JS. Just the metadata, here.
<!-- .secondary .balance style="grid-column: all" -->

**A few other (Safari) concerns:**
<!-- .add-before--3 -->

- Safari caches these *dramatically*—meaning any changes are not reflected/updated for a very long time. It’s extremely annoying.
- Safari also doesn’t facilitate detecting [light/dark mode](/topic/responsive/#prefers-color-scheme), so your icon needs to be visible on both a light and dark toolbar/background.
- Safari still occasionally decides to [*mat*](https://en.wikipedia.org/wiki/Mat_(picture_framing)) icons onto white that it doesn’t think have enough contrast. You can’t prevent or control this! Cool.
<!-- .balance -->

<figure
	@caption="Safari adds this white!"
	@source="matte.svg"
	class="right"
	style="align-self: start; margin-block: initial"
	>
</figure>

Oh, Safari. I wish I knew how to quit you.
<!-- .secondary -->

### Modern SVG&NoBreak;<small>s</small> (Chrome *et al.*)

Chrome is decidedly better, here. It supports SVG&NoBreak;s for favicons, which gives us the benefit of [the vector format](/topic/images/#image-formats)—resolution independence. One file, no intermediate/terminal steps, for different display sizes and densities. It is still a good practice to draw these at `16×16px`—so you can *pixel-tune* them—then export from Figma, now as an SVG.

You should add them to your `<head>` as [a *progressive enhancement*](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement) for Chrome, after the previous `<link>`; Safari will just ignore them:
<!-- .add-before .add-after -->

```html
<head>
	<title>Typography and Interaction</title>
	<link href="assets/favicon.ico" rel="icon" sizes="any">
	<link href="assets/favicon.svg" rel="icon" type="image/svg+xml">
	<!-- The rest of your head… -->
</head>
```

#### Responsive Favicons

SVG&NoBreak;s have another benefit: since they can include <nobr>self-contained,</nobr> *internal* `<style>` elements—we can alter/adjust our favicon with `prefers-color-scheme` [(light/dark mode) media queries](/topic/responsive/#prefers-color-scheme)!
<!-- .add-before .add-after -->

```html <!-- style="grid-column: all" -->
<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
	<style>
		.foreground { fill: black; }
		.background { fill: white; }

		@media (prefers-color-scheme: dark) {
			.foreground { fill: white; }
			.background { fill: black; }
		}
	</style>
	<rect class="background" width="32" height="32" rx="2" />
	<rect class="foreground" x="4" y="8" width="24" height="2" />
	<path class="foreground" d="M10.4299 22.8988C9.98881 23.3297 9.5169 23.6529 9.01422 23.8683C8.5218 24.0837 7.96269 24.1914 7.3369 24.1914C6.84448 24.1914 6.37771 24.1196 5.93658 23.976C5.50571 23.8324 5.13126 23.6221 4.81324 23.3451C4.49521 23.0578 4.24387 22.7142 4.05921 22.3141C3.87456 21.9037 3.78223 21.437 3.78223 20.9138C3.78223 20.5239 3.84891 20.17 3.98227 19.852C4.11564 19.5237 4.29517 19.2313 4.52086 18.9748C4.75681 18.7081 5.02354 18.4722 5.32105 18.267C5.61855 18.0618 5.92632 17.8823 6.24434 17.7284C5.94684 17.3693 5.69549 17.0103 5.49032 16.6512C5.2954 16.2922 5.19794 15.8715 5.19794 15.3894C5.19794 15.0098 5.27488 14.6661 5.42877 14.3584C5.59291 14.0506 5.80834 13.789 6.07507 13.5736C6.3418 13.3479 6.64443 13.1786 6.98298 13.0658C7.33177 12.9427 7.69083 12.8811 8.06015 12.8811C8.48076 12.8811 8.8706 12.9375 9.22965 13.0504C9.59897 13.1632 9.917 13.3325 10.1837 13.5582C10.4607 13.7736 10.6761 14.0455 10.83 14.3738C10.9942 14.702 11.0762 15.0816 11.0762 15.5125C11.0762 16.1588 10.8865 16.7025 10.5069 17.1436C10.1376 17.5848 9.67591 17.9541 9.12194 18.2516L10.5377 19.9905C10.6505 19.7853 10.7377 19.575 10.7993 19.3595C10.8608 19.1338 10.907 18.9082 10.9377 18.6825H12.8305C12.7792 19.1749 12.6664 19.6519 12.492 20.1136C12.3176 20.5752 12.0765 21.001 11.7687 21.3908L14 23.9914H11.3225L10.4299 22.8988ZM7.39846 19.1441C7.20354 19.2262 7.01375 19.3236 6.82909 19.4365C6.64443 19.5493 6.48029 19.6827 6.33667 19.8366C6.19305 19.9905 6.07507 20.1597 5.98274 20.3444C5.90067 20.529 5.85964 20.7342 5.85964 20.9599C5.85964 21.1548 5.90067 21.3446 5.98274 21.5293C6.07507 21.7037 6.19305 21.8576 6.33667 21.9909C6.48029 22.114 6.64443 22.2166 6.82909 22.2987C7.02401 22.3705 7.22406 22.4064 7.42923 22.4064C7.81907 22.4064 8.15761 22.3192 8.44486 22.1448C8.74236 21.9602 9.01935 21.7242 9.27582 21.437L7.39846 19.1441ZM9.1681 15.3894C9.1681 15.1021 9.06551 14.8559 8.86034 14.6507C8.66542 14.4456 8.4346 14.343 8.16787 14.343C7.90114 14.343 7.67032 14.4353 7.4754 14.62C7.28048 14.7944 7.18302 15.0252 7.18302 15.3124C7.18302 15.6612 7.27535 15.9587 7.46001 16.205C7.64467 16.4512 7.83959 16.7025 8.04476 16.959C8.35253 16.7641 8.61413 16.5538 8.82956 16.3281C9.05525 16.1024 9.1681 15.7895 9.1681 15.3894Z" />
</svg>
```

You would export your SVG from Figma, then manually add the `<style>` and `id`, in VS Code.
<!-- .secondary .balance -->

<figure
	@caption="Dark mode."
	@source="dark.svg"
	class="verso"
	>
</figure>

<figure
	@caption="If we *had* a light mode."
	@source="light.svg"
	class="recto"
	>
</figure>

<aside>

You may or many not want to do this! It entirely depends on how you are using your favicon. We thought white-on-black was more our *brand*—not the icon form itself—and so didn’t use this method.

</aside>

### And `apple-touch-icon`

<div class="verso">

When the iPhone (with Mobile Safari) came on the scene in 2007, it added its own tag for [*webpage icons*](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html)—now commonly known as *touch* or *share* icons—visible when adding pages to your home screen and in bookmarks, frequently-visited lists, and messages.
<!-- .balance -->

As everyone rushed to… *respond* to the iPhone, this syntax stuck and became the de facto standard—Android and Chrome use the same `rel="apple-touch-icon"` syntax, and for similar uses. In lieu of larger/specific images (more on that below), you should think of this as your default *share image*.

</div>

<figure
	@caption="Safari bookmarks/favorites."
	@source="touch.svg"
	class="recto"
	style="align-self: start; margin-block: initial"
	>
</figure>
<!-- TODO THIS WHEN IT UPDATES -->

This should be an opaque (no transparency) PNG, at around `512×512px`. Again, add it in your `<head>`, below the others:
<!-- .add-before--3 .balance -->

```html
<head>
	<title>Typography and Interaction</title>
	<link href="assets/favicon.ico" rel="icon" sizes="any">
	<link href="assets/favicon.svg" rel="icon" type="image/svg+xml">
	<link href="assets/touch.png"  rel="apple-touch-icon">
	<!-- The rest of your head… -->
</head>
```

<aside>

We used the same image content as our favicon, here—but with the larger sizes, you might want to use this form more distinctly. Think of how these are used/shown differently, and interpret this for your work!

</aside>

## Open Graph, Structured Data, Metadata

As *sharing* contexts became more and more prevalent, other approaches were developed to add additional information around pages in these scenarios—using special `<meta>` tags in the `<head>`.

- [<cite>The Open Graph Protocol</cite>](https://ogp.me)
	The original spec.

- [<cite>Sharing Debugger - Meta for Developers</cite>](https://developers.facebook.com/tools/debug/)
	Check your cards without sharing.

- [<cite>Hey Meta</cite>](https://www.heymeta.com)
	A simple, decent, non-Meta version.

- [<cite>Iframely URL Debugger</cite>](http://debug.iframely.com)
	This one will show you everything.
<!-- .link-list .right style="--rows: 4" -->

Here, (ironically, *pre*-Meta) Facebook led the charge—what the iPhone was for the mobile web, Facebook was for sharing. They developed the *Open Graph protocol*, which became the standard and is used now in many (usually, non-Facebook) contexts. ([*Graph*](https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)) here is used  with the maths meaning.)

This type of added info, broadly, can be referred to as *structured data* or [*metadata*](https://en.wikipedia.org/wiki/Metadata)—hence Facebook’s name change!

### Image

So beyond your *favicon* and *touch* images, you can also specify an `og:image` (*OG* for… *Open Graph*) in your `<head>`. This is often used for more *page-specific* images: the main photo for a news article, the product shot in <nobr>e-commerce,</nobr> and so on. These are generally made visible when sharing a link on Facebook, LinkedIn, Slack, Messages, etc.—where these sites/apps generate a *share card* or *preview* (also sometimes called an [*unfurl*](https://medium.com/slack-developer-blog/everything-you-ever-wanted-to-know-about-unfurling-but-were-afraid-to-ask-or-how-to-make-your-e64b4bb9254)) for the URL.

<!-- TODO COME BACK HERE -->

<figure
	@caption="Slack shows the whole image."
	@source="og-image--full.svg"
	class="verso"
	>
</figure>

<figure
	@caption="LinkedIn crops in to ~16:9."
	@source="og-image--crop.svg"
	class="recto"
	style="align-self: start"
	>
</figure>

These can now be JPG&NoBreak;s (for more [photographic content](/topic/images/#image-formats)), or PNGs (again, opaque). Tradition (inertia) suggests Facebook’s original `1200x630px` dimension—but every context/app handles these differently. A better, modern rule-of-thumb is an image *around* `1200px` on the long edge, at its original/best aspect-ratio. I might even do `2000px`, these (HiDPI) days!

These are again specified in your `<head>`, now with `<meta>` elements—importantly, with the *full, absolute* URL for the file:
<!-- .add-after .add-before -->

```html <!-- style="grid-column: all" -->
<head>
	<title>Week 22</title>
	<link href="assets/favicon.ico" rel="icon" sizes="any">
	<link href="assets/favicon.svg" rel="icon" type="image/svg+xml">
	<link href="assets/touch.png"  rel="apple-touch-icon">
	<meta content="https://typography-interaction-2425.github.io/assets/meta.png" property="og:image">
	<meta content="Black background with white, modernist text of the site title." property="og:image:alt" >
	<!-- The rest of your head… -->
</head>
```
Note these allow an `alt` text for accessibility, in a separate tag.
<!-- .secondary .balance -->

### Title and Description

Open Graph also specifies `og:title` and `og:description` properties. However, we *already* have a `<title>` element—and there was an existing convention around descriptions—which browsers, apps, and search engines continue to use.

So we think including redundant `og:` versions for title/description is often unnecessary. ([SEO](https://en.wikipedia.org/wiki/Search_engine_optimization)/*snake-oil* folks might disagree.) If you are worried—or your boss tells you to—you could duplicate the tags. One reason might be to tailor different content (like your description length), for different platforms. But we don’t think it is worth it, most of the time.

Again, different apps are going to display and use this information in their own way—so there are no hard rules on length, and you’ll want to check the contexts you care about. Generally, *tweet ([toot](https://joinmastodon.org)?) length* works well—so somewhere around 140 characters. And titles and descriptions should always be plain text—no HTML. You can usually use [entities](https://developer.mozilla.org/en-US/docs/Glossary/Entity) or encoded [non-breaking spaces](/topic/advanced-css/#nobr-and-nbsp), though!
<!-- .add-before--3 -->

We’ll add in a description, to our `<head>` stack:
<!-- .add-before .add-after -->

```html <!-- style="grid-column: all" -->
<head>
	<title>Typography & Interaction</title>
	<meta property="description" content="Typography & Interaction is a year-long, two-semester course in the MPS Communication Design program at Parsons / The New School. The class will provide a rigorous foundation of typographic and interaction principles in the context of digital design.">
	<link href="assets/favicon.ico" rel="icon" sizes="any">
	<link href="assets/favicon.svg" rel="icon" type="image/svg+xml">
	<link href="assets/touch.png"  rel="apple-touch-icon">
	<!-- The rest of your head… -->
</head>
```

<figure
	@source="title-description.svg"
	class="full"
	>
</figure>

<aside>

Google makes its *snippet* from your `description`—but it might also show other text there, based on your search. It also might decide to show your images, or not! Ultimately, you can only *suggest* these things—with all the metadata, it is up to the other side!

</aside>

### Audio and Video

<div class="verso balance">

Some sharing contexts even let you play audio or video directly, in situ, from a *share card*. This might be useful for sites oriented around media, like *Spotify* or *YouTube*—but keep in mind the user is then *not* visiting the pages themselves, which you might prefer.

These are specified much like images, with the `og:audio` and `og:video` properties. There are [extra metadata properties](https://ogp.me/#structured) associated with the different types.

Conceptually, do you want your shared URL to function only as a link? Or somewhat *as* the thing itself?
<!-- .add-before--3 .balance -->

</div>

<figure
	@caption="Messages allows inline media."
	@source="audio-video.svg"
	class="recto"
	style="align-self: start; margin-block: initial"
	>
</figure>

### Schema and Web App Manifests

Beyond this, there is a (very, very) [long tail](https://en.wikipedia.org/wiki/Long_tail) of *metadata*/*structured-data* uses. Much of it will depend on the nature of your project/work, and there will be sub-conventions within conventions.

- [<cite>Schema\.org</cite>](https://www.schema.org)
	Another common structured-data format/collection.

- [<cite>Web App Manifests | MDN</cite>](https://developer.mozilla.org/en-US/docs/Web/Manifest)
	Metadata for apps.

- [<cite>Intro to How Structured Data Markup Works</cite>](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
	How Google uses these.
<!-- .link-list .right style="--rows: 3" -->

After *Open Graph*, the most common structures you might encounter next are probably *Schema.org*, oriented around search engine (Google) snippets—and *Web app manifests* (`manifest.json`), used by [progressive web apps](https://web.dev/progressive-web-apps/). Whether these are necessary will depend on your project!

<aside>

Not to dig *too* hard into SEO true-believers—but you will find *a lot* of junk out there, suggesting the right combination of `<meta>` elements will yield riches. Take it all with a big grain of salt (and a [patent medicine](https://en.wikipedia.org/wiki/Patent_medicine) chaser).

You can read up on [what Google actually suggests](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), but otherwise just focus on your content and semantics—your time (and someone’s money) is much better spent there.

</aside>

## Other Things for Your `<head>`

### `charset`

This usually isn’t *explicitly* needed these days—because browsers assume/default to it—but you might have seen it in our examples and on other sites:
<!-- .add-after .balance -->

```html
<head>
	<meta charset="utf-8">
	<!-- The rest of your head… -->
</head>
```

This specifies your document’s [character encoding](https://www.w3.org/International/articles/definitions-characters/) as [*<nobr>UTF-8</nobr>*](https://en.wikipedia.org/wiki/UTF-8), a superset of basic [ASCII](https://en.wikipedia.org/wiki/ASCII). Long story (very) short—this allows you to use encoded non-latin characters (and emoji 👋) directly in your HTML! To be thorough/explicit (or if you are seeing weird character junk), you can include this tag.
<!-- .add-before .balance -->

### `theme-color`

Finally, another recent `<head>` quirk: you can specify a [`theme-color`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color), which is used by (some) browsers to tint/color their own UI *around/outside* of the page:
<!-- .add-after .balance -->

- [<cite>Meta Theme Color and Trickery - CSS-Tricks</cite>](https://css-tricks.com/meta-theme-color-and-trickery/) \
	A really deep dive.
<!-- .link-list .right style="--rows: 3" -->

```html
<head>
	<meta content="#fcbf04" name="theme-color">
	<!-- The rest of your head… -->
</head>
```

This changes with pretty much *every* i&NoBreak;OS release—but as of writing, usually only shows up on Mobile Safari and Mobile Chrome. (Desktop Safari default settings [have it turned off](https://useyourloaf.com/blog/safari-15-theme-color/); Desktop Chrome has never shown it.)
<!-- .add-before--3 -->

Safari tries to infer this color from your `<body>` background (and choses a contrasting UI text color)—but with complicated pages it might guess these wrong. You might also just want to adjust it, based on your design.

<figure
	@caption="Safari correctly guessed black for us."
	@source="theme.svg"
	class="verso"
	>
</figure>

<figure
	@caption="But maybe we want an accent color up there!"
	@source="theme-color.svg"
	class="recto"
	>
</figure>

<!-- TODO: rel="preload" example? -->
