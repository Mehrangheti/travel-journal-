import { useState } from 'react'
import MainContent from './components/mainContent.jsx'
import './App.css'
import Header from './components/header.jsx'
import data from './data.js'

function App() {
  const [count, setCount] = useState(0)

       const content = data.map(item => {
        return (
            <MainContent 
            imageUrl={item.imageUrl}
                title={item.title}
                googleMapsUrl={item.googleMapsUrl}
                location={item.location}
                startDate={item.startDate}
                endDate={item.endDate}
                description={item.description}
            />
        )
    }) 
    return (
      <div>
        <Header />
          <section className="content">
              {content}
          </section>
      </div>
  )
}


export default App
