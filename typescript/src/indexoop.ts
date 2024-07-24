import { Fighter } from "./oop/fighter";
import Hero from "./oop/hero";
import { Support } from "./oop/support";

// const miya: Hero = new Hero('Miya', 100, 100, 50)
const figterGatotKaca: Fighter = new Fighter('Gatot Kaca', 100, 100, 65, 'Skin kebal attack')
const fighterArgus: Fighter = new Fighter('Argus', 100, 100, 70, 'Skin kebal attack')
const supportRafaela: Support = new Support('Rafaela', 100, 100, 30);

// miya.attack(gatotKaca)
// console.log("Miya attack Gatot Kaca")
// console.log({ miya })
// console.log({ gatotKaca })

// gatotKaca.attack(miya)
// console.log("Gatot Kaca Attack Miya")
// console.log({ miya })
// console.log({ gatotKaca })

// fighterArgus.attack(figterGatotKaca)
// console.log({ figterGatotKaca })

fighterArgus.specialMove(figterGatotKaca)
console.log('Gatot kaca diserang Argus..', {figterGatotKaca});

figterGatotKaca.heal(50);
console.log('GatotKaca mengisi heal sendiri',{figterGatotKaca});

fighterArgus.heal(supportRafaela)
console.log('Argus mengisi heal dari support', {fighterArgus});
