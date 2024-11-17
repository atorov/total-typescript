// const logId = (obj: { id: string }) => {
//     console.log(obj.id);
// };

// const logName = (obj: { name: string }) => {
//     console.log(obj.name);
// };

// const loggers = [logId, logName];

// const logAll = (obj) => {
// Parameter 'obj' implicitly has an 'any' type.
//   // red squiggly line under obj
//   loggers.forEach((func) => func(obj));
// };

const logId = (obj: { id: string }) => {
    console.log(obj.id);
};

const logName = (obj: { name: string }) => {
    console.log(obj.name);
};

const loggers = [logId, logName];

const logAll1 = (obj: { id: string; name: string }) => {
    loggers.forEach((func) => func(obj));
};

const logAll2 = (obj: { id: string } & { name: string }) => {
    loggers.forEach((func) => func(obj));
};

const logAll3 = (
    obj: Parameters<typeof logId>[0] & Parameters<typeof logName>[0]
) => {
    loggers.forEach((func) => func(obj));
};
