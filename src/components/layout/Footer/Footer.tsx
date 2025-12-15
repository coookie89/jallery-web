import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-full mx-auto px-4 py-8">
            <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black">
              Joan Chen
            </h2>
          <div className="">
            <h2 className="font-semibold text-gray-900 mb-4">Support</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Safety Information
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Cancellation Options
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t px-4 py-6 text-sm">
          <p>&copy; 2025 Jallery, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
