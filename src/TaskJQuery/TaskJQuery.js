import React, { useEffect } from 'react';
import $ from 'jquery';
import './TaskJQuery.css';

export default function TaskJQuery() {

    useEffect(() => {
        $(document).ready(() => {
            $('button').click(() => {
                $('#head-one').fadeToggle(2000);
                $('#para-one').fadeToggle(3000);
                $('#head-sec').fadeToggle(4000);
                $('#para-sec').fadeToggle(5000);
                // $(".head-one").css('font-weight', 'bold');
            });
            // $('.showfun').click(() => {
            //     $('.head-one').fadeOut();
            // })
            // $('.showfun').click(() => {
            //     $('.head-one').fadeOut(5000);
            //     $('.para-one').fadeOut(4000);
            //     $('.head-sec').fadeOut(3000);
            //     $('.para-sec').fadeOut(2000);
            //     // $(".head-one").css('font-weight', 'bold');
            // });
        })
    }, [])
    return (
        <div>
            <button type='submit' className='hidefun'>Hide</button>
            {/* <button type='submit' className='showfun'>Show</button> */}
            <h4 id='head-one'>HEADING TAG
                W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning.
                Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness
                of all content. While using W3Schools, you agree to have read and accepted our terms of use, cookie and privacy policy.
            </h4>
            <p id='para-one'>PARAGRAPH TAG
                W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning.
                Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness
                of all content. While using W3Schools, you agree to have read and accepted our terms of use, cookie and privacy policy.
            </p>
            <h4 id='head-sec'>HEADING TAG
                W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning.
                Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness
                of all content. While using W3Schools, you agree to have read and accepted our terms of use, cookie and privacy policy.
            </h4>
            <p id='para-sec'>PARAGRAPH TAG
                W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning.
                Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness
                of all content. While using W3Schools, you agree to have read and accepted our terms of use, cookie and privacy policy.
            </p>
        </div>
    )
}
