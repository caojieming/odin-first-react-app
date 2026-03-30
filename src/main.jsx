import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Greeting } from "./Greeting.jsx";
import { Practice1 } from './Practice1.jsx';
import { Buttons } from './Buttons.jsx';
import { ElementAnimals, ComponentAnimals, ConditionalAnimals } from './Animals.jsx'; 
import { PersonState } from './PersonState.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Greeting /> */}
    {/* <Practice1 /> */}
    {/* <Buttons /> */}
    {/* <ElementAnimals /> */}
    {/* <ComponentAnimals /> */}
    {/* <ConditionalAnimals /> */}
    <PersonState />
  </StrictMode>,
)
