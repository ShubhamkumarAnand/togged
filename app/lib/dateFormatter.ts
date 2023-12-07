export function formatPrismaDate(prismaDate: string): string {
  const dateObject = new Date(prismaDate);

  const dayOfWeek = dateObject.toLocaleDateString("en-US", { weekday: "long" });
  const month = dateObject.toLocaleDateString("en-US", { month: "short" }).toLocaleLowerCase();
  const day = dateObject.getDate();
  const year = dateObject.getFullYear();

  return `${dayOfWeek}, ${day} ${month} ${year}`;
}

export function getTime(prismaDate: string): string {
  const dateObject = new Date(prismaDate);
  const hour = dateObject.getHours();
  const ampm = hour >= 12 ? "Pm" : "Am";
  const hourClock = hour > 12 ? `0${hour - 12}` : `${hour}`;
  const minute = dateObject.getMinutes();
  const minuteClock = minute < 10 ? `0${minute}` : `${minute}`;
  return `${hourClock}:${minuteClock} ${ampm}`;
}
