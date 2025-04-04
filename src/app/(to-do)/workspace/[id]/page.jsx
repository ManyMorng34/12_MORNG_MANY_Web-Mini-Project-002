import CardComponent from "@/components/card";
import { getTaskSpaceServiceByWorkSpaceId } from "@/service/task-services/taskSpaceService";
import React from "react";

export default async function Cardpage({ params }) {
  const { id } = await params;
  const task = await getTaskSpaceServiceByWorkSpaceId(id);
  console.log("taskTest", task);

  return (
    <div className="p-4">
      {task?.payload?.length > 0 ? (
        task.payload.map((item) => (
          <CardComponent task={item} key={item.taskId} />
        ))
      ) : (
        <p className="text-gray-500">No tasks found for this workspace.</p>
      )}
    </div>
  );
}
