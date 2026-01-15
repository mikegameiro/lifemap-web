'use client';

import { useEffect, useState } from 'react';
import styles from '@/styles/journey-background.module.css';

export default function JourneyBackground() {
  const [dimensions, setDimensions] = useState({ width: 1440, height: 4000 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: Math.max(document.body.scrollHeight, 4000)
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    // Also update on scroll in case content height changes
    const observer = new ResizeObserver(updateDimensions);
    observer.observe(document.body);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
      observer.disconnect();
    };
  }, []);

  const { width, height } = dimensions;

  // Generate winding path that goes from top-right to bottom-left and meanders
  const generatePath = () => {
    const points = [
      { x: width - 150, y: 0 },
      { x: width - 80, y: 300 },
      { x: width - 200, y: 600 },
      { x: width - 100, y: 900 },
      { x: width - 180, y: 1200 },
      { x: width - 60, y: 1500 },
      { x: width - 220, y: 1800 },
      { x: width - 120, y: 2100 },
      { x: width - 200, y: 2400 },
      { x: width - 80, y: 2700 },
      { x: width - 160, y: 3000 },
      { x: width - 100, y: 3300 },
      { x: width - 180, y: 3600 },
      { x: width - 120, y: height },
    ];

    let path = `M ${points[0].x} ${points[0].y}`;
    
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const midX = (prev.x + curr.x) / 2;
      const midY = (prev.y + curr.y) / 2;
      path += ` Q ${prev.x} ${midY}, ${curr.x} ${curr.y}`;
    }
    
    return path;
  };

  // Generate secondary winding path on the left side
  const generateSecondaryPath = () => {
    const points = [
      { x: 120, y: 200 },
      { x: 60, y: 500 },
      { x: 180, y: 800 },
      { x: 80, y: 1100 },
      { x: 160, y: 1400 },
      { x: 60, y: 1700 },
      { x: 140, y: 2000 },
      { x: 80, y: 2300 },
      { x: 180, y: 2600 },
      { x: 100, y: 2900 },
      { x: 150, y: 3200 },
      { x: 80, y: 3500 },
      { x: 120, y: height },
    ];

    let path = `M ${points[0].x} ${points[0].y}`;
    
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const midX = (prev.x + curr.x) / 2;
      const midY = (prev.y + curr.y) / 2;
      path += ` Q ${prev.x} ${midY}, ${curr.x} ${curr.y}`;
    }
    
    return path;
  };

  // Bush positions - along both sides
  const bushes = [
    // Right side bushes
    { x: width - 80, y: 150, scale: 1.3 },
    { x: width - 140, y: 450, scale: 1.0 },
    { x: width - 60, y: 750, scale: 1.5 },
    { x: width - 180, y: 1050, scale: 0.9 },
    { x: width - 100, y: 1350, scale: 1.2 },
    { x: width - 150, y: 1650, scale: 1.1 },
    { x: width - 80, y: 1950, scale: 1.4 },
    { x: width - 200, y: 2250, scale: 1.0 },
    { x: width - 100, y: 2550, scale: 1.3 },
    { x: width - 160, y: 2850, scale: 0.95 },
    { x: width - 80, y: 3150, scale: 1.2 },
    { x: width - 140, y: 3450, scale: 1.1 },
    // Left side bushes
    { x: 80, y: 280, scale: 1.2 },
    { x: 150, y: 580, scale: 0.9 },
    { x: 60, y: 880, scale: 1.4 },
    { x: 120, y: 1180, scale: 1.0 },
    { x: 180, y: 1480, scale: 1.3 },
    { x: 70, y: 1780, scale: 1.1 },
    { x: 140, y: 2080, scale: 0.95 },
    { x: 90, y: 2380, scale: 1.2 },
    { x: 160, y: 2680, scale: 1.0 },
    { x: 80, y: 2980, scale: 1.35 },
    { x: 130, y: 3280, scale: 1.1 },
    { x: 100, y: 3580, scale: 1.0 },
  ];

  // Stone positions - scattered around
  const stones = [
    // Right side
    { x: width - 200, y: 220, size: 1.0 },
    { x: width - 50, y: 520, size: 0.7 },
    { x: width - 180, y: 820, size: 0.5 },
    { x: width - 90, y: 1120, size: 0.9 },
    { x: width - 220, y: 1420, size: 0.6 },
    { x: width - 70, y: 1720, size: 0.8 },
    { x: width - 150, y: 2020, size: 0.5 },
    { x: width - 100, y: 2320, size: 1.1 },
    { x: width - 190, y: 2620, size: 0.7 },
    { x: width - 60, y: 2920, size: 0.9 },
    { x: width - 170, y: 3220, size: 0.6 },
    { x: width - 110, y: 3520, size: 0.8 },
    // Left side
    { x: 180, y: 350, size: 0.8 },
    { x: 40, y: 650, size: 0.6 },
    { x: 200, y: 950, size: 1.0 },
    { x: 100, y: 1250, size: 0.7 },
    { x: 50, y: 1550, size: 0.9 },
    { x: 160, y: 1850, size: 0.5 },
    { x: 70, y: 2150, size: 0.8 },
    { x: 190, y: 2450, size: 0.6 },
    { x: 110, y: 2750, size: 1.0 },
    { x: 50, y: 3050, size: 0.7 },
    { x: 170, y: 3350, size: 0.9 },
    { x: 90, y: 3650, size: 0.6 },
  ];

  // Small decorative dots/pebbles
  const pebbles = Array.from({ length: 40 }, (_, i) => ({
    x: Math.random() > 0.5 ? width - 50 - Math.random() * 200 : 30 + Math.random() * 200,
    y: 100 + (i * 95) + Math.random() * 50,
    size: 0.3 + Math.random() * 0.3,
  }));

  return (
    <div className={styles.background}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMin slice"
        className={styles.svg}
      >
        {/* Main road - right side */}
        <path
          d={generatePath()}
          stroke="#e8e4c0"
          strokeWidth="70"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.5"
        />
        
        {/* Road center dashed line - right side */}
        <path
          d={generatePath()}
          stroke="#f0ecd0"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="12 12"
          fill="none"
          opacity="0.4"
        />

        {/* Secondary road - left side */}
        <path
          d={generateSecondaryPath()}
          stroke="#e8e4c0"
          strokeWidth="50"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.35"
        />
        
        {/* Road center dashed line - left side */}
        <path
          d={generateSecondaryPath()}
          stroke="#f0ecd0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="10 10"
          fill="none"
          opacity="0.3"
        />

        {/* Bushes */}
        {bushes.map((bush, i) => (
          <g 
            key={`bush-${i}`} 
            transform={`translate(${bush.x}, ${bush.y}) scale(${bush.scale})`}
            className={styles.bush}
          >
            <ellipse cx="0" cy="0" rx="22" ry="18" fill="#b8d4a0" opacity="0.65" />
            <ellipse cx="-14" cy="4" rx="16" ry="14" fill="#c4dea8" opacity="0.65" />
            <ellipse cx="14" cy="4" rx="16" ry="14" fill="#c4dea8" opacity="0.65" />
            <ellipse cx="-7" cy="-10" rx="14" ry="12" fill="#d0e8b0" opacity="0.75" />
            <ellipse cx="7" cy="-10" rx="14" ry="12" fill="#d0e8b0" opacity="0.75" />
            <ellipse cx="0" cy="-14" rx="12" ry="10" fill="#daeeb8" opacity="0.8" />
          </g>
        ))}

        {/* Stones */}
        {stones.map((stone, i) => (
          <ellipse
            key={`stone-${i}`}
            cx={stone.x}
            cy={stone.y}
            rx={18 * stone.size}
            ry={12 * stone.size}
            fill="#d4d89f"
            opacity="0.5"
            className={styles.stone}
          />
        ))}

        {/* Pebbles */}
        {pebbles.map((pebble, i) => (
          <circle
            key={`pebble-${i}`}
            cx={pebble.x}
            cy={pebble.y}
            r={5 * pebble.size}
            fill="#ccd4a0"
            opacity="0.4"
          />
        ))}
      </svg>
    </div>
  );
}
