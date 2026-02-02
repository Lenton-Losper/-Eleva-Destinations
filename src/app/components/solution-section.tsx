import { Search, ListChecks, MessageCircle } from "lucide-react";

export function SolutionSection() {
  const steps = [
    {
      icon: Search,
      step: "01",
      title: "Enter keyword",
      description: "Tell us about your product or target audience in a few words",
    },
    {
      icon: ListChecks,
      step: "02",
      title: "Get communities",
      description: "Receive a curated list of relevant communities ranked by engagement",
    },
    {
      icon: MessageCircle,
      step: "03",
      title: "Start engaging",
      description: "Jump in with confidence knowing where your customers actually are",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 px-4 py-20 md:py-24">
      {/* Background decorative elements */}
      <div className="absolute left-0 top-0 h-full w-full opacity-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-white blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-indigo-400 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex rounded-full bg-white/20 px-4 py-1 text-sm font-medium text-white">
            How It Works
          </div>
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Three steps to find your audience
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-blue-100">
            Stop guessing. Start growing. Our intelligent algorithm finds where your customers are already talking.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Connection line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="absolute left-full top-1/2 hidden h-0.5 w-full -translate-y-1/2 md:block">
                  <div className="h-full bg-gradient-to-r from-white/30 to-transparent"></div>
                </div>
              )}

              <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm transition-all hover:bg-white/15 hover:shadow-2xl">
                {/* Step number */}
                <div className="mb-6 text-5xl font-bold text-white/30">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="mb-6 inline-flex rounded-xl bg-white/20 p-3 backdrop-blur-sm">
                  <step.icon className="h-6 w-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-2xl font-semibold text-white">
                  {step.title}
                </h3>

                <p className="text-blue-100">
                  {step.description}
                </p>

                {/* Decorative corner element */}
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/10 blur-2xl transition-all group-hover:bg-white/20"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
