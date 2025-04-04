"use server";

import { createWorkspace } from "@/service/workspaceservice/workSpaceService";
import { revalidateTag } from "next/cache";

export const createWorkSpaceAction = async(request)=>{
   const workSpace = await createWorkspace(request);
   revalidateTag("workspaces")
   return workSpace;
}