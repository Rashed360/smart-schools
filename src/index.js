import { createRoot } from 'react-dom/client'
import './styles/_index.css'
import App from './pages/App'

const root = createRoot(document.getElementById('app'))
root.render(<App />)
