function distinct(a) {
    return [...new Set(a)];
  }

  function rentalCarCost(d) {
    const perday=40;
      const skidka = d >=7 ? 50:d >=3?20:0;
      return d * perday - skidka;
    }