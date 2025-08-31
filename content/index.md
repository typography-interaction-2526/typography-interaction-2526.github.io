<script front-matter>
	const eleventyComputed = { title: ({ course }) => course.title }
</script>

<span webc:nokeep @html="markdown(course.logistics)"></span>
<!-- .intro -->

<em style="margin-inline-start: -0.2em">Typography & Interaction</em> is a year-long, two-semester course in the [MPS Communication Design](https://mpscd.parsons.edu) program at [Parsons](https://www.newschool.edu/parsons/), at [The New School](https://www.newschool.edu). The class will provide a rigorous foundation of typographic and interaction principles in the context of digital design.

- <a :href="$data.course.channel.submit"><cite>Submit</cite></a>
- <a :href="$data.course.channel.slack"><cite>Slack</cite></a>
- <a :href="$data.course.channel.figma"><cite>Figma</cite></a>
- <a :href="$data.course.channel.github"><cite>GitHub</cite></a>
- <a :href="$data.course.channel.google"><cite>Google</cite></a>
- <a :href="$data.course.channel.zoom"><cite>Zoom</cite></a>
<!-- .right .rows--3 -->

We’ll be using this course site for our agendas, lectures, general class housekeeping, and anything else that comes up. It will be updated throughout the semester, so always check here first if you are looking for something or have any questions.
