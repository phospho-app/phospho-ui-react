export { sendUserFeedback } from 'phospho';
import * as React from 'react';

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
declare const OpenFeedbackDrawer: React.FC<OpenFeedbackDrawerProps>;

export { OpenFeedbackDrawer };
