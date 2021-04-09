export const state = () => ({
  lang: "en"
})

export const mutations = {
  changeLang(state, payload) {
    state.lang = payload
  }
}