import type { MetadataRoute } from "next";

// Explicitly welcome classic search AND AI/answer-engine crawlers.
export default function robots(): MetadataRoute.Robots {
  const aiBots = [
    "GPTBot",            // OpenAI / ChatGPT
    "OAI-SearchBot",     // ChatGPT search
    "ChatGPT-User",      // ChatGPT browsing on behalf of users
    "ClaudeBot",         // Anthropic / Claude
    "Claude-User",
    "anthropic-ai",
    "PerplexityBot",     // Perplexity
    "Perplexity-User",
    "Google-Extended",   // Gemini
    "Bingbot",           // Bing → Copilot + ChatGPT index
    "Applebot",          // Siri / Apple Intelligence
    "Applebot-Extended",
    "Amazonbot",         // Alexa
    "cohere-ai",
    "Bytespider",        // ByteDance
    "meta-externalagent" // Meta AI
  ];
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/invest", "/api/"] },
      ...aiBots.map((ua) => ({ userAgent: ua, allow: "/", disallow: ["/invest", "/api/"] })),
    ],
    sitemap: "https://smarttec.dev/sitemap.xml",
  };
}
