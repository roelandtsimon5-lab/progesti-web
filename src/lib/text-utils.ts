/** Retourne les N premières phrases d'un paragraphe (pour alléger l'affichage). */
export function excerptSentences(text: string, maxSentences = 2): string {
  const sentences = text.match(/[^.!?]+[.!?]+(?:\s|$)/g);
  if (!sentences?.length) {
    return text.length > 320 ? `${text.slice(0, 317).trim()}…` : text;
  }
  if (sentences.length <= maxSentences) return text.trim();
  return sentences.slice(0, maxSentences).join("").trim();
}

/** Retire le suffixe « — PROGESTI » ou « | PROGESTI » d'un titre SEO. */
export function stripSiteSuffix(title: string): string {
  return title.replace(/\s*[—|]\s*PROGESTI\s*$/i, "").trim();
}
