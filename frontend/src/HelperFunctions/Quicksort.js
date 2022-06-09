const Quicksort = (list) => {

    if (list.length < 2) {
        return list;
    }

    let pivot = list[0];
    let left = [];
    let right = [];

    for (let i = 1, total = list.length; i < total; i++) {
        if (list[i].localeCompare(pivot) === -1) {
            left.push(list[i]);
        }
        else {
            right.push(list[i]);
        }
    }
    return [...Quicksort(left), pivot,...Quicksort(right)];

}

module.exports = Quicksort;