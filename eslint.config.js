import htmlPlugin from '@html-eslint/eslint-plugin'
import htmlParser from '@html-eslint/parser'
import html from 'eslint-plugin-html'
import jsonc from 'eslint-plugin-jsonc'
import perfectionist from 'eslint-plugin-perfectionist'
import sortKeysPlus from 'eslint-plugin-sort-keys-plus'

export default [
	{
		ignores: [
			'_site',
			'*package*',
			'node_modules',
		],
	},
	{
		plugins: {
			jsonc,
			perfectionist,
			'sort-keys-plus': sortKeysPlus,
		},
	},
	{
		rules: {
			'arrow-parens': ['error', 'always'],
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
		files: ['**/*.json'],
		languageOptions: { parser: (await import('jsonc-eslint-parser')).default },
		plugins: { jsonc },
		rules: {
			'jsonc/sort-keys': ['error', 'asc', { 'natural': true }],
		},
	},
	{
		files: ['**/*.html', '**/*.md', '**/*.webc'],
		plugins: { html },
		settings: {
			'html/html-extensions': ['.html', '.md', '.webc'],
			'html/indent': '+tab',
			'html/report-bad-indent': 'warn',
		},
	},
	{
		files: ['**/*.html', '**/*.md', '**/*.webc'], // Common rules.
		languageOptions: { parser: htmlParser },
		plugins: { '@html-eslint': htmlPlugin },
		rules: {
			'@html-eslint/id-naming-convention': ['error', 'kebab-case'],
			'@html-eslint/lowercase': 'error',
			'@html-eslint/no-duplicate-attrs': 'error',
			'@html-eslint/no-duplicate-class': 'error',
			'@html-eslint/no-duplicate-id': 'error',
			'@html-eslint/no-extra-spacing-attrs': 'error',
			'@html-eslint/no-invalid-entity': 'error',
			'@html-eslint/no-multiple-empty-lines': ['error', { max: 1 }],
			'@html-eslint/no-nested-interactive': 'error',
			'@html-eslint/no-script-style-type': 'error',
			'@html-eslint/no-trailing-spaces': 'error',
			'@html-eslint/quotes': ['error', 'double'],
			'@html-eslint/sort-attrs': ['error', {
				'priority': [
					{ 'pattern': 'webc:*' },
				],
			}],
		},
	},
	{
		files: ['**/*.html', '**/*.webc'], // Template/component-only.
		languageOptions: { parser: htmlParser },
		plugins: { '@html-eslint': htmlPlugin },
		rules: {
			'@html-eslint/attrs-newline': ['error', { 'closeStyle': 'newline', 'ifAttrsMoreThan': 1 }],
			'@html-eslint/element-newline': ['error', { 'inline': ['$inline', 'nobr'] }],
			'@html-eslint/indent': ['error', 'tab'],
			'@html-eslint/no-extra-spacing-text': 'error',
			'@html-eslint/prefer-https': 'error',
			'@html-eslint/require-closing-tags': ['error', { 'selfClosing': 'never'}],
		},
	},
	{
		files: ['**/*.md'], // Just Markdown.
		languageOptions: { parser: htmlParser },
		plugins: { '@html-eslint': htmlPlugin },
		rules: {
			'@html-eslint/prefer-https': 'warn',
			'@html-eslint/require-closing-tags': ['warn', { 'selfClosing': 'never'}],
		},
	},
]
