export interface ReturnTypeMultilink {
    type: 'multilink';
    returnType: {
        id: string;
        url: string;
        linktype: 'url' | 'story';
        cached_url: string;
    };
}

export interface ReturnTypeNumber {
    type: 'number';
    returnType: string;
}

export interface ReturnTypeDatetime {
    type: 'datetime';
    returnType: string;
}

export interface ReturnTypeBoolean {
    type: 'boolean';
    returnType: boolean;
}

export interface ReturnTypeText {
    type: 'text';
    returnType: string;
}

export interface ReturnTypeTextarea {
    type: 'textarea';
    returnType: string;
}

export interface ReturnTypeOption {
    type: 'option';
    returnType: string;
}

export interface ReturnTypeOptions {
    type: 'options';
    returnType: string;
}

export interface ReturnTypeAsset {
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

export interface ReturnTypeMultiasset {
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

export interface ReturnTypeBloks {
    type: 'bloks';
    returnType: any[];
}

export interface ReturnTypeCustom {
    type: 'custom';
    plugin: 'backpack-fade';
    returnType: string;
}

export interface ReturnTypeMarkdown {
    type: 'markdown';
    returnType: string;
}

export interface ReturnTypeRichText {
    type: 'richtext';
    returnType: {
        content: any[];
        type: 'doc';
    };
}

export interface ReturnTypeTable {
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
    multilink: ReturnTypeMultilink;
    number: ReturnTypeNumber;
    datetime: ReturnTypeDatetime;
    boolean: ReturnTypeBoolean;
    text: ReturnTypeText;
    textarea: ReturnTypeTextarea;
    option: ReturnTypeOption;
    options: ReturnTypeOptions;
    asset: ReturnTypeAsset;
    multiasset: ReturnTypeMultiasset;
    bloks: ReturnTypeBloks;
    custom: ReturnTypeCustom;
    markdown: ReturnTypeMarkdown;
    richtext: ReturnTypeRichText;
    table: ReturnTypeTable;
}
