import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { Heart, Star, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
              About VICTORS 36
            </h1>
            
            <div className="prose prose-lg max-w-none mb-16">
              <p className="text-xl text-muted-foreground text-center mb-12">
                We believe fashion is more than clothing—it's a statement of who you are and who you aspire to be.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Crafted with Care</h3>
                  <p className="text-muted-foreground">
                    Every piece is carefully selected for quality and design excellence
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
                  <p className="text-muted-foreground">
                    We source only the finest materials for lasting style
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Community First</h3>
                  <p className="text-muted-foreground">
                    Building connections through shared style and values
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-secondary rounded-lg p-8 my-12"
              >
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Founded in 2024, VICTORS 36 emerged from a simple belief: that fashion should be both accessible and exceptional. We saw a gap in the market for pieces that combined timeless design with modern sensibility.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Our name represents victory—a celebration of personal style and the confidence it brings. The number 36 signifies our commitment to year-round excellence, ensuring every season brings fresh perspectives and enduring quality.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, we're proud to serve a global community of style-conscious individuals who value authenticity, craftsmanship, and the transformative power of well-chosen pieces.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mt-16"
              >
                <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Become part of a community that celebrates individuality, quality, and the art of dressing well.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
