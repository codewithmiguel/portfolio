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
          <Typography className={style.value}>R$50,00 - por hora</Typography>
          <Typography className={style.description}>
            Desenvolvimento Frontend, criação de interfaces modernas,
            com as melhores práticas e tecnologias mais modernas, acessível e
            dinâmico! Diposnível para novos Freelance.
          </Typography>
        </Box>
        <Box className={style.box}>
          <Typography className={style.title}>Manutenção de Sistemas <br />OFF-WP</Typography>
          <Typography className={style.value}>R$100,00</Typography>
          <Typography className={style.description}>
            Manutenção de plataformas, refatoração do código, ajuda na solução de BUG.
            Entrega rápida e com qualidade, valido a cobertura de testes de um projeto
          </Typography>
        </Box>
        <Box className={style.box}>
          <Typography className={style.title}>Formatação<br />Windows 10 / Ubuntu Socorro - SP</Typography>
          <Typography className={style.value}>R$90,00</Typography>
          <Typography className={style.description}>
            Formatação completa com ativação do windows 10 e pacotes office, drivers atualizados
            e muito mais. Instalo Ubuntu (linux) em seu computador também.
          </Typography>
        </Box>
      </Box >
    </>
  )
}