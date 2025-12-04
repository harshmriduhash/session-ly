import React, { useState } from "react";
import ResponsiveDialog from "@/components/responsive-dialog";
import AgentsForm from "@/modules/agents/ui/components/agents-form";

interface NewAgentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NewAgentDialog = ({ open, onOpenChange }: NewAgentDialogProps) => {
  const [isPending, setIsPending] = useState(false);

  const handleOpenChange = (newOpen: boolean) => {
    // Prevent closing if form is submitting
    if (!isPending) {
      onOpenChange(newOpen);
    }
  };

  return (
    <ResponsiveDialog
      title="New Agent"
      description="Create a new agent"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <AgentsForm
        onSuccess={() => {
          setIsPending(false);
          onOpenChange(false);
        }}
        onCancel={() => {
          if (!isPending) {
            onOpenChange(false);
          }
        }}
        onPendingChange={setIsPending}
      />
    </ResponsiveDialog>
  );
};

export default NewAgentDialog;
