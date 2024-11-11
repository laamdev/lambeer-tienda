/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: 'sanity.imagePaletteSwatch'
  background?: string
  foreground?: string
  population?: number
  title?: string
}

export type SanityImagePalette = {
  _type: 'sanity.imagePalette'
  darkMuted?: SanityImagePaletteSwatch
  lightVibrant?: SanityImagePaletteSwatch
  darkVibrant?: SanityImagePaletteSwatch
  vibrant?: SanityImagePaletteSwatch
  dominant?: SanityImagePaletteSwatch
  lightMuted?: SanityImagePaletteSwatch
  muted?: SanityImagePaletteSwatch
}

export type SanityImageDimensions = {
  _type: 'sanity.imageDimensions'
  height?: number
  width?: number
  aspectRatio?: number
}

export type SanityFileAsset = {
  _id: string
  _type: 'sanity.fileAsset'
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  source?: SanityAssetSourceData
}

export type Geopoint = {
  _type: 'geopoint'
  lat?: number
  lng?: number
  alt?: number
}

export type Event = {
  _id: string
  _type: 'event'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  category?: 'tasting' | 'presentation' | 'meet-the-brewer' | 'other'
  summary?: string
  description?: Array<{
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote'
    listItem?: 'bullet' | 'number'
    markDefs?: Array<{
      href?: string
      _type: 'link'
      _key: string
    }>
    level?: number
    _type: 'block'
    _key: string
  }>
  startDate?: string
  endDate?: string
  price?: number
  capacity?: number
  image?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
}

export type Food = {
  _id: string
  _type: 'food'
  _createdAt: string
  _updatedAt: string
  _rev: string
  order?: number
  name?: string
  description?: string
  price?: number
}

export type Tap = {
  _id: string
  _type: 'tap'
  _createdAt: string
  _updatedAt: string
  _rev: string
  order?: number
  name?: string
  brewery?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'brewery'
  }
  style?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'style'
  }
  abv?: number
  halfPintPrice?: number
  pintPrice?: number
  isCoreRange?: boolean
}

export type Beer = {
  _id: string
  _type: 'beer'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  slug?: Slug
  description?: Array<{
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote'
    listItem?: 'bullet' | 'number'
    markDefs?: Array<{
      href?: string
      _type: 'link'
      _key: string
    }>
    level?: number
    _type: 'block'
    _key: string
  }>
  image?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  style?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'style'
  }
  brewery?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'brewery'
  }
  price?: number
  abv?: number
  format?: 'Can' | 'Bottle'
  size?: number
  arrivalDate?: string
  isInStock?: boolean
  isFeatured?: boolean
}

export type Brewery = {
  _id: string
  _type: 'brewery'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  slug?: Slug
  location?: string
  description?: Array<{
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote'
    listItem?: 'bullet' | 'number'
    markDefs?: Array<{
      href?: string
      _type: 'link'
      _key: string
    }>
    level?: number
    _type: 'block'
    _key: string
  }>
  logo?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    alt?: string
    _type: 'image'
  }
}

export type Style = {
  _id: string
  _type: 'style'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  slug?: Slug
  description?: Array<{
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote'
    listItem?: 'bullet' | 'number'
    markDefs?: Array<{
      href?: string
      _type: 'link'
      _key: string
    }>
    level?: number
    _type: 'block'
    _key: string
  }>
}

export type Slug = {
  _type: 'slug'
  current?: string
  source?: string
}

export type BlockContent = Array<
  | {
      children?: Array<{
        marks?: Array<string>
        text?: string
        _type: 'span'
        _key: string
      }>
      style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote'
      listItem?: 'bullet'
      markDefs?: Array<{
        href?: string
        _type: 'link'
        _key: string
      }>
      level?: number
      _type: 'block'
      _key: string
    }
  | {
      asset?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
      }
      hotspot?: SanityImageHotspot
      crop?: SanityImageCrop
      alt?: string
      _type: 'image'
      _key: string
    }
>

export type SanityImageCrop = {
  _type: 'sanity.imageCrop'
  top?: number
  bottom?: number
  left?: number
  right?: number
}

export type SanityImageHotspot = {
  _type: 'sanity.imageHotspot'
  x?: number
  y?: number
  height?: number
  width?: number
}

