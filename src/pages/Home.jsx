import { React, useState, useEffect } from 'react';
import Card from '../components/Card';
import PageContainer from '../layout/PageContainer';
import ProblemFilter from '../layout/ProblemFilter';
import ParagraphHighlight from '../components/ParagraphHighlight';
import { PROBLEMS } from '../constants/PROBLEMS';
import { useNavigate } from 'react-router-dom';
import { DETAILS_PREFIX } from '../constants/ROUTES';
import { EASY } from '../constants/MISC';
import '../styles/page.css';
import './Home.css';

const Home = () => {
	const navigate = useNavigate();
	const [problems, setProblems] = useState(PROBLEMS);

	const filterProblemsByDifficulty = (difficulty) => {
		setProblems([...PROBLEMS.filter((p) => p.difficulty === difficulty)]);
	};

	useEffect(() => {
		filterProblemsByDifficulty(EASY);
	}, []);

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
					{problems.map((p, i) => (
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
							style={{ animationDelay: `${i * 0.25}s` }}
						>
							<h3 className='title secondary'>{p.title}</h3>
							<span className={`problem-box-number ${p.difficulty}`}>{p.number}</span>
						</div>
					))}
				</div>
			</PageContainer>

			<ProblemFilter handleFilterClick={(difficulty) => filterProblemsByDifficulty(difficulty)} />
		</div>
	);
};

export default Home;
