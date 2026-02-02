import { Clock, TrendingDown, HelpCircle } from "lucide-react";

export function ProblemSection() {
  const problems = [
    {
      icon: Clock,
      title: "Wasting time posting everywhere",
      description: "Spending hours finding communities only to get zero engagement",
    },
    {
      icon: TrendingDown,
      title: "No traction",
      description: "Your product isn't getting the visibility it deserves",
    },
    {
      icon: HelpCircle,
      title: "Guessing where to market",
      description: "Shooting in the dark without data-driven insights",
    },
  ];

  return (
    <section className="bg-white px-4 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex rounded-full bg-red-100 px-4 py-1 text-sm font-medium text-red-700">
            The Problem
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Marketing feels like guesswork
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Most founders waste countless hours searching for the right communities, only to get minimal results.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 transition-all hover:shadow-lg"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-red-100 opacity-30 blur-2xl transition-opacity group-hover:opacity-50"></div>
              
              <div className="relative">
                <div className="mb-6 inline-flex rounded-xl bg-red-100 p-3">
                  <problem.icon className="h-6 w-6 text-red-600" />
                </div>
                
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {problem.title}
                </h3>
                
                <p className="text-gray-600">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
