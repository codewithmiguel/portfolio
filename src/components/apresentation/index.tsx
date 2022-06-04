import { Download } from "@mui/icons-material";
import { Box, Link, Typography } from "@mui/material";
import style from './apresentation.module.css';

export function Apresentation() {

  return (
    <Box className={style.apresentation}>
      <Box className={style.apresentationDetails}>
        <Typography className={style.name}>
          Pedro Miguel
        </Typography>
        <Typography className={style.description}>
          Desenvolvedor Frontend com 2 anos de experiência,
          comecei meus estudos de frontend em 2020. Ingressei no mercado ao final de 2020
          no mercado, atualmente minha stack é:<br></br>
          <Link
            href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
            target={"_blank"}
            className={style.hardskill}
          > Javascript (ES6) </Link> e
          <Link
            href="https://pt-br.reactjs.org/docs/getting-started.html"
            className={style.hardskill}
            target={"_blank"}
          > ReactJS </Link>
          com
          <Link
            href="https://www.typescriptlang.org/pt/docs/"
            className={style.hardskill}
            target={"_blank"}
          > Typescript</Link>
        </Typography>
        <button className={style.button}>
          <Download sx={{ marginRight: '0.5rem' }} />
          Curriculo
        </button>
      </Box>
      <Box className={style.photoHub}>
        <Link
          target={"_blank"}
          href="https://github.com/codewithmiguel"
        >
          <img
            className={style.photo}
            src="https://www.github.com/codewithmiguel.png"
          />
        </Link>
      </Box>
    </Box >
  )
}