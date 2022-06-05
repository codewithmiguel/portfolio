import { Email, Instagram, LinkedIn, WhatsApp } from "@mui/icons-material";
import { Box, Container, Link } from "@mui/material";
import style from './contact.module.css';

export function Contact() {

  return (
    <div className={style.container}>
      <Box className={style.rowContact}>
        <Link>
          <Email />
          codewithmiguel@gmail.com
        </Link>
      </Box>
      <Box className={style.rowContact}>
        <Link>
          <WhatsApp />
          19 9 99884011
        </Link>
      </Box>
      <Box className={style.rowContact}>
        <Link>
          <Instagram />
          codewithmiguel
        </Link>
      </Box>
      <Box className={style.rowContact}>
        <Link>
          <LinkedIn />
          codewithmiguel
        </Link>
      </Box>

    </div>
  )
}