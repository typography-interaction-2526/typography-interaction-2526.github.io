<script front-matter>
	const draft = true
	const title = 'An Intro to JavaScript'
	const week = 17
</script>

## The *Muscles* of the Web

JavaScript is the language/format for adding interactivity to a web page—based on actions or *events* from the user. Where do we even start with *JS*? (Everyone says *jay-ess*.) It is so massive and often seems unapproachable. So we’ll go through a bit of background, and then start with some very practical examples you might want in your work.

- [<cite>JavaScript: Adding interactivity – MDN</cite>](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity)
	There are *literally* millions of sites about JS, but let’s start with MDN.

- [<cite>JavaScript – MDN</cite>](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)
	Another MDN into.

- [<cite>Highest-scored JavaScript Questions – Stack Overflow</cite>](https://stackoverflow.com/questions/tagged/javascript?tab=Votes)
	It’s like [Reddit](https://www.reddit.com/r/javascript/) for code! (Always check the year on answers. Some are *old*&hairsp;!)

- [<cite>The Modern Javascript Tutorial</cite>](https://javascript.info)
	This reference goes very advanced/in-depth.

- [<cite>Eloquent JavaScript</cite>](https://eloquentjavascript.net)
	Also goes deep.
<!-- .right .rows--5 -->

Going back to [a very early analogy](/topic/everything/#even-things-that-aren-t-web-pages-are-web-page-like), JavaScript is the *muscles* of the web. Like [HTML](/topic/html/) (the *bones*) and [CSS](/topic/css/) (the *skin*), it is ultimately still just text that is parsed by our browsers. Like CSS, it can live within HTML documents, but is usually saved separately with the extension `.js`&thinsp;.
<!-- .before--3 -->

JavaScript was first created by [Brendan Eich](https://brendaneich.com/2008/04/popularity/) over just *10 days* in 1995, and has been through a myriad of evolutions, paths, missteps, and enhancements [since then](https://en.wikipedia.org/wiki/JavaScript#History). It has nothing formally to do with *Java*, confusingly—other than being contemporaries and sort-of competitor, thus the name. (Coffee-culture was really big in the 90s!) JavaScript won the race, by every measure, and is ubiquitous on the modern web.

<br><br><br>

<blockquote
	@attribution="Brendan Eich"
	@citation="https://www.infoworld.com/article/2653798/javascript-creator-ponders-past--future.html"
	@class="add-before"
	>

The idea was to make something that Web designers, people who may or may not have much programming training, could use to add a little bit of animation or a little bit of smarts to their Web forms and their Web pages.

</blockquote>

Like HTML&thinsp;/&thinsp;CSS, JavaScript was a malleable, *interpreted* (not [*compiled*](https://en.wikipedia.org/wiki/Compiled_language)) language running in the browser—meaning the source code could be seen by anyone, and anyone could borrow or modify it for their needs. You could always [“pop the hood”](/topic/inspector/) to see how it worked. And then as our computers—and thus our browsers—became faster and cheaper, JS was used for more and more things.

Remember that now the tendrils of JavaScript [are almost everywhere](/topic/everything/#its-increasingly-just-js-behind-the-scenes)—running headless on servers, rendering whole sites, talking to hardware, [processing NASA images](https://www.theverge.com/2022/8/18/23206110/james-webb-space-telescope-javascript-jwst-instrument-control), and so on. It’s web technologies, all the way down.

## Libraries&thinsp;/&thinsp;Frameworks vs. Plain&thinsp;/&thinsp;&thinsp;Vanilla JS

You’ll often hear folks talk about *libraries* or *frameworks* in the context of JavaScript—one of the ways it is so malleable. These are collections of Javascript code with their own specific purpose, ideas, paradigms, and syntax that expand upon what the language can do (or can do quickly or easily) on its own, *out of the box*.

Things like [jQuery](https://jquery.com) (very old-school, now), [Node](https://nodejs.org/en/), [React](https://reactjs.org), [Vue](https://vuejs.org), [Angular](https://angular.io), [<span class="small-caps">D3</span>](https://d3js.org), and [p5](https://p5js.org) (to name some popular ones) are all written *in* and are interfaced *with* (so controlled by) JavaScript as well. They are often created to do something JavaScript doesn’t yet support on its own (in/famously, *jQuery*) or with a niche use/focus (like data-visualization, with *D3*). There are many, many frameworks and libraries.

When you write JS without libraries, it is called *plain* or *vanilla* JavaScript.
<!-- .intro -->

The language has evolved so much that we can do a lot, here, and this is where we’ll start. And while JS does many things, we’ll first just use it in the most simple way—to make our web pages more interactive.
<!-- .before -->

## Where Does JS Live?

Very much [like CSS](/topic/css/#where-css-lives), JavaScript code can live in several places:
<!-- .intro -->

1. *Inline* as attributes on elements
1. Inside `script` elements within HTML documents <!-- eslint-ignore-line -->
1. As separate/external `.js` files *(the right way)*, via `src` attributes
<!-- .all .bold -->

### 1.&emsp;Inline Event Handlers

JS was first added directly in [attributes](/topic/html/#attributes) in HTML tags, just like CSS—but attached and “listening” for [specific events](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes#event_handler_attributes):
<!-- .add-after -->

```html <!-- style="max-inline-size: var(--layout--page)" -->
<button onclick="alert('The button was clicked!');">Click here!</button>
```

Note the single quotes when nested/inside doubles!
<!-- .note -->

This works for very, very simple things, but—for many of the same reasons as inline CSS—is brittle and doesn’t scale with complexity, or across multiple pages. Try writing a whole, elaborate function in there, let alone an entire framework! No good.
<!-- .before--2 -->

<aside>

<mark>Use caution: outdated examples abound</mark>

You might see these inline events in old examples/code, but don’t use these now! If you see them, it’s probably an indication the code is outdated (or your developers are feral).

</aside>

### 2.&emsp;Wrapped in `<script>` Tags

And again like CSS, JavaScript can be enclosed in its own special tag, the [`<script>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script). (These are also, somewhat confusingly, called *inline* scripts.) Anything inside the tag should be written in JavaScript syntax and will be executed *right away*—in the order/position of the tag within the HTML document.

- [<letter-bullet @bullet="S" @title="`<script>` The Script element – MDN"></letter-bullet>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
	More minutia on using these in-HTML elements.

- [<letter-bullet @bullet="V" @title="Storing the information you need — Variables – MDN"></letter-bullet>](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Variablest)
	Variables are always going to make your life easier.
	<!-- .link-list .right style="--rows: 3" -->

<!--- Rail links for element and variables. --->

Since this script isn’t directly *on* an element anymore (as above), we then have to identify the *target* element with [a `querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector), and then *attach* [the `click` event](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event) to it via [`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener):
<!-- .add-before--2 .balance -->

<figure
	@source="element/preview"
	@style="--lines: 22"
	@caption="Note the different `// comment syntax` for JS! And we had to add `cursor: pointer;` for the button in our CSS, to indicate it is actionable. Mind your affordances!"
	>
</figure>

We also store (declare) the element here as a [*variable*](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables), to keep our code readable and reusable. These are a bit like their [CSS counterparts](/topic/responsive/#briefly-css-variables). Ergonomics!
<!-- .balance .add-after--2 -->

#### Oh Also, `<noscript>`

Some folks block/disable JavaScript—for performance or accessibility reasons, or to hide advertising/annoyances, [and so on](https://softwareengineering.stackexchange.com/questions/26179/why-do-people-disable-javascript). This is less and less common these days, since so many sites *completely rely* on JS. It isn’t always feasible to replicate your site behavior entirely *without* JS, but you can use a special [`<noscript>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript) to show content only when scripting is turned off:
<!-- .add-after .balance -->

```html <!-- style="max-inline-size: var(--layout--page)" -->
<noscript class="warning">
	Our site uses JavaScript for some of its functionality, which is disabled in your browser.
</noscript>
```

You can test these by [disabling JavaScript](https://developer.chrome.com/docs/devtools/javascript/disable/) in your DevTools.
<!-- .secondary -->

### 3.&emsp;Separate&thinsp;/&thinsp;External `.js` Files

By far the most common, flexible way to include JavaScript is externally—again, like CSS. The difference here is that instead of a `<link>` element, we still use a (now empty) `<script>` tag, with the addition of a `src="filename.js"` attribute:
<!-- .add-after -->

- [<letter-bullet @bullet="Q" @title="Document: `querySelector()` method – MDN"></letter-bullet>](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
	This is how you target HTML elements in JS.

- [<letter-bullet @title="EventTarget: `addEventListener()` method – MDN"></letter-bullet>](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
	And then listen for *events* happening on them.
	<!-- .link-list .right style="--rows: 3" -->

<!-- ADD QUERYSELECTOR and addEventListener HERE -->

```html
<script defer src="script.js"></script>
```

I’ve never liked this empty-tag syntax, what can you do.
<!-- .secondary -->

This will still run when the document gets to the `<script>` (and in its place/order) as before, and the `defer` attribute allows it to “see” the HTML (not yet loaded) below it.
<!-- .add-before -->

We can then move the script up into our `<head>`, along with our other external files:
<!-- .add-before--3 .balance -->

<figure
	@source="external/preview"
	@style="--lines: 14"
	@caption="Stays readable/clean with long documents and lots of files. Where there is one JS file, there are often many."
	>
</figure>

It’s the same JavaScript and behavior as the inline example above—but now moved over into a nice, separate, JS-syntax-highlighted file that can be re-used across pages. [*This is the way.*](https://www.youtube.com/watch?v=Mw7zSQ7ja7Y)

## Adding&thinsp;/&thinsp;Removing a Class

Okay, time for a more practical example: probably the most common thing you will use JS for—especially as we’re starting out—is simply to add or remove (toggle) a class from something when the user interacts with your page (such as clicking on a menu).

- [<letter-bullet @bullet="C" @title="Element: `classList` property – MDN"></letter-bullet>](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
	Controls the CSS classes on an element.
	<!-- .link-list .right style="--rows: 2" -->

Like with our [*transition*](/topic/advanced-css/#transitions) examples, the element needs two states in your CSS: *without* the class and then *with* the class. The JavaScript interaction/event will just switch between them, and our CSS `transition` will smooth out the… transition.

We’ll again use `querySelector` and `addEventListener` to listen for clicks, but then modify [the `classList`](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) of a *different* element:
<!-- .add-before--3 -->

<figure
	@source="classlist/preview/?active=style.css"
	@style="--lines: 13"
	@caption="Note the [camelCase](https://en.wikipedia.org/wiki/Camel_case) variable names, which is the JavaScript convention. Longer, more-descriptive names will help as your code gets more complex."
	>
</figure>

The class can be toggled on any element in your HTML (or sometimes, even just on `document.body` itself)! `querySelector` takes *any* CSS selector, even other classes. Also you an specifically use `classList.add` and `classList.remove`, if you don’t want the on-and-off behavior from `classList.toggle`!

You can do many, many things with this basic “add a class” JS! It’s the basis for much of the interactivity you see online.
<!-- .scale--h4 .bold .balance .add-before-->

## Opening a Modal

You might also want to use JavaScript to “open” [a modal `dialog`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) element—which you might use for a menu, an overlay, or a lightbox. (In the software sense, [a *modal* means](https://en.wikipedia.org/wiki/Modal_window) your visitor *must* interact with the `dialog` before they can do anything else.)

- [<letter-bullet @bullet="D" @title="`<dialog>`: The Dialog element – MDN"></letter-bullet>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
	You used to have to write a lot more JS for these!

- [<letter-bullet @bullet="B" @title="`::backdrop` – MDN"></letter-bullet>](https://developer.mozilla.org/en-US/docs/Web/CSS/::backdrop)
	Style the overlays with these.
	<!-- .link-list .right style="--rows: 2" -->

You could (and used to) do this by [adding/removing classes](#adding-removing-a-class), but this new(ish) approach gives us some nice “free” behaviors—making the rest of the page [`inert`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/inert), adding [a `::backdrop` pseudo-element](https://developer.mozilla.org/en-US/docs/Web/CSS/::backdrop), stopping background scrolling, and even listening to <kbd>Esc</kbd> for dismissing/closing the element. It’s a lot of useful behavior without much code:

<figure
	@source="dialog/preview/?active=script.js"
	@style="--lines: 20"
	@caption="Note the `style.css` changes to make the `dialog` appear as we want!"
	>
</figure>

<!-- TODO Add some kind of if/else to diaglog/modal example -->

## Watching for Scrolling

Another very common use for JavaScript is to do something when an element enters or exits the viewport (scrolling into or out of view)—like fading or moving something in. (Remember, using/responding to the viewport is always very *web-y!*&thinsp;)

- [<letter-bullet @bullet="N" @title="Intersection Observer API – MDN"></letter-bullet>](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
	Watch for things entering/exiting the viewport.

- [<letter-bullet @bullet="L" @title="`if`…`else` – MDN"></letter-bullet>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
	Conditional logic blocks, “if this then that.”
	<!-- .link-list .right style="--rows: 2" -->

Again we’ll need two states in our CSS—defined with/without a class. But now we’ll make use of the user’s scrolling, instead of a click, to toggle the between them.

This used to be *unnecessarily* hard in JavaScript, and was one of the things jQuery was created to help with. Nowadays we can easily use [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) to watch the element:
<!-- .add-before--3 .balance -->

<figure
	@source="intersection/preview/?active=script.js"
	@style="--lines: 18"
	@caption="Note the [`if` / `else`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) statement, an example of [conditional logic](https://en.wikipedia.org/wiki/Conditional_(computer_programming))!"
	>
</figure>

### Loops

You will often want to use this on multiple elements—and remember, when in code, [*don’t repeat yourself*](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)*!*
<!-- .balance -->

- [<letter-bullet @bullet="A" @title="Element: `querySelectorAll()` method – MDN"></letter-bullet>](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll)
	Gets multiple elements.

- [<letter-bullet @bullet="F" @title="`forEach()` – MDN"></letter-bullet>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
	And “loop” through them.
	<!-- .link-list .right style="--rows: 3" -->

So we can use [`querySelectorAll`](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll) to select *multiple* elements—which gives us a [*NodeList*](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) (a kind of [*Array*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array))—and then use a [`forEach`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) *loop* to run the same class for each of them:
<!-- .balance -->

<figure
	@source="intersection-loop/preview/?active=script.js"
	@style="--lines: 22"
	@caption="Here we’ve also adjusted the [`rootMargin`](https://www.smashingmagazine.com/2021/07/dynamic-header-intersection-observer/#rootmargin) from the viewport/default, so the elements don’t transition immediately."
	>
</figure>

<!---
TODO:
Add/remove node, manipulate text example?
--->

## Some Miscellaneous JS Tips

Alright, that is a lot. Like we’ve been saying—JavaScript is *A Whole Thing*. Here are some other tips, as you start to explore:
<!-- .bold .scale--h4 .balance -->

- Using `alert(yourVariable)` for *telemetry*/*debugging* can quickly be pretty annoying—instead, you can use `console.log(yourVariable)` to show messages in the [DevTools console](/topic/inspector/#the-console).

	A quick `console.log('Hello world!')` can check if things are plugged in right. The console will also show any JavaScript errors!

	In other languages, these functions are often, ironically, called *print*.<!-- .secondary -->

- Search on [*Stack Overflow*](https://stackoverflow.com/questions/tagged/javascript)&thinsp;! Someone has likely had your problem, before. Many people don’t really *know* JS (myself included)… so much as they really know how to find things on *SO* (and elsewhere).

- This brings us back to LLM&thinsp;s, *large language models* (“artificial intelligence”)—tools like [Chat&thinsp;GPT](https://openai.com/blog/chatgpt), [GitHub Copilot](https://github.com/features/copilot), or the [DeepSeek](https://www.deepseek.com/) everyone is in a panic over. These *can* be useful; we use them ourselves. But much like *Stack Overflow*, you have to know what to look for, and need a level of understanding to do this to and to discern the value from the noise/code salad.

<aside style="margin-block: initial">

We don’t want you to treat code from *anywhere* as a [“black box”](https://en.wikipedia.org/wiki/Black_box)—we want you to *understand* it.

Copying wholesale from these—or any other source—does not demonstrate your understanding. We’ll remind you of our [syllabus discussion on this](/syllabus/#code-plagiarism). Always attribute and explain to us *what you learned!*

</aside>

- Ignore any examples that have lots of dollar signs, like `$("something").else`—it means this is [jQuery](https://en.wikipedia.org/wiki/JQuery), and so is pretty outdated! (Eric really, *really* doesn’t like jQuery.)

- To quickly get recent/modern, *vanilla* JavaScript results, instead include “*ES&thinsp;6*&thinsp;” in your search—this refers to a more recent, easier-to-use syntax.

- Relatedly, if you see “arrow functions” (with `=>`&thinsp;) it is a pretty good sign the answer is relatively recent.

- Like [HTML](/topic/html/#case-white-space-tabs-line-breaks)/[CSS](/topic/css/#ergonomics), JS does not care about whitespace or tabbing. But it *is* [case-sensitive](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#basics)! (The most common JS convention is *camelCase*.)

- You’ll also see a lot of semicolons `;` but secretly you (almost never) actually need them! Declutter your code.
<!-- .balance .add-after--3 -->

<blockquote
	@attribution="Jeff Atwood"
	@citation="https://blog.codinghorror.com/the-principle-of-least-power"
	>

Any application that *can* be written in JavaScript, *will* eventually be written in JavaScript.

</blockquote>
