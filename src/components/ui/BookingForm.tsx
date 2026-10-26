"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { budgetRanges } from "@/data/pricing";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const leadSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company name is required"),
  projectType: z.enum(["AI", "MVP", "TOOLS", "UI_UX", "MULTIPLE"]),
  estimatedBudget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(10, "Tell us a bit more about your project (min 10 chars)"),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Please accept the Terms of Service and Privacy Policy to continue" }),
  }),
});

type LeadFormData = z.infer<typeof leadSchema>;

interface BookingFormProps {
  defaultProjectType?: string;
}

export default function BookingForm({ defaultProjectType }: BookingFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      projectType: (defaultProjectType as LeadFormData["projectType"]) || "MULTIPLE",
    },
  });

  const onSubmit = async (data: LeadFormData) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <CheckCircle2 size={48} className="text-ice-cyan mx-auto mb-6" strokeWidth={1} />
        <h3 className="font-light text-ice-cyan mb-4" style={{ fontSize: "30px" }}>
          Message received
        </h3>
        <p className="text-ice-cyan/60 max-w-md mx-auto">
          Thank you for reaching out. We&apos;ll review your project details and get back to you within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 max-w-2xl"
    >
      {/* Name fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-widest text-ice-cyan/50 mb-2">
            First Name
          </label>
          <input
            {...register("firstName")}
            placeholder="Jane"
          />
          {errors.firstName && (
            <p className="text-xs text-ice-cyan/60 mt-1 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.firstName.message}
            </p>
          )}
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-ice-cyan/50 mb-2">
            Last Name
          </label>
          <input
            {...register("lastName")}
            placeholder="Doe"
          />
          {errors.lastName && (
            <p className="text-xs text-ice-cyan/60 mt-1 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-xs uppercase tracking-widest text-ice-cyan/50 mb-2">
          Email
        </label>
        <input
          {...register("email")}
          type="email"
          placeholder="jane@startup.com"
        />
        {errors.email && (
          <p className="text-xs text-ice-cyan/60 mt-1 flex items-center gap-1">
            <AlertCircle size={12} /> {errors.email.message}
          </p>
        )}
      </div>

      {/* Company */}
      <div>
        <label className="block text-xs uppercase tracking-widest text-ice-cyan/50 mb-2">
          Company
        </label>
        <input
          {...register("company")}
          placeholder="Acme Corp"
        />
        {errors.company && (
          <p className="text-xs text-ice-cyan/60 mt-1 flex items-center gap-1">
            <AlertCircle size={12} /> {errors.company.message}
          </p>
        )}
      </div>

      {/* Project Type & Budget */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-widest text-ice-cyan/50 mb-2">
            Project Type
          </label>
          <select {...register("projectType")}>
            <option value="AI">AI Automation</option>
            <option value="MVP">MVP Website</option>
            <option value="TOOLS">Custom Tools</option>
            <option value="UI_UX">UI/UX Design</option>
            <option value="MULTIPLE">Multiple / Not Sure</option>
          </select>
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-ice-cyan/50 mb-2">
            Estimated Budget
          </label>
          <select {...register("estimatedBudget")}>
            <option value="">Select budget range</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
          {errors.estimatedBudget && (
            <p className="text-xs text-ice-cyan/60 mt-1 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.estimatedBudget.message}
            </p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs uppercase tracking-widest text-ice-cyan/50 mb-2">
          Tell us about your project
        </label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Describe your project, goals, and any specific requirements..."
        />
        {errors.message && (
          <p className="text-xs text-ice-cyan/60 mt-1 flex items-center gap-1">
            <AlertCircle size={12} /> {errors.message.message}
          </p>
        )}
      </div>

      {/* Consent */}
      <div>
        <label className="flex items-start gap-3 text-sm text-ice-cyan/60 leading-relaxed cursor-pointer">
          <input
            {...register("consent")}
            type="checkbox"
            className="mt-1 shrink-0"
            aria-invalid={errors.consent ? true : undefined}
          />
          <span>
            I have read and agree to the{" "}
            <a href="/terms" target="_blank" rel="noopener noreferrer" className="ghost-link">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" target="_blank" rel="noopener noreferrer" className="ghost-link">
              Privacy Policy
            </a>
            , and I consent to Ethermind processing the details above to respond to my inquiry.
          </span>
        </label>
        {errors.consent && (
          <p className="text-xs text-ice-cyan/60 mt-1 flex items-center gap-1">
            <AlertCircle size={12} /> {errors.consent.message}
          </p>
        )}
      </div>

      {/* Error state */}
      <AnimatePresence>
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-sm text-ice-cyan/60 flex items-center gap-2"
          >
            <AlertCircle size={14} />
            Something went wrong. Please try again.
          </motion.p>
        )}
      </AnimatePresence>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="ghost-link text-sm inline-flex items-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-wait bg-transparent border-0 border-b border-ice-cyan py-2"
        style={{ borderTop: "none", borderLeft: "none", borderRight: "none" }}
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={14} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={14} />
            Send message
          </>
        )}
      </button>
    </motion.form>
  );
}
