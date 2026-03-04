<script front-matter>
	const draft = true
	const title = 'Puttin’ a <nobr>(Link/Meta)</nobr> Bow on It'
	const week = 22
</script>

Beyond rendering directly in browsers themselves, web pages also exist in the contexts of search engines, social media, messaging, and other sharing—and as *thorough* designers, we should give attention to how they appear in these environments, too.
<!-- .balance -->

- [<cite>What’s in the Head? – MDN</cite>](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)
	A general overview from our friends at MDN.

- [<cite>Metadata – web.dev</cite>](https://web.dev/learn/html/metadata/)
	And the folks at Google.
<!-- .right .rows--2 -->

We’ve gathered a handful of practices here which adjust and optimize how your site appears through these lenses, via special `<link>` and `<meta>` elements that live in your page’s `<head>`.
<!-- .balance -->

No site is truly complete without considering these! These are the “bow” to “wrap” your work.
<!-- .intro -->

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
	>
</figure>

The first of these is the [*favicon*](https://en.wikipedia.org/wiki/Favicon) (a portmanteau for *favorite icon*)—which appears in the browser’s tabs/address bar, bookmarks, history, and also on search engine entries. This is often a logo—though they don’t always translate down well in size. Sometimes it is its own thing! But it is *always* an important part of the initial impression of your site, and should be carefully considered and constructed.
<!-- .before--3 -->

- [<cite>How to Favicon in ~~2021~~ 2026</cite>](https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs)
	Pretty good, modern walkthrough.
<!-- .right -->

### The Humble `favicon.ico`

The base favicon format is `.ico`—from ancient, bitmapped [Windows icons](https://en.wikipedia.org/wiki/ICO_(file_format)). It is a package/directory/container format, meaning it can contain several, discrete, [raster](https://en.wikipedia.org/wiki/Raster_graphics) icon sizes: `16×16px`, `32×32px`, `64×64px`, etc.

We’ll use different elements, later, for our other/larger needs!
<!-- .note .after--3 -->

**These are still needed/used today because of several, long-standing browser quirks:**
<!-- .balance -->

- Browsers *still* look for a `favicon.ico` at the root of a domain! You may have noticed [console errors](/topic/dev-tools/#console).
- These are used as a default/fallback option, if nothing is manually specified in your page `<head>`.
- Safari (so namely, your i&NoBreak;OS visitors) [only recently added support](https://caniuse.com/link-icon-svg) for the better SVG favicons, detailed [below](#modern-svg-s).
<!-- .balance -->

<aside>

<mark>Use Caution: entering trashy internet zone</mark>

You’ll find a lot of really bad, scammy, <nobr>ad-ridden</nobr>, <nobr>AI-[chumming](https://en.wikipedia.org/wiki/Chumming)</nobr>, “favicon generator” sites out there!

As of writing, we still can’t find a decent online converter that combines/packages multiple `.ico` dimensions together. So our *manual* way is somewhat noodly, but we think it is the cleanest, best-practice approach.

</aside>

#### 1. Drawing It <!-- .before--3 -->

<div class="verso before">

You should draw each size individually, when necessary—*pixel-tuning*/[nudging](https://help.figma.com/hc/en-us/articles/4404575206295-Set-small-and-big-nudge-values) each path to land nicely on the pixel grid, so it is legible and crisp at its dimension. You can use Figma’s [pixel preview](https://help.figma.com/hc/en-us/articles/360041065034-Adjust-your-zoom-and-view-options#pixel-preview) (set at *1x*), toggled with <nobr><kbd>⌘</kbd> <kbd>⇧</kbd> <kbd>P</kbd>.</nobr>

Note that these can have transparent backgrounds, and that *HiDPI* ([*2x*/*retina*](https://tomroth.com.au/dpr/)) displays will render their device-native size—so most folks are seeing your `32px` version, these days. Export [a PNG](/topic/images/#image-formats) for each dimension, from Figma, into your project folder.

</div>

<figure
	@caption="Draw an artboard/frame for each size."
	@source="ico.svg"
	class="recto before start"
	>
</figure>

#### 2. Packaging It <!-- .before--3 -->

These separate files can then be combined together in an `.ico` with [ImageMagick](https://imagemagick.org)—the appropriately named *Dark Arts* tool way down at the bottom of nearly every online imaging pipeline.
<!-- .before .balance -->

On a Mac, you’ll use your [Terminal](https://support.apple.com/guide/terminal/welcome/mac) to first to [install Homebrew](https://brew.sh/), and then use that to [install ImageMagick](https://imagemagick.org/script/download.php#macos). You can then run this command, in your project folder, which will yield a single `favicon.ico` file:
<!-- .after .balance -->

```shell
magick 16.png 32.png 64.png favicon.ico
```

You can open [a terminal](https://code.visualstudio.com/docs/terminal/basics) from VS Code with <nobr><kbd>⌘</kbd> <kbd>⇧</kbd> <kbd>C</kbd></nobr>&thinsp;, or from GitHub Desktop with <nobr><kbd>⌃</kbd> <kbd>`</kbd></nobr>&thinsp;.
<!-- .note -->

#### 3. Linking It <!-- .before--3 -->

Even though browsers still look for it in the root, you can instead specify/include the resulting `favicon.ico` in your `<head>`, allowing you to organize/move it elsewhere:
<!-- .before .after .balance -->

```html <!-- .all -->
<head>
	<title>Typography & Interaction</title>
	<link href="assets/icons/favicon.ico" rel="icon" sizes="any">
	<!-- The rest of your head… -->
</head>
```

We’ve omitting the [responsive `viewport` element](/topic/responsive/#viewport-meta-tag) here, for clarity. But your `<head>` should have this along with all your stylesheets and JS. Just the metadata, here.
<!-- .note -->

**A few other (…Safari) concerns:**
<!-- .before--3 -->

- Safari caches these *dramatically*—meaning any changes are not reflected/updated for a very long time. [It](https://bugs.webkit.org/show_bug.cgi?id=95979) [is](https://bugs.webkit.org/show_bug.cgi?id=75877#c1) [extremely](https://bugs.webkit.org/show_bug.cgi?id=266426) [annoying](https://www.reddit.com/r/MacOS/comments/1bfhhqg/solved_fix_browser_tab_icons_aka_favicons_cache/).
- It also doesn’t facilitate detecting [light/dark mode](/topic/responsive/#prefers-color-scheme), so your icon needs to be visible on both a light and dark toolbar/background.
- It still occasionally decides to [*mat*](https://en.wikipedia.org/wiki/Mat_(picture_framing)) some icons that it doesn’t think have [enough contrast](https://www.reddit.com/r/webdev/comments/1113en7/why_does_my_favicon_have_a_white_border_around_it/), adding a white border. You can’t prevent or control this! Cool.
<!-- .balance -->

<figure
	@caption="Safari (…sometimes) adds this white border!"
	@source="mat.svg"
	class="right start"
	style="margin-block-start: 1lh"
	>
</figure>

<style>
	figure.right.start figcaption {
		margin-inline-start: 1lh;
	}
</style>

### Modern SVG&NoBreak;<small>s</small>

Modern browsers now [support SVG&NoBreak;s](https://caniuse.com/link-icon-svg) for favicons, which gives us the benefit of [the vector format](/topic/images/#image-formats)—resolution independence. One file, no intermediate/terminal steps, for different display sizes and densities. It is still a good practice to draw these at `16×16px`—so you can *pixel-tune* them—then export from Figma, now as a `.svg`&thinsp;.
<!-- .balance -->

You should add them to your `<head>` as [a *progressive enhancement*](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement), after the previous `<link>`; older browsers will just ignore them:
<!-- .before .after .balance -->

```html <!-- .all -->
<head>
	<title>Typography & Interaction</title>
	<link href="assets/icons/favicon.ico" rel="icon" sizes="any">
	<link href="assets/icons/favicon.svg" rel="icon" type="image/svg+xml">
	<!-- The rest of your head… -->
</head>
```

#### Responsive Favicons <!-- .before--3 -->

SVG&NoBreak;s have another benefit: since they can include <nobr>self-contained,</nobr> *internal* `<style>` elements—we can alter/adjust our favicon with `prefers-color-scheme` [(light/dark mode) media queries](/topic/responsive/#prefers-color-scheme)!
<!-- .before .after .balance -->

```html <!-- .all -->
<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
	<style>
		.background { fill: gainsboro; }
		.foreground { fill: black; }

		@media (prefers-color-scheme: dark) {
			.background { fill: black; }
			.foreground { fill: gainsboro; }
		}
	</style>
	<rect class="background" width="32" height="32" rx="2" />
	<path class="foreground" d="M12.544 15.769C9.79325 17.6473 8.76829 19.3139 8.76829 20.9894C8.76829 23.6702 11.3 25.2222 13.3763 25.2222C14.5151 25.2222 16.2234 24.8519 17.9229 22.5767C15.7591 20.3721 13.8931 18.0441 12.544 15.769ZM19.9203 24.5079C18.5712 26.2275 16.4424 28 13.3763 28C9.70565 28 6 25.1781 6 20.9894C6 17.1799 9.17127 14.6755 11.2738 13.2822C10.5729 11.6508 10.1174 9.96649 10.1174 8.32628C10.1174 5.29277 11.9483 3 14.3925 3C17.187 3 19.4034 5.12522 19.4034 7.81481C19.4034 10.4691 17.0731 12.7972 14.883 14.2787C15.7328 15.7337 17.1257 17.7178 19.3596 20.0723C19.4998 19.7549 19.6312 19.4462 19.7451 19.1552C20.1831 18.0265 20.3408 17.3033 20.3408 17.3033C20.4809 16.6861 21.0241 16.2275 21.6811 16.2275C22.4433 16.2275 23.0653 16.8536 23.0653 17.6208C23.0653 17.7354 23.0477 17.8413 23.0215 17.9383C22.9426 18.291 22.4608 20.1429 21.4358 22.127C22.6886 23.291 24.0464 24.4286 25.4569 25.5044C25.7898 25.7601 26 26.1658 26 26.6155C26 27.3827 25.3868 28 24.6246 28C24.3092 28 24.0201 27.903 23.7924 27.7266C22.4433 26.7037 21.138 25.619 19.9203 24.5079ZM16.6351 7.81481C16.6351 6.63316 15.6364 5.7866 14.3925 5.7866C14.0596 5.7866 13.7442 5.93651 13.4639 6.30688C13.2887 6.53616 12.8769 7.18871 12.8769 8.32628C12.8769 9.13757 13.0521 10.284 13.6391 11.7743C14.3837 11.2363 15.9431 9.99295 16.4774 8.61728C16.5913 8.31746 16.6351 8.05291 16.6351 7.81481Z" />
</svg>
```

You would export your SVG from Figma, then manually add the `<style>` and `.classes`, in VS Code.
<!-- .note -->

<figure
	@caption="Default/light mode."
	@source="light.svg"
	class="verso"
	>
</figure>

<figure
	@caption="If we *had* a separate dark mode."
	@source="dark.svg"
	class="recto"
	>
</figure>

<aside>

<mark>“Brand” always subject to interpretation</mark>

You may or may not want to do this! It entirely depends on how you are using your favicon. We thought *color-per-unit* was more our course “brand,” and didn’t use this method.

</aside>

### And `apple-touch-icon`

<div class="verso balance">

When the iPhone (with Mobile Safari) came on the scene in 2007, it added its own tag for [*webpage icons*](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html)—now commonly known as *touch* or *share* icons—visible when adding pages to your home screen and in bookmarks, frequently-visited lists, and messages.

As everyone rushed to… *respond* to the iPhone, this syntax stuck and became the de facto standard—meaning that even Windows/Android Chrome use the same `rel="apple-touch-icon"` syntax, and for similar uses. In lieu of larger/specific images (more on that [below](#image)), you should think of this as your default *share image*.

</div>

<figure
	@caption="Safari bookmarks/favorites."
	@source="touch.svg"
	class="recto start"
	style="margin-block: initial"
	>
</figure>

This should be an opaque (no transparency) PNG, at around `512×512px`. Again, add it in your `<head>`, below the others:
<!-- .before--3 .balance -->

```html <!-- .all -->
<head>
	<title>Typography & Interaction</title>
	<link href="assets/icons/favicon.ico" rel="icon" sizes="any">
	<link href="assets/icons/favicon.svg" rel="icon" type="image/svg+xml">
	<link href="assets/icons/touch.png"  rel="apple-touch-icon">
	<!-- The rest of your head… -->
</head>
```

<aside>

<mark>One size rarely fits all</mark>

We used the same image *content* as our favicon, here—but with the larger sizes, you might want to use this form more distinctly. Think of how these are used and shown differently, and interpret them best for your work!

</aside>

## Other *Metadata*

As *sharing* contexts became more and more prevalent online, other approaches were developed to add additional information around pages in these scenarios—using special `<meta>` tags in the `<head>`.

- [<cite>The Open Graph Protocol</cite>](https://ogp.me)
	The original spec.

- [<cite>Sharing Debugger - Meta for Developers</cite>](https://developers.facebook.com/tools/debug/)
	Check your cards without sharing.

- [<cite>Hey Meta</cite>](https://www.heymeta.com)
	A simple, decent, non-Meta version.

- [<cite>Iframely URL Debugger</cite>](http://debug.iframely.com)
	This one will show you everything.
<!-- .right .rows--4 -->

Here, (ironically, *pre*-Meta) Facebook led the charge—what the iPhone was for the mobile web, Facebook was for sharing. They developed and popularized the *Open Graph protocol*, which became the standard and is used now in many (usually, non-Facebook) contexts. (Here the word [*graph*](https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)) is used with the mathematical meaning.)

This type of added info, broadly, can be referred to as *structured data* or *[metadata](https://en.wikipedia.org/wiki/Metadata)*—hence Facebook’s name change!
<!-- .before--3 .intro .body -->

### Image

So beyond your [*favicon* and *touch* images](#favicons-and-touch-images), you can also specify an `og:image` (*OG* for *Open Graph*) in your `<head>`. This is often used for more *page-specific* images: the main photo for a news article, the product shot in <nobr>e-commerce,</nobr> and so on.

These are generally made visible when sharing a link on Facebook, LinkedIn, Slack, Messages, etc.—where these sites/apps generate a *share card* or *preview* (also sometimes called [an *unfurl*](https://medium.com/slack-developer-blog/everything-you-ever-wanted-to-know-about-unfurling-but-were-afraid-to-ask-or-how-to-make-your-e64b4bb9254)) for the URL:
<!-- .balance -->

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

These should be JPG&NoBreak;s (for more [photographic content](/topic/images/#image-formats)), or PNG&NoBreak;s (still opaque). Tradition/inertia suggests Facebook’s original `1200px` × `630px` dimension—but every context/app handles these differently. A better, modern rule-of-thumb is an image *around* `1200px` on the long edge, at its original/best aspect-ratio. We might even do `2000px`, these (HiDPI) days!

These are again specified in your `<head>`, now with `<meta>` elements—importantly, with the *full, absolute* URL for the file:
<!-- .after .before .balance-->

```html <!-- .all -->
<head>
	<title>Week 22</title>
	<link href="assets/icons/favicon.ico" rel="icon" sizes="any">
	<link href="assets/icons/favicon.svg" rel="icon" type="image/svg+xml">
	<link href="assets/icons/touch.png"  rel="apple-touch-icon">
	<meta content="https://typography-interaction-2526.github.io/assets/icons/meta.png" property="og:image">
	<meta content="TKTKTKTK" property="og:image:alt" >
	<!-- The rest of your head… -->
</head>
```

Note these allow an `alt` text for accessibility, in a separate tag.
<!-- .note -->

### Title and Description

Open Graph also specifies `og:title` and `og:description` properties. However, we *already* have a `<title>` element—and there was an existing convention around descriptions—which browsers, apps, and search engines continue to use.
<!-- .balance -->

We generally think including redundant `og:` versions for title/description is often unnecessary. ([SEO](https://en.wikipedia.org/wiki/Search_engine_optimization)/*snake-oil* folks might disagree.) If you are worried—or your boss tells you to—you could duplicate the tags. One reason might be to tailor different content (like your description length), for different platforms. But we don’t think it is worth it, most of the time!

Again, different apps are going to display and use this information in their own way—so there are no hard rules on length, and you’ll want to check the contexts you care about. Generally, *tweet-length* ([*toot–length*](https://joinmastodon.org)?) works well—so somewhere around 140 characters.
<!-- .before--2 .balance -->

We’ll add in a description, to our growing `<head>` stack:
<!-- .after -->

```html <!-- .all -->
<head>
	<title>Typography & Interaction</title>
	<meta property="description" content="Typography & Interaction is a year-long, two-semester course in the MPS Communication Design program at Parsons / The New School. The class will provide a rigorous foundation of typographic and interaction principles in the context of digital design.">
	<link href="assets/icons/favicon.ico" rel="icon" sizes="any">
	<link href="assets/icons/favicon.svg" rel="icon" type="image/svg+xml">
	<link href="assets/icons/touch.png"  rel="apple-touch-icon">
	<!-- The rest of your head… -->
</head>
```

Titles and descriptions should always be plain text—no HTML inside. You can usually use [entities](https://developer.mozilla.org/en-US/docs/Glossary/Entity) or encoded [non-breaking spaces](/topic/advanced-css/#nobr-and-nbsp), though!
<!-- .note -->

<figure
	@source="title-description.svg"
	class="full"
	>
</figure>

<aside class="before--3">

<mark>All metadata is only a suggestion</mark>

Google makes its *snippet* from your `description`—but it might also show other text there, based on your search. It also might decide to show your images, or not! Ultimately, you can only *suggest* these things—with all the metadata, it is up to the other side!

</aside>

### Audio and Video

<div class="verso balance">

Some sharing contexts even let you play audio or video directly, in situ, from a *share card*. This might be useful for sites oriented around media, like *Apple Music* or *YouTube*—but keep in mind the user is then *not* visiting the pages themselves, which you might prefer.

These are specified much like images, with the `og:audio` and `og:video` properties. There are [extra metadata properties](https://ogp.me/#structured) associated with the different types.

Conceptually, do you want your shared URL to function only as a link? Or somewhat *as* the thing itself?
<!-- .intro -->

</div>

<figure
	@caption="Messages allows some inline media."
	@source="audio-video.svg"
	class="recto"
	style="align-self: start; margin-block: initial"
	>
</figure>

### Schema and Web App Manifests

Beyond this, there is a (very, very) [long tail](https://en.wikipedia.org/wiki/Long_tail) of *metadata*/*structured-data* uses. Much of it will depend on the nature of your project/work, and there will be sub-conventions within conventions.

- [<cite>Schema\.org</cite>](https://www.schema.org)
	Another common structured-data format/collection.

- [<cite>Web App Manifests – MDN</cite>](https://developer.mozilla.org/en-US/docs/Web/Manifest)
	Metadata for apps.

- [<cite>Intro to How Structured Data Markup Works</cite>](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
	How Google uses these.
<!-- .right .rows--3 -->

After *Open Graph*, the most common structures you might encounter next are probably *Schema.org*, oriented around search engine (Google) snippets—and *Web app manifests* (`manifest.json`), used by [progressive web apps](https://web.dev/progressive-web-apps/). Whether these are necessary will depend on your project!

<aside>

<mark>Beware of *snake-oil* salespeople</mark>

You’ll find a lot of true-believer “SEO” junk out there, suggesting the right combination of `<meta>` elements will yield riches. Take it all with a big grain of salt (and a [patent medicine](https://en.wikipedia.org/wiki/Patent_medicine) chaser).

You can read up on [what Google actually suggests](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), but otherwise just focus on your content and semantics—your time (and someone’s money) is much better spent there!

</aside>

### `charset`

This usually isn’t *explicitly* needed these days—because browsers assume/default to it—but you might have seen it in our examples and on other sites. This specifies your document’s [character encoding](https://www.w3.org/International/articles/definitions-characters/) as [*<nobr>UTF-8</nobr>*](https://en.wikipedia.org/wiki/UTF-8), a superset of basic [ASCII](https://en.wikipedia.org/wiki/ASCII):
<!-- .balance -->

- [<cite>UTF-8 – Wikipedia</cite>](https://en.wikipedia.org/wiki/UTF-8)
	The most common, multi-lingual encoding, these days!
<!-- .right .after -->

```html <!-- .all -->
<head>
	<meta charset="utf-8">
	<!-- The rest of your head… -->
</head>
```

 Long story (very) short—this allows you to use encoded non-latin characters (and emoji 👋) directly in your HTML! To be thorough/explicit (or if you are seeing weird character junk), you can include this tag.
<!-- .before .balance -->

### `robots`

<div class="body">

You can say—well, again, really *suggest*—that your site should not be indexed by search engines with the so-called “robots tag”:
<!-- .balance .after -->

```html <!-- .all -->
<head>
	<meta name="robots" content="noindex, nofollow">
	<!-- The rest of your head… -->
</head>
```

Keep in mind though—if it is online, it can be [scraped](https://en.wikipedia.org/wiki/Web_scraping)! Many [bad actors](https://www.theverge.com/24067997/robots-txt-ai-text-file-web-crawlers-spiders) (and [“AI” companies](https://www.404media.co/websites-are-blocking-the-wrong-ai-scrapers-because-ai-companies-keep-making-new-ones/)) have shown this—and other techniques, like `robots.txt`—do not preclude your content from being indexed/ingested/reused. The web was a simpler place!
<!-- .balance .before -->

</div>

- [<cite>`<meta name="robots">` – MDN</cite>](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name/robots)
	Suggest behaviors for ’bots.

- [<cite>`robots.txt` – Wikipedia</cite>](https://en.wikipedia.org/wiki/Robots.txt)
	Same idea, in a separate file.
<!-- .right -->

<!-- TODO: rel="preload" example? -->

<!--- This no longer works Safari ≥ 26!

### `theme-color`

Finally, another recent `<head>` quirk: you can specify a [`theme-color`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color), which is used by (some) browsers to tint/color their own UI *around/outside* of the page:

- [<cite>Meta Theme Color and Trickery - CSS-Tricks</cite>](https://css-tricks.com/meta-theme-color-and-trickery/) \
	A really deep dive.

<head>
	<meta content="#fcbf04" name="theme-color">

</head>
```

This changes with pretty much *every* i&NoBreak;OS release—but as of writing, usually only shows up on Mobile Safari and Mobile Chrome. (Desktop Safari default settings [have it turned off](https://useyourloaf.com/blog/safari-15-theme-color/); Desktop Chrome has never shown it.)

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
