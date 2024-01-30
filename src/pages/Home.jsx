import { React, useState, useEffect } from 'react';
import Card from '../components/Card';
import PageContainer from '../layout/PageContainer';
import ProblemFilter from '../layout/ProblemFilter';
import ParagraphHighlight from '../components/ParagraphHighlight';
import { PROBLEMS } from '../constants/PROBLEMS';
import { useNavigate } from 'react-router-dom';
import { DETAILS_PREFIX } from '../constants/ROUTES';
import { EASY, MAXIMUM_NUMBER_OF_ITEMS_PER_PAGE } from '../constants/MISC';
import '../styles/page.css';
import './Home.css';

const Home = () => {
	const navigate = useNavigate();
	const [problems, setProblems] = useState([...PROBLEMS]);
	const [paginatedProblems, setPaginatedProblems] = useState([]);
	const [difficulty, setDifficulty] = useState(EASY);
	const [page, setPage] = useState(1);

	const handlePageChange = (shouldIncrease) => {
		const newPageNumber = shouldIncrease ? page + 1 : page - 1;

		if (newPageNumber * MAXIMUM_NUMBER_OF_ITEMS_PER_PAGE > problems.length || newPageNumber < 1)
			return;
		else setPage(newPageNumber);
	};

	const filterProblemsByDifficulty = (problems) => [
		...problems.filter((p) => p.difficulty === difficulty)
	];

	const filterProblemsByPage = (problems) => {
		const end = page * MAXIMUM_NUMBER_OF_ITEMS_PER_PAGE;
		const start = end - MAXIMUM_NUMBER_OF_ITEMS_PER_PAGE;

		return [...problems.filter((p, i) => i < end && i >= start)];
	};

	useEffect(() => {
		const problemsByPage = filterProblemsByPage(problems);
		setPaginatedProblems(problemsByPage);
	}, [page]);

	useEffect(() => {
		setPage(1);

		const problemsByDifficulty = filterProblemsByDifficulty(PROBLEMS);
		setProblems(problemsByDifficulty);

		const problemsByPage = filterProblemsByPage(problemsByDifficulty);
		setPaginatedProblems(problemsByPage);
	}, [difficulty]);

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
					{paginatedProblems.map((p, i) => (
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

				<div className='problem-pagination'>
					<div
						className={`arrow arrow-left${page <= 1 ? ' disabled' : ''}`}
						onClick={() => handlePageChange(false)}
					>
						&lt;
					</div>
					<div
						className={`arrow arrow-right${
							page * MAXIMUM_NUMBER_OF_ITEMS_PER_PAGE >= problems.length ? ' disabled' : ''
						}`}
						onClick={() => handlePageChange(true)}
					>
						&gt;
					</div>
				</div>
			</PageContainer>

			<ProblemFilter handleFilterClick={(difficulty) => setDifficulty(difficulty)} />
		</div>
	);
};

export default Home;
