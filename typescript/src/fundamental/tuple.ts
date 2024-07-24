/**
 * Tuple (array), tetapi dia bisa menerima tipe data yang berbeda, 
 * tetapi dengan kondisi jumlah dan tipe elemen yang tetap, tetap misalnya array nya tipe dan jumlahnya tidak ada perubahan
 * seperti tipe number, string, boolean dst dan tidak ada perubahan, urutannya juga harus tetap
 * 
 */

let book: [string, number, boolean]
book = ["Kiat sukses menjadi programmer Typescript", 1235, true]
console.log(book);

// tidak bisa mengubah urutan tipe datanya
// book = [1235, true, "Kiat sukses menjadi programmer Typescript"]

// Tidak bisa menambah element karena kita sudah menetapkan 3 tipe data yaitu string, number, boolean dan jumlanya juga harus 3
// book = ["Kiat sukses menjadi programmer Typescript", 1236, true, 2020]
