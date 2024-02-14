export { sendUserFeedback } from 'phospho';
import * as React from 'react';

interface Feedback {
    flag: "success" | "failure";
    notes: string;
}
interface FeedbackDrawerProps {
    title?: string;
    description?: string;
    projectId?: string;
    taskId?: string;
    onSubmit?: (feedback: Feedback) => void;
    onClose?: (feedback: Feedback) => void;
    source?: string;
}
declare const FeedbackDrawer: React.FC<FeedbackDrawerProps>;

export { type Feedback, FeedbackDrawer, type FeedbackDrawerProps };
