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
    "CCBot",             // Common Crawl — upstream corpus for many models + RAG pipelines
    "Google-CloudVertexBot", // Vertex AI grounding
    "AI2Bot",            // Allen Institute
    "AI2Bot-Dolma",
    "Diffbot",           // knowledge graph feeding several answer engines
    "LinerBot",          // Liner answer engine
    "TimpiBot",
    "PetalBot",          // Huawei Petal search
    "omgili",            // Webz.io corpus
    "Bytespider",        // ByteDance
    "meta-externalagent", // Meta AI
    "Baiduspider",       // Baidu
    "Slurp",             // Yahoo
    "YandexBot",         // Yandex
    "Yeti",              // Naver
    "SeznamBot",         // Seznam
    "DuckDuckBot",       // DuckDuckGo
    // Added Jul 2026 — verified against official crawler docs:
    "Claude-SearchBot",  // Anthropic — Claude search index
    "DuckAssistBot",     // DuckDuckGo AI answers
    "MistralAI-Index",   // Mistral — Le Chat search index
    "MistralAI-User",
    "meta-webindexer",   // Meta AI search index
    "meta-externalfetcher",
    "Amzn-SearchBot",    // Amazon search experiences (Alexa)
    "Amzn-User",
    // Reported tokens, no official docs published (harmless — * already allows;
    // listed to signal explicit welcome): xAI/Grok, Moonshot/Kimi, Zhipu/z.ai,
    // DeepSeek, You.com
    "GrokBot",
    "Kimibot",
    "MoonshotBot",
    "ChatGLM-Spider",
    "DeepSeekBot",
    "YouBot"
  ];
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/invest", "/api/"] },
      ...aiBots.map((ua) => ({ userAgent: ua, allow: "/", disallow: ["/invest", "/api/"] })),
    ],
    sitemap: "https://smarttec.dev/sitemap.xml",
  };
}
