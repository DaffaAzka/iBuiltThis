import { Button } from "@/components/ui/button";
import { Badge } from "../badge";
import { ArrowRightIcon, Sparkle } from "lucide-react";
import Link from "next/link";

function LiveBadge() {
  return (
    <>
      <Badge variant={"outline"} className="px-4 py-2 text-sm backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        <span className="text-muted-foreground">
          {" "}
          Join thousands of creators sharing their work
        </span>
      </Badge>
    </>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-background via-background to-muted/20">
      <div className="wrapper">
        <div className="flex flex-col justify-center items-center py-12 text-center gap-6">
          <LiveBadge></LiveBadge>
          <h1 className="text-5xl font-bold tracking-tight mb-6 max-w-5xl">
            Share What You&apos;ve Built, Discover What&apos;s Launching
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            A community platform for creators to showcase their apps, AI tools,
            SaaS products, and creative projects. Authentic launches, real
            builders, genuine feedback.
          </p>

          <div className="flex flex-row gap-4 mb-16">
            <Button asChild size={"lg"} className="text-base px-8 shadow-lg">
              <Link href={"/"}>
                {" "}
                <Sparkle className="size-5" /> Share your project
              </Link>
            </Button>
            <Button
              asChild
              size={"lg"}
              className="text-base px-8 shadow-lg"
              variant={"secondary"}>
              <Link href={"/"}>
                Explore project <ArrowRightIcon className="size-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
