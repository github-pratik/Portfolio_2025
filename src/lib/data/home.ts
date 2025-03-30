import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Pratik';

export const lastName = 'Patil';

export const description =
	'Computer Science Student with expertise in database systems, API integrations, Cloud Computing and AI-driven Framework. Skilled in JavaScript, Python, Java, C++ and SQL with experience in building scalable applications and implementing ETL processes. Seeking internship to leverage integration and automation skills.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/github-pratik' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/pshpatil/'
	},
	{
		platform: Platform.Email,
		link: 'mailto:p.pshpatil@gmail.com'
	}
];

export const skills = getSkills('JavaScript', 'CSS', 'HTML', 'React','Nodejs', 'Java', 'Svelte', 'AWS', 'Python', 'MySQL', 'PostgresDB','Docker');

export const contactInfo = {
	email: 'p.pshpatil@gmail.com',
	phone: '+1 (202) 577-3965' 
};
