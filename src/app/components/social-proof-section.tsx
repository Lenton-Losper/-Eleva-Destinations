import { Star } from "lucide-react";

export function SocialProofSection() {
  const testimonials = [
    {
      quote: "CommunityFinder helped me discover 5 high-quality communities I never knew existed. Got my first 100 users from there!",
      author: "Sarah Chen",
      role: "Founder @ TaskFlow",
      avatar: "SC",
    },
    {
      quote: "This tool is a game-changer. Instead of randomly posting, I now target the exact communities where my audience hangs out.",
      author: "Marcus Rodriguez",
      role: "Indie Hacker",
      avatar: "MR",
    },
    {
      quote: "Saved me 10+ hours per week on community research. The sentiment analysis feature is incredibly accurate.",
      author: "Emma Thompson",
      role: "Marketing Lead @ StartupOS",
      avatar: "ET",
    },
  ];

  return (
    <section className="bg-white px-4 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
            Loved by Founders
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Join 100+ founders growing their SaaS
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Don't just take our word for it. Here's what early users are saying.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-16 grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mb-2 text-5xl font-bold text-gray-900">100+</div>
            <div className="text-gray-600">Active Founders</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-5xl font-bold text-gray-900">10K+</div>
            <div className="text-gray-600">Communities Indexed</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-5xl font-bold text-gray-900">500K+</div>
            <div className="text-gray-600">Users Reached</div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 transition-all hover:border-blue-200 hover:shadow-lg"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="mb-6 text-gray-700">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 font-semibold text-white">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
