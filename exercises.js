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
    let total = Object.values(staff).reduce((a,b) => a + obj[b], 0)
    if (total <= 80) {
        return 'kill me now'
    }  else if (total >= 100) {
        return 'party time!!'
    } else {
        return 'i can handle this!'
    }
}
console.log(boredom(staff))