import Hero from "../ui/Hero";
import { Button } from "../ui/Button";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm"
function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    
    <div className="pt-16">
      {/* Hero Section */}
      <Hero url="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      title="Contact Us"
      paragraph="We're here to help and answer any questions you might have"
      />
 

      <div className="py-16 bg-[#f8f9fa]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
<ContactInfo/>

            {/* Contact Form */}
            <div className="bg-white p-8 my-auto rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold text-[#0d4c83] mb-8">Send Us a Message</h2>
        <ContactForm handleSubmit={handleSubmit}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
