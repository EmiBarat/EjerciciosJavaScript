const rendidas = [
    {
      alumno:'Burgos',
      examenA:8,
      examenB:7,
    },
    {
       alumno:'Parizia',
      examenA:9,
      examenB:7,
    },
    {
       alumno:'Barat',
      examenA:9,
      examenB:6,
    },
    {
       alumno:'Chavarria',
      examenA:8,
      examenB:8,
    },  
    {
       alumno:'Lopez',
      examenA:4,
      examenB:3,
    }  
    ];

    //definicion de los arreglos donde se guardan los apellidos de los alumnos
    //dependiendo de su condicion
    var alumnosPromocionados = [];
    var alumnosNoPromocionados = [];
    var alumnosDesaprobados = [];
    
    //Funcion que calcula el promedio en base a dos notas
    function promedioNotas(a,b){
        return (a + b)/2;
    }

    //funcion que determina la condicion del alumno y agrega su apellido en el arreglo correspondiente
    function determinarCondicionAlumno(array){
        for (let i = 0; i < array.length; i++) {
            var promedio = promedioNotas(rendidas[i].examenA,rendidas[i].examenB);
            if (promedio >= 8){
                alumnosPromocionados.push (rendidas[i].alumno);
            }
            else if(promedio >= 6){
                alumnosNoPromocionados.push(rendidas[i].alumno);
            }
            else {
                alumnosDesaprobados.push(rendidas[i].alumno);
            }
        }
    }

    console.log(alumnosPromocionados);
    console.log(alumnosNoPromocionados);
    console.log(alumnosDesaprobados);