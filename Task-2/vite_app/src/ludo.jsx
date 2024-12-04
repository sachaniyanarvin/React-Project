import './ludo.css';

function Ludo() {
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>GAME OF LUDO KING</h1>
            <div className="outer">
                <div className="box-row">
                    <div className="box border-red">
                        <div className="circle" style={{ border: '7px solid red' }}></div>
                        <div className="circle" style={{ border: '7px solid red' }}></div>
                        <div className="circle" style={{ border: '7px solid red' }}></div>
                        <div className="circle" style={{ border: '7px solid red' }}></div>
                    </div>
                    <div className="v-lad">
                        <div className="v-lad-row">
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                        </div>
                        <div className="v-lad-row">
                            <div className="cell"></div>
                            <div className="cell green"></div>
                            <div className="cell green"><span className="star">&#9733;</span></div>
                        </div>
                        <div className="v-lad-row">
                            <div className="cell green"><span className="star">&#9733;</span></div>
                            <div className="cell green"></div>
                            <div className="cell"></div>
                        </div>
                        <div className="v-lad-row">
                            <div className="cell"></div>
                            <div className="cell green"></div>
                            <div className="cell"></div>
                        </div>
                        <div className="v-lad-row">
                            <div className="cell"></div>
                            <div className="cell green"></div>
                            <div className="cell"></div>
                        </div>
                        <div className="v-lad-row">
                            <div className="cell"></div>
                            <div className="cell green"></div>
                            <div className="cell"></div>
                        </div>
                    </div>
                    <div className="box border-green">
                        <div className="circle" style={{ border: '7px solid green' }}></div>
                        <div className="circle" style={{ border: '7px solid green' }}></div>
                        <div className="circle" style={{ border: '7px solid green' }}></div>
                        <div className="circle" style={{ border: '7px solid green' }}></div>
                    </div>
                </div>
                <div className="middle-row">
                    <div className="h-lad">
                        <div className="h-lad-row">
                            <div className="cell"></div>
                            <div className="cell red"><span className="star">&#9733;</span></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                        </div>
                        <div className="h-lad-row">
                            <div className="cell"></div>
                            <div className="cell red"></div>
                            <div className="cell red"></div>
                            <div className="cell red"></div>
                            <div className="cell red"></div>
                            <div className="cell red"></div>
                        </div>
                        <div className="h-lad-row">
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell red"><span className="star">&#9733;</span></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                        </div>
                    </div>
                    <div className="ludo-home"></div>
                    <div className="h-lad">
                        <div className="h-lad-row">
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell yellow"><span className="star">&#9733;</span></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                        </div>
                        <div className="h-lad-row">
                            <div className="cell yellow"></div>
                            <div className="cell yellow"></div>
                            <div className="cell yellow"></div>
                            <div className="cell yellow"></div>
                            <div className="cell yellow"></div>
                            <div className="cell"></div>
                        </div>
                        <div className="h-lad-row">
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell yellow"><span className="star">&#9733;</span></div>
                            <div className="cell"></div>
                        </div>
                    </div>
                </div>
                <div className="box-row">
                    <div className="box border-blue">
                        <div className="circle" style={{ border: '7px solid blue' }}></div>
                        <div className="circle" style={{ border: '7px solid blue' }}></div>
                        <div className="circle" style={{ border: '7px solid blue' }}></div>
                        <div className="circle" style={{ border: '7px solid blue' }}></div>
                    </div>
                    <div className="v-lad">
                        <div className="v-lad-row">
                            <div className="cell"></div>
                            <div className="cell blue"></div>
                            <div className="cell"></div>
                        </div>
                        <div className="v-lad-row">
                            <div className="cell"></div>
                            <div className="cell blue"></div>
                            <div className="cell"></div>
                        </div>
                        <div className="v-lad-row">
                            <div className="cell"></div>
                            <div className="cell blue"></div>
                            <div className="cell"></div>
                        </div>
                        <div className="v-lad-row">
                            <div className="cell"></div>
                            <div className="cell blue"></div>
                            <div className="cell blue"><span className="star">&#9733;</span></div>
                        </div>
                        <div className="v-lad-row">
                            <div className="cell blue"><span className="star">&#9733;</span></div>
                            <div className="cell blue"></div>
                            <div className="cell"></div>
                        </div>
                        <div className="v-lad-row">
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                        </div>
                    </div>
                    <div className="box border-yellow">
                        <div className="circle" style={{ border: '7px solid yellow' }}></div>
                        <div className="circle" style={{ border: '7px solid yellow' }}></div>
                        <div className="circle" style={{ border: '7px solid yellow' }}></div>
                        <div className="circle" style={{ border: '7px solid yellow' }}></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Ludo;
