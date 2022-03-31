import React from 'react'

const cart = () => {
  return (
    <div>
      <div className='card-panier'>
        <img
          src='https://cdn.shopify.com/s/files/1/0264/9338/6812/products/AA-N083-5_700x.jpg?v=1646774925'
          alt='logo'
        />
        <div className='panier-desc'>
          <MdClose className='close'/>
          <h6 className='inofff'> MOON and STAR NECKLACE</h6>
          <h5>85.900DT</h5>
          <div>
            <div className='qnt'>
              <button>-</button>
              <input type='text' name='' id='' />
              <button>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default cart