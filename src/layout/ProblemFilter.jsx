import React from 'react';
import Card from '../components/Card';
import './layout.css';

const ProblemFilter = () => {
	return (
		<div className='problem-filter'>
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

export default ProblemFilter;
