const checkNode = (node, min, max) => {
    const { left, right, val } = node;

    const minCondition = min !== null && left && left.val <= min;

    if (left !== null && (left.val >= val || minCondition)) {
        return false;
    }

    const maxCondition = max !== null && right && right.val >= max;

    if (right !== null && (right.val <= val || maxCondition)) {
        return false;
    }

    const leftResult = left === null ? true : checkNode(left, min, val);
    const rightResult = right === null ? true : checkNode(right, val, max);

    if (!leftResult || !rightResult) {
        return false;
    }

    return true;
}

const isValidBST = (root) => {
    return checkNode(root, null, null);
};
