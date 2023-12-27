function hitung() {
    const kode = document.getElementById("inputKode").value;
    const banyakBarang = document.getElementById("inputBanyakBarang").value;

    if (kode === "001") {
        hitung = banyakBarang * 10000;
    } else if (kode === "002") {
        hitung = banyakBarang * 20000;
    } else if (kode === "003") {
        hitung = banyakBarang * 30000;
    }

    window.alert(`total bayar : ${hitung}`);
    window.prompt(`bayar :`);
    window.alert(`Kembalian : `);
}

