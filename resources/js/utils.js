import { constructNow, getMonth, getYear } from "date-fns";

export const getSeason = () => {
    const month = getMonth(constructNow());
    const year = getYear(constructNow());
    const season = month <= 5 ? `${(year - 1)}/${year.toString().slice(2)}` : `${year}/${(year + 1).toString().slice(2)}`;
    return season;
}
