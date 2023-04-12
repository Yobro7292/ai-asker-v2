import { getRecents, setRecents } from "@/lib/prisma/recents";
import { NextResponse } from "next/server";

export async function POST(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const body = await request.json();
  const id = params.userId;
  if (body.recents) {
    const recentsFromDB = await setRecents({ ...body.recents, userId: id });
    return NextResponse.json(recentsFromDB);
  } else {
    return NextResponse.json({
      success: false,
    });
  }
}

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const id = params.userId;
  if (id) {
    const recentsFromDb = await getRecents(id);
    if (recentsFromDb) {
      return NextResponse.json({
        success: true,
        recentsFromDb,
      });
    }
  } else {
    return NextResponse.json({
      success: false,
    });
  }
}
