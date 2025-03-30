import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';
import { get } from 'mongoose';

export const items: Array<Project> = [
	{
		slug: "weather-page",
		color: "#3498db",
		description: "WeatherPage is a web application that provides users with real-time weather information for any location worldwide. By entering a city name, users can retrieve current weather conditions, including temperature, humidity, and weather descriptions. The application features a clean and responsive user interface, ensuring accessibility across various devices. Developed as part of a self-learning initiative, this project demonstrates proficiency in web development, API integration, and responsive design.",
		shortDescription: "A web app displaying real-time weather information for any location.",
		links: [
		  {
			to: "https://github.com/github-pratik/WeatherPage",
			label: "GitHub"
		  },
		  {
		  		to: "https://pratikweatherpage.netlify.app/",
				label: "Live Demo"
		  }
		],
		logo: Assets.weatherpage,
		name: "WeatherPage",
		skills:getSkills("HTML", "CSS", "JavaScript", "REST API"),
		type: "Web Application",
		category: "Self Learning",
		gifUrl: "",
		screenshots: []
	  },
	  
	{
		"slug": "instant-market",
		"color": "#2ecc71",
		"description": "Instant Market is a web-based marketplace platform designed specifically for George Mason University (GMU) students to buy and sell items within the university community. The platform facilitates the exchange of textbooks, electronics, furniture, and other essentials, making it easier for students to find what they need at affordable prices. Key features include user authentication with student and seller roles, product listings categorized for easy navigation, a shopping cart system, order history tracking, AI-powered product recommendations, search and filter functionality, secure payment processing, and receipt generation. Developed as part of the CS632 academic project, this initiative showcases proficiency in full-stack web development, user authentication, and e-commerce functionalities.",
		"shortDescription": "A web-based marketplace for GMU students to buy and sell items within the university community.",
		"links": [
		  {
			"to": "https://github.com/github-pratik/instant_Market",
			"label": "GitHub"
		  }
		],
		"logo": Assets.gmuinstant,
		"name": "Instant Market",
		"skills": getSkills("HTML", "CSS", "JavaScript","UI/UX", "Bootstrap" ),
		"type": "Web Application",
		"category": "Academic Project",
		"gifUrl": "https://raw.githubusercontent.com/github-pratik/instant_Market/main/assets/demo.gif",
		"screenshots": [
		  {
			"label": "Home Page",
			"src": "https://github.com/github-pratik/instant_Market/blob/main/assets/home_page.png"
		  },
		  {
			"label": "Product Listing",
			"src": "https://github.com/github-pratik/instant_Market/blob/main/assets/product_listing.png"
		  },
		  {
			"label": "Shopping Cart",
			"src": "https://github.com/github-pratik/instant_Market/blob/main/assets/shopping_cart.png"
		  }
		]
	},
	  
	{
		slug: 'Publication-Management-System',
		color: '#4169E1',
		description: 'A Java-based project developed for CS550 course. This repository demonstrates advanced programming concepts and software engineering principles.',
		shortDescription: 'Java-based academic project showcasing advanced programming concepts and software engineering principles.',
		links: [{ to: 'https://github.com/github-pratik/Cs550_Project', label: 'GitHub' }],
		logo: Assets.Java,
		name: 'Publication Management System',
		skills: getSkills('Java', 'OracleDB','Github', "Eclipse"),
		type: 'Management System',
		category: 'Academic Project',
		screenshots: [
			{
				label: 'screen 1',
				src: '/Users/shashikant/Personal_Proj/Portfolio_temp/Temp_portfolio/static/logos/ioscodepath.jpg'
			}
		]
	},
	{
		slug: "discount-calculator",
		color: "#3498db",
		description: "Discount Calculator is a simple yet interactive iOS application built using Swift, designed to help users quickly calculate the final price of a product after applying a discount. The app allows users to input the original price and adjust the discount percentage using a slider, instantly displaying the discounted price in real-time. One of the unique features of the app is its dynamic background color transitions, which change as the user interacts with the slider, adding a fun and engaging visual element to the experience. Developed as part of a self-learning initiative during the CodePath iOS development course, this project showcases core concepts such as responsive UI design, Swift programming fundamentals, and user-centric functionality. It's an ideal example of applying basic mobile development skills to create a practical, real-world tool.",
		shortDescription: "An iOS app for calculating discounted prices with dynamic UI.",
		links: [
		  {
			"to": "https://github.com/github-pratik/App_codepath",
			"label": "GitHub"
		  }
		],
		logo: Assets.discountcalc,
		name: "Discount Calculator",
		skills: getSkills('swift', "IOS developement", "UI/UX"),
		type: "Mobile Application",
		category: "CodePath",
		gifUrl: "https://raw.githubusercontent.com/github-pratik/App_codepath/main/ioscodepath.gif",
		screenshots: [
		  {
			label: "Demo of Discount Calculator",
			src: "https://github.com/github-pratik/App_codepath/blob/main/ioscodepath.gif"
		  }
		]
	},
	{
		slug: "trippin-on-cats",
		color: "#e67e22",
		description: "Trippin' on Cats is an interactive web application that enables users to explore random cat breeds, ban specific attributes they prefer not to see, and keep track of previously viewed cats. Developed as part of a self-learning initiative during the CodePath Web Development course, this project showcases proficiency in responsive web design, API integration, and user-centric functionality. The application offers a dynamic and engaging experience for cat enthusiasts looking to discover and learn about various cat breeds.",
		shortDescription: "A web app for discovering random cat breeds with customizable filters through API.",
		links: [
		  {
			to: "https://github.com/github-pratik/CodePath-week5-trippin-on-Cats",
			label: "GitHub"
		  }
		],
		logo: Assets.codepath,
		name: "Trippin' on Cats",
		skills: getSkills("JavaScript", "React", "REST API", "UI/UX"),
		type: "Web Application",
		category: "CodePath",
		gifUrl: "https://raw.githubusercontent.com/github-pratik/CodePath-week5-trippin-on-Cats/main/Project%204.gif",
		screenshots: [
		  {
			label: "Demo of Trippin' on Cats",
			src: "https://github.com/github-pratik/CodePath-week5-trippin-on-Cats/blob/main/Project%204.gif"
		  }
		]
	},
	  
	{
		slug: 'slick-portfolio-svelte',
		color: '#ff3e00',
		description:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		shortDescription:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		logo: Assets.Svelte,
		name: 'Portfolio',
		skills: getSkills('Svelte', 'TypeScript', 'Tailwind', 'Sass', 'Github'),
		type: 'Website Template',
		category: "Self Learning",
		gifUrl: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzZiMzIwMDk0ZDFmMzBkMzFkMDQxNjQ3YzM5ZWJjNmRhZDI1YmNhYiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/jTNG0ANrD5TLxe5mYm/giphy.gif',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '4',
				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '5',
				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '6',
				src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			}
		]
	},
	{
		slug: 'game-dashboard',
		color: '#1abc9c', // Adjust this to match your desired theme
		description:
			'Game Dashboard is a web application developed as part of the CodePath WEB102 prework. It serves as a platform for Sea Monster Crowdfunding, showcasing information about the games they have funded. The dashboard provides an overview of funded and unfunded games, total contributions, funds raised, and highlights the top two most funded games. Users can filter the game listings based on their funding status.',
		shortDescription:
			'A web-based dashboard displaying crowdfunding statistics for Sea Monster-funded games.',
		links: [
			{ to: 'https://github.com/github-pratik/WEB102_Codepath', label: 'GitHub' }
		],
		logo: Assets.codepath,
		name: 'Game Dashboard',
		skills: getSkills('JavaScript','React', 'HTML', 'CSS', 'UI/UX'),
		type: 'Web Application',
		category: 'CodePath',
		gifUrl: "https://raw.githubusercontent.com/github-pratik/WEB102_Codepath/main/WEbPrework_codepath.gif"
	},
	{
		slug: "tech-community-events",
		color: "#1abc9c",
		description: "Tech Community Events is a responsive web application that serves as an event board, showcasing various technology-related community events such as workshops, meetups, and conferences. Users can explore event details and register through direct links. The platform features a unique theme tailored to specific tech communities and presents at least 10 unique events in a responsive card format. Developed as part of a self-learning initiative, this project demonstrates proficiency in responsive web design, user-centric functionality, and interactive UI elements.",
		"shortDescription": "A responsive web app displaying tech community events with direct registration links.",
		links: [
		  {
			to: "https://github.com/github-pratik/web101_Project_1",
			label: "GitHub"
		  }
		],
		logo: Assets.codepath,
		name: "Tech Community Events",
		skills:getSkills ("HTML", "CSS", "JavaScript", "React", "UI/UX"),
		type: "Web Application",
		category: "CodePath",
		gifUrl: "https://raw.githubusercontent.com/github-pratik/web101_Project_1/main/web101.gif",
		screenshots: [
		  {
			label: "Demo of Tech Community Events",
			src: "https://github.com/github-pratik/web101_Project_1/blob/main/web101.gif"
		  }
		]
	  },
	  {
		slug: "api-gateway-with-microservices",
		color: "#34495e",
		description: "API Gateway with Microservices is a project that implements a microservices architecture with an API Gateway handling authentication, rate limiting, service discovery, request routing, and monitoring. This setup provides a single entry point for multiple microservices, simplifying client interactions and enhancing security. The project demonstrates the integration of various microservices through a centralized gateway, showcasing proficiency in microservices architecture, API management, and related technologies.",
		"shortDescription": "A microservices architecture with an API Gateway managing authentication, routing, and monitoring.",
		links: [
		  {
			to: "https://github.com/github-pratik/API-Gateway-with-Microservices",
			label: "GitHub"
		  }
		],
		logo: Assets.api,
		name: "API Gateway with Microservices",
		skills: getSkills("REST API", "API Gateway", "Authentication", "Service Discovery", "Python", "Docker", "Redis"),
		type: "Software Architecture",
		category: "Self Learning",
		gifUrl: "https://raw.githubusercontent.com/github-pratik/API-Gateway-with-Microservices/main/images/demo.gif",
		screenshots: [
		  {
			"label": "Architecture Diagram",
			"src": "https://github.com/github-pratik/API-Gateway-with-Microservices/blob/main/images/architecture.png"
		  },
		  {
			"label": "API Gateway Dashboard",
			"src": "https://github.com/github-pratik/API-Gateway-with-Microservices/blob/main/images/dashboard.png"
		  }
		]
	  },
	  {
		slug: "cloud-project-train-bus",
		color: "#3498db",
		description: "Cloud Project Train Bus is a web-based application designed to facilitate the booking and management of train and bus tickets. The platform offers user authentication, allowing users to register and log in to access personalized features. Users can view available train and bus schedules, book tickets, and manage their bookings through a user-friendly interface. The application also includes an admin panel for managing transportation schedules, user bookings, and other administrative tasks. Developed as part of a self-learning initiative, this project demonstrates proficiency in full-stack web development, database management, and user interface design.",
		shortDescription: "A web application for booking and managing train and bus tickets.",
		links: [
		  {
			to: "https://github.com/github-pratik/Cloud_Project_Train_Bus",
			label: "GitHub",
		  },
		  {
			to: "https://www.youtube.com/watch?v=xt1Z7s5zpJM",
			label: "Demo Video",
		  }
		],
		logo: Assets.ticketbooking,
		name: "AWS Ticket Booking System",
		skills: getSkills("php", "MySQL", "HTML", "CSS","AWS"),
		type: "Web Application",
		category: "Self Learning",
		gifUrl: "https://raw.githubusercontent.com/github-pratik/Cloud_Project_Train_Bus/main/demo.gif",
		screenshots: [
		  {
			label: "Home Page",
			src: "https://github.com/github-pratik/Cloud_Project_Train_Bus/blob/main/screenshots/home_page.png"
		  },
		  {
			label: "Booking Page",
			src: "https://github.com/github-pratik/Cloud_Project_Train_Bus/blob/main/screenshots/booking_page.png"
		  },
		  {
			label: "Admin Dashboard",
			src: "https://github.com/github-pratik/Cloud_Project_Train_Bus/blob/main/screenshots/admin_dashboard.png"
		  }
		]
	  },
	  {
		slug: "fashion-cube",
		color: "#9b59b6",
		"description": "Fashion Cube is a React-based e-commerce website designed to provide users with a seamless online shopping experience. The platform features a modern and responsive user interface, showcasing various fashion products across multiple categories. Users can browse products, view detailed descriptions, add items to their cart, and proceed to checkout. The project emphasizes dynamic rendering and state management using React, offering a smooth and interactive user experience. Developed as part of a self-learning initiative, this project demonstrates proficiency in front-end web development, React framework, and e-commerce website design.",
		shortDescription: "A React-based e-commerce website for fashion products.",
		links: [
		  {
			"to": "https://github.com/github-pratik/fashion-cube",
			"label": "GitHub"
		  }
		],
		logo: Assets.fashion,
		name: "Fashion Cube",
		skills: getSkills("React", "JavaScript","HTML", "CSS", "Web Development", "UI/UX"),
		type: "Web Application",
		category: "Self Learning",
		gifUrl: "https://github.com/github-pratik/fashion-cube/blob/main/demo.gif",
		screenshots: [
		  {
			label: "Home Page",
			src: "https://github.com/github-pratik/fashion-cube/blob/main/screenshots/home_page.png"
		  },
		  {
			label: "Product Page",
			src: "https://github.com/github-pratik/fashion-cube/blob/main/screenshots/product_page.png"
		  },
		  {
			label: "Shopping Cart",
			src: "https://github.com/github-pratik/fashion-cube/blob/main/screenshots/shopping_cart.png"
		  }
		]
	  },
	  {
		"slug": "web-scraping-and-classification",
		"color": "#e74c3c",
		"description": "Web Scraping and Classification is a Python-based project that automates the process of fetching news articles from a specified website, extracting their headlines and content, and classifying them into different categories using machine learning techniques. The project utilizes web scraping tools to gather data and applies models such as K-Nearest Neighbors and Support Vector Machine for text classification. Developed as part of a self-learning initiative, this project demonstrates proficiency in web scraping, data preprocessing, and machine learning model implementation.",
		"shortDescription": "A Python project for scraping news articles and classifying them using machine learning.",
		"links": [
		  {
			"to": "https://github.com/github-pratik/Web_Scraping_and_Classification",
			"label": "GitHub"
		  }
		],
		logo: Assets.webscrapping,
		name: "Web Scraping and Classification",
		skills:getSkills("Python", "WebScraping", "ML", "Deep Learning","Numpy", "Text Classification"),
		type: "Data Science Project",
		category: "Self Learning",
		gifUrl: "https://github.com/github-pratik/Web_Scraping_and_Classification/blob/main/Screenshots/demo.gif"
	},
	{
		slug: "ewaste",
		color: "#16a085",
		description: "Ewaste is a Python-based project aimed at addressing the challenges associated with electronic waste management. The project focuses on developing solutions for the collection, recycling, and proper disposal of electronic waste to minimize environmental impact. By leveraging Python's capabilities, Ewaste seeks to create efficient systems for tracking and managing e-waste, promoting sustainable practices in electronic waste handling. This initiative demonstrates proficiency in Python programming and a commitment to environmental sustainability.",
		shortDescription: "A Python project focused on electronic waste management solutions.",
		links: [
		  {
			to: "https://github.com/github-pratik/Ewaste",
			label: "GitHub"
		  }
		],
		logo: Assets.ewaste,
		name: "Ewaste",
		skills:getSkills("Python","Computer Vision","OpenCV","Numpy","ML","Deep Learning"),
		type: "Data Science Project",
		category: "Self Learning"
	  }
	  
		  
	
];

export const title = 'Projects';
