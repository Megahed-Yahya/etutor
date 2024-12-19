const bar=document.querySelector('.bar')
const list=document.querySelector(".hidden-list")
const btnX=document.querySelector(".close")

bar.addEventListener("click" , ()=>{
    list.classList.toggle("clicked")
})

btnX.addEventListener("click" , ()=>{
    list.classList.toggle("clicked")
})

// var popover = new bootstrap.Popover(document.querySelector('.popover-dismiss'), {
//     trigger: 'focus'
//   })

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

var popover = new bootstrap.Popover(document.querySelector('.example-popover'), {
    container: 'body'
  })