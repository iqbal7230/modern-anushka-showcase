import { Heart, Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-primary py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 text-primary-foreground mb-4 md:mb-0">
            <Code className="h-5 w-5" />
            <span className="font-semibold">Anushka Nair</span>
          </div>
          
          <div className="flex items-center gap-2 text-primary-foreground text-sm">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-300" />
            <span>using React & TypeScript</span>
          </div>
          
          <div className="text-primary-foreground text-sm mt-4 md:mt-0">
            © 2025 All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;