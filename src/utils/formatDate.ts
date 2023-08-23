export const formatDate = (date: string): string => {
  const inputDate = new Date(date);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const formatter = new Intl.DateTimeFormat('en', options);
  const formattedDate = formatter.format(inputDate);

  return formattedDate.replace(/\//g, '.'); // Replace slashes with dots
}