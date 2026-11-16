import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";
export default function LayoutPrincipal() {
    return (
        <>
            <header>Catálogo de productos</header>
            <Menu />
            <main>
                <Outlet />
            </main>
            <footer>IESP TRUJILLO</footer>
        </>
    );
}