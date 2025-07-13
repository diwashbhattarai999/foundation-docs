import {
  IconApi,
  IconBrandCss3,
  IconBrandDocker,
  IconBrandFigma,
  IconBrandGit,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandNpm,
  IconBrandPnpm,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVscode,
  IconCloud,
  IconDatabase,
  IconServer,
} from "@tabler/icons-react";

const iconColumns = [
  // Column 1 - Frontend Technologies
  {
    id: 1,
    items: [
      { icon: IconBrandReact, color: "text-blue-500" },
      { icon: IconBrandHtml5, color: "text-orange-500" },
      { icon: IconBrandCss3, color: "text-blue-600" },
      { icon: IconBrandJavascript, color: "text-yellow-500" },
    ],
  },
  // Column 2 - Frontend Frameworks & Tools
  {
    id: 2,
    items: [
      { icon: IconBrandNextjs, color: "text-gray-800 dark:text-white" },
      { icon: IconBrandTypescript, color: "text-blue-600" },
      { icon: IconBrandTailwind, color: "text-cyan-500" },
      { icon: IconBrandVscode, color: "text-blue-500" },
    ],
  },
  // Column 3 - Backend & Runtime
  {
    id: 3,
    items: [
      { icon: IconBrandNodejs, color: "text-green-600" },
      { icon: IconServer, color: "text-gray-600" },
      { icon: IconApi, color: "text-purple-500" },
      { icon: IconCloud, color: "text-blue-400" },
    ],
  },
  // Column 4 - Database & DevOps
  {
    id: 4,
    items: [
      { icon: IconDatabase, color: "text-blue-700" },
      { icon: IconBrandMongodb, color: "text-green-500" },
      { icon: IconBrandDocker, color: "text-blue-500" },
      { icon: IconBrandGit, color: "text-orange-600" },
    ],
  },
  // Column 5 - Package Managers & Version Control
  {
    id: 5,
    items: [
      { icon: IconBrandGithub, color: "text-gray-800 dark:text-white" },
      { icon: IconBrandNpm, color: "text-red-500" },
      { icon: IconBrandPnpm, color: "text-orange-500" },
      { icon: IconBrandFigma, color: "text-purple-500" },
    ],
  },
  // Column 6 - Additional Dev Tools
  {
    id: 6,
    items: [
      { icon: IconBrandReact, color: "text-blue-500" },
      { icon: IconBrandTypescript, color: "text-blue-600" },
      { icon: IconBrandNodejs, color: "text-green-600" },
      { icon: IconBrandGithub, color: "text-gray-800 dark:text-white" },
    ],
  },
];

export default function AnimatedIcons() {
  return (
    <div className="relative h-96 w-full overflow-hidden">
      {/* Scrolling icons */}
      <div className="flex justify-center gap-8 h-full">
        {iconColumns.map(({ id, items }, columnIndex) => {
          const isUpward = columnIndex % 2 === 0;
          const animationName = isUpward ? "scroll-up" : "scroll-down";
          const animationDuration = `${6 + columnIndex * 0.5}s`;
          const animationDelay = `${columnIndex * 0.3}s`;

          // Repeat items for infinite scroll
          const repeatedIcons = [...items, ...items, ...items, ...items];

          return (
            <div key={id} className="relative w-20 h-full overflow-hidden">
              <div
                className="absolute flex flex-col gap-3 sm:gap-6"
                style={{
                  animation: `${animationName} ${animationDuration} linear infinite`,
                  animationDelay: animationDelay,
                }}
              >
                {repeatedIcons.map((item, itemIndex) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={`${id}-${item.icon.name}-${itemIndex}`}
                      className="bg-fd-foreground/5 border rounded-2xl p-2 sm:p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 group flex-shrink-0"
                    >
                      <IconComponent
                        size={24}
                        className={`${item.color} group-hover:scale-110 transition-transform duration-300`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating background dots */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={`floating-dot-${
              // biome-ignore lint/suspicious/noArrayIndexKey: Ignore
              index
            }`}
            className="absolute w-1 h-1 bg-fd-foreground rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 2}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
