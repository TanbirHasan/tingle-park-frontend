import { useEffect, useState } from 'react';
import { FaAngleDoubleUp } from 'react-icons/fa';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/route/route';

function App() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const handleButtonVisibility = () => {
			window.pageYOffset > 0 ? setVisible(true) : setVisible(false);
		};
		window.addEventListener('scroll', handleButtonVisibility);

		return () => {
			window.removeEventListener('scroll', handleButtonVisibility);
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div className="App bg-[#F5F5F5]">
			{visible && (
				<button
					className="bounce scroll-button absolute z-50"
					onClick={scrollToTop}
					style={{
						position: 'fixed',
						bottom: '40px',
						right: '40px',
						width: '36px',
						height: '38px',
						backgroundColor: '#FFD333',
						
					}}>
					<FaAngleDoubleUp className="w-[30px] h-[20px] mx-auto text-black" />
				</button>
			)}
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
