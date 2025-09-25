console.log("This is the Home page of the Project Digital Register-->")

let attend = document.getElementById('goAttend')
attend.addEventListener("click", ()=>{
    window.location.href="attendancePage.html"
})

let update = document.getElementById('goUpdate')
update.addEventListener("click", ()=>{
    alert("Sorry, This option is currently under development")
})

let result = document.getElementById('goResult')
result.addEventListener("click", ()=>{
    window.location.href="marksFeed.html"
})