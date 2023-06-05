import { useState } from 'react'
import './App.css'
import Title from './components/Title'
import Modal from './components/Modal'
import NewEventForm from './components/NewEventForm'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([])

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event]
    })
    setShowModal(false)
  }

  // console.log(showModal)

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
      return event.id !== id
      })
    })
   console.log(id)
  }

  // const handleClose = () => {
  //   setShowModal(false)
  // }

  const subtitle = "All the latest events in Marioland"

  return (
    <>
    <div className="App">
      
      <Title title="Event in Your Area" subtitle={subtitle}/>
   
      {showEvents && (
      <div>
        <button onClick={() => setShowEvents(false)}>hide events</button>
      </div>
      )}
       {!showEvents && ( 
       <div>
        <button onClick={() => setShowEvents(true)}> show events</button>
      </div>
       )}
    </div>
       {showEvents && events.map((event, index) => (
        <div key={event.id}>
          <h2>{index} - {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>delete event</button>
        </div>
       ))}

       {/* <Modal>
        <h2>10% Off Coupon Code!</h2>
        <p>Use the code NINJA10 at the checkout.</p>
       </Modal> */}

       {showModal && <Modal>
        <NewEventForm addEvent={addEvent}/>
      </Modal>}

      <div>
        <button onClick={() => setShowModal(true)}>Add New Event</button>
      </div>
    </>
  )
}

export default App
