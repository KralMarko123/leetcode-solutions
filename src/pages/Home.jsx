import React from 'react';
import Card from '../components/Card';
import PageContainer from '../layout/PageContainer';
import ProblemFilter from '../layout/ProblemFilter';
import ParagraphHighlight from '../components/ParagraphHighlight';
import { PROBLEMS } from '../constants/PROBLEMS';
import { useNavigate } from 'react-router-dom';
import { DETAILS_PREFIX } from '../constants/ROUTES';
import '../styles/page.css';
import './Home.css';

const Home = () => {
	const navigate = useNavigate();

	return (
		<div className='page home-page'>
			<PageContainer>
				<Card>
					<h1 className='title'>Leetcode Solutions</h1>
					<p className='paragraph'>
						A collection of leetcode problems I have written solutions for. All solutions are in{' '}
						<ParagraphHighlight text='C#' /> and are categorized according to their respective
						problem's difficulty. Each solution will contain a brief description of what the problem
						is, what my personal approach was and finally, the <ParagraphHighlight text='code' />.
					</p>
				</Card>

				<div className='problem-container'>
					{PROBLEMS.map((p) => (
						<div
							key={p.number}
							className={`problem-box ${p.difficulty}`}
							onClick={() =>
								navigate(`.${DETAILS_PREFIX}/${p.number}`, {
									state: {
										title: p.title,
										description: p.description,
										approach: p.approach,
										codeSnippet: p.codeSnippet,
										link: p.link,
										number: p.number
									}
								})
							}
						>
							<h3 className=''>{p.title}</h3>
							<span className='problem-box-number'>{p.number}</span>
						</div>
					))}
				</div>
			</PageContainer>

			<ProblemFilter />
		</div>
	);
};

export default Home;
