<script front-matter>
	const draft = true
	const title = '“Everything Else”'
	const week = 30
</script>

## There’s always more to it

Our 30 weeks here together is both a long time and also nowhere near enough—this is a *Great Big Thing*, our broad field. So we put together some mini-topics here that we didn’t get to, but still think are important!

<aside>

<mark>Follow links for more information</mark>

Many of these topics could be full classes themselves. We hope this quick overview (and *copious* linking) can be an introduction if you want to go deeper.

</aside>

<figure
	@caption="There is always an [*xkcd*](https://xkcd.com/)."
	@citation="https://xkcd.com/1597/"
	@source="https://imgs.xkcd.com/comics/git_2x.png"
	@style="--lines: 16"
	@class="before--3"
	>
</figure>

<style>
	dl {
		margin-block-start: calc(2rlh);
		text-wrap:          balance;

		dt:not(:first-child) { margin-block-start: 2rlh }
	}
</style>

## Git/&hairsp;GitHub and Collaboration

Our old friend GitHub (and the underlying technology, [Git](https://git-scm.com)) are robust, industry-standard tools for version control and working together on code. But to some extent, we barely scratched the surface! These are some other important Git/GitHub concepts:
<!-- .balance -->

Branches
: Besides for our second project, we’ve used Git/GitHub primarily for solo, linear software development—but that is rarely how you work, especially at scale!

	One of Git’s core concepts is a [*branch*](https://www.atlassian.com/git/tutorials/using-branches) (think *tree* metaphors). These are new/separate versions of your entire repository—which [you create](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/managing-branches) (people say *branch*, as a verb) off the `main` *trunk* (nobody says *trunk* though). When you do this to a separate repo it is called [*forking*](http://www.differencebetween.net/technology/difference-between-fork-and-branch/) (people do say *fork* and such).

	Figma has started to [adopt this concept](https://www.figma.com/best-practices/branching-in-figma/best-practices-when-using-branches/), too! <!-- .note -->

Merges
: You might use these branches to develop a new feature, or to fix a bug, before you [*merge*](https://www.atlassian.com/git/tutorials/using-branches/git-merge) these back into `main`. Sometimes, someone else will have edited the same lines of code you were working on, in the meantime, and you’ll have to resolve a [*merge conflict*](https://www.youtube.com/watch?v=HosPml1qkrg)—deciding whose work to take. (It can get messy.)

PR&NoBreak;<sub>s</sub> (Pull Requests)
: When you are working on big software projects/repos with multiple people—and when you don’t want to break `main` with hasty merges—you *push* your code up to GitHub and [open a *pull request*](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) (everyone says *P&#x202F;-&thinsp;R*). This shows all your combined commits together, and allows your team [to review](https://www.youtube.com/watch?v=rgbCcBNZcdQ&pp=ygUOInB1bGwgcmVxdWVzdCI%3D) and approve your whole batch of work before you merge into `main`.

<figure
	@citation="https://xkcd.com/1459/"
	@source="https://imgs.xkcd.com/comics/documents_2x.png"
	@style="--lines: 16; justify-self: end"
	class="recto multiply documents"
	>
</figure>

<style>
	figure.documents div {
		&::before {
			background-color: white;
			border-radius:    0.1rem;
			content:          '';
			inset:            0;
			inset-block-end:  9.5%;
			position:         absolute;
		}
	}
</style>

## Working on Software

We also only barely “dipped our toes” into project management, roadmapping, working with devs, and all the other [“soft skills”](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Soft_skills) stuff that exists *around* the work of making digital things. A few highlights:
<!-- .balance -->

Agile
: A popular way to structure software project management. Many product teams will use [*Agile*](https://www.atlassian.com/agile) methodology as a way of prioritizing tasks—working in so-called *sprints* or *cycles* (often two weeks) to deliver features incrementally rather than all at once.

	One way that Agile is practiced is with a [*kanban* board](https://www.atlassian.com/agile/kanban/boards) (from the [Japanese system](https://en.wikipedia.org/wiki/Kanban)), a visual way of organizing tasks into discrete phases of work so that team members understand where different *stories* (or *tickets*, *tasks*, or *issues*) are in the queue.

	[Many](https://www.atlassian.com/) [tools](https://linear.app/) are built around [this](http://asana.com/) [mindset](https://clickup.com)! It’s a bit like our roadmapping exercise.<!-- .note -->

Annotating
: Often a completed design in Figma isn’t enough for [*handoff*](https://uxplanet.org/a-complete-guide-to-executing-a-great-design-to-development-handoff-4bd545be9416) to a developer for implementation. There can be ambiguities in your design that *you* may have thought through, but need more explanation than the visual provides on its own. This could be how you expect an element to behave responsively, or maybe you have a specific dimension in mind, or you want to describe it in motion.

	*Annotating* (you used to hear it called [*redlining*](https://www.uxbeginner.com/glossary/redlining/)—not to be confused with [its other meaning](https://en.wikipedia.org/wiki/Redlining)) is a term for when you *mark up* your designs with information—key measurements or other important behaviors/traits. This forms the *spec* that a dev should implement.

	Figma’s [*Dev Mode*](https://www.figma.com/dev-mode/) is aimed at this problem! <!-- .note -->

Bus Factor / Bus Count
: On small product teams, certain individuals may be the only ones who understand how a certain feature works or is implemented. The phrase [*bus factor*](https://en.wikipedia.org/wiki/Bus_factor) (or *bus count*) is used in the lens of risk management—to make sure the product/team can continue if anyone gets “hit by a bus.”

	Always try to avoid a *bus count* of one! Not just because of actual busses (and life stuff), but to distribute knowledge and understanding (and stress) among your team.

<!-- Markdown! You fool. -->

Technical (and Design) Debt
: Very often, products have to make trade-offs between design or code quality to meet deadlines, or to handle [*scope creep*](https://asana.com/resources/what-is-scope-creep). These decisions sometimes come at the expense of either side—sacrificing the most nuanced design, or giving up on the most pristine, sturdy code. Often the short-term wins over the long-term.

	[*Technical debt*](https://www.atlassian.com/agile/software-development/technical-debt) (or the analogous *design debt*) is the accumulation of these short-term decisions—where you have postponed doing it the right way. Like other forms of debt, these often *compound* over time—if you don’t pay them down or address them as you move forward.

	In this lens, it might be helpful to think of “AI”/LLM&NoBreak;s as *credit cards*. They’ll let you spend quickly, but you’ll have to pay the debt eventually! <!-- .note -->

	Richard Scarry [understood](https://miro.medium.com/v2/resize:fit:2000/format:webp/0*iFaxYkoSpxX5gOPE.jpeg). <!-- .note -->

Dogfooding
: Often the best way—or at least the *first* way—to make sure your product is up to snuff is by using and testing it *yourself*. This term is called [*dogfooding*](https://www.nytimes.com/2022/11/14/business/dogfooding.html), or *eating your own dog food*. (There are debates on the [etymology](https://www.computer.org/csdl/magazine/so/2006/03/s3005/13rRUygBwg0).) It’s got to be good enough for you, before it is good enough for anyone else! (Or for dogs.)

	A famous example is Apple, when pushing desktop publishing in 1980, [outlawing typewriters internally](https://archive.org/details/Apple_Memo_No_Typewriters/page/n1/mode/2up). <!-- .note -->

<figure
	@citation="https://xkcd.com/1332/"
	@source="https://imgs.xkcd.com/comics/slippery_slope_2x.png"
	@style="--lines: 13; justify-self: center"
	class="center"
	>
</figure>

## Accessibility

This is big, always-evolving topic—and one that should permeate all the others. We’ve mentioned it in passing, but know that it is a discipline unto itself and that *you* can be an advocate for it:
<!-- .balance -->

A11y
: [*A11y*](https://www.a11yproject.com/) is a catch-all term for [accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility). This is shorthand for ensuring that your product is as inclusive as possible—for folks with different disabilities—often estimated to be [around 15%](https://www.un.org/development/desa/disabilities/resources/factsheet-on-persons-with-disabilities.html) of the world’s population.

	You will often see this kind of abbreviation (numeronym) for [*i18n*](https://en.wikipedia.org/wiki/Internationalization_and_localization), for *internationalization*. <!-- .note -->

Web Content Accessibility Guidelines (WCAG)
: When in doubt, you can refer to the *Web Content Accessibility Guidelines*—which are codified and published (after [*much* debate](https://github.com/w3c/wcag3/issues)) by the W3C. We’re still working under [WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/), but there is [a draft now for 3.0](https://w3c.github.io/wcag3/guidelines/).

	They are not perfect, but are a useful framework—most easily understood as a series of *success criteria* that your work should “pass.” An accessibile design/build should meet these goals!

	A great example: [1.4.1 *Use of Color*](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color). <!-- .note -->

ARIA labels
: While the best and most-basic way of writing accessible websites is to start with semantic DOM elements, sometimes there isn’t an appropriate one—this is where [*ARIA*](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) (*Accessible Rich Internet Applications*) labels come in.

	These are additional attributes you can add to an HTML element which help a screenreader to convey the meaning of your content:

	```html<!-- .add-before .add-after -->
	<button aria-label="Close"><!-- A cool, close-y icon. --></button>
	```

	These are particularly important for us as designers, where our aesthetic proclivities might lean towards making our designs *harder* to access—by using icons, slight colors, etc.

VoiceOver / TalkBack / Narrator
: These are platform-specific, commonly-used assistive technologies that are available in each OS: Apple’s [*VoiceOver*](https://www.apple.com/accessibility/vision/), Google’s (Android) [*TalkBack*](https://support.google.com/accessibility/android/topic/3529932?hl=en&ref_topic=9078845&sjid=8833292709650514472-NA), and Microsoft’s [*Narrator*](https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1).

	[Many disabled folks](https://webaim.org/projects/screenreadersurvey9/) use other screen-readers (namely [JAWS](https://www.freedomscientific.com/products/software/jaws/) and [NVDA](https://www.nvaccess.org/download/)), but these are a good, built-in start. <!-- .note -->

<figure
	@citation="https://xkcd.com/927"
	@source="https://imgs.xkcd.com/comics/standards_2x.png"
	@style="--lines: 11; justify-self: end"
	class="recto multiply standards"
	>
</figure>

<style>
	figure.standards div {
		&::before {
			background-image:  linear-gradient(to right, white 28%, transparent 28%, transparent 30%, white 30%, white 70%, transparent 70%, transparent 72%, white 72%);
			border-radius:     0.1rem;
			content:           '';
			inset:             0;
			inset-block-start: 13.5%;
			position:          absolute;
		}
	}
</style>

## Approaches and Frameworks

If you remember back to [*What Is Code?*](https://www.bloomberg.com/graphics/2015-paul-ford-what-is-code/), software (and the web) is awash with competing approaches, concepts, and *opinions*—and their resulting execution and frameworks. Some things worth mentioning:
<!-- .balance -->

Open Source / FOSS
: We always “stand on the shoulders of giants,” and much of the web—much of all software, and so the world—is based on [*free and open-source software*](https://en.wikipedia.org/wiki/Free_and_open-source_software) or FOSS.

	This means the code is [*licensed*](https://en.wikipedia.org/wiki/Software_license) such that you can use and modify it, free of charge. This is sometimes sponsored by software companies, but often is [one or a few](https://www.nytimes.com/2024/04/03/technology/prevent-cyberattack-linux.html) dedicated *maintainers* who keep the proverbial lights on.

Multi-Page Apps (MPA&NoBreak;<sub>s</sub>) <sub>vs.</sub> Single-Page Apps (SPA&NoBreak;<sub>s</sub>)
: Much of what we’ve done this year could be called a *multi-page app*—meaning just that your websites (products) have been comprised of discrete, separate HTML pages. Remember that the web started as simple *MPA*, though the term didn’t exist yet!

	As the capabilities, uses, and needs of the web grew it became more *app-like*—with complicated interactions, changes, and *state* within a single “page.” [*Frameworks*](/topic/everything/#these-days-apps-are-often-web-pages-too) (like [React](https://react.dev) or later, [Vue](https://vuejs.org)) were created to facilitate this behavior, via JavaScript—creating a more dynamic experience within one browser session.

	It’ll always depend on the project! But remember that at the end of the day, the browser is always still showing you HTML (from somewhere), styled by CSS (from somewhere), maybe enlivened by JavaScript (from somewhere). There are a lot of ways at that. Your audience won’t know (or care).

	The line here is getting even blurrier—when you hear things like [*server-side rendering (SSR)*](https://www.sanity.io/glossary/server-side-rendering) and even [*partial hydration*](https://ajcwebdev.com/what-is-partial-hydration/). <!-- .note -->

Bootstrap
: The framework *du jour* for a long time—[Bootstrap](https://getbootstrap.com/) was created by Twitter (back when it was Twitter) as a way of quickly creating web apps. Because frameworks have to have opinions to work (think back to [*The Web’s Grain*](https://frankchimero.com/blog/2015/the-webs-grain/)) the downside is that many websites created using this have a certain “made with Bootstrap” vibe.

	Nowadays, you might see [Radix](https://www.radix-ui.com/) and [`shadcn/ui`](https://ui.shadcn.com/). Look familiar?

	In a small environment you’ll likely be working with an existing ([*legacy*](https://en.wikipedia.org/wiki/Legacy_system)) framework or component library of some sort, so understanding these trade-offs is important. Familiarity (and speed) vs. personality!

### In CSS Land…

SASS  (`.SCSS`&hairsp;)
: As you may have noticed, writing CSS can be repetitive and tiresome!

	Way back in 2006, some (*very* opinionated) folks developed [*SASS*](https://sass-lang.com/) (*Syntactically Awesome Style Sheets*)—which is a CSS preprocessor that extends the language with helpful tools. It is its own [syntax](https://sass-lang.com/documentation/syntax) (mostly based on CSS) which gets *compiled* (processed) into normal CSS, which your browser understands. It is *very* commonly included in frameworks/build tools!

	Recently, *much* of the utility/need for SASS has been obviated by CSS adopting similar features, like [parent selectors (`:has`)](/topic/css/#has-really-has-changed-things), [custom properties (variables)](/topic/responsive/#briefly-css-variables) and [CSS nesting](/topic/css/#oh-also-nesting).

BEM
: You might have also noticed that coming up with CSS class names can be difficult, as well—and only gets worse as your projects get larger. [*BEM*](https://en.bem.info/methodology/) (*Block, Element, Modifier*) is a commonly-used nomenclature methodology/practice to deal with this (and also avoid [*specificity*](/topic/css/#specificity) problems).

	It follows [the pattern](https://en.bem.info/methodology/naming-convention/) `.block__element--modifier` in classnames—and these double separators (`__` and `--`) are sometimes seen even in non-*BEM-y* contexts. Any system is better than no system!

Tailwinds (Atomic / Utility CSS)

: On the other end of the spectrum—an alternative approach to CSS naming—following a [*utility class*](https://css-irl.info/a-year-of-utility-classes/) methodology.

	This uses many, many small, descriptive or directly-property-mapped names (like `.red` or `.flex`) across any elements. This approach is sometimes [*kleenexed*](https://en.wikipedia.org/wiki/Generic_trademark) as [atomic CSS](https://acss.io) or [Tailwinds](https://tailwindcss.com).

	Your instructors wrote our [own <em>atomic</em> CSS library](https://uxdesign.cc/tools-not-rules-9daef895aab7#3234), baking-in/formalizing MoMA’s brand, that we called [Sol](https://www.moma.org/artists/3528). It seemed like a good idea at the time!<!-- .note -->

<figure
	@caption="As if you needed another thing to worry about!"
	@citation="https://xkcd.com/2347"
	@source="https://imgs.xkcd.com/comics/dependency_2x.png"
	@style="--lines: 16; grid-column: four-start / six-end"
	>
</figure>
