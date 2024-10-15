// app/components/Sidebar.js
import Link from "next/link";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <ul>
                <li>
                    <Link href="/home">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
