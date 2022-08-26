# Svelte(Kit) TypeScript Showcase + general TypeScript tipps

This repository shows how [`Svelte`](https://svelte.dev/) and [`SvelteKit`](https://kit.svelte.dev/)
work together with [`TypeScript`](https://www.typescriptlang.org/).

> This repository should offer an overview of all `TypeScript` related topics for `Svelte` and
> `SvelteKit`\
> Feel free to contribute by [creating a PR](https://github.com/ivanhofer/sveltekit-typescript-showcase/pulls)
> or [open an issue](https://github.com/ivanhofer/sveltekit-typescript-showcase/issues) if you think
> something is missing.

<!------------------------------------------------------------------------------------------------>
<!------------------------------------------------------------------------------------------------>

## Who am I

Hi, I'm Ivan, a passionate webdeveloper.

I recently have been working more intensively with `TypeScript` when I have created an
internationalization library focusing on developer experience with strong typesafety features:
[`typesafe-i18n`](https://github.com/ivanhofer/typesafe-i18n)

I know and love `Svelte` for a few years now. Over the years I saw how my development workflow
improved and now together with `TypeScript`, I'm able to build real business applications with
confidence. When I started with `Svelte`, the missing `TypeScript` support always bothered me. And
once I could use `TypeScript` in my `Svelte` projects I still found it not so easy because of some
missing documentation. That's why I decided to create this repository with some examples that should
help you learn the concepts better. I hope you find it useful.

[Become a sponsor :heart:](https://github.com/sponsors/ivanhofer) if you want to support my open source contributions.

<!------------------------------------------------------------------------------------------------>
<!------------------------------------------------------------------------------------------------>

## Overview

-  [**Project Setup**](#project-setup): good to know before getting started
-  [**Examples**](#examples): see `TypeScript` + `Svelte` in action
-  [**TypeScript Tipps**](#typescript-tipps): tipps to increase the typesafety of your projects
-  [**Conclusion**](#conclusion): some final words
-  [**JSDoc comments**](#jsdoc-comments): benefit from type-checkings without writing `TypeScript`
   code

<!------------------------------------------------------------------------------------------------>
<!------------------------------------------------------------------------------------------------>

## Project Setup

In order to get the best development expeience you should use
[`VS Code`](https://code.visualstudio.com/) as your IDE and install the
[official `Svelte` extension](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).
The extension offers you a variety of features like code-completions, hover infos, syntax error
highlighting and much more.

> I also recommend to install the
> [`Error Lens` extension](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)
> that displays error-messages inline next to the actual code.

<!------------------------------------------------------------------------------------------------>

### Get Started

You can create a new `SvelteKit` project by following the
[`Getting started` guide](https://kit.svelte.dev/docs/introduction#getting-started) in the official
docs.

```sh
npm init svelte@next my-app
cd my-app
npm install
npm run dev
```

The `npm init svelte@next my-app` command starts an interactive project-setup process where you get
asked a few questions. Of course you should select the `TypeScript` option.

> I also recommend enabling the [`eslint`](https://eslint.org/) and
> [`prettier`](https://prettier.io/) options.

<!------------------------------------------------------------------------------------------------>

### Configure TypeScript

In the root of the generated folder, you should see a
[`tsconfig.json` file](https://github.com/ivanhofer/sveltekit-typescript-showcase/blob/main/tsconfig.json).
I recommend you to configure `TypeScript` as strict as possible to benefit from the advanced
type-checking features.

> As of writing these are the strictest options I know. This list will grow with new `TypeScript`
> releases.\
> Please [create a PR](https://github.com/ivanhofer/sveltekit-typescript-showcase/pulls) if you know
> more options that should be enabled.

```jsonc
{
   "compilerOptions": {
      "strict": true,
      "allowUnreachableCode": false,
      "exactOptionalPropertyTypes": true,
      "noImplicitAny": true,
      "noImplicitOverride": true,
      "noImplicitReturns": true,
      "noImplicitThis": true,
      "noFallthroughCasesInSwitch": true,
      "noUncheckedIndexedAccess": true
   }
}
```

> Not all options may fit your coding style. You can always remove some of them but be aware that
> this could eliminate some cool type-checking features.

<!------------------------------------------------------------------------------------------------>

### How does TypeScript work inside Svelte-Components?

Per default the `Svelte`-compiler only understands plain `HTML`, `CSS` and `JavaScript`. But we can
add support for other languages to the compiler via custom
[`preprocessors`](https://svelte.dev/docs#compile-time-svelte-preprocess). Luckily, we don't have to
write our own preprocessor because there exists already an
[official package](https://github.com/sveltejs/svelte-preprocess) we can use. `svelte-preprocess`
enables us to use `TypeScript` and also custom CSS syntax like `SCSS` or `PostCSS` without much
effort. If you take a look at the
[`svelte.config.js` file](https://github.com/ivanhofer/sveltekit-typescript-showcase/blob/main/svelte.config.js),
you see that this was arleady set up for us.

The next step will be to create our first Component and use `TypeScript` inside the `script`-tag.

```svelte
<script>
   export let name: string
</script>

Hello {name}!
```

If everything is correctly set up, you should see an error message telling you something like
`'Unexpected Token'`. That's because we have to tell the preprocessor that we want to use
`TypeScript` syntax. We can do that by adding the `lang="ts"` attribute to our `script` tag.

```diff
-<script>
+<script lang="ts">
   export let name: string
</script>

Hello {name}!
```

That's it. You are now ready to write `TypeScript` code inside your `Svelte`-components.

<!------------------------------------------------------------------------------------------------>

#### imports from `.ts` files

You can also import functions from other `TypeScript` files like you would in a normal `.ts` file.
If you import types from another file, make sure you use the
[`import type`-syntax](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export)

```svelte
<script>
   import { myFunction } from './my-file'
   import type { MyFunctionType } from './my-file'
</script>
```

if you are using a `TypeScript` version `>= 4.5.x` you can also write it like this:

```svelte
<script>
   import { myFunction, type MyFunctionType } from './my-file'
</script>
```

<!------------------------------------------------------------------------------------------------>

### type-checking the whole project

You should know that even if you have `TypeScript` errors in your code, the `Svelte`-compiler will
generate your component (if the code contains valid `TypeScript` syntax) and the browser will run
the code normally. That's because the `preprocessor` only transpiles `TypeScript` to `JavaScript`
and doesn't perform any type-checking. That's a reason why we should use the `Svelte` extension that
will perform the type-checking for the components we have opened in `VS Code`. Performing a global
type-check for all components each time you save a file may be too resource intensive for most
computers, so only errors for opened files will show up.

This approach has a downside: If we change something in a component and haven't opened the file
where we use that specific component, we won't get notified about errors. Again luckily for us there
exists a solution to this problem: a package called
[svelte-check](https://github.com/sveltejs/language-tools/tree/master/packages/svelte-check).

If you take a look at the `scripts` section of the `package.json`, you will see that it is already
configured for us. We simply can run the following command to perform a check of the whole project:

```sh
npm run check
```

> You should include this `svelte-check` script in your `CI/CD` process to get notified if your
> components contain `TypeScript` errors.

<!------------------------------------------------------------------------------------------------>

### path aliases

You may see imports from paths that are not npm modules and also not relative paths e.g.
`$components/Component.svelte`. These are called path aliases and you can define them yourself if you like.

Let's say instead of using a relative file import like `../../../components/Component.svelte` you want to
use the alias import `$components/Component.svelte`. To do that, you only need to define the desired alias
in your `svelte.config.js` file:

```ts
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    alias: {
      $components: 'src/components',
    }
  }
};
```

These aliases are automatically passed to Vite and TypeScript. You can define as many aliases as you want.

<!------------------------------------------------------------------------------------------------>
<!------------------------------------------------------------------------------------------------>

## Examples

The next sections contain a list of all examples included in this repo. It is recommended to explore
the examples inside `VS Code` to have proper syntax-highlighting in place.

-  the title links directly to the folder, where the example is located
-  there is also a short description what is included in the example
-  a link to the official documentation to gain more information (if available)
-  most examples contain a `Component.svelte` and an `Usage.svelte` file to show it in action

> I recommend going over the examples in this order since some examples build on top of each other.

<!------------------------------------------------------------------------------------------------>
<!------------------------------------------------------------------------------------------------>

### Svelte

#### props

> https://svelte.dev/docs#component-format-script-1-export-creates-a-component-prop

This chapter teaches you everything about how you can use `TypeScript` to improve your component's
props.

-  **[basics](https://github.com/ivanhofer/sveltekit-typescript-showcase/tree/main/src/01-props/01-basics)**:
   how to define types for props
-  **[optional props](https://github.com/ivanhofer/sveltekit-typescript-showcase/tree/main/src/01-props/02-optional-props)**:
   how to mark props as optional
-  **[control flow](https://github.com/ivanhofer/sveltekit-typescript-showcase/tree/main/src/01-props/03-control-flow)**:
   how does it work inside the html markup **[(TS-tipp #1)](#1-union-types)**
-  **[reactive assignments](https://github.com/ivanhofer/sveltekit-typescript-showcase/tree/main/src/01-props/04-reactive-assignments)**:
   how to type reactive statements
   > https://svelte.dev/docs#component-format-script-3-$-marks-a-statement-as-reactive
-  **[generic props](https://github.com/ivanhofer/sveltekit-typescript-showcase/tree/main/src/01-props/05-generic-props)**:
   how to use generics for props
-  **[\$$Props](https://github.com/ivanhofer/sveltekit-typescript-showcase/tree/main/src/01-props/06-$$Props)**:
   how to extend the defined props of your components
-  **[call exported function](https://github.com/ivanhofer/sveltekit-typescript-showcase/tree/main/src/01-props/07-call-exported-function)**:
   how to call an exported function from the parent
-  **[either or](https://github.com/ivanhofer/sveltekit-typescript-showcase/tree/main/src/01-props/08-either-or)**:
   expect either param A or param B
-  **[svelte:component](https://github.com/ivanhofer/sveltekit-typescript-showcase/tree/main/src/01-props/09-svelte-component)**:
   getting prop-types of a component (useful for `svelte:component`)

<!------------------------------------------------------------------------------------------------>

#### dom

In this chapter you will learn how to interact directly with DOM-elements.

-  **[DOM element bindings](https://github.com/ivanhofer/sveltekit-typescript-showcase/tree/main/src/02-dom/01-dom-bindings)**:
   how to type your element bindings
   > https://svelte.dev/docs#template-syntax-element-directives-bind-this
-  **[actions](https://github.com/ivanhofer/sveltekit-typescript-showcase/tree/main/src/02-dom/02-actions)**:
   how to define actions in a typesafe way
   > https://svelte.dev/docs#template-syntax-element-directives-use-action

<!------------------------------------------------------------------------------------------------>

#### events

> https://svelte.dev/docs#run-time-svelte-createeventdispatcher

This chapter shows how you can define events that a component emits.

-  **[basics](https://github.com/ivanhofer/sveltekit-typescript-showcase/tree/main/src/03-events/01-basics)**:
   how to emit events
-  **[typed event details](https://github.com/ivanhofer/sveltekit-typescript-showcase/tree/main/src/03-events/02-typed-event-details)**:
   how to type the emitted events **[(TS-tipp #2)](#2-extend-existing-type-definitions)**
-  **[generic events](https://github.com/ivanhofer/sveltekit-typescript-showcase/tree/main/src/03-events/03-generic-events)**:
   how to use generics in your events
-  **[\$$Events](https://github.com/ivanhofer/sveltekit-typescript-showcase/tree/main/src/03-events/04-$$Events)**:
   how to extend the defined events of your components
-  **[strictEvents](https://github.com/ivanhofer/sveltekit-typescript-showcase/tree/main/src/03-events/05-strictEvents)**:
   how to disallow to listen for other events than the ones defined in a component

<!------------------------------------------------------------------------------------------------>

#### slots

> https://svelte.dev/docs#template-syntax-slot

-  **[basics](https://github.com/ivanhofer/sveltekit-typescript-showcase/tree/main/src/04-slots/01-basics)**:
   how to define slots and expose props
-  **[named](https://github.com/ivanhofer/sveltekit-typescript-showcase/tree/main/src/04-slots/02-named-slots)**:
   how to define named slots and expose props
   > https://svelte.dev/docs#template-syntax-slot-slot-name-name
-  **[\$$Slots](https://github.com/ivanhofer/sveltekit-typescript-showcase/tree/main/src/04-slots/03-$$Slots)**:
   how to extend the defined slots of your components

<!------------------------------------------------------------------------------------------------>

#### external components

-  **[SvelteComponentTyped](https://github.com/ivanhofer/sveltekit-typescript-showcase/tree/main/src/05-external-components)**:
   how to write type definitions for external components
-  **[`svelte-kit package`](https://github.com/ivanhofer/sveltekit-typescript-showcase/tree/main/src/lib)**:
   how to create a `Svelte` component library

   > https://kit.svelte.dev/docs/packaging

   `SvelteKit` includes an easy way to export single components or component libraries. Just run
   `npm run package` and `SvelteKit` will export all your components from the `src/lib` directory,
   together with `TypeScript` definitions into the `package` folder. This folder then also contains
   a generated `package.json` file. After that, you only need to run `npm publish` inside this
   folder to upload the library to `npm`.

<!------------------------------------------------------------------------------------------------>

#### state management

-  **[stores](https://github.com/ivanhofer/sveltekit-typescript-showcase/tree/main/src/06-state-management/01-stores)**:
   how to type your stores
   > https://svelte.dev/docs#run-time-svelte-store
-  **context**
   -  **[inline](https://github.com/ivanhofer/sveltekit-typescript-showcase/tree/main/src/06-state-management/02-context-inline)**:
      how to type contexts
      > https://svelte.dev/docs#run-time-svelte-setcontext
   -  **[outsourced](https://github.com/ivanhofer/sveltekit-typescript-showcase/tree/main/src/06-state-management/03-context-outsourced)**:
      how to wrap contexts with `TypeScript`
      **[(TS-tipp #3)](#3-wrap-functions-that-have-no-strong-typings)**

<!------------------------------------------------------------------------------------------------>
<!------------------------------------------------------------------------------------------------>

### SvelteKit

In this chapter you get to know how to type the backend of your `SvelteKit` application.

-  **[hooks](https://github.com/ivanhofer/sveltekit-typescript-showcase/tree/main/src/hooks.ts)**:
   how to intercept and modify requests

   > https://kit.svelte.dev/docs/hooks

   The `src/hooks.ts` file can export four functions. The type of these functions have the same name
   like the function and get exported from `@sveltejs/kit`.

   ```ts
   import type { ExternalFetch, GetSession, Handle, HandleError } from '@sveltejs/kit'

   export const handle: Handle = async ({ event, resolve }) => {
      /* implementation */
   }

   export const getSession: GetSession = (event) => {
      /* implementation */
   }

   export const handleError: HandleError = async ({ error, event }) => {
      /* implementation */
   }

   export const externalFetch: ExternalFetch = async (request) => {
      /* implementation */
   }
   ```

   The `handle` and `getSession` function will have access to the
   [`locals`](https://kit.svelte.dev/docs/hooks#handle) and the
   [`session`](https://kit.svelte.dev/docs/hooks#getsession) object. To let `TypeScript` know how the
   type of these objects look like, you need to go into the `src/app.d.ts` file and update the already
   existing `interfaces` there.

   Since these types will be shared accross multiple files and functions, it makes sense to define them
   just a single time. `SvelteKit` is configured in a way that it automatically uses those types for
   all functions.

<!------------------------------------------------------------------------------------------------>

-  **[endpoints](https://github.com/ivanhofer/sveltekit-typescript-showcase/tree/main/src/routes/products/[id].ts)**:
   how to use `SvelteKit` as an API-endpoint

   > https://kit.svelte.dev/docs/routing#endpoints

   We can use `RequestHandler` to type our endpoints. It expects a single generics:

   1. The type describes the shape the returned value will have.

   _`src/routes/product/[id].ts`_

   ```ts
   import type { RequestHandler } from './$types'
   import type { Product } from '$models/product.model'
   import db from '$db'

   type OutputType = { product: Product }

   export const GET: RequestHandler<OutputType> = async ({ params }) => {
      const data = await db.getProjectById(params.id)

      return {
         body: {
            product: data,
         },
      }
   }
   ```

   > Note: SvelteKit auto-generates the `./$types` folder for us. We can use it to get a `RequestHandler` type that already has the correct shape for the `params` object.

<!------------------------------------------------------------------------------------------------>

-  **[load function](https://github.com/ivanhofer/sveltekit-typescript-showcase/tree/main/src/routes/products/[id].svelte)**:
   how to load data before the page gets rendered

   > https://kit.svelte.dev/docs/loading

   Use the `Load` inferface type load functions in your route. It expects two generics:

   1. The first type will be the output type of your `endpoint` if available.\
      If no `GET`-endpoint is defined, the `props` object will be `undefined`.
   2. The second type describes the shape the returned value will have.


   _`src/routes/product/[id]/+page.svelte`_
   ```ts
      import type { PageLoad, PageLoadData } from './$types'
      import type { GET } from './[id]'

      type OutputProps = PageLoadData & { id: string }
      // the same as
      // type OutputProps = {
      //    id: string
      //    product: Product
      // }

      export const load: PageLoad<OutputProps> = async ({ params, props }) => {
         return {
            props: {
               id: params.id,
               product: props.product,
            },
         }
      }
   ```

   _`src/routes/product/[id]/+page.svelte`_
   ```svelte
   <script lang="ts">
      import type { PageData } from './$types'

      // PageData = { id: string; product: Product }
      export let data: PageData
   </script>
   ```

   > Note: SvelteKit auto-generates the `./$types` folder for us. We can use it to get a `Load` type that already has the correct shape for the `params` object.


-  **[auto generated types](https://kit.svelte.dev/docs/types#generated-types)**\
   SvelteKit creates some types automatically. Useful when you want to type your Endpoints and Load functions. Those types contain a typed `params` object depending on the route folder structure you use. The types are generated inside the `./$types` folder.\
   The types are generated when you run the dev server `npm run dev`. If you just want to generate the types, without running the dev server you can run `npx svelte-kit sync`. When you run `npm install`, the types will be generated automatically because the SvelteKit runs a post-install script that generates the files.

<!------------------------------------------------------------------------------------------------>
<!------------------------------------------------------------------------------------------------>

## TypeScript tipps

Here are some examples how you could improve your code base by adding stronger type definitions for
common use cases. Not everything needs to be typed that strong. Stricter type definitions will also
add complexity you need to maintain, but it certainly improves the devloper experience when using
strong typed functions within the code base.

<!------------------------------------------------------------------------------------------------>

#### #1 union types

> [Example](https://github.com/ivanhofer/sveltekit-typescript-showcase/tree/main/src/01-props/03-control-flow/ImprovedComponent.svelte)

You can use union types to narrow down types in the control flow of your application. Somewhere you
probably need to fetch data from an api. The fetch function will probably either return data or an
error. It is not wrong to model it like in the following example:

##### example

```ts
interface ApiResponse<T> {
   success: boolean
   data: T | undefined
   error: Error | undefined
}
```

But it doesn't work that well when you now want to access the `data` object because its type
definition also contains `undefined`:

```ts
let response: ApiResponse<string>

if (response.success) {
   // `response.data` is of type `string | undefined`
} else {
   // `response.error` is of type `Error | undefined`
}
```

##### improved example

We can improve the example by spitting our interface and then using an union type:

```ts
// will contain data but no Error
export interface SuccessResponse<T> {
   success: true
   data: T
   error: undefined
}

// will contain an Error but no data
export interface ErrorResponse {
   success: false
   data: undefined
   error: Error
}

// our union type
export type ApiResponse<T> = SuccessResponse<T> | ErrorResponse
```

If we now access the `data` we will see that its type is no longer `undefined`:

```ts
let response: ApiResponse<string>

if (response.success) {
   // `response.data` is of type `string`
} else {
   // `response.error` is of type `Error`
}
```

So whenever you know that something is **either A or either B** you should also model it that way by
splitting the model into two different interfaces and then use an union type to.

> You can learn more about union types in the official
> [`TypeScript` documentation](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)

<!------------------------------------------------------------------------------------------------>

#### #2 extend existing type definitions

> [Example](https://github.com/ivanhofer/sveltekit-typescript-showcase/blob/main/src/createEventDispatcher.d.ts)\
> a more complex example you don't need to fully understand. But this example can show you what is possible
> with `TypeScript` if you know how to use it ;)

Sometimes it is possible that a library contains missing or incomplete type definitions. You could
either use `// @ts-ignore` comments and live with it or you can write the type declaration yourself.

Create a `*.d.ts` file somewhere in your `src` folder and use the following syntax:

```ts
import 'package' // `'package'` is the library we want to extend

declare module 'package' {
   // we re-declare the module
   // we add the missing function or override the existing one
   export declare function someFunction(): boolean
}
```

You can now use it inside your code:

```ts
import { someFunction } from 'package'

const result = someFunction()
// result: boolean
```

<!------------------------------------------------------------------------------------------------>

#### #3 wrap functions that have no strong typings

> [Example](https://github.com/ivanhofer/sveltekit-typescript-showcase/blob/main/src/06-state-management/03-context-outsourced/slider-context.ts)

Whenever you are using a function that has no or not so good `TypeScript` definitions or whenever
you need to cast something everytime you use a function, you should wrap it into a new function and
add type definitions there.

##### example

```ts
import { getContext } from 'svelte'

// per default the return type is `unknown`
const c1 = getContext('my context')

// we need to pass a generic to let `TypeScript` know what we expect
const c2 = getContext<string>('my context')

// oops typo!
const c3 = getContext<string>('my comtext')
```

The usage of `getContext` in the example above has three issues:

1. you need to specify the return type whenever you call the function, so you would need to check
   where the context gets set and copy the type definition from there
2. when you refactor the context to hold different data, you need to update the type definition
   everywhere
3. you could easily introduce a typo because the parameter of the function is typed as a generic
   string

##### improved example

We can eliminate the issues mentioned above by wrapping `getContext` into a new function

```ts
import { getContext } from 'svelte'

const getMyContext = () => getContext<string>('my context')

const c = getMyContext() // typed as `string`
```

We now have a single function that is responsible for the **type (1)** and the **context name (3)**.
And we use that function when we want to access the data. When **refactoring (2)** we only need to
change it in a single place (and let `TypeScript` tell you if it's now getting used in a wrong way).

<!------------------------------------------------------------------------------------------------>

#### #4 use `opaque-types` for unique types

> [Example](https://github.com/ivanhofer/sveltekit-typescript-showcase/blob/main/src/models/product.model.ts)

Some types may look similar to another type but they are not actually related. If you are working
with databases the `ID` field would be such a case.

##### example

Typing the id of your DB model as a `string` is probably not wrong because from a technical
perspective they are `strings`. But it is also a `string` for other models of your DB.

```ts
interface Product {
   id: string
   author: string
}

interface Category {
   id: string
   name: string
}

const book: Product = { id: '1', /* ...rest */ }
const category: Category = { id: '1', /* ...rest */ }

const findById(productId): Product | undefined = { /* implementation */ }

findById(product.id) // valid

findById(category.id)  // we query the product DB with an id from the category DB
// this will probably always return `undefined` if your DB uses random IDs
```

You could introduce potential bugs if you are not careful. In the case above it probably is clear
because we have named the data variables clearly, but what if you name the variable just `result`
and then use the `findById` function. At first glance it looks good, but it is actually wrong.

##### improved example

We can improve this by giving each model its unique ID type.

```ts
// in the next two lines we define an `opaque type` for our ProductId
declare const _productId: unique symbol
export type ProductId = string & { readonly [_productId]: never }
// we define our type as `string` but with additional meta-information
// that tell TypeScript that this is a unique string

// this type will behave like a `string`, so you can use it in functions that
// expect a `string`, but it doesn't work the other way around. You can't pass
// a normal `string` to a function that expects a certain `opaque type`

// of course you can use `opaque types` also for `numbers` and other types


interface Product {
   id: ProductId
   author: string
}

// we also define a CategoryId as an `opaque type`
declare const _categoryId: unique symbol
type CategoryId = string & { readonly [_categoryId]: never }

interface Category {
   id: CategoryId
   name: string
}

// in this case we need to cast it, because we are hardcoding the IDs
// in a real world scenario the data gets loaded on runtime
// from the DB and no casting is needed there
const book: Product = { id: '1' as ProductId, /* ...rest */ }
const category: Category = { id: '1' as CategoryId, /* ...rest */ }

const findById(id: ProductId): Product | undefined = { /* implementation */ }

findById(book.id) // valid

findById(category.id) // TypeScript shows an error:
// Argument of type 'CategoryId' is not assignable to parameter of type 'ProductId'
```

Now `TypeScript` is able to tell you that something is wrong when you pass in the wrong ID.

This is not only useful for IDs but also for other `string` types that e.g. have a special meaning.
Such examples could be:

-  `LocalizedString` to make sure a Button component only accepts internationalized strings
-  `SanitizedHtmlString` so you know it contains no potential unsafe characters
-  `ValidatedString` that tells you it's content was checked and marked as valid

<!------------------------------------------------------------------------------------------------>

#### #5 use `tagged template literals` to narrow down your string types

Like you already have seen in the example from [TS-tipp #4](#4-use-opaque-types-for-unique-types),
strings are really generic and can hold any kind of data. Luckily `TypeScript` is flexible enough to
let us define which shape we expect the data.

> [Example](https://github.com/ivanhofer/sveltekit-typescript-showcase/blob/main/src/models/tagged-template-literals.model.ts)

```ts
// a list of possible options (`enum`-like)
type Options = 'A' | 'B' | 'C'

// `numbers` wrapped into a `string`
type NumberString = `${number}`

// really simple check if the format looks like an email
type EmailString = `${string}@${string}.${string}`

// simple check if it is an url
type LinkString = `http${'s' | ''}://${string}`

// simple check if it could be in the format of an IPv4 address
// note: we only can tell we expect any `number` but we cannot define value ranges yet
type IpStringSimple = `${number}.${number}.${number}.${number}`

// useful if you are handling multiple date formats from different apis
type Api1DateTimeString = `${number}-${number}-${number} ${number}:${number}:${number}`
// e.g. '2021-03-01 13:00:00'

type Api2Timestamp = `${number}` // e.g. '1635494400000'

// ... and many more potential use-cases
```

If we assign a value that doesn't match the definition of the shape `TypeScript` will throw an
error.

<!------------------------------------------------------------------------------------------------>
<!------------------------------------------------------------------------------------------------>

## Conclusion

You should now have a feeling what is possible with `TypeScript` and how you can use it within your
`Svelte` and `SvelteKit` applications. You probably have learned something new about `TypeScript` as
well. Just because the examples are listed here doesn't mean you **need** to type everything as
strict as possible. For some cases it makes sense to be stricter and sometimes beeing so strict will
introduce complexity you need to maintain over the lifetime of a project.

<!------------------------------------------------------------------------------------------------>
<!------------------------------------------------------------------------------------------------>

## JSDoc comments

You probably don't need `TypeScript` directly to profit from a strong type-checking experience
inside your `Svelte` and `SvelteKit` applications. `VS Code` and the `Svelte` extension can also
offer help if you annotate your components with [`JSDoc` comments](https://jsdoc.app/).

Here is a simple example:

-  JSDoc:

   ```svelte
   <script>
      /** @type {string} */
      export let name
   </script>

   Hello {name}!
   ```

-  TypeScript:

   ```svelte
   <script lang="ts">
      export let name: string
   </script>

   Hello {name}!
   ```

It is up to you which syntax you prefer. Some parts of the `SvelteKit` codebase are written in plain
`JavaScript` files annotated with `JSDoc` comments.

I would suggest directly using ´TypeScript´ because if you need more complex types, you will need to
write
[`declaration files`](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)
in `TypeScript` syntax. It will be harder for you to write them if you are not used to the
`TypeScript` syntax.

Also if you need to use generics inside your `JSDoc` comments, you may find the syntax a bit messy:

-  JSDoc:

```js
/**
 * @typedef { import('./my-types').Type1 } Type1,
 * @typedef { import('./my-types').GenericType<Type1> } Type1GenericType,
 */

/**
 * @param {Type1GenericType} param
 * @returns {void}
 */
export const myFunction = (param) => {
   // ... implementation
}
```

-  TypeScript:

```ts
import type { Type1, GenericType } from ('./my-types')

export const myFunction = (param: GenericType<Type1>): void => {
   // ... implementation
}
```

See the
[official documentation](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html) to
learn more about the `JSDoc`-syntax.
