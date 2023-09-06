import Theme from './components/buttons/Theme';

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
			<section className='relative flex flex-col justify-start gap-5 items-start w-screen h-screen bg-white'>
				<button className='absolute top-10 right-10'>눌러봐</button>
				<h1 className='font-title font-bold text-4xl text-primary px-8 py-6'>1. PROFILE</h1>
			</section>
		</>
	);
}
