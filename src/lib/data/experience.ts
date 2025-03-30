import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

console.log("Debugging getSkills:", getSkills('java', 'sql', 'agile', 'debugging'));

export const items: Array<Experience> = [
	{
		slug: 'persistent-martian-intern',
		company: 'Persistent Systems',
		description: 'Contributed to Agile sprints in a collaborative environment, gaining hands-on experience in Java and SQL for real-time systems.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'India',
		formattedPeriod: 'June 2023 – August 2023', // ✅ Using a formatted string
		skills: getSkills('Java', 'SQL'),
		name: 'Persistent Martian Intern',
		color: 'purple',
		links: [],
		logo: Assets.PS,
		shortDescription: 'Gained hands-on experience in Java and SQL for real-time systems, improving code efficiency by 30%.',
	},
	{
		slug: "aws-eduskills-virtual-internship",
		company: "AWS EduSkills",
		description: "Completed a cloud-focused virtual internship under the AWS Academy program in collaboration with EduSkills, gaining hands-on experience in AWS services and foundational cloud concepts. Built understanding of core cloud practices, including compute, storage, networking, and security.",
		contract: ContractType.Internship,
		type: "AWS Cloud Practitioner",
		location: "India",
		formattedPeriod: "May 2023 – July 2023",
		skills: getSkills("AWS", "Cloud Computing", "Infrastructure as a Service"),
		name: "AWS Virtual Internship",
		color: "orange",
		links: [],
		logo: Assets.AWS,
		shortDescription: "Completed an AWS Cloud Practitioner virtual internship covering foundational cloud concepts, services, and best practices."
	  },
	{
		slug: 'web-developer-intern-phn',
		company: 'PHN Technology',
		description: 'Improved functionality and usability by adding new features such as dynamic pagination, searching, and sorting to existing webpages.',
		contract: ContractType.Internship,
		type: 'Web Development',
		location: 'India',
		formattedPeriod: 'April 2023 – June 2023', // ✅ Using a formatted string
		skills: getSkills('javascript', 'typescript', 'react', 'nodejs', 'mongodb', 'ajax', 'ui-ux', 'performance-optimization'),
		name: 'Web Developer Intern',
		color: 'blue',
		links: [],
		logo: Assets.PHN,
		shortDescription: 'Developed SPAs using React & TypeScript, optimized backend with Node.js & MongoDB, reducing content update time by 30%.'
	}
];





export const title = 'Experience';
