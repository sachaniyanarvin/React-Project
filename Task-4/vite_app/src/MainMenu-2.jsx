import './Filtter/MainMenu-2.css'   

function MainMenu() {
    const playlists = [
        { img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Liked.png?raw=true', alt: 'Liked Songs', text: 'Liked Songs', liked: true },
        { img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image4.png?raw=true', alt: 'Neffex Playlist', text: 'Neffex Playlist', liked: false },
        { img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/palylist.png?raw=true', alt: 'K/DA', text: 'K/DA', liked: false },
        { img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image1.png?raw=true', alt: 'Liked Songs', text: 'Liked Songs', liked: true },
        { img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image2.png?raw=true', alt: 'Dance / Electronic Mix', text: 'Dance / Electronic Mix', liked: false },
    ];

    const shows = [
        { img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image9.png?raw=true', alt: 'Weekly Motivation', title: 'Weekly Motivation', author: 'Ben Ina Scott', liked: true },
        { img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image8.png?raw=true', alt: 'Meditation Self', title: 'Meditation Self', author: 'Ubn Hussein Aleen', liked: false },
        { img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image7.png?raw=true', alt: 'Words beyond actions', title: 'Words beyond actions', author: 'Samuel Scott', liked: true },
        { img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image6.png?raw=true', alt: 'Words beyond actions', title: 'Words beyond actions', author: 'Samuel Scott', liked: false },
        { img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image5.png?raw=true', alt: 'Words beyond actions', title: 'Words beyond actions', author: 'Samuel Scott', liked: true },
        { img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image10.png?raw=true', alt: 'Words beyond actions', title: 'Words beyond actions', author: 'Samuel Scott', liked: false },
    ];

    const filteredPlaylists = playlists.filter(playlist => playlist.liked);
    const filteredShows = shows.filter(show => show.liked);

    return (
        <div className="main-content">
            <h1>Good morning</h1>
            <div className="playlist">
                {filteredPlaylists.map((playlist, index) => (
                    <div key={index}>
                        <img alt={playlist.alt} height="50" src={playlist.img} width="50" />
                        <p>{playlist.text}</p>
                    </div>
                ))}
            </div>
            <div className="shows">
                <h2>Shows you might like</h2>
                <div className="show-list">
                    {filteredShows.map((show, index) => (
                        <div key={index}>
                            <img alt={show.alt} height="150" src={show.img} width="150" />
                            <p>{show.title}</p>
                            <p>{show.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MainMenu;
