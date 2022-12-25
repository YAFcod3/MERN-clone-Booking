import './searchItem.css'

export const SearchItem = () => {
  return (
    

    <div className="searchItem">


      <img className='siImg'
      src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg" alt="" 
      />

      <div className="siDesc">
        <h1 className='siTitle'>Tower Street Apartament</h1>
        <span className='siDistance'>500m from center</span>
        <span className='siTaxiOp'>Free airoport Taxi</span>
        <span className='siSubtitle'>with Air conditioning</span>
        <span className='siFeatures'>Entire studio * 1 bathroom * 21m 1 full bed</span>
        <span className='siCancelOp'>Free cancellation</span>
        <span className='siCancelOpSubtitle'>You can Cancel later , so lock in this great price today!</span>

      </div>

      <div className="siDetails">
         <div className="siRaiting">
            <span>Excellent</span>
            <button>8.9</button>
         </div>
         <div className="siDetailText">
          <span className='siPrice'>$123</span>
          <span className='siTaxOp'>Include Taxes and fees</span>
          <button className='siCheckButton'>See availability</button>
         </div>
      </div>
    </div>
  )
}
