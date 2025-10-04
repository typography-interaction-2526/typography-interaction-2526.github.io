<script front-matter>
	const draft = true
	const title = 'DevTools (Web Inspector)'
	const week = 7
</script>

There is no single *best* browser; they are all kind of differently bad, in [different ways](https://en.wikipedia.org/wiki/Anna_Karenina_principle).
<!-- .balance .bold .scale--h4 -->

- [<letter-bullet @title="Chrome DevTools"></letter-bullet>](https://developer.chrome.com/docs/devtools/) \
We’ll be using these.

- [<letter-bullet @title="Safari Web Development Tools"></letter-bullet>](https://developer.apple.com/safari/tools/)
Got some long-overdue love in [*Sonoma*](https://developer.apple.com/videos/play/wwdc2023/10118), but [little since](https://webkit.org/blog/15865/webkit-features-in-safari-18-0/#web-inspector).

- [<letter-bullet @title="Firefox DevTools User Docs"></letter-bullet>](https://developer.mozilla.org/en-US/docs/Tools)
Spiritual successor to [*Firebug*](https://thehistoryoftheweb.com/checking-under-the-hood-of-code/), the first suite.
<!-- .link-list .right style="--rows: 3" -->

Many developers use [Chrome](https://www.google.com/chrome) for [its popularity](https://gs.statcounter.com/browser-market-share), before testing in other browsers. It also arguably has the most robust set of *DevTools*—though [Safari](https://www.apple.com/safari/) and [Firefox](https://developer.mozilla.org/en-US/docs/Tools) have their own versions, too. Much of this is just preference, but ultimately you’ll want to see what your visitors are seeing.

You have always [been able to](https://blog.jim-nielsen.com/2020/the-spirit-of-view-source/#how-browsers-do-view-source-today-on-mac) <samp>View Source</samp>, from [the earliest days&thinsp;/<wbr>browsers](https://thehistoryoftheweb.com/checking-under-the-hood-of-code/)—remember that the open web has *always* trafficked in source code. But we’ll use DevTools for the same reason we use an IDE—more comfortable ergonomics, specifically around building for the web.

You’ll often hear people (Michael) call it the *Web Inspector*, or just *The Inspector*. It’s going to be your best (Web) friend, showing you everything that the browser has *parsed* to display your pages.

## Inspecting Pages

<div class="add-after--3 verso" style="align-self: stretch; justify-content: center">

In Chrome, you can bring them up by right-clicking on any element/part of a page and clicking <samp>Inspect</samp>&thinsp;:

You can also hit <kbd>⌘&thinsp;~&thinsp;Ctrl</kbd> <kbd>⌥&thinsp;~&thinsp;Alt</kbd> <kbd>I</kbd>&thinsp;.
<!-- .secondary -->

</div>

<figure
	@source="right-click.png"
	class="right shadow"
	style="--lines: 10"
	>
</figure>

By default, you’ll see the tools open on the right side of the page. Depending on how big your screen is, they might be laid out a bit <nobr>differently—</nobr>but the basics are usually the same:
<!-- .add-before--3 .balance -->

<figure
	@source="dev-tools.png"
	class="shadow"
	style="--height: 90vh"
	>
</figure>

<div class="add-before--3 verso" style="align-self: center">

The Customize <samp>⋮</samp> button will let you change the side they appear on, or undock the tools out entirely into a separate <nobr>window—</nobr>sometimes easier on a laptop/<wbr>small screen:
<!-- .balance -->

</div>

<figure
	@source="customize.svg"
	class="recto"
	style="align-items: end"
	>
</figure>

## Elements Panel

<div class="left">

The top part of the tools is [*the DOM*](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)&zwj;—you can expand/<wbr>collapse all the nested HTML *elements* on the opened page.

The first <samp>↖</samp> button in the upper-left lets you mouse over on the page, and will then show you that element nested/<wbr>hierarchically within the DOM.

The second <samp style="-webkit-text-stroke-width: 0.05rem">◲</samp> button (more about this [below](#device-mode)) toggles the *Device Toolbar*, a.k.a. “responsive mode.”

The <samp>flex</samp>&thinsp;/&thinsp;<samp>grid</samp> badges toggle their layout overlays on the page.

</div>

<figure
	@source="elements.svg"
	style="align-self: center; align-items: end; grid-column: center-start / all-end"
	>
</figure>

Handy tip: <kbd>⌘&thinsp;~&thinsp;Ctrl</kbd> <kbd>F</kbd> in here will let you search for elements or text by name/<wbr>class/<wbr>contents!
<!-- .balance .secondary .recto -->

## St<span style="margin-inline-start: 0.05em">y</span>les Tab

<div class="left">

The area below is for the styles. It shows whatever *CSS properties* apply to the element you have selected above, in the *DOM*/Elements panel.

These are ordered (somewhat unintuitively) in a *more*-[specific](/topic/css/#specificity), *reverse*-[cascade](/topic/css/#oh-right-the-cascade) sequence—inline styles at the top, external and internal stylesheets, then *user-agent* styles at the bottom—with any cascading/<wbr>conflicting rules crossed out, as you go down.

On the right, you can see the sum *Computed* (or *rendered*) values of all the rules that apply—regardless of where they come from. These represent *exactly* what the browser is showing to you for the selected element.

</div>

<figure
	@source="styles.svg"
	style="align-self: center; align-items: end; grid-column: center-start / all-end"
	>
</figure>

You can type specific CSS properties/values into both <samp>Filter</samp> boxes to quickly narrow things down!
<!-- .balance .secondary .recto -->

You can make changes in Elements or Styles, and the edits will be immediately visible on the page *as if you had edited the source files*. It’s useful to try things out quickly&zwj;—or diagnose where problems/<wbr>conflicts arise.
<!-- .add-before--3 .balance .bold .scale--h4 -->

<aside>

Keep in mind these changes are temporary—any edits in the DevTools will be lost when you leave or reload the page! They are just for you.

</aside>

## Device Mode

Enter *device mode* with the little phone/laptop <samp style="-webkit-text-stroke-width: 0.05rem">◲</samp> button, in the upper left of the DevTools:
<!-- .balance -->

<figure
	@caption="Be sure to <em>refresh</em> with <kbd>⌘&thinsp;~&thinsp;Ctrl</kbd> <kbd>R</kbd> if the page doesn’t rescale correctly when you enter this mode! They sometimes don’t, depending on how they are built—especially with JS shenanigans."
	@source="device.png"
	class="shadow"
	style="--height: 90vh"
	>
</figure>

<figure @source="device-bar.svg"></figure>

<div class="add-before--3 left">

Generally, use the <samp>Responsive</samp> mode that lets you type in specific pixel dimensions for width/height. Or you can use the divided bar underneath to quickly jump through common/ballpark widths.

The *Preview Zoom* also allows you to approximate views *larger* than your current screen! You can specify larger dimensions, and it will scale down to show the entire viewport. This is great for developing on a laptop&zwj;—it won’t be precise, but it’ll give you some idea of big screens.

Remember that you are not targeting specific devices here&zwj;—you are looking for when your design/content *breaks!*
<!-- .secondary -->

</div>

<figure
	@caption="The *Device List* is… *ancient* and inaccurate—they don’t account for the browser’s own interface, so they are all too tall!"
	@source="responsive.png"
	class="center shadow"
	style="--lines: 14.5; align-self: start; position: relative; inset-inline-start: var(--layout--alley)"
	>
</figure>

<figure
	@caption="The *More Options* menu here has some handy tricks!"
	@source="options.png"
	class="right shadow"
	style="--lines: 7.5; align-self: start; position: relative; inset-inline-start: var(--layout--alley)"
	>
</figure>

<aside>

Always make sure to check your work on the *real thing*, as much as possible!

This is just a quicker preview, but isn’t always perfectly accurate&zwj;—and also won’t reflect any platform-specific behaviors around scrolling or rotating. (We’re looking at you, [i&thinsp;OS Safari](https://bugs.webkit.org/show_bug.cgi?id=141832).)

</aside>

## The Console

<div class="add-before--2 verso" style="align-self: start">

The console is used to help you work with [JavaScript](/topic/javascript), by *logging* messages (and any errors) from your code as it runs. It can also evaluate any JS, live.
<!-- .balance -->

If your tools are already open, you can show the <samp>Console</samp> (as a drawer) with the Customize <samp>⋮</samp> button, or as a whole panel to the right of <samp>Elements</samp>.

You can also hit <kbd>⌘&thinsp;~&thinsp;Ctrl</kbd> <kbd>⌥&thinsp;~&thinsp;Alt</kbd> <kbd>J</kbd>&thinsp; to go right there!
<!-- .secondary -->

</div>

<figure
	@source="panel-drawer.svg"
	class="recto"
	style="align-items: end"
	>
</figure>

<figure
	@caption="The Console opened under Elements/Styles."
	@source="console.png"
	class="shadow"
	style="--height: 90vh"
	>
</figure>

This area will show any [messages logged](https://developer.mozilla.org/en-US/docs/Web/API/console#outputting_text_to_the_console) from your JavaScript with `console.log()`.
<!-- .balance .scale--h4 .bold .add-after--3 -->

<div class="left">

**<span style="color: goldenrod">Warnings</span>** and **<span style="color: firebrick">errors</span>** (like missing files, or bad JS syntax) will also be shown here—usually with clickable <samp>script.js:##</samp> line-numbers to the right, to take you directly to the problem. You can clear the *buffer* (what is showing) with the little crossed circle <samp>⊘︎</samp> when it gets cluttered.

You can also evaluate and try your JavaScript here *directly*, by typing (with some nice auto-completion) into the bottom of the console—like `console.log('Hello, world!')` (note the quotes for a [*string*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)).

You can use this to test out parts of your code right away, like `document.querySelector('h1')`. If it *returns* (shows) your element in response, your selector is working!

</div>

<div style="align-self: stretch; grid-column: center-start / all-end">

<figure
	@source="console.svg"
	style="align-items: end; margin-top: initial; position: sticky; top: var(--layout--spacing);"
	>
</figure>

</div>

<aside>

When in (JavaScript) doubt, open your Console!

You can check variables by printing them out with `console.log('Variable: ' + variableName)`, or even just make sure that part of your code ran with `console.log('Made it here!')`.

</aside>
