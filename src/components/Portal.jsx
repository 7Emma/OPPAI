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
      document.body.appendChild(element);
    }

    setWrapperElement(element);

    // Pas de nettoyage nécessaire car l'élément doit persister
    return () => {
      // Ne pas supprimer l'élément portal-root car il est défini dans index.html
    };
  }, [wrapperId]);

  if (!wrapperElement) return null;

  return createPortal(children, wrapperElement);
};

export default Portal;
