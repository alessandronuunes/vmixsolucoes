export const NuxtLogo = () => import('../..\\components\\NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const Tutorial = () => import('../..\\components\\Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))
export const SiteChatmixFeatures = () => import('../..\\components\\site\\ChatmixFeatures.vue' /* webpackChunkName: "components/site-chatmix-features" */).then(c => wrapFunctional(c.default || c))
export const SiteCRMFeatures = () => import('../..\\components\\site\\CRMFeatures.vue' /* webpackChunkName: "components/site-c-r-m-features" */).then(c => wrapFunctional(c.default || c))
export const SiteFooterSite = () => import('../..\\components\\site\\FooterSite.vue' /* webpackChunkName: "components/site-footer-site" */).then(c => wrapFunctional(c.default || c))
export const SiteHeaderSite = () => import('../..\\components\\site\\HeaderSite.vue' /* webpackChunkName: "components/site-header-site" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
