const ContainerDash = ({ title, sub, children }) => {
	return (
		<div className='min-w-full sm:min-w-0 bg-white rounded-lg px-6 py-5'>
			<div className='flex justify-between'>
				<div className='font-semibold mb-2.5'>{title}</div>
				<div className='font-semibold text-xs text-gray-600'>{sub}</div>
			</div>
			<div className='flex gap-5'>{children}</div>
		</div>
	)
}

export default ContainerDash
