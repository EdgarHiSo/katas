//The Office I - Outed
let meet = {'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}

function outed(meet, boss) {
    let avg = (Object.values(meet).reduce((a,b) => a + b,0) + meet[boss]) / Object.values(meet).length
    return avg <= 5 ? 'Get Out Now!': 'Nice Work Champ!'
}
console.log(outed(meet, "laura"))