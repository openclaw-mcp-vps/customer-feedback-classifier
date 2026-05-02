import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FeedbackAI — Auto-categorize customer feedback by urgency",
  description: "Classify customer feedback into categories and urgency levels with AI-powered routing suggestions for your support team."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8a2a920c-da54-480a-b1f2-c098e87d3702"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
