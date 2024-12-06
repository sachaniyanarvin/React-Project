import './You.css'

function YouTube (){
    return (
        <>
            <div className="sidebar">
                <div className="logo">
                    <img alt="YouTube Logo" height="50" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Youtube%20logo.png?raw=true" width="70"/>
                </div>
                <a href="#">
                    <i className="fas fa-home"></i>
                        Home
                </a>
                <a href="#">
                    <i className="fas fa-compass"></i>
                        Explore.
                </a>
                <a href="#">
                    <i className="fas fa-video"></i>
                        Shorts
                </a>
                <a href="#">
                    <i className="fas fa-subscriptions"></i>
                        Subscriptions
                </a>
                <div className="section-title">LIBRARY
                    <a href="#">
                        <i className="fas fa-clock"></i>
                            Watch Later
                    </a>
                    <a href="#">
                        <i className="fas fa-thumbs-up"></i>
                            Like videos
                    </a>
                    <a href="#">
                        <i className="fas-fa-chevron-down"></i>
                            Show more
                    </a>    
                </div>
                <div className="section-title">SUBSCRIPTIONS
                    <a href="#">
                        <img alt="Nadir In The Go" height="25" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true" width="25"/>Nadir In The Go
                    </a>
                    <a href="#">
                        <img alt="Coke Studio Bangla" height="25" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true" width="25"/>Coke Studio Bangla
                    </a>
                    <a href="#">
                        <img alt="MKBHD" height="25" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true" width="25"/>MKBHD
                    </a>
                    <a href="#">
                        <img alt="Figma" height="25" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(3).png?raw=true" width="25"/>Figma
                    </a>
                    <a href="#">
                        <img alt="ATC Android ToTo Company" height="25" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true" width="25"/>ATC Android ToTo Company
                    </a>
                    <a href="#">
                        <img alt="Alux.com" height="25" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(5).png?raw=true" width="25"/>Alux.com
                    </a>
                </div>
            </div>
            <div className="main-content">
                <div className="filter-bar">
                    <input placeholder="Search" type="text"/>
                    <button>
                        <i className="fas fa-search"></i>
                    </button>
                    </div>
                    <div className="filter-bar">
                        <button className="active">All</button>
                        <button>Cook Studio</button>
                        <button>Comedy</button>
                        <button>Education</button>
                        <button>Entertainment</button>
                        <button>Gaming</button>
                        <button>How-to</button>
                        <button>Music</button>
                        <button>News & Politics</button>
                        <button>Sports</button>
                        <button>Travel & Events</button>
                        <button>Videoblogging</button>
                        <button>World</button>
                        <button>More</button>
                    </div>
                    <div className="video-grid">
                        <div className="video-item">
                            <img alt="Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita" height="200" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true" width="300"/>
                            <div className="video-info">
                                <h4>
                                    Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita
                                </h4>
                                <p>
                                    Coke Studio Bangla • 1.5M views • 2 days ago
                                </p>
                            </div>
                        </div>
                        <div className="video-item">
                            <img alt="Infinix Note 12: AMOLED Helio G88 SoC!" height="200" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true" width="300"/>
                            <div className="video-info">
                                <h4>
                                    Infinix Note 12: AMOLED Helio G88 SoC!
                                </h4>
                                <p>
                                    ATC Android ToTo Company • 4.2M views • 2 days ago
                                </p>
                            </div>
                        </div>
                        <div className="video-item">
                            <img alt="My first UX Design case study - This got me my first job." height="200" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true" width="300"/>
                            <div className="video-info">
                                <h4>
                                    My first UX Design case study - This got me my first job.
                                </h4>
                                <p>
                                    Saptarshi Prakash • 4.8K views • 1 years ago
                                </p>
                            </div>
                        </div>
                        <div className="video-item">
                            <img alt="My Mix" height="200" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true" width="300"/>
                            <div className="video-info">
                                <h4>
                                    My Mix
                                </h4>
                                <p>
                                    Lopamudra Mitra, Anupam Roy, and more
                                </p>
                            </div>
                        </div>
                        <div className="video-item">
                            <img alt="UX Design - What is it? (From AJ &amp; Smart)" height="200" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-4.png?raw=true" width="300"/>
                            <div className="video-info">
                                <h4>
                                    UX Design - What is it? (From AJ &amp; Smart)
                                </h4>
                                <p>
                                    AJ&amp;Smart • 150K views • 3 years ago
                                </p>
                            </div>
                        </div>
                        <div className="video-item">
                            <img alt="Mix - Mombati | Mohon Sharif | Dhakaiya Dose | Mahib Ahsan ft Anika" height="200" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-5.png?raw=true" width="300"/>
                            <div className="video-info">
                                <h4>
                                    Mix - Mombati | Mohon Sharif | Dhakaiya Dose | Mahib Ahsan ft Anika
                                </h4>
                                <p>
                                    Mohon Sharif, Old Signature, Shayan Chowdhury Arnob, and more
                                </p>
                            </div>
                        </div>
                        <div className="video-item">
                            <img alt="148 VISA-FREE" height="200" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-6.png?raw=true" width="300"/>
                            <div className="video-info">
                                <h4>
                                    148 VISA-FREE
                                </h4>
                                <p>
                                    Nadir On The Go • 1.1M views • 1 year ago
                                </p>
                            </div>
                        </div>
                        <div className="video-item">
                            <img alt="14 Advanced Tips to Design FASTER in Figma" height="200" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-7.png?raw=true" width="300"/>
                            <div className="video-info">
                                <h4>
                                    14 Advanced Tips to Design FASTER in Figma
                                </h4>
                                <p>
                                    Mizko • 53K views • 1 year ago
                                </p>
                            </div>
                        </div>
                        <div className="video-item">
                            <img alt="14 Advanced Tips to Design FASTER in Figma" height="200" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail.png?raw=true" width="300"/>
                            <div className="video-info">
                                <h4>
                                    Trip to Dubai
                                </h4>
                                <p>
                                    Tuboti • 500K views • 8 year ago
                                </p>
                            </div>
                        </div>
                        <div className="video-item">
                            <img alt="14 Advanced Tips to Design FASTER in Figma" height="200" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-1.png?raw=true" width="300"/>
                            <div className="video-info">
                                <h4>
                                    Information TO Theological advises for nre vision
                                </h4>
                                <p>
                                    Stiva • 100m views • 2 Wick ago
                                </p>
                            </div>
                        </div>
                        <div className="video-item">
                            <img alt="14 Advanced Tips to Design FASTER in Figma" height="200" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-2.png?raw=true" width="300"/>
                            <div className="video-info">
                                <h4>
                                    How to Work in Google?
                                </h4>
                                <p>
                                    cong • 100cr views • 5 year ago
                                </p>
                            </div>
                        </div>
                        <div className="video-item">
                            <img alt="Microsoft 100% $Scholar Best" height="200" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-3.png?raw=true" width="300"/>
                            <div className="video-info">
                                <h4>
                                    Microsoft 100% $Scholar Best
                                </h4>
                                <p>
                                    David• 550m views • 2 year ago
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default YouTube;