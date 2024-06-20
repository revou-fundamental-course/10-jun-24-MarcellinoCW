/ suhu1 / 

function suhu1(nilai) {

    if (nilai === 10 ) {

        var perintah1 = 1;
        globalThis.global_perintah1 = perintah1;
        
    }


    if (nilai === 20 ) {

        var perintah1 = 2;
        globalThis.global_perintah1 = perintah1;
        
    }

    if (nilai === 30 ) {

        var perintah1 = 3;
        globalThis.global_perintah1 = perintah1;
        
    }

    if (nilai === 40 ) {

        var perintah1 = 4;
        globalThis.global_perintah1 = perintah1;
        
    }
    
}




/suhu2/ 

function suhu2(nilai) {

    if (nilai === 10 ) {

        var perintah2 = 1;
        globalThis.global_perintah2 = perintah2;
        
    }


    if (nilai === 20 ) {

        var perintah2 = 2;
        globalThis.global_perintah2 = perintah2;
        
    }

    if (nilai === 30 ) {

        var perintah2 = 3;
        globalThis.global_perintah2 = perintah2;
        
    }

    if (nilai === 40 ) {

        var perintah2 = 4;
        globalThis.global_perintah2 = perintah2;
        
    }
    
}


document.getElementById('nilai_suhu1').addEventListener('input', function () {

    this.value = this.value.replace(/[^0-9]/g, '');
    
});

/Efek Perubahan Warna pada tombol/ 
let Celcius1 = document.getElementById('Celcius1')
let Kelvin1 = document.getElementById('Kelvin1')
let Reamur1 = document.getElementById('Reamur1')
let Fahrenheit1 = document.getElementById('Fahrenheit1')
let Celcius2 = document.getElementById('Celcius2')
let Kelvin2 = document.getElementById('Kelvin2')
let Reamur2 = document.getElementById('Reamur2')
let Fahrenheit2 = document.getElementById('Fahrenheit2')

Celcius1.addEventListener('click', function () {
    Celcius1.style.color = 'white';
    Celcius1.style.backgroundColor = 'black';
    Kelvin1.style.color = 'black'
    Kelvin1.style.backgroundColor = 'white';
    Reamur1.style.color = 'black'
    Reamur1.style.backgroundColor = 'white';
    Fahrenheit1.style.color = 'black'
    Fahrenheit1.style.backgroundColor = 'white';

}); 

Kelvin1.addEventListener('click', function () {
    Celcius1.style.color = 'black';
    Celcius1.style.backgroundColor = 'white';
    Kelvin1.style.color = 'white'
    Kelvin1.style.backgroundColor = 'black';
    Reamur1.style.color = 'black'
    Reamur1.style.backgroundColor = 'white';
    Fahrenheit1.style.color = 'black'
    Fahrenheit1.style.backgroundColor = 'white';    
}); 

Reamur1.addEventListener('click', function () {
    Celcius1.style.color = 'black';
    Celcius1.style.backgroundColor = 'white';
    Kelvin1.style.color = 'black'
    Kelvin1.style.backgroundColor = 'white';
    Reamur1.style.color = 'white'
    Reamur1.style.backgroundColor = 'black';
    Fahrenheit1.style.color = 'black'
    Fahrenheit1.style.backgroundColor = 'white';    
}); 

Fahrenheit1.addEventListener('click', function () {
    Celcius1.style.color = 'black';
    Celcius1.style.backgroundColor = 'white';
    Kelvin1.style.color = 'black'
    Kelvin1.style.backgroundColor = 'white';
    Reamur1.style.color = 'black'
    Reamur1.style.backgroundColor = 'white';
    Fahrenheit1.style.color = 'white'
    Fahrenheit1.style.backgroundColor = 'black';    
});

Celcius2.addEventListener('click', function () {
    Celcius2.style.color = 'white';
    Celcius2.style.backgroundColor = 'black';
    Kelvin2.style.color = 'black'
    Kelvin2.style.backgroundColor = 'white';
    Reamur2.style.color = 'black'
    Reamur2.style.backgroundColor = 'white';
    Fahrenheit2.style.color = 'black'
    Fahrenheit2.style.backgroundColor = 'white';

}); 

Kelvin2.addEventListener('click', function () {
    Celcius2.style.color = 'black';
    Celcius2.style.backgroundColor = 'white';
    Kelvin2.style.color = 'white'
    Kelvin2.style.backgroundColor = 'black';
    Reamur2.style.color = 'black'
    Reamur2.style.backgroundColor = 'white';
    Fahrenheit2.style.color = 'black'
    Fahrenheit2.style.backgroundColor = 'white';    
}); 

Reamur2.addEventListener('click', function () {
    Celcius2.style.color = 'black';
    Celcius2.style.backgroundColor = 'white';
    Kelvin2.style.color = 'black'
    Kelvin2.style.backgroundColor = 'white';
    Reamur2.style.color = 'white'
    Reamur2.style.backgroundColor = 'black';
    Fahrenheit2.style.color = 'black'
    Fahrenheit2.style.backgroundColor = 'white';    
}); 

Fahrenheit2.addEventListener('click', function () {
    Celcius2.style.color = 'black';
    Celcius2.style.backgroundColor = 'white';
    Kelvin2.style.color = 'black'
    Kelvin2.style.backgroundColor = 'white';
    Reamur2.style.color = 'black'
    Reamur2.style.backgroundColor = 'white';
    Fahrenheit2.style.color = 'white'
    Fahrenheit2.style.backgroundColor = 'black';    
});





