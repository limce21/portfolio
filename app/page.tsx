import Theme from './components/buttons/Theme';
import Image from 'next/image';

export default function Home() {
	return (
		<>
			<section className='relative flex flex-col justify-center gap-5 items-center w-screen h-screen bg-primary dark:bg-deepMahogany'>
				<Theme />
				<h1 className='text-9xl z-10'>🐹</h1>
				<h1 className='text-white xl:text-7xl 2xl:text-8xl font-title font-bold text-center leading-tight'>끊임없는 배움을 추구하는 개발자</h1>
				<h1 className='text-white xl:text-7xl 2xl:text-8xl font-title font-bold text-center leading-tight'>임채은입니다!</h1>
				<h1 className='absolute top-28 left-10 text-white_alpha20 dark:text-pink_alpha50 xl:text-9xl 2xl:text-10xl font-title font-bold'>LEARNING</h1>
				<h1 className='absolute top-64 right-10 text-white_alpha20 dark:text-pink_alpha50 xl:text-9xl 2xl:text-10xl font-title font-bold'>DEVOTEE</h1>
				<h1 className='absolute bottom-64 left-10 text-white_alpha20 dark:text-pink_alpha50 xl:text-9xl 2xl:text-10xl font-title font-bold'>FRONTEND</h1>
				<h1 className='absolute bottom-28 right-10 text-white_alpha20 dark:text-pink_alpha50 xl:text-9xl 2xl:text-10xl font-title font-bold'>ENGINEER</h1>
			</section>
			<section className='relative flex flex-col justify-start gap-5 items-start w-screen h-screen bg-white dark:bg-jetBlack'>
				<Theme />
				<h1 className='font-title font-bold text-4xl text-primary dark:text-softWatermelon px-8 py-6'>1. PROFILE</h1>
				<div className='w-full h-full flex flex-col justify-around'>
					<div className='w-full flex px-32 justify-between items-center'>
						<Image src='/zepeto.png' width={320} height={320} alt='profile_image' />
						<div className='flex flex-col gap-2 justify-start font-sans text-xl text-black dark:text-lightGray'>
							<h2 className='text-3xl font-bold dark:text-white'>ABOUT ME</h2>
							<p className='leading-loose'>
								Frontend를 깊이 있게 다져나고자 하는 주니어 개발자입니다.
								<br />
								<span className='font-bold text-2xl text-primary dark:text-softWatermelon'>&quot; 배우기 위해 살아간다 &quot;</span> 를 삶의 목표로 끊임없는 배움을 추구합니다.
								<br />
								Frontend를 깊이 있게 다져가는 동시에, 다른 분야에서도 지식을 쌓아가며
								<br />
								개발에 대한 관심사를 넓혀나가고 있습니다.
								<br />
								새로운 지식들을 습득하며 <span className='font-bold text-2xl text-primary dark:text-softWatermelon'>스스로 성장</span> 하는 것을 즐깁니다.
							</p>
						</div>
					</div>
					<div className='flex justify-around w-full pb-10 text-black dark:text-white'>
						<div className='flex flex-col font-sans text-xl justify-start'>
							<span className='text-2xl font-bold'>Phone ☎️</span>
							<a href='sms:010-9255-2716'>• 010-9255-2716</a>
						</div>
						<div className='flex flex-col font-sans text-xl justify-start'>
							<span className='text-2xl font-bold'>Email 📧</span>
							<a href='mailto:limce21@naver.com'>• limce21@naver.com</a>
						</div>
						<div className='flex flex-col font-sans text-xl justify-start'>
							<span className='text-2xl font-bold'>GitHub 👩‍💻</span>
							<a href='https://github.com/limce21'>• github.com/limce21</a>
						</div>
						<div className='flex flex-col font-sans text-xl justify-start'>
							<span className='text-2xl font-bold'>Velog 📝</span>
							<a href='https://velog.io/@limce21'>• velog.io/@limce21</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
