import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/variables.css';
import './styles/reset.css';
import './styles/style.css';
import 'highlight.js/styles/atom-one-dark.css';

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
