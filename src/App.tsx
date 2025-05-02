import { Application } from "./components/application/application"
import "./App.css"
import Skills from "./components/skills/Skills"
import Counter from "./components/counter/Counter"
const App = () => {
  return (
    <div className="app">
      {/* <Application /> */}
      {/* <Skills skills={["React", "TypeScript", "Jest"]} /> */}
      <Counter />
    </div>
  )
}

export default App