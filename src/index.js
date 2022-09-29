import './style.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';


function kep(){
    let url = document.getElementById('url').value;
    document.getElementById('kep').src = url;
    console.log(url);
}


function width(){
    let szelesseg = document.getElementById('szelesseg').value;
    document.getElementById('kep').width = szelesseg;
    
}

function Border()
{
    let border = document.getElementById('border').value;
    document.getElementById('kep').style.border = border + 'px solid black' ;
}

function Color()
{
    let szin = document.getElementById('szin').value;
    document.getElementById('kep').style.borderColor =szin;
}

function darkMode(){
    
    target.classList.toggle('darkmode');
}




function init(){
    console.log('mukodik');
    document.getElementById('url').addEventListener('change', kep);
    document.getElementById('szelesseg').addEventListener('input', width);
    document.getElementById('border').addEventListener('input',Border);
    document.getElementById('szin').addEventListener('input',Color);
    document.getElementById('darkmode').addEventListener('click',darkMode)
}

document.addEventListener('DOMContentLoaded', init)
