import StickyNote from "@/components/ui/StickyNote";
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-white py-5">
      <p className="text-center font-signature text-lg text-[#03447b] sm:text-xl">
        © {year} Yousra Hind Bennabi · Crafted with care · Powered by curiosity
      </p>
      <StickyNote />
    </footer>
    
  );
  
}
