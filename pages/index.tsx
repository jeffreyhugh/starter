import * as React from 'react';
import { FiGithub, FiHelpCircle } from 'react-icons/fi';

import Layout from '@/components/layout/Layout';
import A from '@/components/links/A';
import { BigLogo } from '@/components/Logo';
import Seo from '@/components/Seo';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className=''>
          <div className='layout hero'>
            <div className='hero-content text-center'>
              <div className='flex max-w-md flex-col items-center justify-center'>
                <BigLogo />
                <h1 className='mt-4 text-2xl md:text-4xl'>Web Starter</h1>
                <div className='mt-4 flex max-w-md flex-wrap gap-2 text-lg md:text-xl'>
                  Next.js, TypeScript, DaisyUI, TailwindCSS, Supabase, MDX,
                  React Hot Toast, and more
                </div>
                <div className='btn-group btn-group-vertical mt-6'>
                  <A className='btn' href='/features'>
                    <FiHelpCircle className='mr-2' />
                    All features
                  </A>
                  <A
                    className='btn'
                    href='https://github.com/jeffreyhugh/starter'
                  >
                    <FiGithub className='mr-2' />
                    See it on GitHub
                  </A>
                  <A
                    className='btn'
                    href='https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fjeffreyhugh%2Fstarter'
                  >
                    <div>
                      <div className='mask mask-triangle mr-2 h-4 w-4 bg-neutral-content' />
                    </div>
                    <p>Deploy on Vercel</p>
                  </A>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}