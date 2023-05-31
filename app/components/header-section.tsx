"use client";
import { cn } from "@/scripts/cn";

const HeaderSection: React.FunctionComponent<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
  return (
    <header className={cn("Header-section", className)} {...props}>
      <h1 className="leading-snug tracking-tight text-3xl font-medium truncate">Blogs website featuring GitHub-actions</h1>
      <p className="leadning-snug text-base font-normal text-slate-500 truncate">
        A simple blogs website using GitHub-actions to render content using pull-requests.
      </p>
      <div className="CurrentPage-contentWrapper my-6">
        <CurrentPageContent />
      </div>
    </header>
  )
};

const CurrentPageContent: React.FunctionComponent = () => {
  return (
    <p className="CurrentPage-content font-mono text-base text-slate-900">{`at page, /${window.location.pathname === "/" ? "" : window.location.pathname}`}</p>
  )
}

export default HeaderSection;