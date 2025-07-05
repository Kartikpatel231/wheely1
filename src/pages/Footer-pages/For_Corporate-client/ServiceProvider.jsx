import React from 'react' 
import { Link } from 'react-router-dom';

function ServiceProvider() {
  return (
   
    <div className="ml-25 px-6 py-10 text-gray-900 max-w-5xl">

        <div className=" mt-5 mx-auto text-center">
        <p className="uppercase text-sm text"> <Link to="/Footer/LegalPage"> Legal</Link> <span>/</span> <Link to='/Footer/LegalPage'> For Corporate Clients </Link> /</p>
         <h1 className="text-5xl mt-10 md:text-6xl font-[400] text-center mb-5">Service Provider Terms</h1>

         <p className="text-[12px] text-gray-600 font-[400] mb-20">Updated at : 4 Nov 2024</p>

       </div>


   {/* Service Provider Terms Section */}
<section className="mb-8">

  
  <div className="bg-white text-gray-800 p-6 ">
    <div className="space-y-8 text-lg">
      <p className="mb-4">1. These terms and conditions ("Terms") apply to the Service provided to the User by the Service Provider identified in the TSA.</p>
      
      <p className="mb-4">2. Terms used but not defined herein have the meanings given in Wheely's User Terms and Conditions available at <a  href="https://wheely.com/en/legal/uk/for-users/terms" className="underline">https://wheely.com/en/legal/uk/for-users/terms</a>.</p>
      
      <p className="mb-4">3. Please review these Terms carefully before you accept the applicability thereof by requesting Services.</p>
      
      <p>4. The journey is provided by the Service Provider identified in the TSA who acts as principal and contracts directly with the User for the provision of the relevant Service.</p>
    </div>
  </div>
</section>
   
    </div>
  )
}

export default ServiceProvider;