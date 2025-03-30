import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'M.S. in Computer Science',
		description: '',
		location: 'USA',
		logo: Assets.GMU,
		name: '',
		organization: 'George Mason University',
		formattedPeriod: 'August 28, 2024 – May 31, 2026', 
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['C', 'UI/UX', 'Mathematics for CS', 'Secure Software Engineering', 'Database System', 'Analysis of Algorithm']
	},
	{
		degree: 'B.Tech in Computer Engineering',
		description: '',
		location: 'INDIA',
		logo: Assets.PCCOE,
		name: '',
		organization: 'Pimpri Chinchwad College of Engineering',
		formattedPeriod: 'June 05, 2020 – May 20, 2024', 
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['DSA', 'Web-Development', 'Operating System', 'Cloud Computing', 'Software Testing','Fuzzy Logic','Data Warehousing','Java','Machine Learning', 'Computer Vision']
	}
];

export const title = 'Education';
