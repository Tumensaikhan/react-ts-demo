import { useNavigate } from 'react-router'
import { Input } from '../../components/input/input'
import styles from './login.module.css'

export function Login() {
    const navigate = useNavigate()

    function login() {
        navigate('/')
    }

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <Input placeholder='Нэвтрэх нэр' />
                <Input placeholder='Нууц үг' />

                <button onClick={login}>
                    Нэвтрэх
                </button>
            </div>
        </div>
    )
}
