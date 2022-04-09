import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './pages/App'

const root = createRoot(document.getElementById('app'))
root.render(<App />)
