//The Office I - Outed
let meet = { 'tim': 0, 'jim': 2, 'randy': 0, 'sandy': 7, 'andy': 0, 'katie': 5, 'laura': 1, 'saajid': 2, 'alex': 3, 'john': 2, 'mr': 0 }

function outed(meet, boss) {
    let avg = (Object.values(meet).reduce((a, b) => a + b, 0) + meet[boss]) / Object.values(meet).length
    return avg <= 5 ? 'Get Out Now!' : 'Nice Work Champ!'
}

let staff = {
    tim: 'change', jim: 'accounts',
    randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
    laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
    mr: 'finance'
}
function boredom(staff) {
    let obj = {
        'accounts': 1,
        'finance': 2,
        'canteen': 10,
        'regulation': 3,
        'trading': 6,
        'change': 6,
        'IS': 8,
        'retail': 5,
        'cleaning': 4,
        'pissing about': 25
    }
    let total = Object.values(staff).reduce((a, b) => a + obj[b], 0)
    if (total <= 80) {
        return 'kill me now'
    } else if (total >= 100) {
        return 'party time!!'
    } else {
        return 'i can handle this!'
    }
}
let list1 = [
    { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
    { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
    { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
    { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
    { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
    { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
];
let number = 34;

function removeLastNumber(number) {
    return Math.floor(number / 10 )
}
function isConsecutive(list1) {
    const seen = [...Array(10)].map(i => false)
    const ages = list1.map(elm => elm.age)
    for (let age of ages) {
        let decade = removeLastNumber(Math.min(age, 100))
        seen[decade - 1] = true
    }
    return seen.every(elm => elm === true)
}

function isAgeDiverse(list) {
    return ["Americas", "Europe", "Asia", "African"]
  }