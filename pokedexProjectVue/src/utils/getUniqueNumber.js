export function uniquesNumbers(quantity) {
    let randomNum = -1;
    let randomNumArray = [];
    let i=0;
        
    while (!randomNumArray.includes(randomNum) || i < quantity) {
            randomNum = Math.round(Math.random() * 1010);
            randomNumArray.push(randomNum);
            i++;
        }
    return randomNumArray
}