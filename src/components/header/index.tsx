import styles from './header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#">@codewithmiguel</a>
        <ul className={styles.ul}>
          <li className={styles.items}><a href="#">Serviços</a></li>
          <li className={styles.items}><a href="#">Sobre</a></li>
          <li className={styles.items}><a href="#">Contato</a></li>
        </ul>
      </nav>
    </header>
  )
}