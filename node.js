

const input = document.getElementById('inputCode'); 
const btn = document.querySelector('button');
const output = document.querySelector('.outputCode'); 

btn.addEventListener('click', code); 

function code(e) {
    e.preventDefault();

    
    const ru = ['А','Б','В','Г','Д','Е','Ё','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ъ','Ы','Ь','Э','Ю','Я'];

    
    let msg = input.value.toUpperCase();
    let total= '';
    let place;
    let new_place;

    for (let i = 0; i < msg.length; i++) {
        let char = msg[i];

        
        if (ru.includes(char)) {
            place = ru.indexOf(char);
            new_place = (place + 3) % ru.length; 
            total += ru[new_place];
        } else {
            total += char; 
        }
    }
    total = total.split('').reverse().join('');
    output.textContent = total;


}



const inputReverse = document.getElementById('inputCodeReverse');
const newBtn = document.querySelector("#newBtn"); 
const outputReverse = document.querySelector('.outputCodeReverse')


newBtn.addEventListener('click', encode)

function encode(e){
    e.preventDefault();

    const ru = ['А','Б','В','Г','Д','Е','Ё','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ъ','Ы','Ь','Э','Ю','Я'];


    let msg = inputReverse.value.toUpperCase();
    let total = 'Результат: ';
    let place;
    let new_place;

    for (let i = 0; i < msg.length; i++) {
        let char = msg[i];

        
        if (ru.includes(char)) {
            place = ru.indexOf(char);
            new_place = (place - 3 + ru.length) % ru.length; 
            total += ru[new_place];
        } else {
            total += char; 
        }
    }

    outputReverse.textContent = total;
}