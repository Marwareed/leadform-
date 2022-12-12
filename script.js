const slidePage = document.querySelector(".slide-page");

const prevBtnSec = document.querySelector(".prev-1");

const prevBtnThird = document.querySelector(".prev-2");

const prevBtnFourth = document.querySelector(".prev-3");
const prevBtnfifth = document.querySelector(".prev-4");
const prevBtnsixth = document.querySelector(".prev-5");
const prevBtnseven = document.querySelector(".prev-6");

const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let fullname=document.getElementById("fullname");
let email=document.getElementById("email");
var changename;
var changeEmail;
//validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



let current = 1;



function step(){
  
  slidePage.style.marginLeft = "-25%";
  bullet[current - 1].classList.add("active");
  bullet[current ].classList.add("partial");
  bullet[current ].classList.add("green");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
};


 function step2(){
 
  slidePage.style.marginLeft = "-50%";
  bullet[current ].classList.add("partial");
  bullet[current ].classList.add("green");  
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
};

function step3(){
  
  slidePage.style.marginLeft = "-75%";
  bullet[current ].classList.add("partial");
  bullet[current ].classList.add("green");
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
};
function step4(){
  
  slidePage.style.marginLeft = "-103%";
  bullet[current ].classList.add("partial");
  bullet[current ].classList.add("green");
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
};
function step5(){
  
  slidePage.style.marginLeft = "-143%";
  bullet[current ].classList.add("partial");
  bullet[current ].classList.add("green");
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
};
fullname.addEventListener('input',function(){
  changename=fullname.value;
 })
function step6(){
 if(changename==null || changename==''){

  alert('Please Input a value')
}
else {  
  slidePage.style.marginLeft = "-171%";
  bullet[current ].classList.add("partial");
  bullet[current ].classList.add("green");
  bullet[current - 1].classList.add("active");  
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  return false;
  
};
};
email.addEventListener('input',function(){
  changeEmail=email.value;
  
})
function step7(){
  if(changeEmail==null || changeEmail=='' ){

    alert('Please Input a value') 
  }
 
  else  {   
  slidePage.style.marginLeft = "-200%";
  bullet[current ].classList.add("partial");
  bullet[current ].classList.add("green");
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
}; }
prevBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFourth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnfifth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnsixth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-103%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnseven.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-143%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});

/*submitBtn.addEventListener("click", function(){
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  setTimeout(function(){
    alert("Your Form Successfully Signed up");
    location.reload();
  },800);
})*/