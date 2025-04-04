import headerToken from "@/lib/headerToken";
import { getWorkSpaceById } from "../workspaceservice/workSpaceService";

export const getTaskSpaceServiceByWorkSpaceId = async (workSpaceId) => {
  const headers = await headerToken();
  console.log("header", headers);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/tasks/workspace/${workSpaceId}`,
    { method: "GET", headers }
  );
  console.log("resgdsd", response);
  const result = await response.json();
  console.log("task", result);
  return result;
};
