/** @format */

import { ProfileHeader } from "@/components/Profile/ProfileHeader/ProfileHeader";
import React, { Suspense } from "react";
import { CompleteProfileSkeleton } from "./components/CompleteProfile/CompleteProfileSkeleton";
import { CompleteProfile } from "./components/CompleteProfile/CompleteProfile";

interface ProfileLayoutProps {
  children: React.ReactNode;
  params: { username: string };
}

export default async function ProfileLayout({ children, params }: ProfileLayoutProps) {
  const { username } = await params;

  return (
    <div>
      <Suspense fallback={<CompleteProfileSkeleton />}>
        <CompleteProfile username={username} />
      </Suspense>

      <ProfileHeader username={username} />
      {children}
    </div>
  );
}
