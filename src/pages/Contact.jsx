import ContactForm from "../components/ContactForm.jsx";

const Contact = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <ContactForm />
        <div className="mt-8 text-center">
          <p>📍 Chetas House, Plot No. 1, Sidhatek Co-Op Housing Society, Pune - 411021</p>
          <p>📧 info@chetasagro.com</p>
        </div>
        <div className="mt-10">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!..."
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
export default Contact;
