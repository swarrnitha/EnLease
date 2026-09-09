import { useState, useEffect } from "react";

export function useWishlist() {
  const [wishlist, setWishlist] = useState<string[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("enlease_wishlist");
      if (stored) {
        setWishlist(JSON.parse(stored));
      }
    } catch {
      // ignore
    }
  }, []);

  const toggleWishlist = (propertyId: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(propertyId);
      const updated = exists
        ? prev.filter((id) => id !== propertyId)
        : [...prev, propertyId];
      try {
        localStorage.setItem("enlease_wishlist", JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const isWishlisted = (propertyId: string) => wishlist.includes(propertyId);

  return { wishlist, toggleWishlist, isWishlisted };
}
