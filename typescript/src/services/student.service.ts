import { Student } from "../data/student";

// perbedaan yang export saja dan yang ditambahin default
/**
 * jika menggunakan default dan misal saya panggil export tersebut di file index.ts 
 *  const students = list()
 * 
 */
export default function list(): Student[] {
    return []
}