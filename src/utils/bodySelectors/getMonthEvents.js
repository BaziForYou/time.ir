// @flow
import { JSDOM } from "jsdom";
import toEnglishDigits from "../toEnglishDigits";
import updateEventString from "../updateEventString";

export type MonthEventResponseType = {
  date: string,
  event: string,
  isHoliday: boolean
};

const getDayEvents = (
  body: string,
  month: string | number,
  year: string | number
): Promise<Array<MonthEventResponseType>> => {
  let getEventsFromHtml = {};
  const events = {};
  const dom = new JSDOM(body);
  const getElementWithClass = dom.window.document.querySelector(
    ".eventsCurrentMonthTitle"
  );

  if (getElementWithClass)
    getEventsFromHtml = Array.from(
      getElementWithClass.nextElementSibling.children
    );

  getEventsFromHtml.forEach(eventElement => {
    const event = eventElement.textContent.trim();
    const eventDate = eventElement.querySelector(
      "span[id^='ctl00_cphTop_Sampa_Web_View_EventUI_EventCalendarSimple30cphTop_']"
    )
      ? toEnglishDigits(
          eventElement.querySelector(
            "span[id^='ctl00_cphTop_Sampa_Web_View_EventUI_EventCalendarSimple30cphTop_']"
          ).textContent
        ).trim()
      : "";
    const additionalInfoExtraction = eventElement.querySelector(
      "span[style='white-space: nowrap']"
    )
      ? eventElement
          .querySelector("span[style='white-space: nowrap']")
          .textContent.trim()
      : "";
    const additionalInfo =
      additionalInfoExtraction.length > 0
        ? toEnglishDigits(additionalInfoExtraction)
            .substring(1, additionalInfoExtraction.length - 1)
            .trim()
        : "";
    const day = Number(toEnglishDigits(event.match(/^[۰-۹]+/g).shift()));
    if (!day) return;
    const isHoliday = eventElement.classList.contains("eventHoliday");
    const eventString = updateEventString(toEnglishDigits(event), eventDate);
    const date = `${year}-${month.length === 1 ? `0${month}` : month}-${
      day.length === 1 ? `0${day}` : day
    }`;
    if (!events[day]) {
      events[day] = {
        isHoliday: false,
        events: []
      };
    }
    if (isHoliday) events[day].isHoliday = true;

    return events[day].events.push({
      date: date,
      stringDate: eventDate,
      additionalInfo: additionalInfo,
      event: eventString,
      isHoliday: isHoliday
    });
  });

  return Promise.resolve(events);
};

export default getDayEvents;
