import { Card } from "@/app/components/ui/card";
import { Search, Download, Bookmark, BarChart3, Bell } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Search,
      title: "Community search",
      description: "Advanced AI-powered search across Reddit, forums, and online groups to find your perfect audience.",
      badge: null,
    },
    {
      icon: Download,
      title: "Export to CSV",
      description: "Download your community lists with all relevant data for easy sharing with your team.",
      badge: null,
    },
    {
      icon: Bookmark,
      title: "Save searches",
      description: "Keep track of your best performing searches and revisit them whenever you need.",
      badge: null,
    },
    {
      icon: BarChart3,
      title: "Sentiment analysis",
      description: "Understand the mood and engagement levels of communities before posting.",
      badge: null,
    },
    {
      icon: Bell,
      title: "Alerts",
      description: "Get notified when new relevant communities emerge that match your criteria.",
      badge: "Coming Soon",
    },
  ];

  return (
    <section className="bg-gray-50 px-4 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
            Features
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Everything you need to grow
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Powerful features designed specifically for indie founders and marketers who want real results.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-gray-200 bg-white p-8 transition-all hover:border-blue-200 hover:shadow-lg"
            >
              {/* Gradient background on hover */}
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-blue-100 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"></div>

              <div className="relative">
                {/* Icon */}
                <div className="mb-4 inline-flex rounded-lg bg-blue-100 p-3 transition-colors group-hover:bg-blue-200">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>

                {/* Title and badge */}
                <div className="mb-3 flex items-center gap-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  {feature.badge && (
                    <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700">
                      {feature.badge}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
