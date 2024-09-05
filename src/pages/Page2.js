import React, { useState } from 'react';
import './Page2.css';

const gameOptions = {
    Games: [
        
		{ id: 16, imageUrl: 'https://cdn.hamsterkombat.io/mow_trim/image.webp', name: 'Mow and Trim' },
        { id: 15, imageUrl: 'https://cdn.hamsterkombat.io/polysphere/image.webp', name: 'Polysphere' },
        { id: 14, imageUrl: 'https://cdn.hamsterkombat.io/twerk/image.webp', name: 'Twerk Race 3D' },
        { id: 13, imageUrl: 'https://cdn.hamsterkombat.io/merge_away/image.webp', name: 'Merge Away' },
		{ id: 12, imageUrl: 'https://cdn.hamsterkombat.io/fluff/image.webp', name: 'Fluff Crusade' },
        { id: 11, imageUrl: 'https://cdn.hamsterkombat.io/zoopolis/image.webp', name: 'Zoopolis' },
        { id: 10, imageUrl: 'https://cdn.hamsterkombat.io/tile_trio/image.webp', name: 'Tile Trio' },
        { id: 9, imageUrl: 'https://cdn.hamsterkombat.io/mud_racing/image.webp', name: 'Mud Racing' },
		{ id: 8, imageUrl: 'https://cdn.hamsterkombat.io/mow_trim/image.webp', name: 'Mow and Trim' },
        { id: 7, imageUrl: 'https://cdn.hamsterkombat.io/polysphere/image.webp', name: 'Polysphere' },
        { id: 6, imageUrl: 'https://cdn.hamsterkombat.io/twerk/image.webp', name: 'Twerk Race 3D' },
        { id: 5, imageUrl: 'https://cdn.hamsterkombat.io/merge_away/image.webp', name: 'Merge Away' },
		{ id: 4, imageUrl: 'https://cdn.hamsterkombat.io/mow_trim/image.webp', name: 'Mow and Trim' },
        { id: 3, imageUrl: 'https://cdn.hamsterkombat.io/polysphere/image.webp', name: 'Polysphere' },
        { id: 2, imageUrl: 'https://cdn.hamsterkombat.io/twerk/image.webp', name: 'Twerk Race 3D' },
        { id: 1, imageUrl: 'https://cdn.hamsterkombat.io/merge_away/image.webp', name: 'Merge Away' },
    ],
    Minigames: [
        
        { id: 2, imageUrl: 'https://cdn.hamsterkombat.io/chain_cube/image.webp', name: 'Chain Cube 2048' },
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
