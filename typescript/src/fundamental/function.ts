// Pembuatan function umum
function greeting(name: string): void {
    console.log(`Hai...${name}`);
}

greeting('John Doe')

function greeting2(name: string, address:string): string {
    return `Hai saya ${name} saat ini tinggal di ${address}`
}

console.log(greeting2('John Doe', 'Jakarta'))

// Arrow Function
// Arrow Function tidak perlu ngurut tidak apa"
const acceptAnything = (anything: string | number |  number[]) => {
    console.log(anything);
}

acceptAnything([1,2,3,4,5])
acceptAnything('Halo Halo')
acceptAnything(2024)