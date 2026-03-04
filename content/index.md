<script front-matter>
	const eleventyComputed = { title: ({ course }) => course.title }
</script>

<div class="balance body">
	<p class="intro" @html="markdown(course.logistics.school)"></p>
	<p class="intro">
		<span @html="markdown(course.logistics.fall)"></span><br>
		<span @html="markdown(course.logistics.spring)"></span>
	</p>
	<p class="intro">
		<span @html="markdown(course.logistics.room)"></span><br>
		<span @html="markdown(course.logistics.time)"></span>
	</p>
</div>

<ul class="right">
	<li webc:for="instructor, index of $data.pkg.contributors">
		<a :href="instructor.url"><cite @text="instructor.name"></cite></a>
	</li>
</ul>

<em @text="course.title" style="margin-inline-start: -0.2em"></em> is a year-long, two-semester course in the [MPS Communication Design](https://mpscd.parsons.edu) program at [Parsons](https://www.newschool.edu/parsons/) / [The New School](https://www.newschool.edu). The class will provide a rigorous foundation of typographic and interaction principles in the context of digital design.
<!-- .before--2 data-description -->

- <a :href="$data.course.channel.submit"><cite>Submit</cite></a>
- <a :href="$data.course.channel.slack"><cite>Slack</cite></a>
- <a :href="$data.course.channel.figma"><cite>Figma</cite></a>
- <a :href="$data.course.channel.github"><cite>GitHub</cite></a>
- <a :href="$data.course.channel.google"><cite>Google</cite></a>
- <a :href="$data.course.channel.zoom"><cite>Zoom</cite></a>
<!-- .right .rows--3 -->

We’ll be using this course site for our agendas, lectures, general class housekeeping, and anything else that comes up. It will be updated throughout the semester, so always check here first if you are looking for something or have any questions.

<style>
	main > div {
		align-self: start;

		p.intro { margin-block-start: initial }

		@container style(--columns: 1) { margin-block-start: 1rcap }

		@container style(--columns: 6) { row-gap: 1rcap }
	}
</style>
