const readline = require('readline');

// Fungsi untuk memproses huruf vokal
function procVowel(param) {
    const vowels = "aeiou";
    let result = "";


    // Mengubah input menjadi huruf kecil dan memproses tiap karakter
    param.toLowerCase().split('').forEach(char => {
        if (vowels.includes(char)) {
            result += char;
        }
    });


    return result;
}


// Fungsi untuk memproses huruf konsonan
function procConsonant(param) {
    const vowels = "aeiou";
    let result = "";


    // Mengubah input menjadi huruf kecil dan memproses tiap karakter
    param.toLowerCase().split('').forEach(char => {
        if (!vowels.includes(char) && /[a-z]/.test(char)) {
            result += char;
        }
    });


    return result;
}


// Fungsi utama
function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Input one line of words (S): ", (input) => {
        const charVowel = procVowel(input);
        const charConsonant = procConsonant(input);

        console.log("Vowel Characters: ");
        console.log(charVowel);
        console.log("Consonant Characters: ");
        console.log(charConsonant);

        rl.close();
    });
}


// Memanggil fungsi utama
main();