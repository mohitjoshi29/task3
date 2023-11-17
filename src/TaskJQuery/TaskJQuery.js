import React, { useEffect } from 'react';
import $ from 'jquery';

export default function TaskJQuery() {

    useEffect(() => {
        $(document).ready(() => {
            $('.hidefun').mouseleave(() => {
                // $('.head-one').hide();
                $(".head-one").css('font-weight', 'bold');
            });
            $('.hidefun').mouseenter(()=>{
                $('.para-one').hide();
            })
        })
    },[])
    return (
        <div>
            <h4 className='head-one'>HEADING TAG
                W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning.
                Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness
                of all content. While using W3Schools, you agree to have read and accepted our terms of use, cookie and privacy policy.
            </h4>
            <p className='para-one'>PARAGRAPH TAG
                W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning.
                Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness
                of all content. While using W3Schools, you agree to have read and accepted our terms of use, cookie and privacy policy.
            </p>
            {/* <h4 className='head-sec'>HEADING TAG
                W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning.
                Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness
                of all content. While using W3Schools, you agree to have read and accepted our terms of use, cookie and privacy policy.
            </h4>
            <p className='para-sec'>PARAGRAPH TAG
                W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning.
                Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness
                of all content. While using W3Schools, you agree to have read and accepted our terms of use, cookie and privacy policy.
            </p> */}
            <button type='submit' className='hidefun'>Hide</button>
        </div>
    )
}
