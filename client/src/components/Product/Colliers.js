import React, { useState } from 'react'
import Productcard from './Productcard'
import { useSelector } from 'react-redux'

const Colliers = () => {
  const [text, settext] = useState('')
  const [prixFiltre, setPrixFiltre] = useState(0)
  const products = useSelector((state) => state.productListe.productListe)
  console.log(products)
  return (
    <div className='pg-prod'>
      <h2> Colliers</h2>
      <div className='product'>
        <div className='recherche'>
          <h5>Affiner votre recherche</h5>

          <input
            type='text'
            placeholder='Rechercher...'
            onChange={(e) => settext(e.target.value)}
          />

          <h5>Prix...</h5>

          <div className='range'>
            <input
              type='range'
              id='volume'
              name='volume'
              min='0'
              max='1000'
              onChange={(e) => setPrixFiltre(parseInt(e.target.value))}
            ></input>
            <span className='fl-pr'>{prixFiltre} DT</span>
          </div>
        </div>
        <div className='procard'>
          {products ? (
            products
              .filter(
                (el) =>
                  el.category.toLowerCase() == 'colliers' &&
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

export default Colliers
