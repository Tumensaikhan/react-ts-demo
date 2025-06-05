import { Outlet } from "react-router";
import { Sidebar } from "../sidebar/sidebar";
import styles from './layout.module.css';

export function Layout() {
    return (
        <div className={styles.layout}>
            <Sidebar />
            <div className={styles.pageContainer}>
                <Outlet />
            </div>
        </div>
    )
}
