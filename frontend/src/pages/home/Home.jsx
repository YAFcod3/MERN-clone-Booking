import './home.css'
import { Navbar } from '../../components/navbar/Navbar'
import { Header } from '../../components/header/header'
import Featured from '../../components/featured/Featured'
import {PropertyList}  from '../../components/propertyList/PropertyList'
import { FeaturedProperties } from '../../components/featuredProperties/FeaturedProperties'
import { MainList } from '../../components/mainList/MainList'
import { Footer } from '../../components/footer/Footer'




export const Home = () => {



  return (
    <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
          <Featured/>
          <h1 className="homeTitle">Browse by property type</h1>
          <PropertyList/>
          <h1 className="homeTitle">Home guests love</h1>
          <FeaturedProperties/>
          <MainList/>
          <Footer/>
        </div>
    </div>
  )
}
