import { useEffect, useState } from "react";

type Opacity = 'opacity-0' | 'opacity-100';

export default function useFullOpacity () {
  const [opacity, setOpacity] = useState<Opacity>('opacity-0')

  useEffect(() => {
    setOpacity('opacity-100')
  },[]);

  return {
    opacity
  }
}