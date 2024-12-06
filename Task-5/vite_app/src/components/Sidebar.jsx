import './Main/Sidebar.css'

function Sidebar () {

    return (
    <>
        <div className="sidebar">
                <div className="logo">
                    <img alt="YouTube Logo" height="50" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Youtube%20logo.png?raw=true" width="70"/>
                </div>
                <a href="#">
                    <i className="fas-fa-home"></i>
                        Home
                </a>
                <a href="#">
                    <i className="fas-fa-compass"></i>
                        Explore.
                </a>
                <a href="#">
                    <i className="fas-fa-video"></i>
                        Shorts
                </a>
                <a href="#">
                    <i className="fas-fa-subscriptions"></i>
                        Subscriptions
                </a>
                <div className="section-title">LIBRARY</div>
                <a href="#">
                    <i className="fas-fa-clock"></i>
                        Watch Later
                </a>
                <a href="#">
                    <i className="fas-fa-thumbs-up"></i>
                        Like videos
                </a>
                <a href="#">
                    <i className="fas-fa-chevron-down"></i>
                        Show more
                </a>
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
                        <img alt="Alux.com" height="25" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(5).png?raw=true" width="25"/>ATC Android ToTo Company
                    </a>
                </div>
            </div>
    </>
    );
}

export default Sidebar;