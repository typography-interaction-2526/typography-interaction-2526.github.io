<script front-matter>
	const draft = true
	const title = 'The Box Model'
	const week = 5
</script>

## Boxes Within Boxes

The first thing we need to understand is how CSS sizes elements. This is called the [*the box model*](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model), as everything on the web begins as a rectangle.
<!-- .balance -->

- [<letter-bullet @title="Introduction to CSS Layout – MDN"></letter-bullet>](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Introduction)
	As usual.

- [<letter-bullet @title="Layout – web.dev"></letter-bullet>](https://web.dev/learn/css/layout/)
	This gets into `grid` and `flex`; we’ll talk about those next unit.

- [<letter-bullet @bullet="C" @title="Learn CSS Layout"></letter-bullet>](https://learnlayout.com)
	An old-but-still-good run-through.
<!-- .balance .link-list .right style="--rows: 3" -->

By default, all browsers’ *user-agent styles* have an unfortunate default—`box-sizing: content-box;`—which means that the padding (and border) exists *outside* the content width or height—so padding (and border) is then an *outset.*

But this is often unintuitive for designers and doesn’t fit with most web design patterns—so it is very, *very* common (nearly universal) to instead override this to `box-sizing: border-box;`—which makes padding and border exist *inside* the content dimensions. Then padding (and border) is easier to think of as an *inset*. [W3C](https://www.w3.org/TR/css-box-3/) probably got this default wrong. Good ol’ CSS!
<!-- .add-before -->

<figure
	@caption="With `box-sizing: content-box;` per the spec."
	@source="box-model.svg"
	class="verso"
	style="row-gap: var(--typography--line--2)"
	>
</figure>

<figure
	@caption="With `box-sizing: border-box;` the defacto standard. Most [CSS resets](/topic/css#resets) will do this for you! Like we said, very common."
	@source="box-model-border.svg"
	class="recto"
	style="row-gap: var(--typography--line--2)"
	>
</figure>

Let’s take a look at this box, going *inside-to-outside*.
<!-- .balance .bold .scale--h4 -->

## Content

The *content area* is the guts of the element, usually text or an image. Its dimensions are defined by that content, but also can be specified directly via `width` or `height`. (More on those soon.)
<!-- .balance -->

<figure
	@source="content/preview/?active=style.css"
	style="--lines: 9"
	>
</figure>

<aside>

We’ve pulled our [CSS reset](/topic/css#resets) into the `<head>` for all of these examples, so we are only seeing the styles that are expressly written out here—no defaults!

</aside>

## Padding

Next comes [*padding*](https://developer.mozilla.org/en-US/docs/Web/CSS/padding), which extends the element’s area around the content. It’s easiest to think of this as an *inset* (if we’ve made our `box-sizing` the logical `border-box`, above):
<!-- .balance -->

[<letter-bullet @title="Padding – MDN"></letter-bullet>](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)
	There is no `P` Train.
<!-- .link-list .right -->

<figure
	@source="padding/preview/?active=style.css"
	style="--lines: 12; margin-block-end: initial"
	>
</figure>

### A Sidebar About Shorthand

*Padding*—and many other properties, like *border* and <nobr>*margin*—</nobr>can be specified with a [*shorthand* property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) to make it easier to use the same spacing all around, or shared top/bottom and left/right.
<!-- .balance .add-after--3 -->

[<letter-bullet @title="Shorthand Properties – MDN"></letter-bullet>](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties)
	There are some `S` shuttles though.
<!-- .link-list .right -->

<div class="verso">

|     |     |
| --- | --- |
|1 value  | &emsp;<span class="secondary">All Directions&thinsp;/&thinsp;Sides</span> |
|2 values | &emsp;`top/bottom` `left/right` |
|3 values | &emsp;`top` `left/right` `bottom` |
|4 values | &emsp;`top` `right` `bottom`  `left` |

</div>

<div class="recto add-after--3" style="align-self: center">

```css
section { padding: 20px; }
section { padding: 20px 40px; }
section { padding: 20px 40px 80px; }
section { padding: 20px 40px 80px 40px; }
```

</div>

<div class="balance verso" style="align-self: center">

These three- and four-value rules are often harder to read and quickly understand though, so we tend to avoid them. You can always write the individual directions out, for clarity!

</div>

<div class="recto">

```css
section {
	padding-top: 20px;
	padding-bottom: 80px;
	padding-right: 40px;
	padding-left: 40px;
}
```

</div>

## Border

Then we have [*border*](https://developer.mozilla.org/en-US/docs/Web/CSS/border). Border is… the border around an element. It has its own `border-width`, `border-color`, and also `border-style`:
<!-- .balance -->

[<letter-bullet @title="Border – MDN"></letter-bullet>](https://developer.mozilla.org/en-US/docs/Web/CSS/border)
	Our first non-text design element! You are allowed.
<!-- .link-list .right -->

<figure
	@caption="The shorthand `border-top` property value order here doesn’t matter! Isn’t CSS logical."
	@source="border/preview/?active=style.css"
	style="--lines: 11"
	>
</figure>

<figure
	@caption="Look at all those borders."
	@source="border-style/preview/?active=style.css"
	style="--lines: 18"
	>
</figure>

<figure
	@source="border-radius/preview/?active=style.css"
	style="--lines: 17"
	>
</figure>

## Margin

The last part of our box is [*margin*](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)—the space *around* an element, empty/white-space area that is used to separate an element from its *siblings*. Like *padding* and *border*, you can specify it all around or on individual sides:
<!-- .balance -->

[<letter-bullet @title="Margin – MDN"></letter-bullet>](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)
	The space between things.
<!-- .link-list .right -->

<figure
	@source="margin/preview/?active=style.css"
	style="--lines: 9"
	>
</figure>

Margin has a couple tricks up its sleeve. First, it can have *negative* values—which will eat up/remove space between elements. (*Padding* and *border* only take up space.) Just add a minus before the value and watch it bring things closer together:
<!-- .balance -->

<figure
	@caption="The first element pulls the second element closer with a *negative* margin."
	@source="margin-negative/preview/?active=style.css"
	style="--lines: 13"
	>
</figure>

Also [margins *collapse*](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing), meaning that they are sometimes combined into a single value (the largest) between two elements. This happens most often on adjacent siblings, and is both useful and an absolute pain:
<!-- .balance -->

<figure
	@caption="You might expect the margin between the first two `section` to be `100px`, but it is only `60px`! They have *collapsed* to the larger value."
	@source="margin-collapse/preview/?active=style.css"
	style="--lines: 9"
	>
</figure>

## Logical Properties

You can also now define all your box model properties using [*logical* directions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values)—meaning instead of *physical* (`top`/`bottom`, `left`/`right`) orientations, you can [map your rules](https://adrianroselli.com/2019/11/css-logical-properties.html) to the *flow* of the text (`block-start`/<wbr>`block-end`, `inline-start`/<wbr>`inline-end`).
<!-- .balance -->

[<letter-bullet @bullet="L" @title="CSS Logical Properties"></letter-bullet>](https://adrianroselli.com/2019/11/css-logical-properties.html)
	[Adrian Roselli](https://adrianroselli.com/) has a very thorough explanation.
<!-- .link-list .right -->

In left-to-right, horizontal writing modes (as in English):
<!-- .add-before--2 .add-after -->

```css <!-- .verso -->
/* These horizontal physical directions: */
padding-left: 10px;
padding-right: 10px;

/* Map to these logical directions: */
padding-inline-start: 10px;
padding-inline-end: 10px;

/* And this combined property: */
padding-inline: 10px;
```

```css <!-- .recto -->
/* Same for the vertical directions: */
margin-top: 20px;
margin-bottom: 20px;

/* Mapping to these: */
margin-block-start: 20px;
margin-block-end: 20px;

/* And this shorthand for both: */
margin-block: 20px;
```

This `start` / `end` terminology will come up later with `flexbox` and `grid`, so it isn’t a bad habit&thinsp;/&thinsp;mindset to get into!
<!-- .balance .secondary -->

This allows your design/styles to behave in a *logically* (if not *physically*) consistent way across languages with varied [writing modes](https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode) and different [text directions](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir). You can write styles that work even when your site is translated! (And the shorthand is nice, here.)
<!-- .add-before -->

## And Their Units

Okay, so we have all these box properties—but how do we specify the dimensions? CSS has many [*length units*](https://developer.mozilla.org/en-US/docs/Web/CSS/length), used for `width`, `height`, and also  `padding`, `border`, `margin`, and even `font-size`. (Picas, anyone?) We’ll look at some common ones.
<!-- .balance -->

[<letter-bullet @bullet="L" @title="`<length>` – MDN"></letter-bullet>](https://developer.mozilla.org/en-US/docs/Web/CSS/length)
	*Length* is used by many properties!
<!-- .link-list .right -->

### Absolute Units

<div class="balance verso" style="align-self: center">

Maybe the easiest ones to understand, fixed to physical (well, sort of) sizes.

With the many vagaries of screen size and density, the physical/ruler lengths will only be correct when you print. And maybe not even then.
<!-- .secondary -->

</div>

<div class="add-before recto">

```css
.pixels {
	height: 360px;
	width: 720px;
}

.inches {
	height: 5in;
	width: 10in;
}

.mm {
	height: 84mm;
	width: 400mm;
}
```

</div>

### Relative Units

<div class="balance verso">

<div class="add-before--3 add-after--3 sticky">

Otherwise you can use *relative* units, which depend on and respond to their context.

These are distinctly and intrinsically *web* measurements.
<!-- .secondary -->

</div>

</div>

<div class="add-before recto">

```css
/* Relative to nearest sized ancestor. */
.percentage {
	height: 90%;
	width: 85%;
}

/* Relative to viewport height/width. */
.viewport {
	height: 75vh;
	width: 80vw;
}

/* Relative to element font-size. */
.em {
	height: 14em; /* 1em is one line. */
	width: 4.8em;
}

/* Also relative to font size */
.ch {
	width: 1ch; /* 1ch is one letter. */
}

/* Relative to :root font-size. */
.rem {
	height: 12rem;
	width: 2.4rem;
}
```

</div>

### Combine Them With a `calc`

<div class="balance verso" style="align-self: center">

Sometimes you might want to use these together! Or otherwise do some math. For this we have the [*calc* function](https://developer.mozilla.org/en-US/docs/Web/CSS/calc()).

</div>

<div class="add-before recto">

```css
.absolute-and-relative {
	width: calc(50% - 20px);
}

.computer-do-the-math {
	width: calc(100% / 12);
}
```

</div>

### Limit/Constrain Them

<div class="balance verso" style="align-self: center">

You’ll often want to set limits/constraints on values—particularly with flexible, *relative* units (and *responsive design*, which we’ll talk about soon.) You can usually set [*minimums*](https://developer.mozilla.org/en-US/docs/Web/CSS/min-width) and [*maximums*](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width) by using the prefixes `min-` and `max-`.

</div>

<div class="add-before recto">

```css
.constrained-width {
	min-width: 200px;
	width: 50%;
	max-width: 400px;
}

.constrained-height {
	min-height: 100px;
	height: 100%;
	max-height: 200px;
}

/* Handy to watch your line lengths! */
p {
	max-width: 65ch; /* 65ish letters. */
}
```

</div>

CSS is big and massive and overwhelming and sometimes indefensibly nonsensical—but remember that you can do a surprising amount with just these basic properties! No matter how complex it gets, it always comes back to these basics.
<!-- .add-before--3 .balance .bold .scale--h4 -->

## Position

With an idea of how elements take up space, now we’ll look at how they exist and move together in the [*document flow*](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow). The CSS property `position` [sets this relationship](https://developer.mozilla.org/en-US/docs/Web/CSS/position).
<!-- .balance -->

[<letter-bullet @title="Position – MDN"></letter-bullet>](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
	Interesting web work often uses `position`.
<!-- .link-list .right -->

### Static

By default, every element is *static*—just meaning its normal, stacked position in the document.
<!-- .balance -->

You’ll rarely, if ever, actually set this yourself—it’s the default!
<!-- .secondary -->

<figure
	@caption="Nothing changes here—`static` is the default."
	@source="position-static/preview/?active=style.css"
	style="--lines: 12"
	>
</figure>

### Relative

The first thing we might want to do is adjust an element *from* that normal *static* position, which we can do with *relative* positioning.
<!-- .balance -->

Once you have set `position: relative;` you can use the  `top`, `right`, `bottom`, and `left` values (with any of the units, above) to move the element away from its default, normal position in the flow:
<!-- .balance -->

<figure
	@caption="The element still exists/takes up space in the *flow*."
	@source="position-relative/preview/?active=style.css"
	style="--lines: 12"
	>
</figure>

### Absolute

*Absolute* positioning is somewhat similar to *relative*—but instead of placing an element in relation to its own default position, it uses the position of its nearest *positioned* ancestor as the origin.
<!-- .balance -->

So *absolute* elements will go “up the tree” of parents and wrapper elements until they find one set to anything other than default/<nobr>`static`—</nobr>then the same offset properties the element around from there.
<!-- .balance -->

Importantly, `position: absolute;` also *removes* the element from the normal document flow—meaning it takes up *no space* in the page layout.
<!-- .balance -->

This is often used for exacting, specific design elements.
<!-- .secondary -->

<figure
	@caption="The element is out of the *flow*, and placed according to the `relative` parent."
	@source="position-absolute/preview/?active=style.css"
	style="--lines: 20"
	>
</figure>

### Fixed

*Fixed* positioning also removes the element from the document flow, but it places elements with relation to the *browser viewport*—the boundaries of the window or device.
<!-- .balance -->

So `position: fixed;` brings the element *completely* out of the page’s normal flow, like it is sitting on its own separate layer.
<!-- .balance -->

This is often used for things like navigation elements.
<!-- .secondary -->

<figure
	@caption="Try doing this in print."
	@source="position-fixed/preview/?active=style.css"
	style="--lines: 12"
	>
</figure>

### Sticky

The most recent addition to the *position* party, `position: sticky;` elements are placed according to the normal flow of the document, like *static,* until their nearest *scrolling ancestor* (usually the viewport) moves past them. The element is then *stuck* in relation to this element.
<!-- .balance -->

This is often used for headers on tables and lists.
<!-- .secondary -->

<figure
	@caption="This always feels very *web*-y."
	@source="position-sticky/preview/?active=style.css"
	style="--lines: 12"
	>
</figure>

### “Depth”

Okay, [*z-index*](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index) is not strictly *positioning*—it is a separate property. You can see that all these *position* properties have given us ways to make things overlap, and `z-index` is how we can decide the *front-to-back* ordering (think [*<nobr>z-axis</nobr>*](https://en.wikipedia.org/wiki/Cartesian_coordinate_system#Three_dimensions)).
<!-- .balance -->

By default, items that are lower in the HTML (coming *after* each other) are in front of higher, earlier elements:
<!-- .balance -->

<figure
	@caption="The two `position` properties both create new stacking contexts, `z-index: 1;` moves even elements in front."
	@source="z-index/preview/?active=style.css"
	style="--lines: 14"
	>
</figure>

A whole lot of things make a new [*stacking context*](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context) (including most `position` changes) which is kind of like a *group* (or a Figma *frame*) that has its own internal depth/overlap order.
<!-- .balance -->

No amount of internal *z-index* adjustments can break something out of that group—which is one of the reasons why *z* can be really difficult to understand and tricky to use. But you can always adjust the *z-index* of the group, as we do here!
<!-- .balance -->

## Display

In our [HTML introduction](/topic/html#block-elements) we briefly talked about *block* and *inline* elements, as set by the user-agent styles. These are the first two examples of [the *display* property](https://developer.mozilla.org/en-US/docs/Web/CSS/display).
<!-- .balance -->

[<letter-bullet @title="Display – MDN"></letter-bullet>](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
	Our `block` and `inline` elements (and later, `grid` and `flex`).
<!-- .link-list .right -->

### Block

So as we discussed, most HTML elements are *block-level* by default. But you can also set `display: block;` manually on an *inline* element, too. This would mean that it starts on a new line, takes up the full width available, and you can specify a `height`, `width`, and use `margin` above and below:
<!-- .balance -->

<figure
	@caption="Whenever you are linking a whole area (like an image and text together), safe bet that you want `block`."
	@source="display-block/preview/?active=style.css"
	style="--lines: 13"
	>
</figure>

### Inline

And going the other way, you can make *block* elements switch to *inline* with `display: inline;`. They will no longer start on their own lines, will only take up as much space as their content/children, and don’t accept `height` and `width` (or any `-top`/`-bottom`) properties:
<!-- .balance -->

<figure
	@caption="The `white-space` property `pre`-vents the spaces in the paragraphs from collapsing."
	@source="display-inline/preview/?active=style.css"
	style="--lines: 11"
	>
</figure>

### But Also `inline-block`

You can also combine the qualities of *block* and *inline* with `display: inline-block;`. These elements take `height` and `width` (and vertical `margin`) like *block-level* elements, but do not start on their own line:
<!-- .balance -->

<figure
	@source="display-inline-block/preview/?active=style.css"
	style="--lines: 15"
	>
</figure>

### And Sometimes `none`

Setting `display: none;` hides an element visually from the document—as well as taking it out of the *flow*. (Keep in mind the HTML is still there, if someone opens up the source code.)
<!-- .balance -->

This is a common way to hide/show (by setting another *display* property) elements on the page, but it will *reflow* the document when applied—as if the element is actually added/removed from the HTML:
<!-- .balance -->

<figure
	@caption="Poof. Like it wasn’t even there."
	@source="display-none/preview/?active=style.css"
	style="--lines: 6"
	>
</figure>

### …vs. Visibility?

You can also hide something [visually](https://developer.mozilla.org/en-US/docs/Web/CSS/visibility) without taking it out of the document *flow,* which is useful when you don’t want the page to jump/*reflow* when something appears/disappears.
<!-- .balance -->

Setting `visibility: hidden;` keeps the space an element had before, but makes it invisible and unable to be interacted with. The value `visible` is the default:
<!-- .balance -->

<figure
	@source="visibility/preview/?active=style.css"
	style="--lines: 6"
	>
</figure>

### …vs. Opacity?

Another way to hide an element visually is to adjust [its opacity](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity), which uses values on a scale from 0–1. This differs from `visibility` because elements with no (or partial) opacity can still be interacted with:
<!-- .balance -->

<figure
	@caption="You can still select the text (or click links) of not-fully-opaque elements."
	@source="opacity/preview/?active=style.css"
	style="--lines: 6"
	>
</figure>

Keep in mind that `display: none;`, `visibility: hidden;`, and `opacity: 0;` only hide things in the *rendered* browser view. The HTML is still visible in the source code!
<!-- .balance -->

## What About Floats?

Oh right, floats. Sometimes you’ll want to have an image or block flow within a block of text. There are a lot of ways to do this now, but the oldest (and sometimes still the trickiest) is a [*float*](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Floats).
<!-- .balance -->

[<letter-bullet @title="Floats – MDN"></letter-bullet>](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Floats)
	You don’t see these used as much, anymore!
<!-- .link-list .right -->

### Left and Right

The declarations `float: left;` and `float: right;` take an element out of the normal flow and place it on the left or right side of its parent container.
<!-- .balance -->

Any text *siblings* will then flow around the element—like a *text wrap*—filling up any available space to its side. They will go as far up as the top of the *floated element*:
<!-- .balance -->

<figure
	@source="float/preview/?active=style.css"
	style="--lines: 15"
	>
</figure>

### Don’t Forget to `clear`

Since this takes the floated element out of the *flow*, if we want the following element (often another text block, like a `<p>`) to not move up it needs to be *cleared* with `clear: left;` , `clear: right;`, or `clear: both;`.
<!-- .balance -->

Applied on the following element, it will make it stay entirely below (clear of) the *floated* element:
<!-- .balance -->

<figure
	@caption="Uh oh, classic *float* problem on the second one."
	@source="float-clear/preview/?active=style.css"
	style="--lines: 19"
	>
</figure>

If you have a parent wrapper and no following element, there won’t be anything there to *clear* the float—meaning the parent will collapse down to the size of the text content. Almost never what you want.
<!-- .balance -->

You can solve this broken look with a [*clearfix hack*](https://developer.mozilla.org/en-US/docs/Web/CSS/clear#sect1), which uses a pseudo-element as an ersatz `last-child` to clear the container.
<!-- .balance -->

<figure
	@caption="Much better. `:after` is a pseudo-element—which acts here as a last child that clears the `div`."
	@source="float-clearfix/preview/?active=style.css"
	style="--lines: 21"
	>
</figure>

Generally, folks try and avoid floats—they aren’t common in modern design patterns and have been giving people headaches for… *decades* now.
<!-- .balance -->

They require you to know how long your content is and also how big your viewport/page will be—*both* things that you don’t always have control over in responsive/<wbr>mobile 2024. But sometimes they are still the only thing that can do what you need!
<!-- .balance -->

### … `flex` and `grid`?

We’ll cover these next unit! They’ll make your (layout) life easier.
<!-- .balance .bold .scale--h4 -->

<blockquote
	@attribution="Håkon Wium Lie"
	@citation="https://lists.w3.org/Archives/Public/www-style/1995Jun/0003.html"
	class="mono"
	>

<pre>
E.g.:
____________

 H1 has a 1 character margin

 So does H2

     P starts here and could
     go on forever. Wow, a 5
     character left margin
     sure looks great!
      _____
     | + + | Wow, you can do
     |  @  | images as well?
     | --- | Then you'll
     |_____| want a 1 character
     margin on the left side.
     Until, you're below the
     image that is.

This is where we [find] the
simple stacked box model is
a bit too simple.
</pre>

</blockquote>
