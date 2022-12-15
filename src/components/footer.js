import GithubLogo from "./icons/github-logo";

export default function Footer() {
  return (
    <div className="flex w-full justify-center p-6">
      <div className="flex max-w-3xl w-full justify-between items-center gap-2 text-xs text-slate-100 font-medium">
        <p className="">cpsc349 project 4 group 9.</p>

        <a
          href="https://github.com/mploythai/noots"
          target="_blank"
          rel="noopenner noreferrer"
        >
          <GithubLogo />
        </a>
      </div>
    </div>
  );
}
