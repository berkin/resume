module.exports = {
	"extends": "airbnb",
	"parserOptions": {
        "ecmaVersion": 7,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
			"impliedStrict": true,
			"experimentalObjectRestSpread": true
        }
	},
	"env": {
		"browser": true
	},
	"rules": {
		"arrow-body-style": 0,
		"max-len": [1, 200, 4],
		"no-tabs": 0,
		"no-console": 0,
		"no-use-before-define": 0,
		"indent": ["error", "tab"],
		"no-trailing-spaces": 1,
		"comma-dangle": ["warn", "never"],
		"padded-blocks": ["warn", "never"],
		"spaced-comment": [1, "always", {
			"exceptions": ["-", "+"],
			"markers": ["=", "!"]
		}],
		"eol-last": 0,
		"import/no-commonjs": 2,
		"import/no-amd": 2,
		"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
		"react/jsx-indent": [2, "tab"],
		"react/jsx-indent-props": [2, "tab"],
		"react/jsx-first-prop-new-line": 0,
		"react/forbid-prop-types": 0,
		"class-methods-use-this": 0
	},
	"plugins": [
		"react"
	]
}
