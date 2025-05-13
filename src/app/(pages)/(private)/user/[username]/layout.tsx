/** @format */

import { ProfileHeader } from "@/components/Profile/ProfileHeader/ProfileHeader";
import React, { Suspense } from "react";
import { CompleteProfile } from "@/components/Profile/CompleteProfile/CompleteProfile";
import { CompleteProfileSkeleton } from "@/components/Profile/CompleteProfile/CompleteProfileSkeleton";

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
