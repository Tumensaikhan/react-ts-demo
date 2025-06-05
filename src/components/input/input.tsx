import styles from './input.module.css'

type InputProps = {
    placeholder?: string
    error?: boolean
}

export function Input({ placeholder, error }: InputProps) {

    return (
        <input
            className={styles.input}
            data-error={error}
            placeholder={placeholder}
        />
    )
}
