console.log("This is the page where we are taking attendance-->")

let present_students = []
let absent_students = []

// It's Box 1
let div1 = document.getElementById('box1')

let btnpre1 = document.getElementById('btnpre1')
btnpre1.addEventListener("click", () => {
    let n = document.getElementById("stu1").innerText;
    let name = n.slice(5)
    // console.log(name)
    present_students.push(name)
    div1.style.border = "2px solid green"
})
let btnabs1 = document.getElementById('btnabs1')
btnabs1.addEventListener("click", () => {
    div1.style.border = "2px solid red"
    let n = document.getElementById('stu1').innerText;
    let name = n.slice(5)
    // console.log(name)
    absent_students.push(name)
})

// It's Box 2
let div2 = document.getElementById('box2')
let btnpre2 = document.getElementById('btnpre2')
btnpre2.addEventListener("click", () => {
    let n = document.getElementById("stu2").innerText;
    let name = n.slice(5)
    // console.log(name)
    present_students.push(name)
    div2.style.border = "2px solid green"
})
let btnabs2 = document.getElementById('btnabs2')
btnabs2.addEventListener("click", () => {
    div2.style.border = "2px solid red"
    let n = document.getElementById('stu2').innerText;
    let name = n.slice(5)
    // console.log(name)
    absent_students.push(name)
})

// It is box 3
let div3 = document.getElementById('box3')
let btnpre3 = document.getElementById('btnpre3')
btnpre3.addEventListener("click", () => {
    let n = document.getElementById("stu3").innerText;
    let name = n.slice(5)
    present_students.push(name)
    div3.style.border = "2px solid green"
})
let btnabs3 = document.getElementById('btnabs3')
btnabs3.addEventListener("click", () => {
    div3.style.border = "2px solid red"
    let n = document.getElementById('stu3').innerText;
    let name = n.slice(5)
    absent_students.push(name)
})

// It's box 4
let div4 = document.getElementById('box4')
let btnpre4 = document.getElementById('btnpre4')
btnpre4.addEventListener("click", () => {
    let n = document.getElementById("stu4").innerText;
    let name = n.slice(5)
    present_students.push(name)
    div4.style.border = "2px solid green"
    console.log("Present students are--->")
})
let btnabs4 = document.getElementById('btnabs4')
btnabs4.addEventListener("click", () => {
    div4.style.border = "2px solid red"
    let n = document.getElementById('stu4').innerText;
    let name = n.slice(5)
    absent_students.push(name)
})

// It's box 5
let div5 = document.getElementById('box5')
let btnpre5 = document.getElementById('btnpre5')
btnpre5.addEventListener("click", () => {
    let n = document.getElementById("stu5").innerText;
    let name = n.slice(5)
    present_students.push(name)
    div5.style.border = "2px solid green"
})
let btnabs5 = document.getElementById('btnabs5')
btnabs5.addEventListener("click", () => {
    div5.style.border = "2px solid red"
    let n = document.getElementById('stu5').innerText;
    let name = n.slice(5)
    absent_students.push(name)
})

// It's box 6
let div6 = document.getElementById('box6')
let btnpre6 = document.getElementById('btnpre6')
btnpre6.addEventListener("click", () => {
    let n = document.getElementById("stu6").innerText;
    let name = n.slice(5)
    present_students.push(name)
    div6.style.border = "2px solid green"
})
let btnabs6 = document.getElementById('btnabs6')
btnabs6.addEventListener("click", () => {
    div6.style.border = "2px solid red"
    let n = document.getElementById('stu6').innerText;
    let name = n.slice(5)
    absent_students.push(name)
})

// Its box 7
let div7 = document.getElementById('box7')
let btnpre7 = document.getElementById('btnpre7')
btnpre7.addEventListener("click", () => {
    let n = document.getElementById("stu7").innerText;
    let name = n.slice(5)
    present_students.push(name)
    div7.style.border = "2px solid green"
})
let btnabs7 = document.getElementById('btnabs7')
btnabs7.addEventListener("click", () => {
    div7.style.border = "2px solid red"
    let n = document.getElementById('stu7').innerText;
    let name = n.slice(5)
    absent_students.push(name)
})

