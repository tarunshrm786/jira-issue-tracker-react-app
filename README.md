React Jira Issue Tracker
Overview
This React application connects to Jira's REST API to fetch and display issues for a specific project. It provides a user-friendly interface to view issue details such as issue key, summary, issue type, status, and assignee. Additionally, it includes error handling, loading states, and environment variable management for secure API integration.

Features
Fetches and displays issues from a Jira project
User-friendly interface for issue details
Loading and error states
Environment variable management for secure API integration
Setup
Clone the repository:
bash
Copy code
git clone https://github.com/yourusername/react-jira-issue-tracker.git
Navigate to the project directory:
bash
Copy code
cd react-jira-issue-tracker
Install dependencies:
bash
Copy code
npm install
Create a .env file in the root directory:
plaintext
Copy code
REACT_APP_JIRA_BASE_URL=https://your-domain.atlassian.net
REACT_APP_JIRA_API_TOKEN=your_api_token
REACT_APP_JIRA_PROJECT_KEY=your_project_key
Replace placeholders with your actual Jira base URL, API token, and project key.

Run the application:
bash
Copy code
npm start
The application will run on http://localhost:3000 by default.

Demo
View the live demo here.

Folder Structure
arduino
Copy code
react-jira-issue-tracker/
├── public/
└── src/
    ├── components/
    │   ├── IssueList.js
    │   ├── Issue.js
    │   └── ...
    ├── services/
    │   └── JiraService.js
    ├── App.js
    ├── App.css
    ├── index.js
    └── ...
Dependencies
axios: ^0.21.1
react: ^17.0.2
react-dom: ^17.0.2
react-scripts: 4.0.3
Resources
Jira REST API Documentation
Axios Documentation
Create React App Documentation
