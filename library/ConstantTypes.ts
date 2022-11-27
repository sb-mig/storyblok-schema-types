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
    Output: string;
  };
};

export type Core<T = string> = {
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
    Input: StoryblokOptionFieldType;
    Output: StoryblokOptionFieldReturnType;
  };
  options: {
    Input: StoryblokOptionsFieldType;
    Output: StoryblokOptionsFieldReturnType;
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