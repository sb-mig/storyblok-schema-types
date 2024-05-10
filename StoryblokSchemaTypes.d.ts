export namespace DeliveryApi {
  export interface TextType {
    type: "text",
    display_name: string,
    required?: boolean,
    translatable?: boolean,
    no_translate?: boolean,
    description?: string,
    default_value?: string,
    max_length?: number
  }
  interface LinkType {
    id: string;
    url: string;
    linktype: 'url' | 'story';
    fieldtype: 'multilink';
    cached_url: string;
    target?: "_blank";
  }

  interface AssetType {
    copyright?: string;
    source?: string;
    fieldtype: 'asset',
    name: string;
    title: string;
    id: number;
    is_external_url: boolean;
    filename: string;
    focus: string;
    alt: string;
  }
}


interface StoryblokKeyValueOption<TOptionsName = string, TOptionsValue = string> {
  name: TOptionsName;
  value: TOptionsValue;
}

export type ValidationRule = 'not_equals' | 'empty' | 'not_empty' | 'equals' | 'gt' | 'lt'

export interface RuleCondition {
  validated_object: {
    type: "field"
    field_key: string
    field_attr: string
  },
  validation: ValidationRule,
  value: any
}

export interface Modification {
  display?: "hide",
  required?: boolean
}

export interface ConditionalSettings {
  rule_conditions: RuleCondition[]
  rule_match: "any" | "all",
  modifications: Modification[],
}

export interface StoryblokGenericFieldType {
  display_name?: string;
  required?: boolean;
  translatable?: boolean;
  description?: string;
  pos?: number;
  conditional_settings?: ConditionalSettings[];
}

export interface StoryblokBloksFieldType<TComponents = string> extends StoryblokGenericFieldType {
  type: 'bloks';
  default_value?: string;
  maximum?: number;
  restrict_type?: 'groups' | ''; // if we restrict components, than its '' ...
  restrict_components? : boolean;
  component_whitelist?: TComponents[] | string[]; // component names
  component_group_whitelist?: string[]; // group uuids
}

export interface StoryblokCustomFieldType<TOptionsName = string, TOptionsValue = string, TReturnValue = any>
    extends StoryblokGenericFieldType, StoryblokOption<TOptionsName, TOptionsValue> {
  type: 'custom';
  field_type: string;
  options?: StoryblokKeyValueOption<TOptionsName, TOptionsValue>[];
  default_value?: TReturnValue;
  source?: 'internal' | 'internal_stories' | 'external' | 'internal_languages';
  datasource_slug?: string; // or some custom Union of known datasources from the space
  folder_slug?: string, // just slug / path to stories we would like to get, example /my-stories
  filter_content_type?: string[] // array of content types - it can come from sb components that are not nestable, example: [ "page" ]
  external_datasource?: string // url to external json, example: https://ef.design/datasource.json
}

export interface StoryblokCustomFieldTypeV2<TDefaultValue = any, TOptions = StoryblokKeyValueOption<string, string>[]>
    extends StoryblokGenericFieldType {
  type: 'custom';
  field_type: string;
  options?: TOptions;
  default_value?: TDefaultValue;
  source?: 'internal' | 'internal_stories' | 'external' | 'internal_languages';
  datasource_slug?: string; // or some custom Union of known datasources from the space
  folder_slug?: string, // just slug / path to stories we would like to get, example /my-stories
  filter_content_type?: string[] // array of content types - it can come from sb components that are not nestable, example: [ "page" ]
  external_datasource?: string // url to external json, example: https://ef.design/datasource.json
}


export interface StoryblokLinkFieldType extends StoryblokGenericFieldType {
  type: 'multilink';
  email_link_type?: boolean;
  asset_link_type?: boolean;
  allow_target_blank?: boolean;
  show_anchor?: boolean;
  restrict_content_types?: boolean;
  component_whitelist?: string[];
  force_link_scope?: boolean;
  link_scope?: string;
}

export interface StoryblokSectionSchemaFieldGrouping<TKeys = string> extends Omit<StoryblokGenericFieldType, 'translatable' | 'description' | 'required'> {
  type: 'section';
  keys: TKeys[]
}

export interface StoryblokTabSchemaFieldGrouping<TKeys = string> extends Omit<StoryblokGenericFieldType, 'translatable' | 'description' | 'required'> {
  type: 'tab';
  keys: TKeys[]
}

export interface StoryblokOptionsFieldType<TOptionsName = string, TOptionsValue = string, TDefaultValue = string>
    extends StoryblokGenericFieldType {
  type: 'options';
  options?: StoryblokKeyValueOption<TOptionsName, TOptionsValue>[];
  min_options?: string;
  max_options?: string;
  default_value?: TDefaultValue[];
  exclude_empty_option?: boolean;
  use_uuid?: boolean
  source?: 'internal' | 'internal_stories' | 'external' | 'internal_languages';
  datasource_slug?: string; // or some custom Union of known datasources from the space
  folder_slug?: string, // just slug / path to stories we would like to get, example /my-stories
  filter_content_type?: string[] // array of content types - it can come from sb components that are not nestable, example: [ "page" ]
  external_datasource?: string // url to external json, example: https://ef.design/datasource.json
}

