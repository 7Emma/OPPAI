import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children, wrapperId = "portal-root" }) => {
  const [wrapperElement, setWrapperElement] = useState(null);

  useEffect(() => {
    // Cherche le wrapper existant (qui doit déjà exister dans index.html)
    let element = document.getElementById(wrapperId);

    // Si pas trouvé, le crée et l'ajoute au body
    if (!element) {
      element = document.createElement("div");
      element.id = wrapperId;
      element.setAttribute("data-portal-root", "true");
      element.style.position = "relative";
      element.style.zIndex = "9999";
      document.body.appendChild(element);
    }

    setWrapperElement(element);

    // Nettoyage lors du démontage du composant
    return () => {
      // Ne pas supprimer l'élément portal-root car il est partagé
    };
  }, [wrapperId]);

  // Vérifier que nous sommes côté client
  if (typeof window === "undefined" || !wrapperElement) return null;

  return createPortal(children, wrapperElement);
};

export default Portal;
