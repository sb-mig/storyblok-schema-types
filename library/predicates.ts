export type BackpackBreakpointsPredicate = {
  Input: {
    type: 'custom';
    field_type: 'backpack-breakpoints';
  };
  Output: any;
};

export type GeneralNestedPredicate = Record<string, {
  Input: {
    type: string,
    field_type?: string
  },
  Output: any;
}>


export type GeneralSchemaPredicate = {
  Input: {
    type: string,
  },
  Output: any;
}
