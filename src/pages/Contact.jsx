
const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    if (result.success) {
      alert(" Thank you! Your message has been submitted.");
      e.target.reset();
    } else {
      alert(" Error: " + result.message);
    }
  };

  return (
    <div className="min-h-[80vh] p-6 pt-28 flex flex-col items-center bg-gray-900">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8 text-white underline underline-offset-4 decoration-white opacity-0 animate-fadeIn hover:text-blue-500">
        Contact Us
      </h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-gray-800 text-white p-8 rounded-2xl shadow-2xl border border-gray-600 transition duration-300 hover:shadow-blue-500/40"
      >
        
      
<input
  type="hidden"
  name="access_key"
  value={import.meta.env.VITE_WEB3FORMS_KEY}
/>



       
        <div className="mb-5">
          <label className="block mb-2 text-lg font-semibold" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full p-3 rounded bg-gray-700 text-white border border-gray-500 
                       focus:border-blue-400 focus:ring-2 focus:ring-blue-400 focus:outline-none
                       transition duration-200"
          />
        </div>

       
        <div className="mb-5">
          <label className="block mb-2 text-lg font-semibold" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full p-3 rounded bg-gray-700 text-white border border-gray-500 
                       focus:border-blue-400 focus:ring-2 focus:ring-blue-400 focus:outline-none
                       transition duration-200"
          />
        </div>

       
        <div className="mb-5">
          <label className="block mb-2 text-lg font-semibold" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows="5"
            className="w-full p-3 rounded bg-gray-700 text-white border border-gray-500 
                       focus:border-blue-400 focus:ring-2 focus:ring-blue-400 focus:outline-none
                       transition duration-200"
          ></textarea>
        </div>

        
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-lg font-bold py-3 rounded-lg 
                     shadow-md hover:from-blue-700 hover:to-blue-500 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
