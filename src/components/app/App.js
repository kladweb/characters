import './app.scss';
import { BrowserRouter } from 'react-router-dom';

import { PagesRouter } from '../../routes/PagesRouter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <PagesRouter/>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;