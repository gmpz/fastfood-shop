import { apiClient } from "@/lib/apiClient";

export function fetchUserProfile(userId: string) {
  return apiClient(`/users/${userId}`);
}

export function registerUser(data: { name: string; email: string }) {
  return apiClient("/register", {
    method: "POST",
    body: JSON.stringify(data),
  });
}