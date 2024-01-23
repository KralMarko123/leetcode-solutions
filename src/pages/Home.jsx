import React from 'react';
import Card from '../components/Card';
import PageContainer from '../components/PageContainer';
import '../styles/page.css';

const Home = () => {
	return (
		<div className='page home-page'>
			<PageContainer>
				<Card>
					<h1 className='title'>Leetcode Solutions</h1>
					<p className='paragraph'>
						A collection of leetcode problems I have written solutions for. All solutions are in C#
						and are categorized according to their respective problem's difficulty. Each solution
						will contain a brief description of what the problem is, what my personal approach was
						and finally, the code.
					</p>
				</Card>
			</PageContainer>

			<Card extraClassNames={['success']}>
				<h1 className='title'>Easy</h1>
			</Card>

			<Card extraClassNames={['accent']}>
				<h1 className='title'>Medium</h1>
			</Card>

			<Card extraClassNames={['danger']}>
				<h1 className='title'>Hard</h1>
			</Card>
		</div>
	);
};

export default Home;
