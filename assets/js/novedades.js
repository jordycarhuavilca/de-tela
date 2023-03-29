const titulosNovedades = document.querySelector(".novedades__titulos")
const titulos = ['joggers','palazos']
function setTitulos(value){
    return  value.map((titulo)=>`<span class="novedades__title-items mt-2">${titulo}</span>`)
}
const jf =Array.from(setTitulos(titulos))
jf.forEach((elemt) => {
    titulosNovedades.innerHTML += elemt
})
