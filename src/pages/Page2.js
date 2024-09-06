import React, { useState } from 'react';
import './Page2.css';

const gameOptions = {
    Games: [
        
		{ id: 16, imageUrl: 'https://imageio.forbes.com/specials-images/imageserve/5f5a2d56d0844debd57de789/Project-management-concept-with-icons-about-planning-tasks-and-milestones/960x0.jpg', name: '1' },
        { id: 15, imageUrl: 'https://imageio.forbes.com/specials-images/imageserve/5f5a2d56d0844debd57de789/Project-management-concept-with-icons-about-planning-tasks-and-milestones/960x0.jpg', name: '2' },
        { id: 14, imageUrl: 'https://imageio.forbes.com/specials-images/imageserve/5f5a2d56d0844debd57de789/Project-management-concept-with-icons-about-planning-tasks-and-milestones/960x0.jpg', name: '3' },
        { id: 13, imageUrl: 'https://imageio.forbes.com/specials-images/imageserve/5f5a2d56d0844debd57de789/Project-management-concept-with-icons-about-planning-tasks-and-milestones/960x0.jpg', name: '4' },
		{ id: 12, imageUrl: 'https://imageio.forbes.com/specials-images/imageserve/5f5a2d56d0844debd57de789/Project-management-concept-with-icons-about-planning-tasks-and-milestones/960x0.jpg', name: '5' },
        { id: 11, imageUrl: 'https://imageio.forbes.com/specials-images/imageserve/5f5a2d56d0844debd57de789/Project-management-concept-with-icons-about-planning-tasks-and-milestones/960x0.jpg', name: '6' },
        { id: 10, imageUrl: 'https://imageio.forbes.com/specials-images/imageserve/5f5a2d56d0844debd57de789/Project-management-concept-with-icons-about-planning-tasks-and-milestones/960x0.jpg', name: '7' },
        { id: 9, imageUrl: 'https://imageio.forbes.com/specials-images/imageserve/5f5a2d56d0844debd57de789/Project-management-concept-with-icons-about-planning-tasks-and-milestones/960x0.jpg', name: '8' },
		{ id: 8, imageUrl: 'https://imageio.forbes.com/specials-images/imageserve/5f5a2d56d0844debd57de789/Project-management-concept-with-icons-about-planning-tasks-and-milestones/960x0.jpg', name: '9' },
        { id: 7, imageUrl: 'https://imageio.forbes.com/specials-images/imageserve/5f5a2d56d0844debd57de789/Project-management-concept-with-icons-about-planning-tasks-and-milestones/960x0.jpg', name: '10' },
        { id: 6, imageUrl: 'https://imageio.forbes.com/specials-images/imageserve/5f5a2d56d0844debd57de789/Project-management-concept-with-icons-about-planning-tasks-and-milestones/960x0.jpg', name: '11' },
        { id: 5, imageUrl: 'https://imageio.forbes.com/specials-images/imageserve/5f5a2d56d0844debd57de789/Project-management-concept-with-icons-about-planning-tasks-and-milestones/960x0.jpg', name: '12' },
		{ id: 4, imageUrl: 'https://imageio.forbes.com/specials-images/imageserve/5f5a2d56d0844debd57de789/Project-management-concept-with-icons-about-planning-tasks-and-milestones/960x0.jpg', name: '13' },
        { id: 3, imageUrl: 'https://imageio.forbes.com/specials-images/imageserve/5f5a2d56d0844debd57de789/Project-management-concept-with-icons-about-planning-tasks-and-milestones/960x0.jpg', name: '14' },
        { id: 2, imageUrl: 'https://imageio.forbes.com/specials-images/imageserve/5f5a2d56d0844debd57de789/Project-management-concept-with-icons-about-planning-tasks-and-milestones/960x0.jpg', name: '15' },
        { id: 1, imageUrl: 'https://imageio.forbes.com/specials-images/imageserve/5f5a2d56d0844debd57de789/Project-management-concept-with-icons-about-planning-tasks-and-milestones/960x0.jpg', name: '16' },
    ],
    Minigames: [
        
        { id: 2, imageUrl: 'https://imageio.forbes.com/specials-images/imageserve/5f5a2d56d0844debd57de789/Project-management-concept-with-icons-about-planning-tasks-and-milestones/960x0.jpg', name: '1' },
    ],
};

const Page2 = () => {
    const [activeTab, setActiveTab] = useState('Games'); // Varsayılan olarak "Games" sekmesini aktif yap

    return (
        <div className="page2-container">
            <div className="page2-header-wrapper">
                <div className="page2-header">
                    <div 
                        className={`page2-tab ${activeTab === 'Games' ? 'active' : ''}`}
                        onClick={() => setActiveTab('Games')}
                    >
                        Games
                    </div>
                    <div 
                        className={`page2-tab ${activeTab === 'Minigames' ? 'active' : ''}`}
                        onClick={() => setActiveTab('Minigames')}
                    >
                        Minigames
                    </div>
                </div>
            </div>
            <div className="page2-grid-container">
                {gameOptions[activeTab].map(game => (
                    <div className="page2-game-option" key={game.id} data-game={game.id}>
                        <img src={game.imageUrl} alt={game.name} />
                        <p>{game.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page2;
