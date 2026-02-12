import { motion } from "framer-motion";
import { useMemo, useState } from "react";

interface PieChartProps {
  principal: number;
  interest: number;
}

const PieChart = ({ principal, interest }: PieChartProps) => {
  const total = principal + interest;

  const { principalAngle, principalPercentage, interestPercentage } =
    useMemo(() => {
      const principalPercent = total === 0 ? 0 : (principal / total) * 100;
      const interestPercent = total === 0 ? 0 : (interest / total) * 100;

      const angle = total === 0 ? 0 : (principal / total) * 360;

      return {
        principalPercentage: principalPercent,
        interestPercentage: interestPercent,
        principalAngle: angle,
      };
    }, [principal, interest, total]);

  const createArcPath = (
    startAngle: number,
    endAngle: number,
    radius: number
  ) => {
    const startRad = (startAngle - 90) * (Math.PI / 180);
    const endRad = (endAngle - 90) * (Math.PI / 180);

    const x1 = 100 + radius * Math.cos(startRad);
    const y1 = 100 + radius * Math.sin(startRad);
    const x2 = 100 + radius * Math.cos(endRad);
    const y2 = 100 + radius * Math.sin(endRad);

    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

    return `
      M 100 100
      L ${x1} ${y1}
      A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}
      Z
    `;
  };

const [tooltip, setTooltip] = useState({
  visible: false,
  text: "",
  x: 0,
  y: 0,
});


 return (
  <div className="relative w-full max-w-[220px] mx-auto overflow-visible">

   {tooltip.visible && (
  <div
    className="absolute bg-white shadow-lg border border-gray-200 px-4 py-2 rounded-md text-sm font-semibold text-black z-50 pointer-events-none"
    style={{
      left: tooltip.x,
      top: tooltip.y,
      transform: "translate(-50%, -120%)",
      whiteSpace: "nowrap",
    }}
  >
    {tooltip.text}
  </div>
)}


    <div className="w-full h-[180px] flex items-center justify-center">
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full drop-shadow-lg"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
  d={createArcPath(0, principalAngle, 90)}
  fill="#205073"
  className="cursor-pointer"
  onMouseEnter={(e) =>
    setTooltip({
      visible: true,
      text: `Principal Loan Amount: ${principalPercentage.toFixed(1)}%`,
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
    })
  }
  onMouseMove={(e) =>
    setTooltip((prev) => ({
      ...prev,
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
    }))
  }
  onMouseLeave={() =>
    setTooltip({ visible: false, text: "", x: 0, y: 0 })
  }
/>


      <path
  d={createArcPath(principalAngle, 360, 90)}
  fill="#79f431"
  className="cursor-pointer"
  onMouseEnter={(e) =>
    setTooltip({
      visible: true,
      text: `Total Interest: ${interestPercentage.toFixed(1)}%`,
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
    })
  }
  onMouseMove={(e) =>
    setTooltip((prev) => ({
      ...prev,
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
    }))
  }
  onMouseLeave={() =>
    setTooltip({ visible: false, text: "", x: 0, y: 0 })
  }
/>

      </svg>
    </div>
<div className="flex justify-center items-center gap-6 mt-2 w-full px-2">
  
  <div className="flex items-center gap-2">
    <div className="w-3 h-3 rounded-sm bg-[#79f431] flex-shrink-0" />
    <span className="text-xs text-white whitespace-nowrap">
      Total Interest 
      <span className="ml-1  text-white/80">
        ({interestPercentage.toFixed(1)}%)
      </span>
    </span>
  </div>

  <div className="flex items-center gap-2">
    <div className="w-3 h-3 rounded-sm bg-[#205073] flex-shrink-0" />
    <span className="text-xs text-white whitespace-nowrap">
      Principal 
      <span className="ml-1 text-white/80">
        ({principalPercentage.toFixed(1)}%)

      </span>
    </span>
  </div>

</div>




  </div>
);

};

export default PieChart;
