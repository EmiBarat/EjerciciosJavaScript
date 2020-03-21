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

    function NombreMenorPromedio(a){
        let menorPromedio = Infinity;
        let alumnoMenorProm = "";
        
        
        
        for (let i = 0; i < rendidas.length; i++) {
                        
            let promedio = (rendidas[i].examenA + rendidas[i].examenB)/2;
            let alumno = rendidas[i].alumno;
            if (menorPromedio > promedio) {
                menorPromedio = promedio;
                alumnoMenorProm = alumno;
            }
            
        }
        return alumnoMenorProm;
    }

    let AluMenor = NombreMenorPromedio(rendidas);
    alert(AluMenor);
