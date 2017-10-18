console.log('OK');

let cats = document.querySelectorAll(".catImage");

console.log(cats);


cats.forEach( function(cat,val,catsArr) {
  cat.addEventListener("click",()=>{
     cat.classList.add('point');
     cat.classList.remove('catImage');
     cat.classList.remove('col-6');
     document.querySelector('h1').innerHTML = 'Ты вот такой котик';
     document.querySelectorAll(".catImage").forEach(cat =>{
       cat.style.display = 'none';
     })
  });
});
