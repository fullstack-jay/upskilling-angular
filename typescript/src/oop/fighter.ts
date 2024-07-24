import Hero from "./hero";

// Inheritance (Pewarisan)
// Dimana class Fighter mewariskan sifat dari Class Hero
export class Fighter extends Hero {
   // Polymorphism (memiliki banyak bentuk)
   // Overriding 
   private skin: string;

   constructor(name: string, hp:number, mana:number, baseDamage:number, skin:string) {
      super(name, hp, mana, baseDamage)
      this.skin = skin
   }

   specialMove(hero: Hero): void {
    console.log(`${this.getName()} uses Sword Slash!`)
    hero.receiveDamage(this)
   }

   // overloading
   heal(amount: number): void; 
   heal(hero: Hero): void;
   heal(param: any): void {
      if (typeof param === 'number') {
         this.setHp(param)
      } else if (param instanceof Hero) {
         this.setHp(this.getMana())
         this.setMana(this.getMana())
      }
   }
   
}