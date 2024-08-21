import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Start from "../../views/Start.vue";

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(Start)
    expect(wrapper.text()).toContain('Jan Brebeck')
  })
})
