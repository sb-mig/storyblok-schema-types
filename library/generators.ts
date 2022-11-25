import { BackpackInputOutputPredicate, GeneralNestedPredicate } from './predicates';
import { BackpackCore, Core, CorePredicates } from './ConstantTypes';
import { Breakpoints } from './types';
import { SbBlokData } from '@storyblok/react';

type _GenerateNestedInput<TFields, TBreakpoints extends string = Breakpoints> =
    {
        [Field in keyof TFields]: TFields[Field] extends BackpackInputOutputPredicate
        ? {
            type: 'custom';
            field_type?: string;
            display_name?: string;
            options?: any[];
            default_value: {
                [key in TBreakpoints]?: TFields[Field]['Output'];
            };
        }
        : TFields[Field] extends BackpackCore['BackpackSpacing']
            ? {
                type: 'custom';
                field_type: 'backpack-spacing';
                display_name?: string;
                default_value: {
                    [key in TBreakpoints]?: TFields[Field]['Output'];
                };
            }
            : TFields[Field] extends BackpackCore['BackpackPosition']
                ? {
                    type: 'custom';
                    field_type: 'backpack-layout';
                    display_name?: string;
                    default_value: {
                        [key in TBreakpoints]?: TFields[Field]['Output'];
                    };
                }
                : TFields[Field] extends BackpackCore['BackpackColorPicker']
                    ? {
                        type: 'custom';
                        field_type: 'backpack-color-picker';
                        display_name?: string;
                        options: [
                            {
                                name: 'colors';
                                value: 'colors';
                            }
                        ];
                        default_value: {
                            [key in TBreakpoints]?: TFields[Field]['Output'];
                        };
                    }
                    : never;
    };

type _GenerateNestedOutput<TFields extends GeneralNestedPredicate, TBreakpoints extends string = Breakpoints> =
    {
        plugin: 'backpack-breakpoints';
        _uid: string;
        title: string;
        description: string;
        fields: {
            [Field in keyof TFields]: {
                field_type: TFields[Field]['Input']['field_type']
                data: {
                    [key in TBreakpoints]?: TFields[Field] extends {
                            Input: any;
                            Output: any;
                        }
                        ? TFields[Field]['Output']
                        : never;
                }
            };
        };
    };

type _GenerateInput<TFields, TBreakpoints extends string = Breakpoints> = {
    [Field in keyof TFields]: TFields[Field] extends BackpackInputOutputPredicate
        ? TFields[Field]['Input']
        : TFields[Field] extends Core['text']
            ? {
                type: 'text';
                display_name?: string;
                description?: string;
                required?: boolean;
                translatable?: boolean;
                default_value?: TFields[Field]['Output'];
            }
            : TFields[Field] extends Core['boolean']
                ? {
                    type: 'boolean';
                    default_value: TFields[Field]['Output'];
                }
                : TFields[Field] extends Core['number']
                    ? {
                        type: 'number';
                        default_value: TFields[Field]['Output'];
                    }
                    : TFields[Field] extends CorePredicates['tab']
                        ? TFields[Field]['Input']
                        : never;
};
type _GenerateOutput<TFields, TBreakpoints extends string = Breakpoints> = {
    [Field in keyof TFields]: TFields[Field] extends { Input: any; Output: any }
        ? TFields[Field]['Output']
        : never;
};

export type GenerateNestedSchema<TFields extends GeneralNestedPredicate> = {
    Input: _GenerateNestedInput<TFields>;
    Output: _GenerateNestedOutput<TFields>;
};

export type GenerateSchema<TFields> = {
    Input: _GenerateInput<TFields>;
    Output: _GenerateOutput<TFields> & SbBlokData;
};