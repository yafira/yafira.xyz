import './styles/home.css'
import Image from 'next/image'

export default function HomePage() {
	return (
		<div className='container'>
			<div className='image-box' style={{ position: 'relative' }}>
				<Image
					src='/flower.png'
					alt='flower shape'
					className='flower-image'
					width={500}
					height={500}
				/>
				{/* smaller boxes */}
				<div className='line-box box1'></div>
				<div className='line-box box2'></div>
				<div className='line-box box3'></div>
				<div className='line-box box4'></div>
				<div className='line-box box5'></div>
			</div>
		</div>
	)
}
