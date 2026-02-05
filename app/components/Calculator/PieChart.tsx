import { motion } from "framer-motion";
import { useMemo } from "react";

interface PieChartProps {
  principal: number;
  interest: number;
}

const PieChart = ({ principal, interest }: PieChartProps) => {
  const total = principal + interest;

  const { principalAngle, principalPercentage } = useMemo(() => {
    const percentage = total === 0 ? 0 : (principal / total) * 100;
    const angle = total === 0 ? 0 : (principal / total) * 360;

    return {
      principalPercentage: percentage,
      principalAngle: angle,
    };
  }, [principal, interest, total]);

  const createArcPath = (
    startAngle: number,
    endAngle: number,
    radius: number,
    innerRadius: number
  ) => {
    const startRad = (startAngle - 90) * (Math.PI / 180);
    const endRad = (endAngle - 90) * (Math.PI / 180);

    const x1 = 100 + radius * Math.cos(startRad);
    const y1 = 100 + radius * Math.sin(startRad);
    const x2 = 100 + radius * Math.cos(endRad);
    const y2 = 100 + radius * Math.sin(endRad);

    const x3 = 100 + innerRadius * Math.cos(endRad);
    const y3 = 100 + innerRadius * Math.sin(endRad);
    const x4 = 100 + innerRadius * Math.cos(startRad);
    const y4 = 100 + innerRadius * Math.sin(startRad);

    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

    return `
      M ${x1} ${y1}
      A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}
      L ${x3} ${y3}
      A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x4} ${y4}
      Z
    `;
  };



  const formattedTotal = `₹${total.toLocaleString("en-IN")}`;

const totalFontSize =
  formattedTotal.length > 10
    ? "10px"
    : formattedTotal.length > 8
    ? "12px"
    : "14px";


  return (
    <motion.div
      className="relative w-full max-w-[280px] mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }} // ONLY mount animation
    >
      <svg viewBox="0 0 200 200" className="w-full h-auto drop-shadow-lg">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* <linearGradient id="principalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(195, 93%, 35%)" />
            <stop offset="100%" stopColor="hsl(195, 80%, 50%)" />
          </linearGradient> */}

          <linearGradient id="interestGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(210, 20%, 85%)" />
            <stop offset="100%" stopColor="hsl(210, 20%, 75%)" />
          </linearGradient>
          <clipPath id="centerClip">
  <circle cx="100" cy="100" r="45" />
</clipPath>

        </defs>

        {/* Interest */}
        <path
          d={createArcPath(principalAngle, 360, 85, 55)}
          fill="#79f431"
        />

        {/* Principal */}
        <path
  d={createArcPath(0, principalAngle, 85, 55)}
  fill="#205073 "
  filter="url(#glow)"
/>


        {/* Center */}
        {/* Center (clipped) */}
<g clipPath="url(#centerClip)">
  <circle cx="100" cy="10" r="45" fill="white" />

  <text
    x="100"
    y="95"
    textAnchor="middle"
    className="fill-foreground text-xs font-medium"
  >
    Total
  </text>

  <text
    x="100"
    y="115"
    textAnchor="middle"
    className="fill-primary font-bold font-display"
    style={{ fontSize: totalFontSize }}
  >
    {formattedTotal}
  </text>
</g>


      </svg>

      {/* Legend */}
      <div className="flex justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#205073]" />
          <span className="text-sm text-muted-foreground">
            Principal ({principalPercentage.toFixed(1)}%)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#79f431]" />
          <span className="text-sm text-muted-foreground">
            Interest {(100 - principalPercentage).toFixed(1)}%
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default PieChart;
