import React from 'react'
import './Grd.css'
import download from './GrdImg/download.jpg'

export default function Grd() {
    return (
        <div>
            <div className='container-fluid' style={{ backgroundColor: 'black' }}>
                <br/><br/>
                <div className='container'>
                    <h1 style={{ color: 'white' }}>Business Company</h1>
                </div>
                <br />
                <br />
                <div className='container' style={{ backgroundColor: 'green', height: 'auto' }}>
                    <div className='row' style={{ backgroundColor: 'green', height: 'auto', marginBottom: '20px' }}>
                        <div className='col-sm-12 col-md-6 col-lg-6' style={{ color: 'white', textAlign: 'center', marginTop: '70px' }}>
                            <h1>Our team,Our strength</h1>
                            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec neque. Proin hendrerit feugiat turpis. Proin consectetur. Aenean nec nisl. Etiam nec enim. Pellentesque malesuada. Suspendisse scelerisque ante a nulla.</h6>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-6'>
                            <img src={download} style={{ border: 'none', height: 'auto', width: '300px', marginTop: '50px' }}></img>
                        </div>
                    </div>
                    <br />
                </div>
                <div className='container' style={{ color: 'white' }}>
                    <div className='row'>
                        <div className='col-sm-12 col-md-6 col-lg-6'>
                            <h1 style={{color:'green'}}>About Us</h1>
                            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis interdum. Vivamus pharetra est a nulla. Mauris tempor, pede nec vehicula dignissim, sem ante congue erat, in pharetra velit arcu vitae nulla. Aliquam gravida. Ut a sem eu tellus malesuada consectetur. Phasellus in sapien sit amet dui dictum vulputate. Vivamus accumsan pretium nulla. Vestibulum id justo.</p>
                            <p>This area exibits styles for some commonly used HTML elements.</p>
                            <h1 style={{color:'green'}}>An H1 heading looks like this</h1>
                            <h2 style={{color:'green'}}>H2 headings have been used as main headings for a section.</h2>
                            <h3 style={{color:'green'}}>H3 headings are used for news section headin</h3>
                            <h4 style={{color:'green'}}>H4 headings are used for sub headings within a section</h4>
                            <p>Below are the list stylings:</p>
                            <h4 style={{color:'green'}}>A normal unordered list looks like this</h4>
                            <ul>
                                <li>web development</li>
                                <li>web development</li>
                                <li>web development</li>
                                <li>web development</li>
                                <li>web development</li>
                            </ul>
                            <p>An unordered list with "services-list" class looks like this</p>
                            <ul>
                                <li>web development</li>
                                <li>web development</li>
                                <li>web development</li>
                                <li>web development</li>
                                <li>web development</li>
                            </ul>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-6'>
                            <h1 style={{color:'green'}}>News and Events</h1>
                            <p>In vel orci sem, et malesuada nunc</p>

                            <p>Integer mauris. Cras iaculis viverra dolorqw. Nulla suscipit. Proin eu sapien ac sem fermentum sollicitudin.</p>
                            <p>Cras rhoncus eros et mi blandit semper</p>

                            <p>Integer mauris. Cras iaculis viverra dolor. Nulla suscipit. Proin eu sapien ac sem fermentum sollicitudin.</p>
                            <br />
                            <br />
                            <p>In vel orci sem, et malesuada nunc</p>

                            <p>Integer mauris. Cras iaculis viverra dolorqw. Nulla suscipit. Proin eu sapien ac sem fermentum sollicitudin.</p>
                            <p>Cras rhoncus eros et mi blandit semper</p>

                            <p>Integer mauris. Cras iaculis viverra dolor. Nulla suscipit. Proin eu sapien ac sem fermentum sollicitudin.</p>
                            <br />
                            <br />
                            <h1>Contact Information</h1>
                            <p>contact us:564564565646</p>
                            <p>email contact:fdf@gmail.com</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12 col-md-6 col-lg-6'>
                            <p style={{ color: 'green' }}>Website template by :<span style={{ color: 'white' }}>Mohit Joshi</span></p>
                            <p style={{ color: 'white' }}>Copyright 2006-2009, Business Company Pvt. Ltd. - All Rights Reserved</p>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-6' style={{ color: 'green' }}>
                            <p>Subscribe to RSS Feed</p>
                            <p>Valid Xhtml | Valid CSS</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
