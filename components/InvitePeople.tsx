import React, { useState } from "react";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "./ui/use-toast";
import emailjs from "emailjs-com";

const InvitePeople = ({ meetingLink }: { meetingLink: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [buttonColor, setButtonColor] = useState("bg-dark-3");
  const { toast } = useToast();

  const sendEmail = async () => {
    setLoading(true);
    setButtonColor("bg-blue-500");

    const templateParams = {
      to_email: email,
      meeting_link: meetingLink,
    };

    emailjs
      .send(
        "service_fccub1a",
        "template_5p5v1v2",
        templateParams,
        "eW_2Puwk6Xzj9W0Co"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast({
            title: "Invitation Sent",
            description: `Invitation sent to ${email}`,
          });
          setButtonColor("bg-green-500");
          setTimeout(() => setButtonColor("bg-dark-3"), 2000); // Change back after 2 seconds
          setIsModalOpen(false);
        },
        (error) => {
          console.error("FAILED...", error);
          toast({
            title: "Error",
            description: "Failed to send the invitation",
          });
          setButtonColor("bg-dark-3");
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogTrigger asChild>
          <Button className={`flex items-center gap-2 ${buttonColor}`}>
            <Send size={17} /> Invite People
          </Button>
        </DialogTrigger>
        <DialogContent className="flex w-full max-w-[520px] flex-col gap-6 border-none bg-dark-1 px-6 py-9 text-white">
          <DialogHeader>
            <DialogTitle>Invite People</DialogTitle>
            <DialogDescription>
              Enter the email address to send the meeting invite.
            </DialogDescription>
          </DialogHeader>
          <input
            type="email"
            className="border-none bg-dark-3 focus-visible:ring-0 focus:outline-none focus-visible:ring-offset-0 p-2 rounded"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            className={`mt-4 ${loading ? "bg-gray-400" : "bg-blue-500"}`}
            onClick={sendEmail}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Invitation"}
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default InvitePeople;
