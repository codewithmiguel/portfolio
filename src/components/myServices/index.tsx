import { Box, Container, Typography } from "@mui/material";
import style from './myservices.module.css';

export function MyServices() {
  return (
    <>
      <Typography component="h1" sx={{
        textAlign: 'center',
        fontSize: '3rem',
        margin: '10rem auto 1rem'
      }}>Serviços</Typography>
      <Box className={style.container}>
        <Box className={style.box}>
          <Typography className={style.title}>Desenvolvedor Frontend<br />(Freelance only)</Typography>
          <Typography className={style.value}>R$50,00 P/H</Typography>
          <Typography className={style.description}>
            Desenvolvimento Frontend, criação de interfaces modernas,
            com as melhores práticas e tecnologias mais modernas, acessível e
            dinâmico! Disponível para novos Freelance.
          </Typography>
        </Box>
        <Box className={style.box}>
          <Typography className={style.title}>Manutenção de Sites <br />OFF-WP</Typography>
          <Typography className={style.value}>R$50,00 P/H</Typography>
          <Typography className={style.description}>
            Manutenção de plataformas, refatoração do código, ajuda na solução de BUG.
            Entrega rápida e com qualidade, realizo validação da cobertura de testes de um projeto
          </Typography>
        </Box>
      </Box >
    </>
  )
}