import React from 'react'
import 'styles/home.scss'
function Home() {
  return (
    <main className='h-full w-full flex justify-center p-t-8'>
      <div className='h-100% w-90% flex justify-around'>
        <div className='h-100% w-45%'>
          <h2>Name</h2>
          <p>Hey, I am Anthony Fu, a fanatical open sourceror. Working at NuxtLabs.

            Creator of Vitest, Slidev, VueUse, UnoCSS, Elk, Type Challenges and others.
            Core team member of Vue, Nuxt and Vite.
            Team member of Windi CSS, wenyan-lang 文言 and Intlify.

            Dreaming up ideas and making them come true is where my passion lies. You can find my full projects list here. I have also started a 100-day challenge about design, compform, interactivity, and experimenting with new things on 100.antfu.me.</p>
        </div>
        <div className='h-100% w-45%'>
          <img src="/images/blog_index.jpg" className='w-full h-600px' alt="" />
        </div>
      </div>
    </main>
  )
}
export default Home
