import { useState } from "react";
function ContactSection() {
  //   const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Show toast notification
    // toast({
    //   title: "Message Sent!",
    //   description: "Thank you for contacting us. We'll respond shortly.",
    // });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0d4c83]">Contact Us</h2>
          <div className="w-24 h-1 bg-[#ef7822] mx-auto mb-8"></div>
          <p className="text-[#606060] text-lg">
            Have questions? We're here to help. Reach out to us using the form
            below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-[#0d4c83]">School Information</h3>
              <div className="flex items-start mb-4">
                <div className="bg-[#0d4c83]/10 p-2 rounded mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#0d4c83]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[#040706]">Address</h4>
                  <p className="text-[#606060]">
                    123 Education Street, Academic City, AC 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-4">
                <div className="bg-[#0d4c83]/10 p-2 rounded mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#0d4c83]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[#040706]">Phone</h4>
                  <p className="text-[#606060]">(123) 456-7890</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#0d4c83]/10 p-2 rounded mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#0d4c83]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[#040706]">Email</h4>
                  <p className="text-[#606060]">info@schoolname.edu</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-[#0d4c83]">Office Hours</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-[#606060]">Monday - Friday</span>
                  <span className="text-[#040706]">8:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#606060]">Saturday</span>
                  <span className="text-[#040706]">9:00 AM - 12:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#606060]">Sunday</span>
                  <span className="text-[#040706]">Closed</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#040706] mb-1"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0d4c83] focus:border-transparent"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#040706] mb-1"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0d4c83] focus:border-transparent"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-[#040706] mb-1"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(123) 456-7890"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0d4c83] focus:border-transparent"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#040706] mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0d4c83] focus:border-transparent"
                  required
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#ef7822] hover:bg-[#ef7822]/90 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
