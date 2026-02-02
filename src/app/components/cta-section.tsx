import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 px-4 py-20 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          Start Finding Customers Today
        </h2>
        <p className="mb-10 text-xl text-gray-300 md:text-2xl">
          Join hundreds of founders who are already growing their businesses with CommunityFinder
        </p>

        <div className="mx-auto max-w-md">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-14 border-gray-700 bg-white/10 px-6 text-white placeholder:text-gray-400 focus:border-blue-500 focus:bg-white/15"
            />
            <Button
              size="lg"
              className="group h-14 bg-blue-600 px-8 hover:bg-blue-700"
            >
              Join Waitlist
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            No credit card required. 7-day free trial included.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Instant access</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Cancel anytime</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>No setup required</span>
          </div>
        </div>
      </div>
    </section>
  );
}
