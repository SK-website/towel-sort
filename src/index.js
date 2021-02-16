module.exports = function towelSort(matrix) {
    if (!matrix || !matrix.length) {
        return [];
    }
    matrix.forEach((el, i) => {
        if (i % 2 != 0) {
            el.reverse();
        }
    });

    const res = matrix.reduce((a, b) => {
        return a.concat(b);
    });

    return res;
};
