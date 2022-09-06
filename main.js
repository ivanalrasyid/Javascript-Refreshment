// Jawaban Nomor 1 

var a = 5;
let b = "kampus merdeka";
const nama = "Budi";
let terdaftar = true;
let lengkap_arr = [a, b, nama, terdaftar];


function perkenalan() {
    let asal = "indonesia";
    return console.log(
        "Perkenalan nama saya" +
         nama +
         "nomor urut" +
         a +
         " sekarang sedang mengikuti" +
         b +
         "berasal dari " +
         asal 
    );
}

if (terdaftar === true) {
    console.log(nama,  ""  + "terdaftar sebagai kegiatan kampus merdeka");
}

console.log("array = " + nama);

a = b;
panggilan = b;

perkenalan();
console.log("a adalah = " + panggilan);
console.log("b adalah = " + b);


console.log("======================================================")
console.log("Dibawah berikut adalah soal Nomor 3, 4, 5, 6")
console.log("======================================================")
// =============================================================================

// Soal Nomor 3 
// maaf kak ada beda seperti soal , soalnya varibel a,b,c sudah dipakai
const foo = ['Budi', 'Sita', 'Ayu'];
const [ab , bb, cc] = foo;

console.log(foo);

// =============================================================================
// Soal Nomor 4
let bdays = ['10-7', '05-19', '20-19'];
let element = [] 

bdays.forEach((result) => {
    let replaced = result.replaceAll("-", "/");
    element.push(replaced);
});

console.log(element);

// =============================================================================
// Soal Nomor 5
let value = [1, 2, 3, 4, 5, 6];
let values = value.map(x => x * 2);

console.log(values);

// =============================================================================
// Soal Nomor 6
let arr = [1.5, 2.56, 5.1, 12.33];
let arr1 = [];

arr.forEach((a) => {
   let ar1 = Math.ceil(a) ;
   arr1.push(ar1) ;
});
console.log(arr1) ;