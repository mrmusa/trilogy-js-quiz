import React from 'react'
import xss from 'xss'

const myxss = new xss.FilterXSS({
  whiteList: {
    code: []
  },
  stripIgnoreTag: true, // filter out all HTML not in the whilelist
});

export const Question = ({ text }) => (
  <div dangerouslySetInnerHTML={{
    __html: myxss.process(text)
  }} />
)
