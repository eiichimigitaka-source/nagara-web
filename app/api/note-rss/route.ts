import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type Article = {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail: string;
};

function extractText(xml: string, tag: string): string {
  const cdataMatch = new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`, "i").exec(xml);
  if (cdataMatch) return cdataMatch[1].trim();
  const plainMatch = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i").exec(xml);
  if (plainMatch) return plainMatch[1].trim();
  return "";
}

function extractThumbnail(itemXml: string): string {
  // media:thumbnail as text node
  const mediaMatch = /<media:thumbnail[^>]*>([\s\S]*?)<\/media:thumbnail>/i.exec(itemXml);
  if (mediaMatch) return mediaMatch[1].trim();
  // enclosure url attribute
  const enclosureMatch = /enclosure[^>]+url=["']([^"']+)["']/i.exec(itemXml);
  if (enclosureMatch) return enclosureMatch[1];
  // img in description
  const imgMatch = /<img[^>]+src=["']([^"']+)["']/i.exec(itemXml);
  if (imgMatch) return imgMatch[1];
  return "";
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").trim();
}

export async function GET() {
  try {
    const res = await fetch("https://note.com/nagara_steamlab/rss", {
      cache: "no-store",
      headers: { "User-Agent": "Mozilla/5.0" },
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Failed to fetch RSS" }, { status: 500 });
    }

    const xml = await res.text();

    // Split into <item> blocks
    const itemRegex = /<item>([\s\S]*?)<\/item>/gi;
    const articles: Article[] = [];
    let match;

    while ((match = itemRegex.exec(xml)) !== null && articles.length < 6) {
      const itemXml = match[1];
      const title = stripHtml(extractText(itemXml, "title"));
      const link = extractText(itemXml, "link") || extractText(itemXml, "guid");
      const pubDate = extractText(itemXml, "pubDate");
      const description = stripHtml(extractText(itemXml, "description")).slice(0, 120);
      const thumbnail = extractThumbnail(itemXml);

      if (title && link) {
        articles.push({ title, link, pubDate, description, thumbnail });
      }
    }

    return NextResponse.json({ articles });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
