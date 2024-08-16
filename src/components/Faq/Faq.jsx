import { useState } from "react";
import SingleFaq from "./SingleFaq";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqList = [
    {
      title: "What is Zuvlo?",
      description:
        "Zuvlo is a fan-site where creators can provide their audience with exclusive content and where they can interact with each other.",
    },
    {
      title: "What are the fees on Zuvlo?",
      description:
        "We're currently offering creators a 0% fee for their first 3 months on Zuvlo, and just 9% after that, making us one of the highest paying platforms in the whole industry.",
    },
    {
      title: "What features does Zuvlo have compared to other platforms?",
      description:
        "Besides the basic functions of a fan-site, where you can sell subscriptions and PPV content, we also have features like - creating your own physical items store, creating your own clip store, having paid video calls with your fans, a 'For you' page, and a ton more...",
    },
    {
      title: "Do Zuvlo offer chargeback protection?",
      description:
        "Yes, we're offering all of our creators with full chargeback protection, because we know how annoying chargebacks can be for a content creator.",
    },
    {
      title: "What are the payout methods available Zuvlo?",
      description:
        "At the moment we offer the following payout methods: Bank Transfer, Crypto (BTC, ETH, USDT and LTC), PayPal, Skrill, Paxum and Cosmo. If you require any additional payout methods then please get in touch with our support team.",
    },
    {
      title: "Does Zuvlo have a Brand Ambassador program?",
      description:
        "Yes, we are still running our Brand Ambassador program, but we have a very limited amount of spots left, so please get in touch with our support team ASAP if you'd like to apply.",
    },
  ];

  const handleFaq = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="container pb-[80px] xl:pb-[250px] ">
      <div className="text-center space-y-4 xl:space-y-5">
        <h3 className=" text-[32px] leading-[48x] xl:text-[64px] text-[#101828] xl:leading-[84px] font-semibold ">
          Frequently asked questions{" "}
        </h3>
        <p className=" xl:text-[18px] leading-7 text-[#667085]   ">
          Everything you need to know about the product and billing.
        </p>
      </div>
      {/* faq wrapper */}
      <div className=" pt-14 xl:pt-[90px] flex flex-col gap-4 xl:gap-5">
        {faqList.map((item, index) => (
          <SingleFaq
            isOpen={openIndex === index}
            openFaq={() => handleFaq(index)}
            faq={item}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Faq;
