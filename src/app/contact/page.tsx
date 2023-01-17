export default function Contact() {
  return (
    <div>
      <form action="https://api.web3forms.com/submit" method="POST">
        <input
          type="hidden"
          name="access_key"
          value="32d8c349-037a-43b6-8db2-366b5d5bf148"
        />

        <input type="text" name="name" required />
        <input type="email" name="email" required />
        <textarea name="message" required></textarea>
        <input
          type="hidden"
          name="redirect"
          value="https://web3forms.com/success"
        />

        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
}
