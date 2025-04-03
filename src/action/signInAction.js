// src/actions/signInAction.js
"use server";
import { signIn } from "@/auth";
import { redirect } from "next/navigation";
// sign in via credentials - email and password
export const signInAction = async (formData) => {
  await signIn("credentials", {
    email: formData.get("email"),
    password: formData.get("password"),
    redirect: false,
  });

  redirect("/");
};

