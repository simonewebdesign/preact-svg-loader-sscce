import { h, render } from 'preact'
import Svg1 from '../evidenced.svg'
import Svg2 from '../verified.svg'

render((
  <div>
    <h1>Hello, world! Svg from JS below</h1>
    <Svg1 />
    <Svg2 />
  </div>
), document.body)