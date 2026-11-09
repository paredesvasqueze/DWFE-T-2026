import { useState } from 'react'
function BotonSeleccion({onSeleccionar}) {
    return (
        <button onClick={onSeleccionar}>
            Seleccionar curso
        </button>
    );
}

function CursoApp() {
    const [curso, setCurso] = useState('Ninguno');
    const [cursito, setCursito] = useState('Ninguno');
    
    return (
        <section>
            <p>Curso elegido: {curso}</p>
            <p>Curso elegido: {cursito}</p>
            <BotonSeleccion
                onSeleccionar={() => 
                    {
                    setCurso('React');
                    setCursito('JavaScript');
                    }
                }              
            />
        </section>
    );
}
export default CursoApp