/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react'

export const App = () => {
  const theme = useTheme()

  return (
    <div css={{
      color: theme.colors.main
    }}>
      app
    </div>
  )}
