import React from 'react';
import { Calendar, Package, Users, Building } from 'lucide-react';

const NewFooter = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Statistics Section */}
      <div className="bg-gray-800/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Calendar className="w-12 h-12 text-green-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">20</div>
              <div className="text-gray-300">Years of operation</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Package className="w-12 h-12 text-green-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">300</div>
              <div className="text-gray-300">+ Products</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Users className="w-12 h-12 text-green-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">5000</div>
              <div className="text-gray-300">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Building className="w-12 h-12 text-green-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">400</div>
              <div className="text-gray-300">Completed Projects</div>
            </div>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* About Us Section */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">ABOUT US</h3>
              <div className="mb-6">
                <div className="text-2xl font-bold text-blue-400 mb-2">
                  FLOW<span className="text-green-400">TECH</span>
                </div>
                <div className="text-sm text-gray-400 mb-4">AIR DISTRIBUTION SPECIALIST</div>
                <div className="text-gray-300 mb-6">"20 years of operation..."</div>
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded transition-colors">
                READ MORE
              </button>
              <div className="flex space-x-3 mt-6">
                <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600 cursor-pointer transition-colors">
                  <span className="text-xs">📧</span>
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600 cursor-pointer transition-colors">
                  <span className="text-xs">💼</span>
                </div>
              </div>
            </div>

            {/* Quick Links Section */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">QUICK LINKS</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors flex items-center">
                    <span className="text-green-400 mr-2">›</span>
                    PROFILE
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors flex items-center">
                    <span className="text-green-400 mr-2">›</span>
                    ENQUIRY
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors flex items-center">
                    <span className="text-green-400 mr-2">›</span>
                    CAREER
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors flex items-center">
                    <span className="text-green-400 mr-2">›</span>
                    CERTIFICATE
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors flex items-center">
                    <span className="text-green-400 mr-2">›</span>
                    BROCHURE
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors flex items-center">
                    <span className="text-green-400 mr-2">›</span>
                    CONTACT
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors flex items-center">
                    <span className="text-green-400 mr-2">›</span>
                    PROJECTS
                  </a>
                </li>
              </ul>
            </div>

            {/* Our Products Section 1 */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">OUR PRODUCTS</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors flex items-center">
                    <span className="text-green-400 mr-2">›</span>
                    GRILLES & REGISTERS
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors flex items-center">
                    <span className="text-green-400 mr-2">›</span>
                    DIFFUSERS
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors flex items-center">
                    <span className="text-green-400 mr-2">›</span>
                    LOUVERS
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors flex items-center">
                    <span className="text-green-400 mr-2">›</span>
                    DISC VALVES
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors flex items-center">
                    <span className="text-green-400 mr-2">›</span>
                    DAMPERS
                  </a>
                </li>
              </ul>
            </div>

            {/* Our Products Section 2 */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">OUR PRODUCTS</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors flex items-center">
                    <span className="text-green-400 mr-2">›</span>
                    ACCESS DOORS
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors flex items-center">
                    <span className="text-green-400 mr-2">›</span>
                    SOUND ATTENUATOR
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors flex items-center">
                    <span className="text-green-400 mr-2">›</span>
                    ACOUSTIC LOUVER
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors flex items-center">
                    <span className="text-green-400 mr-2">›</span>
                    VARIABLE AIR VOLUME
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors flex items-center">
                    <span className="text-green-400 mr-2">›</span>
                    FIRE DAMPERS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-8 right-8">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-green-400 hover:bg-green-500 text-gray-900 p-3 rounded-lg shadow-lg transition-colors"
        >
          <span className="text-lg font-bold">↑</span>
        </button>
      </div>
    </footer>
  );
};

export default NewFooter;