export type Product = {
	name: string
	color: 'red' | 'green' | 'blue'
}

// the product Id is actually a string
// type ProductId = string

// but Id recommend using an so called `opaque-type` to make it clear that e.g a product Id has nothing in common with a category Id, except of how they look like
declare const _productId: unique symbol
export type ProductId = string & { readonly [_productId]: never }

// ----------------------------------------------------------------------------
// Example
// ----------------------------------------------------------------------------
// Note: '@ts-expect-error' are special comments which tell TypeScript that we
// expect the following line to contain an Error. If the following line would
// not contain an Error, TypeScript will show us an Error

// we also define a CategoryId as an `opaque-type`
declare const _categoryId: unique symbol
type CategoryId = string & { readonly [_categoryId]: never }

// we define our id as a ProductId
let productId = '123' as ProductId

// we can access every string operations as usual
productId.substring(1)

// but we can't assign a normal string to it
// @ts-expect-error
productId = '1234'

let categoryId = '123' as CategoryId

// even if both Ids have '123' as their value, TypeScript tells us that these types are incompatible
// @ts-expect-error
productId === categoryId

// and if we define a function that expects a ProductId
const findProductById = (id: ProductId) => {
	/* ... implementation */
}

// this is valid
findProductById(productId)

// we cant pass a `CategoryId` to the function
// @ts-expect-error
findProductById(categoryId)
