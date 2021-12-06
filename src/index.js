import { h, render } from 'preact'
import Missing from '../missing.svg'
import Unknown from '../unknown.svg'
import Valid from '../valid.svg'

render((
  <div>
    <h2>svg from JS below</h2>
    valid <Valid /> {/* This one won't render */}
    unknown <Unknown />
    missing <Missing />
  </div>
), document.body)