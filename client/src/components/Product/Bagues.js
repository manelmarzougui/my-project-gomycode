import React, { useState } from 'react'
import './product.css'
import Productcard from './Productcard'
import { useSelector } from 'react-redux'

const Bagues = () => {
  const [text, settext] = useState('')
  const [prixFiltre, setPrixFiltre] = useState(0)
  const products = useSelector((state) => state.productListe.productListe)
  console.log(products)
  return (
    <div className='pg-prod'>
      <h2> Bagues</h2>
      <div className='product'>
        <div className='recherche'>
          <h5>Affiner votre recherche</h5>

          <input
            type='text'
            placeholder='Rechercher...'
            className='rech-inpt'
            onChange={(e) => settext(e.target.value)}
          />

          <h5>Prix...</h5>
          <div className='butn'>
            {/* <button>10DT</button>
            <button>100DT</button> */}
            <div className='range'>
              <input
                className='range-css'
                type='range'
                id='volume'
                name='volume'
                min='0'
                max='1000'
                onChange={(e) => setPrixFiltre(parseInt(e.target.value))}
              ></input>
              <span>{prixFiltre} DT</span>
            </div>
          </div>
        </div>
        <div className='procard'>
          {products ? (
            products
              .filter(
                (el) =>
                  el.category.toLowerCase() == 'bagues' &&
                  el.name.toLowerCase().includes(text.toLowerCase())
              )
              .filter((el) => el.prix >= prixFiltre || prixFiltre == 0)
              .map((el) => <Productcard product={el} />)
          ) : (
            <h3>loading</h3>
          )}
        </div>
      </div>
    </div>
  )
}

export default Bagues
