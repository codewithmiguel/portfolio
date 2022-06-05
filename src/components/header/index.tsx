import styles from './header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h1>@codewithmiguel</h1>
      </nav>
    </header>
  )
}