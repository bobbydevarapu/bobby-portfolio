import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

// Define form data type for TypeScript
interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();
  const [result, setResult] = useState<string>("");

  // Web3Forms access key
  const accessKey = "14264ff2-4c74-4a34-a270-806b023fa972";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult("Sending...");

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", accessKey);
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully!");
        toast({
          title: "Success!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setResult(`Error: ${data.message}`);
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      setResult("An error occurred. Please try again later.");
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Contact
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 glass-effect rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium">bobbyd976@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 glass-effect rounded-lg flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground font-medium">+91 9063112566</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 glass-effect rounded-lg flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground font-medium">Andhra Pradesh, India</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">Coding Profiles</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://auth.geeksforgeeks.org/user/bobbydevarapu/profile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass-effect rounded-lg flex items-center justify-center hover:bg-primary/20 transition-all duration-300"
                >
                  <img src="/image/gfg.png" alt="GFG" className="h-8 w-8" style={{ filter: "brightness(0) invert(1)" }} />
                </a>
                <a 
                  href="https://leetcode.com/u/BobbyDevarapu/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass-effect rounded-lg flex items-center justify-center hover:bg-primary/20 transition-all duration-300"
                >
                  <img src="/image/leetcode.png" alt="LeetCode" className="h-8 w-8" style={{ filter: "brightness(0) invert(1)" }} />
                </a>
                <a 
                  href="https://www.codechef.com/users/bbydevarapu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass-effect rounded-lg flex items-center justify-center hover:bg-primary/20 transition-all duration-300"
                >
                  <img src="/image/codechef.png" alt="CodeChef" className="h-8 w-8" style={{ filter: "brightness(0) invert(1)" }} />
                </a>
                <a 
                  href="https://takeuforward.org/plus/profile/Devera" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass-effect rounded-lg flex items-center justify-center hover:bg-primary/20 transition-all duration-300"
                >
                  <img src="/image/tuf.png" alt="Take U Forward" className="h-8 w-8" style={{ filter: "brightness(0) invert(1)" }} />
                </a>
              </div>
            </div>
          </div>

          <div className="glass-effect p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                  className="bg-background/50 border-white/20 focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                  className="bg-background/50 border-white/20 focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="bg-background/50 border-white/20 focus:border-primary resize-none"
                />
              </div>
              
              <Button type="submit" variant="hero" size="lg" className="w-full">
                Send Message
              </Button>
              {result && <p className="text-center text-sm mt-2">{result}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;