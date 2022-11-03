import type { SbBlokData } from '@storyblok/react';
import type { AllStoryblokFieldsReturnTypes } from './StoryblokReturnTypes';

export type GetReturnedType<T extends { type: string; plugin: string }> = {
    [K in keyof AllStoryblokFieldsReturnTypes]: AllStoryblokFieldsReturnTypes[K] extends {
            type: T['type'];
        }
        ? AllStoryblokFieldsReturnTypes[K] extends { plugin: T['plugin'] }
            ? AllStoryblokFieldsReturnTypes[K]
            : AllStoryblokFieldsReturnTypes[K]
        : never;
}[keyof AllStoryblokFieldsReturnTypes]['returnType'];

export type GetSchemaReturnType<Schema extends Record<string, any>> = {
    [K in keyof Schema]: GetReturnedType<Schema[K]>;
} &
    SbBlokData;
