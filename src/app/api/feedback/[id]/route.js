import { connect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";
// import { feedback } from "../../route";
const feedbackCollection = connect("feedbacks");
// id get kora-------------------
export async function GET(request, { params }) {
  const { id } = await params;
  if (id.length != 24) {
    return {
      status: 200,
      message: "send correct id",
    };
  }
  const query = { _id: new ObjectId(id) };
  const result = await feedbackCollection.findOne(query);
  // const singleFeedback = feedback.find(fd=>fd.id==id)||{}
  return Response.json(result);
}
// data delete kora-----------------
export async function DELETE(request, { params }) {
  const { id } = await params;
  if (id.length != 24) {
    return {
      status: 200,
      message: "send correct id",
    };
  }
  const query = { _id: new ObjectId(id) };
  const result = await feedbackCollection.deleteOne(query);

  return Response.json(result);
}
// data update kora- patch------------- update data
export async function PATCH(request, { params }) {
  const { id } = await params;
  const {message} = await request.json()
  if (id.length != 24) {
    return {
      status: 200,
      message: "send correct id",
    };
  }
  // validetion
    if (!message || typeof message !== "string") {
      return Response.json({
        status: 400,
        message: "please send a message",
      });
    }
  const query = { _id: new ObjectId(id) };
  const newData = {
    $set: {
      message
    }
  }
  const result = await feedbackCollection.updateOne(query,newData);

  return Response.json(result);
}