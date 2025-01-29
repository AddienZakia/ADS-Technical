import { NextResponse } from "next/server";
import { dataUsers, createUsers } from "../users";

export async function POST(req: Request) {
  const { username, email, password } = await req.json();

  if (dataUsers.find((x) => x.email === email)) {
    return NextResponse.json(
      {
        message: "Email telah terdaftar",
        error: "email_already_exist",
      },
      {
        status: 409,
      },
    );
  } else if (dataUsers.find((x) => x.username === username)) {
    return NextResponse.json(
      {
        message: "username telah terdaftar",
        error: "username_already_exist",
      },
      {
        status: 409,
      },
    );
  }

  const newUser = createUsers(username, email, password);
  return NextResponse.json(
    { message: "Berhasil terdaftar", user: newUser },
    { status: 200 },
  );
}
