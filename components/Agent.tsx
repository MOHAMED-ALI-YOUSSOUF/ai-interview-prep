"use client";
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

enum CallStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  CONNECTING = "CONNECTING",
  FINISHED = "FINISHED",
}

const Agent = ({ userName, userId, profileImage, type}: AgentProps) => {
  const isSpeaking = true
  const callStatus = CallStatus.FINISHED

  const handleCall = () => {
    console.log("Call button clicked")
  }
  const handleDisconnect = () => {
    // setCallStatus(CallStatus.FINISHED);
    // vapi.stop();
  };
  return (
    <>
     <div className="call-view">
        {/* AI Interviewer Card */}
        <div className="card-interviewer">
          <div className="avatar">
            <Image
              src="/ai-avatar.png"
              alt="profile-image"
              width={65}
              height={54}
              className="object-cover"
            />
            {isSpeaking && <span className="animate-speak" />}
          </div>
          <h3>AI Interviewer</h3>
        </div>

        {/* User Profile Card */}
        <div className="card-border">
          <div className="card-content">
            <Image
              src="/user-avatar.png"
              alt="profile-image"
              width={539}
              height={539}
              className="rounded-full object-cover size-[120px]"
            />
            <h3>{userName}</h3>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        {callStatus !== "ACTIVE" ? (
          <button className="relative btn-call" onClick={() => handleCall()}>
            <span
              className={cn(
                "absolute animate-ping rounded-full opacity-75",
                callStatus !== "CONNECTING" && "hidden"
              )}
            />

            <span className="relative">
              {callStatus === "INACTIVE" || callStatus === "FINISHED"
                ? "Call"
                : ". . ."}
            </span>
          </button>
        ) : (
         
          <button className="btn-disconnect" onClick={() => handleDisconnect()}>
            End
          </button>
        )}
      </div>

      
    </>
  )
}

export default Agent
