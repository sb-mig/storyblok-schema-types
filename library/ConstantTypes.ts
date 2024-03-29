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