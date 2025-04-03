import headerToken from "@/lib/headerToken";

export const getAllWorkspace = async () => {
  const headers = await headerToken();
  console.log("header", headers);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/workspaces`,
    { headers }
  );
  const workspaces = await response.json();
  return workspaces;
};

export const createWorkspace = async (request) => {
  const headers = await headerToken();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/workspace`,
    {
      method: "POST",
      headers,
      body: JSON.stringify(request),
    }
  );
  const result = await response.json();
  console.log(result);
  return result;
};

export const getWorkSpaceById = async (workSpaceId) => {
  const headers = await headerToken();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/workspaces/${workSpaceId}`,
    {
      method: "GET",
      headers,
    }
  );
  const result = await response.json();
  console.log("workSpaceId", result);
  return result;
};
