import React from 'react';

function Footer() {
  return (
    <footer className=" dark:bg-gray-800 mt-5">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py">
        <div className="md:flex md:justify-between">
          <div className=" mt-0 md:mb-0 bg-orange-400 text-white w-80  px-8 py-8">
            <a href="https://flowbite.com/" className="flex items-center">
              
              <span className="self-center text-2xl font-extrabold  ">TOURS</span>
            </a>
            <p className='mt-4'>travel inspiration, and exclusive offers</p>
            <p className='mt-4'>123 Main Street,India</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">Tour Status</a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" className="hover:underline">Blogs</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-3">
                  <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Instagram</a>
                </li>
                <li>
                  <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Facebook</a>
                </li>
               
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <p className='text-white'>*Caution: Beware of Fake Promotions or Offers *Please do not believe or engage with any promotional emails, SMS or Web-link which ask you to click on a link and fill in your details. Tour bears no liability or responsibility whatsoever for any communication which is fraudulent or misleading in nature and not received from registered domain.</p>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">TOURS™</a>. All Rights Reserved.</span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
             
              <span className="sr-only">Facebook page</span>
            </a>
            {/* Add other social media icons here */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;