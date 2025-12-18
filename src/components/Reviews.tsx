import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const reviews = [
  {
    name: "Sarah Martinez",
    location: "Westside Santa Cruz",
    rating: 5,
    text: "The Can Buddy has been a game-changer! Our bins used to smell terrible, especially in summer. Now they're always fresh and clean. The team is professional and reliable.",
    initials: "SM",
    image: "/images/profilepic1.jpeg",
  },
  {
    name: "Michael Chen",
    location: "Live Oak",
    rating: 5,
    text: "I was skeptical at first, but after the first cleaning I was sold. The difference is incredible. Highly recommend their monthly service - totally worth it!",
    initials: "MC",
    image: "/images/profilepic2.jpeg",
  },
  {
    name: "Jennifer Thompson",
    location: "Downtown Santa Cruz",
    rating: 5,
    text: "Fantastic service! They're always on time, do an amazing job, and the pricing is very reasonable. My neighbors have started using them too after seeing how clean our bins are.",
    initials: "JT",
  },
  {
    name: "David Rodriguez",
    location: "Westlake Neighborhood",
    rating: 5,
    text: "As a business owner with multiple bins, The Can Buddy keeps everything spotless. Professional, eco-friendly, and great value. Couldn't be happier!",
    initials: "DR",
    image: "/images/profilepic5.jpeg",
  },
  {
    name: "Lisa Anderson",
    location: "Midtown Santa Cruz",
    rating: 5,
    text: "Love this service! No more gross bins attracting flies. The team is friendly and the eco-friendly products they use give me peace of mind. Five stars!",
    initials: "LA",
  },
  {
    name: "James Wilson",
    location: "Seabright",
    rating: 5,
    text: "Best money I spend each month! The bins always look and smell brand new. The convenience of having them clean it right at my house is unbeatable.",
    initials: "JW",
    image: "/images/profilepic4.jpeg",
  },
];

const Reviews = () => {
  return (
    <section className="py-20 bg-gradient-sky">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-accent text-accent" />
            ))}
            <Star
              className="w-8 h-8 fill-accent text-accent opacity-80"
              style={{ clipPath: "inset(0 20% 0 0)" }}
            />
            <span className="text-2xl font-bold text-primary ml-2">4.8</span>
            <span className="text-muted-foreground ml-1">from 7+ reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-white group"
            >
              <Quote className="w-10 h-10 text-ocean-light mb-4 group-hover:text-accent transition-colors duration-300" />

              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-6 italic">
                "{review.text}"
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12 bg-gradient-ocean">
                    {review.image && (
                      <AvatarImage
                        src={review.image}
                        alt={review.name}
                        className="object-cover"
                      />
                    )}
                    <AvatarFallback className="bg-gradient-ocean text-white font-semibold">
                      {review.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-primary">
                      {review.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {review.location}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
