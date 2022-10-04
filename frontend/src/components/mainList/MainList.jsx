import './mainList.css'

export const MainList = () => {
  return (
    <div className="mail">
     <h1 className="mailTitle">Save time,save money!</h1>
     <span className="mailDesc">Sign up and we'll send the best deals to you</span>
     <div className="mailInputContainer">
      <input type="text" placeholder='Your Email' />
      <button>Suscribe</button>
     </div>
    </div>
  )
}
