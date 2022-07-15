
const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '**********': ' ',
};

function decode(expr) {
    let morseCode = [];
    let inputArr = expr.split('');
    while (inputArr.length > 0) {
        let tenDigits = inputArr.splice(0, 10);
        let tempArr = [];
        while (tenDigits.length > 0) {
            let twoDigits = tenDigits.splice(0, 2);
            twoDigits[0] == 1 && twoDigits[1] == 0 ? tempArr.push('.') :
            (twoDigits[0] == 1 && twoDigits[1] == 1 ? tempArr.push('-') : 
            (twoDigits[0] == '*' ? tempArr.push('**') : tempArr.push('')))
        }
        morseCode.push(tempArr.join(''))
    }
    return morseCode.map((x) => MORSE_TABLE[x]).join('');
}

module.exports = {
    decode
}