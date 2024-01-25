import React from 'react';
import PageContainer from '../layout/PageContainer';
import Card from '../components/Card';
import Highlight from 'react-highlight';
import LinkContainer from '../components/LinkContainer';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/ROUTES';
import '../styles/page.css';
import './Details.css';

const Details = () => {
	const navigate = useNavigate();

	const location = useLocation();
	const { title, description, approach, codeSnippet, link } = location.state;

	console.log(location.state.description);

	return (
		<div className='page details-page'>
			<PageContainer>
				<Card>
					<h1 className='title'>{title}</h1>
				</Card>
				<h2 className='title dark secondary'>The Problem:</h2>
				<Card extraClassNames={['accent']}>
					<p className='paragraph pre'>{description}</p>
				</Card>

				<h2 className='title dark secondary'>The Approach:</h2>
				<Card extraClassNames={['success']}>
					<p className='paragraph pre'>{approach}</p>
				</Card>

				<h2 className='title dark secondary'>The Code:</h2>

				<Card extraClassNames={['dark', 'fullwidth']}>
					<Highlight className='csharp-highlight'>{codeSnippet}</Highlight>
				</Card>

				<div className='details-actions'>
					<Card extraClassNames={['accent']} callOnClick={() => navigate(ROUTES.HOME)}>
						<h2 className='title secondary'>Go Back</h2>
					</Card>

					<LinkContainer isExternal href={link}>
						<Card extraClassNames={['secondary']}>
							<h2 className='title secondary'>Link to Leetcode Problem</h2>
						</Card>
					</LinkContainer>
				</div>
			</PageContainer>
		</div>
	);
};

export default Details;
