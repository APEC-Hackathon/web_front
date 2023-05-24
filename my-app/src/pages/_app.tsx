import { Outlet } from "react-router-dom";

export default function App() {
    return (
        <section>
            <main>
                <Outlet />
            </main>
        </section>
    );
}
