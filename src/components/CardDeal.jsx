import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
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
                        <tr>
                            <td>Faculty/Academician Participants</td>
                            <td>₹1700</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Research Scholars/Students</td>
                            <td>₹1200</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Industry Participants</td>
                            <td>₹2000</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Foreign Participants</td>
                            <td>USD 50</td>
                            <td>-</td>
                        </tr>
                    </table>
                </div>
      </p>

      <Button styles={`mt-10`} />
    </div>

    {/* <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div> */}
  </section>
);

export default CardDeal;
