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
    <div class="column" id="c2">
      <p>Srcset: <br/>
      <h4 class="Message">
        Your browser has loaded this image in <span id="format" class="Format">...</span> format
      </h4>
        <picture>
        <source srcset="${srcsetAvif}" type="image/avif"/>
        <source srcset="${srcsetWebp}" type="image/webp"/>
        <img
            id="image1"
            src="${placeholder}"
            width="${width}"
            height="${height}"
            alt="Women Lying Near to a Multicolored Glass Window Close-up Photography"/>
        </picture>
      </p>
    </div>
    <div class="column" id="c3">
      <!-- Now we can use our images -->
      <p>Srcset: <br/>
      <h4 class="Message">
        Your browser has loaded this image in <span id="format2" class="Format">...</span> format
      </h4>
      <picture>
        <source scrset="${srcsetAvif}" type="image/avif"/>
        <source srcset="${srcsetWebp}" type="image/webp"/>
        <img
            id="image2"
            src="${placeholder}"
            width="${width}"
            height="${height}"
            alt="Women Lying Near to a Multicolored Glass Window Close-up Photography"/>
      </picture>
    </div>
  </div>

`

window.addEventListener('load', function (){
  const image = document.getElementById('image1');
  const format = document.getElementById('format');
  const url = image.currentSrc.split('?');
  const extension = url[0].split('.').pop();

  format.innerHTML = extension;


  const image2 = document.getElementById('image2');
  const format2 = document.getElementById('format2');
  const url2 = image2.currentSrc.split('?');
  const extension2 = url2[0].split('.').pop();

  format.innerHTML = extension;
  format2.innerHTML = extension2;
});