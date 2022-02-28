<template>
  <div>
    <CookieControl locale="pt">
      <template v-slot:bar>
        <h3>Bar title</h3>
        <p>Bar description (you can use $cookies.text.barDescription)</p>
        <n-link>Go somewhere</n-link>
      </template>

      <template v-slot:modal>
        <h3>Modal title</h3>
        <p>Modal description</p>
      </template>
    </CookieControl>
    <HeaderSite />
    <ChatmixFeatures />
    <CRMFeatures />
    <Contact />
    <FooterSite />
  </div>
</template>

<script>
import HeaderSite from './../components/site/HeaderSite'
import ChatmixFeatures from './../components/site/ChatmixFeatures'
import CRMFeatures from './../components/site/CRMFeatures'
import Contact from './../components/site/ContactFeatures'

import FooterSite from './../components/site/FooterSite'

export default {
  name: 'IndexPage',
  components: { HeaderSite, ChatmixFeatures, CRMFeatures, Contact, FooterSite }
}
</script>
