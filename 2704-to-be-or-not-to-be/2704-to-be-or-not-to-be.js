/**
 * @param {string} val
 * @return {Object}
 */
const expect = function (val) {
    const toBe = function (val1) {
        if (val === val1) {
            return true;
        } else {
            throw new Error("Not Equal");
        }
    }

    const notToBe = function (val2) {
        if (val !== val2) {
            return true;
        } else {
            throw new Error("Equal");
        }
    }

    return {
        toBe,
        notToBe
    };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */