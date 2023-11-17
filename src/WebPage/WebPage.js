import React, { useEffect } from 'react';
import './WebPage.css';
import download from './WebImg/download.jpg';
import images from './WebImg/images.jpg';

export default function WebPage() {
    
    return (
        <div>
            <div className='container-fluid' style={{ color: 'white' }}>
                <div className='row' style={{ backgroundColor: 'black' }}>
                    <div className='col-sm-12 col-md-6 col-lg-6'>
                        <h1>My Website</h1>
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-6'>
                        <ul style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start' }}>
                            <li style={{ color: 'red' }}>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
                <div className='section container-fluid'>
                    <img src={download}></img>
                    <br />
                    <h1 style={{ color: 'black' }}>Welcome to My Webpage</h1>
                    <p style={{ color: 'black' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <hr style={{ color: 'black', width: '60%', marginLeft: '300px' }} />
                </div>
                <div className='cont1 container'>
                    <h2 className='h2'>Content One</h2>
                    <h6 className='h6 text-secondary' style={{ fontSize: '18px' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem voluptates eveniet tempora ut cupiditate magnam, sapiente, hic quo in ipsum iste soluta eaque perferendis nihil recusandae dolore officia aperiam corporis similique. Facilis quos tempore labore totam! Consectetur molestiae iusto ducimus error reiciendis aspernatur dolor, modi dolorem sit architecto, voluptate magni sunt unde est quas? Voluptates a dolorum voluptatum quo perferendis aut sit. Aspernatur libero laboriosam ab eligendi omnis delectus earum labore, placeat officiis sint illum rem voluptas ipsum repellendus iste eius recusandae quae excepturi facere, iure rerum sequi? Illum velit delectus dicta et iste dolorum obcaecati minus odio eligendi!</h6>
                </div>
                <div className='cont2 container'>
                    <h2 className='h2'>Content Two</h2>
                    <h6 className='h6 text-secondary' style={{ fontSize: '18px' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem voluptates eveniet tempora ut cupiditate magnam, sapiente, hic quo in ipsum iste soluta eaque perferendis nihil recusandae dolore officia aperiam corporis similique. Facilis quos tempore labore totam! Consectetur molestiae iusto ducimus error reiciendis aspernatur dolor, modi dolorem sit architecto, voluptate magni sunt unde est quas? Voluptates a dolorum voluptatum quo perferendis aut sit. Aspernatur libero laboriosam ab eligendi omnis delectus earum labore, placeat officiis sint illum rem voluptas ipsum repellendus iste eius recusandae quae excepturi facere, iure rerum sequi? Illum velit delectus dicta et iste dolorum obcaecati minus odio eligendi!</h6>
                </div>
            </div>
            {/* <div className='sec1 container-fluid' >
                <img src={images} style={{ width: '1450px', height: '500px' }}></img>
                <h1 style={{ color: 'white' }}>Welcome to My Webpage</h1>
                <p style={{ color: 'white' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem voluptates eveniet</p>
                <br />
                <br />
            </div> */}
        </div>
    )
}