export type SanityImageAsset = {
  _id: string
  _type: 'sanity.imageAsset'
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  metadata?: SanityImageMetadata
  source?: SanityAssetSourceData
}

export type SanityAssetSourceData = {
  _type: 'sanity.assetSourceData'
  name?: string
  id?: string
  url?: string
}

export type SanityImageMetadata = {
  _type: 'sanity.imageMetadata'
  location?: Geopoint
  dimensions?: SanityImageDimensions
  palette?: SanityImagePalette
  lqip?: string
  blurHash?: string
  hasAlpha?: boolean
  isOpaque?: boolean
}

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityFileAsset
  | Geopoint
  | Event
  | Food
  | Tap
  | Beer
  | Brewery
  | Style
  | Slug
  | BlockContent
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata
export declare const internalGroqTypeReferenceTo: unique symbol
// Source: ./src/sanity/lib/beers/gerBeerBySlug.ts
// Variable: BEER_BY_SLUG_QUERY
// Query: *[_type == "beer" && slug.current == $slug][0]{      _id,      name,      description,      "slug": slug.current,      "brewery": brewery->{        name,         "slug": slug.current        },      "style": style->{        name,        "slug": slug.current      },      image,      price,      abv,      format,      size,    }
export type BEER_BY_SLUG_QUERYResult = {
  _id: string
  name: string | null
  description: Array<{
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'blockquote' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'normal'
    listItem?: 'bullet' | 'number'
    markDefs?: Array<{
      href?: string
      _type: 'link'
      _key: string
    }>
    level?: number
    _type: 'block'
    _key: string
  }> | null
  slug: string | null
  brewery: {
    name: string | null
    slug: string | null
  } | null
  style: {
    name: string | null
    slug: string | null
  } | null
  image: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  } | null
  price: number | null
  abv: number | null
  format: 'Bottle' | 'Can' | null
  size: number | null
} | null

// Source: ./src/sanity/lib/beers/getAllStyles.ts
// Variable: ALL_STYLES_QUERY
// Query: *[_type == "style"] | order(name asc) {      _id,      name,      "slug": slug.current,    }
export type ALL_STYLES_QUERYResult = Array<{
  _id: string
  name: string | null
  slug: string | null
}>

// Source: ./src/sanity/lib/beers/getBeersByStyle.ts
// Variable: BEER_BY_STYLE_QUERY
// Query: *[_type == "beer" && references(*[_type == "style" && slug.current == $styleSlug]._id)] | order(name asc)
export type BEER_BY_STYLE_QUERYResult = Array<{
  _id: string
  _type: 'beer'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  slug?: Slug
  description?: Array<{
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'blockquote' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'normal'
    listItem?: 'bullet' | 'number'
    markDefs?: Array<{
      href?: string
      _type: 'link'
      _key: string
    }>
    level?: number
    _type: 'block'
    _key: string
  }>
  image?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  style?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'style'
  }
  brewery?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'brewery'
  }
  price?: number
  abv?: number
  format?: 'Bottle' | 'Can'
  size?: number
  arrivalDate?: string
  isInStock?: boolean
  isFeatured?: boolean
}>

// Source: ./src/sanity/lib/beers/getBeersCount.ts
// Variable: BEERS_COUNT_QUERY
// Query: count(*[_type == "beer"])
export type BEERS_COUNT_QUERYResult = number

// Source: ./src/sanity/lib/beers/getFeaturedBeers.ts
// Variable: FEATURED_BEERS_QUERY
// Query: *[_type == "beer" && isFeatured][0...4] | order(name asc) {      _id,      name,      "slug": slug.current,      price,      image,      "brewery": brewery->name,      "style": style->name,    }
export type FEATURED_BEERS_QUERYResult = Array<{
  _id: string
  name: string | null
  slug: string | null
  price: number | null
  image: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  } | null
  brewery: string | null
  style: string | null
}>

