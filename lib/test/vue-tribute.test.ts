import { defineComponent, h } from 'vue'
import { render, screen } from '@testing-library/vue'
import { VueTribute } from '../'
import type Tribute from 'tributejs'
import userEvent from '@testing-library/user-event'

/* eslint-disable vue/one-component-per-file */

interface TributeElement extends HTMLElement {
  tributeInstance?: Tribute<any> // eslint-disable-line @typescript-eslint/no-explicit-any
}

describe('VueTribute', () => {
  const options = {
    trigger: '@',
    values: [
      { key: 'Collin Henderson', value: 'syropian' },
      { key: 'Sarah Drasner', value: 'sarah_edo' },
      { key: 'Evan You', value: 'youyuxi' },
      { key: 'Adam Wathan', value: 'adamwathan' },
    ],
    positionMenu: true,
  }

  test('attaches Tribute instance to the slot DOM node', async () => {
    const containerStub = defineComponent({
      setup() {
        return () => h('div', { id: 'container' }, [h(VueTribute, { options }, () => h('input', { type: 'text' }))])
      },
    })
    render(containerStub)
    const input = screen.getByRole('textbox')

    expect((input as TributeElement).tributeInstance).toBeTruthy()
  })

  test('The slot DOM node passes through custom Tribute-related events', async () => {
    const activeSpy = vi.fn()
    const notActiveSpy = vi.fn()
    const user = userEvent.setup()

    const containerStub = defineComponent({
      setup() {
        return () =>
          h('div', { id: 'container' }, [
            h(VueTribute, { options }, () =>
              h('input', { type: 'text', onTributeActiveTrue: activeSpy, onTributeActiveFalse: notActiveSpy })
            ),
          ])
      },
    })
    render(containerStub)
    const input = screen.getByRole('textbox')
    await user.type(input, '@')
    await user.type(input, '{Backspace}')

    expect(activeSpy).toHaveBeenCalledOnce()
    expect(notActiveSpy).toHaveBeenCalledOnce()
  })
})
