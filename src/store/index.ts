import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { InjectionKey } from 'vue'

export interface State {
  count: number,
  foo: string
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore({
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})

// 定义自己的 `useStore` 组合式函数
export function useStore () {
  return baseUseStore(key)
}
