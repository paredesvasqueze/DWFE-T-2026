function Panel({ titulo, children }) {
return (
    <section className="panel">
        <h2>{titulo}</h2>
        <div>{children}</div>
    </section>
    );
}

export default Panel