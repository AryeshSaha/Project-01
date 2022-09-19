const incre = () => {
    let num = Number(document.getElementById('number').innerHTML)
    document.getElementById('number').innerHTML = num + 1;
} 
const decre = () => {
    let num = Number(document.getElementById('number').innerHTML)
    document.getElementById('number').innerHTML = num - 1;
} 
const neut = () => {
    document.getElementById('number').innerHTML = 0;
} 