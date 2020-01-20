module.exports = {
    //Statndard JavaScript Style Guide
    extends: ["standard", "plugin:prettier/recommeded"],
    //Airbnb JavaScript Style Guide
    // extends: ["airbnb-base", "plugin:prettier/recommeded"],
    rules: {
        "prettier/prettier": ["error", { "singleQuote": true }]
    }
};