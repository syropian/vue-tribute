import { mount } from '@vue/test-utils'
import VueTribute from '../src'

describe('VueTribute', () => {
  let testData = {
    options: {
      values: [
        { key: 'Phil Heartman', value: 'pheartman' },
        { key: 'Gordon Ramsey', value: 'gramsey' }
      ]
    }
  }
  it('has a name', () => {
    const wrapper = mount(VueTribute, {
      slots: {
        default: '<input type="text" placeholder="Testo" />'
      },
      propsData: testData
    })
    expect(wrapper.name()).toEqual('vue-tribute')
  })

  it('accepts an options prop', () => {
    const wrapper = mount(VueTribute, {
      slots: {
        default: '<input type="text" placeholder="Testo" />'
      },
      propsData: testData
    })

    expect(wrapper.props()).toEqual(testData)
  })

  it('updates property=values inside an options prop', () => {
    let initialProps = {
      options: {
        values: [
          { key: 'nothing', value: 'nothing' }
        ]
      }
    }
    const wrapper = mount(VueTribute, {
      slots: {
        default: '<input type="text" placeholder="Testo" />'
      },
      propsData: initialProps
    })

    expect(wrapper.props()).toEqual(initialProps)
    wrapper.setProps(testData)
    const $input = wrapper.find('input[type=text]')
    $input.element.value = '@'
    let evt = new Event('change')
    $input.element.dispatchEvent(evt)
    setTimeout(()=>{
      expect(document.querySelector('.tribute-container > ul').childNodes.length).toBe(2)
    }, 2000)
  })

  it('fires an event when there are no matches', () => {
    const wrapper = mount(VueTribute, {
      slots: {
        default: '<input type="text" placeholder="Testo" />'
      },
      propsData: testData
    })

    const $input = wrapper.find('input[type=text]')
    $input.element.value = '@foobar'
    const evt = new CustomEvent('tribute-no-match')
    $input.element.dispatchEvent(evt)

    expect(wrapper.emitted('tribute-no-match')).toBeTruthy()
  })

  it('fires an event when when the target Tribute element has been updated', () => {
    const wrapper = mount(VueTribute, {
      slots: {
        default: '<input type="text" placeholder="Testo" />'
      },
      propsData: testData
    })

    const $input = wrapper.find('input[type=text]')

    const evt = new CustomEvent('tribute-replaced')

    $input.element.dispatchEvent(evt)

    expect(wrapper.emitted('tribute-replaced')).toBeTruthy()
  })

  function CustomEvent(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined }
    var evt = document.createEvent('CustomEvent')
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail)
    return evt
  }
})
