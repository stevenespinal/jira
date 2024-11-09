"use client";

import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";
import { useParams } from "next/navigation";
import React from "react";

export default function WorkspaceIdPage() {
  const workspaceId = useWorkspaceId();
  return <div>{workspaceId}</div>;
}
