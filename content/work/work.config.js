import fs from 'node:fs'
import path from 'node:path'

export default {
	eleventyComputed: {
		images: ({ page }) => fs.readdirSync(path.join(path.dirname(page.inputPath), 'images'))
			.map((file) => `images/${file}`),
	},
}
