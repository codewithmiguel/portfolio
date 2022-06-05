import { Box, Button, Link, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import style from './courses.module.css';

const certificates = [
  {
    title: "RocketSeat",
    description: "Treinamento de ReactJS na plataforma da Rocketseat, instrutor Diego Fernandes",
    tags: ['ReactJS', 'Javascript', 'TDD'],
    url: '/assets/certificates/rocketseat.png',
    link: 'https://app.rocketseat.com.br/certificates/e095e2ce-9105-4e28-a4a0-aadf2312622a',
  },
  {
    title: "Origamid",
    description: "Curso de Javascript (ES6) avançado com mais de 100 horas de treinamento",
    tags: ['Javascript', 'ES6', 'Lógica'],
    url: '/assets/certificates/origamid-reactjs.png',
    link: 'https://www.origamid.com/certificate/5d3c7955/',
  },
  {
    title: "Alura",
    description: "Trilha de Frontend completa do 0 até os frameworks mais atuais e projetos",
    tags: ['CSS', 'HTML', 'Javascript'],
    url: '/assets/certificates/alura-reactjs.png',
    link: 'https://cursos.alura.com.br/degree/certificate/5135ae39-6817-49f1-92f5-400fbbf089d5'
  },
]

export function Courses() {
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
    link: string;
  }
}
function Course(props: ItensProps) {
  return (
    <Box className={style.card}>
      <h2 className={style.title}>{props.item.title}</h2>
      {props.item.tags.map(tag => (<span className={style.tags}>{tag}</span>))}
      <p className={style.description}>{props.item.description}</p>
      <img className={style.photo} src={props.item.url} alt={props.item.description} />
      <Button className={style.button}>
        <Link href={props.item.link} target={"_blank"}>Ver certificado</Link>
      </Button>
    </Box>
  )
}