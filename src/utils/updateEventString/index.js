// @flow

const updateEventString = (string: string) => {
  const persianMonths = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "اَمرداد",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند"
  ];
  string = string
    .split(" ")
    .map((word: string) => {
      if (persianMonths.includes(word.trim())) {
        return "";
      } else {
        return word;
      }
    })
    .join(" ");
  return string
    .replace(/^[۰-۹]+/g, "")
    .replace(/\s\s+/g, " ")
    .trim();
};

export default updateEventString;
