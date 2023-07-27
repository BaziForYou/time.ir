// @flow

const updateEventString = (string: string, customString: string) => {
  if (!customString) {
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
  } else {
    string = string.split(customString).join("");
  }
  return string
    .replace(/\s\s+/g, " ")
    .replace(/^\[(.*?)\]|(\[(.*?)\])$/g, "")
    .trim();
};

export default updateEventString;
