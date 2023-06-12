module.exports = {
   env: {browser: true, es2020: true},
   extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react-hooks/recommended",
   ],
   parser: "@typescript-eslint/parser",
   parserOptions: {ecmaVersion: "latest", sourceType: "module"},
   plugins: ["react-refresh"],
   rules: {
      "react-refresh/only-export-components": "warn",
      "indent": [
         "error",
         3
      ],
      "semi": [2, "always"],
      "quotes": [2, "double"],
      "template-curly-spacing": ["error", "always"],
   },
};
