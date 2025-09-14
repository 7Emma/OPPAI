import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children, wrapperId = "react-portal-wrapper" }) => {
  const [wrapperElement, setWrapperElement] = useState(null);

  useEffect(() => {
    // Cherche le wrapper existant
    let element = document.getElementById(wrapperId);

    // Si pas trouvé, le crée et l'ajoute au body
    if (!element) {
      element = document.createElement("div");
      element.id = wrapperId;
      document.body.appendChild(element);
    }

    setWrapperElement(element);

    // On ne supprime jamais le wrapper pour éviter insertBefore error
  }, [wrapperId]);

  if (!wrapperElement) return null;

  return createPortal(children, wrapperElement);
};

export default Portal;
