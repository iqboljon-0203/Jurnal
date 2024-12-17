import './App.css'
import Main from "./components/Main/Main.jsx"
import Articles from './components/Articles/Articles.jsx'
import PublisherScroll from './components/Indecation/PublisherScroll.jsx'
import LatestIssues from './components/LatestIssue/LatestIssues.jsx'
import Footer from './components/Footer/Footer.jsx'
function App() {

  return (
    <>
      <Main></Main>
      <Articles></Articles>
      <PublisherScroll></PublisherScroll>
      <LatestIssues></LatestIssues>
      <Footer></Footer>
    </>
  )
}

export default App
