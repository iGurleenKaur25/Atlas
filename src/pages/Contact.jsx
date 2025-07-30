
export const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact Us</h2>
      <form className="contact-form">
        <label>
          Name:
          <input type="text" placeholder="Your Name" required />
        </label>

        <label>
          Email:
          <input type="email" placeholder="you@example.com" required />
        </label>

        <label>
          Message:
          <textarea rows="4" placeholder="Your message here..." required></textarea>
        </label>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};
