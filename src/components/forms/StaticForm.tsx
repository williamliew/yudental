"use client";

import type { FormEvent, ReactNode } from "react";
import { useState } from "react";

type StaticFormProps = {
  id: string;
  children: ReactNode;
  successMessage: string;
  onValidate?: () => boolean;
  onReset?: () => void;
};

export function StaticForm({ id, children, successMessage, onValidate, onReset }: StaticFormProps) {
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (onValidate && !onValidate()) return;
    setMessage(successMessage);
    event.currentTarget.reset();
    onReset?.();
  };

  return (
    <>
      {message && (
        <output className="mb-4 block rounded border border-teal/30 bg-teal/10 px-4 py-3 text-sm text-navy">
          {message}
        </output>
      )}
      <form id={id} onSubmit={handleSubmit} noValidate>
        {children}
      </form>
    </>
  );
}
