"use client";

import { useUser } from "@clerk/nextjs";
import { StreamCall } from "@stream-io/video-react-sdk";
import React from "react";

const Meeting = ({ params }: { params: { id: string } }) => {
  const { user, isLoaded } = useUser();

  return (
    <main className="h-screen w-full">
      <StreamCall></StreamCall>
    </main>
  );
};

export default Meeting;
