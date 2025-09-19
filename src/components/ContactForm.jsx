const ContactForm = () => {
  return (
    <form className="space-y-4">
      <input type="text" placeholder="Your Name" className="w-full border p-3 rounded" />
      <input type="email" placeholder="Your Email" className="w-full border p-3 rounded" />
      <textarea placeholder="Your Message" rows="5" className="w-full border p-3 rounded"></textarea>
      <button className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800">
        Send Message
      </button>
    </form>
  );
};
export default ContactForm;
