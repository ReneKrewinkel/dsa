export type TabBarContent = {
  label: string
  icon: string
  action: () => void
}[]

export interface TabBarInterface {
  content: TabBarContent[]
  testID?: string
}
