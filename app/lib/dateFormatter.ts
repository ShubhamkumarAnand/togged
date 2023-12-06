export default function formatPrismaDate(prismaDate: string): string {
  const dateObject = new Date(prismaDate);

  const dayOfWeek = dateObject.toLocaleDateString("en-US", { weekday: "short" });
  const month = dateObject.toLocaleDateString("en-US", { month: "short" });
  const day = dateObject.getDate();
  const year = dateObject.getFullYear();

  return `${dayOfWeek}, ${day} ${month} - ${year}`;
}