// Its box 8
let div8 = document.getElementById('box8')
let btnpre8 = document.getElementById('btnpre8')
btnpre8.addEventListener("click", () => {
    let n = document.getElementById("stu8").innerText;
    let name = n.slice(5)
    present_students.push(name)
    div8.style.border = "2px solid green"
})
let btnabs8 = document.getElementById('btnabs8')
btnabs8.addEventListener("click", () => {
    div8.style.border = "2px solid red"
    let n = document.getElementById('stu8').innerText;
    let name = n.slice(5)
    absent_students.push(name)
})

// Its box 9
let div9 = document.getElementById('box9')
let btnpre9 = document.getElementById('btnpre9')
btnpre9.addEventListener("click", () => {
    let n = document.getElementById("stu9").innerText;
    let name = n.slice(5)
    present_students.push(name)
    div9.style.border = "2px solid green"
})
let btnabs9 = document.getElementById('btnabs9')
btnabs9.addEventListener("click", () => {
    div9.style.border = "2px solid red"
    let n = document.getElementById('stu9').innerText;
    let name = n.slice(5)
    absent_students.push(name)
})

// Its box 10
let div10 = document.getElementById('box10')
let btnpre10 = document.getElementById('btnpre10')
btnpre10.addEventListener("click", () => {
    let n = document.getElementById("stu10").innerText;
    let name = n.slice(5)
    present_students.push(name)
    div10.style.border = "2px solid green"
    
})
let btnabs10 = document.getElementById('btnabs10')
btnabs10.addEventListener("click", () => {
    div10.style.border = "2px solid red"
    let n = document.getElementById('stu10').innerText;
    let name = n.slice(5)
    absent_students.push(name)
    })

// Its box 11
let div11 = document.getElementById('box11')
let btnpre11 = document.getElementById('btnpre11')
btnpre11.addEventListener("click", () => {
    let n = document.getElementById("stu11").innerText;
    let name = n.slice(5)
    present_students.push(name)
    div11.style.border = "2px solid green"
    
})
let btnabs11 = document.getElementById('btnabs11')
btnabs11.addEventListener("click", () => {
    div11.style.border = "2px solid red"
    let n = document.getElementById('stu11').innerText;
    let name = n.slice(5)
    absent_students.push(name)
    })

// Its box 12
let div12 = document.getElementById('box12')
let btnpre12 = document.getElementById('btnpre12')
btnpre12.addEventListener("click", () => {
    let n = document.getElementById("stu12").innerText;
    let name = n.slice(5)
    present_students.push(name)
    div12.style.border = "2px solid green"
    
})
let btnabs12 = document.getElementById('btnabs12')
btnabs12.addEventListener("click", () => {
    div12.style.border = "2px solid red"
    let n = document.getElementById('stu12').innerText;
    let name = n.slice(5)
    absent_students.push(name)
    })

// Its box 13
let div13 = document.getElementById('box13')
let btnpre13 = document.getElementById('btnpre13')
btnpre13.addEventListener("click", () => {
    let n = document.getElementById("stu13").innerText;
    let name = n.slice(5)
    present_students.push(name)
    div13.style.border = "2px solid green"
    
})
let btnabs13 = document.getElementById('btnabs13')
btnabs13.addEventListener("click", () => {
    div13.style.border = "2px solid red"
    let n = document.getElementById('stu13').innerText;
    let name = n.slice(5)
    absent_students.push(name)
    })

// Its box 14
let div14 = document.getElementById('box14')
let btnpre14 = document.getElementById('btnpre14')
btnpre14.addEventListener("click", () => {
    let n = document.getElementById("stu14").innerText;
    let name = n.slice(5)
    present_students.push(name)
    div14.style.border = "2px solid green"
    
})
let btnabs14 = document.getElementById('btnabs14')
btnabs14.addEventListener("click", () => {
    div14.style.border = "2px solid red"
    let n = document.getElementById('stu14').innerText;
    let name = n.slice(5)
    absent_students.push(name)
    })

