export interface StoryblokMultilinkFieldReturnType {
  id: string;
  url: string;
  fieldtype: "multilink";
  email?: string;
  linktype: "url" | "story" | "email";
  cached_url: string;
  target?: "_blank";
  anchor?: string;
}
export type StoryblokNumberFieldReturnType = number;
export type StoryblokDatetimeFieldReturnType = string;
export type StoryblokBooleanFieldReturnType = boolean;
export type StoryblokTextFieldReturnType = string;
export type StoryblokTextareaFieldReturnType = string;
export type StoryblokOptionFieldReturnType<TValues = string> = TValues;
export type StoryblokOptionsFieldReturnType<TValues = string> = TValues[];
export interface StoryblokAssetFieldReturnType {
  copyright?: string;
  source?: string;
  fieldtype: "asset";
  name: string;
  title: string;
  id: number;
  is_external_url: boolean;
  filename: string;
  focus: string;
  alt: string;
}
export type StoryblokMultiassetFieldReturnType =
  StoryblokAssetFieldReturnType[];
export type StoryblokBloksFieldReturnType<TBlokItem = any> = TBlokItem[];
export type StoryblokCustomFieldReturnType<TCustomPluginReturn = any> =
  TCustomPluginReturn;
export type StoryblokMarkdownFieldReturnType = string;
export interface StoryblokRichTextFieldReturnType {
  content: any[];
  type: "doc";
}
export interface StoryblokTableFieldReturnType {
  fieldtype: "table";
  tbody: {
    component: "_table_row";
    body: {
      component: "_table_col";
      value: string;
    }[];
  }[];
  thead: {
    component: "_table_head";
    value: string;
  }[];
}
