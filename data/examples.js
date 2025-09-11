import fg from 'fast-glob'
import { readFile } from 'node:fs/promises'
import path from 'node:path'

/**
 * Find all examples for all topics, and construct a nested map of all file contents for use in
 * rendering of interactive example live demo page.
 *
 * @note this does not support nested folders in the examples themselves
 */

/**
 * @typedef {string} Topic
 * @typedef {string} Example
 * @typedef {string} FileName
 * @typedef {string} FileContents
 */

/**
 * @type {Record<Topic, Record<Example, Record<FileName, FileContents>>>}
 */
const data = {}

const files = await fg.glob(['./content/topic/*/*/**'])

for (const file of files) {
	// Slice to strip out the ./content/topic/ prefix
	const parts = file.split(path.sep).slice(3)

	const topic = parts[0]
	const example = parts[1]
	const filename = parts[2]

	data[topic] = {
		...(data[topic] ?? {}),
		[example]: {
			...(data[topic]?.[example] ?? {}),
			[filename]: await readFile(file, 'utf8'),
		},
	}
}

/** @type {{ topic: Topic, example: Example, files: { filename: FileName, contents: FileContents }[] }[] }[]} */
const output = []

// Convert nested object to arrays for better ergonomics in-template
Object.entries(data).forEach(([topic, examples]) => {
	Object.entries(examples).forEach(([example, files]) => {
		output.push({
			example,
			files: Object.entries(files).map(([filename, contents]) => ({
				contents,
				filename,
			})),
			topic,
		})
	})
})

export default output
