import { ComponentType } from 'react';

export interface RouteConfig {
  path: string;
  component: ComponentType;
}

export interface RoutesConfig {
  public: RouteConfig[];
  auth: RouteConfig[];
  protected: RouteConfig[];
} 