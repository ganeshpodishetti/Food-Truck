import data from '../server.js'
import './App.css'
import Card from './components/Card'

function App() {
  const cards = data.map(element => {
    return <Card 
          key = {element.id}
          {...element}
    />
  })
  return (
    <div className="App">
      <div className="header"> 
        <h1> Food Truck Favorite </h1>
      </div>
      <div className = "cards-list"> 
        {cards}
      </div>
    </div>
  )
}

export default App