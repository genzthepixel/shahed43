import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle,
  Linkedin,
  Loader2,
  Send,
  Twitter,
  Youtube,
} from "lucide-react";
import { type FormEvent, useState } from "react";
import { toast } from "sonner";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { useSendMessage } from "../../hooks/useQueries";

const socialLinks = [
  {
    icon: Youtube,
    label: "YouTube",
    href: "https://www.youtube.com/@genzthepixel",
    color: "oklch(0.65 0.2 25)",
    hoverBg: "oklch(0.65 0.2 25 / 0.1)",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/genzthepixel",
    color: "oklch(0.55 0.15 220)",
    hoverBg: "oklch(0.55 0.15 220 / 0.1)",
  },
  {
    icon: Twitter,
    label: "X (Twitter)",
    href: "https://x.com/genzthepixel",
    color: "oklch(0.85 0 0)",
    hoverBg: "oklch(0.85 0 0 / 0.08)",
  },
];

export default function ContactSection() {
  const { ref: sectionRef, isVisible } = useIntersectionObserver();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const { mutate: sendMessage, isPending } = useSendMessage();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    sendMessage(
      { name: name.trim(), email: email.trim(), content: message.trim() },
      {
        onSuccess: () => {
          setSubmitted(true);
          setName("");
          setEmail("");
          setMessage("");
          toast.success("Message sent! I'll get back to you soon.");
        },
        onError: () => {
          toast.error("Failed to send message. Please try again.");
        },
      },
    );
  };

  return (
    <section
      id="contact"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative py-32 overflow-hidden mesh-gradient-hero"
      aria-labelledby="contact-heading"
    >
      {/* Background noise overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
        }}
      />
      {/* Animated orbs */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="animate-orb-1 absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{ background: "oklch(0.58 0.26 340 / 0.12)" }}
        />
        <div
          className="animate-orb-3 absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl"
          style={{ background: "oklch(0.42 0.16 345 / 0.10)" }}
        />
        <div
          className="animate-glow-pulse absolute top-1/2 right-0 w-64 h-64 rounded-full blur-3xl"
          style={{ background: "oklch(0.72 0.22 320 / 0.08)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: heading + social */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <p
              className="font-syne text-xs tracking-[0.4em] uppercase mb-4 flex items-center gap-3"
              style={{ color: "oklch(0.72 0.22 320)" }}
            >
              <span
                className="inline-block w-8 h-px"
                style={{ background: "oklch(0.72 0.22 320)" }}
              />
              Get in Touch
            </p>

            <h2
              id="contact-heading"
              className="font-playfair text-5xl md:text-6xl text-near-white mb-8 leading-tight"
            >
              Let's Create
              <br />
              Something
              <br />
              <em className="text-gradient-pink not-italic">Extraordinary</em>
            </h2>

            <p className="font-syne text-near-white/60 text-base leading-relaxed mb-12 max-w-sm">
              Have a project in mind? Want to collaborate on physics simulation,
              numerical computation, or just want to say hello? I'd love to hear
              from you.
            </p>

            {/* Social links */}
            <div>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 flex items-center justify-center transition-all duration-200 hover:scale-110 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-darker-bg"
                    style={{
                      border: "1px solid oklch(0.35 0.02 280)",
                      color: "oklch(0.65 0.02 280)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        social.color;
                      (e.currentTarget as HTMLAnchorElement).style.borderColor =
                        social.color;
                      (e.currentTarget as HTMLAnchorElement).style.background =
                        social.hoverBg;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "oklch(0.65 0.02 280)";
                      (e.currentTarget as HTMLAnchorElement).style.borderColor =
                        "oklch(0.35 0.02 280)";
                      (e.currentTarget as HTMLAnchorElement).style.background =
                        "transparent";
                    }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {submitted ? (
              <div
                className="p-12 flex flex-col items-center text-center"
                style={{
                  background: "oklch(0.13 0.01 280 / 0.7)",
                  border: "1px solid oklch(0.58 0.26 340 / 0.3)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <CheckCircle
                  className="w-16 h-16 mb-6"
                  style={{ color: "oklch(0.72 0.22 320)" }}
                  aria-hidden="true"
                />
                <h3 className="font-playfair text-3xl text-near-white mb-3">
                  Message Sent!
                </h3>
                <p className="font-syne text-near-white/60 mb-6">
                  I'll get back to you as soon as possible.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="font-syne text-sm tracking-widest uppercase px-6 py-3 transition-all duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  style={{
                    border: "1px solid oklch(0.58 0.26 340 / 0.5)",
                    color: "oklch(0.72 0.22 320)",
                  }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="p-8 md:p-10 space-y-6"
                style={{
                  background: "oklch(0.13 0.01 280 / 0.7)",
                  border: "1px solid oklch(0.35 0.02 280)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div className="space-y-2">
                  <Label
                    htmlFor="contact-name"
                    className="font-syne text-xs tracking-[0.2em] uppercase"
                    style={{ color: "oklch(0.65 0.02 280)" }}
                  >
                    Name
                  </Label>
                  <Input
                    id="contact-name"
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    autoComplete="name"
                    className="font-syne text-near-white placeholder:text-near-white/30 rounded-none border-0 border-b focus-visible:ring-0 focus-visible:border-primary bg-transparent"
                    style={{
                      borderBottomColor: "oklch(0.35 0.02 280)",
                      color: "oklch(0.97 0.01 60)",
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="contact-email"
                    className="font-syne text-xs tracking-[0.2em] uppercase"
                    style={{ color: "oklch(0.65 0.02 280)" }}
                  >
                    Email
                  </Label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                    className="font-syne text-near-white placeholder:text-near-white/30 rounded-none border-0 border-b focus-visible:ring-0 focus-visible:border-primary bg-transparent"
                    style={{
                      borderBottomColor: "oklch(0.35 0.02 280)",
                      color: "oklch(0.97 0.01 60)",
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="contact-message"
                    className="font-syne text-xs tracking-[0.2em] uppercase"
                    style={{ color: "oklch(0.65 0.02 280)" }}
                  >
                    Message
                  </Label>
                  <Textarea
                    id="contact-message"
                    placeholder="Tell me about your project or idea..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    className="font-syne text-near-white placeholder:text-near-white/30 rounded-none border focus-visible:ring-1 focus-visible:ring-primary bg-transparent resize-none"
                    style={{
                      borderColor: "oklch(0.35 0.02 280)",
                      color: "oklch(0.97 0.01 60)",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full flex items-center justify-center gap-3 font-syne font-semibold tracking-widest uppercase text-sm py-4 text-white transition-all duration-300 hover:opacity-90 hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-darker-bg"
                  style={{
                    background: isPending
                      ? "oklch(0.35 0.02 280)"
                      : "linear-gradient(135deg, oklch(0.58 0.26 340), oklch(0.42 0.16 345))",
                  }}
                  aria-label={isPending ? "Sending message..." : "Send message"}
                >
                  {isPending ? (
                    <>
                      <Loader2
                        className="w-4 h-4 animate-spin"
                        aria-hidden="true"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" aria-hidden="true" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
