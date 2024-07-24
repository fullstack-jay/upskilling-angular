/**
 * Union adalah sebuah tipe yang memungkinkan dapat input tipe data yang berbeda-beda sesuai yang didefinisikan
 * Pembuatan: union dibuat ditandai dengan garis lurus vertikal `|`
 */

let year: number | string // walaupun ini tidak boleh seharusnya konsisten, tapi bisa jika menggunakan union
year = 2024
year = "2024"
console.log('Year menggunakan number:', year)
console.log('Year menggunakan string:', year)