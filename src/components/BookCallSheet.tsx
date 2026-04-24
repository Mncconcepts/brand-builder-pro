import { useState, useEffect } from "react";
import { format } from "date-fns";
import { CalendarIcon, Clock, Mail, User, MessageSquare, X } from "lucide-react";
import { z } from "zod";
import { useForm as useFormspree } from "@formspree/react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface BookCallSheetProps {
  trigger: React.ReactNode;
}

const TIME_SLOTS = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00",
];

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  date: z.date({ required_error: "Please select a date" }),
  time: z.string().min(1, "Please select a time"),
  notes: z.string().trim().max(500).optional(),
});

const BookCallSheet = ({ trigger }: BookCallSheetProps) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");
  const [formspreeState, submitToFormspree] = useFormspree("xqewyonl");

  const reset = () => {
    setName("");
    setEmail("");
    setDate(undefined);
    setTime("");
    setNotes("");
  };

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // React to Formspree response after submission
  useEffect(() => {
    if (formspreeState.succeeded) {
      setSubmitting(false);
      toast({
        title: "Booking request sent!",
        description: `Thanks ${name}! I'll confirm your slot shortly via email.`,
      });
      reset();
      setOpen(false);
    } else if (
      formspreeState.errors &&
      Array.isArray(formspreeState.errors) &&
      formspreeState.errors.length > 0
    ) {
      setSubmitting(false);
      toast({
        title: "Failed to send booking",
        description: "Please try again or email me directly.",
        variant: "destructive",
      });
    }
  }, [formspreeState.succeeded, formspreeState.errors]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = bookingSchema.safeParse({ name, email, date, time, notes });
    if (!result.success) {
      toast({
        title: "Please check the form",
        description: result.error.errors[0]?.message ?? "Invalid input",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    toast({
      title: "Sending booking request...",
      description: "Please wait a moment.",
    });

    const dateStr = format(result.data.date, "PPP");

    await submitToFormspree({
      name: result.data.name,
      email: result.data.email,
      date: dateStr,
      time: result.data.time,
      notes: result.data.notes || "N/A",
      _subject: `Call Booking - ${result.data.name} on ${dateStr} at ${result.data.time}`,
    });
  };

  return (
    <>
      <span onClick={() => setOpen(true)} className="contents">
        {trigger}
      </span>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
          aria-modal="true"
          role="dialog"
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          <div className="relative z-10 w-full sm:max-w-lg sm:mx-4 bg-background sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[90vh] sm:max-h-[85vh]">
            {/* Drag handle (mobile) */}
            <div className="mx-auto mt-3 h-1.5 w-12 rounded-full bg-muted-foreground/30 shrink-0 sm:hidden" />

            {/* Header */}
            <div className="px-6 pt-5 pb-3 shrink-0 flex items-start justify-between">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Book A Call Session
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Pick a day and time that works for you. I'll confirm shortly via email.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="ml-4 mt-0.5 p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors shrink-0"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Scrollable form body */}
            <form
              onSubmit={handleSubmit}
              className="flex-1 overflow-y-auto px-6 pb-6 pt-2 space-y-5"
            >
              <div className="space-y-2">
                <Label htmlFor="bc-name" className="flex items-center gap-2 text-white">
                  <User className="h-3.5 w-3.5 text-white"/> Full Name
                </Label>
                <Input
                  id="bc-name"
                  placeholder="Jane Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={100}
                  required
                  className="text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bc-email" className="flex items-center gap-2 text-white">
                  <Mail className="h-3.5 w-3.5" text-white /> Email Address
                </Label>
                <Input
                  id="bc-email"
                  type="email"
                  placeholder="jane@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  maxLength={255}
                  required
                  className="text-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="flex items-center gap-2 text-white">
                    <CalendarIcon className="h-3.5 w-3.5" /> Preferred Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        type="button"
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal text-white",
                          !date && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(d) => {
                          const today = new Date();
                          today.setHours(0, 0, 0, 0);
                          const day = d.getDay();
                          return d < today || day === 0 || day === 6;
                        }}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center gap-2 text-white">
                    <Clock className="h-3.5 w-3.5 text-white"/> Preferred Time
                  </Label>
                  <Select value={time} onValueChange={setTime}>
                    <SelectTrigger>
                      <SelectValue placeholder="Pick a time" />
                    </SelectTrigger>
                    <SelectContent className="max-h-60 text-white">
                      {TIME_SLOTS.map((slot) => (
                        <SelectItem className="text-white" key={slot} value={slot}>
                          {slot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bc-notes" className="flex items-center gap-2 text-white">
                  <MessageSquare className="h-3.5 w-3.5" /> What would you like to discuss?{" "}
                  <span className="text-muted-foreground font-normal text-gray-400">(optional)</span>
                </Label>
                <Textarea
                  id="bc-notes"
                  placeholder="Briefly describe your project or goals..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  maxLength={500}
                  className="text-white"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Button
                  type="submit"
                  disabled={submitting || formspreeState.submitting}
                  className="flex-1 h-11"
                >
                  {submitting || formspreeState.submitting ? "Sending..." : "Confirm Booking"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setOpen(false)}
                  className="h-11 text-white"
                >
                  Cancel
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center pt-1">
                You'll receive a calendar invite once the slot is confirmed.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default BookCallSheet;