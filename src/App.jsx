import Card from "./components/Card"
import projectData from "./assets/data"

function App() {
  
  return (
    <main >
       {projectData.map((item) => (
        <Card 
           key={item.id}
          date={item.date}
          btnName={item.btnName}
          text={item.text}
          color={item.color}
        />
       ))}
    </main>
  )
}

export default App
