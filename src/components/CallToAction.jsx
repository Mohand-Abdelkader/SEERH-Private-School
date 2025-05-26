import { Button } from "../ui/Button";
function CallToAction() {
    return (
        <section className="py-16 bg-[#f8f9fa]">  {/* Changed from bg-[#0d4c83] to bg-[#f8f9fa] */}
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#0d4c83] mb-6">  {/* Changed from text-white */}
            Join Our Educational Community
          </h2>
          <p className="text-[#606060] mb-8 max-w-2xl mx-auto">  {/* Changed from text-white/90 */}
            Take the first step towards providing your child with an exceptional
            educational experience at SEERH School.
          </p>
          <Button className="bg-[#0d4c83] hover:bg-[#0d4c83]/90 text-white">  {/* Changed from bg-[#ef7822] */}
            <a href="/admission">Apply Now</a>
          </Button>
        </div>
      </section>
    )
}

export default CallToAction
