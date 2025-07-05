import react from 'react';
import JobBoard from './JobBoard';
 function OpenRole() {
  return(<>
  
  <div className="text-gray-800 px-6 md:px-16 py-12 space-y-16">

      {/* Title */}
         <div className="max-w-7xl h-100 mx-auto px-4 py-12 ">
      <div className="text-center mb-10">
        <h1 className="text-6xl md:text-5xl font-serif font-bold  text-gray-800 mb-4">Open Roles</h1>
        <p className="text-2xl text-black-600 max-w-4xl mx-auto my-20">
         At Wheely, we’re creating technology to protect our users’ time, building a platform with privacy at its core. If you enjoy innovating to solve complex problems and thrive as part of an ambitious team, join us.</p>
      </div>
    </div>
  </div>

  <JobBoard />


  <div className= "w-5xl bg-white py-12 px-6 md:px-20 ml-25 mr-20">
    <div >

   
      <div className="grid md:grid-cols-2 bg-gray-100 gap-4 text-center h-[600px] max-w-5xl mx-auto">
  {/* Left Content */}
  <div className="space-y-6">
    <h2 className="text-2xl md:text-3xl mt-50 font-semibold text-black">WORKING AT WHEELY</h2>
    <p className="text-gray-700 text-lg leading-relaxed">
      Learn about what it means to work at Wheely, from our approach to building a successful company
      for the long term to our key locations and benefits we offer team members.
    </p>
    <button className="text-black font-medium border-b border-black hover:text-gray-700">
      LEARN MORE &gt;
    </button>
  </div>

  {/* Right Image */}
  <div>
    <img
      src="/OfficeImage.jpeg"
      alt="Working at Wheely"
      className="w-[510px] h-[600px] object-cover"
    />
  </div>
</div>
</div>
</div>
  </>

  )}
    
   

export default OpenRole;