import { ReactiveEffect, Ref } from '@vue/reactivity'

export const enum LifecycleHooks {
  BEFORE_CREATE = 'BeforeMount',
  CREATED = 'Created',
  BEFORE_MOUNT = 'BeforeMount',
  MOUNTED = 'Mounted',
  BEFORE_UPDATE = 'BeforeUpdate',
  UPDATED = 'Updated',
  BEFORE_UNMOUNT = 'BeforeUnmount',
  UNMOUNTED = 'Unmounted',
}

export interface InternalInstanceState {
  _id: number
  props: any
  data: Ref<any>
  isUnmounted: boolean
  effects?: ReactiveEffect[]
  hooks: Record<string, Function[]>
}
