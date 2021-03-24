export const state = () => ({
  class_key: ''
})

export const mutations = {
  ChangeClassKey(state, key) {
    this.state.class_key = key
  }
}
