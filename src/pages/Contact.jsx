import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetchResumeInfo from "../hooks/FetchResumeInfo";
import useFetchTechIcon from "../hooks/FetchTechIcon";

const Contact = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { resume, loading } = useFetchResumeInfo();
  const { getIcon } = useFetchTechIcon();

  const submit = (e) => {
    e.preventDefault();
    const mailto = `mailto:${resume.email}?subject=${encodeURIComponent(
      "Portfolio contact from " + form.name
    )}&body=${encodeURIComponent(form.message + "\n\nContact: " + form.email)}`;
    window.location.href = mailto;
  };
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      {!loading && (
        <>
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-2 text-slate-700">
            Want to reach out? Send a message — it will open your mail client.
          </p>
          <form onSubmit={submit} className="mt-6 space-y-4">
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              placeholder="Your name"
              className="w-full border px-3 py-2 rounded"
            />
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              type="email"
              placeholder="Your email"
              className="w-full border px-3 py-2 rounded"
            />
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              placeholder="Message"
              className="w-full border px-3 py-2 rounded h-32"
            />
            <div className="flex gap-3">
              <button className="button-style px-4 py-2 bg-slate-800 text-white rounded">
                Send
              </button>
              <button
                type="button"
                onClick={() => {
                  setForm({ name: "", email: "", message: "" });
                }}
                className="button-style px-4 py-2 border rounded"
              >
                Reset
              </button>
            </div>
          </form>

          <div className="mt-8 text-sm text-slate-600">
            <div className="flex flex-row">
              <div className="flex flex-col justify-center items-center mr-2">
                {getIcon("email")}
              </div>
              <div>{resume.email}</div>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default Contact;
