import styles from "./animatedBackground.module.css";

const AnimatedBackground = () => {
	return (
		<div className={styles.area}>
			<ul className={styles.circles}>
				<li className='bg-red-300'></li>
				<li className='bg-pink-300'></li>
				<li className='bg-green-300'></li>
				<li className='bg-yellow-300'></li>
				<li className='bg-red-300'></li>
				<li className='bg-pink-300'></li>
				<li className='bg-green-300'></li>
				<li className='bg-yellow-300'></li>
				<li className='bg-red-300'></li>
				<li className='bg-pink-300'></li>
			</ul>
		</div>
	);
};

export default AnimatedBackground;
