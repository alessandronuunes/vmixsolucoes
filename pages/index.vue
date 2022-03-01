<template>
  <div>
    
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
