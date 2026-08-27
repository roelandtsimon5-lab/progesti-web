"use client";

import { useState } from "react";
import { excerptSentences } from "@/lib/text-utils";

type Props = {
  text: string;
  sentences?: number;
  className?: string;
};

export function ExpandableText({ text, sentences = 2, className = "" }: Props) {
  const [expanded, setExpanded] = useState(false);
  const preview = excerptSentences(text, sentences);
  const needsExpand = preview.length < text.length - 20;

  return (
    <>
      <p className={className}>{expanded ? text : preview}</p>
      {needsExpand ? (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 text-sm font-bold text-brand-navy-soft underline-offset-4 hover:underline"
        >
          {expanded ? "Réduire" : "Lire la suite"}
        </button>
      ) : null}
    </>
  );
}
