import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarDays, Clock, Video } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const timeSlots = ["9:00 AM", "10:30 AM", "1:00 PM", "2:30 PM", "4:00 PM"];

const ScheduleSection = () => {
  const [date, setDate] = useState<Date | undefined>();
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="schedule" className="py-24 lg:py-32 bg-section-alt" ref={ref}>
      <div className="container mx-auto section-padding">
        {isVisible && (
          <>
            <div className="max-w-xl mb-12 animate-reveal">
              <p className="text-xs font-semibold tracking-widest uppercase text-highlight mb-3">Let's Talk</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-balance leading-tight">
                Book a Conversation
              </h2>
              <p className="mt-3 text-muted-foreground text-pretty">
                Interested in a deeper discussion? Schedule a 30-minute call to exchange ideas on any topic I cover.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
              {/* Calendar */}
              <div className="bg-background rounded-lg p-6 shadow-sm animate-reveal animate-reveal-delay-1">
                <div className="flex items-center gap-2 mb-4 text-sm font-semibold">
                  <CalendarDays size={16} className="text-primary" />
                  Select a Date
                </div>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(d) => d < new Date() || d.getDay() === 0 || d.getDay() === 6}
                  className="pointer-events-auto"
                />
              </div>

              {/* Time slots */}
              <div className="bg-background rounded-lg p-6 shadow-sm animate-reveal animate-reveal-delay-2">
                <div className="flex items-center gap-2 mb-4 text-sm font-semibold">
                  <Clock size={16} className="text-primary" />
                  {date ? `Available on ${date.toLocaleDateString("en-US", { month: "short", day: "numeric" })}` : "Pick a date first"}
                </div>

                {date ? (
                  <div className="space-y-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        className={`w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 active:scale-[0.98] ${
                          selectedSlot === slot
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted hover:bg-muted/70 text-foreground"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}

                    {selectedSlot && (
                      <div className="pt-4">
                        <Button className="w-full" size="lg">
                          <Video size={16} />
                          Confirm Booking
                        </Button>
                        <p className="text-xs text-muted-foreground text-center mt-2">
                          30-minute video call · Sign in required
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-48 text-sm text-muted-foreground">
                    Choose a date to see available times
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ScheduleSection;
