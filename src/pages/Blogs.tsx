import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar, Search, ChevronDown, ChevronUp, Building2 } from 'lucide-react';
import SectionLabel from '@/components/shared/SectionLabel';
import { blogArticles, faqData } from '@/data/blogs';
import blogHero from '@/assets/blog-hero.jpg';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Blogs = () => {
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const filteredArticles = blogArticles.filter(
    (a) =>
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedFaqs = showAllFaqs ? faqData : faqData.slice(0, 10);

  const article = selectedArticle
    ? blogArticles.find((a) => a.id === selectedArticle)
    : null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={blogHero} alt="GMI Tech Blog" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel label="Our Blog" />
            <h1 className="font-comfortaa font-extrabold text-4xl md:text-6xl mb-6">
              Insights & <span className="gradient-text">Knowledge</span>
            </h1>
            <p className="font-comfortaa text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Expert articles on software development, AI automation, and digital transformation from the best software company in Ballari.
            </p>

            {/* Search */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full bg-muted/50 border border-border text-foreground font-comfortaa text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Detail View */}
      <AnimatePresence mode="wait">
        {article ? (
          <motion.section
            key="article-detail"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="py-16 md:py-24"
          >
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              <button
                onClick={() => setSelectedArticle(null)}
                className="flex items-center gap-2 text-primary font-comfortaa text-sm mb-8 hover:underline"
              >
                ← Back to all articles
              </button>

              <div className="mb-8">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-comfortaa mb-4">
                  {article.category}
                </span>
                <h1 className="font-comfortaa font-extrabold text-3xl md:text-4xl mb-4">
                  {article.title}
                </h1>
                <div className="flex items-center gap-4 text-sm text-muted-foreground font-comfortaa">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {article.date}</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> {article.readTime}</span>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden mb-10">
                <img src={article.image} alt={article.title} className="w-full h-64 md:h-96 object-cover" />
              </div>

              <article
                className="prose prose-invert prose-lg max-w-none font-comfortaa
                  [&_h2]:font-comfortaa [&_h2]:font-bold [&_h2]:text-2xl [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-foreground
                  [&_h3]:font-comfortaa [&_h3]:font-semibold [&_h3]:text-xl [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-foreground
                  [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4
                  [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul]:space-y-2
                  [&_li]:text-muted-foreground
                  [&_strong]:text-foreground"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              <div className="mt-12 p-6 rounded-2xl glass-card text-center">
                <p className="font-comfortaa font-bold text-lg mb-2">Ready to Start Your Project?</p>
                <p className="text-muted-foreground font-comfortaa text-sm mb-4">Contact GMI Tech today for a free consultation.</p>
                <a
                  href="https://wa.me/message/DF2K3DWRYML6G1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-comfortaa font-semibold text-sm hover:scale-105 transition-transform"
                >
                  Get in Touch <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </motion.section>
        ) : (
          <motion.div key="article-list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {/* Articles Grid */}
            <section className="py-16 md:py-24">
              <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredArticles.map((article, i) => (
                    <motion.div
                      key={article.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.5 }}
                      className="glass-card rounded-2xl overflow-hidden group cursor-pointer"
                      onClick={() => setSelectedArticle(article.id)}
                    >
                      <div className="relative overflow-hidden h-48">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-comfortaa">
                            {article.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground font-comfortaa mb-3">
                          <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
                          <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime}</span>
                        </div>
                        <h3 className="font-comfortaa font-bold text-sm md:text-base mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-xs text-muted-foreground font-comfortaa line-clamp-2 mb-4">
                          {article.excerpt}
                        </p>
                        <span className="inline-flex items-center gap-1 text-primary text-xs font-comfortaa font-semibold group-hover:gap-2 transition-all">
                          Read Article <ArrowRight size={12} />
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {filteredArticles.length === 0 && (
                  <div className="text-center py-16">
                    <p className="text-muted-foreground font-comfortaa">No articles found matching your search.</p>
                  </div>
                )}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 md:py-24 bg-muted/20">
              <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <motion.div
                  className="text-center mb-14"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65 }}
                >
                  <SectionLabel label="FAQ" />
                  <h2 className="font-comfortaa font-extrabold text-3xl md:text-4xl mb-4">
                    Frequently Asked Questions About <span className="gradient-text">Software Companies in Ballari</span>
                  </h2>
                </motion.div>

                <Accordion type="single" collapsible className="space-y-3">
                  {displayedFaqs.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      value={`faq-${i}`}
                      className="glass-card px-6 border-none"
                    >
                      <AccordionTrigger className="text-left font-semibold text-sm md:text-base hover:no-underline font-comfortaa">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground leading-relaxed font-comfortaa">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                {!showAllFaqs && (
                  <div className="text-center mt-8">
                    <button
                      onClick={() => setShowAllFaqs(true)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-comfortaa text-sm hover:bg-muted/50 transition-colors"
                    >
                      Show All 50 FAQs <ChevronDown size={14} />
                    </button>
                  </div>
                )}
                {showAllFaqs && (
                  <div className="text-center mt-8">
                    <button
                      onClick={() => setShowAllFaqs(false)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-comfortaa text-sm hover:bg-muted/50 transition-colors"
                    >
                      Show Less <ChevronUp size={14} />
                    </button>
                  </div>
                )}
              </div>
            </section>

            {/* About the Company */}
            <section className="py-16 md:py-24">
              <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65 }}
                >
                  <div className="glass-card p-8 md:p-12 rounded-2xl">
                    <div className="flex items-center gap-3 mb-6">
                      <Building2 className="text-primary" size={28} />
                      <h2 className="font-comfortaa font-extrabold text-2xl md:text-3xl">
                        About <span className="gradient-text">GMI Tech</span>
                      </h2>
                    </div>
                    <div className="space-y-4 text-muted-foreground font-comfortaa text-sm leading-relaxed">
                      <p>
                        <strong className="text-foreground">GMI Tech</strong> is a growing technology startup based in <strong className="text-foreground">Ballari, Karnataka, India</strong>, providing modern software, automation, and IT services for businesses of all sizes. From custom software development and mobile app creation to AI automation and cloud solutions, GMI Tech delivers end-to-end technology services designed to help businesses grow digitally.
                      </p>
                      <p>
                        The company serves a diverse range of industries including education, retail, healthcare, real estate, manufacturing, and finance. With a strong focus on innovation, performance, and security, GMI Tech has established itself as one of the <strong className="text-foreground">leading software companies in the Ballari region</strong>.
                      </p>
                      <p>
                        GMI Tech's comprehensive service portfolio includes Software Development, Website Development, Mobile App Development, AI Automation, E-commerce Development, UI/UX Design, Cloud Solutions, API Development, Database Management, Cybersecurity, Data Analytics, Machine Learning, Chatbot Development, CRM & ERP Development, Software Testing & QA, Digital Transformation, IT Consulting, and Robotic Process Automation (RPA).
                      </p>
                      <p>
                        The company has successfully generated more than <strong className="text-foreground">12+ Lakhs in revenue</strong> through its high-quality software and technology services, demonstrating the trust and confidence clients place in its capabilities.
                      </p>
                      <p>
                        GMI Tech was founded by <strong className="text-foreground">S Mohammed Ruhan</strong> (Founder & CEO), who brings a vision of making world-class technology accessible to businesses in Ballari and beyond. <strong className="text-foreground">K Mohammed Abrar</strong> is also an important part of building and growing the company together with Ruhan, playing an instrumental role in the technology infrastructure and operational growth of the organization.
                      </p>
                      <p>
                        Together, Ruhan and Abrar are focused on innovation, automation, and helping businesses across Ballari and Karnataka grow digitally through precision-engineered software solutions.
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row gap-4">
                      <a
                        href="https://wa.me/message/DF2K3DWRYML6G1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-comfortaa font-semibold text-sm hover:scale-105 transition-transform"
                      >
                        Contact Us <ArrowRight size={14} />
                      </a>
                      <Link
                        to="/services"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-comfortaa text-sm hover:bg-muted/50 transition-colors"
                      >
                        View Services <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Blogs;
