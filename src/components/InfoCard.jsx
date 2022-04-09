const InfoCard = ({ title, value, icon, color }) => {
	return (
		<div className='max-w-lg bg-white rounded-md flex overflow-hidden'>
			<div className={`flex-none w-2 bg-${color}`}></div>
			<div className={`text-${color} p-7`}>{icon}</div>
			<div className='w-px my-7 bg-gray-300'></div>
			<div className='text-black-900 m-auto text-center'>
				<div className='text-base font-lato'>{title}</div>
				<div className='text-2xl font-bold'>{value}</div>
			</div>
		</div>
	)
}

export default InfoCard
