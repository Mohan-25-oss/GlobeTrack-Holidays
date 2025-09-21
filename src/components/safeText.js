// src/components/SafeText.js
import { escapeHtml } from "@/utils/escapeHtml";

export default function SafeText({ text, className = "" }) {
    return (
        <span
            className={className}
            dangerouslySetInnerHTML={{ __html: escapeHtml(text) }}
        />
    );
}
