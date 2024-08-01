export interface User {
    // isi dalam interface bisa properti dan method
    // sekilas interface ini mirip dengan type-alias
    // bedanya kalau di java interface cuma bisa untuk method saja

    // properti
    id: number
    username: string
    password: string
    isActive: boolean 

    // method
    userStatus(): void,
}


// Perbedaan antara interface dan type alias
//  - interface dapat membuat properti baru dari interface baru dengan nama yang sama
export interface User {
    address: string
}

//  - type tidak bisa membuat properti baru seperti yang dilakukan interface
// export type OtherUser = { address: string }
       
// Type Alias
export type OtherUser = {
    // properti
    id: number
    username: string
    password: string
    isActive: boolean 

    // method
    userStatus(): void,
}

// Antara interface dan type alias sama-sama bisa membuat properti dan method