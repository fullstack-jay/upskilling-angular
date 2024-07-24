// perbedaan yang menggunakan export saja dan yang ditambahin default
/**
 * jika hanya menggunakan export saja dan misal saya panggil export tersebut di file index.ts 
 * import { johnDoe } from "./data/student"
 * 
 * jika ada kata kunci default maka tidak ada kurung kurawal saat pemanggilan file
 * import list from "./services/student.service";
 * 
 * Kapan digunakan export dan export default
 *  - export default digunakan pada saat hanya ada 1 function yang dipakai di dalam 1 buah file, jika lebih dari 1 maka menggunakan export saja
 */

// Modules: ES6
import { johnDoe } from "./data/student";
import list from "./services/student.service";

console.log({ johnDoe });

const students = list()







