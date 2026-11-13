import { Approach } from "@/components/approach";
import { Enquiry } from "@/components/enquiry";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { MobileCta } from "@/components/mobile-cta";
import { Model } from "@/components/model";
import { Scopes } from "@/components/scopes";
import { Sectors } from "@/components/sectors";
import { Services } from "@/components/services";
import { services, site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.description,
  email: site.email,
  telephone: site.phoneSchema,
  areaServed: "GB",
  knowsAbout: services.map((service) => service.title),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div id="top">
        <Header />
        <main id="main">
          <Hero />
          <Services />
          <Model />
          <Approach />
          <Sectors />
          <Scopes />
          <Faq />
          <Enquiry />
        </main>
        <Footer />
        <MobileCta />
      </div>
    </>
  );
}
