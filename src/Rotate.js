import React, { useRef, useState } from 'react'
import dog from './img/dog.jpg'

export default function Rotate() {
    const [openSt, setOpenSt] = useState(false);
    const containerRef = useRef(null)
    const open = document.getElementById('open')
    const close = document.getElementById('close')
    const container = document.querySelector('.container')
    // open.addEventListener('click', () => container.classList.add('show-nav'))
    const openhandle = () => {
        containerRef.current.classList.add('show-nav')
        setOpenSt(true)
    }
    const closehandle = () => {
        containerRef.current.classList.remove('show-nav')
        setOpenSt(false)

    }

    // close.addEventListener('click', () => container.classList.remove('show-nav'))
    return (
        <div>
            <div class="container" ref={containerRef}>
                <div class="circle-container">
                    <div class="circle">
                        {openSt ?
                            <button id="close" onClick={closehandle}>
                                <i class="fas fa-times"></i>
                            </button>
                            : <button id="open" onClick={openhandle}>
                                <i class="fas fa-bars"></i>
                            </button>
                        }
                    </div>
                </div>

                <div class="content">
                    <h1>Amazing Article</h1>
                    <small>Florin Pop</small>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia in ratione dolores cupiditate, maxime aliquid impedit dolorem nam dolor omnis atque fuga labore modi veritatis porro laborum minus, illo, maiores recusandae cumque ipsa quos. Tenetur, consequuntur mollitia labore pariatur sunt quia harum aut. Eum maxime dolorem provident natus veritatis molestiae cumque quod voluptates ab non, tempore cupiditate? Voluptatem, molestias culpa. Corrupti, laudantium iure aliquam rerum sint nam quas dolor dignissimos in error placeat quae temporibus minus optio eum soluta cupiditate! Cupiditate saepe voluptates laudantium. Ducimus consequuntur perferendis consequatur nobis exercitationem molestias fugiat commodi omnis. Asperiores quia tenetur nemo ipsa.</p>

                    <h3>My Dog</h3>
                    <img src={dog} alt="doggy" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero deleniti rerum quo, incidunt vel consequatur culpa ullam. Magnam facere earum unde harum. Ea culpa veritatis magnam at aliquid. Perferendis totam placeat molestias illo laudantium? Minus id minima doloribus dolorum fugit deserunt qui vero voluptas, ut quia cum amet temporibus veniam ad ea ab perspiciatis, enim accusamus asperiores explicabo provident. Voluptates sint, neque fuga cum illum, tempore autem maxime similique laborum odio, magnam esse. Aperiam?</p>
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
