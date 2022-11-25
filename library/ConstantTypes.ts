import { Spacing, Axis } from './types';
import {
  StoryblokBooleanFieldReturnType,
  StoryblokNumberFieldReturnType,
  StoryblokTextFieldReturnType,
} from '../StoryblokReturnTypes';

export type BackpackCore = {
  BackpackSpacing: {
    Input: {
      type: 'custom';
      field_type: 'backpack-spacing';
    };
    Output: Spacing;
  };
  BackpackPosition: {
    Input: {
      type: 'custom';
      field_type: 'backpack-position';
    };
    Output: Axis;
  };
  BackpackColorPicker: {
    Input: {
      type: 'custom';
      field_type: 'backpack-color-picker';
    };
    Output: string;
  };
};

export type Core<T = string> = {
  text: {
    Input: {
      type: 'text';
      display_name?: string;
      description?: string;
      required?: boolean;
      translatable?: boolean;
    };
    Output: StoryblokTextFieldReturnType;
  };
  boolean: {
    Input: {
      type: 'boolean';
      default_value: boolean;
    };
    Output: StoryblokBooleanFieldReturnType;
  };
  tab: {
    Input: {
      type: 'tab';
      display_name?: string;
      keys: T[]
    };
  };
  number: {
    Input: {
      type: 'number';
      default_value: string;
    };
    Output: StoryblokNumberFieldReturnType;
  };
};

export type WithBackpack<TNestedSchema extends { Input: any; Output: any }> = {
  Input: {
    type: 'custom';
    field_type: 'backpack-breakpoints';
    display_name?: string
    options: {name: keyof TNestedSchema['Input'], value: string}[]
  };
  Output: TNestedSchema['Output'];
};


export type CorePredicates = {
  tab: {
    Input: {
      type: 'tab';
    };
  }
}