/*
*
* This is work in progress and doesnt work, maybe someday...
*
* */

export interface GenericReturnTypeMultilink {
    type: 'multilink';
    returnType: {
        id: string;
        url: string;
        email?: string;
        linktype: 'url' | 'story' | 'email';
        cached_url: string;
    };
}

export interface GenericReturnTypeNumber {
    type: 'number';
    returnType: string;
}

export interface GenericReturnTypeDatetime {
    type: 'datetime';
    returnType: string;
}

export interface GenericReturnTypeBoolean {
    type: 'boolean';
    returnType: boolean;
}

export interface GenericReturnTypeText {
    type: 'text';
    returnType: string;
}

export interface GenericReturnTypeTextarea {
    type: 'textarea';
    returnType: string;
}

export interface GenericReturnTypeOption {
    type: 'option';
    returnType: string;
}

export interface GenericReturnTypeOptions {
    type: 'options';
    returnType: string;
}

export interface GenericReturnTypeAsset {
    type: 'asset';
    returnType: {
        copyright?: string;
        source?: string;
        name?: string;
        title?: string;
        id?: number;
        is_external_url?: boolean;
        filename?: string;
        focus?: string;
        alt?: string;
    };
}

export interface GenericReturnTypeMultiasset {
    type: 'multiasset';
    returnType: {
        copyright?: string;
        source?: string;
        name?: string;
        title?: string;
        id?: number;
        is_external_url?: boolean;
        filename?: string;
        focus?: string;
        alt?: string;
    }[];
}

export interface GenericReturnTypeBloks {
    type: 'bloks';
    returnType: any[];
}

export interface GenericReturnTypeCustom {
    type: 'custom';
    plugin: 'backpack-fade';
    returnType: string;
}

export interface GenericReturnTypeMarkdown {
    type: 'markdown';
    returnType: string;
}

export interface GenericReturnTypeRichText {
    type: 'richtext';
    returnType: {
        content: any[];
        type: 'doc';
    };
}

export interface GenericReturnTypeTable {
    type: 'table';
    returnType: {
        fieldtype: 'table';
        tbody: {
            component: '_table_row';
            body: {
                component: '_table_col';
                value: string;
            }[];
        }[];
        thead: {
            component: '_table_head';
            value: string;
        }[];
    };
}

export interface AllStoryblokFieldsReturnTypes {
    multilink: GenericReturnTypeMultilink;
    number: GenericReturnTypeNumber;
    datetime: GenericReturnTypeDatetime;
    boolean: GenericReturnTypeBoolean;
    text: GenericReturnTypeText;
    textarea: GenericReturnTypeTextarea;
    option: GenericReturnTypeOption;
    options: GenericReturnTypeOptions;
    asset: GenericReturnTypeAsset;
    multiasset: GenericReturnTypeMultiasset;
    bloks: GenericReturnTypeBloks;
    custom: GenericReturnTypeCustom;
    markdown: GenericReturnTypeMarkdown;
    richtext: GenericReturnTypeRichText;
    table: GenericReturnTypeTable;
}