<script front-matter>
	const draft = true
	const title = 'An Intro to HTML'
	const week = 3
</script>

## HTML Stands for *HyperText Markup Language*

HTML is the standard markup language/format for creating web pages, containing the content and structure of a page as a series of *elements*.

- [<letter-bullet @title="HTML – MDN"></letter-bullet>](https://developer.mozilla.org/en-US/docs/Web/HTML) \
	When in doubt, refer to the MDN documentation!

- [<letter-bullet @title="Basics of HTML"></letter-bullet>](https://www.youtube.com/watch?v=CkzbI1Tv_rQ)\
	A very calming introduction by [Laurel Schwulst](https://laurelschwulst.com).

- [<letter-bullet @bullet="W" @title="Organizing Files for the Web"></letter-bullet>](https://docs.google.com/presentation/d/101TEdtacOFZhCwebijcJaX0h1BpDwhAm2SJhE3jW89c/edit#slide=id.g331f24f572_4_0)
	[Sasha Portis](https://sashaportis.com) on (web) file-naming, for when you get to saving.
<!-- .balance .link-list .right style="--rows: 4" -->

In our ongoing analogy, HTML is the _skeleton_ of the web. At its most basic it is a text file, in a folder on a computer, with a `.html` extension—*text, with instructions.*

As we heard in our first class, this format was codified by our pal [Tim Berners-Lee](https://www.w3.org/People/Berners-Lee/) in 1991, evolving from his earlier [SGML](https://en.wikipedia.org/wiki/Standard_Generalized_Markup_Language), a similar/proto language. There have been five major revisions to the spec since then, which added (and sometimes _deprecated_, or removed) tags and syntax:

- HTML 1, 1991
- HTML 2, 1995
- HTML 3, 1997
- HTML 4, 1997 (busy year)
- HTML 5, 2014
<!-- .bold -->

## The Basic Document <!-- style="--inset: -0.05em" -->

<figure @source="nesting.svg" class="verso"></figure>

<div class="recto" style="align-self: center">

HTML consists of a [range of elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element), nested inside one another, like a [matryoshka doll](https://en.wikipedia.org/wiki/Matryoshka_doll) of text.

The `<html>` element contains all elements of the page. In diagram here, the `<head>` element contains the `<title>`, and the `<body>` contains the `<h1>` and `<p>` elements.

We call these [*semantic* elements](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantic_elements)—which is saying that they give their contents a *meaning* or a *role*. (Remember [Tim’s diagram](/topic/everything/web.png).) These *roles* are then interpreted by your browser (Chrome, Safari, Firefox, etc.) when it loads the file, to ultimately display the page. We call this *parsing* the document.

</div>

<blockquote
	@attribution="Tim Berners-Lee"
	@citation="https://www.lassila.org/publications/2001/SciAm.pdf"
	>

*The Semantic Web* is not a separate Web but an extension of the current one, in which information is given well-defined meaning, better enabling computers and people to work in cooperation.

</blockquote>

### What Does That Even Mean

<div class="verso">

```html <!-- .sticky -->
<!doctype html>
<html>
	<head>
		<title>Page title</title>
	</head>
	<body>
		<h1>This is a heading</h1>
		<p>This is a paragraph.</p>
		<p>This is another paragraph.</p>
	</body>
</html>
```

</div>

<div class="recto add-before">

In our example, here is what we’ve told the computer:
<!-- .balance .bold .scale--h4 style="margin-block-end: initial" -->

- `<!doctype html>`<!-- style="--typography--scale: var(--typography--leading--tight)" -->

	What type/version of HTML this file contains, so it knows how to parse it.

	- `<html></html>`<!-- style="--typography--scale: var(--typography--leading--tight)" -->

		The root element of an HTML page, containing all the content.

	- `<head></head>`<!-- style="--typography--scale: var(--typography--leading--tight)" -->

		The *meta* information about the HTML page—like its title, default language, and any [scripts](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) and [stylesheets](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style) it needs to display the page.

		Nothing in this element is visible on the page itself!
		<!-- .secondary -->

		- `<title></title>`<!-- style="--typography--scale: var(--typography--leading--tight)" -->

			Specifies a [title](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title) for the page—which is shown in the browser’s tab, and when it is shared.

	- `<body></body>`<!-- style="--typography--scale: var(--typography--leading--tight)" -->

		 Defines the document's body—the container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.

		- `<h1></h1>`<!-- style="--typography--scale: var(--typography--leading--tight)" -->

			Defines a primary/first-level heading.

		- `<p></p>`<!-- style="--typography--scale: var(--typography--leading--tight)" -->

			Defines a paragraph.
<!-- .balance -->

</div>


We use semantic elements to help structure and describe our content—but also for accessibility (screen <nobr>readers)—</nobr>where the tag type helps indicate what things are.
<!-- .balance .add-before--3 -->

## What Are Elements? <!-- style="--inset: -0.07em" -->

[Elements](https://developer.mozilla.org/en-US/docs/Glossary/Element) are composed of tags (opening, closing) and their content:
<!-- .balance .bold .scale--h4 -->

[<letter-bullet @bullet="E" @title="HTML Elements Reference – MDN"></letter-bullet>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
	MDN will always go deep; this is *all* the elements.
<!-- .link-list .right style="--rows: 2" -->

<figure @source="tag.svg"></figure>

Some elements do not have any content or children, like `<br>` or `<img>`. These are called [*empty elements*](https://developer.mozilla.org/en-US/docs/Glossary/Empty_element), and do not have a closing tag.

### Common Elements

- #### Headings

	```html
	<h1>There should only be one first-level heading!</h1>
	```

	There are also `<h2>` `<h3>` `<h4>` `<h5>` and `<h6>`. These provide semantic organization and hierarchy for your document!

- #### Paragraphs

	```html
	<p>You should always wrap your text in a paragraph!</p>
	```

	Our basic, default text element.

- #### Links

	```html
	<a href="https://www.example.com">Links need attributes!</a>
	```

	The `<a>` is for [*anchor*](https://www.w3.org/TR/html4/struct/links.html#h-12.1)—one *end* of the link.

	The `href` (*H*ypertext *REF*erence) specifies a URL that the link points to, and the tag wraps the visible link text. This *attribute* can point to another, local HTML file (living in the same directory structure) or an external page. They can also point to specific parts of a page.

- #### Images

	```html
	<img src="example.jpg" alt="Images should have descriptions!">
	```

	The `src` likewise can point to a local image file or an external URL! `alt` provides a description for accessibility/screen readers. More on these *attributes* in a bit.

- #### Containers

	```html
	<body>
		<header>
			<!-- A header. -->
		</header>
		<main>
			<!-- Your main content. -->
		</main>
		<footer>
			<!-- The footer. -->
		</footer>
	</body>
	```

	Some others are `<nav>`, `<article>`, `<section>`, and `<div>` (when nothing else is more appropriate).

	These are the structural containers of a website. The names don’t imbue function directly, but help us organize and think about our content structure—and also are helpful for accessibility.

- #### Inline Text Elements

	```html
	<p>You may have noticed I like using<em>emphasis</em>.</p>
	```

	These wrap around bits of text (within [headings](#headings) or `<p>`) for semantic meaning and to apply specific styles using `<span>`, `<strong>`, `<em>`, `<abbr>`, `<cite>`, `<time>`, `<code>`, `<mark>`, `<del>`, `<ins>`, `<sub>`, and `<sup>`.

- #### Lists

	```html
	<ul>
		<li><!-- A list item. --></li>
		<li><!-- Another. --></li>
		<li><!-- A third. --></li>
	</ul>
	```

	If you have three of something, it is probably [a list](#lists-1)! There are also `ol`.
<!-- .balance -->

There are [many, many HTML elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element), all with particular uses. (We’ll unpack some more, later.)
<!-- .add-before--2 .balance .bold .scale--h4 -->

## Attributes

All HTML elements can have [attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes), which provide more information about the element:
<!-- .balance .bold .scale--h4 -->

[<letter-bullet @bullet="A" @title="HTML Attribute Reference – MDN"></letter-bullet>](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)
	There are a lot of them.
<!-- .link-list .right -->

<figure @source="attr.svg"></figure>

### Common Attributes

- #### Language

	```html
	<html lang="en"></html>
	```

	The `lang` attribute of the `<html>` tag declares the language of the Web page.

- #### HyperText Reference

	```html
	<a href="https://www.example.com">Goes to example.com</a>
	```

	The `href` attribute of `<a>` specifies the URL of the page the link goes to.

- #### Target

	```html
	<a href="https://www.example.com" target="_blank">New tab!</a>
	```

	The `target` attribute `_blank` can tell a `<a>` to open in a new window/tab.

	This can be annoying, so use it judiciously! <!-- .secondary -->

- 	#### Style

	```html
	<p style="color: blue;">This is blue text.</p>
	```

	The `style` attribute is used to add styles to an element, such as color, font, size, etc.

	We’ll use CSS for this kind of thing, but know this is how it used to be done and it was brittle and terrible. <!-- .secondary -->

- #### Source

	```html
	<img src="example.jpg">
	```

	The `src` attribute of `<img>` specifies the path to the image to be displayed.

	```html <!-- .add-before -->
	<iframe src="https://typography-interaction-2425.github.io"></iframe>
	```

	Same thing for an `<iframe>`, which is [a little window](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) into another website.

- #### Dimensions

	```html
	<img src="example.jpg" width="200px" height="200px">
	```

	The `width` and `height` attributes of `<img>` provide size information for images.

	Not required, but helps prevent layout “sloshing” as images load. <!-- .secondary -->

- #### Alternate Text

	```html
	<img src="example.jpg" alt="A description of the image.">
	```

	The `alt` attribute of `<img>` provides an alternate text for an image, used by screen readers.


- #### Identifier

	```html
	<h2 id="a-heading-element">A heading element</h2>
	```

	```html
	<a href="#a-heading-element">Goes to “a heading element”</a>
	```

	The `id` specifies a singular, unique element on a page—for CSS targeting and <span id="anchor-links">anchor (*scroll*, *jump*) links</span>, prepended with `#`.

- #### Class

	```html
	<p class="warning">We’ll get into this soon.</p>
	```

	The `class` attribute provides an additional way to select the element in CSS or JS.
<!-- .balance -->

## Case, White Space, Tabs, Line Breaks

Generally speaking, HTML doesn’t care about capitalization, extra white space, or line breaks (one exception, [below](#inline-whitespace)). The browser will just read everything from left to right, as if it is one long, running sentence. So the shouty `<HTML>` and quieter `<html>` are interpreted the same.

[<letter-bullet @bullet="W" @title="How Whitespace Is Handled – MDN"></letter-bullet>](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Whitespace)
	It depends.
<!-- .link-list .right style="--lines: 2" -->

The browser parses both of these in the exact same way:
<!-- .add-before--3 .add-after .balance .bold .scale--h4 -->

```html <!-- .verso -->
<body>
	<h1>Dog Breeds</h1>
	<p>There are many kind of dog breeds</p>
	<ul>
		<li>German Shepherd</li>
		<li>Bulldog</li>
		<li>Poodle</li>
	</ul>
</body>
```

```html <!-- .recto -->
<body><h1>Dog Breeds</h1><p>There are many k
ind of dog breeds</p><ul><li>German Shepherd
</li><li>Bulldog</li><li>Poodle</li></ul></body>
```

But obviously, the left one here is much more readable to us humans. We can use white space, tabs/indenting, and line breaks to make it easier for us to read the code.
<!-- .add-before--2 .balance -->

There are a lot of common patterns used—like indenting to indicate hierarchy/nesting. But there are also no wrong ways to do it! In HTML, spaces are code *ergonomics* for you—just like a good chair or desk—that allow you to work more comfortably.
<!-- .add-before--3 -->

<blockquote
	@attribution="Guido van Rossum"
	@citation="https://peps.python.org/pep-0008/"
	>

Code is read more often than it is written. Code should always be written in a way that promotes readability.

</blockquote>

## Block Elements

[*Block-level elements*](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements) always start on a new line, and take up the full width available—stretching out to the left and right of their parent/container. They stack on top of each other. Importantly, block elements can have a top and bottom margin, unlike inline elements.
<!-- .add-after -->

`<address>`
`<article>`
`<aside>`
`<blockquote>`
`<canvas>`
<!-- .one -->

`<dd>`
`<div>`
`<dl>`
`<dt>`
`<fieldset>`
<!-- .two -->

`<figcaption>`
`<figure>`
`<footer>`
`<form>`
<span class="nowrap">`<h1>` – `<h6>`</span>
<!-- .three -->

`<header>`
`<hr>`
`<li>`
`<main>`
`<nav>`
<!-- .four -->

`<noscript>`
`<ol>`
`<p>`
`<pre>`
`<section>`
<!-- .five -->

`<table>`
`<tfoot>`
`<ul>`
<!-- .six -->

<figure
	@caption="These are live, *editable* examples!"
	@source="block/preview"
	style="--lines: 15"
	>
</figure>

## Inline Elements

[*Inline elements*](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements) do *not* start on a new line, and only take up as much width as necessary. You can think of these as the little metal slugs [from printing](<https://en.wikipedia.org/wiki/Slug_(typesetting)>). Other text and inline elements will continue to flow around them, and they can wrap to new lines:

`<abbr>` `<a>` `<cite>` `<code>` `<del>` `<em>` `<img>` `<ins>` `<mark>` `<span>` `<strong>` `<sub>` `<sup>` `<time>`
<!-- .add-before .balance -->

<figure
	@source="inline/preview"
	style="--lines: 13"
	>
</figure>

### Inline Whitespace

Inline elements [are the exception](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Whitespace#spaces_in_between_inline_and_inline-block_elements) to the “white space is generally ignored” rule: extra space between inline elements will always be reduced—*collapsed*—to one space.
<!-- .balance .verso -->


<div class="recto">

```html
<p>
	<span>Hello</span>
	<span>World</span>
</p>
```

…displays as `Hello World`, not  `HelloWorld`.

</div>

## So Many Elements

### Comments

You can *comment* part of the code and the browser won’t show it. [Comments](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started#html_comments) are often used to explain your thinking, organize your code, “turn off” a bit of code, or temporarily hide whatever you’d like.

<figure
	@caption="Keep in mind these are still readable in the *source*."
	@source="comment/preview"
	style="--lines: 11"
	>
</figure>

We *highly* recommend getting into a habit of commenting your code, especially when starting out!
<!-- .balance -->

If you figure something tricky out, write down why and how you solved it to help you understand and remember. And you’ll often come back to things. *Commenting your code is a gift to your future self!*

### Lists

Any time you have more than two of something, you probably have [a *list*](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#lists). These are commonly used for semantic navigation elements, as well—think *“here’s a list of links in this site”*:

<figure
	@source="list/preview"
	style="--lines: 21"
	>
</figure>

### Description Lists

There are [specific lists](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl) for defining things:

<figure
	@caption="These aren’t much to look at without CSS, though. Soon!"
	@source="description-list/preview"
	style="--lines: 16"
	>
</figure>

### Details&thinsp;/&thinsp;Summary

There is even some basic interactivity (way, way ahead of JavaScript) with [*details disclosure*](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details) elements that open and close:

<figure
	@caption="You can do a lot with these, without any JavaScript!"
	@source="details-summary/preview"
	style="--lines: 18"
	>
</figure>

### Tables

[*Tables*](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) can we used to display *tabular* data:

<figure
	@caption="This syntax is pretty verbose, for what you get."
	@source="table/preview"
	style="--lines: 16"
	>
</figure>

They used to be the only way to achieve multi-column or grid layouts, but that has luckily since been replaced by modern CSS techniques like `flexbox`, and `grid`. (Or even `float`.) We’ll talk about those later!

Again, there are [many, many, many, many HTML elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element). Try and find the one that best fits your usage, wherever possible using a *semantic* element that fits your content.
<!-- .add-before--3 .balance .bold .scale--h4 -->

## User-Agent Styles

We haven’t applied any styles/CSS here yet, so everything we see in these examples is based on the [*user-agent* stylesheets](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade#user-agent_stylesheets)—that is, each browser’s own default display (and behavior) for an element type.

This is what the web was, before CSS! But as a designer, rarely what you want. We’ll get into writing our own styles in the coming weeks.

<blockquote
	@attribution="W3C, HTML Design Principles"
	@citation="https://www.w3.org/TR/html-design-principles/#priority-of-constituencies"
	>

In case of conflict, consider users over authors over implementors over specifiers over theoretical purity.

In other words costs or difficulties to the user should be given more weight than costs to authors; which in turn should be given more weight than costs to implementors; which should be given more weight than costs to authors of the spec itself, which should be given more weight than those proposing changes for theoretical reasons alone.

Of course, it is preferred to make things better for multiple constituencies at once.

</blockquote>
