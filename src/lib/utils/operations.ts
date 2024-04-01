export function capitalize<Tstr extends string>(str: Tstr): Tstr {
  return (str.charAt(0).toUpperCase() + str.slice(1)) as Tstr;
}

export function formattedDate(date: Date | string) {
  const dateToFormat = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  return dateToFormat.toLocaleDateString("en", options);
}
