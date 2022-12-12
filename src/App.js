import logo from './logo.svg';
import { Button } from '@mui/material';
import './App.css';

function App() {
  return (
    <div className="App">
      <Button clor='primary' size='small' variant='contained'>
        submit
      </Button>
      <br /><br />
      <Button clor='primary' size='medium' variant='contained'>
        cancel
      </Button>
      <br /><br />
      <Button clor='primary' size='Large' variant='contained'>
        go back
      </Button>
      <br /><br />
    </div>
  );
}

export default App;
