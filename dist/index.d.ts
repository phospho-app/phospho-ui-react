export { sendUserFeedback } from 'phospho';
import * as React from 'react';

interface Feedback {
    flag: "success" | "failure";
    notes: string;
}
interface OpenFeedbackDrawerProps {
    title?: string;
    description?: string;
    projectId?: string;
    taskId?: string;
    onSubmit?: (feedback: Feedback) => void;
    onClose?: (feedback: Feedback) => void;
    source?: string;
}
declare const OpenFeedbackDrawer: React.FC<OpenFeedbackDrawerProps>;

export { OpenFeedbackDrawer };
