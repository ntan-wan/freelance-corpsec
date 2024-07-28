import {clsx, type ClassValue} from "clsx";
import {twMerge} from "tailwind-merge";
import moment from "moment";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(isoString: string) : string {
	const formattedDate = moment(isoString).format("MMMM D, YYYY");
	return formattedDate;
}