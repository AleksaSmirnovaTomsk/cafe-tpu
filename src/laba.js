// const laba = (arr) => {
//     return arr.map(element => {
//         if (typeof element === 'number' && element % 1 === 0) {
//             if (element % 2 === 0) {
//                 return +element + '1'
//             } else {
//                 return +element + '0'
//             }
//         } if (typeof element === 'string') {
//             return '!' + element[0].toUpperCase() + element.substring(1)
//         } if (typeof element === 'boolean') {
//             return !element
//         } 
//         return element
//     });
// }
// console.log(laba([2, 1.5, 3, 4, 7, 'SASHA', 'vova', false, true]))

const labaSwitch = (arr) => {
    return arr.map(element => {
        switch (typeof element) {
            case 'number':
                if (element % 1 === 0) {
                    if (element % 2 === 0) {
                        return +element + '1'
                    } else {
                        return +element + '0'
                    }
                } else {
                    return +element
                }
            case 'string':
                return '!' + element[0].toUpperCase() + element.substring(1)
            case 'boolean':
                return !element
            default:
                return element
        }
    })
}
console.log(labaSwitch([1.3, 2, 1.5, 3, 4, 7, 'SASHA', 'vova', false, true]))