/** @format */

import { ProfileHeader } from "@/components/Profile/ProfileHeader/ProfileHeader";
import React, { Suspense } from "react";
import { ProfileFetcher } from "./(components)/ProfileFetcher";
import { ProfileSkl } from "./(components)/ProfileSkl";

interface ProfileLayoutProps {
  children: React.ReactNode;
  params: { username: string };
}

export default async function ProfileLayout({ children, params }: ProfileLayoutProps) {
  const { username } = await params;

  return (
    <div>
      <Suspense fallback={<ProfileSkl />}>
        <ProfileFetcher username={username} />
      </Suspense>

      <ProfileHeader />
      {children}
    </div>
  );
}
