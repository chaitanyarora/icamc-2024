import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4 text-white`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
    <h1 className={styles.heading2}>Contact Us</h1>

   <p className={`${styles.paragraph} mt-5`}> Email ID: icamc@hmritm.ac.in

Contact: +91 9999629550</p>
    
    
      {/* {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
          <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
        </div>
      ))} */}
      
    </div>
  </section>
);

export default Clients;
