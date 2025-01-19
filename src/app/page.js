import './styles/home.css'
import Image from 'next/image'

export default function HomePage() {
	return (
		<div className='container'>
			<div className='image-box' style={{ position: 'relative' }}>
				<Image
					src='/assets/flower.png'
					alt='flower shape'
					className='flower-image'
					width={500}
					height={500}
				/>
				{/* smaller boxes */}
				<div className='line-box box1'>
					<Image
						src='/assets/tools.png'
						alt='craft icon'
						width={60}
						height={60}
					/>
					<span className='box-text'>craft</span>
				</div>
				<div className='line-box box2'>
					<Image
						src='/assets/code.png'
						alt='code icon'
						width={60}
						height={60}
					/>
					<span className='box-text'>code</span>
				</div>
				<div className='line-box box3'>
					<Image
						src='/assets/design.png'
						alt='design icon'
						width={60}
						height={60}
					/>
					<span className='box-text'>design</span>
				</div>
				<div className='line-box box4'>
					<Image
						src='/assets/circuit.png'
						alt='electronics icon'
						width={60}
						height={60}
					/>
					<span className='box-text'>electronics</span>
				</div>
				<div className='line-box box5'>
					<Image
						src='/assets/text.png'
						alt='text icon'
						width={60}
						height={60}
					/>
					<span className='box-text'>text</span>
				</div>
			</div>
		</div>
	)
}
