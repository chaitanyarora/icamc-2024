import styles from "./style";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";

const App = () => (
  

  <div className="bg-primary w-full overflow-hidden">
  <BrowserRouter>
  <Routes>
    <Route path="/clients" element = {<Clients />}></Route>
    <Route path="/products" element = {<Business />}></Route>
  </Routes>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <Stats /> */}
        <Billing />
        <CardDeal />
        
        {/* <Testimonials />
        <CTA />
        <Footer /> */}
      </div>
    </div>
  </BrowserRouter>

  </div>

);

export default App;
