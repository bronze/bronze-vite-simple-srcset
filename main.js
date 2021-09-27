import './style.css'
// import 3 different sizes of the image and create a srcset from them
import srcsetAvif from './example.jpg?w=500;700;900;1200&avif&srcset'
import srcsetAvif2 from './example.jpg?w=300;400&avif&srcset'
import testAvif from './example.jpg?w=300&avif'
// do it a second time, but now as webp since safari can't display avif
import srcsetWebp from './example.jpg?w=500;700;900;1200&webp&srcset'
import srcsetWebp2 from './example.jpg?w=300;400&webp&srcset'
// create a small placeholder and import its metadata
import { src as placeholder, width, height } from './example.jpg?width=300&blur=30&quality=50&metadata'

document.querySelector('#app').innerHTML = `
  <h1>Hello Imagetools!</h1>
  <a href="https://github.com/JonasKruckenberg/imagetools/tree/main/docs" target="_blank">Documentation</a>
  <div class="row">
    <div class="column">
      <p>Test Avif: <br/><img src="${testAvif}"/></p>
    </div>
    <div class="column">
      <p>Srcset Avif: <br/>
        <picture>
        <source srcset="${srcsetAvif2}" type="image/avif"/>
        <img
            src="${placeholder}"
            width="${width}"
            height="${height}"
            alt="Women Lying Near to a Multicolored Glass Window Close-up Photography"/>
        </picture>
      </p>
    </div>
    <div class="column">
      <!-- Now we can use our images -->
      <p>Srcset Avif: <br/>
      <picture>
        <source scrset="${srcsetAvif}" type="image/avif"/>
        <source srcset="${srcsetWebp}" type="image/webp"/>
        <img
            src="${placeholder}"
            width="${width}"
            height="${height}"
            alt="Women Lying Near to a Multicolored Glass Window Close-up Photography"/>
      </picture>
    </div>
  </div>

`
