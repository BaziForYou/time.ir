// @flow
import { JSDOM } from "jsdom";
import toEnglishDigits from "../toEnglishDigits";
import updateEventString from "../updateEventString";

function extractTextBetween(sourceString) {
  const regex = /مناسبت های (.*?) سال/g;
  const matches = regex.exec(sourceString);
  if (matches && matches.length > 1) {
    return matches[1];
  }
  return null;
}

const getDayEvents = (
  body: string,
  dateType: string | number,
  day: string | number,
  month: string | number,
  year: string | number
): Promise<Array<string>> => {
  let getEventsFromHtml = {};
  const events = {
    isHoliday: false,
    events: []
  };
  const dom = new JSDOM(body);
  const getElementWithClass = dom.window.document.querySelector(
    ".eventsCurrentMonthTitle"
  );
  if (getElementWithClass)
    getEventsFromHtml = getElementWithClass.nextElementSibling.children;
  const dateTitle = getElementWithClass.textContent.trim();
  var stringDate = extractTextBetween(dateTitle);
  Object.keys(getEventsFromHtml).map((eventKey: string) => {
    const event = getEventsFromHtml[eventKey].textContent.trim();
    stringDate = stringDate.length > 0 ? toEnglishDigits(stringDate) : "";
    const additionalInfoExtraction = event.match(/^\[(.*?)\]|(\[(.*?)\])$/g);
    const additionalInfo = additionalInfoExtraction
      ? toEnglishDigits(additionalInfoExtraction[0].trim())
          .substring(1, additionalInfoExtraction[0].length - 1)
          .trim()
      : "";
    const eventString = updateEventString(toEnglishDigits(event), stringDate);
    const date = `${year}-${month.length === 1 ? `0${month}` : month}-${
      day.length === 1 ? `0${day}` : day
    }`;
    const isHoliday = getEventsFromHtml[eventKey].classList.contains(
      "eventHoliday"
    );
    if (isHoliday) events.isHoliday = true;

    return events.events.push({
      date: date,
      stringDate: stringDate,
      additionalInfo: additionalInfo,
      event: eventString,
      isHoliday: isHoliday
    });
  });

  return Promise.resolve(events);
};

export default getDayEvents;
