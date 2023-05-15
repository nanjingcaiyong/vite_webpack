<template>
  {{ $t('message') }}
  <hello-world></hello-world>
  <div class="flex">
    <button @click="setLangCodition('zhCN')">
      切换中文
    </button>
    <button @click="setLangCodition('en')">
      切换英语
    </button>
    <button @click="setLangCodition('de')">
      切换德语
    </button>
    <button @click="setLangCodition('fr')">
      切换法语
    </button>
  </div>
</template>
<script>
import { useI18n } from 'vue-i18n';
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.jsx'
export default defineComponent({
  components: {
    HelloWorld
  },
  setup () {
    const { locale } = useI18n();
    const setLangCodition = (val) => {
      locale.value = val;
      localStorage.setItem('language', locale.value);
    };
    return {
      setLangCodition
    };
  }
});
</script>