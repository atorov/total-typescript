// const obj = {} as Record<string, number>;
// obj.a = 1;
// obj.b = 2;

// type test = Expect<Equal<typeof obj.a, number>>;

// const menuConfig: Record<
//   string,
//   | {
//       label: string;
//       link: string;
//     }
//   | {
//       label: string;
//       children: {
//         label: string;
//         link: string;
//       }[];
//     }
// > = {
//   home: {
//     label: "Home",
//     link: "/home",
//   },
//   services: {
//     label: "Services",
//     children: [
//       {
//         label: "Consulting",
//         link: "/services/consulting",
//       },
//       {
//         label: "Development",
//         link: "/services/development",
//       },
//     ],
//   },
// };
// type tests = [
//   Expect<Equal<typeof menuConfig.home.label, string>>,
//   Expect<
//     Equal<
//       typeof menuConfig.services.children,
// Property 'children' does not exist on type '{ label: string; link: string; } | { label: string; children: { label: string; link: string; }[]; }'.
//   Property 'children' does not exist on type '{ label: string; link: string; }'.
//       {
//         label: string;
//         link: string;
//       }[]
//     >
//   >,
// ];

// const element = document.getElementById("app") satisfies HTMLElement;
// Type 'HTMLElement | null' does not satisfy the expected type 'HTMLElement'.
//   Type 'null' is not assignable to type 'HTMLElement'.

// type test3 = Expect<Equal<typeof element, HTMLElement>>;
// Type 'false' does not satisfy the constraint 'true'.

const obj: Record<string, number> = {};
obj.a = 1;
obj.b = 2;

const menuConfig = {
    home: {
        label: 'Home',
        link: '/home',
    },
    services: {
        label: 'Services',
        children: [
            {
                label: 'Consulting',
                link: '/services/consulting',
            },
            {
                label: 'Development',
                link: '/services/development',
            },
        ],
    },
} satisfies Record<
    string,
    | {
          label: string;
          link: string;
      }
    | {
          label: string;
          children: {
              label: string;
              link: string;
          }[];
      }
>;

const element = document.getElementById('app') as HTMLElement;
