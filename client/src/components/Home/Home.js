import React from 'react'
import Featured from './Featured'
import Avis from './Avis'
import './home.css'
import Caroussel from '../caroussel/Caroussel'
import { MdAttachMoney } from 'react-icons/md'
import { MdMoreTime } from 'react-icons/md'
import { MdOutlineHighQuality } from 'react-icons/md'
import { MdDeliveryDining } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <div className='prt1'>
        <Caroussel />

        <div className='section-nav'>
          <div className='article-nav'>
            <Link to='/bagues'>
              <img src='./image/ring.png' alt='ring' />
              <h4>Bagues</h4>
            </Link>
          </div>
          <div className='article-nav'>
            <Link to='/colliers'>
              <img src='./image/collier.jpg' alt='collier' />
              <h4>Colliers</h4>
            </Link>
          </div>
          <div className='article-nav'>
             <Link to='/bracelets'>
            <img src='./image/braclet.jpg' alt='bracelets' />
            <h4>Bracelets</h4>
            </Link>
          </div>
          <div className='article-nav'>
            <Link to='/boucle'>
              <img src='./image/boucles.png' alt='boucles' />

              <h4>Boucles </h4>
            </Link>
          </div>
          <div className='article-nav'>
            <Link to='/mariage'>
              <img src='./image/set.png' alt='set' />
              <h4>Mariage</h4>
            </Link>
          </div>
          <div className='article-nav'>
            <Link to='/pierres'>
              <img src='./image/diamant.png' alt='diamant' />
              <h4>Pierres</h4>
            </Link>
          </div>
        </div>
      </div>

      <h2 className='titre'>Nos Collections Exclusives</h2>

      <Featured />
      <h2 className='titre'>Nos Bigoux</h2>

      <div className='grp'>
        <div className='grp-desc'>
          <h1>Nos Bigoux</h1>
          <p>
            Nos Maison dessine et fabrique des bijoux intemporels et chic pour
            célébrer les moments heureux d'une famille. Nos braceletspeuvent
            être personnalisés par une gravure unique.
          </p>
        </div>
        <img src='./image/imagess.png' alt='img' />
      </div>
      <Avis />
      <div className='break-line'></div>
      <div className='collection'>
        <img src='./image/collection.png' alt='collection' />
      </div>
      <div className='section-foot'>
        <div className='sec-foot'>
          <MdDeliveryDining className='icnn' />
          <h5>Livraison Gratuite</h5>
        </div>
        <div className='sec-foot'>
          <MdAttachMoney className='icnn' />
          <h5>Remboursement</h5>
        </div>
        <div className='sec-foot'>
          <MdMoreTime className='icnn' />
          <h5>24/7 Support</h5>
        </div>
        <div className='sec-foot'>
          <MdOutlineHighQuality className='icnn' />
          <h5>Bonne Qualité</h5>
        </div>
      </div>
    </div>
  )
}

export default Home
