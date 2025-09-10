"use client";

import {useState, useEffect} from "react";
import {useMediaQuery} from "@/hooks/use-media-query";
import {NavigationBar} from "./NavigationBar";
import {NavigationForMobile} from "./NavigationForMobile";

export default function NavigationBarToggle() {
  const [mounted, setMounted] = useState(false);
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  // Only render after client has mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // prevent server HTML mismatch

  return isLargeScreen ? <NavigationBar /> : <NavigationForMobile />;
}
