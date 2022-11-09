document.querySelector('.search-input').addEventListener('input',search);

  
function search(){
   let searchInput = document.querySelector('.search-input')
   let filter = searchInput.value.toLowerCase();
   let listCard = document.querySelectorAll('.box');

   listCard.forEach((item) =>{
      console.log(item)
      let text = item.textContent;
      if(text.toLowerCase().includes(filter.toLowerCase())){
         item.style.display = '';
      }
      else{
         item.style.display = 'none';
      } 
   })

}
