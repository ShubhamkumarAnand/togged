export function formatPrismaDate(prismaDate: string): string {
  const dateObject = new Date(prismaDate);

  const dayOfWeek = dateObject.toLocaleDateString("en-US", { weekday: "short" });
  const month = dateObject.toLocaleDateString("en-US", { month: "short" });
  const day = dateObject.getDate();
  const year = dateObject.getFullYear();

  return `${dayOfWeek}, ${day} ${month} - ${year}`;
}

export function getTime(prismaDate: string): string {
  const dateObject = new Date(prismaDate);
  const hour = dateObject.getHours();
  const minute = dateObject.getMinutes();
  const ampm = hour >= 12 ? "PM" : "AM";
  return `${hour}:${minute} ${ampm}`;
}
