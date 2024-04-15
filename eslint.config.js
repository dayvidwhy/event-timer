import eslintPluginAstro from "eslint-plugin-astro";
export default [
    // add more generic rule sets here, such as:
    // js.configs.recommended,
    ...eslintPluginAstro.configs["flat/recommended"],
    {
        rules: {
            "indent": ["error", 4],
            "quotes": ["error", "double"],
            "semi": ["error", "always"],
            "no-extra-semi": "off",
            "@typescript-eslint/no-extra-semi": "off",
            "eol-last": ["error", "always"],
            "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1 }],
            // override/add rules settings here, such as:
            // "astro/no-set-html-directive": "error"
        }
    }
];
