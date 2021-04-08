export const state = () => ({
  navbar_istop: true
})

export const mutations = {
  ChangeClassFalse(state, key) {
    this.state.navbar_istop = false
  },
  ChangeClassTrue(state, key) {
    this.state.navbar_istop = true
  }
}
