// export const programModes = [
//     'group',
//     'announcement',
//     '1on1',
//     'selfDirected',
//     'planned1on1',
//     'plannedSelfDirected',
// ] as const;

// type AllPrograms = unknown;

// type test = Expect<
//     Equal<
//         AllPrograms,
//         | 'group'
//         | 'announcement'
//         | '1on1'
//         | 'selfDirected'
//         | 'planned1on1'
//         | 'plannedSelfDirected'
//     >
// >;

const programModes = [
    'group',
    'announcement',
    '1on1',
    'selfDirected',
    'planned1on1',
    'plannedSelfDirected',
] as const;

type AllPrograms = (typeof programModes)[number];