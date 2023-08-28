import { useState } from 'react'
import './App.css'
import bombaDeGasolina from './assets/bomba-de-gasolina.png'
import { calculateBestOption } from './utils/calculateHandle'

function App() {
  const [alcoolInput, setAlcoolInput] = useState(0)
  const [gasolinaInput, setGasolinaInput] = useState(0)
  const [info, setInfo ] = useState({});

  return (
    <>
    <header>
      <h1 className='title'>Álcool vs Gasolina</h1>
    </header>
    <main>
      <section className='question-container'>
        <div className='image-container'>
          <img className='bomba-gasolina' src={bombaDeGasolina}/>
        </div>
        <h1>O que é melhor para você hoje?</h1>
      </section>
      <form action="" onSubmit={(event) => {
        calculateBestOption(event,alcoolInput,gasolinaInput,setInfo)
      }}>
        <div className='main-inputs-container'>
          <section className='input-container'>
              <label className='combustivel-label'>Álcool</label>
              <input 
                className='combustivel-input' 
                type="number"
                min="1"
                step="0.01"
                required
                placeholder='Informe o atual preço do álcool por litro...'
                value={alcoolInput}
                onChange={(e) => setAlcoolInput(Number(e.target.value))}
              />
          </section>
          <section className='input-container'>
              <label className='combustivel-label'>Gasolina</label>
              <input 
                className='combustivel-input' 
                type="number"
                min="1"
                step="0.01"
                required
                placeholder='Informe o atual preço da gasolina por litro...'
                value={gasolinaInput}
                onChange={(e) => setGasolinaInput(Number(e.target.value))}
              />
          </section>
        </div>
        <div className='button-container'>
          <input className="button" type="submit" value="Calcular" />
        </div>
      </form>
    </main>
    <footer>
      <div className='resultado-container'>
        {info  && Object.keys(info).length > 0 && (
              <section className="resultado">
                <h2 className="resultado-title">
                  {info.title}
                </h2>
                <span>Álcool {info.alcool}</span>
                <span>Gasolina {info.gasolina}</span>
              </section>
            )}
      </div>
    </footer>
    </>
  )
}

export default App
