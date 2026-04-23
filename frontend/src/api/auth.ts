import { loginUserType, registerUserType } from "@/types/auth.types";

const BASE_URL = "http://localhost:3000"

export const login = async (formData: loginUserType) => {
  try {
    const res = await fetch(`${BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      credentials: "include",
    });

    if (!res.ok) {
      throw new Error("Login failed, check credentials");
    }

    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const register = async (formData: registerUserType) => {
  try {
    const res = await fetch(`${BASE_URL}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      credentials: "include",
    });

    if (!res.ok) {
      throw new Error("Unable to register user");
    }

    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const logout = async () => {
  try {
    const res = await fetch(`${BASE_URL}/api/auth/logout`, {
      method: "POST",
      credentials: "include",
    });

    if (!res.ok) {
      throw new Error("Unable to logout");
    }

    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};


