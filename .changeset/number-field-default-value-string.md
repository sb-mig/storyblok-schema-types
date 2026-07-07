---
'storyblok-schema-types': patch
---

Fix `number` field `default_value` resolving to `never`. `StoryblokNumberFieldType`
now defaults its `default_value` generic to `string`, matching
`StoryblokNumberFieldReturnType` and Storyblok's real behaviour (number fields are
stored and returned as strings). This restores the ability to set `default_value`
on number fields built via `GenerateSchema`, which collapsed to `never` in 1.3.2
(`number & string`). See GCTT-3813.
