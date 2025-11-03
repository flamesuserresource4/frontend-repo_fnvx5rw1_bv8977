import { Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Hello from ${name || "your website"}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-2 md:gap-14">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Let’s connect</h2>
          <p className="mt-3 text-gray-600">
            Have a question, a project in mind, or just want to say hi? Drop a line and I’ll get back to
            you soon.
          </p>

          <div className="mt-6 space-y-3 text-gray-700">
            <p className="flex items-center gap-2"><Mail className="text-indigo-600" size={18} /> hello@example.com</p>
            <p className="flex items-center gap-2"><MapPin className="text-indigo-600" size={18} /> Remote / Worldwide</p>
          </div>
        </div>

        <form onSubmit={submit} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4">
            <label className="block">
              <span className="mb-1 block text-sm font-medium text-gray-800">Name</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none ring-indigo-200 transition focus:ring"
                placeholder="Jane Doe"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-medium text-gray-800">Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none ring-indigo-200 transition focus:ring"
                placeholder="jane@email.com"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-medium text-gray-800">Message</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none ring-indigo-200 transition focus:ring"
                placeholder="Tell me a bit about your project..."
              />
            </label>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition hover:bg-indigo-700"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
