import { NavLink } from 'react-router'
import styles from './sidebar.module.css'

const sidebarItems = [{
    link: '/',
    label: 'Дашбоард'
}, {
    link: '/products',
    label: 'Бараа'
}, {
    link: '/cats',
    label: 'Муур'
}, {
    link: '/form',
    label: 'Form'
}, {
    link: '/login',
    label: 'Гарах'
}]

export function Sidebar() {
    return (
        <div className={styles.sidebar}>
            {sidebarItems.map((item, index) => (
                <NavLink to={item.link} key={index}>
                    {item.label}
                </NavLink>
            ))}
        </div>
    )
}
