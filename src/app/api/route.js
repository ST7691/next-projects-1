export const feedback = [
  { id: 1, message: "Kabar kub moja" },
  { id: 2, message: "Kabar kub moja" },
  { id: 3, message: "water der bebohar ro valo hote hobe" },
  { id: 4, message: "Kabar kub moja" },
];

export async function GET() {
  return Response.json({
    status: 200,
    message: "Hello World",
  });
}
