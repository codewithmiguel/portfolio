import { Email, Instagram, LinkedIn, WhatsApp } from "@mui/icons-material";
import { Box, Link } from "@mui/material";
import style from './contact.module.css';

export function Contact() {

  return (
    <footer className={style.container}>
      <Box className={style.rowContact}>
        <Link
          href="mailto:codewithmiguel@gmail.com"

          target={"_blank"}
        >
          <Email />
          codewithmiguel@gmail.com
        </Link>
      </Box>
      <Box className={style.rowContact}>
        <Link
          href="https://wa.me/5519999884011?text=Olá Miguel, tudo bem?"
          target={"_blank"}
        >
          <WhatsApp />
          19 9 99884011
        </Link>
      </Box>
      <Box className={style.rowContact}>
        <Link
          href="https://instagram.com/codewithmiguel"
          target={"_blank"}
        >
          <Instagram />
          codewithmiguel
        </Link>
      </Box>
      <Box className={style.rowContact}>
        <Link
          href="https://www.linkedin.com/in/codewithmiguel/"
          target={"_blank"}
        >
          <LinkedIn />
          codewithmiguel
        </Link>
      </Box>

    </footer>
  )
}