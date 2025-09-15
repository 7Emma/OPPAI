import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children, wrapperId = "react-portal-wrapper" }) => {
  const [wrapperElement, setWrapperElement] = useState(null);
  const elementCreatedRef = useRef(false);

  useEffect(() => {
    // Cherche le wrapper existant
    let element = document.getElementById(wrapperId);

    // Si pas trouvé, le crée et l'ajoute au body
    if (!element) {
      element = document.createElement("div");
      element.id = wrapperId;
      element.setAttribute("data-portal-root", "true");
      document.body.appendChild(element);
      elementCreatedRef.current = true;
    }

    setWrapperElement(element);

    // Nettoyage : supprime l'élément seulement si on l'a créé
    return () => {
      if (elementCreatedRef.current && element && element.parentNode) {
        // Vérifie que l'élément n'a plus d'enfants avant de le supprimer
        if (element.childNodes.length === 0) {
          element.parentNode.removeChild(element);
        }
      }
    };
  }, [wrapperId]);

  if (!wrapperElement) return null;

  return createPortal(children, wrapperElement);
};

export default Portal;
