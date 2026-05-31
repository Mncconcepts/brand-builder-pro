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
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00",
];

const noEmojiRegex = /^[a-zA-Z0-9\s\-,._@]+$/;

const bookingSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter a valid name")
    .regex(noEmojiRegex, "Name contains unsupported characters"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .regex(noEmojiRegex, "Email contains unsupported characters"),
  date: z.date({ required_error: "Please select a date" }),
  time: z.string().min(1, "Please select a time slot"),
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

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = bookingSchema.safeParse({ name, email, date, time, notes });

    if (!result.success) {
      toast({
        title: "Validation Error",
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
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-hidden bg-background/30 backdrop-blur-md">
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-black/40 dark:bg-black/60"
            />

            <motion.div
              initial={{ y: 15, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 15, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-[105] pointer-events-auto w-full max-w-[460px] mx-auto bg-card border border-border/80 shadow-2xl rounded-2xl overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {formspreeState.succeeded ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-10 text-center space-y-6"
                  >
                    <div className="mx-auto w-14 h-14 bg-foreground text-background rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-display text-2xl font-bold text-foreground">Request Lodged.</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Thank you, <span className="text-foreground font-semibold">{name}</span>. Check your inbox for confirmation.
                      </p>
                    </div>
                    <Button onClick={() => setOpen(false)} className="w-full h-11 bg-foreground text-background rounded-xl font-bold">
                      Dismiss View
                    </Button>
                  </motion.div>
                ) : (
                  <div className="flex pt-10 flex-col z-9 max-h-[90vh]">
                    <div className="p-6 border-b border-border/50 flex items-start justify-between bg-card">
                      <div className="space-y-1">
                        <h2 className="text-xl mr-10 font-bold text-foreground tracking-tight">Book Strategy Call</h2>
                        <p className="text-xs text-muted-foreground font-medium">Select your preferred date and time.</p>
                      </div>
                      <Button
                        variant="ghost" size="icon" onClick={() => setOpen(false)}
                        className="rounded-xl h-8 w-8 bg-secondary/80 dark:bg-secondary/40 border border-border/30 hover:bg-muted text-foreground"
                      >
                        <X className="h-3.5 w-3.5 stroke-[2.5]" />
                      </Button>
                    </div>

                    <form onSubmit={handleSubmit} className="p-6 space-y-5 overflow-y-auto bg-card/20">
                      <div className="space-y-4">
                        <div className="space-y-1.5">
                          <Label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                            <User className="w-3 h-3 text-[8px]"  /> Full Name
                          </Label>
                          <Input
                            id="name" required placeholder="" value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="h-11 rounded-xl bg-secondary/30 border-border/60 text-foreground"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <Label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                            <Mail className="w-3 h-3" /> Email Address
                          </Label>
                          <Input
                            id="email" required type="email" placeholder="" value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="h-11 text-[8px] rounded-xl bg-secondary/30 border-border/60 text-foreground"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-3.5">
                          <div className="space-y-1.5">
                            <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                              <CalendarIcon className="w-3 h-3" /> Date
                            </Label>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant="outline"
                                  className={cn(
                                    "w-full h-11 rounded-xl justify-start font-medium text-xs bg-secondary/30 border-border/60 text-foreground",
                                    !date && "text-muted-foreground/60",
                                  )}
                                >
                                  {date ? format(date, "MMM d, yyyy") : "Pick date"}
                                </Button>
                              </PopoverTrigger>
                              {/* FIXED: High Z-Index for Popover */}
                              <PopoverContent className="w-auto p-0 z-[110] rounded-2xl border border-border shadow-xl" align="start">
                                <Calendar
                                  mode="single" selected={date} onSelect={setDate}
                                  disabled={(d) => d < new Date() || d.getDay() === 0 || d.getDay() === 6}
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                          </div>

                          <div className="space-y-1.5">
                            <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                              <Clock className="w-3 h-3" /> Time Window
                            </Label>
                            <Select value={time} onValueChange={setTime}>
                              <SelectTrigger className="h-11 rounded-xl bg-secondary/30 border-border/60 text-foreground text-xs font-medium">
                                <SelectValue placeholder="Select slot" />
                              </SelectTrigger>
                              {/* FIXED: High Z-Index for Select Dropdown */}
                              <SelectContent className="z-[110] rounded-xl max-h-56">
                                {TIME_SLOTS.map((slot) => (
                                  <SelectItem key={slot} value={slot} className="text-xs font-medium rounded-lg">
                                    {slot}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <Label htmlFor="notes" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                            <MessageSquare className="w-3 h-3" /> Brief Briefing
                          </Label>
                          <Textarea
                            id="notes" placeholder="Outline your objectives..." rows={3} value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            className="rounded-xl bg-secondary/30 border-border/60 text-foreground text-sm resize-none"
                          />
                        </div>
                      </div>

                      <div className="pt-2">
                        <Button
                          type="submit" disabled={formspreeState.submitting}
                          className="w-full h-11 bg-foreground text-background hover:opacity-90 rounded-xl text-xs font-bold transition-all active:scale-[0.98]"
                        >
                          {formspreeState.submitting ? "Processing..." : "Secure Consultation Slot"}
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