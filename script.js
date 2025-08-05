const review = [ 
    {
        id: 1,
        name: 'john doe',
        img:'#',
        text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
]
[
    { 
           {
        id: 2,
        name: 'jane doe',
        img:'#',
        text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
]

    {
           {
        id: 3,
        name: 'jack doe',
        img:'#',
        text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
];


const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job= document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let currentItem = 0;
window.addEventListener('DOMContentLoaded', function() {
     const item = review[currentItem];
     img.src = item.img;
     author.textContent = item.name;
    job.textContent = item.name;
    info.textContent = item.text;
});

function showPerson(person){
    const item = review[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.name;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length -1;
    }
    showPerson(currentItem);
});



console.log("Hello world");

let chicken = "123";
console.log(chicken);
console.log(typeof chicken);

console.log(10 + "eggs");
console.log((10 + 8 + "eggs");
console.log("eggs"+ 10 +8);

//Both Conditions Need to be true
console.log(7==="7");
console.log(7>)&&(10>8);

//Only one condition must be true
console.log(10>3)||(5>10);

//If the statement is logical or not 
console.log(!5>3);


const hour = new Date().getHours();
let greeting = "";

if (hour<12){
    greeting = "Good morning";
}else if (hour<18){
    greeting = "Good afternoon";
}else{
    greeting = "Good evening";
}

document.getElementById("greeting").innerText = greeting;