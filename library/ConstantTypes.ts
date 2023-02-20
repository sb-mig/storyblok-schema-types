import {Spacing, OutputAxis, Fade, Transition} from './types';
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

interface Toggle<TValue extends string, TName extends string> {
  value: string,
  name: string,
  icon: string
}

export type BackpackCore<T extends string = string, U extends string = string> = {
  BackpackToggle: {
    Input: {
      type: 'custom';
      field_type: 'backpack-toggle';
      display_name?: string;
      options?: [Toggle<T, U>?, Toggle<T, U>?, Toggle<T, U>?, Toggle<T, U>?, Toggle<T, U>?, Toggle<T, U>?];
      default_value?: BackpackCore['BackpackToggle']['Output'];
    };
    Output: U;
  };
  BackpackFade: {
    Input: {
      type: 'custom';
      field_type: 'backpack-fade';
      display_name?: string;
      options?: any[];
      default_value?: BackpackCore['BackpackFade']['Output'];
    };
    Output: Fade;
  };
  BackpackTransition: {
    Input: {
      type: 'custom';
      field_type: 'backpack-transition';
      display_name?: string;
      options?: any[];
      default_value?: BackpackCore['BackpackTransition']['Output'];
    };
    Output: Transition;
  };
  BackpackSpacing: {
    Input: {
      type: 'custom';
      field_type: 'backpack-spacing';
      display_name?: string;
      options?: any[];
      default_value?: BackpackCore['BackpackSpacing']['Output'];
    };
    Output: Spacing;
  };
  BackpackPosition: {
    Input: {
      type: 'custom';
      field_type: 'backpack-layout';
      display_name?: string;
      default_value?: BackpackCore['BackpackPosition']['Output'];
    };
    Output: OutputAxis;
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
      default_value?: BackpackCore['BackpackColorPicker']['Output'];
    };
    Output: {
      selected: {
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
    Input: Omit<Core<T, U>['option']['Input'], 'default_value'>;
    Output: Core<T, U>['option']['Output'];
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
    Input: StoryblokBloksFieldType<T>
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