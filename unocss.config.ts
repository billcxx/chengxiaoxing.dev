import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
    ['article-tags', 'flex gap-2 py-2'],
    ['tag','bg-slate-100 text-slate-700 text-sm p-2 py-1 rounded-md transition-all !py-0.5 hover:-translate-y-0.5'],
    ['icon', 'inline-flex w-6 h-6'],
    ['cta','p-1.5 px-2 bg-slate-50 border border-slate-200 font-semibold rounded-lg transition-all hover:-translate-y-0.5 focus:bg-slate-100 active:translate-y-0.5 active:shadow-inner'],
    ['article-list','flex flex-col gap-6'],
    ['article-item','pt-6 first-of-type:border-none border-t border-slate-200']
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})