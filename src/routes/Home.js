import React from 'react';

const Home = ({ history }) => {
	return (
		<div>
			<button
				onClick={() => {
					history.push('/posts');
				}}>
				버튼
			</button>
			Home
		</div>
	);
};

export default Home;