// Source: ./src/sanity/lib/events/getAllEvents.ts
// Variable: ALL_EVENTS_QUERY
// Query: *[_type == "event"] | order(startDate asc)
export type ALL_EVENTS_QUERYResult = Array<{
  _id: string
  _type: 'event'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  category?: 'meet-the-brewer' | 'other' | 'presentation' | 'tasting'
  summary?: string
  description?: Array<{
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'blockquote' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'normal'
    listItem?: 'bullet' | 'number'
    markDefs?: Array<{
      href?: string
      _type: 'link'
      _key: string
    }>
    level?: number
    _type: 'block'
    _key: string
  }>
  startDate?: string
  endDate?: string
  price?: number
  capacity?: number
  image?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
}>

// Source: ./src/sanity/lib/events/getEventBySlug.ts
// Variable: EVENT_BY_SLUG_QUERY
// Query: *[_type == "event" && slug.current == $slug][0]{      _id,      name,      "slug": slug.current,      "brewery": brewery->{        name,         "slug": slug.current        },      "style": style->{        name,        "slug": slug.current      },      image,      price,      abv    }
export type EVENT_BY_SLUG_QUERYResult = {
  _id: string
  name: string | null
  slug: null
  brewery: null
  style: null
  image: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  } | null
  price: number | null
  abv: null
} | null

// Source: ./src/sanity/lib/taproom/getAllDishes.ts
// Variable: ALL_DISHES_QUERY
// Query: *[_type == "food"] | order(order asc) {      _id,      name,      description,      price    }
export type ALL_DISHES_QUERYResult = Array<{
  _id: string
  name: string | null
  description: string | null
  price: number | null
}>

// Source: ./src/sanity/lib/taproom/getAllTaps.ts
// Variable: ALL_TAPS_QUERY
// Query: *[_type == "tap"] | order(tapNumber asc) {      _id,      tapNumber,      beerName,      breweryName,      beerStyle,      abv,      halfPintPrice,      pintPrice    }
export type ALL_TAPS_QUERYResult = Array<{
  _id: string
  tapNumber: null
  beerName: null
  breweryName: null
  beerStyle: null
  abv: number | null
  halfPintPrice: number | null
  pintPrice: number | null
}>

// Query TypeMap
import '@sanity/client'
declare module '@sanity/client' {
  interface SanityQueries {
    '\n    *[_type == "beer" && slug.current == $slug][0]{\n      _id,\n      name,\n      description,\n      "slug": slug.current,\n      "brewery": brewery->{\n        name, \n        "slug": slug.current\n        },\n      "style": style->{\n        name,\n        "slug": slug.current\n      },\n      image,\n      price,\n      abv,\n      format,\n      size,\n    }\n  ': BEER_BY_SLUG_QUERYResult
    '\n    *[_type == "style"] | order(name asc) {\n      _id,\n      name,\n      "slug": slug.current,\n    }\n  ': ALL_STYLES_QUERYResult
    '\n    *[_type == "beer" && references(*[_type == "style" && slug.current == $styleSlug]._id)] | order(name asc)\n  ': BEER_BY_STYLE_QUERYResult
    '\n    count(*[_type == "beer"])\n  ': BEERS_COUNT_QUERYResult
    '\n    *[_type == "beer" && isFeatured][0...4] | order(name asc) {\n      _id,\n      name,\n      "slug": slug.current,\n      price,\n      image,\n      "brewery": brewery->name,\n      "style": style->name,\n    }\n  ': FEATURED_BEERS_QUERYResult
    '\n    *[_type == "event"] | order(startDate asc)\n  ': ALL_EVENTS_QUERYResult
    '\n    *[_type == "event" && slug.current == $slug][0]{\n      _id,\n      name,\n      "slug": slug.current,\n      "brewery": brewery->{\n        name, \n        "slug": slug.current\n        },\n      "style": style->{\n        name,\n        "slug": slug.current\n      },\n      image,\n      price,\n      abv\n    }\n  ': EVENT_BY_SLUG_QUERYResult
    '\n    *[_type == "food"] | order(order asc) {\n      _id,\n      name,\n      description,\n      price\n    }\n  ': ALL_DISHES_QUERYResult
    '\n    *[_type == "tap"] | order(tapNumber asc) {\n      _id,\n      tapNumber,\n      beerName,\n      breweryName,\n      beerStyle,\n      abv,\n      halfPintPrice,\n      pintPrice\n    }\n  ': ALL_TAPS_QUERYResult
  }
}
