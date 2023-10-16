import React, { Component } from 'react'

export default class Reference extends Component {
    constructor(props) {
        super(props);
        this.myVideo = React.createRef();
    }
    render() {
        const style={
        width:'400px',
        height:'40px'
        }
        return (
            <>
                <div>
                    <video ref={this.myVideo} width="800" height="550" controls>
                        <source
                            src="https://res.cloudinary.com/daintu6ky/video/upload/v1573070866/Screen_Recording_2019-11-06_at_4.14.52_PM.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>
                <button onClick={()=>{this.myVideo.current.play()}} style={style}>Start</button>
                <button onClick={()=>{this.myVideo.current.pause()}} style={style}>Pause</button>
            </>
        )
    }
}
