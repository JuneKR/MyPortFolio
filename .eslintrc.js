module.exports = {
    // "extends": "eslint:recommended",
    //Statndard JavaScript Style Guide
    extends: ["standard", "plugin:prettier/recommended"],
    //Airbnb JavaScript Style Guide
    // extends: ["airbnb-base", "plugin:prettier/recommended"],
    rules: {
        "prettier/prettier": ["error", { "singleQuote": true }]
    }
};