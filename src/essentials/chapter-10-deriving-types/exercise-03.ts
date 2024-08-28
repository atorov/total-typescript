// export const programModeEnumMap = {
//     GROUP: 'group',
//     ANNOUNCEMENT: 'announcement',
//     ONE_ON_ONE: '1on1',
//     SELF_DIRECTED: 'selfDirected',
//     PLANNED_ONE_ON_ONE: 'planned1on1',
//     PLANNED_SELF_DIRECTED: 'plannedSelfDirected',
// } as const;

// type ProgramModeMap = typeof programModeEnumMap;

// type Group = unknown;

// type test = Expect<Equal<Group, "group">>;
// Type 'false' does not satisfy the constraint 'true'.

export const programModeEnumMap = {
    GROUP: 'group',
    ANNOUNCEMENT: 'announcement',
    ONE_ON_ONE: '1on1',
    SELF_DIRECTED: 'selfDirected',
    PLANNED_ONE_ON_ONE: 'planned1on1',
    PLANNED_SELF_DIRECTED: 'plannedSelfDirected',
} as const;

type ProgramModeMap = typeof programModeEnumMap;

type Group = ProgramModeMap['GROUP'];
