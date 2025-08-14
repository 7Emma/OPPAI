// src/components/utils/copyToClipboard.js
export const copyToClipboard = async (text, label, setCopiedText) => {
  try {
    await navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(""), 2000);
  } catch (err) {
    console.error("Erreur lors de la copie:", err);
  }
};
