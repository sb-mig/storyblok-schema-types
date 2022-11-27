import {
    BackpackBreakpointsPredicate,
    CorePredicates,
    GeneralNestedPredicate,
    GeneralSchemaPredicate
} from './predicates';
import { BackpackCore, Core } from './ConstantTypes';
import { Breakpoints } from './types';
import { SbBlokData } from '@storyblok/react';
import {RemoveNever} from "./utils";

type _GenerateNestedInput<TFields, TBreakpoints extends string = Breakpoints> =
    {
        [Field in keyof TFields]: TFields[Field] extends BackpackCore['BackpackSpacing']
        ? BackpackCore['BackpackSpacing']['Input'] & {
            default_value: {
                [key in TBreakpoints]?: TFields[Field]['Output'];
            };
        }
        : TFields[Field] extends BackpackCore['BackpackPosition']
        ? BackpackCore['BackpackPosition']['Input'] & {
            default_value: {
                [key in TBreakpoints]?: TFields[Field]['Output'];
            };
        }
        : TFields[Field] extends BackpackCore['BackpackColorPicker']
        ? BackpackCore['BackpackColorPicker']['Input'] & {
            default_value: {
                [key in TBreakpoints]?: TFields[Field]['Output'];
            };
        }
        : never;
    };

type _GenerateNestedOutput<TFields extends GeneralNestedPredicate, TBreakpoints extends string = Breakpoints> =
    {
        plugin: 'backpack-breakpoints';
        title: string;
        description: string;
        fields: {
            [Field in keyof TFields]: {
                field_type: TFields[Field]['Input']['field_type']
                type: TFields[Field]['Input']['type']
                values: {
                    [key in TBreakpoints]?: TFields[Field] extends GeneralSchemaPredicate
                        ? TFields[Field]['Output']
                        : never;
                }
            };
        };
    };

type _GenerateInput<TFields, TBreakpoints extends string = Breakpoints> = {
    [Field in keyof TFields]: TFields[Field] extends BackpackBreakpointsPredicate
        ? TFields[Field]['Input']
        : TFields[Field] extends Core['text']
        ? TFields[Field]['Input'] & {
            default_value?: TFields[Field]['Output'];
        }
        : TFields[Field] extends Core['textarea']
        ? TFields[Field]['Input'] & {
            default_value?: TFields[Field]['Output'];
        }
        : TFields[Field] extends Core['boolean']
        ? TFields[Field]['Input'] & {
            default_value?: TFields[Field]['Output'];
        }
        : TFields[Field] extends Core['number']
        ? TFields[Field]['Input'] & {
            default_value?: TFields[Field]['Output'];
        }
        : TFields[Field] extends Core['option']
        ? TFields[Field]['Input'] & {
            default_value?: TFields[Field]['Output'];
        }
        : TFields[Field] extends Core['options']
        ? TFields[Field]['Input'] & {
            default_value?: TFields[Field]['Output'];
        }
        : TFields[Field] extends Core['multilink']
        ? TFields[Field]['Input'] & {
            default_value?: TFields[Field]['Output'];
        }
        : TFields[Field] extends Core['asset']
        ? TFields[Field]['Input'] & {
            default_value?: TFields[Field]['Output'];
        }
        : TFields[Field] extends Core['multiasset']
        ? TFields[Field]['Input'] & {
            default_value?: TFields[Field]['Output'];
        }
        : TFields[Field] extends Core['datetime']
        ? TFields[Field]['Input']
        : TFields[Field] extends Core['table']
        ? TFields[Field]['Input']
        : TFields[Field] extends Core['richtext']
        ? TFields[Field]['Input']
        : TFields[Field] extends Core['markdown']
        ? TFields[Field]['Input']
        : TFields[Field] extends Core['bloks']
        ? TFields[Field]['Input']
        : TFields[Field] extends Core['custom']
        ? TFields[Field]['Input']
        : TFields[Field] extends Core['section']
        ? TFields[Field]['Input']
        : TFields[Field] extends Core['tab']
        ? TFields[Field]['Input']
        : never;
};
type _GenerateOutput<TFields, TBreakpoints extends string = Breakpoints> = RemoveNever<{
    [Field in keyof TFields]: TFields[Field] extends GeneralSchemaPredicate
        ? TFields[Field]['Output']
        : never;
}>;

export type GenerateNestedSchema<TFields extends GeneralNestedPredicate> = {
    Input: _GenerateNestedInput<TFields>;
    Output: _GenerateNestedOutput<TFields>;
};

export type GenerateSchema<TFields> = {
    Input: _GenerateInput<TFields>;
    Output: _GenerateOutput<TFields> & SbBlokData;
};
