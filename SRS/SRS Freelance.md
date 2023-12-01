# iWork - Freelancing Website

**Document**: System Requirement Specification Document

**Title**: iWork - Freelancing Website


**Objective**:
- The website aims to offer an easy-to-navigate platform that enhances the user experience both for freelancers and clients. It will focus on simplicity, ensuring that users can efficiently browse services for the projects, hire freelancers, manage their tasks. Apart from project-specific functionalities, this website will nurture a community where freelancers can collaborate, exchange knowledge, and build their professional profiles.

**Scope**:
- The scope of this project is to develop a comprehensive freelancing website that connects businesses or individuals seeking freelancers with qualified professionals looking for freelance work opportunities.
- The website aims to provide a platform where freelancers can showcase their skills and experience to find suitable job opportunities.

## Overview

- A freelance website is a platform that connects freelancers with clients who need their services. These websites cover various job categories such as digital marketing, web development, content writing and many more.
- Freelancers can create profiles to showcase their skills and experience.

## Functional Requirement

**User and Workflows :**
- There will be four categories of Website users:
	- Visitor (Unregistered User)
	- Client
	- Freelancer
	- Administrator (Admin)
- Visitor will be able to just see the services offered by freelancer at what rate and can browse through many categories.
- Clients are businesses or individuals who need to hire freelancers for the projects.
- Freelancers are individuals who offer their services to clients on a freelance basis.
- Admins are responsible for managing the website and ensuring that it runs smoothly.

- Workflows:
	- Client Workflow
		- User Registration:
			Clients register on the platform by providing necessary information such as name, email, and password.
		- Profile Creation:
			Clients create and complete their profiles, adding details like company information, project history, and contact details.
		- Browsing Freelancers:
			Clients search and browse through the profiles of freelancers based on skills, ratings, and past work.
		- Freelancer Evaluation:
			Clients review freelancer profiles, past work, and bids to make an informed decision.
		- Freelancer Selection:
			Clients choose a freelancer for their project and award them the job.
		- Communication and Collaboration:
			Clients and freelancers communicate within the platform, discussing project details, milestones, and progress.
		- Payment Setup:
			Clients set up project payments using the platform's payment system, which may include funding an escrow account.
		- Project Completion:
			Clients review and approve the completed project, releasing funds to the freelancer.

	- Freelancer Workflow
		- User Registration:
			Freelancers register on the platform by providing necessary information such as name, email, and password.
		- Profile Creation:
			Freelancers complete their profiles, adding details like skills, experience, portfolio, and hourly rates.
		- Collaboration:
			Frelancer can collaborate/match with fellow freelancer as team and add post in catlog.
		- Catalog: 
			Freelancer will post all his skills and hourly rates so that it can be visited by clients.
		- Client Interaction:
			Freelancers engage with clients through messages or other communication tools to discuss project details.
		- Project Commencement:
			Once project awarded, freelancers begin working on the project, updating clients on progress.
		- Milestone Completion:
			Freelancers may submit completed project milestones for client review and approval.
		- Payment Release:
			Upon project completion and client approval, funds are released from escrow to the freelancer.
		- Client Feedback:
			Freelancers receive feedback and ratings from clients, contributing to their overall profile reputation.

	- Admin Workflow	
		- Login to Admin Dashboard:
			The admin logs in to the admin dashboard using secure credentials.
		- User Management:
			Admins have access to user management tools to review and manage user accounts, including verifying new registrations and addressing any account-related issues.
		- Catalog Oversight:
			Admins monitor the portfolio posted on the platform, ensuring they adhere to guidelines and policies.
		- Freelancer Verification:
			Admins verify and review freelancer profiles, ensuring they meet platform standards and have accurate information.
		- Client Interaction Oversight:
			Admins oversee client-freelancer interactions to ensure they align with platform policies and standards of professionalism.
		- Dispute Resolution:
			In the event of disputes between clients and freelancers, admins intervene to facilitate resolution, ensuring fairness and adherence to platform rules.
		- Content Moderation:
			Admins monitor and moderate content on the platform, including project descriptions, services and communication, to prevent any violations of guidelines.
		- Security Checks:
			Regular security checks are conducted by admins to identify and address potential vulnerabilities or threats to the platform.
		- Payment System Oversight:
			Admins oversee the platform's payment system, ensuring it functions correctly, addressing payment-related issues, and managing escrow accounts.
		- Analytics and Reporting:
			Admins utilize analytics tools to gather insights into platform performance, user behavior, and any emerging trends, helping in decision-making and future improvements.
		- Feature Management:
			Admins manage platform features, including updates, additions, or removals, to enhance user experience and align with business goals.
		- Communication with Users:
			Admins communicate with users, addressing inquiries, providing assistance, and disseminating important announcements.
		- Compliance and Legal Matters:
			Admins ensure that the platform complies with relevant laws and regulations, handling legal matters and cooperating with law enforcement if necessary.
		- Platform Optimization:
			Admins work on optimizing the platform's performance, addressing any technical issues, and collaborating with development teams for enhancements.
		- Documentation and Policies:
			Admins update and maintain documentation, including terms of service, policies, and guidelines, ensuring clarity for users.

	- Visitor Workflow
		- Homepage Landing:
			The visitor arrives on the freelancer's website homepage, which provides an overview of the platform's offerings.
		- Registration/Sign-up Option:
			The visitor sees an option to register or sign up to access additional features and functionalities.
		- Browsing Catalog:
			Without registration, visitors can browse available freelancers portfolios to get a sense of the platform's offerings.
		- Platform Overview:
			Visitors explore information about the platform, its mission, and key features to understand its purpose and benefits.
		- Featured Projects/Freelancers:
			The website may showcase trending skills and top freelancers to attract the visitor's attention and highlight the platform's strengths.
		- Testimonials and Reviews:
			Visitors may encounter testimonials or reviews from previous clients and freelancers, building trust in the platform.
		- FAQ and Help Section:
			A dedicated FAQ section provides answers to common questions, helping visitors understand the platform's functionality.
		- Contact Information:
			Contact details or a contact form are available for visitors to reach out for inquiries or assistance.
		- Registration/Sign-up (Optional):
			Visitors interested in posting portfolio in catalog can choose to register by providing basic information.
		- Exploring Freelancer Profiles:
			Visitors may explore freelancer profiles to see their skills, portfolios, and previous work.
		- Portfolio Posting Information:
			The visitor learns about the process of posting a portfolio, including the required details and steps involved.
		-  Resources:
			The website may provide blog posts, or guides to help visitors understand the freelance industry and improve their projects.
		- Call to Action (CTA):
			Throughout the website, there are clear calls to action encouraging visitors to register, post , or explore freelancers.
		- Social Media Integration:
			Visitors may find links to the platform's social media profiles, allowing them to connect and stay updated on platform activities.
		- Exit or Registration:
			Visitors can choose to exit the website or proceed with registration based on their level of interest.


**User Registration and Login :**
- The system will allow to register a new Freelancer.
- The system will allow existing Freelancer or Client to log-on their account.
- The system will provide general help information.
- Log In
  - Input: The user inputs his/her username and password and selects to log in.
  - Action: The system will verify the user information with the database.
  - Output: The system will redirect the user to the appropriate menu page.


## Non-functional Requirement

### Security

- The website should have strong security measures to protect user data and prevent unauthorized access.
- 

###Reliability

- The website should be highly available with minimal downtime and should be able to handle high traffic volumes without crashing.
- The sites response time should be quick as possible as and it should be able to load balance the server.
