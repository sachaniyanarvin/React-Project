import './YouTu.css'

function Youtube () {
    const menuItems = [
        {icon: 'fas fa-Home', Text:'Home', active: true},
        {icon: 'fas fa-compass', Text:'Compass'},
        {icon: 'fas fa-video', Text:'Video'},
        {icon: 'fas fa-subscriptions', Text:'subscriptions'},
    ];

    const libraryItems = [
        {iconl: 'fas fa-clock', Text:'Watch Later'},
        {icon: 'fas fa-thumps-up', Text:'Like videos'},
        {icon: 'fas fa-chevron-up', Text:'Show more'},
    ];

    const subscriptionItems = [
        {img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true', alt: 'Nadir In The Go', Text:'Nadir In The Go'},
        {img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true', alt: 'Coke Studio Bangla', Text:'Coke Studio Bangla'},
        {img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true', alt: 'MKBHD', Text:'MKBHD'},
        {img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(3).png?raw=true', alt: 'Figma', Text:'Figma'},
        {img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true', alt: 'ATC Android ToTo Company', Text:'ATC Android ToTo Company'},
        {img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(5).png?raw=true', alt: 'Alux.com', Text:'Alux.com'},
    ];

    const filterButtons = [ 
        'All', 'Cook Studio', 'Comedy', 'Education', 'Entertainment', 'Gaming', 'How-to',
        'Music', 'News & Politics', 'Sports', 'Travel & Events', 'Videoblogging', 'World', 'More' 
    ];

    const videoItems = [
        { img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true', alt: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', title: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', description: 'Coke Studio Bangla • 1.5M views • 2 days ago' }, 
        { img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true', alt: 'Infinix Note 12: AMOLED Helio G88 SoC!', title: 'Infinix Note 12: AMOLED Helio G88 SoC!', description: 'ATC Android ToTo Company • 4.2M views • 2 days ago' }, 
        { img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true', alt: 'My first UX Design case study - This got me my first job.', title: 'My first UX Design case study - This got me my first job.', description: 'Saptarshi Prakash • 4.8K views • 1 years ago' }, 
        { img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true', alt: 'My Mix', title: 'My Mix', description: 'Lopamudra Mitra, Anupam Roy, and more' }, 
        { img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-4.png?raw=true', alt: 'UX Design - What is it? (From AJ &amp; Smart)', title: 'UX Design - What is it? (From AJ &amp; Smart)', description: 'AJ&amp;Smart • 150K views • 3 years ago' }, 
        { img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-5.png?raw=true', alt: 'Mix - Mombati | Mohon Sharif | Dhakaiya Dose | Mahib Ahsan ft Anika', title: 'Mix - Mombati | Mohon Sharif | Dhakaiya Dose | Mahib Ahsan ft Anika', description: 'Mohon Sharif, Old Signature, Shayan Chowdhury Arnob, and more' }, 
        { img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-6.png?raw=true', alt: '148 VISA-FREE', title: '148 VISA-FREE', description: 'Nadir On The Go • 1.1M views • 1 year ago' }, { img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-7.png?raw=true', alt: '14 Advanced Tips to Design FASTER in Figma', title: '14 Advanced Tips to Design FASTER in Figma', description: 'Mizko • 53K views • 1 year ago' }, 
        { img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail.png?raw=true', alt: 'Trip to Dubai', title: 'Trip to Dubai', description: 'Tuboti • 500K views • 8 year ago' }, 
        { img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-1.png?raw=true', alt: 'Information TO Theological advises for new vision', title: 'Information TO Theological advises for new vision', description: 'Stiva • 100m views • 2 weeks ago' }, 
        { img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-2.png?raw=true', alt: 'How to Work in Google?', title: 'How to Work in Google?', description: 'cong • 100cr views • 5 year ago' }, 
        { img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-3.png?raw=true', alt: 'Microsoft 100% $Scholar Best', title: 'Microsoft 100% $Scholar Best', description: 'David• 550m views • 2 year ago'}, 
    ];

    return (
        <>
            <div className='youtube-app'>
                <div className="sidebar">
                    <div className="logo">
                    <img alt="YouTube Logo" height="50" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Youtube%20logo.png?raw=true" width="70" />
                    </div>
                    {menuItems.map((item, index)=>(
                        <a key={index} className= {item.active ? 'active' : ''} href="#">
                            <i className={item.icon}></i> {item.Text}
                        </a>
                    ))}
                    <div className="section-title">LIBRARY</div> 
                    {libraryItems.map((item, index) => ( 
                        <a key={index} href="#"> 
                            <i className={item.icon}></i> {item.Text} 
                        </a> 
                    ))}
                    <div className="section-title">SUBSCRIPTIONS</div>
                    {subscriptionItems.map((item, index) => ( 
                        <a key={index} href="#"> 
                            <img alt={item.alt} height="25" src={item.img} width="25" /> {item.Text} 
                        </a> 
                    ))}
                </div>
                <div className="main-content">
                    <div className="filter-bar"> 
                        <input placeholder="Search" type="text" /> 
                        <button> 
                            <i className="fas fa-search"></i> 
                        </button> 
                    </div>
                    <div className="filter-bar">
                        {filterButtons.map((buttonText, index) => ( 
                            <button key={index} className={index === 0 ? 'active' : ''}>{buttonText}</button> 
                            ))} 
                    </div>
                    <div className="video-grid">
                        {videoItems.map((video, index) => (
                            <div key={index} className="video-item"> 
                                <img alt={video.alt} src={video.img} /> 
                                <div className="video-info"> 
                                    <h3>{video.title}</h3> 
                                    <p>{video.description}</p> 
                                </div> 
                            </div>
                        ))}    
                    </div>
                </div>
            </div>
        </>
    );
}

export default Youtube;