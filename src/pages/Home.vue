<template lang="html">
  <div class="">
    <vContainer father-component="home"></vContainer>
  </div>
</template>

<script>
//导入组件
import vContainer from '../components/Container'

export default {
  name: 'home',
  components: {
    vContainer
  }
}
</script>
