"use client";

import { useState } from "react";

interface Props {
  onSuccess: () => void;
}

export default function StickyMessage({ onSuccess }: Props) {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit() {
    if (!message.trim()) return;

    setLoading(true);

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      });

      if (response.ok) {
        setMessage("");
        onSuccess();
      } else {
        alert("Couldn't send feedback.");
      }
    } catch {
      alert("Something went wrong.");
    }

    setLoading(false);
  }

  return (
    <div className="flex h-full flex-col">

      <h2 className="font-[Caveat] text-4xl text-gray-800">
        Hi there ♡
      </h2>

      <p className="mt-3 text-sm leading-6 text-gray-700">
        Thank you for visiting my portfolio.

        <br /><br />

        I'd love to know what you think.

      </p>

      <label className="mt-6 text-sm font-medium text-gray-700">
        Leave a little note...
      </label>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write anything you'd like..."
        className="mt-3 h-40 w-full resize-none rounded-xl border border-gray-300 bg-white/60 p-4 text-sm outline-none focus:border-sky-400"
      />

      <button
        disabled={loading}
        onClick={submit}
        className="mt-6 rounded-full bg-sky-500 py-3 text-white transition hover:bg-sky-600 disabled:opacity-50"
      >
        {loading ? "Sending..." : "Leave Anonymous Feedback"}
      </button>

    </div>
  );
}