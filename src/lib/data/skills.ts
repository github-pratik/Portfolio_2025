import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Languages', slug: 'lang' }),
	defineSkillCategory({ name: 'AI/ML', slug: 'ai-ml' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' }),
	defineSkillCategory({ name: 'Cloud', slug: 'cloud' })
	
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	// ✅ Programming Languages
	defineSkill({
		slug: 'Java', color: 'red', logo: Assets.Java, name: 'Java', category: 'pro-lang',
		description: ''
	}),
	defineSkill({
		slug: 'JavaScript', color: 'yellow', logo: Assets.JavaScript, name: 'JavaScript', category: 'pro-lang',
		description: ''
	}),
	defineSkill({
		slug: 'SQL', color: 'blue', logo: Assets.mysql, name: 'SQL', category: 'pro-lang',
		description: ''
	}),
	defineSkill({
		slug: 'C', color: 'blue', logo: Assets.C || Assets.C, name: 'C', category: 'pro-lang',
		description: ''
	}),
	defineSkill({
		slug: 'C++', color: 'blue', logo: Assets.C || Assets.Cpp, name: 'C++', category: 'pro-lang',
		description: ''
	}),
	defineSkill({
		slug: 'Python', color: 'blue', logo: Assets.Python, name: 'Python', category: 'pro-lang',
		description: ''
	}),
	defineSkill({
		slug: 'HTML', color: 'orange', logo: Assets.HTML, name: 'HTML', category: 'markup-style',
		description: ''
	}),
	defineSkill({
		slug: 'CSS', color: 'blue', logo: Assets.CSS, name: 'CSS', category: 'markup-style',
		description: ''
	}),
	defineSkill({
		slug: 'TypeScript', color: 'blue', logo: Assets.TypeScript, name: 'TypeScript', category: 'pro-lang',
		description: ''
	}),
	defineSkill({
		slug: 'swift', color: 'orange', logo: Assets.swift, name: 'swift', category: 'pro-lang',
		description: ''
	}),
	defineSkill({
		slug: 'php', color: 'Purple', logo: Assets.php, name: 'PHP', category: 'pro-lang',
		description: ''
	}),

	//  Frameworks & Libraries
	defineSkill({
		slug: 'IOS developement', color: 'blue', logo: Assets.iosdev, name: 'IOS Development', category: 'framework',
		description: ''
	}),
	defineSkill({
		slug: 'React', color: 'cyan', logo: Assets.ReactJs, name: 'React', category: 'library',
		description: ''
	}),
	defineSkill({
		slug: 'Nodejs', color: 'cyan', logo: Assets.NodeJs, name: 'Nodejs', category: 'library',
		description: ''
	}),
	defineSkill({
		slug: 'Svelte', color: 'cyan', logo: Assets.Svelte, name: 'Svelte', category: 'library',
		description: ''
	}),
	defineSkill({
		slug: 'Redux', color: 'purple', logo: Assets.redux, name: 'Redux', category: 'library',
		description: ''
	}),
	defineSkill({
		slug: 'UI/UX', color: 'cyan', logo: Assets.uiux, name: 'UI/UX', category: 'framework',
		description: ''
	}),

	//  Cloud & DevOps
	defineSkill({
		slug: 'AWS', color: 'orange', logo: Assets.AWS, name: 'AWS', category: 'cloud',
		description: ''
	}),
	defineSkill({
		slug: 'Docker', color: 'blue', logo: Assets.Docker, name: 'Docker', category: 'devops',
		description: ''
	}),
	defineSkill({
		slug: 'GKE', color: 'blue', logo: Assets.Kubernetes, name: 'Google Kubernetes Engine', category: 'devops',
		description: ''
	}),
	defineSkill({
		slug: 'Github', color: 'White', logo: Assets.github, name: 'Github', category: 'devops',
		description: ''
	}),
	defineSkill({
		slug: 'Cloud Computing', color: 'Blue', logo: Assets.cloudcomputing, name: 'Cloud Computing', category: 'cloud',
		description: ''
	}),
	defineSkill({
		slug: 'Google Cloud', color: 'Yellow', logo: Assets.GC, name: 'Google Cloud', category: 'cloud',
		description: ''
	}),
	defineSkill({
		slug: 'Infrastructure as a Service', color: 'Blue', logo: Assets.Iaas, name: 'Infrastructure as a Service', category: 'cloud',
		description: ''
	}),

	//  Databases
	defineSkill({
		slug: 'MySQL', color: 'blue', logo: Assets.mysql, name: 'MySQL', category: 'db',
		description: ''
	}),
	defineSkill({
		slug: 'OracleDB', color: 'red', logo: Assets.oracle, name: 'Oracle Database', category: 'db',
		description: ''
	}),
	defineSkill({
		slug: 'MongoDB', color: 'green', logo: Assets.MongoDB, name: 'MongoDB', category: 'db',
		description: ''
	}),
	defineSkill({
		slug: 'PostgresDB', color: 'blue', logo: Assets.PostgreSQL, name: 'PostgreSQL', category: 'db',
		description: ''
	}),
	defineSkill({
		slug: 'Redis', color: 'red', logo: Assets.Redis, name: 'Redis', category: 'db',
		description: ''
	}),

	//  UI Frameworks & Dev Tools
	defineSkill({
		slug: 'Bootstrap', color: 'blue', logo: Assets.Bootstrap, name: 'Bootstrap 5', category: 'markup-style',
		description: ''
	}),
	defineSkill({
		slug: 'Tailwind', color: 'blue', logo: Assets.Tailwind, name: 'Tailwind', category: 'markup-style',
		description: ''
	}),
	defineSkill({
		slug: 'VSCode', color: 'blue', logo: Assets.vscode, name: 'VS Code', category: 'devtools',
		description: ''
	}),
	defineSkill({
		slug: 'Git', color: 'red', logo: Assets.git, name: 'Git', category: 'devtools',
		description: ''
	}),
	defineSkill({
		slug: 'Eclipse', color: 'purple', logo: Assets.javacompiler, name: 'Eclipse', category: 'devtools',
		description: ''
	}),

	//  Software Methodologies
	defineSkill({
		slug: 'Agile', color: 'blue', logo: Assets.Unknown, name: 'Agile', category: 'soft',
		description: ''
	}),
	defineSkill({
		slug: 'ITIL', color: 'purple', logo: Assets.Unknown, name: 'ITIL', category: 'soft',
		description: ''
	}),
	defineSkill({
		slug: 'PMBOK', color: 'orange', logo: Assets.Unknown, name: 'PMBOK', category: 'soft',
		description: ''
	}),

	//  Technologies
	defineSkill({
		slug: 'REST API', color: 'green', logo: Assets.restapi, name: 'REST API', category: 'devtools',
		description: ''
	}),
	defineSkill({
		slug: 'API Gateway', color: 'yellow', logo: Assets.apigateway, name: 'API Gateway', category: 'devtools',
		description: ''
	}),
	defineSkill({
		slug: 'Authentication', color: 'green', logo: Assets.userauth, name: 'Authentication', category: 'devtools',
		description: ''
	}),
	// ✅ AI/ML
	defineSkill({ slug: 'TensorFlow', color: 'orange', logo: Assets.tensorflow, name: 'TensorFlow', category: 'ai-ml', description: ''

	 }),
	defineSkill({ slug: 'PyTorch', color: 'red', logo: Assets.pytorch, name: 'PyTorch', category: 'ai-ml', description: '' 
	}),
	defineSkill({ slug: 'Scikit-learn', color: 'blue', logo: Assets.scikit, name: 'Scikit-learn', category: 'ai-ml', description: '' 
	}),
	defineSkill({ slug: 'Pandas', color: 'green', logo: Assets.Pandas, name: 'Pandas', category: 'ai-ml', description: '' 

	}),
	defineSkill({ slug: 'NumPy', color: 'blue', logo: Assets.Numpy, name: 'NumPy', category: 'ai-ml', description: ''

	 }),
	defineSkill({ slug: 'Predictive Analytics', color: 'purple', logo: Assets.Unknown, name: 'Predictive Analytics', category: 'ai-ml', description: ''

	 }),
	defineSkill({ slug: 'NLP', color: 'green', logo: Assets.nlp, name: 'Natural Language Processing', category: 'ai-ml', description: '' 

	}),
	defineSkill({ slug: 'Deep Learning', color: 'blue', logo: Assets.deeplearning, name: 'Deep Learning', category: 'ai-ml', description: ''
	 }),
	 defineSkill({ slug: 'OpenCV', color: 'blue', logo: Assets.opencv, name: 'OpenCV', category: 'ai-ml', description: ''
	 }),
	defineSkill({ slug: 'Computer Vision', color: 'blue', logo: Assets.computervision, name: 'Computer Vision', category: 'ai-ml', description: ''
	 }),
	 defineSkill({ slug: 'ML', color: 'orange', logo: Assets.ml, name: 'Machine Learning', category: 'ai-ml', description: ''
	 }),
	 defineSkill({ slug: 'WebScraping', color: 'green', logo: Assets.webscraping1, name: 'Web Scraping', category: 'ai-ml', description: ''
	 }),
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
