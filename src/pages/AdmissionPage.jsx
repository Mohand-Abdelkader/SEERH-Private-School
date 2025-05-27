import Hero from "../ui/Hero";
import { Button } from "../ui/Button";
import AdmissionForm from "../components/AdmissionForm";

function AdmissionPage() {


  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Hero
        url="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        title="Admission Application"
        paragraph="Take the first step towards your child's exceptional education"
      />

      {/* Application Form */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="container mx-auto px-4 max-w-4xl">
          <AdmissionForm />
        </div>
      </section>
    </div>
  );
}

export default AdmissionPage;
