import { getUserByVisitorId } from "@/lib/prisma/users";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { visitorId: string } }
) {
  const id = params.visitorId;
  const users = await getUserByVisitorId(id);
  return NextResponse.json(users);
}
