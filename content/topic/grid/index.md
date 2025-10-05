<script front-matter>
	const draft = true
	const title = 'And (CSS) Grid'
	const week = 8
</script>

<blockquote
	@attribution="Josef Müller-Brockmann"
	@citation="https://monoskop.org/images/a/a4/Mueller-Brockmann_Josef_Grid_Systems_in_Graphic_Design_Raster_Systeme_fuer_die_Visuele_Gestaltung_English_German_no_OCR.pdf"
	>

Just as in nature systems of order govern the growth and structure of animate and inanimate matter, so human activity itself has, since the earliest times, been distinguished by the quest for order.

</blockquote>


## From Flex to Grid

[CSS grid layout](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids#line-based_placement) (from here on, just *grid*) is another, even more recent addition to CSS, continuing on from where [*flexbox*](/topic/flexbox/) left off. While flex is primarily a *one-dimensional* layout system—focused on horizontal *or* vertical arrangements—grid is *two-dimensional* system, integrating the two directions together.

- [<letter-bullet @title="A Complete Guide to Grid – CSS Tricks"></letter-bullet>](https://css-tricks.com/snippets/css/complete-guide-grid/)
	The *grid* version of the *flexbox* classic.

- [<letter-bullet @title="CSS Grid Layout: A New Layout Module for the Web"></letter-bullet>](https://webkit.org/blog/7434/css-grid-layout-a-new-layout-module-for-the-web/)
	WebKit (Safari’s) overview, from 2017.

- [<letter-bullet @title="Basic Concepts of Grid Layout - MDN"></letter-bullet>](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
	Back to MDN.

- [<letter-bullet @title="Basics of CSS Grid"></letter-bullet>](https://www.youtube.com/watch?v=FEnRpy9Xfes)
	From web guru [Jen Simmons](https://jensimmons.com).

- [<letter-bullet @title="Flexbox vs. CSS Grid"></letter-bullet>](https://www.youtube.com/watch?v=hs3piaN4b5I)
	Jen unpacks when to use each regime.

- [<letter-bullet @title="Grid by Example"></letter-bullet>](https://gridbyexample.com/examples/)
	Loads of examples.

- [<letter-bullet @title="Grid Garden"></letter-bullet>](https://cssgridgarden.com)
	Like the Froggy game, but for grid.
	<!-- .link-list .right style="--rows: 6" -->

We had some of this two-dimensionality with [<nobr>flex-wrap</nobr>](/topic/flexbox/#flex-wrap), but grid offers us much more structure and control.
<!-- .balance .secondary -->

Grid is *a lot* like flex (this will be a running theme)—<wbr>a [*display*](https://developer.mozilla.org/en-US/docs/Web/CSS/display) property applied on a parent/<wbr>container element. This `display: grid;` tells its (immediate) children/<wbr>*grid items* how they should be laid out. Also like flex, there is `display: inline-grid;` which behaves the same internally—<wbr>but with the parent behaving as an inline element.
<!-- .add-before--3 -->

Grid truly supplants many of the previous box model layout approaches (like `float`, `margin`-centering, etc.) and, like flex, works much closer to how we *think* about layouts *as designers*. It can still get complicated, but makes most layouts (especially responsive ones) much, much easier to implement.

There are many novel, powerful uses for *grid*—it is really the backbone of modern web layout. Let’s take a look.
<!-- .add-before .balance .bold .scale--h4 -->



## Grid Terminology

Grid introduces us to some new vocabulary:
<!-- .bold .scale--h4 .add-after--3 -->

Line

: The dividing lines that define the grid, vertical or horizontal. (Think *gutters*.)
<!-- .secondary -->

Track

: The horizontal or vertical space between the lines. (Think *rows* and *columns*.)
<!-- .secondary -->

Cell

: The intersection of a horizontal and vertical track. This is different from a *grid item*—the cell is the spot/placement, the item is the actual <nobr>element—</nobr>since as you’ll see, you can position *items* in an arbitrary *cell*.
<!-- .secondary -->

Area

: <span class="secondary">You can combine one or more adjacent grid cells into a rectangular *area.* Often you give these a subjective name, for convenience/ergonomics.</span>
<!-- .verso .balance style="margin-block-end: initial" -->

<div class="recto sticky" style="align-self: start">

<figure @source="terminology.svg"></figure>

</div>

## New Units and Functions

<div class="left">

<div class="sticky">

Grid also introduces some specific new [length units](/topic/box-model/#and-their-units):
<!-- .balance .bold .scale--h4 style="margin-block-end: initial" -->

</div>

</div>

<div class="aside add-before--2">

`fr`

: This [new unit](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#the_fr_unit) represents a *fraction* of the available space in the grid container—usually, *width*. This is very similar to using whole numbers in `flex-basis`. This is very handy; you’ll use it a lot with grid:

	```css
	.two-thirds-one-third {
		display: grid;
		grid-template-columns: 2fr 1fr;
	}
	```

`min-content`

: The [*intrinsic* minimum width](https://developer.mozilla.org/en-US/docs/Web/CSS/min-content) of an element. With text, this is the longest single word:

	```css
	.narrow-sidebar {
		display: grid;
		grid-template-columns: 1fr min-content;
	}
	```

`max-content`
: Same for [the maximum](https://developer.mozilla.org/en-US/docs/Web/CSS/max-content). With text, this is the whole sentence/line:

	```css
	.wider-sidebar {
		display: grid;
		grid-template-columns: 1fr max-content;
	}
	```

`fit-content`

: A [combo of the min/max](https://developer.mozilla.org/en-US/docs/Web/CSS/fit-content). Uses the available space—but never less than `min-content` *and* never more than `max-content`:

	```css
	.fit-sidebar {
		display: grid;
		grid-template-columns: 1fr fit-content;
	}
	```

	You can use these last three values in grid properties <em>(</em>`min-`, `max-`, and `fit-content`<em>)</em>, as we’ll see <nobr>below—</nobr>but they are also usable anywhere [length units](/topic/box-model/#and-their-units) work—like `width` or `height`. <!-- .add-before .secondary -->

</div>

<div class="left add-before--3 add-after--3">

<div class="sticky">

…and also [functions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions) to use the units: { .four-before .two-after }
<!-- .balance .bold .scale--h4 style="margin-block-end: initial" -->

</div>

</div>

<div class="aside add-before--2 add-after--3">

`minmax()`

: A function that [defines a range](https://developer.mozilla.org/en-US/docs/Web/CSS/minmax) for a *track*—setting a minimum and maximum length *together*. These are really useful for setting reasonable limits on responsive grid designs:

	```css
	.flexible-sidebar {
		display: grid;
		grid-template-columns: 1fr minmax(200px, 400px);
	}
	```

`repeat()`

: This function [repeats a *track* list](https://developer.mozilla.org/en-US/docs/Web/CSS/repeat), so you don’t have to write it over and over:

	```css
	.twelve-columns {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
		/* How many columns is this? 👆 */
	}
	.also-twelve-columns {
		display: grid;
		grid-template-columns: repeat(12, 1fr); /* Much better. */
	}
	```

</div>

<aside>

As a general rule: whenever you are writing the same exact code over and over, there is *probably* a shorter way. [Don’t repeat yourself](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)&thinsp;! Stay DRY.

</aside>



## Container <span class="parens">(</span>Parent<span class="parens">)</span> Properties

Again, *grid* is a lot like *flex*—primarily properties that are applied on a container/parent element.
<!-- .balance -->


### `grid-template-columns`&thinsp;, `grid-template-rows`

Setting `display: grid;` won’t do much until you also declare some [columns](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns) or [rows](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows), with *grid template*. You can specify `grid-template-columns`, `grid-template-rows`, or both. These properties are followed by a *track list* of the size for each track:
<!-- .balance -->

<figure
	@caption="Notice in the second example, the items do *not* wrap to a new column—because `grid-auto-flow: row;` is the default setting. The third example sets this to `column` to make it flow to a new one."
	@source="grid-template/preview/?active=style.css"
	style="--lines: 17"
	>
</figure>

Again like *flex*, there is similar behavior on the horizontal/vertical *axes*—with the defaults around horizontal/row based behavior since width is usually our constraint (with pages scrolling vertically).
<!-- .balance -->

So for many uses, you will only need to specify your column <nobr>structure—</nobr><wbr>leaving the rows to create themselves, as needed. This is called an *implicit grid* (vs. an *explicit grid* that we set/define):
<!-- .balance -->

<figure
	@caption="The additional rows are automatically added, as needed. Note that they size vertically to their largest content!"
	@source="grid-template-columns/preview/?active=style.css"
	style="--lines: 14"
	>
</figure>



### `grid-auto-columns`&thinsp;, `grid-auto-rows`

By default, these *implicit grid* tracks are sized `auto` (the largest content), but you can also specify their size—often [a *height*](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows) for the `grid-auto-rows`:
<!-- .balance -->

<figure
	@source="grid-auto-rows/preview/?active=style.css"
	style="--lines: 15"
	>
</figure>

But `grid-auto-columns` only comes up if you force the columns to wrap with `grid-auto-flow: column;` as in the earlier example. Again—height is usually not our main constraint, with scrolling!



### `gap`&thinsp;, `column-gap`&thinsp;, `row-gap`

*Grid* also shares the `gap`, `column-gap`, and `row-gap` [properties with *flex*](/topic/flexbox/#gap-row-gap-and-column-gap)—to add gutters between the *tracks*. The syntax and behavior is the same:

<figure
	@source="grid-gap/preview/?active=style.css"
	@caption="You rarely see a `grid` without a `gap`."
	style="--lines: 18"
	>
</figure>



### `justify-items`

Also [like *flex*](/topic/flexbox/#justify-content) (there’s a pattern here), we can position items within the <nobr>tracks—</nobr>but now we have control over both axes and the overall placement. To start, `justify-items` positions all the *grid items* along their row axis.

The terminology here is always a bit confusing, but think of it this way—in *grid*, the main axis is *always* the horizontal row. So *justify* always means left/right, and *align* always means top/bottom. Easier to remember than flex! No flipping axes:

<figure
	@source="grid-justify-items/preview/?active=style.css"
	style="--lines: 21"
	>
</figure>



### `align-items`

And `align-items` directly corresponds to the [flex values](/topic/flexbox/#align-items), to position all the *items* vertically along their column axis:
<!-- .balance -->

<figure
	@caption="Note that there isn’t any change on the last *implicit* row with the default `auto`/content height."
	@source="grid-align-items/preview/?active=style.css"
	style="--lines: 21"
	>
</figure>

There are [also baseline align values](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items), to keep text on the same line across columns:
<!-- .balance -->

<figure
	@source="grid-align-baseline/preview/?active=style.css"
	style="--lines: 11"
	>
</figure>



### `justify-content`&thinsp;, `align-content`

If the total size of your grid is less than the container (because of your *explicit* column or row sizes), you can set the *overall* [justification](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) and [alignment](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content) within the container:
<!-- .balance -->

<figure
	@caption="Again, [this is just](/topic/flexbox/#justify-content) [like flex](/topic/flexbox/#align-items)! Same syntax, same behavior—you get the idea. Grid is like *Flex+*."
	@source="grid-justify-align-content/preview/?active=style.css"
	style="--lines: 10"
	>
</figure>



### Shorthand?

*Grid* also has [shorthand properties](https://developer.mozilla.org/en-US/docs/Web/CSS/grid) for many of these, like `grid`, `grid-template`, `place-items`, and `place-content`. However just like everything else, grid is complicated enough as it is! The shorthands really obfuscate the behavior, and aren’t worth the slightly tighter syntax.

Okay, so this is mostly like flex! To the point where you can use them interchangeably for some layouts. *You get it.* But now let’s look at where grid offers more specific and powerful control.
<!-- .balance .bold .scale--h4 .add-before--3 -->



### Using `repeat`

*Grid’s* `repeat` function is very commonly used to make even-column grids. And of course, they can be made responsive with [media queries](/topic/responsive/#media-queries) and [CSS variables](/topic/responsive/#briefly-css-variables)!
<!-- .balance -->

<figure
	@caption="Notice that the *items* always stick to the grid structure—independent of their content—unlike our previous `flex-wrap` pseudo-grids."
	@source="grid-template-columns-repeat/preview/?active=style.css"
	style="--lines: 16"
	>
</figure>


Flex is [sometimes referred](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout) to in this way as *content-out*, while grid is a *layout-in* system.
<!-- .balance .bold .scale--h4 -->


### `auto-fill`&thinsp;, `auto-fit`

You can also use the `repeat` function without specifying an exact number of columns, instead using `auto-fill` or `auto-fit` to [automatically define](https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/) your columns—making a grid inherently responsive without any media queries! These are great for controlling an even-column layout without much overhead:
<!-- .balance -->

<figure
	@caption="Drag the divider over to see the difference in `auto-fill` / `auto-fit` behaviors."
	@source="grid-template-columns-repeat-auto/preview/?active=style.css"
	style="--lines: 18"
	>
</figure>



### `grid-template-areas`

<div class="verso balance add-before--2">

*Grid* is really useful for scaffolding out layouts, and sometimes it is helpful to give your [*grid areas* qualitative/descriptive names](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas) that reflect their usage. This also makes it possible for the *grid items* (children) to reference them, below.

This is done with a bit of [ASCII art](https://en.wikipedia.org/wiki/ASCII_art) to reflect the layout! Repeating the name of a *grid area* makes the content span those cells. The syntax itself then provides an ergonomic visualization of the grid structure (for us humans):

You can also [name grid lines](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows#syntax) with `[linename] length` syntax, but you don’t see this done as much.
<!-- .secondary -->

</div>

<div class="recto add-before--3" style="align-self: start">

```css
section {
	display: grid;
	grid-template-columns: 2fr 1fr;
	grid-template-areas:
		"header header "
		"main   sidebar"
		"footer sidebar";
}
```

</div>



## Item <span class="parens">(</span>Child<span class="parens">)</span> Properties

You can really start to see the power of *grid* when you use these properties on the individual *grid items* (children) within the containers. While the container (parent) properties usually make for uniform layouts, item (child) properties allow for unique structures.
<!-- .balance -->



### `grid-area`

If you’ve defined `grid-template-areas` (as [above](#grid-template-areas)), you can then assign individual children to these areas:
<!-- .balance -->

<figure
	@source="grid-area/preview/?active=style.css"
	style="--lines: 22"
	>
</figure>

This is the [kind of common layout](https://en.wikipedia.org/wiki/Holy_grail_(web_design)) that was *unnecessarily* hard before grid! It’s so much easier now.
<!-- .balance .bold .scale--h4 -->



### `grid-column`&thinsp;, `grid-row`

You can also control *item* placement in unnamed (and *implicit*) grid areas with the `grid-column` and `grid-row` properties.

These take two values, divided with a `/` (because CSS is inconsistent), which specify the *start line* and *end line*. There is also a `span` value for bridging across tracks:

<figure
	@caption="Notice that we can leave off the *end line* if it doesn’t `span` multiple tracks, and also that you either add a `span` *or* a specific *end line* number."
	@source="grid-column-row/preview/?active=style.css"
	style="--lines: 20"
	>
</figure>

These are *technically* [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column) [properties](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row), but we’ll allow it here—they are <em>easier</em> to read!
<!-- .balance -->

You can also leave off the *start line* if you just want to specify a `span`, regardless of where the item falls in the grid:
<!-- .balance -->

<figure
	@caption="We’ve added `grid-auto-flow: dense;` to the container—allowing the seventh item to [scoot up](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow) “before” the bigger one."
	@source="grid-column-row-span/preview/?active=style.css"
	style="--lines: 13"
	>
</figure>

And if you specify non-contiguous rows or columns, *grid* will create as many *implicit* tracks as it needs to accommodate them—even if they are empty:
<!-- .balance #empty-tracks -->

<figure
	@caption="Note that just like `order` in flex, this arrangement is only visual! Keep your DOM in a logical, semantic sequence."
	@source="grid-column-row-implicit/preview/?active=style.css"
	style="--lines: 22"
	>
</figure>

Keep in mind that with both `grid-area` and `grid-column` / `grid-row`, you are able to tell multiple *grid items* to land in the same *cell*—there isn’t any kind of fancy/automatic collision-prevention. If this <em>is</em> what you want, you can use `z-index` to specify which one is visually [in front](/topic/box-model/#depth)!


### `justify-self`&thinsp;, `align-self`

Finally, just like flex—you can position individual *grid items* within their *tracks* using `justify-self` and `align-self`. The syntax is the same as [align in flex](/topic/flexbox/#align-self), again—but as with `justify-items` / `align-items` above, you don’t have to flip axes:
<!-- .balance -->

<figure
	@caption="You can mix and match these justify/align values, of course!"
	@source="grid-justify-align-self/preview/?active=style.css"
	style="--lines: 14"
	>
</figure>

<blockquote
	@attribution="Josef Müller-Brockmann"
	@citation="https://www.niggli.ch/en/produkt/the-graphic-artist-and-his-design-problems/"
	>

The grid system is an aid, not a guarantee.

It permits a number of possible uses and each designer can look for a solution appropiate to [their] personal style. But one must learn how to use the grid; it is an art that requires practice.

</blockquote>