function konversi() {
    

let input_suhu = parseInt ( document.getElementById('nilai_suhu1').value);
let hasil = 0;
let cara = 0; 

/All ke Celcius/ 
if (global_perintah1 === 1 && global_perintah2 === 1) {

    hasil = input_suhu; 
    document.getElementById('nilai_suhu2').innerHTML = hasil
    document.getElementById('cara').innerHTML = 'Celcius tetaplah Celcius';
};

if (global_perintah1 === 2 && global_perintah2 === 1) {

    hasil = input_suhu - 273;
    cara = 'Kelvin - 273';
    document.getElementById('nilai_suhu2').innerHTML = hasil
    document.getElementById('cara').innerHTML = cara;
};

if (global_perintah1 === 3 && global_perintah2 === 1) {

    hasil = input_suhu * 5/4 ;
    cara = 'Reamur * 5/4';
    document.getElementById('nilai_suhu2').innerHTML = hasil
    document.getElementById('cara').innerHTML = cara;
};
    

if (global_perintah1 === 4 && global_perintah2 === 1) {

    hasil = (input_suhu - 32 ) * 5/9 ;
    cara = '(Fahrenheit - 32 ) * 5/9';
    document.getElementById('nilai_suhu2').innerHTML = hasil
    document.getElementById('cara').innerHTML = cara;
};
    

/All ke Kelvin/ 
if (global_perintah1 === 1 && global_perintah2 === 2) {
    
    hasil = input_suhu + 273 ;
    cara = 'Celcius + 273';
    document.getElementById('nilai_suhu2').innerHTML = hasil
    document.getElementById('cara').innerHTML = cara;
};

if (global_perintah1 === 2 && global_perintah2 === 2) {

    hasil = input_suhu;
    cara = 'Kelvin tetaplah Kelvin';
    document.getElementById('nilai_suhu2').innerHTML = hasil
    document.getElementById('cara').innerHTML = cara;
    
};

if (global_perintah1 === 3 && global_perintah2 === 2) {
    
    hasil = (input_suhu * 5/4 )+ 273 ;
    cara = '(Reamur * 5/4 )+ 273';
    document.getElementById('nilai_suhu2').innerHTML = hasil
    document.getElementById('cara').innerHTML = cara;
};

if (global_perintah1 === 4 && global_perintah2 === 2) {
   
    hasil = (input_suhu - 32 ) * (5/9) + 273 ;
    cara = '(Fahrenheit - 32 ) * (5/9) + 273';
    document.getElementById('nilai_suhu2').innerHTML = hasil
    document.getElementById('cara').innerHTML = cara;
};
    
/All ke Reamur/ 
if (global_perintah1 === 1 && global_perintah2 === 3) {

    hasil = input_suhu * 4/5 ;
    cara = 'Celcius * 4/5';
    document.getElementById('nilai_suhu2').innerHTML = hasil
    document.getElementById('cara').innerHTML = cara;   
};

if (global_perintah1 === 2 && global_perintah2 === 3) {
    
    hasil = (input_suhu - 273 ) * (4/5);
    cara = '(Kelvin - 273 ) * (4/5)';
    document.getElementById('nilai_suhu2').innerHTML = hasil
    document.getElementById('cara').innerHTML = cara;
};

if (global_perintah1 === 3 && global_perintah2 === 3) {
    hasil = (input_suhu);
    cara = 'Reamur tetaplah Reamur';
    document.getElementById('nilai_suhu2').innerHTML = hasil
    document.getElementById('cara').innerHTML = cara;
};

if (global_perintah1 === 4 && global_perintah2 === 3) {
    
    hasil = (input_suhu - 32 ) * (4/9);
    cara = '(Fahrenheit - 32 ) * (4/9)';
    document.getElementById('nilai_suhu2').innerHTML = hasil
    document.getElementById('cara').innerHTML = cara;
};
    

/All ke Fahrenheit/ 
if (global_perintah1 === 1 && global_perintah2 === 4) {
    
    hasil = input_suhu * 9/5 + 32;
    cara = 'Celcius * 9/5 + 32';
    document.getElementById('nilai_suhu2').innerHTML = hasil
    document.getElementById('cara').innerHTML = cara;
};

if (global_perintah1 === 2 && global_perintah2 === 4) {
    
    hasil = (input_suhu - 273 ) * (9/5) + 32;
    cara = '(Kelvin - 273 ) * (9/5) + 32';
    document.getElementById('nilai_suhu2').innerHTML = hasil
    document.getElementById('cara').innerHTML = cara;
};

if (global_perintah1 === 3 && global_perintah2 === 4) {
   
    hasil = (input_suhu * 9/4 ) + 32;
    cara = '(Reamur * 9/4 ) + 32';
    document.getElementById('nilai_suhu2').innerHTML = hasil
    document.getElementById('cara').innerHTML = cara;
};

if (global_perintah1 === 4 && global_perintah2 === 4) {
    
    hasil = input_suhu;
    cara = 'Fahrenheit tetaplah Fahrenheit';
    document.getElementById('nilai_suhu2').innerHTML = hasil
    document.getElementById('cara').innerHTML = cara;
};
};


