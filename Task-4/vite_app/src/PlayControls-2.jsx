import './Filtter/PlayControls-2.css'

function PlayControls() {
    const controlElements = [
        { src: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image11.png?raw=true', alt: 'Dreaming on', height: 50, width: 50, className: 'main-image', show: true },
        { src: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/bx_bxs-heart.png?raw=true', alt: 'green heart', height: 10, width: 10, className: 'image-wrapper', show: true },
        { src: 'Music Player Options.png', alt: 'Music Player Options', style: { width: '30vw', height: '45px' }, className: 'image-2', show: false },
        { src: 'Right options.png', alt: 'Right options', style: { width: '15vw', height: '3vh' }, className: 'image-3', show: true },
    ];

    const filteredElements = controlElements.filter(control => control.show);

    return (
        <div className="footer">
            <div>
                {filteredElements.slice(0, 1).map((control, index) => (
                    <img
                        key={index}
                        alt={control.alt}
                        height={control.height}
                        src={control.src}
                        width={control.width}
                        className={control.className}
                    />
                ))}
                <p className="container">
                    Dreaming On <br />
                    NEFFEX
                    <div className="image-wrapper">
                        {filteredElements.slice(1, 2).map((control, index) => (
                            <img
                                key={index}
                                alt={control.alt}
                                height={control.height}
                                src={control.src}
                                width={control.width}
                            />
                        ))}
                    </div>
                </p>
                {filteredElements.slice(2).map((control, index) => (
                    <div key={index} className={control.className}>
                        <img
                            style={control.style}
                            src={control.src}
                            alt={control.alt}
                        />
                    </div>
                ))}
            </div>
            <div className="Underline" style={{ backgroundColor: '#1DB954' }}></div>
        </div>
    );
}

export default PlayControls;
