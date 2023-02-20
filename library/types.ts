import {Mapped} from "./utils";



type TransitionTimingFunction = 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear';
type TransitionProperty = 'opacity';
type TransitionEffect = 'fade';

export type Fade = {
  plugin?: "backpack-fade",
  title?: "backpack-fade",
  description?: string,
  data: {
    classNames?: {
      before?: "beforeFade",
      after?: "afterFade"
    },
    transitionConfig?: {
      duration?: number,
      transitionProperty?: TransitionProperty,
      transitionTimingFunction?: TransitionTimingFunction,
      delay?: number
    },
    config?: {
      triggerOnce?: boolean,
      threshold?: number
    },
    effect?: TransitionEffect,
    enabled?: boolean,
  }
}


export type Breakpoints = 's' | 'm' | 'l' | 'xl' | 'xxl';
export type Size = '-' | '0' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';
export type Side = 'pt' | 'pb' | 'mt' | 'mb';
export type Spacing = {
  [key in Side]?: Size;
};
export type Col =
  | 'bounds'
  | 'offset'
  | 'main'
  | 'col-1'
  | 'col-2'
  | 'col-3'
  | 'col-4'
  | 'col-5'
  | 'col-6'
  | 'col-7'
  | 'col-8'
  | 'col-9'
  | 'col-10'
  | 'col-11'
  | 'col-12';

export type Edge = '' | '-start' | '-end';

export type RowNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type Row = `row-${RowNumber}`;


type MAX_COLS = 17
export interface OutputAxis {
  x?: [Mapped<MAX_COLS>[number], Mapped<MAX_COLS>[number]];
  active?: boolean;
}
