import type { Color } from './utils/colors';

export enum Platform {
	GitHub = 'github',
	StackOverflow = 'stackoverflow',
	Twitter = 'twitter',
	Linkedin = 'linkedin',
	Email = 'email',
	Facebook = 'facebook',
	Youtube = 'youtube'
}

export type Icon = `i-${string}-${string}`;

export enum ContractType {
	FullTime = 'Full-time',
	PartTime = 'Part-time',
	Internship = 'Internship'
}

export type Asset = string | { light: string; dark: string };

export interface Item<S extends string = string> {
	slug: S;
	name: string;
	logo: Asset;
	shortDescription: string;
	description: string;
	screenshots?: Array<{ src: string; label: string }>;
	gifUrl?: string; // Optional GIF URL as an alternative to screenshots
}

export interface Link {
	to: string;
	label: string;
	newTab?: boolean;
}

export interface IconLink extends Link {
	icon: Asset;
}

export interface SkillCategory<S extends string = string> {
	slug: S;
	name: string;
}

export interface Skill<S extends string = string> extends Omit<Item<S>, 'shortDescription'> {
	color: string;
	category?: SkillCategory;
}

export interface Project<S extends string = string> extends Item<S> {
	category: any;
    links: Array<Link>;
    color: Color;
    period?: { // ✅ Make period optional
        from: Date;
        to?: Date;
    };
    type: string;
    skills: Array<Skill<S>>;
    stars?: number; // Number of GitHub stars (if from GitHub)
    isFromGitHub?: boolean; // Flag to identify GitHub projects
}


export interface Experience<S extends string = string> extends Omit<Project<S>, 'period' | 'category'> {
	company: string;
	location: string;
	contract: ContractType;
	formattedPeriod: string; // ✅ Using formattedPeriod instead of period
}



export interface Education<S extends string = string> extends Item<S> {
	organization: string;
	location: string;
	formattedPeriod?: string; // ✅ Add this new field
	subjects: Array<string>;
	degree: string;
}

export interface Certification<S extends string = string> extends Item<S> {
	issuer: string;
	date: string;
	credentialID?: string;
	credentialURL?: string;
	skills?: Array<string>;
}
