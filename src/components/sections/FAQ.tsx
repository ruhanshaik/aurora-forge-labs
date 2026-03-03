import { motion } from 'framer-motion';
import SectionLabel from '../shared/SectionLabel';
import { faqs } from '@/data/services';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  return (
    <section className="py-24 md:py-36 bg-gmi-surface">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65 }}
        >
          <SectionLabel label="FAQ" />
          <h2 className="font-syne font-extrabold text-3xl md:text-4xl mb-4">
            Your Questions, <span className="gradient-text">Answered</span>
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="glass-card px-6 border-none"
            >
              <AccordionTrigger className="text-left font-semibold text-sm md:text-base hover:no-underline font-syne">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed font-outfit">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
