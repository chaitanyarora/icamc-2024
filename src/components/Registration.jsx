import { registration } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const Registration = () => (
  <section id="registration" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Registration Fees
      </h2>
      <p className={`${styles.paragraph}  mt-5`}>
      <div class="d-flex justify-content-center">
                    <table class="table">
                        <tr>
                            <th></th>
                            <th>Early Bird Registration Fee</th>
                            <th>Post Early Bird Registration Fee</th>
                        </tr>
                        {registration.map((reg) => (
                            <tr id={`${reg.id}`}>
                                <td>{reg.type}</td>
                                <td>{reg.amountEarly}</td>
                                <td>{reg.amountPost}</td>
                            </tr>
                        ))}
                    </table>
                </div>
      </p>
    </div>
  </section>
);

export default Registration;