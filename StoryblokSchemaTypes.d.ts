export namespace DeliveryApi {
  interface LinkType {
    id: string;
    url: string;
    linktype: 'url' | 'story';
    fieldtype: 'multilink';
    cached_url: string;
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

interface StoryblokKeyValueOption<TOption = string> {
  value: TOption;
  name: TOption;
}

export interface StoryblokGenericFieldType {
  display_name?: string;
  required?: boolean;
  translatable?: boolean;
  description?: string;
  pos?: number;
}

export interface StoryblokBloksFieldType<TComponents = string> extends StoryblokGenericFieldType {
  type: 'bloks';
  default_value?: string;
  maximum?: number;
  restrict_type?: 'groups' | ''; // if we restrict components, than its '' ...
  restrict_components? : boolean;
  component_whitelist?: TComponents[]; // component names
  component_group_whitelist?: string[]; // group uuids
}

export interface StoryblokCustomFieldType extends StoryblokGenericFieldType {
  type: 'custom';
  field_type: 'ef-color-picker' | 'section-padding-plugin';
  options?: StoryblokKeyValueOption<Headings>[];
  default_value?: string;
}

export interface StoryblokLinkFieldType extends StoryblokGenericFieldType {
  type: 'multilink';
  email_link_type?: boolean;
  asset_link_type?: boolean;
  show_anchor?: boolean;
  restrict_content_types?: boolean;
  component_whitelist?: string[];
  force_link_scope?: boolean;
  link_scope?: string;
}

export interface StoryblokSectionSchemaFieldGrouping extends Omit<StoryblokGenericFieldType, 'translatable' | 'description' | 'required'> {
  type: 'section';
  keys: string[]
}

export interface StoryblokTabSchemaFieldGrouping extends Omit<StoryblokGenericFieldType, 'translatable' | 'description' | 'required'> {
  type: 'tab';
  keys: string[]
}

export interface StoryblokOptionsFieldType<TOptions = string> extends StoryblokGenericFieldType {
  type: 'options';
  options?: StoryblokKeyValueOption<TOptions>[];
  min_options?: string;
  max_options?: string;
  source?: 'internal_languages' | 'internal_stories' | 'external' | 'internal' | '';
  datasource_slug?: string;
  external_datasource?: string;
  folder_slug?: string;
  filter_content_type?: string[];
  default_value?: StoryblokKeyValueOption<TOptions>;
  exclude_empty_option?: boolean;
  use_uuid?: boolean
}

export interface StoryblokOptionFieldType<TOptions = string> extends StoryblokGenericFieldType {
  type: 'option';
  options: StoryblokKeyValueOption<TOptions>[];
  source?: 'internal_languages' | 'internal_stories' | 'external' | 'internal' | '';
  datasource_slug?: string;
  external_datasource?: string;
  folder_slug?: string;
  filter_content_type?: string[];
  default_value?: StoryblokKeyValueOption<TOptions> | string;
  exclude_empty_option?: boolean;
  use_uuid?: boolean
}


export type FileTypes = 'images' | 'videos' | 'audios' | 'texts'

export interface StoryblokAssetFieldType extends StoryblokGenericFieldType {
  type: 'asset';
  filetypes: FileTypes[] // empty array means - every filetype
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
  "hrule";

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
  component_group_whitelist?: string[]
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

export interface StoryblokBooleanFieldType extends StoryblokGenericFieldType {
  type: 'boolean';
}

export interface StoryblokNumberFieldType extends StoryblokGenericFieldType {
  type: 'number';
  no_translate?: boolean;
  default_value?: number;
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

export interface StoryblokComponentSchema { // this is all
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

export interface StoryblokComponentSchemaBase<TSchema = StoryblokComponentSchema> {
  name: string;
  description?: string;
  display_name?: string;
  component_group_name?: string;
  is_root: boolean;
  is_nestable: boolean;
  schema: TSchema;
  image?: any;
  preview_field?: any;
  preview_tmpl?: any;
  all_presets?: any[];
  preset_id?: any;
  real_name?: string;
  component_group_uuid?: any;
  color?: any;
  icon?: any
}
