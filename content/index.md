<span webc:nokeep @text="course.title"></span> is a year-long, two-semester course in the [MPS Communication Design](https://mpscd.parsons.edu) program at [Parsons](https://www.newschool.edu/parsons/) / [The New School](https://www.newschool.edu). The class will provide a rigorous foundation of typographic and interaction principles in the context of digital design.

We’ll be using this course site for our agendas, lectures, general class housekeeping, and anything else that comes up. It will be updated throughout the semester, so always check here first if you are looking for something.

<ul>
	<li webc:for="week of collections.weeks">
		<a :href="week.url" @html="week.data.title"></a>
	</li>
</ul>
