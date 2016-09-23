export class Villain {
  id: number;
  name: string;
  type : VillainType;
}

export enum VillainType {
    Giant,
    Warlock,
    DarkNight,
    DarkElf,
    Dendroid,
    Succubus
}