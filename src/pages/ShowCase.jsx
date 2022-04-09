import InfoCard from '../components/InfoCard'
import { FaSchool } from 'react-icons/fa'
import BestStudentCard from '../components/BestStudentCard'

const ShowCase = () => {
	return (
		<>
			<InfoCard title='Classes' value='64' icon={<FaSchool className='w-10 h-8' />} color='red-400' />
			<BestStudentCard />
		</>
	)
}

export default ShowCase
