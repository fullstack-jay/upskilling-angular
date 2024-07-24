/**
 * Looping Sederhana
 * 1. For Loop => iterasi sederhana
 * 2. While Loop => iterasi sederhana
 * 3. Do..While Loop => iterasi sederhana
 * 4. For..of Loop => iterasi dalam sebuah array
 * 5. For..in Loop => iterasi dalam sebuah object
 * 
 * Looping Modern
 * 1. forEach => iterasi tiap elemen dan tidak mengembalikan suatu nilai
 * 2. map => iterasi yang membuat sebuah array baru dari tiap elemen iterasi
 * 3. filter => iterasi yang membuat sebuah array yang memenuhi suatu kondisi
 * 4. reduce => iterasi untuk memberikan hasil kalkulasi (add, sub)
 * 5. some =>
 * 6. every =>
 * 7. find =>
 * 8. findIndex =>
 * 
 * ketika ingin mencari suatu total gaji karyawan dalam suatu object atau array object bisa menggunakan reduce tidak perlu kondisi 1 per 1 misalnya menggunakan for loop
 */

/**
 * Object
 * { key: value }
 */

const nums: number[] = [1, 2, 3, 4, 5]
// for
for (let index=0; index < nums.length; index++) {
    console.log(nums[index]);
}

let sumFor = 0;
for (let index=0; index < nums.length; index++) {
    sumFor += nums[index]
}
console.log(`sumFor: ${sumFor}`)

// while
let sumWhile = 0
let i = 0
while (i < nums.length) {
    sumWhile += nums[i]
    i++
}
console.log(`sumWhile: ${sumWhile}`)

// do.. while
let sumDoWhile = 0
let j = 0
do {
    sumDoWhile += nums[j]
    j++
} while(j < nums.length)
console.log(`sumDoWhile: ${sumDoWhile}`)

// for..in
let sumForIn = 0;
for (const  num of nums) {
    sumForIn += num; 
}
console.log(`sumForIn: ${sumForIn}`)

// forEach
let sumForEach = 0;
nums.forEach(num => sumForEach += num);
console.log(`sumForEach: ${sumForEach}`)


// map
/**
 let sumMap = 0;
nums.map(num => {
    sumMap += num;
    return num;
})
console.log(`sumMap: ${sumMap}`)* 
 * 
 */

let sumMap = 0
const numbersFromMap = nums.map(num => {
    sumMap += num;
    if (num % 2 === 0) {
        return num;
    }
    return null
}).filter(num => num !== null); // filter bisa digabungkan dengan map dan filter hanya bisa digunakan untuk array
console.log('numbersFromMap:', numbersFromMap)

// reduce
const sumReduce = nums.reduce((prev, current) => prev + current, 0)
console.log(`sumReduce: ${sumReduce}`);
// jika ingin mencari total bisa menggunakan reduce