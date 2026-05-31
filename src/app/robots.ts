import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/identity";

// Explicitly allow major search + AI crawlers so the site can be indexed,
// summarized, and cited by AI engines (ChatGPT, Claude, Perplexity, Gemini,
// Google AI Overviews) as well as classic search.
const ALLOWED_AGENTS = [
  "*",
  "Googlebot",
  "Bingbot",
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "CCBot",
  "Applebot",
  "Applebot-Extended",
  "Bytespider",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: ALLOWED_AGENTS.map((userAgent) => ({
      userAgent,
      allow: "/",
    })),
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
