import styles from "./style";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Billing, About, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import Guidelines from "./components/Guidelines";

const App = () => (


  <div className="bg-primary w-full overflow-hidden">
    <BrowserRouter>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Routes>
            <Route path="/clients" element={<Clients />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/guidelines" element={<Guidelines />}></Route>
          </Routes>
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
          <Footer />
        </div>
      </div>
    </BrowserRouter>

  </div>

);

export default App;
