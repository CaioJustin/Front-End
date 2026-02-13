let  month =document.getElementById("month")
let  day =document.getElementById("day")
let  day_nu =document.getElementById("day_number")
let year =document.getElementById("year")



let date =new Date()

month.innerText=date.toLocaleDateString('en-US',{ month: 'long' })
day.innerText=date.toLocaleDateString('en-US',{ weekday: 'long' })
day_nu.innerText=date.getDate()
year.innerText =date.getFullYear()