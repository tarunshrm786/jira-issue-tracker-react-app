import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../IssueList.css';

const IssueList = () => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [typeFilter, setTypeFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [assigneeFilter, setAssigneeFilter] = useState('');
  const issuesPerPage = 5;

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await axios.get('https://tarunshrm768.atlassian.net/api/rest/api/3/search', {
          auth: {
            username: process.env.REACT_APP_JIRA_USERNAME,
            password: process.env.REACT_APP_JIRA_PASSWORD,
          },
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setIssues(response.data.issues);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchIssues();
  }, []);

  const indexOfLastIssue = currentPage * issuesPerPage;
  const indexOfFirstIssue = indexOfLastIssue - issuesPerPage;
  //const currentIssues = issues.slice(indexOfFirstIssue, indexOfLastIssue);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleFilterChange = (e, filterType) => {
    const value = e.target.value;
    if (filterType === 'type') setTypeFilter(value);
    if (filterType === 'status') setStatusFilter(value);
    if (filterType === 'assignee') setAssigneeFilter(value);
    setCurrentPage(1);  // Reset to first page when filter changes
  };

  const filteredIssues = issues.filter(issue => {
    return (
      (typeFilter ? issue.fields.issuetype.name === typeFilter : true) &&
      (statusFilter ? issue.fields.status.name === statusFilter : true) &&
      (assigneeFilter ? issue.fields.assignee?.displayName === assigneeFilter : true)
    );
  });

  const displayedIssues = filteredIssues.slice(indexOfFirstIssue, indexOfLastIssue);

  if (loading) return <p>Loading issues...</p>;
  if (error) return <p>Error: {error}</p>;

  const uniqueTypes = [...new Set(issues.map(issue => issue.fields.issuetype.name))];
  const uniqueStatuses = [...new Set(issues.map(issue => issue.fields.status.name))];
  const uniqueAssignees = [...new Set(issues.map(issue => issue.fields.assignee?.displayName).filter(Boolean))];

  return (
    <div className="issue-list-container">

      <div className="filters">
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="type-filter" className='label-text'>Type: </label>
                <select id="type-filter" onChange={(e) => handleFilterChange(e, 'type')} value={typeFilter}>
                  <option value="">All Types</option>
                  {uniqueTypes.map(type => <option key={type} value={type}>{type}</option>)}
                </select>
              </td>
              <td>
                <label htmlFor="status-filter" className='label-text'>Status: </label>
                <select id="status-filter" onChange={(e) => handleFilterChange(e, 'status')} value={statusFilter}>
                  <option value="">All Statuses</option>
                  {uniqueStatuses.map(status => <option key={status} value={status}>{status}</option>)}
                </select>
              </td>
              <td>
                <label htmlFor="assignee-filter" className='label-text'>Assignee: </label>
                <select id="assignee-filter" onChange={(e) => handleFilterChange(e, 'assignee')} value={assigneeFilter}>
                  <option value="">All Assignees</option>
                  {uniqueAssignees.map(assignee => <option key={assignee} value={assignee}>{assignee}</option>)}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <table className="issue-table">
        <thead>
          <tr>
            <th>Key</th>
            <th>Summary</th>
            <th>Type</th>
            <th>Status</th>
            <th>Assignee</th>
          </tr>
        </thead>
        <tbody>
          {displayedIssues.map(issue => (
            <tr key={issue.id}>
              <td>{issue.key}</td>
              <td>{issue.fields.summary}</td>
              <td>{issue.fields.issuetype.name}</td>
              <td>{issue.fields.status.name}</td>
              <td>{issue.fields.assignee ? issue.fields.assignee.displayName : 'Unassigned'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredIssues.length / issuesPerPage) }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default IssueList;
