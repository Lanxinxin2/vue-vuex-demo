<template lang="html">
  <div class="">
    <vContainer father-component="item"></vContainer>
  </div>
</template>

<script>
//导入组件
import vContainer from '../components/Container'

export default {
  name: 'item',
  components: {
    vContainer
  }
}
</script>
