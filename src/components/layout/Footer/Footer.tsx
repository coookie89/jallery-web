import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Safety Information</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Cancellation Options</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-600">
          <p>&copy; 2025 Jallery, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
