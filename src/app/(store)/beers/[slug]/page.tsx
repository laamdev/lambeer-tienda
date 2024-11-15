import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { PortableText } from 'next-sanity'

import { MaxWidthWrapper } from '@/components/globals/max-width-wrapper'
import { SectionHeading } from '@/components/globals/section-heading'

import { getBeerBySlug } from '@/sanity/lib/beers/gerBeerBySlug'
import { urlForImage } from '@/sanity/lib/utils'
import { getFormattedCurrency } from '@/lib/utils'

interface BeerPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata(
  props: BeerPageProps
): Promise<Metadata> {
  const params = await props.params
  const { slug } = params

  const beer = await getBeerBySlug(slug)

  if (!beer) {
    return notFound()
  }

  return {
    title: beer.name
  }
}

export default async function BeerPage({ params }: BeerPageProps) {
  const { slug } = await params
  const beer = await getBeerBySlug(slug)

  if (!beer) {
    return notFound()
  }

  const beerFormat = beer.format === 'Bottle' ? 'Botella' : 'Lata'

  return (
    <MaxWidthWrapper>
      <section className='grid gap-x-8 sm:grid-cols-2'>
        <div className='relative aspect-square rounded-2xl'>
          <Image
            src={
              (urlForImage(beer.image)
                ?.height(1080)
                .width(1080)
                .url() as string) ?? '/images/event-1.webp'
            }
            alt={beer.name ?? 'Cerveza desconocida.'}
            layout='fill'
          />
        </div>

        <section className='mt-4 sm:mt-0'>
          <SectionHeading title={beer.name!} />

          <h3 className='mt-2 text-3xl font-bold text-stone-700'>
            {getFormattedCurrency(beer.price!)}
          </h3>

          <div className='mt-4 grid gap-2 sm:mt-8 sm:gap-4 md:grid-cols-2'>
            <div>
              <p className='text-xs font-medium text-stone-700 sm:text-sm'>
                Cervecera
              </p>
              <p className='text-lg font-semibold tracking-tighter sm:text-xl'>
                {beer?.brewery?.name}
              </p>
            </div>

            <div>
              <p className='text-xs font-medium text-stone-700 sm:text-sm'>
                Estilo
              </p>
              <p className='text-lg font-semibold tracking-tighter sm:text-xl'>
                {beer?.style?.name}
              </p>
            </div>

            <div>
              <p className='text-xs font-medium text-stone-700 sm:text-sm'>
                {beerFormat}
              </p>
              <p className='text-lg font-semibold tracking-tighter sm:text-xl'>
                {`${beer?.size} ml`}
              </p>
            </div>

            <div>
              <p className='text-xs font-medium text-stone-700 sm:text-sm'>
                ABV
              </p>
              <p className='text-lg font-semibold tracking-tighter sm:text-xl'>
                {beer?.abv} %
              </p>
            </div>
          </div>

          <div className='mt-8 flex-grow overflow-y-auto sm:mt-16'>
            {beer.description && beer.description.length > 0 && (
              <div className='prose'>
                <PortableText value={beer.description!} />
              </div>
            )}
          </div>
        </section>
      </section>
    </MaxWidthWrapper>
  )
}
