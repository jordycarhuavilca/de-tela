import {imgs,imgPalazos} from './imgs.js'
const novedades_imgs = document.querySelector('.novedades-imgs')
const novedadesTittle = document.querySelectorAll('.novedades__title-items')
const nove__btnTittle_1 = document.querySelector('#nove__btnTittle_1')
const nove__btnTittle_2 = document.querySelector('#nove__btnTittle_2')
function escoger (img) {
    novedades_imgs.innerHTML = ''
  const container = img.map((x)=>{
    return '<div class="nove__img1">' +
   '<a href="#">' +
   `<img src="${x.img}" alt="">` +     
    '<div class="conta-novedades__btn-ver">' +
    '<span class="novedades__description d-sm-block d-md-none">algodon</span>'+
    '<a href="#" class="novedades__btn-ver">ver</a>'+ 
    '</div> '
    +
    '</a>' + 
    '</div>'
  })
  container.forEach((x)=>{
      novedades_imgs.innerHTML += x
  })
}

nove__btnTittle_1.addEventListener('click',(e)=>{
    console.log(e.target.id)

    if (e.target.id === 'nove__btnTittle_1') {
        console.log('3')
        escoger(imgs)
    }
} )
nove__btnTittle_2.addEventListener('click',(e)=>{
    if (e.target.id === 'nove__btnTittle_2') {
        escoger(imgPalazos)
    }
})