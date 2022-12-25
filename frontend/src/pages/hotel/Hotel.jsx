import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot,faCircleXmark,faCircleArrowLeft,faCircleArrowRight} from "@fortawesome/free-solid-svg-icons"
import { Header } from '../../components/header/Header';
import { Navbar } from '../../components/navbar/Navbar';
import './hotel.css'
import  {MainList}  from '../../components/mainList/MainList';
import { Footer } from '../../components/footer/Footer';
import { useState } from 'react';







const Hotel = () => {

  const [sliderNumber, setSliderNumber] = useState(0)
  const [open, setOpen] = useState(false)


  

  const handleOpen=(i)=>{

    setSliderNumber(i)
    setOpen(true)
   }
   




   const handleMove=(direction)=>{

    let newSlideNumber;

    if(direction==="l"){

      newSlideNumber = sliderNumber === 0  ? 5 : sliderNumber-1

    }else{
      newSlideNumber = sliderNumber === 5  ? 0 : sliderNumber+1
    }



    setSliderNumber(newSlideNumber)

   }

  const photos=[
    { src:"https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="},
    { src:"https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="},
    { src:"https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="},
    { src:"https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="},
    { src:"https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="},
    {src:"https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="}
   
   
  ]
  
  
  
  return ( 
    <div>
      
       <Navbar/>
       <Header type='list'/>
       <div className="hotelContainer">

       {open &&
          <div className="slider">
              <FontAwesomeIcon onClick={()=>setOpen(false)} icon={faCircleXmark} className='close'/>
              <FontAwesomeIcon onClick={()=>handleMove("l")} icon={faCircleArrowLeft} className='arrow'/>
              <div className="sliderWrapper">
                <img src={photos[sliderNumber].src} alt="" className="sliderImg" />
              </div>
              <FontAwesomeIcon onClick={()=>handleMove("r")} icon={faCircleArrowRight} className='arrow'/>

          </div>}

        <div className="hotelWrapper">

          <button className="bookNow">
            Reserve or Book Now!
          </button>


          <h1 className='hotelTitle'>Gran Hotel</h1>

          {/*address */}
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Elton St 125 New York</span>
          </div>
          <span className='hotelDistance'>Excellent location 500m from center</span>
          <span className='hotelPricrHighLight'>Book a stay over $114 at this property and  get a free airport taxi</span>

          {/*images */}
          <div className="hotelImages">
            {photos.map((photo,i)=>(
              <div className="hotelImgWrapper">
                <img onClick={()=>handleOpen(i)} src={photo.src} className='hotelImg' alt="" />
              </div>
            ))}
          </div>

          {/*details */}
          <div className="hotelDetails">

            {/*izquierda */}
            <div className="hotelDetailsText">
              <h1 className='hotelTitle'>Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste ipsam dolor animi deserunt in maxime nobis voluptatibus quod? Consequuntur provident at commodi aspernatur ullam sunt, eius doloribus quaerat ab, doloremque perspiciatis et id pariatur maiores mollitia quisquam repudiandae cumque totam nostrum molestiae nobis itaque. Accusantium, temporibus quibusdam obcaecati magnam, fugit veritatis eligendi similique voluptate vel nemo explicabo ea laudantium iusto praesentium ullam, sed ut error magni at corporis excepturi voluptatem ab culpa unde. Dolores culpa sunt molestiae! Alias, cumque expedita qui sit consectetur accusantium quasi nobis cupiditate in laborum eius minima ut nulla molestias laboriosam iure sapiente reprehenderit corporis at. Atque excepturi laboriosam quod quae assumenda ratione ab cupiditate quas omnis repellat culpa enim, temporibus in! Blanditiis adipisci dolorem explicabo consequatur quia! Ut accusamus amet ipsum natus repellendus esse nesciunt doloribus beatae aut quaerat accusantium neque blanditiis odit voluptatem, reprehenderit laboriosam, nobis nisi eveniet! Obcaecati libero id reiciendis, aspernatur dolorum quibusdam cum labore laboriosam accusantium ipsa? Doloribus culpa excepturi enim consectetur voluptatibus numquam aliquid officiis facilis q
              </p>
            </div>
            {/*price */} {/*derecha */}
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-nigth stay!</h1>
              <span>Located in the real heart of Krakow, this property has an excellent location score of 9.81</span>
              <h2><b>$945</b> (9 nigths)</h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>



        </div>
       
       </div>
       <MainList/>
       <Footer/>

    </div>
   );
}




  export default Hotel;
