declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const Component: DefineComponent<{}, {}, any>
  export default Component
}

declare module 'virtual:*' {
  const result: any
  export default result
}
declare const $message: any
declare const $confirm: (message: string) => Promise<boolean>
declare const $prompt: (message: string, defaultValue?: string) => Promise<string>
declare const $toast: (message: string, duration?: number) => void
declare const $loading: (message: string) => void
declare const $loadingHide: () => void
declare const $loadingSuccess: (message: string) => void
declare const $loadingError: (message: string) => void
declare const $loadingClear: () => void
declare const $loadingUpdate: (message: string) => void
declare const $loadingIndicator: () => boolean
declare const $loadingIndicatorHide: () => void
declare const $loadingIndicatorSuccess: (message: string) => void
declare const $loadingIndicatorError: (message: string) => void
declare const $loadingIndicatorClear: () => void
declare const $loadingIndicatorUpdate: (message: string) => void
declare const $loadingIndicatorIndeterminate: () => void
declare const $loadingIndicatorIndeterminateHide: () => void
declare const $loadingIndicatorIndeterminateSuccess: (message: string) => void
declare const $loadingIndicatorIndeterminateError: (message: string) => void
declare const $loadingIndicatorIndeterminateClear: () => void
declare const $loadingIndicatorIndeterminateUpdate: (message: string) => void
declare const $loadingIndicatorDeterminate: () => void
declare const $loadingIndicatorDeterminateHide: () => void
declare const $loadingIndicatorDeterminateSuccess: (message: string) => void
declare const $loadingIndicatorDeterminateError: (message: string) => void
declare const $loadingIndicatorDeterminateClear: () => void
declare const $loadingIndicatorDeterminateUpdate: (message: string) => void
declare const $loadingIndicatorClearAll: () => void
declare const $loadingIndicatorClearAllSuccess: (message: string) => void
declare const $loadingIndicatorClearAll