export interface StoryblokOption<TOptionsName = string, TOptionsValue = string> {
  options?: StoryblokKeyValueOption<TOptionsName, TOptionsValue>[];
  source?: 'internal' | 'internal_stories' | 'external' | 'internal_languages';
  datasource_slug?: string; // or some custom Union of known datasources from the space
  folder_slug?: string, // just slug / path to stories we would like to get, example /my-stories
  filter_content_type?: string[] // array of content types - it can come from sb components that are not nestable, example: [ "page" ]
  external_datasource?: string // url to external json, example: https://ef.design/datasource.json
}

export type StoryblokOptionBPFieldType<TOptionsName = string, TOptionsValue = string> = StoryblokOptionFieldType<TOptionsName, TOptionsValue, BPDefaultValues<TOptionsValue>>


export interface StoryblokOptionFieldTypeV3<TOptions extends any, TDefaultValue = string>
    extends StoryblokGenericFieldType {
  type: 'option';
  options?: TOptions;
  exclude_empty_option?: boolean;
  use_uuid?: boolean;
  default_value?: TDefaultValue;
  source?: 'internal' | 'internal_stories' | 'external' | 'internal_languages';
  datasource_slug?: string; // or some custom Union of known datasources from the space
  folder_slug?: string, // just slug / path to stories we would like to get, example /my-stories
  filter_content_type?: string[] // array of content types - it can come from sb components that are not nestable, example: [ "page" ]
  external_datasource?: string // url to external json, example: https://ef.design/datasource.json
}

export interface StoryblokOptionFieldType<TOptionsName = string, TOptionsValue = string, TDefaultValue = string>
    extends StoryblokGenericFieldType {
  type: 'option';
  options?: StoryblokKeyValueOption<TOptionsName, TOptionsValue>[];
  exclude_empty_option?: boolean;
  use_uuid?: boolean;
  default_value?: TDefaultValue;
  source?: 'internal' | 'internal_stories' | 'external' | 'internal_languages';
  datasource_slug?: string; // or some custom Union of known datasources from the space
  folder_slug?: string, // just slug / path to stories we would like to get, example /my-stories
  filter_content_type?: string[] // array of content types - it can come from sb components that are not nestable, example: [ "page" ]
  external_datasource?: string // url to external json, example: https://ef.design/datasource.json
}

export interface StoryblokOptionFieldTypeV2<TDefaultValue = any, TOptions = StoryblokKeyValueOption<string, string>[]> extends StoryblokGenericFieldType {
  type: 'option';
  options: TOptions
  exclude_empty_option?: boolean;
  use_uuid?: boolean;
  default_value?: TDefaultValue;
}

export type FileTypes = 'images' | 'videos' | 'audios' | 'texts'

export interface StoryblokAssetFieldType extends StoryblokGenericFieldType {
  type: 'asset';
  filetypes?: FileTypes[] // empty array means - every filetype
  allow_external_url?: boolean
  asset_folder_id?: number // id of the default folder for assets field type
}

export interface StoryblokMultiAssetFieldType extends StoryblokGenericFieldType {
  type: 'multiasset';
  filetypes: FileTypes[] // empty array means - every filetype
  allow_external_url?: boolean
  asset_folder_id: number // id of the default folder for assets field type
}

export interface StoryblokTextFieldType extends StoryblokGenericFieldType {
  type: 'text';
  default_value?: string;
  no_translate?: boolean;
  max_length?: number;
  regex?: string;
  rtl?: boolean;
}

export interface StoryblokTextareaFieldType extends StoryblokGenericFieldType {
  type: 'textarea';
  rtl?: boolean;
  max_length?: number;
  default_value?: string;
}
type CommonToolbarList =
    "h1" |
    "h2" |
    "h3" |
    "h4" |
    "h5" |
    "h6" |
    "bold" |
    "italic" |
    "inlinecode" |
    "code" |
    "paragraph" |
    "list" |
    "quote" |
    "olist" |
    "link" |
    "image" |
    "sub" |
    "sup" |
    "emoji"

export type Headings =
    "h1" |
    "h2" |
    "h3" |
    "h4" |
    "h5" |
    "h6" |
    "span" |
    "p";



export type RichTextToolbarList =  CommonToolbarList | "paste" | "blok" | "underline" | "strike"

export interface StoryblokRichTextType extends StoryblokGenericFieldType {
  type: 'richtext';
  max_length?: number;
  style_options?: StoryblokKeyValueOption[];
  customize_toolbar?: boolean;
  toolbar?: RichTextToolbarList[];
  restrict_type?: "groups" | "";
  restrict_components?: boolean;
  component_group_whitelist?: string[];
  component_whitelist?: string[];
  allow_target_blank?: boolean;
}

export interface StoryblokTableFieldType extends StoryblokGenericFieldType {
  type: 'table';
}

