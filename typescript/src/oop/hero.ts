export default abstract class Hero {
    private name: string 
    private hp: number
    private mana: number
    private baseDamage: number

    // constructor
    // method
    constructor(
        name: string,
        hp: number,
        mana: number,
        baseDamage: number) {
            // untuk memanggil atribute yang sudah didefinisikan di dalam class
            // menggunakan keyword this
            this.name = name
            this.hp = hp
            this.mana = mana
            this.baseDamage = baseDamage
        }

    receiveDamage(hero: Hero): void {
        this.hp -= hero.getBaseDamage()
    }

    // Method (behavior)
    attack(hero: Hero): void {
        hero.receiveDamage(this)
    }

    heal(hero: Hero): void {
        hero.hp += this.mana/2
        this.mana -= this.mana/2
    }

    // kita berikan sebuah method untuk diimplementasikan untuk subclass
    abstract specialMove(hero: Hero): void

    // getter and setter
    getName(): string {
        return this.name
    }

    getHp(): number{
        return this.hp
    }

    getMana(): number{
        return this.mana
    }

    getBaseDamage(): number{
        return this.baseDamage
    }

    setHp(amount: number): void {
        this.hp += amount;
    }

    setHeal(amount: number): void {
        this.hp += amount/2;
    }

    setMana(amount: number): void {
        this.mana += amount/2;
    }
}