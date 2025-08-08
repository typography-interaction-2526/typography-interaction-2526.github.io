import htmlPlugin from '@html-eslint/eslint-plugin'
import htmlParser from '@html-eslint/parser'
import perfectionist from 'eslint-plugin-perfectionist'
import sortKeysPlus from 'eslint-plugin-sort-keys-plus'
import vuePlugin from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'

export default [
	{
		ignores: [
			'node_modules',
			'_site',
		],
	},
	{
		plugins: {
			perfectionist,
			'sort-keys-plus': sortKeysPlus,
		},
	},
	{
		rules: {
			'comma-dangle': ['error', 'always-multiline'],
			'indent': ['error', 'tab'],
			'no-console': 'warn',
			'perfectionist/sort-imports': ['error', {
				newlinesBetween: 'ignore',
				order: 'asc',
				partitionByNewLine: true,
				type: 'natural',
			}],
			'perfectionist/sort-objects': ['error', {
				newlinesBetween: 'ignore',
				order: 'asc',
				partitionByNewLine: true,
				type: 'natural',
			}],
			'prefer-const': 'error',
			'quotes': ['error', 'single'],
			'semi': ['error', 'never'],
			'sort-keys-plus/sort-keys': ['error', 'asc', { allowLineSeparatedGroups: true, natural: true }],
		},
	},

	{
		files: ['**/*.webc'],
		languageOptions: { parser: vueParser },
		plugins: { vue: vuePlugin },
	},
	{
		files: ['**/*.webc'],
		languageOptions: { parser: htmlParser },
		plugins: { '@html-eslint': htmlPlugin },
		rules: {
			'@html-eslint/element-newline': 'error',
			'@html-eslint/indent': ['error', 'tab'],
			'@html-eslint/lowercase': 'error',
			'@html-eslint/no-duplicate-attrs': 'error',
			'@html-eslint/no-duplicate-class': 'error',
			'@html-eslint/no-duplicate-id': 'error',
			'@html-eslint/no-extra-spacing-attrs': 'error',
			'@html-eslint/no-extra-spacing-text': 'error',
			'@html-eslint/no-invalid-entity': 'error',
			'@html-eslint/no-multiple-empty-lines': ['error', { max: 1 }],
			'@html-eslint/no-nested-interactive': 'error',
			'@html-eslint/no-script-style-type': 'error',
			'@html-eslint/quotes': ['error', 'double'],
			'@html-eslint/require-closing-tags': ['error', { 'selfClosing': 'never'}],
			'@html-eslint/sort-attrs': ['error', {
				'priority': [
					'webc:bucket',
					'webc:for',
					'webc:if',
					'webc:elseif',
					'webc:else',
					'webc:ignore',
					'webc:import',
					'webc:is',
					'webc:keep',
					'webc:nokeep',
					'webc:root',
					'webc:scoped',
				],
			}],
		},
	},
]
