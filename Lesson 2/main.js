console.log("------Đây là bài 1------");

var gio1 = ["Grape", 15]
var gio2 = ["Banana", 3]
var gio3 = ["Orange", 7]
var gio4 = ["Pineapple", 2]
var gio5 = ["Apple", 5]

//gộp mảng
var gio_trai_cay = gio1.concat(gio2, gio3, gio4, gio5)
console.log(gio_trai_cay);

//tạo sub-array
for(let i=0; i < (gio_trai_cay.length) / 2; i++){
    var gio6 = gio_trai_cay.slice(2*i,2*i+2)
    console.log(gio6);
}

console.log("\n");
console.log("------Đây là bài 2------");

for (let i = 0; i < (gio_trai_cay.length) / 2; i++) {
    console.log("I have " + gio_trai_cay[2 * i + 1] + " " + gio_trai_cay[2 * i].toLowerCase() + "s.");
}

console.log("\n");

let i=0;
while(i < (gio_trai_cay.length) / 2){
    console.log("I have " + gio_trai_cay[2 * i + 1] + " " + gio_trai_cay[2 * i].toLowerCase() + "s.");
    i++
}

console.log("\n");
i=0
do{
    console.log("I have " + gio_trai_cay[2 * i + 1] + " " + gio_trai_cay[2 * i].toLowerCase() + "s.");
    i++
}while(i<((gio_trai_cay.length) / 2 ))


console.log("\n");
console.log("------Đây là bài 3------");

var myDog = {
    name: "Ngáo",
    legs: 4,
    friends: ["everything!"]
}
myDog.name = "Husky";
myDog.color = "brown";
delete myDog.friends;

console.log(myDog);