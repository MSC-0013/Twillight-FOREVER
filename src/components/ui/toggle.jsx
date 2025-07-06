import { Toggle } from './toggle'

export function Example() {
  const [enabled, setEnabled] = React.useState(false)

  return (
    <Toggle
      variant="outline"
      size="lg"
      pressed={enabled}
      onPressedChange={setEnabled}
      aria-label="Toggle feature"
    >
      {enabled ? "Enabled" : "Disabled"}
    </Toggle>
  )
}
