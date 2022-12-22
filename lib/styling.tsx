import React, { useState } from 'react'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import { StyleRegistry, createStyleRegistry } from 'styled-jsx'

type ChildProps = { children: React.ReactNode }

export function useStyledComponentsRegistry() {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

  const styledComponentsFlushEffect = () => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  }

  function StyledComponentsRegistry({ children }: ChildProps) {
    if (typeof window !== 'undefined') return <>{children}</>
    return (
      <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
        {children as React.ReactChild}
      </StyleSheetManager>
    )
  }

  return [StyledComponentsRegistry, styledComponentsFlushEffect] as const
}

export function useStyledJsxRegistry() {
  const [jsxStyleRegistry] = useState(() => createStyleRegistry())

  function styledJsxFlushEffect() {
    const styles = jsxStyleRegistry.styles()
    jsxStyleRegistry.flush()
    return <>{styles}</>
  }

  function StyledJsxRegistry({ children }: ChildProps) {
    return <StyleRegistry registry={jsxStyleRegistry}>{children}</StyleRegistry>
  }

  return [StyledJsxRegistry, styledJsxFlushEffect] as const
}
