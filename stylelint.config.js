export default {
	extends: [
		'stylelint-config-standard',
		'@stylistic/stylelint-config',
	],
	ignoreFiles: [
		'_site/**',
		'content/topic/*/**',
		'layouts/base.webc',
		'layouts/blocks/styles.webc',
	],
	'overrides': [
		{
			'customSyntax': 'postcss-html',
			'files': ['**/*.html', '**/*.webc'],
		},
	],
	plugins: ['@stylistic/stylelint-plugin', 'stylelint-order', 'stylelint-plugin-logical-css'],
	rules: {
		'alpha-value-notation': 'percentage',
		'at-rule-empty-line-before': [
			'always',
			{
				ignore: ['after-comment', 'first-nested'],
			},
		],
		'comment-empty-line-before': [
			'always',
			{
				except: ['first-nested'],
				ignore: ['after-comment', 'stylelint-commands'],
			},
		],
		'custom-property-empty-line-before': null,
		'custom-property-pattern': '^[a-z0-9]+(-{1,2}[a-z0-9]([a-zA-Z0-9]+)?)*$',
		'declaration-block-no-redundant-longhand-properties': null,
		'declaration-block-single-line-max-declarations': 1,
		'media-feature-range-notation': null,
		'no-descending-specificity': null,
		'property-no-unknown': [
			true,
			{
				ignoreProperties: ['font-smooth'],
			},
		],
		'property-no-vendor-prefix': [
			true,
			{
				ignoreProperties: [
					'backdrop-filter',
					'box-decoration-break',
					'hyphens',
					'text-size-adjust',
					'user-select',
				],
			},
		],
		'selector-class-pattern': '^[a-z0-9]+([_-]{1,2}[a-z0-9]([a-zA-Z0-9]+)?)*$',
		'value-keyword-case': [
			'lower',
			{
				ignoreProperties: ['text-rendering'],
			},
		],

		'@stylistic/block-closing-brace-newline-after': 'always-single-line',
		'@stylistic/block-closing-brace-newline-before': null,
		'@stylistic/block-opening-brace-space-after': null,
		'@stylistic/block-opening-brace-space-before': null,
		'@stylistic/declaration-block-trailing-semicolon': [
			'always',
			{ ignore: ['single-declaration'] },
		],
		'@stylistic/declaration-colon-space-after': null,
		'@stylistic/function-comma-space-after': null,
		'@stylistic/indentation': 'tab',
		'@stylistic/max-empty-lines': 3,
		'@stylistic/max-line-length': null,
		'@stylistic/named-grid-areas-alignment': [true, { alignQuotes: true }],
		'@stylistic/number-no-trailing-zeros': null,
		'@stylistic/selector-combinator-space-after': 'always',
		'@stylistic/selector-combinator-space-before': 'always',
		'@stylistic/selector-list-comma-newline-after': 'always-multi-line',
		'@stylistic/selector-list-comma-space-after': 'always-single-line',
		'@stylistic/string-quotes': 'single',
		'order/order': [
			'custom-properties',
			'declarations',
			'rules',
			'at-rules',
		],
		'order/properties-alphabetical-order': true,
		'plugin/use-logical-properties-and-values': [true, { ignore: ['overflow-y', 'overflow-x'] }],
	},
}
