import CardInfo from '../components/CardInfo'
import { FaSchool } from 'react-icons/fa'
import CardBestStudent from '../components/CardBestStudent'
import ContainerDash from '../components/ContainerDash'
import ContainerInfo from '../components/ContainerInfo'
import ContainerInfoDash from '../components/ContainerInfoDash'

const ShowCase = () => {
	return (
		<>
			<ContainerInfo>
				<CardInfo title='Classes' value='64' icon={<FaSchool className='w-10 h-8' />} color='red-400' />
				<CardInfo title='Classes' value='64' icon={<FaSchool className='w-10 h-8' />} color='red-400' />
				<CardInfo title='Classes' value='64' icon={<FaSchool className='w-10 h-8' />} color='red-400' />
				<CardInfo title='Classes' value='64' icon={<FaSchool className='w-10 h-8' />} color='red-400' />
			</ContainerInfo>
			<ContainerInfoDash>
				<ContainerDash title='Best Students' sub='All data in Thousand 2021-2022'>
					<CardBestStudent />
					<CardBestStudent />
					<CardBestStudent />
				</ContainerDash>
				<ContainerDash title='Best Students' sub='All data in Thousand 2021-2022'>
					<CardBestStudent />
					<CardBestStudent />
					<CardBestStudent />
				</ContainerDash>
				<ContainerDash title='Best Students' sub='All data in Thousand 2021-2022'>
					<CardBestStudent />
					<CardBestStudent />
					<CardBestStudent />
				</ContainerDash>
				<ContainerDash title='Best Students' sub='All data in Thousand 2021-2022'>
					<CardBestStudent />
					<CardBestStudent />
					<CardBestStudent />
				</ContainerDash>
			</ContainerInfoDash>
		</>
	)
}

export default ShowCase
