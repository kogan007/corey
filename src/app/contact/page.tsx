import ContactForm from "@/components/ContactForm";
import { Container } from "@/components/Container";

export default function Contact() {
  return (
    <Container className="interior-page">
      <div className="contact-page">
        <div className="contact-page__intro">
          <p className="eyebrow">GOOD IDEAS WELCOME</p>
          <h1>Let&apos;s make the web feel better.</h1>
          <p>Have a product, storefront, or tricky experience in mind? I&apos;d love to hear what you&apos;re working on.</p>
          <a href="mailto:coreykogan@gmail.com">coreykogan@gmail.com <span aria-hidden="true">↗</span></a>
          <div className="contact-page__details">
            <div><span>01</span><p><strong>Good fit</strong> Product-minded web builds, headless commerce, and thorny UX problems.</p></div>
            <div><span>02</span><p><strong>Reply time</strong> Usually within two business days—often sooner.</p></div>
            <div><span>03</span><p><strong>Based in</strong> Philadelphia, collaborating wherever the work takes us.</p></div>
          </div>
        </div>
        <div className="contact-page__form">
          <p className="eyebrow">START HERE</p>
          <h2>Tell me what&apos;s on your mind.</h2>
          <p className="contact-page__form-intro">A little context goes a long way. Share the goal, the problem, or the idea that&apos;s keeping you up.</p>
          <ContactForm />
        </div>
      </div>
    </Container>
  );
}
