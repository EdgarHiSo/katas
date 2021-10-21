var list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];

function filter(list1) {
    return list1.map(elm => elm.language)
   /* return list1.map(elm => elm.language)
    .reduce((count, languages) => {
        if (count[languages] == null) {
            count[languages] = 1
        } else {
            count[languages]++
        }
        return count
    }, {}) */
}

console.log(filter(list1))