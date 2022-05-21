import React from 'react'
import '../CSS/Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className="home__contaianer">
            <img className='home__img' src="https://m.media-amazon.com/images/I/81eCjIs+p3L._SX3000_.jpg" alt="" />
            
            <div className="home__row">
                {/* product */}
                < Product title='TCL Tab 10 (10.1 inches WUXGA Display, 3GB+64GB, 5500mAh, Wi-Fi + 4G Calling Tablet (Black) (9060G (Black)'
                          price={7999.00}
                          rating={3}
                          imgsrc="https://www.lenovo.com/medias/Tab-K10-SS-Hero.png?context=bWFzdGVyfHJvb3R8NTYzNDV8aW1hZ2UvcG5nfGg1NC9oNmEvMTI2ODMzNjQ4MjcxNjYucG5nfDU1MTA2MjAzMTdjMjQyZGU2NjQyZjczNjYzZDJmNmM3YTI0YjUyZGE5YzA0YjVkYTk1NjUzOTExZjc0YmZkNGI"
                          id={1}
                />
                < Product title='All-new Fire TV Stick Lite with Alexa Voice Remote Lite | Stream HD Quality Video | No power and volume buttons'
                           price={2499.00}
                           rating={5}
                           imgsrc="https://m.media-amazon.com/images/I/61KjlGbj8WS._SX679_.jpg" 
                           id={2}
                           />
                           
                {/* product */}

            </div>

            <div className="home__row">
                < Product title='Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)'
                           price={2499.00}
                           rating={4}
                           imgsrc="https://m.media-amazon.com/images/I/61WUqJd4dfS._SX679_.jpg" 
                           id={3}
                           />
                           
                < Product title="Emporio Armani Men's Sigma Chronograph Sport Watch With Quartz Movement"
                           price={12247.00}
                           rating={5}
                           imgsrc="https://m.media-amazon.com/images/I/913lbw3GvwL._UX522_.jpg"
                           id={4}
                           />
                           
                < Product title='Kuber Industries 20 cms Grey School Backpack (TR8891)'
                           price={299.00}
                           rating={3}
                           imgsrc="https://m.media-amazon.com/images/I/71dcwMxdDXL._UX679_.jpg" 
                           id={5}
                           />
                           
                {/* product */}
                {/* product */}
                {/* product */}
                
            </div>

            <div className="home__row">
                 < Product title='Redmi 80 cm (32 inches) HD Ready Smart LED TV | L32M6-RA/L32M7-RA (Black) (2021 Model) | With Android 11'
                           price={14999.00}
                           rating={5}
                           imgsrc="https://m.media-amazon.com/images/I/71HcZHyEsTL._SX522_.jpg" 
                           id={6}
                           />
                           
                {/* product */}
            </div>

        </div>
       
    </div>
  )
}

export default Home
