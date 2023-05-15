import './style.css'
import viteLogo from '/logo.svg'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
<!--    <a href="https://vitejs.dev" target="_blank">-->
<!--      <img src="${viteLogo}" class="logo" alt="Vite logo" />-->
<!--    </a>-->
<!--    <a href="https://www.typescriptlang.org/" target="_blank">-->
<!--      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />-->
<!--    </a>-->
<!--    <h1>Vite + TypeScript</h1>-->
<!--    <div class="card">-->
<!--      <button id="counter" type="button"></button>-->
<!--    </div>-->
<!--    <p class="read-the-docs">-->
<!--      Click on the Vite and TypeScript logos to learn more-->
<!--    </p>-->
        <div id="app"></div>
    <!-- solid style -->
    <i class="fa-solid fa-user"></i>

    <!-- regular style -->
    <i class="fa-regular fa-user"></i>

    <!-- all new sharp solid style -->
    <i class="fa-sharp fa-solid fa-user"></i>

    <!-- all new sharp regular style -->
    <i class="fa-sharp fa-regular fa-user"></i>
    <!--brand icon-->
    <i class="fa-brands fa-github-square"></i>
    <h1>Hello World 123 </h1>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

postMessage({ payload: 'removeLoading' }, '*')
