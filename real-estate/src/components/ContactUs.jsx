import React, { useState } from "react";

const ContactUs = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5c1ab04f-2127-47b8-a319-b43a6f1613c3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      alert(data.message);
      setResult();
    }
  };
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto py-10 px-6 md:px-20 lg:px-32 w-full overflow-hidden"
      id="Contactus"
    >
      <h1 className="text-3xl font-bold">
        Contact
        <span className="font-light underline"> With Us</span>
      </h1>

      <p className="mt-5 text-gray-500 max-w-80 text-center mb-10">
        Contact With Us Ready to Make a Move? Let’s Build Your Future Together
      </p>

      <form onSubmit={onSubmit} className="w-full max-w-2xl mt-5">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-600">
              Your Name
            </label>
            <input
              className="w-full border border-gray-300 rounded px-4 py-3"
              type="text"
              placeholder="Your Name"
              required
              name="name"
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-600">
              Your Email
            </label>
            <input
              className="w-full border border-gray-300 rounded px-4 py-3"
              type="email"
              placeholder="Your Email"
              required
              name="email"
            />
          </div>
        </div>

        <div className="w-full px-2 mb-6">
          <label className="block text-sm font-medium mb-1 text-gray-600">
            Message
          </label>
          <textarea
            className="w-full border border-gray-300 rounded px-4 py-3 h-48 resize-none"
            placeholder="message"
            required
            name="Message"
          ></textarea>
        </div>

        <div className="w-full px-2 justify-center flex items-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-600 text-white  py-2 px-24 rounded"
          >
            {result ? result : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );

};

export default ContactUs;

//change test
