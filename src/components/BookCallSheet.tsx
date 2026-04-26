import { useState, useEffect } from "react";
import { format } from "date-fns";
import {
  CalendarIcon,
  Clock,
  Mail,
  User,
  MessageSquare,
  X,
  CheckCircle2,
} from "lucide-react";
import { z } from "zod";
import { useForm as useFormspree } from "@formspree/react";
import { motion, AnimatePresence } from "framer-motion";

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
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
];

const bookingSchema = z.object({
  name: z.string().trim().min(2, "incorrect details, Please enter a valid name"),
  email: z.string().trim().email("Please enter a valid email"),
  date: z.date({ required_error: "Please select a date" }),
  time: z.string().min(1, "Please select a time"),
  notes: z.string().trim().optional(),
});

const BookCallSheet = ({ trigger }: BookCallSheetProps) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");
  const [formspreeState, submitToFormspree] = useFormspree("xqewyonl");

  // Lock scroll
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = bookingSchema.safeParse({ name, email, date, time, notes });

    if (!result.success) {
      toast({
        title: "Details missing",
        description: result.error.errors[0]?.message,
        variant: "destructive",
      });
      return;
    }

    const dateStr = format(result.data.date, "PPP");
    await submitToFormspree({
      name: result.data.name,
      email: result.data.email,
      date: dateStr,
      time: result.data.time,
      notes: result.data.notes || "N/A",
    });
  };

  return (
    <>
      <div onClick={() => setOpen(true)} className="cursor-pointer contents">
        {trigger}
      </div>

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[50] flex items-end sm:items-center justify-center p-0 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-background/10 backdrop-blur-xs"
            />

            {/* Centered Modal Card */}
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative z-10 w-full h-50 max-w-[460px] bg-card border border-border shadow-2xs rounded-t-[20px] sm:rounded-[20px] overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {formspreeState.succeeded ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-10 text-center space-y-6"
                  >
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-foreground">
                        Request Sent!
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Thanks {name}! I will check my calendar and email you a
                        confirmation soon.
                      </p>
                    </div>
                    <Button
                      onClick={() => setOpen(false)}
                      variant="secondary"
                      className="w-full h-12 rounded-xl"
                    >
                      Close
                    </Button>
                  </motion.div>
                ) : (
                  <div className="flex flex-col max-h-[90vh]">
                    <div className="mx-auto mt-3 h-1.5 w-12 rounded-full bg-muted sm:hidden" />

                    <div className="p-6 border-b border-border flex items-start justify-between">
                      <div>
                        <h2 className="text-2xl text-start font-bold text-foreground tracking-tight">
                          Book a Session
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          Select a prefered time for our talk.
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setOpen(false)}
                        className="rounded-full h-8 w-8"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      className="p-6 space-y-6 overflow-y-auto"
                    >
                      <div className="space-y-4">
                        {/* Name Input */}
                        <div className="space-y-2">
                          <Label
                            htmlFor="name"
                            className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2"
                          >
                            <User className="w-3 h-3" /> Full Name
                          </Label>
                          <Input
                            id="name"
                            placeholder="Your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="h-12 rounded-xl bg-muted/40 border-border text-foreground focus-visible:ring-primary"
                          />
                        </div>

                        {/* Email Input */}
                        <div className="space-y-2">
                          <Label
                            htmlFor="email"
                            className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2"
                          >
                            <Mail className="w-3 h-3" /> Email
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="hello@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="h-12 rounded-xl bg-muted/40 border-border text-foreground focus-visible:ring-primary"
                          />
                        </div>

                        {/* Date & Time Row */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                              <CalendarIcon className="w-3 h-3" /> Date
                            </Label>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant="outline"
                                  className={cn(
                                    "w-full h-12 rounded-xl justify-start font-normal bg-muted/40 border-border text-foreground",
                                    !date && "text-muted-foreground",
                                  )}
                                >
                                  {date ? format(date, "MMM d") : "Pick date"}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent
                                className="w-auto p-0"
                                align="start"
                              >
                                <Calendar
                                  mode="single"
                                  selected={date}
                                  onSelect={setDate}
                                  disabled={(d) =>
                                    d < new Date() ||
                                    d.getDay() === 0 ||
                                    d.getDay() === 6
                                  }
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                          </div>

                          <div className="space-y-2">
                            <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                              <Clock className="w-3 h-3" /> Time
                            </Label>
                            <Select value={time} onValueChange={setTime}>
                              <SelectTrigger className="h-12 rounded-xl bg-muted/40 border-border text-foreground">
                                <SelectValue placeholder="Time" />
                              </SelectTrigger>
                              <SelectContent>
                                {TIME_SLOTS.map((slot) => (
                                  <SelectItem key={slot} value={slot}>
                                    {slot}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        {/* Notes */}
                        <div className="space-y-2">
                          <Label
                            htmlFor="notes"
                            className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2"
                          >
                            <MessageSquare className="w-3 h-3" /> Topic
                          </Label>
                          <Textarea
                            id="notes"
                            placeholder="What would you like to discuss?"
                            rows={3}
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            className="rounded-xl bg-muted/40 border-border text-foreground focus-visible:ring-primary resize-none"
                          />
                        </div>
                      </div>

                      <div className="pt-2">
                        <Button
                          type="submit"
                          className="w-full h-12 rounded-xl font-bold transition-all active:scale-[0.98]"
                          disabled={formspreeState.submitting}
                        >
                          {formspreeState.submitting
                            ? "Sending Request..."
                            : "Confirm Booking"}
                        </Button>
                      </div>
                    </form>
                  </div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BookCallSheet;
