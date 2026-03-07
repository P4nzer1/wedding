import { useCallback, useEffect, useState } from 'react';

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
};

export const useCountdown = (targetDate: Date): Countdown => {
  const calculate = useCallback((): Countdown => {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((distance / (1000 * 60)) % 60),
      seconds: Math.floor((distance / 1000) % 60),
      isExpired: false,
    };
  }, [targetDate]);

  const [time, setTime] = useState<Countdown>(() => calculate());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculate());
    }, 1000);

    return () => clearInterval(interval);
  }, [calculate]);

  return time;
};
