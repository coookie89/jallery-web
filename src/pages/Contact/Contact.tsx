import React, { useState } from 'react';

const Home: React.FC = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) {
      setEmailError('Please fill out this field.');
      return;
    }

    setEmailError(null);
    setEmail('');
  };

  return (
    <div className="mx-auto flex justify-center items-center flex-col md:flex-row mt-28 mb-24">
        {/* Image */}
        <div className="w-full flex justify-center items-center max-w-md md:w-1/2 mb-8 md:mb-0 px-10">
          <img
            src="./resources/profile.png"
            alt="Contact Us"
            className="w-full h-auto object-contain mx-8"
          />
        </div>

        {/* Form */}
        <div className="px-10">
          <h2 className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-black text-left sm:text-center md:text-left lg:text-left mb-2">
            Contact
          </h2>
          <p className="text-lg mb-4 text-left sm:text-center md:text-left lg:text-left md:mt-4">
            留下你的資料，不久後...你會在你的郵箱裡發現程瓊慧本人的回信！
          </p>

          <form className="w-full max-w-lg" onSubmit={handleSubmit} noValidate>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  First Name
                  <span className="text-red text-xs italic">*</span>
                </label>
                <input
                  required
                  className="block w-full text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 border border-black"
                  id="grid-first-name"
                  type="text"
                  placeholder="Iris"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Last Name
                  <span className="text-red text-xs italic">*</span>
                </label>
                <input
                  required
                  className="block w-full text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 border border-black"
                  id="grid-last-name"
                  type="text"
                  placeholder="Yang"
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-email"
                >
                  Email
                  <span className="text-red text-xs italic">*</span>
                </label>
                <input
                  name="email"
                  value={email}
                  onChange={(ev) => {
                    setEmail(ev.target.value);
                    if (emailError) setEmailError(null);
                  }}
                  className={`block w-full text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 border ${emailError ? 'border-red' : 'border-black'}`}
                  id="grid-email"
                  type="email"
                  placeholder="you@example.com"
                  aria-invalid={emailError ? 'true' : 'false'}
                  aria-describedby={emailError ? 'grid-email-error' : undefined}
                />
                {emailError && (
                  <p id="grid-email-error" className="text-red text-sm italic">
                    Please fill out this field.
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-contact-number"
                >
                  Contact number
                </label>
                <input
                  className="block w-full text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 border border-black"
                  id="grid-contact-number"
                  type="text"
                  placeholder="+886 970 152 836"
                />
              </div>
            </div>

            {/* <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-2/3 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-country"
                >
                  Country
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full border border-black text-gray-700 py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                    id="grid-country"
                  >
                    <option>New Mexico</option>
                    <option>Missouri</option>
                    <option>Texas</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-contact-number"
                >
                  Details
                </label>
                <textarea
                  className="block w-full text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 border border-black"
                  id="grid-details"
                  placeholder="Enter your details here..."
                />
              </div>
            </div>

            <button
              className="bg-black text-white py-3 px-4 w-full hover:bg-gray-700 transition duration-300"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
  );
};

export default Home;
