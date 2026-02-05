import { motion } from 'framer-motion';
import AnimatedNumber from './AnimatedNumber';

interface ResultCardProps {
  label: string;
  value: number;
  prefix?: string;
  delay?: number;
  highlight?: boolean;
}

const ResultCard = ({ 
  label, 
  value, 
  prefix = '₹', 
  delay = 0,
  highlight = false 
}: ResultCardProps) => {
  return (
    <motion.div
      className={`relative p-3 rounded-xl overflow-hidden transition-all duration-300 ${
        highlight 
          ? 'glass-card border-primary/30' 
          : 'bg-secondary/50 border border-border/50'
      }`}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      {highlight && (
        <motion.div
          className="absolute inset-0 border rounded-2xl pointer-events-none"
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
      
      <p className="body2 text-muted-foreground mb-2 relative z-10">{label}</p>
      <div className={`text-2xl md:text-3xl font-bold font-display relative z-10 ${
        highlight ? 'gradient-text' : 'text-foreground'
      }`}>
        <AnimatedNumber value={value} prefix={prefix} />
      </div>
      
      {highlight && (
        <motion.div
          className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
          animate={{
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
    </motion.div>
  );
};

export default ResultCard;