'use client';

import { useSpeedInsights } from "@vercel/speed-insights/react";

export function SpeedInsightsWrapper() {
  useSpeedInsights();
  return null;
} 