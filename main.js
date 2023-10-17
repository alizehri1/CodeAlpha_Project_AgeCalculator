let form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    let date = e.target.date.value
    let month = e.target.month.value
    let year = e.target.year.value

if(!date || !month || !year){
    let alert=document.querySelector('.alert')
    alert.classList.remove('hidden')
}
else{
    const d = new Date();
    let currentYear = d.getFullYear();

    
      let currentMonth = d.getMonth()+1;

    let age=""
    if(currentMonth>month){
       age = currentYear - year
    }
   else{
    age = (currentYear - year)-1
   }

    let span = document.querySelector('.bolder')
    span.innerHTML = age

    let result=document.querySelector('.result')
    result.classList.remove('hide')
}
   

})