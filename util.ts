type CheckClassNameType = { check: any; className: string };
type ClassNameType = String | CheckClassNameType;

export const cslsa = (cslsa: ClassNameType[]) => {
  return cslsa
    .reduce<string[]>((cnts, cnt) => {
      if (typeof cnt === "object" && (cnt as CheckClassNameType).check) {
        return [...cnts, (cnt as CheckClassNameType).className];
      } else if (typeof cnt === "string") {
        return [...cnts, cnt];
      }
      return cnts;
    }, [])
    .join(" ");
};