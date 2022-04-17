export const formatDate = (date: string): string => {
  return date
    ? new Date(date).toLocaleString("en-EN", {
        month: "long",
        year: "numeric",
      })
    : "still";
};
