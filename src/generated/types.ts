import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
    T extends { [key: string]: unknown },
    K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
    | T
    | {
          [P in keyof T]?: P extends ' $fragmentName' | '__typename'
              ? T[P]
              : never
      }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: { input: string; output: string }
    String: { input: string; output: string }
    Boolean: { input: boolean; output: boolean }
    Int: { input: number; output: number }
    Float: { input: number; output: number }
}

/** The difficulty level of the question */
export enum Difficulty {
    Easy = 'EASY',
    Hard = 'HARD',
    Medium = 'MEDIUM',
}

export type GraphQlAward = {
    __typename?: 'GraphQLAward'
    description: Scalars['String']['output']
    id: Scalars['Int']['output']
    image: Scalars['String']['output']
    title: Scalars['String']['output']
}

export type GraphQlRelatedTheme = {
    __typename?: 'GraphQLRelatedTheme'
    image: Scalars['String']['output']
    title: Scalars['String']['output']
}

export type Query = {
    __typename?: 'Query'
    getQuestionById: Question
    themes: Array<ThemeResultUnion>
}

export type QueryGetQuestionByIdArgs = {
    id: Scalars['Int']['input']
}

export type Question = {
    __typename?: 'Question'
    answers: Array<Scalars['String']['output']>
    difficulty: Difficulty
    id: Scalars['Int']['output']
    question: Scalars['String']['output']
    subtheme: Subtheme
}

export type StatusMessage = {
    __typename?: 'StatusMessage'
    message: Scalars['String']['output']
    status: Scalars['Int']['output']
}

export type Subtheme = {
    __typename?: 'Subtheme'
    questions: Array<Question>
    theme: Theme
    title: Scalars['String']['output']
}

export type Theme = {
    __typename?: 'Theme'
    award: GraphQlAward
    description: Scalars['String']['output']
    image: Scalars['String']['output']
    relatedThemes: Array<GraphQlRelatedTheme>
    subthemes: Array<Subtheme>
    title: Scalars['String']['output']
}

export type ThemeResultUnion = StatusMessage | Theme

export type GetThemesQueryVariables = Exact<{ [key: string]: never }>

export type GetThemesQuery = {
    __typename?: 'Query'
    themes: Array<
        | { __typename?: 'StatusMessage' }
        | {
              __typename?: 'Theme'
              title: string
              description: string
              image: string
          }
    >
}

export const GetThemesDocument = gql`
    query GetThemes {
        themes {
            ... on Theme {
                title
                description
                image
            }
        }
    }
`

/**
 * __useGetThemesQuery__
 *
 * To run a query within a React component, call `useGetThemesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetThemesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetThemesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetThemesQuery(
    baseOptions?: Apollo.QueryHookOptions<
        GetThemesQuery,
        GetThemesQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useQuery<GetThemesQuery, GetThemesQueryVariables>(
        GetThemesDocument,
        options,
    )
}
export function useGetThemesLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        GetThemesQuery,
        GetThemesQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useLazyQuery<GetThemesQuery, GetThemesQueryVariables>(
        GetThemesDocument,
        options,
    )
}
export function useGetThemesSuspenseQuery(
    baseOptions?: Apollo.SuspenseQueryHookOptions<
        GetThemesQuery,
        GetThemesQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useSuspenseQuery<GetThemesQuery, GetThemesQueryVariables>(
        GetThemesDocument,
        options,
    )
}
export type GetThemesQueryHookResult = ReturnType<typeof useGetThemesQuery>
export type GetThemesLazyQueryHookResult = ReturnType<
    typeof useGetThemesLazyQuery
>
export type GetThemesSuspenseQueryHookResult = ReturnType<
    typeof useGetThemesSuspenseQuery
>
export type GetThemesQueryResult = Apollo.QueryResult<
    GetThemesQuery,
    GetThemesQueryVariables
>
