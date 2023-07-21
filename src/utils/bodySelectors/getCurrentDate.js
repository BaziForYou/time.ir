// @flow
import { JSDOM } from "jsdom";
import toEnglishDigits from "../toEnglishDigits";

export type CurrentDateObjectType = {
  shamsi: { numeral: string, text: string },
  gregorian: { numeral: string, text: string },
  hijri: { numeral: string, text: string }
};

const getCurrentDate = (body: string): Promise<CurrentDateObjectType> => {
  const dom = new JSDOM(body);

  const ShamsiNumeralDateBeforeProcess = dom.window.document
    .querySelector(".today-shamsi .dateNumeral")
    .textContent.toString()
    .split("/")
    .join("-")
    .trim();
  const ShamsiNumeralDate = toEnglishDigits(ShamsiNumeralDateBeforeProcess);

  const ShamsiNormalTextDateBeforeProcess = dom.window.document
    .querySelector(".today-shamsi .dateText")
    .textContent.toString()
    .split("/")
    .join("-")
    .trim();
  const ShamsiNormalTextDate = toEnglishDigits(
    ShamsiNormalTextDateBeforeProcess
  );

  const GregorianNumeralDateBeforeProcess = dom.window.document
    .querySelector(".today-gregorian .dateNumeral")
    .textContent.toString()
    .split("/")
    .join("-")
    .trim();
  const GregorianNumeralDate = toEnglishDigits(
    GregorianNumeralDateBeforeProcess
  );

  const GregorianNormalTextDateBeforeProcess = dom.window.document
    .querySelector(".today-gregorian .dateText")
    .textContent.toString()
    .split("/")
    .join("-")
    .trim();
  const GregorianNormalTextDate = toEnglishDigits(
    GregorianNormalTextDateBeforeProcess
  );

  const HijriNumeralDateBeforeProcess = dom.window.document
    .querySelector(".today-hijri .dateNumeral")
    .textContent.toString()
    .split("/")
    .join("-")
    .trim();
  const HijriNumeralDate = toEnglishDigits(HijriNumeralDateBeforeProcess);

  const HijriNormalTextDateBeforeProcess = dom.window.document
    .querySelector(".today-hijri .dateText")
    .textContent.toString()
    .split("/")
    .join("-")
    .trim();
  const HijriNormalTextDate = toEnglishDigits(HijriNormalTextDateBeforeProcess);

  return Promise.resolve({
    shamsi: {
      numeral: ShamsiNumeralDate,
      text: ShamsiNormalTextDate
    },
    gregorian: {
      numeral: GregorianNumeralDate,
      text: GregorianNormalTextDate
    },
    hijri: {
      numeral: HijriNumeralDate,
      text: HijriNormalTextDate
    }
  });
};

export default getCurrentDate;
