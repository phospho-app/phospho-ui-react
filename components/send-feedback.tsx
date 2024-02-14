import { sendUserFeedback } from "phospho";

import * as React from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

interface Feedback {
  flag: "success" | "failure";
  notes: string;
}

interface OpenFeedbackDrawerProps {
  title: string | null;
  description: string | null;
  projectId?: string | null;
  taskId?: string | null;
  onSubmit: (feedback: Feedback) => void | Promise<void> | null;
  onClose: () => void | Promise<void> | null;
  source: string | null;
}

const OpenFeedbackDrawer: React.FC<OpenFeedbackDrawerProps> = (
  props: OpenFeedbackDrawerProps
) => {
  // This component is the feedback form that is displayed when the user clicks the "Send Feedback" button

  // The feedback has flag, notes, user. Flag must be success or failure. Notes can't be longer than 1000 characters. User is optional.
  const feedbackSchema = z.object({
    flag: z.enum(["success", "failure"]),
    notes: z.string().max(1000),
    source: z.string().optional(),
  });

  const form = useForm<z.infer<typeof feedbackSchema>>({
    resolver: zodResolver(feedbackSchema),
  });

  const onSubmit = async (feedback: Feedback) => {
    // Send to phospho
    sendUserFeedback({
      projectId: props.projectId,
      taskId: props.taskId,
      flag: feedback.flag,
      notes: feedback.notes,
      source: props.source,
    });
    if (props.onSubmit !== null) {
      try {
        await props.onSubmit(feedback);
      } catch (error) {
        console.error("Error submitting feedback", error);
      }
    }
    if (props.onClose !== null) {
      props.onClose();
    }
  };

  // Flag is a thumbs up or down
  // Notes is a text area

  return (
    <Drawer.Root>
      <DrawerTrigger asChild>
        <Button variant="outline">Send Feedback</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            {props.title !== null && <DrawerTitle>{props.title}</DrawerTitle>}
            {props.description !== null && (
              <DrawerDescription>props.description</DrawerDescription>
            )}
          </DrawerHeader>
          <div className="p-4 pb-0">
            <ToggleGroup type="single">
              <ToggleGroupItem
                value="success"
                onClick={() => {
                  form.setValue("flag", "success");
                }}
              >
                <ThumbsUp />
              </ToggleGroupItem>
              <ToggleGroupItem
                value="failure"
                onClick={() => {
                  form.setValue("flag", "failure");
                }}
              >
                <ThumbsDown />
              </ToggleGroupItem>
            </ToggleGroup>
            <Input placeholder="Tell us how it went." type="textarea" />
          </div>
          <DrawerFooter>
            <Button
              onClick={() => {
                form.handleSubmit(onSubmit);
              }}
            >
              Send
            </Button>
            <DrawerClose asChild>
              <Button
                variant="outline"
                onClick={() => {
                  if (props.onClose !== null) {
                    props.onClose();
                  }
                }}
              >
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer.Root>
  );
};

// Export the component
export default OpenFeedbackDrawer;
// export { OpenFeedbackDrawer };
