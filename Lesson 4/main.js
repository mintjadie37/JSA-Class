//BÀI 1

localStorage.clear()
localStorage.setItem("user1", "Phước")
localStorage.setItem("user2", "Thanh")
localStorage.setItem("user3", "Ngọc")

//Tìm key có value "Phước" và đổi value của key
Object.keys(localStorage).forEach(function (key) {
    let a = localStorage.getItem(key);
    if (a === "Phước") {
        localStorage.setItem(key, "Hà")
    };
});

//Reset
localStorage.clear()
localStorage.setItem("user1", "Phước")
localStorage.setItem("user2", "Thanh")
localStorage.setItem("user3", "Ngọc")

//Tìm key có value "Phước" và xóa key
Object.keys(localStorage).forEach(function (key) {
    let a = localStorage.getItem(key);
    if (a === "Phước") {
        localStorage.removeItem(key)
    };
});

//Xóa toàn bộ dữ liệu của LocalStorage
localStorage.clear()

//BÀI 2

let lyrics = ["Em", "lười", "tìm", "lời", "bài", "hát", "nên", "em", "viết", "tạm", "mấy","chữ","này,","cảm","ơn","vì","thầy","đã","bỏ","công","sức","chờ", "đống", "này","chạy", "hết","chứ","em","là","em","thấy", "tốn","thời", "gian", "quá", "nên", "em", "không","chờ."]

let ele = document.getElementById("lyrics")
let flag = true;
let i = 0;
let intervalId;
// lyrics.forEach(function(item, index){
//     var myTimeout = setTimeout(function(){
//       ele.innerHTML += item + " ";
//     }, index * 1500);    
//   });

function printlyrics() {
    ele.innerHTML += lyrics[i] + " ";
    i++;
    if (i >= lyrics.length) {
        clearInterval(intervalId);
    }
}
let toggle_btn = document.getElementById("toggle-btn")
toggle_btn.addEventListener("click", function () {
    if (flag) { intervalId = setInterval(printlyrics, 1500)
    toggle_btn.innerHTML = "Ấn để dừng" }
    else { clearInterval(intervalId)
    toggle_btn.innerHTML = "Ấn để bắt đầu chạy" }
    flag = !flag
})


