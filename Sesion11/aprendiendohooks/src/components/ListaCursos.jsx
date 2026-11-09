const cursos = [
    { id: 1, nombre: 'React' },
    { id: 2, nombre: 'JavaScript' },
    { id: 3, nombre: 'Bases de datos' }
];
function ListaCursos() {
    return (
        <ul>
            {cursos.map((curso) => (
                <li key={curso.id}>{curso.nombre}</li>
            ))}
        </ul>
    );
}

export default ListaCursos