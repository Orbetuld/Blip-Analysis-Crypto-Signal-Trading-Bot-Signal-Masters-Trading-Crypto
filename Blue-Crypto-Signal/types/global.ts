import { ComponentWithAs, IconProps } from "@chakra-ui/react";

export interface ISignalGroup {
  name: string;
  avatar: string;
  groupType: string;
  minAllocation: number;
  maxAllocation: number;
  subscriptionType: string;
  revenue: {
    month: number;
  };
  totalMembers: number;
  connectionRequest: number;
  activeEmails: string[];
}

export interface IMenu {
  name: string;
  icon: ComponentWithAs<"svg", IconProps>;
  href: string;
  isAutoActive?: boolean;
}
