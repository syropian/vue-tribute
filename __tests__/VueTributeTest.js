import { mount } from "@vue/test-utils"
import VueTribute from "../src"

describe("VueTribute", () => {
  let testData = {
    options: {
      values: [{ key: "Phil Heartman", value: "pheartman" }, { key: "Gordon Ramsey", value: "gramsey" }]
    }
  }
  it("has a name", () => {
    const wrapper = mount(VueTribute, {
      slots: {
        default: '<input type="text" placeholder="Testo" />'
      },
      propsData: testData
    })
    expect(wrapper.name()).toBe("vue-tribute")
  })

  it("accepts an options prop", () => {
    const wrapper = mount(VueTribute, {
      slots: {
        default: '<input type="text" placeholder="Testo" />'
      },
      propsData: testData
    })

    expect(wrapper.props()).toEqual(testData)
  })
})
