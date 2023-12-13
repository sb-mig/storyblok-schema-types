import {
    GeneralSchemaPredicate
} from './predicates';
import { Core } from './ConstantTypes';
import { SbBlokData } from '@storyblok/react';
import {RemoveNever} from "./utils";

type _GenerateInput<TFields> = {
    [Field in keyof TFields]: TFields[Field] extends Core['text']
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
type _GenerateOutput<TFields> = RemoveNever<{
    [Field in keyof TFields]: TFields[Field] extends GeneralSchemaPredicate
        ? TFields[Field]['Output']
        : never;
}>;

export type GenerateSchema<TFields> = {
    Input: _GenerateInput<TFields>;
    Output: _GenerateOutput<TFields> & SbBlokData;
};
