export const arr:Plan[] = [
  { duration: "Monthly Plan", price: 20, creadits: "200" },
  { duration: "Yearly Plan", price: 200, creadits: "2550" },
  { duration: "Topup", price: 10, creadits: "100" },
];

export type Plan={
  duration: string;
  price: number;
  creadits: string;
}
1