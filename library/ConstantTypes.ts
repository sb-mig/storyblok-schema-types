import {Spacing, OutputAxis, Fade, Transition, Theme, BackpackPositionAlignOutput} from './types';
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
  StoryblokOptionFieldType, StoryblokOptionFieldTypeV3,
  StoryblokOptionsFieldType, StoryblokRichTextType,
  StoryblokSectionSchemaFieldGrouping, StoryblokTableFieldType,
  StoryblokTabSchemaFieldGrouping,
  StoryblokTextareaFieldType,
  StoryblokTextFieldType
} from "../StoryblokSchemaTypes";

interface Toggle<TValue extends any, TName extends string> {
  value: TValue
  name: TName
  icon: string
  tooltip_text?: string
}


export type BackpackCore<T extends any = any, U extends string = string> = {
  BackpackToggle: {
    Input: {
      type: 'custom';
      field_type: 'backpack-toggle';
      display_name?: string;
      options?: [Toggle<T, U>?, Toggle<T, U>?, Toggle<T, U>?, Toggle<T, U>?, Toggle<T, U>?, Toggle<T, U>?];
      default_value?: BackpackCore<T, U>['BackpackToggle']['Output'];
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
  BackpackTheme: {
    Input: {
      type: 'custom';
      field_type: 'backpack-theme';
      display_name?: string;
      options?: any[];
      default_value?: BackpackCore['BackpackTheme']['Output'];
    };
    Output: Theme;
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
  BackpackPositionAlign: {
    Input: {
      type: 'custom';
      field_type: 'backpack-position-align';
      display_name?: string;
      default_value?: BackpackCore['BackpackPositionAlign']['Output'];
    };
    Output: BackpackPositionAlignOutput;
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
  BackpackText: {
    Input: Omit<Core['text']['Input'], 'default_value'>;
    Output: Core['text']['Output'];
  },
  BackpackOption: {
    Input: Omit<Core<T, U>['option']['Input'], 'default_value'>;
    Output: Core<T, U>['option']['Output'];
  },
  BackpackOptionBreakpoints: {
    Input: Omit<StoryblokOptionFieldTypeV3<T, U>, 'default_value'>;
    Output: Core<T, U>['option']['Output'];
  },
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