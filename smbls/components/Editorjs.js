export const Editorjs = {
  childExtend: {
    html: (el, s) => el.props.text || el.text,
    childExtend: {
      html: (el, s) => el.props.text || el.text,
    },
  },
  define: {
    $editorjs: (param, el) => {
      if (!param) return

      const {
        domqlConverterLib,
        editorJsToDOMQL,
        DomValueInterceptor
      } = window.require('@symbo.ls/editorjs')

      if (el.call('isObject', param) && param.blocks) param = param.blocks
      if (!el.call('isArray', param)) return

      const system = domqlConverterLib.getSystem()
      if (system) {
        const {
          interceptorApi
        } = system
        interceptorApi.addInterceptor(DomValueInterceptor, 'before')
      }

      const content = editorJsToDOMQL(param)

      const cloned = el.call('deepCloneWithExtend',content.asObjectArray)
      el.removeContent()
      return el.set(cloned)
    },
  },
  $editorjs: (el, s) => s.parse(),
};