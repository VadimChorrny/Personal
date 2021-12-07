import React from 'react';
import '../../Styles/Works.scss'

const Works = () => {
    return (
        <div className="works-containeer">
            <div className="block block-name">
                <h1>Works</h1>
            </div>
            <div className="block block-work-list">
                <div className="work">
                    <h2>Dev-Hub</h2>
                    <h3>Landing for 'Dev-Hub' Company</h3>
                    <button><a href="https://github.com/devhub-org/devhub-website" target="_blank">View</a></button>
                </div>
                <div className="work">
                    <h2>Bookkeeping</h2>
                    <h3>Landing for privacy humen</h3>
                    <button><a href="https://github.com/devhub-org/Bookkeeping.git" target="_blank">View</a></button>
                </div>
                <div className="work">
                    <h2>Task Manager</h2>
                    <h3>Copy Trello app</h3>
                    <button><a href="https://github.com/devhub-org/Task-Manager" target="_black">View</a></button>
                </div>
            </div>
        </div>
    );
}

export default Works;
