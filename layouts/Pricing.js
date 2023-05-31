import Link from "next/link";
import Cta from "./components/Cta";

function Pricing({ data }) {
  const {
    frontmatter: { title, plans, call_to_action },
  } = data;
  return (
    <>
      <section className="section pb-0">
        <div className="container">
          <h1 className="text-center font-normal">{title}</h1>       
          <div className="section row -mt-10 justify-center md:mt-10 card">
          <h4 className={"text-center mb-10"}>IN-PERSON THERAPY</h4>
            {plans.map((plan, index) => (
              <div className={`col-12 md:col-5`}
              >
                <div className="card text-center btn-primary">
                  <h4>{plan.title}</h4>
                  <ul className="mt-5">
                    {plan.features.map((feature, index) => (
                      <li className="m-[30px] leading-5 font-normal" key={index}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className='text-text'>{plan.type}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="section row -mt-10 justify-center md:mt-10 card">
          <h4 className={"text-center mb-10"}>fleX ONLINE THERAPY</h4>
          {call_to_action.map((plan, index) => (
              <div className={`col-12 md:col-5`}
              >
                <div className="card text-center btn-primary">
                  <h4>{plan.title}</h4>
                  <ul className="mt-5">
                    {plan.features.map((feature, index) => (
                      <li className="m-[30px] leading-5 font-normal" key={index}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className='text-text'>{plan.type}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <Cta cta={call_to_action} /> */}
    </>
  );
}

export default Pricing;
