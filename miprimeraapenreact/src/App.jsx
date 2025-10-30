import { useState } from 'react' //use
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import './App.css';

const App = () => {

  const [counter, setCounter] = useState(0);
  return (
    <Stack direction="column">
      <Typography variant='h1'>Contador: {counter}</Typography>
      <Button onClick={ ()=> setCounter(counter + 1) }>Incrementar</Button>
    </Stack>
  );
}

export default App;