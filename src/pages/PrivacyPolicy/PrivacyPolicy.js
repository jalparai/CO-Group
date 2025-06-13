import { useEffect, useState } from "react";
import { apiclient } from "../../apiConfig/apiConfig"
import { Footer } from "../../layout";

const fetchdata = async () => {
  try {
    const response = await apiclient.get("/guides/get/67d33aed742e280b82c7b6ae");
    console.log("Response: ", response);
    return response.data;
  } catch (error) {
    console.error("Error: ", error);
  }
};

const PrivacyPolicy = () => {

  const [data, setData] = useState(null);
  
    useEffect(() => {
      fetchdata().then((data) => {
        setData(data.guide);
      });
    }
    , []);


  return (
  <>
    <div className="w-full max-w-[1272px] mx-auto px-4 privacy_policy">
      {/* Navigation Button */}
      <div className="flex justify-left mt-[48.08px] lg:mt-[290px] gap-4">
        <button
          className="text-white border text-[10px] sm:text-[12px] lg:text-[16px] font-Montserrat rounded-[30px] px-[21.56px] py-[13.2px] lg:px-[38px] lg:py-[21px] gap-2 inline-flex justify-center items-center hover:bg-white/20 hover:border-white/20 transition-colors duration-500"
          type="button"
        >
          Home / Privacy Policy
        </button>
      </div>

      {/* Title and Last Modified Info */}
      <div className="my-[74px]">
        <h1 className="text-[32px] md:text-[40px] lg:text-[50px] text-[#989898] font-bold font-Montserrat">
          Privacy Policy.
        </h1>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          Last modified on {data?.formattedDate}
        </p>
      </div>

      <div dangerouslySetInnerHTML={{ __html: data?.content }} />
      {/* Privacy Policy Content
      <div className="mt-[74px] mb-[30px]">
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          <span className="font-bold">COD POWER GROUP</span> provides various
          merchants and manufacturers with direct order fulfillment services to
          the customer, under which COD POWER GROUP stores, packs, and ships
          products to the merchant's customers; and Therefore, the company
          wishes to retain the services of COD POWER GROUP, and COD POWER GROUP
          wishes to provide services to the company, subject to the terms and
          conditions of this agreement; and Therefore, the parties agree as
          follows, in consideration of the mutual covenants and conditions set
          forth herein, and for other good and valuable reasons, the receipt and
          sufficiency of which are acknowledged hereby:
        </p>
      </div>

      {/* Appointment Section */}
      {/* <div className="font-Montserrat text-justify my-[30px]">
        <h2 className="text-[24px] md:text-[28px] lg:text-[30px] text-[#989898] font-bold font-Montserrat mt-[20px] md:mt-[25px] lg:mt-[30px]">
          Appointment.
        </h2>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          The Company hereby engages COD POWER GROUP to provide, and COD POWER
          GROUP hereby agrees to provide, the services (as defined below) to the
          Company for the duration of the period and renewal period described in
          Article 2. The conduct of the Parties during the term and any renewal
          period shall be subject to the terms and conditions of this agreement,
          including compliance with the various policies of COD POWER GROUP.
        </p>
      </div> */}

      {/* Terms Section */}
      {/* <div className="font-Montserrat text-justify my-[30px]">
        <h2 className="text-[24px] md:text-[28px] lg:text-[30px] text-[#989898] font-bold font-Montserrat mt-[20px] md:mt-[25px] lg:mt-[30px]">
          Terms.
        </h2>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          This agreement shall become effective on the effective date and shall
          last for one year, unless terminated earlier in accordance with the
          provisions of this agreement or applicable law ("Term"). This
          agreement shall automatically renew for additional successive one (1)
          year periods at the expiration of the term, unless either party gives
          written notice of termination at least thirty (30) days prior to the
          end of the current term, or unless earlier terminated in accordance
          with this agreement or applicable law (each such period being called a
          "Renewal Period"). If the term is renewed for one or more renewal
          periods in accordance with this section, the terms and conditions of
          this agreement, as well as any attachments, shall be the same as those
          in effect immediately prior to renewal.
        </p>
      </div> */}

      {/* COD Power Group Services Section */}
      {/* <div className="font-Montserrat text-justify my-[30px]">
        <h2 className="text-[24px] md:text-[28px] lg:text-[30px] text-[#989898] font-bold font-Montserrat mt-[20px] md:mt-[25px] lg:mt-[30px]">
          COD Power Group Services.
        </h2>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          This agreement shall become effective on the effective date and shall
          last for one year, unless terminated earlier in accordance with the
          provisions of this agreement or applicable law ("Term"). This
          agreement shall automatically renew for additional successive one (1)
          year periods at the expiration of the term, unless either party gives
          written notice of termination at least thirty (30) days prior to the
          end of the current term, or unless earlier terminated in accordance
          with this agreement or applicable law (each such period being called a
          "Renewal Period"). If the term is renewed for one or more renewal
          periods in accordance with this section, the terms and conditions of
          this agreement, as well as any attachments, shall be the same as those
          in effect immediately prior to renewal.
        </p>
      </div> */}

      {/* Service Details */}
      {/* <div className="font-Montserrat text-justify my-[30px]">
        <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-[#958D8D] font-bold mt-[10px] sm:mt-[12px] md:mt-[15px]">
          3.1. Provides The Following Services To The Company (Collectively, The
          "Services"):
        </h3>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          (a) Receive the company's product deliveries.
          <br />
          (b) Ensure the storage of goods in COD POWER GROUP's premises ("the
          warehouse"). (c) When the Company receives a purchase notice for
          products from a customer, COD POWER GROUP will pick and pack the
          products from its available stock and ship them directly to the
          customer (the "end user").
          <br />
          (d) At its discretion, COD POWER GROUP will use appropriate packaging
          material (e.g., bubble wrap, boxes with filler, etc.).
          <br />
          (e) COD POWER GROUP will include a shipping slip from the Company.
          <br />
          (f) COD POWER GROUP will process, pack, and ship all product orders in
          accordance with COD POWER GROUP's policies, as well as any additional
          conditions specified in Annex A.
          <br />
          (g) COD POWER GROUP will maintain a monthly record of all orders
          shipped and received, which will be made available to the Company upon
          request.
          <br />
          (h) COD POWER GROUP will facilitate the return of products from the
          end user to the company.
          <br />
          (i) COD POWER GROUP will provide all additional services, including
          special work, that the company wishes COD POWER GROUP to perform, as
          described in more detail in the attached Annex A, which may be amended
          from time to time, as agreed by the parties. Company Performance
        </p>
      </div> */}

      {/* Company Compliance */}
      {/* <div className="font-Montserrat text-justify my-[30px]">
        <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-[#958D8D] font-bold mt-[10px] sm:mt-[12px] md:mt-[15px]">
          4.1. General Compliance With Laws And Conventions
        </h3>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          The Company shall at all times comply with all laws applicable to this
          Agreement and the obligations arising therefrom, including the sale of
          Products to end users. Without limiting the generality of the
          foregoing, the Company shall, at its own expense, maintain all
          certifications, authorizations, licenses, and permits necessary for
          the conduct of its business related to the sale of products; and shall
          not engage in any activity or transaction involving the products, by
          shipment, use or otherwise, that would violate any law.
        </p>
      </div> */}

      {/* Payment and Invoicing */}
      {/* <div className="font-Montserrat text-justify my-[30px]">
        <h2 className="text-[24px] md:text-[28px] lg:text-[30px] text-[#989898] font-bold font-Montserrat mt-[20px] md:mt-[25px] lg:mt-[30px]">
          Payment And Invoicing
        </h2>
        <h3 className="text-[20px] text-[#958D8D] font-bold mt-[15px]">
          5.1. COD POWER GROUP Fees
        </h3>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          The company agrees to pay COD POWER GROUP for the services according
          to the amounts specified in Annex A, which may be amended from time to
          time as agreed by the parties.
        </p>
      </div> */}

      {/* Invoicing Section */}
      {/* <div className="font-Montserrat text-justify my-[30px]">
        <h3 className="text-[20px] text-[#958D8D] font-bold mt-[15px]">
          5.2. Invoicing
        </h3>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          COD POWER GROUP sends invoices to the Company based on what has been
          agreed upon in the contract, on the agreed date of each month, for the
          period following the end of the period for which the services were
          provided. All fees and invoices must be prepaid by default.
        </p>
      </div>
      <div className="font-Montserrat text-justify my-[30px]">
        <h3 className="text-[20px] text-[#958D8D] font-bold mt-[15px]">
          5.3. Product Billing
        </h3>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          All fees due for the cost of the Product must be paid directly to the
          Company by the end user. Under no circumstances will COD POWER GROUP
          accept, receive, or be responsible for payments made by an end user in
          exchange for the Product.
        </p>
      </div>
      <div className="font-Montserrat text-justify my-[30px]">
        <h3 className="text-[20px] text-[#958D8D] font-bold mt-[15px]">
          5.4. Payment Options And Methods
        </h3>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          COD POWER GROUP offers the Company the option to pay its invoices
          online via the Company's account using the following payment methods:
          Bank transfer (free), credit card (3% management fee), PayPal (4%
          management fee). COD POWER GROUP uses a third-party payment processing
          company, PayPal. COD POWER GROUP does not store any payment
          information on its own servers; all Company payment information is
          stored with PayPal. If the Company's invoice remains unpaid for more
          than 45 days from the date of issue, COD POWER GROUP reserves the
          right to automatically charge any payment method that has been used in
          the past.
        </p>
      </div>
      <div className="font-Montserrat text-justify my-[30px]">
        <h2 className="text-[24px] md:text-[28px] lg:text-[30px] text-[#989898] font-bold font-Montserrat mt-[20px] md:mt-[25px] lg:mt-[30px]">
          Ownership, Risk Of Loss, And Insurance
        </h2>
        <h3 className="text-[20px] text-[#958D8D] font-bold mt-[15px]">
          6.1. Ownership Title
        </h3>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          The Company hereby agrees that COD POWER GROUP holds no title or any
          other ownership right in the inventory during the period when the
          products are held by COD POWER GROUP as inventory in the warehouse.
          The Company retains ownership title of the stocks until the products
          are delivered to the end user.
        </p>
      </div>
      <div className="font-Montserrat text-justify my-[30px]">
        <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-[#958D8D] font-bold mt-[10px] sm:mt-[12px] md:mt-[15px]">
          6.2. Risk Of Loss
        </h3>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          The Company hereby agrees that COD POWER GROUP does not assume the
          risk of loss of inventory at any time during the period when the
          Products are held by COD POWER GROUP as inventory in the warehouse.
          The risk of loss of the stocks is retained by the Company until the
          Products are delivered to the end user.
        </p>
      </div>
      <div className="font-Montserrat text-justify my-[30px]">
        <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-[#958D8D] font-bold mt-[10px] sm:mt-[12px] md:mt-[15px]">
          6.3. Absence Of Insurance
        </h3>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          COD POWER GROUP is not responsible for the loss or damage of stocks
          stored in its premises. These events include, but are not limited to,
          theft, misuse, fire, natural disasters, or any other event not
          directly caused by COD POWER GROUP.
        </p>
      </div>
      <div className="font-Montserrat text-justify my-[30px]">
        <h2 className="text-[24px] md:text-[28px] lg:text-[30px] text-[#989898] font-bold font-Montserrat mt-[20px] md:mt-[25px] lg:mt-[30px]">
          Company Account
        </h2>
        <h3 className="text-[20px] text-[#958D8D] font-bold mt-[15px]">
          7.1. Company Account
        </h3>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          To create an account with COD POWER GROUP, the Company must provide
          COD POWER GROUP with identification data, a password, information
          about the company, and about the products (the "registration data").
          The Company agrees to provide accurate registration information and to
          update it as needed. The Company will receive validation and
          activation instructions after COD POWER GROUP has accepted the
          Company's account registration request ("Account"). Only authorized
          users have access to the account and may use it. The Company agrees
          not to share the password(s), account information, or account access.
          The Company is responsible for maintaining the confidentiality of
          passwords and account information, and is responsible for all
          activities that
        </p>
      </div>
      <div className="font-Montserrat text-justify my-[30px]">
        <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-[#958D8D] font-bold mt-[10px] sm:mt-[12px] md:mt-[15px]">
          7.2. Disputes Regarding Usage Fees
        </h3>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          If the Company disagrees with the usage fees (other than carrier or
          third-party fees) charged or imputed to the account, it must notify
          COD POWER GROUP in writing within 30 days following the billing of the
          fees ("dispute period"). Requests for adjustment of usage fees
          received after the dispute period will not be reviewed by COD POWER
          GROUP.
        </p>
      </div>
      <div className="font-Montserrat text-justify my-[30px]">
        <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-[#958D8D] font-bold mt-[10px] sm:mt-[12px] md:mt-[15px]">
          7.3. Liens
        </h3>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          COD POWER GROUP holds a first-ranking security interest in all
          products in stock and the proceeds of their sale to secure the payment
          of usage fees and third-party fees, as well as reasonable expenses
          incurred by COD POWER GROUP for the storage or sale of products in
          stock. In this context, the Company (a) grants COD POWER GROUP a
          first-ranking security interest in all products in stock and the
          proceeds of their sale to secure the payment of usage fees and service
          fees, (b) authorizes COD POWER GROUP to file and deposit all documents
          required under applicable laws and regulations to perfect this
          security interest, and (c) irrevocably waives its right to demand its
          signature on any document filed by COD POWER GROUP under this Section
          8.7.
        </p>
      </div>
      <div className="font-Montserrat text-justify my-[30px]">
        <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-[#958D8D] font-bold mt-[10px] sm:mt-[12px] md:mt-[15px]">
          7.4. Dispute Regarding Account Balance
        </h3>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          If COD POWER GROUP becomes aware of or is notified of a dispute
          regarding the account balance, COD POWER GROUP promptly investigates
          the dispute. COD POWER GROUP sends an invoice for the amounts due
          within 5 days following the resolution of the dispute, or credits the
          account balance accordingly, if applicable.
        </p>
      </div>
      <div className="font-Montserrat text-justify my-[30px]">
        <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-[#958D8D] font-bold mt-[10px] sm:mt-[12px] md:mt-[15px]">
          7.5. Abandoned Account and Liquidation
        </h3>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          If the Company's usage fees or third-party fees are not paid within 30
          days, COD POWER GROUP reserves the right, at its sole discretion, to
          reclassify the Company's account as an "abandoned account."
          Additionally, any account unpaid for more than 60 days will be deemed
          an abandoned account. When an account becomes an abandoned account,
          the company immediately waives all rights to the company's inventory.
          The company's inventory will immediately and irrevocably become
          unavailable, and the liquidation procedure will commence. The company
          agrees that the Inventory is free of any liability, and the company
          accepts any liability accordingly. The company has no rights to the
          liquidation proceeds resulting from an abandoned account and would be
          responsible for all outstanding usage fees and third-party fees
          exceeding the liquidation proceeds.
        </p>
      </div>
      <div className="font-Montserrat text-justify my-[30px]">
        <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-[#958D8D] font-bold mt-[10px] sm:mt-[12px] md:mt-[15px]">
          7.6. Account Termination
        </h3>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          If this agreement is terminated, the account will be inaccessible to
          the company, and all activity will be suspended. We reserve the right
          to suspend an account for various reasons, including, but not limited
          to: (a) the account balance remains unpaid within 30 days of receiving
          the invoice; (b) suspicious activity on or through the account; (c) if
          a person using the account uses abusive language or threatens COD
          POWER GROUP or its staff; (d) to allow time to resolve or investigate
          a complaint from a third party regarding a violation of this
          agreement; (e) to allow time to investigate or resolve an unauthorized
          transaction, customer complaint, dispute, or allegation; and (f) to
          allow COD POWER GROUP time to comply with any request for
          extraordinary support.
        </p>
      </div>
      <div className="font-Montserrat text-justify my-[30px]">
        <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-[#958D8D] font-bold mt-[10px] sm:mt-[12px] md:mt-[15px]">
          7.7. Termination with 30-Day Notice
        </h3>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          COD POWER GROUP reserves the right to terminate an Account for any
          reason after 30 days' notice ("termination notice period"). The
          Company may have full or limited access to the Account during the
          termination period, at the discretion of COD POWER GROUP. Products
          still in stock at COD POWER GROUP at the end of the termination period
          are shipped to the Company at the address provided in the record or,
          failing that, to the Company's billing address, at the Company's
          expense. COD POWER GROUP will liquidate the Product inventory in
          accordance with an abandoned account if no address is available or if
          no balance is available to pay for re-shipping to the Company.
        </p>
      </div>
      <div className="font-Montserrat text-justify my-[30px]">
        <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-[#958D8D] font-bold mt-[10px] sm:mt-[12px] md:mt-[15px]">
          7.8. Additional Actions
        </h3>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          If the Company breaches any of the terms of this Agreement, COD POWER
          GROUP reserves the right to close, suspend, or limit access to the
          Account or Services. Without limiting the remedies available at law or
          equity, COD POWER GROUP may also take any available action, including,
          but not limited to, the following: (a) contacting End Users who have
          received Products, contacting the Company's bank or credit card
          issuer, and notifying other users, law enforcement authorities, or
          concerned third parties of the Company's actions; (b) refusing to
          provide the Services in the future; (c) withholding funds from the
          Account and Stocks for a maximum period of 180 days if reasonably
          necessary to protect against liability risk; and (d) taking any legal
          action available.
        </p>
      </div>
      <div className="font-Montserrat text-justify my-[30px]">
        <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-[#958D8D] font-bold mt-[10px] sm:mt-[12px] md:mt-[15px]">
          7.9. Account Closure
        </h3>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          The Company may close the account for any reason by giving COD POWER
          GROUP written notice of 30 days.
        </p>
      </div> */} 
      
    </div>
    <Footer /> 
  </>
  );
};

export default PrivacyPolicy;
