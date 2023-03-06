import { useState } from 'react'
import './App.css'
import { QRCode } from 'antd'
import pic from "../public/photo.webp"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <QRCode 
      value="https://elaborate-tartufo-696041.netlify.app"
      icon={pic}
      iconSize={58}
      color='seagreen'
      >
      </QRCode>
    </div>
  )
}

export default App
