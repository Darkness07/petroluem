import { Route, Routes } from "react-router-dom";
import SideBar from "./components/Navbar/Sidebar";
import NavBar from "./components/Navbar/NavBar";
import More from "./components/Link/More/More";
import Home from "./components/Home/Home";
import Laboratory from "./components/Link/More/Laboratory";
import NevPage from "./components/Link/More/newPage/Newpage";
import Footer from "./components/Footer/Footer";

import './App.css'
import Leaders from "./components/Home/Leaders/Leaders";
import Procurement from "./components/Home/Procurement";
import NewsPage from "./components/NewsPage/NewsPage";
import PricePage from "./components/PricePage/PricePage";
import ProdactionPage from "./components/ProdactionPage/ProdactionPage";
import NewsSinglePage from "./components/NewsSinglePage/NewsSinglePage";

function App() {
  return (
    <main>
      <div className="App">
   
        <div className="body">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/more" element={<More />} />
            <Route path="/lab" element={<Laboratory />} />
            <Route path="/newPage" element={<NevPage />} />
            <Route path='/leaders' element={<Leaders/>}/>
            <Route path='/purchases' element={<Procurement/>}/>
            <Route path='/news' element={<NewsPage/>}/>
            <Route path="/price" element={<PricePage />}/>
            <Route path="/prodaction_page" element={<ProdactionPage/>} />
            <Route path="/news/news_single/:id" element={<NewsSinglePage />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
