const CardInfo = ({ title, value, icon, color }) => {
	return (
		<div className='max-w-lg min-w-full sm:min-w-0 bg-white rounded-md flex overflow-hidden'>
			<div className={`flex-none w-2 bg-red-400`}></div>
			<div className={`text-red-400 py-7 px-8`}>{icon}</div>
			<div className='w-px my-7 bg-gray-300'></div>
			<div className='text-black-900 px-12 m-auto text-center'>
				<div className='text-base font-lato'>{title}</div>
				<div className='text-2xl font-bold'>{value}</div>
			</div>
		</div>
	)
}

export default CardInfo
