import { Typography } from '@mui/material';
import styles from './header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Typography component="h1" sx={{ cursor: 'pointer', fontSize: '1.5rem', padding: '1rem' }}>@codewithmiguel</Typography>
      </nav>
    </header>
  )
}