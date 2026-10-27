import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Home from './page';

test('shows the homepage heading', () => {
	render(<Home />);

	const heading = screen.getByRole('heading', {
		level: 1,
		name: 'To get started, edit the page.tsx file.'
	});

	expect(heading).toBeVisible();
});
