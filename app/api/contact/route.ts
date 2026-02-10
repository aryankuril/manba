import { NextResponse } from "next/server";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { firstName, lastName, email, phone, message, cibilScore } = body;

    if (!firstName || !lastName || !email || !phone || !cibilScore) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    const finalMessage = message?.trim() || "No message provided";

    await addDoc(collection(db, "contacts"), {
      firstName,
      lastName,
      email,
      phone,
      message: finalMessage,
      cibilScore,
      createdAt: serverTimestamp(),
    });

    return NextResponse.json({
      success: true,
      message: "Data saved successfully!",
    });
  } catch (error) {
    console.error("Firebase Error:", error);

    return NextResponse.json(
      { success: false, message: "Something went wrong." },
      { status: 500 }
    );
  }
}
