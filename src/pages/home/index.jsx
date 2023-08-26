import { useState, useEffect } from "react"
import "../../styles/style.css"
import users from "../../services/API_MOCK"
// import users from "../../services/API"

// components
import Header from "../../components/header"
import Aside from "../../components/aside"
import Banner from "../../components/banner"
import KeyDataContainer from "../../components/keydataContainer/keydataContainer"

const Home = () => {
  const [datas, setDatas] = useState([])

  useEffect(() => {
    setDatas(users)
  }, [])

  console.log(datas)

  return (
    <div className="container">
      <div className="grid-item grid-item-1">
        <Header />
      </div>
      <div className="grid-item grid-item-2">
        <Aside />
      </div>
      <div className="grid-item grid-item-3">
        <Banner datas={users} />
      </div>
      <div className="grid-item grid-item-4">bloc 4</div>
      <div className="grid-item grid-item-5">bloc 5</div>
      <div className="grid-item grid-item-6">bloc 6</div>
      <div className="grid-item grid-item-7">bloc 7</div>
      <div className="grid-item grid-item-8">
        <KeyDataContainer datas={users} />
      </div>
    </div>
  )
}

export default Home