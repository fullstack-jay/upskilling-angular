// if, if..else, switch case
type Employee = {
    id: string
    name: string
    salary: number
    position?: string // tanda tanya artinya opsional jadi boleh dimasukan atau tidak di const
}

const john:Employee = { id: "1", name: 'John', salary: 4000000}
console.log(john.salary);

if (john.salary > 5000000) {
    john.position = "Direktur"
} else if (john.salary > 4000000){
    john.position = "Manager"
} else {
    john.position = "Staff"
}

console.log(`Data Karyawan dengan nama ${john.name} mempunyai jabatan sebagai ${john.position}`)

// Switch Case
switch(true) {
    case john.salary > 5000000:
        john.position = "Direktur"
        break
    case john.salary > 4000000:
        john.position = "Manager"
        break
    default:
        john.position = "Staff"
        break
}

// template literal ditandai dengan petik ``
console.log(`Data Karyawan dengan nama ${john.name} mempunyai jabatan sebagai ${john.position} dan memiliki gaji sebesar ${john.salary}`)
// const output = `Data Karyawan dengan nama ${john.name} mempunyai jabatan sebagai ${john.position} dan memiliki gaji sebesar ${john.salary}`
// console.log(output)