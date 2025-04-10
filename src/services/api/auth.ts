/** @format */

import { LoginUser, RegisterUser } from "@/interfaces/api/authInterfaces";
import { getRandomValues } from "crypto";

export const registerUser = async (values: RegisterUser) => {
  const response = await fetch("http://localhost:3100/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "Application/Json" },
    body: JSON.stringify(values),
  });

  const data = await response.json();

  if (!response.ok) {
    throw data;
  }

  return data;
};

export const loginUser = async (values: LoginUser) => {
  const response = await fetch("http://localhost:3100/api/auth/login", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "Application/Json" },
    body: JSON.stringify(values),
  });

  const data = await response.json();

  if (!response.ok) {
    throw data;
  }

  return data;
};
