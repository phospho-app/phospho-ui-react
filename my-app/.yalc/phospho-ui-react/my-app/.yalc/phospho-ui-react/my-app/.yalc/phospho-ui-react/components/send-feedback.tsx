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
  title?: string;
  description?: string;
  projectId?: string;
  taskId?: string;
  onSubmit?: (feedback: Feedback) => void | Promise<void>;
  onClose?: () => void | Promise<void>;
  source?: string;
}

const defaultProps: OpenFeedbackDrawerProps = {
  title: "Send Feedback",
  description: null,
  projectId: null,
  taskId: null,
  onSubmit: null,
  onClose: null,
  source: null,
};

const OpenFeedbackDrawer: React.FC<OpenFeedbackDrawerProps> = ({
  title,
  description,
  projectId,
  taskId,
  onSubmit,
  onClose,
  source,
}: OpenFeedbackDrawerProps) => {
  // This component is the feedback form that is displayed when the user clicks the "Send Feedback" button

  // The feedback has flag, notes, user. Flag must be success or failure. Notes can't be longer than 1000 characters. User is optional.
  const feedbackSchema = z.object({
    flag: z.enum(["success", "failure"]),
    notes: z
      .string()
      .max(1000, { message: "Notes must be less than 1000 characters." }),
    source: z.string().optional(),
  });

  const form = useForm<z.infer<typeof feedbackSchema>>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      notes: "",
    },
  });

  // Define the fields

  const onSubmitFunc = async (feedback: Feedback) => {
    // Send to phospho
    try {
      sendUserFeedback({
        projectId: projectId,
        taskId: taskId,
        flag: feedback.flag,
        notes: feedback.notes,
        source: source,
      });
    } catch (error) {
      console.error("Error submitting feedback to phospho", error);
    }

    if (onSubmit) {
      try {
        await onSubmit(feedback);
      } catch (error) {
        console.error("Error submitting feedback", error);
      }
    }
    if (onClose) {
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
            <form
              onSubmit={form.handleSubmit(onSubmitFunc)}
              className="space-y-8"
            >
              <DrawerHeader>
                {title && <DrawerTitle>{title}</DrawerTitle>}
                {description && (
                  <DrawerDescription>{description}</DrawerDescription>
                )}
              </DrawerHeader>
              <div className="p-4 pb-0">
                <FormField
                  control={form.control}
                  name="flag"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
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
                      </FormControl>
                      <FormMessage />
                    </FormItem>
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
                <DrawerClose asChild>
                  <Button type="submit" disabled={!form.formState.isValid}>
                    Send
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

OpenFeedbackDrawer.defaultProps = defaultProps;

// Export the component
export default OpenFeedbackDrawer;
// export { OpenFeedbackDrawer };
