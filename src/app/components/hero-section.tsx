import { Button } from "@/app/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 to-white px-4 py-20 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Column - Content */}
          <div className="flex flex-col items-start space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
              </span>
              <span className="text-sm text-blue-900">Beta Now Open</span>
            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
              Find Where Your Customers Hang Out Online
            </h1>

            <p className="text-xl text-gray-600 md:text-2xl">
              Discover Reddit communities, forums, and groups to market your SaaS without guessing.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="group bg-blue-600 px-8 py-6 text-lg hover:bg-blue-700"
              >
                Join Waitlist
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 px-8 py-6 text-lg hover:bg-gray-50"
              >
                <Play className="mr-2 h-5 w-5" />
                See Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Free trial</span>
              </div>
            </div>
          </div>

          {/* Right Column - Dashboard Mockup */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 opacity-20 blur-3xl"></div>
            <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl">
              {/* Browser Chrome */}
              <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-50 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                </div>
                <div className="ml-4 flex-1 rounded bg-white px-3 py-1 text-xs text-gray-500">
                  communityfinder.io/search
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <input
                    type="text"
                    placeholder="Search communities..."
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm"
                    readOnly
                  />
                </div>

                <div className="space-y-3">
                  {[
                    { name: "r/SaaS", members: "124K", relevance: 95 },
                    { name: "r/startups", members: "1.2M", relevance: 89 },
                    { name: "r/Entrepreneur", members: "3.5M", relevance: 82 },
                    { name: "Indie Hackers", members: "500K", relevance: 94 },
                  ].map((community, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500"></div>
                        <div>
                          <div className="font-medium text-gray-900">{community.name}</div>
                          <div className="text-sm text-gray-500">{community.members} members</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-sm font-medium text-green-600">
                          {community.relevance}% match
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
