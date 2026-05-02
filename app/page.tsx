export default function Home() {
  const faqs = [
    {
      q: "What feedback categories does it support?",
      a: "FeedbackAI classifies feedback into bugs, feature requests, complaints, and praise — each with low, medium, high, or critical urgency."
    },
    {
      q: "How does routing work?",
      a: "Based on category and urgency, the AI suggests the right team or individual — engineering for bugs, product for features, support leads for critical complaints."
    },
    {
      q: "Does it integrate with existing tools?",
      a: "Yes. FeedbackAI connects with popular support platforms like Intercom, Zendesk, and Slack to route feedback without changing your workflow."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] flex flex-col items-center px-4 py-16">
      {/* Hero */}
      <section className="max-w-2xl w-full text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Support
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-categorize customer feedback{" "}
          <span className="text-[#58a6ff]">by urgency</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8">
          Instantly classify every piece of customer feedback into the right category and urgency level — then route it to the right person automatically.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $22/mo
        </a>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          {["Bug", "Feature Request", "Complaint", "Praise"].map((cat) => (
            <div key={cat} className="bg-[#161b22] border border-[#30363d] rounded-lg px-3 py-2 text-[#58a6ff] font-medium">
              {cat}
            </div>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          {["Low", "Medium", "High", "Critical"].map((level) => (
            <div key={level} className="bg-[#161b22] border border-[#30363d] rounded-lg px-3 py-2 text-[#c9d1d9]">
              {level}
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm w-full mb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$22</p>
          <p className="text-[#8b949e] text-sm mb-6">/month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited feedback classification",
              "4 categories + 4 urgency levels",
              "Smart team routing suggestions",
              "Zendesk, Intercom & Slack integrations",
              "Priority email support"
            ].map((feat) => (
              <li key={feat} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl w-full">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
