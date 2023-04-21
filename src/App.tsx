import Header from './components/Header'
import Button from './components/Button'

function App() {
	return (
		<div className='container mx-auto flex flex-col h-full px-8 py-8'>
			<Header />
			<main className='flex-1 py-6'>
				Hello world!
				<div className='mt-2'>
					<Button />
				</div>
			</main>

			<footer className='text-black/40 py-4'>2023 All rights reserved.</footer>
		</div>
	)
}

export default App
