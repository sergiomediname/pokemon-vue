module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "plugin:vue/vue3-essential",
        "standard",
        "eslint:recommended"
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: [
        "vue"
    ],
    rules: {
        camelcase: "off",
        indent: ["error", 4],
        semi: ["error", "always"],
        quotes: ["error", "double"]
    }
}
