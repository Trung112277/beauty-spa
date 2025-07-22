export interface NavMenuItem {
    title: string;
    to: string;
    children?: NavMenuItem[];
  }