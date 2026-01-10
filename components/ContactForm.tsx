"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

import MotionCard from './MotionCard';

export default function ContactForm(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // NOTE: replace the following placeholders with your EmailJS service/template/user IDs
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        { from_name: name, from_email: email, message },
        'YOUR_PUBLIC_KEY'
      );
      setSent(true);
    } catch (err) {
      console.error(err);
      alert('Submission failed. Configure EmailJS keys first.');
    } finally {
      setLoading(false);
    }
  };

  if (sent) return (
    <MotionCard className="p-4 bg-green-50 text-green-800">Thanks — your message was sent.</MotionCard>
  );

  return (
    <MotionCard
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-6 max-w-md"
    >
      <form onSubmit={onSubmit} className="grid gap-3">
        <input placeholder="Name" className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]" value={name} onChange={(e)=>setName(e.target.value)} required />
        <input placeholder="Email" className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" required />
        <textarea placeholder="Message" rows={6} className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]" value={message} onChange={(e)=>setMessage(e.target.value)} required />
        <button disabled={loading} className="btn-primary px-4 py-2 rounded">
          {loading ? 'Sending...' : 'Send message'}
        </button>
      </form>
    </MotionCard>
  );
}
