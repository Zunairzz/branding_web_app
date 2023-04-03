import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "../styles/profile.css";



const profiles = [
    {
        name: 'Salman',
        title: 'CEO',
        image: 'https://images.unsplash.com/photo-1541257710737-06d667133a53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1370&q=80',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere justo et nulla interdum, at dignissim mi eleifend. Pellentesque ac commodo nisi. Nam pharetra, quam nec iaculis dapibus, mauris enim varius velit, vitae commodo augue ex vel est.',
    },
    {
        name: 'Ludo',
        title: 'CTO',
        image: 'https://images.unsplash.com/photo-1596687909057-dfac2b25b891?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        description: 'jab 12 bajny ma 15 mint rah jaye tu humaray salman bahi dosto ka sath chalty game chore kr apny jan ka sath ludo ka kah kr gaib hoty hoye',
    },
    {
        name: 'Sehar',
        title: 'COO',
        image: 'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere justo et nulla interdum, at dignissim mi eleifend. Pellentesque ac commodo nisi. Nam pharetra, quam nec iaculis dapibus, mauris enim varius velit, vitae commodo augue ex vel est.',
    },
];
export const ProfilePage = ()  => {
    const [currentProfileIndex, setCurrentProfileIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentProfileIndex(
                (currentProfileIndex) => (currentProfileIndex + 1) % profiles.length
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [currentProfileIndex]);

    return (
            <div className="about-page">
                <div className="profile-container">
                    <div className="profile-image">
                        <img src={profiles[currentProfileIndex].image} alt="Profile" />
                    </div>
                    <div className="profile-details">
                        <h2>{profiles[currentProfileIndex].name}</h2>
                        <h3>{profiles[currentProfileIndex].title}</h3>
                        <p>{profiles[currentProfileIndex].description}</p>
                    </div>
                </div>
                <div className="profile-controls">
                    <button onClick={() => setCurrentProfileIndex(
                        (currentProfileIndex) => (currentProfileIndex - 1 + profiles.length) % profiles.length
                    )}>
                        <FaChevronLeft />
                    </button>
                    <button onClick={() => setCurrentProfileIndex(
                        (currentProfileIndex) => (currentProfileIndex + 1) % profiles.length
                    )}>
                        <FaChevronRight />
                    </button>
                </div>
                <div className="profile-list">
                    {profiles.map((profile, index) => (
                        <div
                            key={index}
                            className={index === currentProfileIndex ? 'active' : ''}
                            onClick={() => setCurrentProfileIndex(index)}
                        >
                            <img src={profile.image} alt={profile.name} />
                        </div>
                    ))}
                </div>
            </div>
    );

}