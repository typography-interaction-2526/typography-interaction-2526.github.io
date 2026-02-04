<script front-matter>
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
	@attribution="Brendan Eich, 2008"
	@citation="https://www.infoworld.com/article/2653798/javascript-creator-ponders-past--future.html"
	@class="add-before"
	>

The idea was to make something that Web designers, people who may or may not have much programming training, could use to add a little bit of animation or a little bit of smarts to their Web forms and their Web pages.

</blockquote>

Like HTML/CSS, JavaScript was a malleable, *interpreted* (not [*compiled*](https://en.wikipedia.org/wiki/Compiled_language)) language running in the browser—meaning the source code could be seen by anyone, and anyone could borrow or modify it for their needs. You could always “[pop the hood](/topic/inspector/)” to see how it worked. And then as our computers—and thus our browsers—became faster and cheaper, JS was used for more and more things.

Remember that now the tendrils of JavaScript [are almost everywhere](/topic/everything/#its-increasingly-just-js-behind-the-scenes)—running headless on servers, rendering whole sites, talking to hardware, [processing NASA images](https://www.theverge.com/2022/8/18/23206110/james-webb-space-telescope-javascript-jwst-instrument-control), and so on. It’s web technologies, all the way down.

## Libraries&thinsp;/&thinsp;Frameworks vs. Plain&thinsp;/&thinsp;Vanilla JS

You’ll often hear folks talk about *libraries* or *frameworks* in the context of JavaScript—one of the ways it is so malleable. These are collections of Javascript code with their own specific purpose, ideas, paradigms, and syntax that expand upon what the language can do (or can do quickly or easily) on its own, *out of the box*.

Things like [*jQuery*](https://jquery.com) (very old-school, now), [*Node*](https://nodejs.org/en/), [*React*](https://reactjs.org), [*Vue*](https://vuejs.org), [*Angular*](https://angular.io), [*D3*](https://d3js.org), and [*p5*](https://p5js.org) (to name some popular ones) are all written *in* and are interfaced *with* (controlled by) JavaScript as well. They are often created to do something JavaScript doesn’t yet support on its own (<nobr>in/famously</nobr>, *jQuery*) or with a niche use/focus (like data-visualization, with *D3*). There are many, many frameworks and libraries.

When you write JS without libraries, it is called *plain* or *vanilla* JavaScript.
<!-- .intro -->

The language has evolved so much that we can do a lot, here, and this is where we’ll start. And while JS does many things, we’ll first just use it in the most simple way—to make our web pages more interactive.
<!-- .before -->

## Where Does JS Live?

Very much [like CSS](/topic/css/#where-css-lives), JavaScript code can live in several places:
<!-- .intro -->

<!--- For future you: there is a “zero-width joiner” in the `<script>` here to fix syntax/linting. --->
1. *Inline* as attributes on elements
1. Inside `<‍script>` elements within HTML documents
1. As separate/external `.js` files *(the right way)*, via `src=""` attributes
<!-- .all -->

### 1.&emsp;Inline Event Handlers <!-- #inline -->

JS was first added directly in [attributes](/topic/html/#attributes) in HTML tags, just like CSS—but attached and “listening” for [specific events](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes#event_handler_attributes):
<!-- .add-after -->

```html <!-- .all -->
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

### 2.&emsp;Wrapped in `<‍script>` Tags <!-- #in-html -->

And again like CSS, JavaScript can be enclosed in its own special tag, the [`<‍script>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script).
<!-- .balance -->

- [<cite>`<‍script>` The Script element – MDN</cite>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
	More minutia on using these in-HTML elements.

- [<cite>Document: `querySelector()` method – MDN</cite>](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
	This is how you find/specify/target HTML elements in JS.

- [<cite>EventTarget: `addEventListener()` method – MDN</cite>](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
	And then listen for *events* happening on them—`onclick` is a shorthand.
<!-- .right .rows--5 -->

These are also often, somewhat confusingly, called *inline* scripts.
<!-- .note -->

Anything inside the tag should be written in JavaScript syntax and will be executed *right away*—in the order/position of the tag within the HTML document. This is why you will often see them right before `</body>`, so they can “see” the whole page before!
<!-- .before--2 .balance -->

Since this script isn’t directly *on* an element anymore (as above), we then have to identify the *target* element with [a `querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector), and then *attach* [an `addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) on it, *listening* for [the `click` event](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event):
<!-- .before--2 .balance -->

<figure
	@source="element/preview/?width=75%"
	@style="--lines: 21"
	@caption="Note the different `// comment syntax` for JS! And we had to add `cursor: pointer;` for the button in our CSS, to indicate it is actionable. Mind your affordances!"
	>
</figure>

### 3.&emsp;Separate&thinsp;/&thinsp;External `.js` Files <!-- #external -->

By far the most robust, flexible way to include JavaScript is externally—again, like CSS. The difference here is that instead of a `<link>` element, we still use a (now empty) `<‍script>` tag, with the addition of a `defer` and `src="filename.js"` attribute:
<!-- .balance -->

- [<cite>`defer` property – MDN</cite>](https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement/defer)
	Needed for `<head>` scripts to “see” your HTML!
<!-- .right .rows--3 -->

```html
<script defer src="script.js"></script>
```

Michael has always disliked this empty-tag syntax; what can you do.
<!-- .note -->

This will still run when the document gets to the `<‍script>` (and in its place/order) as before—but the additional `defer` attribute allows it to “see” the HTML (not yet loaded) below it. Without this attribute, it doesn’t know about the rest of the page!
<!-- .before--2 -->

Prior to (the relatively recent) `defer`, you could wrap logic in a `DOMContentLoaded` or `load` event listener. You’ll likely see this is older examples/suggestions online!
<!-- .note -->

We can then move the script up into our `<head>`, along with our other external files:
<!-- .before--2 .balance -->

<figure
	@source="external/preview/?width=75%"
	@style="--lines: 16"
	@caption="Stays readable/clean with long documents and lots of files. Where there is one JS file, there are *often* many!"
	>
</figure>

It’s the same exact JavaScript and behavior as the inline example above—but now moved over into a nice, separate, JS-syntax-highlighted file that can be re-used across pages. [*This is the way*](https://www.youtube.com/watch?v=Mw7zSQ7ja7Y).

The most resilient, easiest way to use JavaScript is in a separate file—just like CSS, for all the same reasons.
<!-- .intro -->

#### Oh Also, `<noscript>` <!-- .before--3 -->

Some folks block/disable JavaScript—for performance or accessibility reasons, or to hide advertising/annoyances, [and so on](https://softwareengineering.stackexchange.com/questions/26179/why-do-people-disable-javascript). This is less and less common these days, since so many sites *completely rely* on JS. It isn’t always feasible to replicate your site behavior entirely *without* JS, but you can use a special [`<noscript>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript) to show content only when scripting is turned off:
<!-- .after .balance -->

```html <!-- .all -->
<noscript class="warning">
	Our site uses JavaScript for some of its functionality, which is disabled in your browser.
</noscript>
```

You can test these by [disabling JavaScript](https://developer.chrome.com/docs/devtools/javascript/disable/) in your DevTools.
<!-- .note -->

## Adding&thinsp;/&thinsp;Removing a Class

Okay, time for a more practical example: probably the most common thing you will use JS for—especially as we’re starting out—is simply to add or remove (*toggle*) a class from something when the user interacts with your page (such as clicking on a menu).

- [<cite>Storing the information you need—Variables – MDN</cite>](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Variables)
	Variables are always going to make your life easier.

- [<cite>Element: `classList` property – MDN</cite>](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
	Controls the CSS classes on an HTML element.
<!-- .right .rows--4 -->

Like with our earlier [*transition*](/topic/advanced-css/#transitions) examples, the element needs two *states* in your CSS: *without* the class and then *with* the class. The JavaScript interaction/event will just switch between them, and our CSS `transition` will smooth out the change. Keep in mind here that the JS doesn’t (and shouldn’t/needn’t) do anything visual, itself! That is still the domain of our styles.

We’ll again [use `querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) to target our elements—but here we’ll store them as [*variables*](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables) to keep our code readable and reusable. These are much like their [CSS counterparts](/topic/responsive/#briefly-css-variables)! Mind your ergonomics.
<!-- .balance .before--2 -->

Then using our variables, we’ll again add [an `addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) to listen for [a `click`](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event), now modifying [the `classList`](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) (CSS classes) of a *different* element—to switch between our two states:
<!-- .balance -->

<figure
	@source="classlist/preview/?active=script.js&width=75%"
	@style="--lines: 12"
	@caption="Note the [camelCase](https://en.wikipedia.org/wiki/Camel_case) variable names, which is the JavaScript convention. Longer, more-descriptive names will help as your code gets more complex."
	>
</figure>

JavaScript’s `querySelector` takes *any* CSS selector, even other classes—and will return the first matching instance. The `classList` can be modified on any element in your HTML (or sometimes, even just on `document.body` itself)! You can also specifically use `classList.add` and `classList.remove`, if you don’t want or need to separate the on-and-off behavior from `classList.toggle`&thinsp;!
<!-- .balance -->

You can do many, many things with this basic “toggle a class” JS! It’s the basis for much of the interactivity you see online.
<!-- .intro -->

## Opening a Modal

You might also want to use JavaScript to “open” [a modal `<dialog>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) element—which you might use for a menu, an overlay, or a lightbox. (In the software sense, [a *modal* means](https://en.wikipedia.org/wiki/Modal_window) your visitor *must* interact with the `<dialog>` before they can do anything else.)

- [<cite>`<dialog>`: The Dialog element – MDN</cite>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
	You used to have to write a *lot* more JS for these!

- [<cite>`::backdrop` – MDN</cite>](https://developer.mozilla.org/en-US/docs/Web/CSS/::backdrop)
	Style the overlays behind them.
<!-- .right .rows--2 -->

You could (and used to) do this by [adding/removing classes](#adding-removing-a-class)—but this newer element uses JS to toggle an `open` attribute (akin to [`<details>`/`<summary>`](/topic/html/#details-summary)) for the two states. This approach gives us some nice “free”, built-in behaviors: making the rest of the page [`inert`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/inert), adding [a `::backdrop` pseudo-element](https://developer.mozilla.org/en-US/docs/Web/CSS/::backdrop), ~~stopping background scrolling~~ (this [still](https://css-tricks.com/prevent-a-page-from-scrolling-while-a-dialog-is-open/) needs CSS!), and even listening to <kbd>Esc</kbd> for dismissing/closing the modal.
<!-- .balance -->

It’s a lot of useful behavior without too much code:
<!-- .before--2 -->

<figure
	@source="dialog/preview/?active=script.js&width=75%"
	@style="--lines: 24"
	@caption="Note the `style.css` changes to make the `dialog` appear as we want!"
	>
</figure>

## Watching for Scrolling

Another very common, designer-y use for JavaScript is to do something when an element enters or exits the viewport, scrolling into or out of view—like fading, highlighting, or moving something in. Remember, acknowledging and responding to the viewport is always very *web-y!*

- [<cite>Intersection Observer API – MDN</cite>](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
	Watch for things entering/exiting the viewport.

- [<cite>`if`…`else` – MDN</cite>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
	Conditional logic blocks, “if this then that.”
<!-- .right .rows--3 -->

Again we’ll need two states in our CSS, defined with and without a class. But now we’ll make use of the user’s scrolling—instead of a `click` event—to toggle the between the two visual states. Our JS still *only* adds/removes the class!

This used to be *unnecessarily* hard in JavaScript, and was one of the things [*jQuery*](https://jquery.com/) was created to help with. Nowadays we can easily use [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) to watch the element:
<!-- .before--2 .balance -->

<figure
	@source="intersection/preview/?active=script.js&width=75%"
	@style="--lines: 18"
	@caption="Note the [`if`&thinsp;/&thinsp;`else`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) statement, an example of [conditional logic](https://en.wikipedia.org/wiki/Conditional_(computer_programming))!"
	>
</figure>

### Loops

You will often want to use this on multiple elements—and remember, when in code, [*don’t repeat yourself*](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)*!* In JS, when we want to do something over and over we’re talking about [loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration).
<!-- .balance -->

- [<cite>Element: `querySelectorAll()` method – MDN</cite>](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll)
	Gets multiple elements.

- [<cite>`forEach()` – MDN</cite>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
	And “loop” through them.
<!-- .right .rows--2 -->

We can use [`querySelectorAll`](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll) to select *multiple* elements—which gives us a [*NodeList*](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) (a kind of [*Array*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array))—and then use a [`forEach`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) *loop* to run the same class for each of them:
<!-- .balance .before--2 -->

<figure
	@source="intersection-loop/preview/?active=script.js&width=75%"
	@style="--lines: 23"
	@caption="Here we’ve also adjusted the [`rootMargin`](https://www.smashingmagazine.com/2021/07/dynamic-header-intersection-observer/#rootmargin) from the full-viewport default with an inset, so the elements don’t transition immediately."
	>
</figure>

<aside>

<mark>Implementation always subject to change</mark>

Much of our (designer) need for JavaScript’s `IntersectionObserver` is moving fully into CSS with its new *[scroll-driven animations](https://developer.chrome.com/docs/css-ui/scroll-driven-animations).*

These are usually a safe *[progressive enhancement](https://en.wikipedia.org/wiki/Progressive_enhancement),* as they’ll just appear static in [older browsers/Firefox](https://caniuse.com/?search=animation-timeline).

</aside>

<!--- TODO Add/remove node, manipulate text example? --->

## Some Miscellaneous *JS* Tips

Alright, that is a lot. Like we’ve been saying—JavaScript is *A Whole Thing.* Here are some other tips, as you start to explore:
<!-- .intro -->

- Using `alert(yourVariable)` for *telemetry*/*debugging* can quickly be pretty annoying—instead, you can use `console.log(yourVariable)` to show messages in the [DevTools console](/topic/dev-tools/#the-console).

	A quick `console.log('Hello world!')` can check if things are plugged in right. The console will also show any JavaScript errors!

	In other languages, these functions are often, ironically, called *print*.<!-- .note -->

- Search on [*Stack Overflow*](https://stackoverflow.com/questions/tagged/javascript)&thinsp;! (Though it’s… probably [on the way out](https://blog.pragmaticengineer.com/stack-overflow-is-almost-dead/).) Another *person* has likely had your problem, before.

	Many people don’t really *know* JS (Michael included)… so much as they really know how to find things elsewhere on the internet: *Stack Overflow*, [*Codepen*](https://codepen.io/tag/javascript), and so on.

- This brings us back to LLM&NoBreak;s, *large language models* (“artificial intelligence”)—tools like [Chat&NoBreak;sGPT](https://openai.com/blog/chatgpt), [GitHub Copilot](https://github.com/features/copilot), [Claude Code](https://claude.com/product/claude-code), etc.

	These *can* be useful; we use them ourselves. But much like *Stack Overflow* or any other resource online, you have to know what to look for—and need a level of understanding to do this to, and to discern the value from the noise/code salad.
<!-- .balance -->

<aside class="reverse">

<mark>All resources require attribution</mark>

We don’t want you to treat code/examples from *anywhere* as a “[black box](https://en.wikipedia.org/wiki/Black_box)”—we we are here to learn and understand.

Copying wholesale from these tools—or any other source—does not demonstrate your understanding. We’ll remind you of our [class policy on this](/syllabus/#code-plagiarism). Always properly/fully attribute and explain to us what you have learned!

</aside>

- Ignore any examples/suggestions that have lots of dollar signs, like `$("something").else`—it means this is [jQuery](https://en.wikipedia.org/wiki/JQuery), and so is *very* outdated! (And Eric really, *really* doesn’t like jQuery.)

- You’ll also likely see examples/suggestions that wrap some logic in a `DOMContentLoaded` (or `load`) event listener—which will run the contents *after* the whole page is available, no matter where the `<‍script>` element is located in the HTML. But we’ll use [the modern `defer` attribute](#3-separate-external-js-files) to avoid this dance!

- To quickly get recent/modern, *vanilla* JavaScript results, instead include “*ES&NoBreak;6+*&thinsp;” in your searches and prompts—this refers to a more recent, easier-to-use syntax. Models often now skew/default towards this, but not always!

- Relatedly, if you see “arrow functions” (with `=>`&thinsp;) it is a pretty good sign the answer is relatively recent.

	Declaring variables with `let` and `const` (instead of the [older `var`](https://javascript.info/var)&thinsp;) is another good sign.

- Like [HTML](/topic/html/#case-white-space-tabs-line-breaks)/[CSS](/topic/css/#ergonomics), JS does not *really* care about whitespace or tabbing. Use them for your own clarity!

- But it *is* [case-sensitive](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#basics)! So `this` and `This` are *not* the same. (The most common JS convention is *camelCase*.)

- Many new-to-JS problems are caused by unclosed [blocks](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block) and [groupings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Grouping). Akin to HTML’s `<> </>` and CSS’s `{ }`, always mind your matching `{ }` and `( )` in JS!

- You’ll also see a lot of semicolons `;` but secretly you (almost never) actually need them! Declutter your code.
<!-- .balance -->

<blockquote
	@attribution="Jeff Atwood, 2007"
	@citation="https://blog.codinghorror.com/the-principle-of-least-power"
	>

Any application that *can* be written in JavaScript, *will* eventually be written in JavaScript.

</blockquote>
