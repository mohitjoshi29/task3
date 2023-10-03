import React from 'react'
import './Responsive.css';
import imgg1 from './Imagess/imgg1.png'
import imgg2 from './Imagess/imgg2.png'

export default function Responsive() {
    return (
        <div>
            <div className='container-fluid'>
                <div id='div1'>
                    <div className='row'>
                        <div className='col-sm-12 col-lg-12 col-md-12'>
                            <h1 className='holiday'>HOLIDAY</h1>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className='container'>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                                <div class="container-fluid">
                                    <a class="navbar-brand" href="#">Navbar</a>
                                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li class="nav-item">
                                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Templates</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Gallery</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Blog</a>
                                            </li>
                                        </ul>
                                        <form class="d-flex">
                                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                            <button class="btn btn-outline-success" type="submit">Go</button>
                                        </form>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div id='div3'>
                        <div className='row' id='row1' style={{ backgroundImage: `url(https://t3.ftcdn.net/jpg/02/43/25/90/240_F_243259090_crbVsAqKF3PC2jk2eKiUwZHBPH8Q6y9Y.jpg)` }}>
                            <div className='col-sm-12 col-lg-3 col-md-6'></div>
                            <div className='col-sm-12 col-lg-3 col-md-6'>
                                <br />
                                <div id='img-cont' style={{ backgroundColor: 'white', opacity: '0.4', borderRadius: '5px' }}>
                                    <h4>Lorem lorem lorem</h4>
                                    <h6>lorem fgf fgdgrtr fdfgf fddfg dffgdfg dfvdf fgrg dfbdfg rgr fbfgbfgf fbgbfg</h6>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='div4'></div>
                <div className='container div5'>
                    <div className='row'>
                        <div className='col-sm-12 col-lg-6 col-md-12' id='first'>
                            <h2 className='holi1' style={{ color: 'lightseagreen' }}>HOLIDAY- Free CSS Templates</h2>
                            <br />
                            <div className='row'>
                                <div className='col-sm-12 col-lg-6 col-md-12'>
                                    <img src='https://t3.ftcdn.net/jpg/02/43/25/90/240_F_243259090_crbVsAqKF3PC2jk2eKiUwZHBPH8Q6y9Y.jpg'></img>
                                </div>
                                <div className='col-sm-12 col-lg-6 col-md-12'>
                                    <h6 className='img-text'>React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.
                                        React has been designed from the start for gradual adoption, and you can use as.</h6>
                                    <button className='btn img-text-btn' style={{ backgroundColor: 'lightseagreen', float: 'right' }}>Read More</button>
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className='row' style={{ borderTop: '2px solid black' }}>
                                <br />
                                <div className='col-sm-12 col-lg-6 col-md-12'>
                                    <br />
                                    <h2 style={{ color: 'lightseagreen' }}>Special Package I</h2>
                                    <h6>If you prefer to use your own text editor, you can also download this HTML file, edit it, and open it filesystem in your browser. It does a slow runtime code transformation, so wed only recommend using this for simple demos.</h6>
                                    <ol style={{ color: 'lightseagreen' }}>
                                        <li>lorem 1</li>
                                        <li>lorem 2</li>
                                        <li>lorem 3</li>
                                    </ol>
                                </div>
                                <div className='col-sm-12 col-lg-6 col-md-12 pack2'>
                                    <br />
                                    <h2 style={{ color: 'lightseagreen' }}>Special Package II</h2>
                                    <h6>If you prefer to use your own text editorfgffghf fgdfg file, edit it, and open it from the local filesystem in your browser. It does a slow runtime code transformation, so wed only recommend using this for simple demos.</h6>
                                    <ol style={{ color: 'lightseagreen' }}>
                                        <li>lorem 1</li>
                                        <li>lorem 2</li>
                                        <li>lorem 3</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-lg-6 col-md-12' id='second'>
                            <div>
                                <h2 className='h2' style={{ color: 'lightseagreen' }}>Designation</h2>
                                <p className='p' style={{ color: 'lightseagreen' }}>lorem lorem lorem</p>
                                <p className='p'>lorem lorem lorem fgdf gdfgdfgd dfgdfrth dfgdthrth dfthrthhgbcbfg</p>
                                <hr></hr>

                                <h2 className='h2' style={{ color: 'lightseagreen' }}>Designation</h2>
                                <p className='p' style={{ color: 'lightseagreen' }}>lorem lorem lorem</p>
                                <p className='p'>lorem lorem lorem fgdf gdfgdfgd dfgdfrth dfgdthrth dfthrthhgbcbfg</p>
                                <hr></hr>

                                <h2 className='h2' style={{ color: 'lightseagreen' }}>Designation</h2>
                                <p className='p' style={{ color: 'lightseagreen' }}>lorem lorem lorem</p>
                                <p className='p'>lorem lorem lorem fgdf gdfgdfgd dfgdfrth dfgdthrth dfthrthhgbcbfg</p>
                                <hr></hr>

                                <h2 className='h2' style={{ color: 'lightseagreen' }}>Designation</h2>
                                <p className='p' style={{ color: 'lightseagreen' }}>lorem lorem lorem</p>
                                <p className='p'>lorem lorem lorem fgdf gdfgdfgd dfgdfrth dfgdthrth dfthrthhgbcbfg</p>
                                <hr></hr>

                                <div className='row' style={{textAlign:"center"}}>
                                    <div className='col-sm-12 col-lg-6 col-md-6  tw'>
                                        <img src={imgg1} style={{ border: 'none', width: '120px', height: '50px' }}></img>
                                    </div>
                                    <div className='col-sm-12 col-lg-6 col-md-6 wifi'>
                                        <img src={imgg2} style={{ border: 'none', width: '80px', height: '50px' }}></img>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <br />
                </div>
                <div className='div6 container-fluid' style={{ backgroundColor: 'skyblue' }}>
                    <div className='row' style={{ backgroundColor: 'skyblue', color: 'white' }}>
                        <div className='col-sm-12 col-lg-3 col-md-6'  style={{display:"flex",justifyContent:"center"}}>
                            <div className='coll'>
                            <h1>Contact</h1>
                            <h6 className='h6'>567:656565665</h6>
                            <h6 className='h6'>567:656565665</h6>
                            <h6 className='h6'>567:656565665</h6>
                            </div>
                        </div>
                        <div className='col-sm-12 col-lg-3 col-md-6 ' style={{display:"flex",justifyContent:"center"}}>
                            <div className='coll'>
                            <h1>Privacy Policy</h1>
                            <h6 className='h6'>This page is an overview of the React documentation and related resources.</h6>
                            </div>
                        </div>
                        <div className='col-sm-12 col-lg-3 col-md-6'  style={{display:"flex",justifyContent:"center"}}>
                            <div className='coll'>
                            <h1>Partners</h1>
                            <h6 className='h6'>This page is an overview of the React documentation and related resources.</h6>
                            </div>
                        </div>
                        <div className='col-sm-12 col-lg-3 col-md-6'  style={{display:"flex",justifyContent:"center"}}>
                            <div className='coll'>
                            <h1>Copyright</h1>
                            <h6 className='h6'>This page is an overview of the React documentation and related resources.</h6>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <h6 className='h6' style={{ color: 'black', textAlign: 'center' }}>Copyright@2048 <a>Your Company name </a>| <a>Website Templates by CSS Templates</a></h6>
                    <br/>
                </div>
            </div>
        </div>
    )
}
