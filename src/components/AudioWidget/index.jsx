import React from 'react'

class AudioWidget extends React.Component {
    render() {
        let audio = null

        console.log('AudioWidget Props:', {
            audio: this.props.audio,
            audioFile: this.props.audioFile
        });

        if (this.props.audio && this.props.audioFile) {
            audio = (
                <div>
                    <audio controls>
                        <source src={this.props.audioFile} type="audio/mpeg" />
                    </audio>
                    <br className="post-breaker" />
                </div>
            )
        }

        return <div>{audio}</div>
    }
}

export default AudioWidget 