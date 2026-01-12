type WorkProps = {
  title: string
  description: string
  tech: string[]
}

export default function WorkItem({
  title,
  description,
  tech,
}: WorkProps) {
  return (
    <article className="c-work">
      <h3 className="c-work__title">
        {title}
      </h3>

      <p className="c-work__description">
        {description}
      </p>

      <ul className="c-work__tech">
        {tech.map((item) => (
          <li key={item}>
            {item}
          </li>
        ))}
      </ul>
    </article>
  )
}
