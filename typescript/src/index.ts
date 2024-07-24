// Variable
// ES6 -> const (tidak bisa diubah / tidak bisa reassign)

const fullName: string = "Rizqi Reza Ardiansyah"
console.log(fullName)

const numbers: number[] = [1,2,3,4,5]
console.log(numbers)

const isMarried: boolean = true
console.log(isMarried);

// Eksplisit
let firstName: string = "Reza"
console.log(firstName);

firstName = "Rizqi"
console.log(firstName);

// Implisit
const address: string = "Tangerang"

// Type Alias 
// seperti di bahasa golang untuk membuat sebuah struct atau interface
type Student = {
    id: string
    name: string
}

const fulan: Student = {
    id: "1",
    name: "Ardiansyah"
}

console.log(fulan);

// Enum
// Bisa digunakan untu membuat sebuah method get, post, update, delete dan statusCode
// Secara default enum ini akan mengisi dimulai dari 0
enum MyEnum {
    ChoiceA,
    ChoiceB,
    ChoiceC = "C"
}

console.log(MyEnum.ChoiceC);




