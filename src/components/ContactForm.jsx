function ContactForm({handleSubmit}) {
    return (
        <form onSubmit={handleSubmit} className="space-y-5 h-[100%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#040706] mb-1"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
  
              placeholder="John Doe"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0d4c83] focus:border-transparent transition-colors"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#040706] mb-1"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"

              placeholder="john@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0d4c83] focus:border-transparent transition-colors"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-[#040706] mb-1"
            >
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
 
              placeholder="(123) 456-7890"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0d4c83] focus:border-transparent transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-[#040706] mb-1"
            >
              Subject <span className="text-red-500">*</span>
            </label>
            <select
              id="subject"
              name="subject"
   
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0d4c83] focus:border-transparent transition-colors"
              required
            >
              <option value="">Select a subject</option>
              <option value="admission">Admission Inquiry</option>
              <option value="program">Program Information</option>
              <option value="visit">Schedule a Visit</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-[#040706] mb-1"
          >
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="How can we help you?"
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0d4c83] focus:border-transparent transition-colors"
            required
          />
        </div>

        <div className="flex items-center">
          <input
            id="privacy"
            name="privacy"
            type="checkbox"
            className="h-4 w-4 text-[#0d4c83] focus:ring-[#0d4c83] border-gray-300 rounded"
            required
          />
          <label htmlFor="privacy" className="ml-2 block text-sm text-[#606060]">
            I agree to the <a href="#" className="text-[#0d4c83] hover:underline">privacy policy</a> and consent to being contacted regarding my inquiry.
          </label>
        </div>

        <button 
          type="submit" 
          className="w-full bg-[#ef7822] hover:bg-[#ef7822]/90 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center hover:shadow-md"
        >

              Send Message
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
     
          
        </button>
      </form>
    )
}

export default ContactForm
