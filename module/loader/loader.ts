export default function loadID({array} : {array: [{}]}) {
    const result = [];
    for (let index = 0; index < array.length; index++) {
        result.push({...array[index], id: index});
    }
    return result;
}