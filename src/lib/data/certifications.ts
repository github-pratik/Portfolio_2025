import Assets from './assets';
import { getSkills } from './skills';
import type { Certification } from '../types';

export const items: Array<Certification> = [
	{
		slug: 'aws-cloud-practitioner',
		name: 'AWS Certified Cloud Practitioner',
		description: 'Foundational certification validating understanding of AWS Cloud concepts, services, security, compliance, and the basics of AWS architecture.',
		issuer: 'Amazon Web Services',
		date: 'Jan 2025',
		credentialID: 'AWS04838007 ',
		credentialURL: 'https://www.credly.com/badges/3d0c6308-34d0-4e65-b84b-5202919ce18e/public_url',
		skills: ['Cloud Computing', 'AWS', 'Infrastructure as a Service'],
		logo: Assets.AWS,
		shortDescription: 'Validated knowledge of AWS Cloud fundamentals, services, and basic architecture principles.'
	},
	{
		slug: 'aws-cloud-graduate',
		name: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
		description: 'AWS Academy provides higher education institutions with a free, ready-to-teach cloud computing curriculum that prepares students to pursue industry-recognized certifications and in-demand cloud jobs. Our curriculum helps educators stay at the forefront of AWS Cloud innovation so that they can equip students with the skills they need to get hired in one of the fastest-growing industries.',
		issuer: 'Amazon Web Services',
		date: 'Jan 2023',
		credentialID: 'AWS04838007 ',
		credentialURL: 'https://www.credly.com/badges/cc1b9219-3364-484b-8e30-bd056eaeda99',
		skills:["Cloud Foundation", "AWS", "Cloud Features"],
		logo: Assets.AWS,
		shortDescription: 'AWS Academy offers cloud computing curriculum to help students gain in-demand skills and prepare for AWS certifications.'
	},
	{
		slug: 'aws-cloud',
		name: 'AWS Academy Graduate - AWS Academy Machine Learning Foundations',
		description: 'AWS Academy provides higher education institutions with a free, ready-to-teach cloud computing curriculum that prepares students to pursue industry-recognized certifications and in-demand cloud jobs. Our curriculum helps educators stay at the forefront of AWS Cloud innovation so that they can equip students with the skills they need to get hired in one of the fastest-growing industries.',
		issuer: 'Amazon Web Services',
		date: 'Jan 2023',
		credentialID: 'AWS04838007 ',
		credentialURL: 'https://www.credly.com/earner/earned/badge/cc1b9219-3364-484b-8e30-bd056eaeda99',
		skills:["Machine Learning", "AWS", "Artificial Intelligence", "Data Science"],
		logo: Assets.AWS,
		shortDescription: 'AWS Academy offers cloud computing curriculum to help students gain in-demand skills and prepare for AWS certifications.'
	},
	{
		slug: 'google-cloud-associate',
		name: 'Google Cloud Engineering track',
		description: 'Certification demonstrating ability to deploy applications, monitor operations, and maintain cloud projects on Google Cloud Platform.',
		issuer: 'Google Cloud',
		date: 'December 2021',
		credentialURL: 'https://www.linkedin.com/in/pshpatil/details/certifications/1735622454490/single-media-viewer/?profileId=ACoAACNgqTkBUN3uwR0UdPvVqIGHqF0JJYXuLAA',
		skills: ['Cloud Computing', 'Google Cloud', 'Infrastructure as a Service'],
		logo: Assets.GC,
		shortDescription: 'Demonstrated proficiency in deploying and managing applications on Google Cloud Platform.'
	},
	{
		slug: 'Linkedin-WebAPI',
		name: 'Introduction to Web APIs',
		description: 'This course offers a gentle introduction to APIs, covering topics such as understanding APIs, JSON, connecting to APIs, navigating documentation, making requests, using parameters, and handling errors and security. It includes hands-on challenges and a deep dive into working with the Giphy API.',
		issuer: 'Linkedin Learning',
		date: 'April 2024',
		credentialURL: 'https://www.linkedin.com/learning/certificates/3d00e5c6da9088a300e34d014178513cd802cbd34534aedba13e2ed28416bf42?u=42290089',
		skills: ['WebAPI'],
		logo: Assets.linkedin,
		shortDescription: 'An introductory course on APIs, teaching the fundamentals of API development and usagee.'
	}
];

export const title = 'Certifications';