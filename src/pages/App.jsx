import ShowCase from './ShowCase'
import Sidebar from '../components/Sidebar'

function App() {
	return (
		<div className='h-screen bg-gradient-to-b from-slate-400 to-slate-300'>
			<Sidebar />
			<ShowCase />
		</div>
	)
}

export default App
