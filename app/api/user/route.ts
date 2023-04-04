import { getUsers, setUser } from '@/lib/prisma/users';
import { NextResponse } from 'next/server';

export interface User {
  id : string 
  browserId: string
  name: string
  createdAt : string
  updatedAt: string
}
export async function GET(request: Request) {
  const users = await getUsers()
 return NextResponse.json(users)
}
export async function POST(request: Request) {
  try {
    const body = await request.json()
    if(body.user){
      const userFromDb : User| unknown = await setUser(body.user)
      return NextResponse.json(userFromDb)
    } else {
      return NextResponse.json({
        message : "please provide user details"
      })
    }
  } catch (error) {
    return NextResponse.json({
      message : "sorry something went wrong"
    })
  }
}
