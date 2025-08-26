import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.json({ message: "Método não permitido", status: 405 });
  }

  //   recebi dados via json(), fiz requisições para autenticar o usuário a api externa e recebi o token

  const token = "<token gerado>";
  const createCookies = await cookies();

  createCookies.set({
    name: "token",
    value: token,
    httpOnly: true,
    path: "/",
  });

  return NextResponse.json({
    message: "Login bem-sucedido",
    token,
    status: 200,
  });
}
