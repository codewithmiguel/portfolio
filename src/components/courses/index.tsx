import { Box, Button, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import style from './courses.module.css';

export function Courses() {

  const certificates = [
    {
      title: "RocketSeat",
      description: "Treinamento de ReactJS na plataforma da Rocketseat, instrutor Diego Fernandes",
      tags: ['ReactJS', 'Javascript', 'TDD'],
      url: '/assets/certificates/rocketseat.png',
    },
    {
      title: "Origamid",
      description: "Curso de Javascript (ES6) avançado com mais de 100 horas de treinamento",
      tags: ['Javascript', 'ES6', 'Lógica'],
      url: '/assets/certificates/origamid-reactjs.png'
    },
    {
      title: "Alura",
      description: "Trilha de Frontend completa do 0 até os frameworks mais atuais e projetos",
      tags: ['CSS', 'HTML', 'Javascript'],
      url: '/assets/certificates/alura-reactjs.png'
    },
  ]

  return (
    <>
      <Typography component="h1" sx={{
        textAlign: 'center',
        fontSize: '3rem',
        margin: '4rem auto 2rem'
      }}>Cursos</Typography>
      <Box
        className={style.container}
      >
        {
          certificates.map((item, i) => <Course key={i} item={item} />)
        }
      </Box>
    </>
  )

}

interface ItensProps {
  item: {
    title: string,
    description: string;
    tags: string[];
    url: string;
  }
}
function Course(props: ItensProps) {
  return (
    <Box className={style.card}>
      <h2 className={style.title}>{props.item.title}</h2>
      {props.item.tags.map(tag => (<span className={style.tags}>{tag}</span>))}
      <p className={style.description}>{props.item.description}</p>
      <img className={style.photo} src={props.item.url} alt={props.item.description} />
      <button className={style.button}>Ver certificado</button>
    </Box>
  )
}