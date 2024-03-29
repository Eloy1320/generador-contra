(function(){
    let app = document.getElementById('app');
    let inputCaracteres = document.getElementById('num-carecteres');

    let configuracion = {
        caracteres: parseInt (inputCaracteres.value),
        simbolos: true,
        numeros: true,
        mayusculas: true,
        minusculas: true
    }

    let caracteres ={
        numeros: '0 1 2 3 4 5 6 7 8 9',
		simbolos: '! @ # $ % ^ & * ( ) _ - + = { [ } ] ; : < , > . ? /',
		mayusculas: 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z',
		minusculas: 'a b c d e f g h i j k l m n o p q r s t u v w x y z'
    }

    app.addEventListener('submit',function(e){
        e.preventDefault();
    });

    app.elements.namedItem('btn-plus').addEventListener('click',function(){
        if(configuracion.caracteres < 20){
            configuracion.caracteres++;
            inputCaracteres.value = configuracion.caracteres;
        }
        
    });

    app.elements.namedItem('btn-minus').addEventListener('click',function(){
        if(configuracion.caracteres > 1){
            configuracion.caracteres--;
            inputCaracteres.value = configuracion.caracteres;
        }
        
    });

    app.elements.namedItem('btn-simbolos').addEventListener('click', function(){
        btnToggle(this);
        configuracion.simbolos = !configuracion.simbolos;
    });

    app.elements.namedItem('btn-numeros').addEventListener('click', function(){
        btnToggle(this);
        configuracion.numeros = !configuracion.numeros;
    });

    app.elements.namedItem('btn-mayusculas').addEventListener('click', function(){
        btnToggle(this);
        configuracion.mayusculas = !configuracion.mayusculas;
    });
    
    function btnToggle(elemento){
        elemento.childNodes[0].classList.toggle('fa-check');
        elemento.childNodes[0].classList.toggle('fa-times');  
    }

    app.elements.namedItem('btn-generar').addEventListener('click' , function(){
        generarPassword();
    });

    app.elements.namedItem('res-contraseña').addEventListener('click' , function(){
        copiarPassword();
    });

    function generarPassword(){
        let caracteresFinales= '';
        let password = '';

        for(propiedad in configuracion){
            if(configuracion[propiedad] == true){
                caracteresFinales += caracteres[propiedad] + ' ';
               
            }
        }
        caracteresFinales = caracteresFinales.trim();
        caracteresFinales = caracteresFinales.split(' ');
        
        for(let i = 0; i < configuracion.caracteres; i++){
            password = password + caracteresFinales[Math.floor(Math.random()*caracteresFinales.length)];
        }

        app.elements.namedItem('res-contraseña').value = password;
        
    }

    function copiarPassword(){
        app.elements.namedItem('res-contraseña').select();
        document.execCommand('copy');
        document.getElementById('alert').classList.remove('alert-desactivado');
        document.getElementById('alert').classList.add('alert-activo');

        setTimeout(function(){
			document.getElementById('alert').classList.remove('alert-activo');
            document.getElementById('alert').classList.add('alert-desactivado');
		}, 2000)

    }

    generarPassword();

}())
