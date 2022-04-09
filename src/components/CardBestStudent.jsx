import Backdrop from '../assets/backdrop/best_student_backdrop.svg'
import kid1 from '../assets/avaters/1.png'

const CardBestStudent = () => {
	return (
		<div className='max-w-lg min-w- bg-green-700 rounded-xl flex flex-col overflow-hidden text-gray-100 text-center'>
			<img
				className='w-14 h-14 mx-auto mt-4 mb-2 bg-gray-300 border-4 border-gray-300 rounded-full'
				src={kid1}
				alt='dm'
			/>
			<h3 className='font-lato font-bold'>Rovan Hossam</h3>
			<h1 className='font-bold text-xl'>99.88%</h1>
			<div className='bg-green-600 rounded-md m-2.5 py-1.5 sm:px-14'>
				<h2 className='font-lato font-extrabold'>1st</h2>
			</div>
			<img className='absolute w-20' src={Backdrop} alt='bd' />
		</div>
	)
}

export default CardBestStudent
