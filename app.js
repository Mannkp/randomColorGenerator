const btn = document.querySelector('#btn');
const h1 = document.querySelector('#h1');
btn.addEventListener("click" , () => {
    let newColor = makeRandomColor(); 
    h1.innerText = newColor;
    document.body.style.backgroundColor =  newColor;
})

const makeRandomColor = () => {
    let randomNumber1 = Math.floor((Math.random()*256) - 1);
    let randomNumber2 = Math.floor((Math.random()*256) - 1);
    let randomNumber3 = Math.floor((Math.random()*256) - 1);
    return `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;
}