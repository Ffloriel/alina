export function withStoryDescription(story: string) {
  return {
    parameters: {
      docs: {
        description: {
          story,
        },
      },
    },
  }
}
