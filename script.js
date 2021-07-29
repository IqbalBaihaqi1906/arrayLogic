// 1. Counting Number in Array
// Buatlah sebuah fungsi yang dapat menjumlahkan kumpulan angka di dalam array.
// Proses :
// input [1,2,3]
// total = 1 + 2 + 3 = 6
// return 6

// fungsi ini hanya dapat menerima argument tipe data array yang ebrisi number, dan mengembalikan tipe data number

// contoh test case
// [1,2,3,4,5,6] -> return 21
// [1,2,3] -> return 6
// [10,10,10,10,10] -> return 50
// [] -> return 0

function countNum(num){
    let total = 0
    for (let i = 0;i < num.length;i++){
    if (typeof num[i] !== "number") return "Isi array harus number semua"
        total += num[i]
    }
    return total;
    }
// console.log(countNum([1,2,3,4,5]));

// 2. Reverse All Array
// Buatlah sebuah fungsi yang dapat membalik seluruh data yang ada di dalam array

// Proses :
// input [123, 456]
// 123 dibalik menjadi 321
// 456 dibalik menjadi 654
// 654 akan berada di index 0 array dan 321 akan berada di index 1 array
// return [654, 321]


// fungsi ini hanya dapat menerima argument tipe data array yang berisi number, dan mengembalikan tipe data array
// contoh test case
// [123, 456] -> return [654, 321]
// [332, 432, 661] -> return [166, 234, 233]
// [456789, 332] -> return [233, 987654]
// [] -> return []

function reverseAll(angka){
    function reverseElement(nomor){
        let str = nomor.toString();
        let temp = "";
        for (let i = str.length - 1; i>= 0;i--){
            temp += str[i]
        }
        return Number(temp)
    }

    let reverseIndex = []
    for (let i = angka.length -1; i >= 0; i--){
        if (typeof angka[i] !== "number") return "Isi array harus number semua"
        reverseIndex.push(reverseElement(angka[i]))
    }
    return reverseIndex;
}

// console.log(reverseAll([123,456,789]));



// 3. Unique Array
// Buatlah sebuah fungsi yang dapat memunuculkan data unique (tidak ada yang duplicate) di dalam array.

// Proses :
// input [1, 4, 5, 6, 1, 1, 2, 2, 3, 4, 5, 6, 7]
// terdapat duplikat pada angka 1, 2, 4, 5, 2
// return [1, 4, 5, 6, 2, 3, 7]

// fungsi ini hanya dapat menerima argument tipe data array yang berisi number, dan mengembalikan tipe data array

// contoh test case
// [1, 1, 1, 1, 1, 1] -> return [1]
// [1, 1, 2, 2, ,3 ,3, 4, 4] -> return [1, 2 , 3, 4]
// [1, 4, 5, 6, 1, 1, 2, 2, 3, 4, 5, 6, 7] -> return [1, 4, 5, 6, 2, 3, 7]
// [] -> return []

function uniqueArr(array){
    let hasil = []

    for(let i = 0; i < array.length; i++){
        if (typeof array[i] !== "number") return "Isi array harus number semua"

        let same = false
        for (let k = 0; k < hasil.length; k++){
            if(hasil[k] === array[i]){
                same = true;
                break
            }
        }
        if (same === false){
            hasil.push(array[i])
        }
    }
    return hasil
}
// console.log(uniqueArr([1,2,3,4,5,6,7,1,3,4,"j",5,5]));
// console.log(uniqueArr([1,2,3,4,5,6,7,1,3,4,5,5]));


// 4. Shopping bubble tea
// Ceritanya david senang jajan bubble tea.
// ini adalah list bubble tea yang diberi beserta harganya

// const listBoba = [
//     ['Xing Fu Tang', 38000], 
//     ['OneZo', 53500],
//     ['KOI The', 36000],
//     ['Chatime', 25000],
//     ['Kokumi', 42000],
//     ['Bubble Station Milk', 13000]
// ]
// David mau membeli bubble tea yang ada di list tesebut secara berurutan, mulai dari Xing Fu Tang, sampai ke Bubble Station Milk. Namun sayangnya, uang jajan David terbatas, jadi mungkin tidak bisa membeli semuanya.
// Buatlah sebuah function yang bisa menceritakan kegiatan David ketika sedang jajan boba dengan uang jajan nominal tertentu.

// function jajanBoba(uangJajan) {
//  //your code here
// }

// Contoh input uangJajan : 100000

// Contoh output :
// David mulai jajan dengan uang jajan 100.000 rupiah.
// Dengan uang 100.000, cukup untuk beli 'Xing Fu Tang',
// setelah beli 'Xing Fu Tang' uangnya berkurang 38.000,
// jadi uangnya sisa 62.000. 
// Dengan uang 62.000, cukup untuk beli 'OneZo',
// setelah beli 'OneZo' uangnya berkurang 53.500,
// jadi uangnya sisa 8.500.
// Dengan uang 8.500, tidak cukup untuk beli 'KOI The'.
// Dengan uang 8.500, tidak cukup untuk beli 'Chatime'.
// Dengan uang 8.500, tidak cukup untuk beli 'Kokumi'.
// Dengan uang 8.500, tidak cukup untuk beli 'Bubble Station Milk'.
// David pulang dengan sisa uang jajan 9.500.

function jajanBoba(uang) {
    const listBoba = [
        ['Xing Fu Tang', 38000], 
        ['OneZo', 53500],
        ['KOI The', 36000],
        ['Chatime', 25000],
        ['Kokumi', 42000],
        ['Bubble Station Milk', 13000]
    ]
    console.log("David memulai jajan dengan uang " + uang + " rupiah");
    for (let i=0; i < listBoba.length; i++){
        if(uang - listBoba[i][1] >= 0){
            console.log("Dengan uang " + uang + ", cukup untuk membeli " + listBoba[i][0]+ " dengan harga "+ listBoba[i][1]);
            uang -= listBoba[i][1]
            console.log("jadi sisa uang david sekarang "+ uang)
        } else {
            console.log("dengan uang " + uang + " tidak bisa membeli " + listBoba[i])
        }
    }
    console.log("David pulang kerumah dengan uang " + uang)
}
// jajanBoba(500000)