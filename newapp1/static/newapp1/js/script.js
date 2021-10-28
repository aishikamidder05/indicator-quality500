const reviewfield = document.querySelector("#reviewfield");
const progressarea = document.querySelector('#progressdiv');
const progresstext = document.querySelector("#progressbar");


reviewfield.addEventListener("keyup", (e) => {

  progressarea.style.display = "none";
  const text = e.target.value;
 // console.log(text);

  const reviewval = text.replace(/\s+/g, ' ').trim();
  const depth = reviewval.length;
  //console.log(reviewval);

  if (reviewval.length > 0) {
    progressarea.style.display = "block";
   if(depth>=801){
    progresstext.innerText='Very High';
    progresstext.classList.remove('verylow', 'low', 'medium', 'high');
    progresstext.classList.add('veryhigh');

   }
   else if(depth>=601 && depth<=800){
    progresstext.innerText='High';
    progresstext.classList.remove('verylow', 'low', 'medium', 'veryhigh');
    progresstext.classList.add('high');

   }
   else if(depth>=401 && depth<=600){
    progresstext.innerText='Medium';
    progresstext.classList.remove('verylow', 'low', 'high', 'veryhigh');
    progresstext.classList.add('medium');

   }
   else if(depth>=201 && depth<=400){
    progresstext.innerText='Low';
    progresstext.classList.remove('verylow', 'medium', 'high', 'veryhigh');
    progresstext.classList.add('low');

   }
   else{
    progresstext.innerText='Very Low';
    progresstext.classList.remove('veryhigh', 'low', 'high', 'medium');
    progresstext.classList.add('verylow');
   }
  }
}); 

