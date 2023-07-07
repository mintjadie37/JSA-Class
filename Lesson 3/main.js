console.log("------Đây là bài 1------");

let k = prompt("Bài 1: Bạn muốn hình tam giác cân này có bao nhiêu dòng?")
for (let i = 1; i <= k; i++) {
    let a = 1 + 2 * (i - 1);
    let b = "";
    let c = "";
    for (let j = 1; j <= a; j++) {
        b = b + 'i'
    }
    let x = (2*k - 1 - a) / 2;
    for (let m = 1; m <= x; m++) {
        c = c + " ";
    }
    console.log(c + b + c);
}

console.log("\n");
console.log("------Đây là bài 2------");

let myArr = [9, 7, 9, 0, 7, 8, 387, 123, 456];

let d = []
for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] % 2 == 0) {
        d.push(myArr[i])
    }
}
console.log("Những số chẵn hoặc bằng 0 trong dãy số đã cho là:");
for (number of d) {
    console.log(number)
}

console.log("\n");
console.log("------Đây là bài 3------");

let ans1 = prompt("Bạn có đói bụng không? (Chỉ trả lời Yes/No)");
if (ans1.toLowerCase() === "no"){
    var ans2 = prompt("Bạn vừa ăn cơm rồi à?");
    if(ans2.toLowerCase()==="yes"){
        console.log("Ồ vậy thôi bye bạn.");
    } else{
        if (ans2.toLowerCase()==="no"){
            var ans3 = prompt("Thế bạn ăn cơm chung với mình không?");
        }else{
            console.log("Nói gì hổng hiểu á ba");
        }
    }
}else{
    if (ans1.toLowerCase()==="yes"){
        var ans5 = prompt("Bạn ăn cơm chưa?");
        if(ans5.toLowerCase()==="no"){
            var ans3 = prompt("Thế bạn ăn cơm chung với mình không?");
        }else{
            if(ans5.toLowerCase()==="yes"){
                var ans6 = prompt("Ủa bạn ăn lâu chưa?")
                if(ans6.toLowerCase()==="no"){
                    console.log("Trời ơi ăn uống điều độ nha, đi khám dạ dày đi.");
                }else{
                    if(ans6.toLowerCase()==="yes"){
                        var ans3 = prompt("Thế bạn ăn cơm chung với mình không?");
                    }else{
                        console.log("Nói gì hổng hiểu á ba");
                    }
                }
            }else{
                console.log("Nói gì hổng hiểu á ba");
            }
        }
    }else{
        console.log("Nói gì hổng hiểu á ba");
    }
}

if (typeof ans3 !== 'undefined'){
    if(ans3.toLowerCase()==="no"){
        console.log("Phũ quá huhu, vậy thôi bái bai.");
    }else{
        if(ans3.toLowerCase()==="yes"){
            var ans4 = prompt("Bạn có thích sườn xào chua ngọt không?");
            if (ans4.toLowerCase()==="yes"){
                console.log("Ok vậy ăn chung với mình nha =))");
            }else{
                if(ans4.toLowerCase()==="no"){
                    console.log("Mình chỉ có món đó thôi, huhu. Bye bạn.");
                }else{
                    console.log("Nói gì hổng hiểu á ba");
                }
            }
        }else{
            console.log("Nói gì hổng hiểu á ba");
        }
    }
}

//cái bên dưới là fail rồi nhưng mà em giữ để mốt xem lại =)))

// switch (ans1.toLowerCase()) {
//     case 'no':
//         let ans2 = prompt("Bạn vừa ăn cơm rồi à?");
//         switch (ans2.toLowerCase()) {
//             case 'yes':
//                 console.log("Ồ vậy thôi bye bạn.");
//                 break;
//             case 'no':
//                 var ans3 = prompt("Thế bạn ăn cơm chung với mình không?");
//                 break;
//         }
//         break;
//     case 'yes':
//         let ans5 = prompt("Bạn ăn cơm chưa?");

//         switch (ans5.toLowerCase()) {
//             case 'yes':
//                 let ans6 = prompt("Ủa bạn ăn lâu chưa?")
//                 switch (ans6.toLowerCase()) {
//                     case 'no':
//                         console.log("Trời ơi ăn uống điều độ nha, đi khám dạ dày đi.");
//                         break;
//                     case 'yes':
//                         var ans3 = prompt("Thế bạn ăn cơm chung với mình không?");
//                         break;
//                 }
//                 break;
//             case 'no':
//                 var ans3 = prompt("Thế bạn ăn cơm chung với mình không?");
//                 break;
//         }
//         break;
//     default:
//         console.log("Mình là người Việt nhưng mà nhập Yes/No giùm nha tại lỡ lập trình vậy rồi");
//         break;
// }

// console.log(ans3);
// if (ans3 != ""){
// switch (ans3.toLowerCase()) {
//         case 'no':
//             console.log("Phũ quá huhu, vậy thôi bái bai.");
//         case 'yes':
//             let ans4 = prompt("Bạn có thích sườn xào chua ngọt không?");
//         default:
//             console.log("Mình là người Việt nhưng mà nhập Yes/No giùm nha tại lỡ lập trình vậy rồi");
//             break;
//     }
// }