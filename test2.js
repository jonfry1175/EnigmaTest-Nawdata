const readline = require('readline');

// Fungsi utama untuk menghitung jumlah bus minimum
function calculateMinimumBus(families, members) {
    if (families !== members.length) {
        console.log("Input must be equal with count of family");
        return;
    }

    // Sortir jumlah anggota keluarga dari yang terbesar ke yang terkecil
    members.sort((a, b) => b - a);

    let busCount = 0;
    let i = 0;
    let j = members.length - 1;

    // Loop hingga telah mengelompokkan semua keluarga
    while (i <= j) {
        // Coba gabungkan dua keluarga dalam satu bus
        if (members[i] + members[j] <= 4) {
            j--; // Gabungkan keluarga terbesar dengan keluarga terkecil
        }
        i++; // Keluarga terbesar tetap masuk ke dalam bus
        busCount++; // Hitung bus
    }

    console.log(`Minimum bus required is: ${busCount}`);
}

// Fungsi untuk input data dari terminal
function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Input the number of families: ", (familiesInput) => {
        const families = parseInt(familiesInput, 10);

        rl.question("Input the number of members in the family (separated by a space): ", (membersInput) => {
            const members = membersInput.split(' ').map(Number);

            calculateMinimumBus(families, members);
            rl.close();
        });
    });
}

// Memanggil fungsi utama
main();
