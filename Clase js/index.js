/*asignar variables 
const logo=document.getElementById('logo');
const title=document.getElementById('title');
const div=document.getElementById('div');
const p=document.getElementById('p');*/
console.log('logo==>',logo)
console.log('title==>',title)
console.log('div==>',div)
console.log('p==>',p)

//definir funciones
const handleClick= () => {
    console.log('me clickeaste');
}
const handleChange= () => {
    console.log('me cambiaste');
}
//magia

logo.addEventListener('click',handleClick)
div.addEventListener('change',handleChange)
