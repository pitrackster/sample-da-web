import React, { Component } from 'react';
import WaveSurfer from 'wavesurfer.js';


class Waveform extends Component {

    constructor(props){
        //this.wavesurfer = null
        super(props)
        //const wavesurfer = null
    }

    componentDidMount(){
        this.wavesurfer = WaveSurfer.create({
            container: '#waveform',
            waveColor: 'violet',
            progressColor: 'purple'
        });
        //wavesurfer.load('http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3');
        this.wavesurfer.load(this.props.src);
    }

  render() {
    return (
        <div id="waveform"></div>
    );
  }
}

Waveform.defaultProps = {
    src: ""
  }

export default Waveform;
