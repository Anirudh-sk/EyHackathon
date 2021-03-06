import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
 
class VRScene extends React.Component {
  render () {
    return (
      <Scene>
        <Entity geometry={{primitive: 'box'}} material={{color: 'green'}} position={{x: 0, y: 0, z: -5}}/>
        <Entity particle-system={{preset: 'snow'}}/>
        <Entity light={{type: 'point'}}/>
        {/* <Entity gltf-model={{src: 'virtualcity.gltf'}}/> */}
        <Entity text={{value: 'Hello, WebVR!'}}material={{color: 'red'}} position={{x: 3, y:-1, z: -5}}/>
      </Scene>
    );
  }
}
 
// ReactDOM.render(<VRScene/>, document.querySelector('#sceneContainer'));
export default VRScene