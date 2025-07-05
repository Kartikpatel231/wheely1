import React from 'react'
import { Link } from 'react-router-dom'

function SubPartnerAgreement() {
  return (
    <>
     <div className="max-w-5xl mx-auto p-6 text-gray-800">

         <div className=" mt-5 mx-auto text-center">
        <p className="uppercase text-sm text"> <Link to="/Footer/LegalPage"> Legal</Link> <span>/</span> <Link to='/Footer/LegalPage'> For Partners </Link> /</p>
         <h1 className="text-5xl mt-10 md:text-6xl font-[400] text-center mb-5">Sub-Partner Agreement</h1>

         <p className="text-[12px] text-gray-600 font-[400] mb-20">Updated at : 4 Nov 2024</p>

       </div>
      <h1 className="text-lg font-bold mb-6">1. APPLICABILITY</h1>
      <p className="text-lg ">
        1.1 These Terms and Conditions (the "Terms") apply as between Wheely London Limited ("WLL") and you ("you" or the "Driver") in relation to the provision of Services which are subject to the PHV Regulations.
      </p>
      <p className="text-lg ">
        1.2 Capitalised terms used but not defined in these Terms have the meanings given to them in the Partner Terms and Conditions available at: <a href="https://wheely.com/en/legal/uk/for-drivers/terms" className=" underline">https://wheely.com/en/legal/uk/for-drivers/terms</a> (the "Partner Terms").
      </p>
      <p className="text-lg mb-6">
        1.3 By installing the Driver App, you agree to be bound by these Terms. Please review these Terms carefully before you accept them.
      </p>

      <h2 className="text-lg font-bold mb-4">2. DEFINITIONS</h2>
      <p className="text-lg ">
        "PHO" means a private hire operator's licence issued in accordance with the PHV Regulations.
      </p>
      <p className="text-lg mb-6">
        "PHV Regulations" means the Private Hire Vehicles (London) Act 1998, the Private Hire Vehicles (London) (Operators' Licences) Regulations 2000, and any incidental or supplemental legislation, including any subsequent iterations of the same.
      </p>

      <h2 className="text-lg font-bold mb-4">3. BASIS OF CONTRACT</h2>
      <p className="text-lg ">
        Where Services are subject to the PHV Regulations and are procured by WLL from a Driver ("Relevant Services"):
      </p>
      
      <ul className="text-lg  space-y-2">
        <li className="flex">
          <span className="mr-7">3.1</span>
          <span>WLL provides the Relevant Services to the Client as principal in its capacity as the holder of a PHO;</span>
        </li>
        <li className="flex">
          <span className="mr-7">3.2</span>
          <span>the provision of such Relevant Services is subject to a separate contract between WLL and the Client, the terms of which are set out in the TSA;</span>
        </li>
        <li className="flex">
          <span className="mr-7">3.3</span>
          <span>you agree to provide the Relevant Services to WLL;</span>
        </li>
        <li className="flex">
          <span className="mr-7">3.4</span>
          <span>WLL will issue (in its own name) an invoice to the Client for the gross amount of the journey fare due in respect of the Relevant Services; and</span>
        </li>
        <li className="flex">
          <span className="mr-7 mb-15">3.5</span>
          <span>WLL will deduct its commission (if any) and Wheely's Commission from the charges it receives from the Client via Wheely before remitting the balance to you.</span>
        </li>
      </ul>

      <h2 className="text-lg font-bold mb-4">4. SELF-BILLING</h2>
      <p className="text-lg ">
        4.1 In respect of the Relevant Services, WLL (as customer of the Driver) agrees:
      </p>
      
      <ul className="text-lg  space-y-2 ml-8">
        <li className="flex">
          <span className="mr-7">4.1.1</span>
          <span>to issue self-billed invoices for all Relevant Services supplied to it by the Driver until the date of expiry of the contract between WLL and the Driver;</span>
        </li>
        <li className="flex">
          <span className="mr-7">4.1.2</span>
          <span>to complete self-billed invoices showing the Driver's name, address and VAT registration number, together with all the other details which constitute a full VAT invoice (if the Driver is VAT registered);</span>
        </li>
        <li className="flex">
          <span className="mr-7">4.1.3</span>
          <span>to make a new self-billing agreement in the event that its VAT registration number changes (if the Driver is VAT registered); and</span>
        </li>
        <li className="flex">
          <span className="mr-7">4.1.4</span>
          <span>to inform the Driver if the issue of self-billed invoices will be outsourced to a third party.</span>
        </li>
      </ul>

      <p className="text-lg mb-4">
        4.2 The Driver (as supplier of the Relevant Services) agrees:
      </p>
      
      <ul className="text-lg mb-6 space-y-2 ml-8">
        <li className="flex">
          <span className="mr-7">4.2.1</span>
          <span>to accept invoices raised by WLL on its behalf until the date of expiry of the contract between WLL and the Driver;</span>
        </li>
        <li className="flex">
          <span className="mr-7">4.2.2</span>
          <span>not to raise sales invoices for the Relevant Services; and</span>
        </li>
        <li className="flex">
          <span className="mr-7">4.2.3</span>
          <span>
            to notify WLL immediately if he or she:
            <ul className="mt-2 space-y-1 ml-8">
              <li className="flex">
                <span className="mr-4">—</span>
                <span>changes their VAT registration number (if the Driver is VAT registered);</span>
              </li>
              <li className="flex">
                <span className="mr-4">—</span>
                <span>ceases to be VAT registered (if the Driver is VAT registered), or</span>
              </li>
              <li className="flex">
                <span className="mr-4">—</span>
                <span>sells their business or part of their business.</span>
              </li>
            </ul>
          </span>
        </li>
      </ul>

      <h2 className="text-lg font-bold mb-4">5. WARRANTIES AND UNDERTAKINGS</h2>
      <p className="text-lg ">
        5.1 You warrant that you do not hold a PHO and you agree that if at any time whilst operating as a Driver in accordance with these Terms you obtain a PHO, you will notify WLL as soon as practicable and in any event within seven days of obtaining such PHO.
      </p>
      <p className="text-lg mb-6">
        5.2 In the event that you obtain a PHO, these Terms will no longer apply to you.
      </p>

      <h2 className="text-lg font-bold mb-4">6. MISCELLANEOUS</h2>
      <p className="text-lg mb-4">
        6.1 Clauses 16, 17 and 18 of the Partner Terms are deemed to be incorporated herein as if they were set out in full below, save that:
      </p>
      
      <ul className="text-lg mb-6 space-y-2 ml-8">
        <li className="flex">
          <span className="mr-7">6.1.1</span>
          <span>references to Wheely shall be construed as references to WLL;</span>
        </li>
        <li className="flex">
          <span className="mr-7">6.1.2</span>
          <span>references to Service Provider shall be construed as references to Driver; and</span>
        </li>
        <li className="flex">
          <span className="mr-7">6.1.3</span>
          <span>references to "these Terms" shall be construed as references to these Terms (and not the Partner Terms).</span>
        </li>
      </ul>
    </div>
    </>
  )
}

export default SubPartnerAgreement