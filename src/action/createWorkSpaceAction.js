"use server";

import { createWorkspace } from "@/service/workspaceservice/workSpaceService";

export const createWorkSpaceAction = async(request)=>{
   const workSpace = await createWorkspace(request);
   return workSpace;
}