const monthIndex = new Date().getMonth();

const monthEl = document.querySelector(".date h1");

const dateEl = document.querySelector(".date p");

const daysEl = document.querySelector(".days");

const lastDay = new Date(new Date().getFullYear(), monthIndex + 1, 0).getDate();

let firstDay = (new Date(new Date().getFullYear(), monthIndex, 1).getDay());

if(firstDay == 0){
    firstDay = 6;
}else{
    firstDay -= 1;
}
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "september",
    "October",
    "November",
    "December"
]

monthEl.innerText = months[monthIndex];

dateEl.innerText = new Date().toDateString();

let days = "";

for (let i = firstDay; i > 0; i--){
    days += `<div class="empty"></div>`;
}

for (let i = 1; i <= lastDay; i++){
    if(i == new Date().getDate()){
        days += `<div class="today">${i}</div>`;
    }else{
        days += `<div>${i}</div>`;
    }
    
}

daysEl.innerHTML = days;

