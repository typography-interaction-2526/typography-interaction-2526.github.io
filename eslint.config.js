import htmlParser from '@html-eslint/parser'
import htmlPlugin from '@html-eslint/eslint-plugin'
import vueParser from 'vue-eslint-parser'
import vuePlugin from 'eslint-plugin-vue'

export default [
	{
		ignores: [
			'node_modules',
			'_site',
		],
	},
	{
		rules: {
			'comma-dangle': ['error', 'always-multiline'],
			'indent': ['error', 'tab'],
			'no-console': 'warn',
			'prefer-const': 'error',
			'quotes': ['error', 'single'],
			'semi': ['error', 'never'],
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
			'@html-eslint/indent': ['error', 'tab'],
			'@html-eslint/no-multiple-empty-lines': ['error', { max: 1 }],
			'@html-eslint/quotes': ['error', 'double'],
			'@html-eslint/no-extra-spacing-attrs': 'error',
			'@html-eslint/sort-attrs': ['error', {
				'priority': [
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
					'@*',
					':*',
				],
			}],
		},
	},
]
