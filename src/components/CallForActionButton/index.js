import React from 'react'
import Button from '../button'
import useLang from '../../hooks/useLang'

export default function CallForActionButton(props) {
  const lang = useLang()
  const text = lang === 'ar' ? 'أحصل على نسخة' : "Schedule a Demo"

  return (
    <Button {...props} >
      {text}
    </Button>
  )
}
