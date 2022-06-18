import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  ads: [],
  posts: [],
  activeProfile: {},
  activeProfilePosts: [],
  currentPage: 1,
  totalPages: 1
})