// Its box 15
let div15 = document.getElementById('box15')
let btnpre15 = document.getElementById('btnpre15')
btnpre15.addEventListener("click", () => {
    let n = document.getElementById("stu15").innerText;
    let name = n.slice(5)
    present_students.push(name)
    div15.style.border = "2px solid green"
    
})
let btnabs15 = document.getElementById('btnabs15')
btnabs15.addEventListener("click", () => {
    div15.style.border = "2px solid red"
    let n = document.getElementById('stu15').innerText;
    let name = n.slice(5)
    absent_students.push(name)
    })

// Its box 16
let div16 = document.getElementById('box16')
let btnpre16 = document.getElementById('btnpre16')
btnpre16.addEventListener("click", () => {
    let n = document.getElementById("stu16").innerText;
    let name = n.slice(5)
    present_students.push(name)
    div16.style.border = "2px solid green"
    
})
let btnabs16 = document.getElementById('btnabs16')
btnabs16.addEventListener("click", () => {
    div16.style.border = "2px solid red"
    let n = document.getElementById('stu16').innerText;
    let name = n.slice(5)
    absent_students.push(name)
    })

// Its box 17
let div17 = document.getElementById('box17')
let btnpre17 = document.getElementById('btnpre17')
btnpre17.addEventListener("click", () => {
    let n = document.getElementById("stu17").innerText;
    let name = n.slice(5)
    present_students.push(name)
    div17.style.border = "2px solid green"
    
})
let btnabs17 = document.getElementById('btnabs17')
btnabs17.addEventListener("click", () => {
    div17.style.border = "2px solid red"
    let n = document.getElementById('stu17').innerText;
    let name = n.slice(5)
    absent_students.push(name)
    })

// Its box 18
let div18 = document.getElementById('box18')
let btnpre18 = document.getElementById('btnpre18')
btnpre18.addEventListener("click", () => {
    let n = document.getElementById("stu18").innerText;
    let name = n.slice(5)
    present_students.push(name)
    div18.style.border = "2px solid green"
    
})
let btnabs18 = document.getElementById('btnabs18')
btnabs18.addEventListener("click", () => {
    div18.style.border = "2px solid red"
    let n = document.getElementById('stu18').innerText;
    let name = n.slice(5)
    absent_students.push(name)
    })

// Its box 19
let div19 = document.getElementById('box19')
let btnpre19 = document.getElementById('btnpre19')
btnpre19.addEventListener("click", () => {
    let n = document.getElementById("stu19").innerText;
    let name = n.slice(5)
    present_students.push(name)
    div19.style.border = "2px solid green"
    console.log("Present students are--->")
    for (const elem1 of present_students) {
        console.log(elem1)
    }
    console.log("Absent students are-->")
    for (const element of absent_students) {
        console.log(element)
    }
    let totpre = document.getElementById('totpre')
    totpre.innerText = "Present students: " + (present_students.length)
    let totabs = document.getElementById('totabs')
    totabs.innerText = "Absent students: " + (absent_students.length)
})
let btnabs19 = document.getElementById('btnabs19')
btnabs19.addEventListener("click", () => {
    div19.style.border = "2px solid red"
    let n = document.getElementById('stu19').innerText;
    let name = n.slice(5)
    absent_students.push(name)
    console.log("Present students are--->")
    for (const elem1 of present_students) {
        console.log(elem1)
    }
    console.log("Absent students are-->")
    for (const element of absent_students) {
        console.log(element)
    }
    let totpre = document.getElementById('totpre')
    totpre.innerText = "Present students: " + (present_students.length)
    let totabs = document.getElementById('totabs')
    totabs.innerText = "Absent students: " + (absent_students.length)
    })

    function sendAbsentToWhatsApp(absentArray) {
  // Message banao
  const msg = "Absent Today:\n" + absentArray.map((s, i) => `${i + 1}. ${s}`).join("\n");

  // wa.me link (without number → group select manually)
  const link = "https://wa.me/?text=" + encodeURIComponent(msg);

  // WhatsApp khol do
  window.open(link, "_blank");
}

let button = document.getElementById("proceedbtn")
button.addEventListener("click", ()=>{
    sendAbsentToWhatsApp(absent_students);
})


// It's end of the register and present, absent is now ended..!!


// Finally it's all complete😭😭 khushi ke aansu hai laude😛😜
