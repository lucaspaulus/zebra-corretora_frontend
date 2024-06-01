module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      "plugin:@typescript-eslint/recommended",
      "next/core-web-vitals",
      "prettier"
    ],
    ignorePatterns: [".next", ".eslintrc.js", "node_modules"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: "latest",
      sourceType: "module"
    },
    rules: {
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                overrides: {
                    interface: {
                        multiline: {
                            delimiter: "semi",
                            requireLast: true,
                        },
                        singleline: {
                            delimiter: "semi",
                            requireLast: true,
                        },
                    },
                },
            },
        ],

        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@next/next/no-html-link-for-pages": "off",
        indent: ["error", 4],
        quotes: ["error", "double"],
    },
    
  }