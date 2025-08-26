class ApiIntegrate {
  static async login(data: { username: string; password: string }) {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Erro na requisição");
    }

    return response.json() as Promise<{ message: string; status: number }>;
  }

  static async logout() {
    const response = await fetch("/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Erro na requisição");
    }

    return response.json() as Promise<{ message: string; status: number }>;
  }
}

export default ApiIntegrate;
