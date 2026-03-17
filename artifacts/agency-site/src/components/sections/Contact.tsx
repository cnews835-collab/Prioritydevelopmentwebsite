import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MessageSquare, Send, Loader2, Gamepad2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  discord: z.string().min(2, "Discord username is required"),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    toast({
      title: "Message received!",
      description: "We'll reach out on Discord soon.",
    });
    reset();
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-foreground tracking-tight">
              Let's Build <br />
              <span className="text-primary">Together.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-md">
              Got a Roblox project, Discord server idea, or something web-related? Drop us a message and we'll connect on Discord.
            </p>

            <div className="space-y-6">
              <a
                href="https://discord.gg/SfyeZFAd"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white border border-border shadow-sm p-4 rounded-2xl w-max hover:border-primary transition-colors"
              >
                <div className="w-12 h-12 bg-accent/30 rounded-xl flex items-center justify-center text-primary">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Discord Server</div>
                  <div className="font-medium text-foreground">discord.gg/SfyeZFAd</div>
                </div>
              </a>
              <div className="flex items-center gap-4 bg-white border border-border shadow-sm p-4 rounded-2xl w-max">
                <div className="w-12 h-12 bg-accent/30 rounded-xl flex items-center justify-center text-primary">
                  <Gamepad2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Roblox Group</div>
                  <div className="font-medium text-foreground">Priority Development</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-border shadow-lg p-8 md:p-10 rounded-3xl"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Your Name</label>
                  <input
                    {...register("name")}
                    className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="Username or name"
                  />
                  {errors.name && <p className="text-destructive text-xs">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Discord Username</label>
                  <input
                    {...register("discord")}
                    className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="username#0000"
                  />
                  {errors.discord && <p className="text-destructive text-xs">{errors.discord.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">What are you looking to build?</label>
                <select
                  {...register("projectType")}
                  className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none"
                >
                  <option value="" disabled className="bg-white">Select a type</option>
                  <option value="roblox-game" className="bg-white">Roblox Game / Experience</option>
                  <option value="roblox-script" className="bg-white">Roblox Scripting / Systems</option>
                  <option value="discord-bot" className="bg-white">Discord Bot</option>
                  <option value="discord-server" className="bg-white">Discord Server Setup</option>
                  <option value="website" className="bg-white">Website / Web Tool</option>
                  <option value="collab" className="bg-white">Just want to collaborate</option>
                  <option value="other" className="bg-white">Something else</option>
                </select>
                {errors.projectType && <p className="text-destructive text-xs">{errors.projectType.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Tell us about it</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="What's the idea? Any details help..."
                />
                {errors.message && <p className="text-destructive text-xs">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl font-bold text-white bg-primary hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}