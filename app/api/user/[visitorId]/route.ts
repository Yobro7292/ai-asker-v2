import { getUserByVisitorId, updateLimit } from "@/lib/prisma/users";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { visitorId: string } }
) {
  const id = params.visitorId;
  const users = await getUserByVisitorId(id);
  return NextResponse.json(users);
}

export async function POST(
  request: Request,
  { params }: { params: { visitorId: string } }
) {
  const id = params.visitorId;
  const body = await request.json();
  const { limit } = body;
  const updated = await updateLimit(id, limit);
  if (updated)
    return NextResponse.json({
      updated,
    });
  else
    return NextResponse.json({
      success: false,
    });
}
