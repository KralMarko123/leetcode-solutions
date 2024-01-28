import React from 'react';
import Card from '../components/Card';
import { EASY, HARD, MEDIUM } from '../constants/MISC';
import './layout.css';

const ProblemFilter = ({ handleFilterClick }) => {
	return (
		<div className='problem-filter'>
			<Card extraClassNames={['success']} callOnClick={() => handleFilterClick(EASY)}>
				<h1 className='title'>Easy</h1>
			</Card>
			<Card extraClassNames={['secondary']} callOnClick={() => handleFilterClick(MEDIUM)}>
				<h1 className='title'>Medium</h1>
			</Card>
			<Card extraClassNames={['danger']} callOnClick={() => handleFilterClick(HARD)}>
				<h1 className='title'>Hard</h1>
			</Card>
		</div>
	);
};

export default ProblemFilter;
