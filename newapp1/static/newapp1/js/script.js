const reviewfield = document.querySelector("#reviewfield");
const progressarea = document.querySelector('#progressdiv');
const progresstext = document.querySelector("#progressbar");

const marker = document.querySelector('#marker');
const markertext = document.querySelector("#marker-text");

reviewfield.addEventListener("keyup", (e) => {

  progressarea.style.display = "none";
  const text = e.target.value;
 // console.log(text);

  const reviewval = text.replace(/\s+/g, ' ').trim();
  const depth = reviewval.length;
  //console.log(reviewval);

  var widthNum = (depth*1.25)/10;
  var marginNum = widthNum-10;

  if (reviewval.length > 0) {
   progressarea.style.display = "block";
   var width = widthNum + '%';
   var margin = marginNum + '%';

   if(depth>=801){
    markertext.innerText='Very High';
    marker.style["margin-left"] = '90%';
    progresstext.style["background-color"] = "#114e06";
    progresstext.style["width"] = '100%';
   }
   else if(depth>=601 && depth<=800){    
    markertext.innerText='High';
    marker.style["margin-left"] = margin;
    progresstext.style["background-color"] = "#79ee0b";
    progresstext.style["width"] = width;
   }
   else if(depth>=401 && depth<=600){
    markertext.innerText='Medium';
    marker.style["margin-left"] = margin;
    progresstext.style["background-color"] = "#e5e90e";
    progresstext.style["width"] = width;
   }
   else if(depth>=201 && depth<=400){
    markertext.innerText='Low';
    marker.style["margin-left"] = margin;
    progresstext.style["background-color"] = "#d48609";
    progresstext.style["width"] = width;
   }
   else{
    markertext.innerText='Very Low';
    marker.style["margin-left"] = margin;
    progresstext.style["background-color"] = "#c01212" ;
    progresstext.style["width"] = width;
   }
  }
}); 

