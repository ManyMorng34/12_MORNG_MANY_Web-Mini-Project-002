const { auth } = require("@/auth");

const headerToken = async () => {
  const session = await auth();
  // console.log("session", session);
  // console.log("header token sesion:", session?.user?.payload?.token);
  // if (!session?.user?.payload?.token) {
  //   console.error("No token found in session.");
  //   return { headers: { "Content-Type": "application/json" } }; // Return headers without Authorization
  // }
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${session?.user?.payload?.token}`,
  };
};
export default headerToken;
