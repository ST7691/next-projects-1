import { connect } from "@/app/lib/dbConnect";
import { revalidatePath } from "next/cache";
// import { feedback } from "../route";
const feedbackCollection = connect("feedbacks");
//data  get kora-----------
export async function GET(request) {
    const result = await feedbackCollection.find().sort({ date: -1 }).toArray();
  return Response.json(result);
}
// data post kora------------
export async function POST(request) {
  const { message } = await request.json();
  if (!message || typeof message !== "string") {
    return Response.json({
      status: 400,
      message: "please send a message",
    });
  }
 const newFeedback = {
   message,
   date: new Date(),
 };
  const result = await feedbackCollection.insertOne(newFeedback);
  revalidatePath('/feedback')
  // feedback.push(newFeedback)

  return Response.json(result);
}

