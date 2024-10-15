// app/layout.js
import Sidebar from "./components/Sidebar";

export default function Layout({ children }) {
    return (
        <html lang="en">
            <body>
                <div style={{ display: "flex" }}>
                    <Sidebar />
                    <div style={{ marginLeft: "300px", width: "100%" }}>
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
