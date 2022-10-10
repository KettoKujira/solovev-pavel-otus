// Задача про список рекомендаций maxItemAssociation
let sourceSet = [
    ['v', 'w', 'x'],
    ['q', 'w', 'a'],
    ['a', 'b'],
    ['a', 'c'],
    ['q', 'e'],
    ['q', 'r'],
    ['s', 'p'],
];

let subjects = {};
let finalSet = [];

const findSubjectsSupport = function (sourceSet) {
    for (let i = 0; i < sourceSet.length; i++) {
        for (let j = 0; j < sourceSet[i].length; j++) {
            subjects.hasOwnProperty(sourceSet[i][j])
            ? (subjects[sourceSet[i][j]] += 1)
            : (subjects[sourceSet[i][j]] = 1);
        }
    }
    
    return subjects;
};

const findHightSupport = function (subjects) {
    for (var subject in subjects) {
        if (subjects[subject] == 1) delete subjects[subject];
    }
    
    return subjects;
};

const clearSortSet = function(rawSet) {
    rawSet.sort()
    
    finalSet = [...new Set(rawSet)]
    
    return finalSet
};

const maxItemAssociation = function(sourceSet, subjects) {
    let rawSet = [];
    for (let i = 0; i < sourceSet.length; i++) {
        for (let j = 0; j < sourceSet[i].length; j++) {
            if (subjects.hasOwnProperty(sourceSet[i][j])) {
                rawSet = rawSet.concat(sourceSet[i]);
                break
            }
        }
    }

    clearSortSet(rawSet)

    return finalSet
};

findSubjectsSupport(sourceSet);
findHightSupport(subjects);
maxItemAssociation(sourceSet, subjects);
console.log(finalSet)
