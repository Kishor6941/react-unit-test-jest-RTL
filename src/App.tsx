import { Application } from "./components/application/application"
import "./App.css"
import Skills from "./components/skills/Skills"
const App = () => {
  return (
    <div className="app">
      {/* <Application /> */}
      <Skills skills={["React", "TypeScript", "Jest"]} />
    </div>
  )
}

export default App