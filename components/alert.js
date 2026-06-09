import Container from './container'

export default function Alert({ preview }) {
  if (!preview) return null

  return (
    <div className="border-b border-primary-700 bg-primary-600 text-white">
      <Container>
        <div className="py-2 text-center text-sm">
          This is page is a preview.{' '}
          <a
            href="/api/exit-preview"
            className="underline transition-colors hover:text-primary-100"
          >
            Click here
          </a>{' '}
          to exit preview mode.
        </div>
      </Container>
    </div>
  )
}
