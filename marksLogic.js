// this is logic for marks feeding
name_arr = [];
marks_arr = [];

let n1 = document.getElementById("stu1Name");
let name1 = n1.innerText;
name_arr.push(name1);

let n4 = document.getElementById("stu4Name");
let name4 = n4.innerText;
name_arr.push(name4);

let n6 = document.getElementById("stu6Name");
let name6 = n6.innerText;
name_arr.push(name6);


let n8 = document.getElementById("stu8Name");
let name8 = n8.innerText;
name_arr.push(name8);

let n9 = document.getElementById("stu9Name");
let name9 = n9.innerText;
name_arr.push(name9);

let n11 = document.getElementById("stu11Name");
let name11 = n11.innerText;
name_arr.push(name11);


let n13 = document.getElementById("stu13Name");
let name13 = n13.innerText;
name_arr.push(name13);

let n14 = document.getElementById("stu14Name");
let name14 = n14.innerText;
name_arr.push(name14);

let n15 = document.getElementById("stu15Name");
let name15 = n15.innerText;
name_arr.push(name15);

let n16 = document.getElementById("stu16Name");
let name16 = n16.innerText;
name_arr.push(name16);

let n17 = document.getElementById("stu17Name");
let name17 = n17.innerText;
name_arr.push(name17);

let n18 = document.getElementById("stu18Name");
let name18 = n18.innerText;
name_arr.push(name18);

let n19 = document.getElementById("stu19Name");
let name19 = n19.innerText;
name_arr.push(name19);

let n20 = document.getElementById("stu20Name");
let name20 = n20.innerText;
name_arr.push(name20);


let n22 = document.getElementById("stu22Name");
let name22 = n22.innerText;
name_arr.push(name22);

for (const e of name_arr) {
    console.log(e)
}


let finalBtn = document.getElementById("proceedBtn");
finalBtn.addEventListener("click", ()=>{
let m1 = document.getElementById("marksStu1");
let marks1 = m1.value
marks_arr.push(marks1);

let m4 = document.getElementById("marksStu4");
let marks4 = m4.value
marks_arr.push(marks4);


let m6 = document.getElementById("marksStu6");
let marks6 = m6.value
marks_arr.push(marks6);

let m8 = document.getElementById("marksStu8");
let marks8 = m8.value
marks_arr.push(marks8);

let m9 = document.getElementById("marksStu9");
let marks9 = m9.value
marks_arr.push(marks9);

let m11 = document.getElementById("marksStu11");
let marks11 = m11.value
marks_arr.push(marks11);

let m13 = document.getElementById("marksStu13");
let marks13 = m13.value
marks_arr.push(marks13);

let m14 = document.getElementById("marksStu14");
let marks14 = m14.value
marks_arr.push(marks14);

let m15 = document.getElementById("marksStu15");
let marks15 = m15.value
marks_arr.push(marks15);

let m16 = document.getElementById("marksStu16");
let marks16 = m16.value
marks_arr.push(marks16);

let m17 = document.getElementById("marksStu17");
let marks17 = m17.value
marks_arr.push(marks17);

let m18 = document.getElementById("marksStu18");
let marks18 = m18.value
marks_arr.push(marks18);

let m19 = document.getElementById("marksStu19");
let marks19 = m19.value
marks_arr.push(marks19);

let m20 = document.getElementById("marksStu20");
let marks20 = m20.value
marks_arr.push(marks20);

let m22 = document.getElementById("marksStu22");
let marks22 = m22.value
marks_arr.push(marks22);

for (const e of marks_arr) {
    console.log(e)
}

// Example arrays
// let name_arr = ["Alice", "Bob", "Charlie"];
// let marks_arr = [85, 90, 78];

let message = name_arr.map((name, i) => `${name}: ${marks_arr[i]}`).join('\n');
let encodedMessage = encodeURIComponent(message);
let waLink = `https://wa.me/?text=${encodedMessage}`;

// To open the link in a new tab
window.open(waLink, '_blank');
// console.log(marks1)
})