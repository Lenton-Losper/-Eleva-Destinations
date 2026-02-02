import { Twitter } from "lucide-react";

export function Footer() {
  const footerLinks = {
    Product: [
      { label: "Features", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Changelog", href: "#" },
    ],
    Resources: [
      { label: "Documentation", href: "#" },
      { label: "API", href: "#" },
      { label: "Community", href: "#" },
      { label: "Blog", href: "#" },
    ],
    Company: [
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  };

  return (
    <footer className="border-t border-gray-200 bg-white px-4 py-12 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600">
                <span className="text-xl font-bold text-white">CF</span>
              </div>
              <span className="text-xl font-bold text-gray-900">CommunityFinder</span>
            </div>
            <p className="mb-6 text-gray-600">
              Find where your customers hang out online. Discover Reddit communities, forums, and groups to market your SaaS without guessing.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 font-semibold text-gray-900">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-600 transition-colors hover:text-gray-900"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-600 md:flex-row">
            <p>© 2026 CommunityFinder. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-900">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-900">
                Terms of Service
              </a>
              <a href="#" className="hover:text-gray-900">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
