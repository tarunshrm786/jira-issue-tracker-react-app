React Jira Issue Tracker

Setup:-

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

Copy code
npm start
The application will run on http://localhost:3000 by default.

Demo
View the live demo here.
    
Dependencies
axios: ^0.21.1
react: ^17.0.2
react-dom: ^17.0.2
react-scripts: 4.0.3
