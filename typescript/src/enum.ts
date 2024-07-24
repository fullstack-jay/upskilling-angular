// Enum
// Bisa digunakan untu membuat sebuah method get, post, update, delete dan statusCode
// Secara default enum ini akan mengisi dimulai dari 0
enum MyEnum {
    ChoiceA,
    ChoiceB,
    ChoiceC = "C"
}

console.log(MyEnum.ChoiceC);
