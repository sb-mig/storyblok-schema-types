import { Spacing, Axis } from './types';
import {
  StoryblokAssetFieldReturnType,
  StoryblokBloksFieldReturnType,
  StoryblokBooleanFieldReturnType,
  StoryblokCustomFieldReturnType,
  StoryblokDatetimeFieldReturnType,
  StoryblokMarkdownFieldReturnType,
  StoryblokMultiassetFieldReturnType,
  StoryblokMultilinkFieldReturnType,
  StoryblokNumberFieldReturnType,
  StoryblokOptionFieldReturnType,
  StoryblokOptionsFieldReturnType,
  StoryblokRichTextFieldReturnType,
  StoryblokTableFieldReturnType,
  StoryblokTextareaFieldReturnType,
  StoryblokTextFieldReturnType,
} from '../StoryblokReturnTypes';
import {
  StoryblokAssetFieldType,
  StoryblokBloksFieldType,
  StoryblokBooleanFieldType,
  StoryblokCustomFieldType, StoryblokDatetimeFieldType,
  StoryblokLinkFieldType, StoryblokMarkdownFieldType,
  StoryblokMultiAssetFieldType,
  StoryblokNumberFieldType,
  StoryblokOptionFieldType,
  StoryblokOptionsFieldType, StoryblokRichTextType,
  StoryblokSectionSchemaFieldGrouping, StoryblokTableFieldType,
  StoryblokTabSchemaFieldGrouping,
  StoryblokTextareaFieldType,
  StoryblokTextFieldType
} from "../StoryblokSchemaTypes";

export type BackpackCore = {
  BackpackSpacing: {
    Input: {
      type: 'custom';
      field_type: 'backpack-spacing';
      display_name?: string;
      options?: any[];
      default_value?: {
        color: {
          name: string,
          value: string
        }
      }
    };
    Output: Spacing;
  };
  BackpackPosition: {
    Input: {
      type: 'custom';
      field_type: 'backpack-layout';
      display_name?: string;
    };
    Output: Axis;
  };
  BackpackColorPicker: {
    Input: {
      type: 'custom';
      field_type: 'backpack-color-picker';
      display_name?: string;
      options: [
        {
          name: 'colors';
          value: 'colors';
        }
      ];
    };
    Output: {
      color: {
        name: string,
        value: string
      }
    };
  };
  BackpackNumber: {
    Input: Omit<Core['number']['Input'], 'default_value'>;
    Output: Core['number']['Output'];
  },
  BackpackOption: {
    Input: Omit<Core['option']['Input'], 'default_value'>;
    Output: Core['option']['Output'];
  }
  BackpackBoolean: {
    Input: Omit<Core['boolean']['Input'], 'default_value'>;
    Output: Core['boolean']['Output'];
  }
};

export type Core<T = string, U = string> = {
  text: {
    Input: StoryblokTextFieldType
    Output: StoryblokTextFieldReturnType
  };
  textarea: {
    Input: StoryblokTextareaFieldType
    Output: StoryblokTextareaFieldReturnType
  };
  boolean: {
    Input: StoryblokBooleanFieldType
    Output: StoryblokBooleanFieldReturnType;
  };
  number: {
    Input: StoryblokNumberFieldType;
    Output: StoryblokNumberFieldReturnType;
  };
  option: {
    Input: StoryblokOptionFieldType<T, U, U>;
    Output: StoryblokOptionFieldReturnType<U>;
  };
  options: {
    Input: StoryblokOptionsFieldType<T, U, U>;
    Output: StoryblokOptionsFieldReturnType<U>;
  };
  multilink: {
    Input: StoryblokLinkFieldType;
    Output: StoryblokMultilinkFieldReturnType;
  };
  asset: {
    Input: StoryblokAssetFieldType;
    Output: StoryblokAssetFieldReturnType;
  };
  multiasset: {
    Input: StoryblokMultiAssetFieldType;
    Output: StoryblokMultiassetFieldReturnType;
  };
  bloks: {
    Input: StoryblokBloksFieldType
    Output: StoryblokBloksFieldReturnType
  };
  custom: {
    Input: StoryblokCustomFieldType
    Output: StoryblokCustomFieldReturnType
  };
  richtext: {
    Input: StoryblokRichTextType
    Output: StoryblokRichTextFieldReturnType
  };
  markdown: {
    Input: StoryblokMarkdownFieldType
    Output: StoryblokMarkdownFieldReturnType
  };
  table: {
    Input: StoryblokTableFieldType
    Output: StoryblokTableFieldReturnType
  };
  datetime: {
    Input: StoryblokDatetimeFieldType
    Output: StoryblokDatetimeFieldReturnType
  };
  tab: {
    Input: StoryblokTabSchemaFieldGrouping;
  };
  section: {
    Input: StoryblokSectionSchemaFieldGrouping<T>;
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