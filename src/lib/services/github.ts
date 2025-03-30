import type { Project, Skill } from '$lib/types';
import { getSkills } from '$lib/data/skills';
import Assets from '$lib/data/assets';

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  created_at: string;
  updated_at: string;
  homepage: string;
  language: string;
  topics: string[];
  fork: boolean;
  stargazers_count: number; // Number of stars the repository has
}

/**
 * Fetches repositories from GitHub for a given username
 * @param username GitHub username
 * @param minStars Minimum number of stars required (default: 0)
 * @returns Array of repositories
 */
export async function fetchGitHubRepos(username: string, minStars: number = 0): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc&per_page=100`);
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    const repos = await response.json();
    return repos
      .filter((repo: GitHubRepo) => !repo.fork) // Filter out forked repositories
      .filter((repo: GitHubRepo) => repo.stargazers_count >= minStars); // Filter by minimum stars
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return [];
  }
}

/**
 * Maps GitHub repository languages to skill slugs
 * @param language GitHub repository language
 * @returns Array of skill slugs
 */
function mapLanguageToSkills(language: string, topics: string[]): string[] {
  const skillMap: Record<string, string[]> = {
    JavaScript: ['JavaScript'],
    TypeScript: ['TypeScript'],
    HTML: ['HTML'],
    CSS: ['CSS'],
    Python: ['Python'],
    Java: ['Java'],
    'C++': ['C++'],
    C: ['C'],
    'C#': ['Csharp'],
    PHP: ['PHP'],
    Ruby: ['Ruby'],
    Swift: ['Swift'],
    Kotlin: ['Kotlin'],
    Go: ['Go'],
    Rust: ['Rust'],
    Dart: ['Dart'],
    Svelte: ['Svelte']
  };

  const result = new Set<string>();
  
  // Add language-based skills
  if (language && skillMap[language]) {
    skillMap[language].forEach(skill => result.add(skill));
  }
  
  // Add topic-based skills
  if (topics && topics.length > 0) {
    topics.forEach(topic => {
      // Map common topics to skills
      const normalizedTopic = topic.toLowerCase();
      if (normalizedTopic.includes('react')) result.add('React');
      if (normalizedTopic.includes('vue')) result.add('VueJs');
      if (normalizedTopic.includes('angular')) result.add('Angular');
      if (normalizedTopic.includes('node')) result.add('Nodejs');
      if (normalizedTopic.includes('express')) result.add('ExpressJs');
      if (normalizedTopic.includes('mongodb')) result.add('MongoDB');
      if (normalizedTopic.includes('mysql')) result.add('SQL');
      if (normalizedTopic.includes('postgres')) result.add('PostgreSQL');
      if (normalizedTopic.includes('firebase')) result.add('Firebase');
      if (normalizedTopic.includes('aws')) result.add('AWS');
      if (normalizedTopic.includes('docker')) result.add('Docker');
      if (normalizedTopic.includes('kubernetes')) result.add('Kubernetes');
      if (normalizedTopic.includes('redux')) result.add('Redux');
      if (normalizedTopic.includes('tailwind')) result.add('Tailwind');
      if (normalizedTopic.includes('bootstrap')) result.add('Bootstrap');
      if (normalizedTopic.includes('sass')) result.add('Sass');
    });
  }
  
  return Array.from(result);
}

/**
 * Converts GitHub repositories to Project objects
 * @param repos GitHub repositories
 * @returns Array of Project objects
 */
export function convertReposToProjects(repos: GitHubRepo[]): Project[] {
  return repos.map((repo, index) => {
    // Map language to skills
    const skillSlugs = mapLanguageToSkills(repo.language, repo.topics);
    
    // Generate a slug from the repo name
    const slug = repo.name.toLowerCase().replace(/\s+/g, '-');
    
    // Determine project type based on topics or make a best guess
    let type = 'Personal Project';
    let category = 'Self Learning';
    
    if (repo.topics.includes('academic') || repo.topics.includes('coursework')) {
      type = 'Academic Project';
      category = 'Academic';
    } else if (repo.topics.includes('hackathon')) {
      type = 'Hackathon Project';
      category = 'Hackathon';
    } else if (repo.topics.includes('portfolio')) {
      type = 'Portfolio';
      category = 'Showcase';
    } else if (repo.topics.includes('template') || repo.topics.includes('boilerplate')) {
      type = 'Template';
      category = 'Utility';
    }
    
    // Create links array
    const links = [{ to: repo.html_url, label: 'GitHub' }];
    
    // Add homepage link if available
    if (repo.homepage) {
      links.push({ to: repo.homepage, label: 'Live Demo' });
    }
    
    // Create a Project object
    return {
      slug,
      name: repo.name,
      description: repo.description || `A ${type.toLowerCase()} built with ${repo.language || 'various technologies'}.`,
      shortDescription: repo.description || `A ${type.toLowerCase()} built with ${repo.language || 'various technologies'}.`,
      logo: Assets.github, // Default to GitHub logo
      links,
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, // Random color
      type,
      category,
      skills: getSkills(...skillSlugs),
      period: {
        from: new Date(repo.created_at),
        to: new Date(repo.updated_at)
      },
      stars: repo.stargazers_count, // Add star count
      isFromGitHub: true // Flag as GitHub project
    };
  });
}