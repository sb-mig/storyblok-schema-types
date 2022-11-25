export type BackpackInputOutputPredicate = {
  Input: {
    type: 'custom';
    field_type: 'backpack-breakpoints';
  };
  Output: any;
};

export type GeneralNestedPredicate = Record<string, {
  Input: {
    type: 'custom',
    field_type: string
  },
  Output: any;
}>
