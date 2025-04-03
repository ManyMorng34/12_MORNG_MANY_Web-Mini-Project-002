import { getWorkSpaceById } from '@/service/workspaceservice/workSpaceService';
import React from 'react'

export default async function page({params}) {
    const {workSpaceId} = await params;
    const workSpacee= await getWorkSpaceById(workSpaceId);
    console.log("workSpaces" ,workSpacee);
  return (
    <div>
      <div className="p-4">
        <h1 className="text-xl font-bold mb-2">Workspace Detail</h1>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          {/* {JSON.stringify(workSpacee)} */}
        </pre>
      </div>
    </div>
  );
}
