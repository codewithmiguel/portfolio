import { Box, Divider } from '@mui/material'
import { Apresentation } from './components/apresentation';
import { Header } from './components/header/index';
import { Courses } from './components/courses/index';
import { MyServices } from './components/myServices/index';
import { Contact } from './components/contact';

function App() {

  return (
    <Box>
      <Header />
      <Apresentation />
      <Courses />
      <MyServices />
      <Contact />
    </Box>
  )
}

export default App
