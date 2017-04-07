
import React from 'react';
import {render} from 'react-dom';
import Slider from './components/Slider';
const images = [
    {src:require('./images/1.jpg'),alt:'1'},
    {src:require('./images/2.jpg'),alt:'2'},
    {src:require('./images/3.jpg'),alt:'3'},
    {src:require('./images/4.jpg'),alt:'4'}
]

render(<Slider
    images={images}
    autoPlay={true}
    speed={1}
    delay={2}
/>,document.querySelector('#app'))
