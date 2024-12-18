const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
  <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
    <div className="flex items-center justify-center mb-4 sm:mb-0">
      <a href="/" className="flex items-center">
        <img
          src="https://www.svgrepo.com/show/520948/shopping-bag-4.svg"
          className="h-8 mr-3"
          alt="Flowbite Logo"
        />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          13-STORE
        </span>
      </a>
    </div>
    
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
      © 2024{" "}
      <a href="https://flowbite.com/" className="hover:underline">
        WT-GROUP-13
      </a>
      . All Rights Reserved.
    </span>
  </div>
</footer>

  );
};

export default Footer;
