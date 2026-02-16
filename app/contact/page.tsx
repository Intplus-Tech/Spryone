import { Heading } from "@/components/Heading";
import { ContactForm } from "@/components/ContactForm";

export default function Contact() {
  return (
    <section>
      <Heading
        head="Contact Us"
        main="Get in Touch"
        desc="Have questions? We're here for you. Drop us a line, write us an email, or send us a text."
      />
      <ContactForm />
    </section>
  )
}