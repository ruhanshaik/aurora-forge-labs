import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, CheckCircle2, Send } from 'lucide-react';
import SectionLabel from '@/components/shared/SectionLabel';
import GlassCard from '@/components/shared/GlassCard';
import { faqs } from '@/data/services';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const pageAnim = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.4 },
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <motion.div {...pageAnim}>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <SectionLabel label="Contact" />
          <h1 className="font-syne font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6">
            Let's Talk About{' '}
            <span className="gradient-text">Your Project</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your digital journey? Reach out and let's make it happen.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left - Info */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="font-syne font-bold text-xl mb-6">Get in Touch</h3>

              <a href="mailto:gmitech@zohomail.in" className="flex items-center gap-4 p-4 glass-card hover:shadow-md">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-medium">gmitech@zohomail.in</p>
                </div>
              </a>

              <a href="tel:+919036717885" className="flex items-center gap-4 p-4 glass-card hover:shadow-md">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="text-sm font-medium">+91 90367 17885</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 glass-card">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Address</p>
                  <p className="text-sm font-medium">PES College Road, Srinagar, Bangalore</p>
                  <p className="text-sm font-medium">Cowl Bazar, Ballari 583102</p>
                </div>
              </div>

              <a
                href="https://wa.me/919036717885"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glass-card hover:shadow-md bg-green-50 border-green-200"
              >
                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-600">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-green-700">Chat on WhatsApp</p>
                  <p className="text-xs text-green-600">Quick response guaranteed</p>
                </div>
              </a>

              {/* FAQ */}
              <div className="pt-6">
                <h3 className="font-syne font-bold text-lg mb-4">Quick Answers</h3>
                <Accordion type="single" collapsible className="space-y-2">
                  {faqs.slice(0, 4).map((faq, i) => (
                    <AccordionItem
                      key={i}
                      value={`cfaq-${i}`}
                      className="glass-card px-4 border-none"
                    >
                      <AccordionTrigger className="text-left text-sm font-medium hover:no-underline py-3">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-xs text-muted-foreground pb-3">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            {/* Right - Form */}
            <div className="lg:col-span-3">
              <GlassCard className="p-8">
                {submitted ? (
                  <motion.div
                    className="text-center py-16"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={32} className="text-green-600" />
                    </div>
                    <h3 className="font-syne font-bold text-2xl mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground mb-2">
                      We'll get back to you within 24 hours.
                    </p>
                    <p className="text-sm text-muted-foreground">gmitech@zohomail.in</p>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="font-syne font-bold text-xl mb-6">Send Us a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-medium text-muted-foreground mb-1.5">Name *</label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-muted-foreground mb-1.5">Email *</label>
                          <input
                            type="email"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-muted-foreground mb-1.5">Subject *</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                          placeholder="Project inquiry"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-muted-foreground mb-1.5">Message *</label>
                        <textarea
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                          placeholder="Tell us about your project..."
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] disabled:opacity-70"
                      >
                        {loading ? (
                          <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        ) : (
                          <>
                            Send Message <Send size={16} />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </GlassCard>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
