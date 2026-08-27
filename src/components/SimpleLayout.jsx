import { Container } from '@/components/Container'

export function SimpleLayout({ title, intro, children }) {
  return (
    <Container className="interior-page">
      <header className="interior-page__header">
        <p className="eyebrow">COREY KOGAN / FIELD NOTES</p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </header>
      <div className="interior-page__body">{children}</div>
    </Container>
  )
}
