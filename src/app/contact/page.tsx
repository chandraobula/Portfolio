import Link from "next/link";
import {
  ArrowLeft,
  BarChart3,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import Contact from "@/components/sections/Contact";

const contactDetails = [
  {
    title: "Location",
    value: "Open to data and technology roles",
    icon: <MapPin size={30} strokeWidth={1.35} />,
  },
  {
    title: "Phone",
    value: "Available on request",
    icon: <Phone size={30} strokeWidth={1.35} />,
  },
  {
    title: "E-mail",
    value: "Connect for opportunities",
    icon: <Mail size={30} strokeWidth={1.35} />,
  },
];

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <Link className="contact-back" href="/">
          <ArrowLeft size={18} />
          Back to home
        </Link>
        <span className="contact-doodle rainbow" aria-hidden>
          ◠◡◠
        </span>
        <span className="contact-doodle plane" aria-hidden>
          ✈
        </span>
        <div className="contact-hero-copy">
          <h1>How can I help with your next data project?</h1>
          <p>
            Whether you need better inventory visibility, planning analysis, or
            a clear dashboard workflow, I’m ready to help shape operational data
            into meaningful decisions.
          </p>
        </div>
      </section>

      <section className="contact-form-shell" aria-labelledby="contact-form-title">
        <div className="contact-info-panel">
          <BarChart3 size={42} strokeWidth={1.2} />
          <h2 id="contact-form-title">Let&apos;s get in touch</h2>
          <p>
            Reach out for data analyst roles, supply chain analytics work,
            dashboard projects, or technology-focused opportunities.
          </p>

          <div className="contact-detail-list">
            {contactDetails.map((item) => (
              <div className="contact-detail" key={item.title}>
                <span className="contact-detail-icon">{item.icon}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form className="contact-form" action="mailto:" method="post" encType="text/plain">
          <label>
            <span>Name</span>
            <input name="name" placeholder="What is your name*" required />
          </label>
          <label>
            <span>Email</span>
            <input name="email" type="email" placeholder="Your email address*" required />
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" placeholder="Tell me about your data or technology need*" required />
          </label>
          <button className="btn-outline contact-submit" type="submit">
            <Send size={17} />
            Send a Message
          </button>
        </form>
      </section>

      <Contact />
    </main>
  );
}
