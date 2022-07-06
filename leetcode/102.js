// https://leetcode.com/problems/binary-tree-level-order-traversal/
const getLevels = () => {
    let result = [];

    const calcLevel = (pointer, level) => {
        if (pointer === null) {
            return result;
        }

        const { val, left, right } = pointer;

        if (!Array.isArray(result[level])) {
            result[level] = [];
        }

        result[level].push(val);

        if (left !== null) {
            calcLevel(left, level + 1);
        }

        if (right !== null) {
            calcLevel(right, level + 1);
        }

        return result;
    }

    return calcLevel;
}

const levelOrder = (root) => {
    const calcLevelFunc = getLevels();
    return calcLevelFunc(root, 0);
};
