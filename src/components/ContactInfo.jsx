import { MapPin, Phone, Mail, Clock } from "lucide-react";

function ContactInfo() {
    return (
        <div className="space-y-8">
        <h2 className="text-3xl font-bold text-[#0d4c83] mb-8">Get in Touch</h2>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-[#0d4c83]/10 p-3 rounded-full">
              <MapPin className="w-6 h-6 text-[#0d4c83]" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0d4c83]">Visit Us</h3>
              <p className="text-[#606060] mt-1">123 School Street, City, Country</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-[#0d4c83]/10 p-3 rounded-full">
              <Phone className="w-6 h-6 text-[#0d4c83]" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0d4c83]">Call Us</h3>
              <p className="text-[#606060] mt-1">+1 (234) 567-8900</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-[#0d4c83]/10 p-3 rounded-full">
              <Mail className="w-6 h-6 text-[#0d4c83]" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0d4c83]">Email Us</h3>
              <p className="text-[#606060] mt-1">info@seerhschool.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-[#0d4c83]/10 p-3 rounded-full">
              <Clock className="w-6 h-6 text-[#0d4c83]" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0d4c83]">Office Hours</h3>
              <p className="text-[#606060] mt-1">Monday - Friday: 8:00 AM - 4:00 PM</p>
              <p className="text-[#606060]">Saturday - Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-8 h-[300px] rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596698663!2d-74.25987368715491!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1644262712926!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="School Location"
          ></iframe>
        </div>
      </div>
    )
}

export default ContactInfo
