import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.json(
      { message: "Método não permitido" },
      { status: 405 }
    );
  }

  //Fiz a requisição para logout na api externa

  const deleteCookies = await cookies();

  deleteCookies.delete("token");

  return NextResponse.json({ message: "Logout bem-sucedido", status: 200 });
}
