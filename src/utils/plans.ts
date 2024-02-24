export const arr:Plan[] = [
  { duration: "Monthly  PREMIUM PLAN", price: 20, creadits: "200" },
  { duration: "Yearly PREMIUM PLAN", price: 200, creadits: "2550" },
  { duration: "TOPUP", price: 10, creadits: "100" },
];

export type Plan={
  duration: string;
  price: number;
  creadits: string;
}
