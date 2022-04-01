import { Carousel } from 'react-carousel-minimal'

function Caroussel() {
  const data = [
    {
      image:
        'https://parkofideas.com/goldish/demo1/wp-content/uploads/2021/09/goldish-1910574079-1536x869.jpg?fbclid=IwAR30jAGJ6G8a6FbwqvojoJLmq556MdRyjpcAA6le6D4ca3OULfC7YTVpOJc',
      caption: `<div> 
        <h1> Homemade Jewerly Collection <h1>
        <h3> Elegant and Modern Set <h3>
  
        
        </div>`,
    },
    {
      image:
        'https://parkofideas.com/goldish/demo1/wp-content/uploads/2021/09/goldish-1513843201-1536x869.jpg?fbclid=IwAR00FQVssWrMAaZh1W89oGwxG-ArUOGNb9di4Gc1P0O9DYSfbm0hdL3kGAQ',
      caption: `<div> 
        <h1> Homemade Jewerly Collection <h1>
        <h3> Elegant and Modern Set <h3>
    
        
        </div>`,
    },
    {
      image:
        'https://parkofideas.com/goldish/demo1/wp-content/uploads/2021/09/goldish-1910529058-1536x869.jpg?fbclid=IwAR23Bdvj5MyPZV9GPPxyOpbiT0l_BKPW7Lz46UZkNbXYXeMVt0zaJdztuRw',
      caption: `<div> 
        <h1> Homemade Jewerly Collection <h1>
        <h3> Elegant and Modern Set <h3>
      
        </div>`,
    },
    {
      image: './image/lnk_793602_fr_h.jpg',
      caption: `<div> 
        <h1> Homemade Jewerly Collection <h1>
        <h3> Elegant and Modern Set <h3>

        
        </div>`,
    },
  ]

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className='App'>
      <div
        style={{
          padding: '0 20px',
        }}
      >
        <Carousel
          data={data}
          time={1000}
          width='1400px'
          height='500px'
          showNavBtn={false}
          captionStyle={captionStyle}
          slideNumber={false}
          slideNumberStyle={slideNumberStyle}
          captionPosition='center'
          automatic={true}
          dots={false}
          pauseIconColor='white'
          pauseIconSize='40px'
          slideBackgroundColor='darkgrey'
          slideImageFit='cover'
          thumbnails={false}
          thumbnailWidth='600px'
          style={{
            textAlign: 'center',
            maxWidth: '1400px',
            maxHeight: '1000px',
            margin: '40px auto',
          }}
        />
      </div>
    </div>
  )
}

export default Caroussel
