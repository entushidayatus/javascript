var msg0 = "halo var";
let msg1 = "halo let";
const msg2 = "halo const";

msg2 = 3

if (true) {
    var msg0 = 1;
    let msg1 = 2;
    console.log("testing", msg1)
}

console.log(msg0)
console.log(msg1)
console.log(msg2)
