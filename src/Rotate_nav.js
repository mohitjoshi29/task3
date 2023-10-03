import React from 'react'
import dog from './img/dog.jpg'


export default function Rotate_nav() {
    const rotateRight = () => {
        const btn = document.getElementById('close');
        const parent=btn.parentElement;
        console.log('parent');
        parent.style.transform='translateX(200px) rotate(-90deg)'
        // btn.style.transform = 'rotate(-90deg)';
    }
    const rotateLeft = () => {
        const btn = document.getElementById('open');
        const itg=document.getElementsByClassName('circle');
        itg.style.transform = 'rotate(-90deg)';
    }
    return (
        <div>
            <div className='container-fluid'>
                <div class="circle-container">
                    <div class="circle" id='circle'>
                        <button id="close" onClick={rotateRight}>
                            <i class="fas fa-times"></i>
                        </button>
                        <button id="open" onClick={rotateLeft}>
                            <i class="fas fa-bars"></i>
                        </button>
                    </div>
                </div>
                <div className='container cont1'>
                    <div className='container cont2'>
                        <div className='row'>
                            <div className='col'>
                                <h1 className='h1 amazing'>Amazing Article
                                    <p className='h6 Am-text'>Florin Pop</p></h1>
                                <p className='h6 upper-text' style={{ textAlign: 'justify', marginLeft: '20px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia in ratione dolores cupiditate, maxime aliquid impedit dolorem nam dolor omnis atque fuga labore modi veritatis porro laborum minus, illo, maiores recusandae cumque ipsa quos. Tenetur, consequuntur mollitia labore pariatur sunt quia harum aut. Eum maxime dolorem provident natus veritatis molestiae cumque quod voluptates ab non, tempore cupiditate? Voluptatem, molestias culpa. Corrupti, laudantium iure aliquam rerum sint nam quas dolor dignissimos in error placeat quae temporibus minus optio eum soluta cupiditate! Cupiditate saepe voluptates laudantium. Ducimus consequuntur perferendis consequatur nobis exercitationem molestias fugiat commodi omnis. Asperiores quia tenetur nemo ipsa.</p>
                                <br />
                                <h4 className='h4'>My Dog</h4>
                                <img className='dog' src={dog}></img>

                                <p className='h6 lower-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero deleniti rerum quo, incidunt vel consequatur culpa ullam. Magnam facere earum unde harum. Ea culpa veritatis magnam at aliquid. Perferendis totam placeat molestias illo laudantium? Minus id minima doloribus dolorum fugit deserunt qui vero voluptas, ut quia cum amet temporibus veniam ad ea ab perspiciatis, enim accusamus asperiores explicabo provident. Voluptates sint, neque fuga cum illum, tempore autem maxime similique laborum odio, magnam esse. Aperiam?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav>
                <ul>
                    <li><i class="fas fa-home"></i> Home</li>
                    <li><i class="fas fa-user-alt"></i> About</li>
                    <li><i class="fas fa-envelope"></i> Contact</li>
                </ul>
            </nav>
        </div>

    )
}
