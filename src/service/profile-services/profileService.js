import headerToken from "@/lib/headerToken"

export const getProfileServices =async () =>{
    const headers = await headerToken();
    console.log("header",headers);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/user`,{
        headers,
      }
    );
    console.log("projile",response);
    const result = await response.json();
    console.log("profile",result)
    return result;

}