export type MarkdownToolbarList = CommonToolbarList | "help" |  "toggle-richtext";

export interface StoryblokMarkdownFieldType extends StoryblokGenericFieldType {
  type: 'markdown';
  rich_markdown?: boolean;
  rtl?: boolean;
  allow_multiline?: boolean;
  customize_toolbar?: boolean;
  toolbar?: MarkdownToolbarList[];
  max_length?: number;
  default_value?: string
}


export interface StoryblokBooleanFieldType<TDefaultValue = boolean> extends StoryblokGenericFieldType {
  type: 'boolean';
  default_value?: TDefaultValue;
}

interface BPDefaultValues<TDefaultValue = any> {
  s?: TDefaultValue
  m?: TDefaultValue
  l?: TDefaultValue
  xl?: TDefaultValue
  xxl?: TDefaultValue
}

export type StoryblokBooleanBPFieldType = StoryblokBooleanFieldType<BPDefaultValues<boolean>>

export interface StoryblokNumberFieldType<TDefaultValue = string> extends StoryblokGenericFieldType {
  type: 'number';
  no_translate?: boolean;
  default_value?: TDefaultValue;
  min_value?: number;
  max_value?: number;
  decimals?: number;
  steps?: number;
}

export interface StoryblokDatetimeFieldType extends StoryblokGenericFieldType {
  type: 'datetime';
  disable_time?: boolean;
  default_value?: string
}

export interface StoryblokComponentSchema {
  [field: string]:
      StoryblokTextFieldType |
      StoryblokBooleanFieldType |
      StoryblokBloksFieldType |
      StoryblokMarkdownFieldType |
      StoryblokLinkFieldType |
      StoryblokCustomFieldType |
      StoryblokOptionsFieldType |
      StoryblokSectionSchemaFieldGrouping |
      StoryblokTabSchemaFieldGrouping |
      StoryblokTableFieldType |
      StoryblokDatetimeFieldType |
      StoryblokOptionFieldType |
      StoryblokMultiAssetFieldType |
      StoryblokAssetFieldType |
      StoryblokNumberFieldType |
      StoryblokRichTextType |
      StoryblokTextareaFieldType;
}

export type ComponentPreviewIcon = "block-@" |
  "block-1-2block" |
  "block-add" |
  "block-arrow-pointer" |
  "block-block" |
  "block-buildin" |
  "block-center-m" |
  "block-comment" |
  "block-doc" |
  "block-dollar-sign" |
  "block-email" |
  "block-image" |
  "block-keyboard" |
  "block-locked" |
  "block-map-pin" |
  "block-mobile" |
  "block-monitor" |
  "block-paycard" |
  "block-resize-fc" |
  "block-cart" |
  "block-share" |
  "block-shield-2" |
  "block-shield" |
  "block-sticker" |
  "block-suitcase" |
  "block-table-2" |
  "block-table" |
  "block-tag" |
  "block-text-c" |
  "block-text-img-c" |
  "block-text-img-l" |
  "block-text-img-r-l" |
  "block-text-img-r" |
  "block-text-img-t-l" |
  "block-text-img-t-r" |
  "block-text-l" |
  "block-text-r" |
  "block-unlocked" |
  "block-wallet"

export interface Preset {
  preset: {
    name: string
    preset: any
    created_at?: string
    updated_at?: string
    image?: string
    color?: string
    icon?: ComponentPreviewIcon
    description?: string
  }
}

export interface StoryblokComponentSchemaBase<TSchema = StoryblokComponentSchema> {
  name: string;
  display_name?: string;
  component_group_name?: string;
  is_root: boolean;
  is_nestable: boolean;
  /*
  * any string to jpg/png available publicly on the internet
  * */
  image?: string;
  /*
  * stringified html / squirell template "<div>{{test_text}}</div>\n<div>whatever</div>",
  *
  * https://squirrelly.js.org/
  * https://www.storyblok.com/docs/schema-configuration#preview-template
  * */
  preview_field?: any;
  preview_tmpl?: string;
  preset_id?: any;
  real_name?: string;
  component_group_uuid?: any;
  /*
  * any color string
  * */
  color?: string;
  icon?: ComponentPreviewIcon
  schema: TSchema;
  all_presets?: Preset[]
}

interface Dimension {
  name: string
  entry_value: string
}

interface DatasourceEntry {
  name: string
  value: string
  dimension_values?: {
    [index: string]: string,
  }
}
export interface StoryblokDatasourceSchemaBase {
  name: string;
  slug: string;
  dimensions: Dimension[]
  datasource_entries: DatasourceEntry[]
}

export interface StoryblokRolesSchemaBase {
  resolved_allowed_paths?: string[],
  allowed_paths?: string[],
  field_permissions?: string[],
  permissions?: string[],
  role: string,
  subtitle?: string | null,
  datasource_ids?: any[],
  component_ids?: any[],
  branch_ids?: any[],
  allowed_languages?: any[],
  asset_folder_ids?: any[],
  ext_id?: any | null,
}
