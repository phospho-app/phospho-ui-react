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
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
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

const OpenFeedbackDrawer: React.FC<OpenFeedbackDrawerProps> = ({
  title = null,
  description = null,
  projectId = null,
  taskId = null,
  onSubmit = null,
  onClose = null,
  source = null,
}: OpenFeedbackDrawerProps) => {
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

  const onSubmitFunc = async (feedback: Feedback) => {
    // Send to phospho
    sendUserFeedback({
      projectId: projectId,
      taskId: taskId,
      flag: feedback.flag,
      notes: feedback.notes,
      source: source,
    });
    if (onSubmit !== null) {
      try {
        await onSubmit(feedback);
      } catch (error) {
        console.error("Error submitting feedback", error);
      }
    }
    if (onClose !== null) {
      onClose();
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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <DrawerHeader>
                {title !== null && <DrawerTitle>{title}</DrawerTitle>}
                {description !== null && (
                  <DrawerDescription>{description}</DrawerDescription>
                )}
              </DrawerHeader>
              <div className="p-4 pb-0">
                <FormField
                  control={form.control}
                  name="flag"
                  render={({ field }) => (
                    <ToggleGroup type="single">
                      <ToggleGroupItem
                        value="failure"
                        onClick={() => {
                          form.setValue("flag", "failure");
                        }}
                      >
                        <ThumbsDown />
                      </ToggleGroupItem>
                      <ToggleGroupItem
                        value="success"
                        onClick={() => {
                          form.setValue("flag", "success");
                        }}
                      >
                        <ThumbsUp />
                      </ToggleGroupItem>
                    </ToggleGroup>
                  )}
                />
                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Tell us how it went."
                          type="textarea"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <DrawerFooter>
                <Button type="submit" disabled={!form.formState.isValid}>
                  Send
                </Button>
                <DrawerClose asChild>
                  <Button
                    variant="outline"
                    onClick={() => {
                      if (onClose !== null) {
                        onClose();
                      }
                    }}
                  >
                    Cancel
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </form>
          </Form>
        </div>
      </DrawerContent>
    </Drawer.Root>
  );
};

// Export the component
export default OpenFeedbackDrawer;
// export { OpenFeedbackDrawer };
