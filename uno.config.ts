import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      ink: '#172033',
      paper: '#ffffff',
      lime: '#2563eb',
      mist: '#eff6ff',
      cobalt: '#1d4ed8',
      aqua: '#dbeafe',
    },
    fontFamily: {
      sans: '"Manrope", "Inter", ui-sans-serif, system-ui, sans-serif',
      display: '"DM Sans", "Manrope", ui-sans-serif, system-ui, sans-serif',
      mono: '"IBM Plex Mono", "SFMono-Regular", Consolas, monospace',
    },
  },
  shortcuts: {
    'page-shell': 'mx-auto w-full max-w-6xl px-5 sm:px-8',
    'section-pad': 'py-10 sm:py-14 lg:py-18',
    'eyebrow': 'font-mono text-[11px] font-600 uppercase tracking-[0.18em]',
    'section-title':
      'font-display text-3xl font-650 tracking-[-0.035em] leading-[1.08] text-ink sm:text-4xl lg:text-[2.75rem]',
    'body-copy': 'text-base leading-7 text-ink/68 sm:text-lg sm:leading-8',
    'soft-card': 'rounded-lg border border-blue-200 bg-white',
    'focus-ring':
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:ring-offset-3',
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.15,
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
