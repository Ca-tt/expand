import { reactive } from 'vue'
import { loadFromStorage } from '@/addons/storage/storage';

export let globalStyles = reactive({
  enabled: loadFromStorage('is-global-styles-on', true),
})
