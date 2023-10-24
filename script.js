const morseCode = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
    'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
    'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.'
};

let charCount = 0;

function textToMorse(text) {
    let result = '';
    for (let c of text) {
        if (/[a-zA-Z]/.test(c)) {
            result += morseCode[c.toUpperCase()] + ' ';
        } else if (/[0-9]/.test(c)) {
            result += morseCode[c] + ' ';
        } else if (c === ' ') {
            result += ' ';
        }
    }
    return result;
}

function convertToMorse() {
    const inputText = document.getElementById('input').value;
    const morse = textToMorse(inputText);
    document.getElementById('output').innerText = `Morse code: ${morse}`;
}

function clearInput() {
    document.getElementById('input').value = '';
    document.getElementById('output').innerText = 'Morse code: ';
    charCount = 0;
    updateCharCount();
}

function updateCharCount() {
    charCount = document.getElementById('input').value.length;
    document.getElementById('charCount').innerText = `Characters entered: ${charCount}`;
}
