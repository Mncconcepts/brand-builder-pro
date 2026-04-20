import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, Clock, Mail, User, MessageSquare } from "lucide-react";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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
  "16:00", "16:30", "17:00",
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

  const reset = () => {
    setName("");
    setEmail("");
    setDate(undefined);
    setTime("");
    setNotes("");
  };

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
    // Simulate request
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    toast({
      title: "Call request sent",
      description: `Thanks ${result.data.name}! I'll confirm ${format(
        result.data.date,
        "PPP",
      )} at ${result.data.time} via email.`,
    });
    reset();
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent
        side="bottom"
        className="h-[85vh] sm:h-[80vh] rounded-t-2xl p-0 flex flex-col bg-background"
      >
        <div className="mx-auto mt-3 h-1.5 w-12 rounded-full bg-muted-foreground/30 shrink-0" />
        <SheetHeader className="px-6 pt-4 pb-2 text-left shrink-0">
          <SheetTitle className="font-display text-2xl font-semibold text-foreground">
            Book A Call Session
          </SheetTitle>
          <SheetDescription className="text-muted-foreground">
            Pick a day and time that works for you. I'll confirm shortly via email.
          </SheetDescription>
        </SheetHeader>

        <form
          onSubmit={handleSubmit}
          className="flex-1 overflow-y-auto px-6 pb-6 pt-2 space-y-5"
        >
          <div className="space-y-2">
            <Label htmlFor="bc-name" className="flex items-center gap-2">
              <User className="h-3.5 w-3.5" /> Full Name
            </Label>
            <Input
              id="bc-name"
              placeholder="Jane Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={100}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="bc-email" className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5" /> Email Address
            </Label>
            <Input
              id="bc-email"
              type="email"
              placeholder="jane@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              maxLength={255}
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <CalendarIcon className="h-3.5 w-3.5" /> Preferred Date
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
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
              <Label className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5" /> Preferred Time
              </Label>
              <Select value={time} onValueChange={setTime}>
                <SelectTrigger>
                  <SelectValue placeholder="Pick a time" />
                </SelectTrigger>
                <SelectContent className="max-h-60">
                  {TIME_SLOTS.map((slot) => (
                    <SelectItem key={slot} value={slot}>
                      {slot}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bc-notes" className="flex items-center gap-2">
              <MessageSquare className="h-3.5 w-3.5" /> What would you like to discuss?{" "}
              <span className="text-muted-foreground font-normal">(optional)</span>
            </Label>
            <Textarea
              id="bc-notes"
              placeholder="Briefly describe your project or goals..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              maxLength={500}
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <Button
              type="submit"
              disabled={submitting}
              className="flex-1 h-11"
            >
              {submitting ? "Sending..." : "Confirm Booking"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="h-11"
            >
              Cancel
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center pt-1">
            You'll receive a calendar invite once the slot is confirmed.
          </p>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default BookCallSheet;
