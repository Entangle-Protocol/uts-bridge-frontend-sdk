import React, { useState } from 'react'
import CheckboxWithLabel from './CheckboxWithLabel'

const CheckboxWithLabelDifferentStates = () => {
  const [_, setCheckboxState] = useState<'undefined' | 'checked' | 'semichecked'>('undefined')

  //This function here just example, write your own according to case
  const handleCheckboxChange = () => {
    setCheckboxState((prevState) => {
      switch (prevState) {
        case 'undefined':
          return 'checked'
        case 'checked':
          return 'semichecked'
        case 'semichecked':
          return 'undefined'
        default:
          return 'undefined'
      }
    })
  }

  return (
    <div className='p-4'>
      <h3 className='text-white mb-5 text-lg'>Checkbox With Label States</h3>

      {/* Square Checkboxes with Labels */}
      <div className='mb-5'>
        <h4 className='text-white text-base mb-2'>Square Checkboxes</h4>
        <div className='flex flex-col space-y-2'>
          <div>
            <h5 className='text-white text-sm mb-1'>Undefined State</h5>
            <CheckboxWithLabel
              label='Label for Undefined State'
              value='undefined'
              onChange={handleCheckboxChange}
              shape='square'
            />
          </div>
          <div>
            <h5 className='text-white text-sm mb-1'>Checked State</h5>
            <CheckboxWithLabel
              label='Label for Checked State'
              value='checked'
              onChange={handleCheckboxChange}
              shape='square'
            />
          </div>
          <div>
            <h5 className='text-white text-sm mb-1'>Semichecked State</h5>
            <CheckboxWithLabel
              label='Label for Semichecked State'
              value='semichecked'
              onChange={handleCheckboxChange}
              shape='square'
            />
          </div>
        </div>
      </div>

      {/* Round Checkboxes with Labels */}
      <div className='mb-5'>
        <h4 className='text-white text-base mb-2'>Round Checkboxes</h4>
        <div className='flex flex-col space-y-2'>
          <div>
            <h5 className='text-white text-sm mb-1'>Undefined State</h5>
            <CheckboxWithLabel
              label='Label for Undefined State'
              value='undefined'
              onChange={handleCheckboxChange}
              shape='round'
            />
          </div>
          <div>
            <h5 className='text-white text-sm mb-1'>Checked State</h5>
            <CheckboxWithLabel
              label='Label for Checked State'
              value='checked'
              onChange={handleCheckboxChange}
              shape='round'
            />
          </div>
          <div>
            <h5 className='text-white text-sm mb-1'>Semichecked State</h5>
            <CheckboxWithLabel
              label='Label for Semichecked State'
              value='semichecked'
              onChange={handleCheckboxChange}
              shape='round'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default {
  title: 'uikit/CheckboxWithLabel',
  component: CheckboxWithLabelDifferentStates,
}

export const CheckboxWithLabelStory = () => <CheckboxWithLabelDifferentStates />
