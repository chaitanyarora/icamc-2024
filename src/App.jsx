import styles from "./style";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Billing, About, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero, CallForPaper, Guidelines, Committe, AdvisoryBoard, Date } from "./components";

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
            <Route path="/home" element={
              <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                  <Hero />
                </div>
              </div>  

            }></Route>
            <Route path="/clients" element={<Clients />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/guidelines" element={<Guidelines />}></Route>
            <Route path="/callForPaper" element={<CallForPaper />}></Route>
            <Route path="/advisoryBoard" element={<AdvisoryBoard />}></Route>
            <Route path="/date" element={<Date />}></Route>
          </Routes>
        </div>
      </div>





      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          {/* <CallForPaper /> */}
          {/* <Stats /> */}
          {/* <Billing /> */}
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
