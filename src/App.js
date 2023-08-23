import './App.css';
import Home from './page/Home';

// icons prime 
import 'primeicons/primeicons.css';

// estilos do prime 
import 'primeicons/primeicons.css';
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";


// react query
import { QueryClientProvider } from 'react-query';
import queryClient from './services/react-query';
import SpacexProvider from './context/context';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SpacexProvider>
        <Home />
      </SpacexProvider>
    </QueryClientProvider>
  );
}

export default App;
